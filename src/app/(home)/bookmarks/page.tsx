"use client";

import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookSwiper from "@/components/bookmarks/BookSwiper";
import { api } from "@/lib/axios";
import Cookies from "js-cookie";

interface Book {
  id: number;
  slug: string;
  title: string;
  image: string;
  ratings_avg_rating?: number;
  author: {
    name: string;
  };
}

const lastReading = [
  {
    href: "/books/the-outsider",
    img: "/images/books/the-outsider.jpeg",
    title: "The Outsider",
    author: "Stephen King",
    rating: 4,
  },
  {
    href: "/books/the-shining",
    img: "/images/books/the-shining.jpeg",
    title: "The Shining",
    author: "Stephen King",
    rating: 4,
  },
];

export default function BookmarksPage() {
  const [savedBooks, setSavedBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  const savedPrevRef = useRef<HTMLButtonElement | null>(null);
  const savedNextRef = useRef<HTMLButtonElement | null>(null);
  const lastPrevRef = useRef<HTMLButtonElement | null>(null);
  const lastNextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const token = Cookies.get("token") || localStorage.getItem("token");
        if (!token) return;

        const res = await api.get("/api/wishlist-books", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setSavedBooks(res.data.wishlist_books);
      } catch (err) {
        console.error("Failed to load wishlist:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  const formattedSavedBooks = savedBooks.map((book) => ({
    href: `/books/${book.slug}`,
    img: `${process.env.NEXT_PUBLIC_BACKEND_URL}/${book.image}`,
    title: book.title,
    author: book.author?.name ?? "-",
    rating: Math.round(book.ratings_avg_rating ?? 0),
  }));

  return (
    <>
      <div className="flex">
        <Sidebar />
        <MobileNav />

        <main className="ml-auto container mx-5 sm:mx-auto relative z-10 mb-[100px]">
          <Navbar />

          <div className="text-center">
            <h1 className="font-[georgia] font-bold sm:text-[50px] text-[32px]">
              Keep the story going...
            </h1>
            <p className="mt-[30px] mb-[50px] text-textColor/80">
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

            {loading ? (
              <p className="text-center text-gray-500">Loading your saved books...</p>
            ) : formattedSavedBooks.length === 0 ? (
              <p className="text-center text-gray-500">No saved books yet.</p>
            ) : (
              <BookSwiper
                books={formattedSavedBooks}
                prevRef={savedPrevRef}
                nextRef={savedNextRef}
                swiperClass="book-saved-swiper"
              />
            )}
          </section>

          {/* Last Reading */}
          <section>
            <div className="flex justify-between mb-10">
              <h2 className="font-[georgia] font-bold text-[28px]">
                Last Reading
              </h2>
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