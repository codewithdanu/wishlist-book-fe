"use client";

import "swiper/css";
import "swiper/css/navigation";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import type SwiperCore from "swiper";
import useAuthGuard from "@/hooks/useAuthGuard";

declare global {
  interface Window {
    Swiper: typeof SwiperCore;
  }
}

interface Book {
  href: string;
  img: string;
  title: string;
  author: string;
  rating: number;
}

interface BookSwiperProps {
  books: Book[];
  prevRef: React.RefObject<HTMLButtonElement | null>;
  nextRef: React.RefObject<HTMLButtonElement | null>;
  swiperClass: string;
}

// Komponen untuk menampilkan rating bintang
function Stars({ value }: { value: number }) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < value;
        return (
          <Star
            key={i}
            className="w-4 h-4 mr-1 text-mainColor"
            fill={filled ? "currentColor" : "none"}
          />
        );
      })}
    </div>
  );
}

export default function BookSwiper({
  books,
  prevRef,
  nextRef,
  swiperClass,
}: BookSwiperProps) {
  useAuthGuard();

  const swiperInstanceRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
  if (typeof window !== "undefined" && window.Swiper) {
    const Swiper = window.Swiper;
    swiperInstanceRef.current = new Swiper(`.${swiperClass}`, {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: nextRef.current,
        prevEl: prevRef.current,
      },
      breakpoints: {
        640: { slidesPerView: 3, spaceBetween: 20 },
        768: { slidesPerView: 4, spaceBetween: 30 },
        1024: { slidesPerView: 5, spaceBetween: 30 },
        1280: { slidesPerView: 6, spaceBetween: 30 },
      },
    });
  }

  return () => {
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.destroy();
    }
  };
}, [prevRef, nextRef, swiperClass]);

  return (
    <div className={`swiper ${swiperClass}`}>
      <div className="swiper-wrapper pb-[50px]">
        {books.map((book) => (
          <div key={book.href} className="swiper-slide hover:-translate-y-2 duration-500">
            <Link href={book.href} className="block">
              <Image
                width={200}
                height={200}
                className="w-full rounded"
                src={book.img}
                alt={book.title}
              />
              <h5 className="font-urbanistSemibold text-[18px] mt-2.5">
                {book.title}
              </h5>
              <p className="text-textColor/80 mt-1.5 mb-2.5">
                {book.author}
              </p>
              <Stars value={book.rating} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
