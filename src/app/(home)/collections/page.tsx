"use client"

import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FilterSidebar from "@/components/collections/FilterSidebar";
import BookGrid from "@/components/collections/BookGrid";
import SortDropdown from "@/components/collections/SortDropdown";
import Pagination from "@/components/collections/Pagination";
import { useState } from "react";

const books = [
  { title: "Harry Potter and The Philosopher Stone", author: "J.K. Rowling", image: "/images/books/harry-potter-and-the-philosopher-stone.jpg", rating: 5 },
  { title: "Harry Potter and The Chamber of Secrets", author: "J.K. Rowling", image: "/images/books/harry-potter-and-the-chamber-secrets.jpg", rating: 5 },
  { title: "Harry Potter and The Prisoner of Azkaban", author: "J.K. Rowling", image: "/images/books/harry-potter-and-the-prisoner-of-azkaban.jpg", rating: 5 },
  { title: "Harry Potter and The Goblet of Fire", author: "J.K. Rowling", image: "/images/books/harry-potter-and-the-goblet-of-fire.jpg", rating: 5 },
  { title: "Harry Potter and The Order of the Phoenix", author: "J.K. Rowling", image: "/images/books/harry-potter-and-the-order-of-the-phoenix.jpg", rating: 5 },
  { title: "Harry Potter and The Half Blood Prince", author: "J.K. Rowling", image: "/images/books/harry-potter-and-the-half-blood-prince.jpg", rating: 5 },
  { title: "Harry Potter and The Deathly Hallows", author: "J.K. Rowling", image: "/images/books/harry-potter-and-the-deathly-hallows.jpg", rating: 5 },
  { title: "Harry Potter and The Cursed Child", author: "J.K. Rowling", image: "/images/books/harry-potter-and-the-cursed-child.jpg", rating: 5 },
  { title: "It", author: "Stephen King", image: "/images/books/it.jpeg", rating: 5 },
  { title: "Fairy Tale", author: "Stephen King", image: "/images/books/fairy-tale.jpeg", rating: 5 },
  { title: "The Shining", author: "Stephen King", image: "/images/books/the-shining.jpeg", rating: 4 },
  { title: "The Outsider", author: "Stephen King", image: "/images/books/the-outsider.jpeg", rating: 4 },
];

export default function CollectionsPage() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalBooks = 20;
    const itemsPerPage = 12;
    const totalPages = Math.ceil(totalBooks / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, totalBooks);

  
  return (
    <>
      <div className="flex">
        <Sidebar />
        <MobileNav />

        <main className="container mx-5 sm:mx-auto relative z-10 mb-[100px]">
          <Navbar />

          <div className="grid grid-cols-12 gap-12">
            {/* Filter Sidebar */}
            <div className="xl:col-span-3 lg:col-span-5 col-span-12">
              <FilterSidebar />
            </div>

            {/* Main Content */}
            <div className="xl:col-span-9 lg:col-span-7 col-span-12">
              {/* Header with Sort */}
              <div className="flex justify-between items-center mb-4">
                <h2
                  className="font-bold text-[24px]"
                  style={{ fontFamily: "georgia, serif" }}
                >
                  Book Collections
                </h2>
                <SortDropdown />
              </div>

              {/* Results Info */}
              <p
                className="mt-5 mb-2.5"
                style={{ fontFamily: "var(--font-urbanist)" }}
              >
                Showing 1 – 12 books out of a total of 20 for
                {" "}
                <span
                  style={{
                    fontFamily: "var(--font-urbanist-bold)",
                    color: "#e45f65",
                  }}
                >
                  All Books
                </span>
              </p>

              {/* Book Grid */}
              <BookGrid books={books} />

              {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                startIndex={startIndex}
                endIndex={endIndex}
                totalBooks={totalBooks}
                onPageChange={setCurrentPage}
            />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
