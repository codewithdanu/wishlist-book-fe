"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Swiper from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";

const genres = [
  { name: "Fiction", image: "/images/genres/fiction.svg" },
  { name: "Nonfiction", image: "/images/genres/nonfiction.svg" },
  { name: "Romance", image: "/images/genres/romance.svg" },
  { name: "Fantasy", image: "/images/genres/fantasy.svg" },
  { name: "Sci-Fi", image: "/images/genres/sci-fi.svg" },
  { name: "Horror", image: "/images/genres/horror.svg" },
  { name: "Mystery", image: "/images/genres/mystery.svg" },
  { name: "Thriller", image: "/images/genres/thriller.svg" },
  { name: "Comedy", image: "/images/genres/comedy.svg" },
  { name: "History", image: "/images/genres/history.svg" },
  { name: "Psychology", image: "/images/genres/psychology.svg" },
  { name: "Family", image: "/images/genres/family.svg" },
  { name: "Adventure", image: "/images/genres/adventure.svg" },
  { name: "Drama", image: "/images/genres/drama.svg" },
  { name: "Action", image: "/images/genres/action.svg" },
  { name: "Slice of Life", image: "/images/genres/slice-of-life.svg" },
  { name: "Kingdom", image: "/images/genres/kingdom.svg" },
];

export default function GenreSwiper() {
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Swiper) {
      const Swiper = window.Swiper;
      
      swiperRef.current = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        },
      });
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  return (
    <section>
      <h1 className="font-[georgia] font-bold text-[32px]">
        Find Your Favorite Genres
      </h1>
      
      <div className="swiper mySwiper">
        <div className="swiper-wrapper pb-[50px] pt-10">
          {genres.map((genre) => (
            <div key={genre.name} className="swiper-slide hover:-translate-y-2 duration-500">
              <Link href="/collections" className="block">
                <Image
                  width={200}
                  height={200}
                  className="rounded w-full"
                  src={genre.image}
                  alt={genre.name}
                />
                <h5 className="font-urbanistSemibold text-[18px] mt-2.5 text-center">
                  {genre.name}
                </h5>
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      <button className="custom-swiper-button-prev" aria-label="Previous">
        <ChevronLeft className="text-mainColor" />
      </button>
      <button className="custom-swiper-button-next" aria-label="Next">
        <ChevronRight className="text-mainColor" />
      </button>
    </section>
  );
}