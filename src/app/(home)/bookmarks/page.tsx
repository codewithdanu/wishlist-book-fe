"use client";

import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import BookSwiper from "@/components/bookmarks/BookSwiper";

const bookSaved = [
  {
    href: "/book/harry-potter-and-the-philosopher-stone",
    img: "/images/books/harry-potter-and-the-philosopher-stone.jpg",
    title: "Harry Potter and The Philosopher Stone",
    author: "J.K. Rowling",
    rating: 5,
  },
  {
    href: "/book/harry-potter-and-the-chamber-secrets",
    img: "/images/books/harry-potter-and-the-chamber-secrets.jpg",
    title: "Harry Potter and The Chamber of Secrets",
    author: "J.K. Rowling",
    rating: 5,
  },
  {
    href: "/book/harry-potter-and-the-prisoner-of-azkaban",
    img: "/images/books/harry-potter-and-the-prisoner-of-azkaban.jpg",
    title: "Harry Potter and The Prisoner of Azkaban",
    author: "J.K. Rowling",
    rating: 5,
  },
  {
    href: "/book/harry-potter-and-the-goblet-of-fire",
    img: "/images/books/harry-potter-and-the-goblet-of-fire.jpg",
    title: "Harry Potter and The Goblet of Fire",
    author: "J.K. Rowling",
    rating: 5,
  },
  {
    href: "/book/the-outsider",
    img: "/images/books/the-outsider.jpeg",
    title: "The Outsider",
    author: "Stephen King",
    rating: 4,
  },
  {
    href: "/book/the-shining",
    img: "/images/books/the-shining.jpeg",
    title: "The Shining",
    author: "Stephen King",
    rating: 4,
  },
];

const lastReading = [
  {
    href: "/book/the-outsider",
    img: "/images/books/the-outsider.jpeg",
    title: "The Outsider",
    author: "Stephen King",
    rating: 4,
  },
  {
    href: "/book/the-shining",
    img: "/images/books/the-shining.jpeg",
    title: "The Shining",
    author: "Stephen King",
    rating: 4,
  },
  {
    href: "/book/fairy-tale",
    img: "/images/books/fairy-tale.jpeg",
    title: "Fairy Tale",
    author: "Stephen King",
    rating: 5,
  },
  {
    href: "/book/harry-potter-and-the-philosopher-stone",
    img: "/images/books/harry-potter-and-the-philosopher-stone.jpg",
    title: "Harry Potter and The Philosopher Stone",
    author: "J.K. Rowling",
    rating: 5,
  },
  {
    href: "/book/harry-potter-and-the-chamber-secrets",
    img: "/images/books/harry-potter-and-the-chamber-secrets.jpg",
    title: "Harry Potter and The Chamber of Secrets",
    author: "J.K. Rowling",
    rating: 5,
  },
  {
    href: "/book/harry-potter-and-the-prisoner-of-azkaban",
    img: "/images/books/harry-potter-and-the-prisoner-of-azkaban.jpg",
    title: "Harry Potter and The Prisoner of Azkaban",
    author: "J.K. Rowling",
    rating: 5,
  },
  {
    href: "/book/manusia-setengah-salmon",
    img: "/images/books/manusia-setengah-salmon.jpg",
    title: "Manusia Setengah Salmon",
    author: "Raditya Dika",
    rating: 4,
  },
  {
    href: "/book/marmut-merah-jambu",
    img: "/images/books/marmut-merah-jambu.jpg",
    title: "Marmut Merah Jambu",
    author: "Raditya Dika",
    rating: 5,
  },
  {
    href: "/book/laut-bercerita",
    img: "/images/books/laut-bercerita.jpg",
    title: "Laut Bercerita",
    author: "Leila S. Chudori",
    rating: 4,
  },
  {
    href: "/book/the-hunger-games",
    img: "/images/books/the-hunger-games.jpeg",
    title: "The Hunger Games",
    author: "Suzanne Collins",
    rating: 4,
  },
];

export default function BookmarksPage() {
  const savedPrevRef = useRef<HTMLButtonElement | null>(null);
  const savedNextRef = useRef<HTMLButtonElement | null>(null);
  const lastPrevRef = useRef<HTMLButtonElement | null>(null);
  const lastNextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <MobileNav />

        {/* Main */}
        <main className="ml-auto container mx-5 sm:mx-auto relative z-10 mb-[100px]">
          <Navbar />

          <div className="text-center">
            <h1 className="font-[georgia] font-bold sm:text-[50px] text-[32px]">
              Keep the story going...
            </h1>
            <p className="mt-[30px] mb-[50px] text-textColor/80/80">
              Don’t let the story end just yet. Continue reading your last book <br />
              and immerse yourself in the world of literature
            </p>
          </div>

          <div className="w-full h-[1px] bg-textColor/50 mb-[50px]" />

          {/* Book Saved */}
          <section className="mb-[100px]">
            <div className="flex justify-between mb-10">
              <h2 className="font-[georgia] font-bold text-[28px]">
                Book Saved
              </h2>
              {/* Tombol navigasi */}
              <div className="flex items-center gap-2">
                <button
                  ref={savedPrevRef}
                  className="p-1 rounded hover:bg-mainColor/10"
                  aria-label="Prev saved books"
                >
                  <ChevronLeft className="text-mainColor w-5 h-5" />
                </button>
                <button
                  ref={savedNextRef}
                  className="p-1 rounded hover:bg-mainColor/10"
                  aria-label="Next saved books"
                >
                  <ChevronRight className="text-mainColor w-5 h-5" />
                </button>
              </div>
            </div>

            {/* book saved swiper */}
            <BookSwiper
                books={bookSaved}
                prevRef={savedPrevRef}
                nextRef={savedNextRef}
                swiperClass="book-saved-swiper"
              />
          </section>

          {/* Last Reading */}
          <section>
             <div className="flex justify-between mb-10">
              <h2 className="font-[georgia] font-bold text-[28px]">
                Last Reading
              </h2>
              {/* Tombol navigasi */}
              <div className="flex items-center gap-2">
                <button
                  ref={lastPrevRef}
                  className="p-1 rounded hover:bg-mainColor/10"
                  aria-label="Prev last reading"
                >
                  <ChevronLeft className="text-mainColor w-5 h-5" />
                </button>
                <button
                  ref={lastNextRef}
                  className="p-1 rounded hover:bg-mainColor/10"
                  aria-label="Next last reading"
                >
                  <ChevronRight className="text-mainColor w-5 h-5" />
                </button>
              </div>
            </div>

            {/* last reading swipe */}
            <BookSwiper
              books={lastReading}
              prevRef={lastPrevRef}
              nextRef={lastNextRef}
              swiperClass="last-reading-swiper"
            />
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}