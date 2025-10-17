"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FilterSidebar from "@/components/collections/FilterSidebar";
import BookGrid from "@/components/collections/BookGrid";
import SortDropdown from "@/components/collections/SortDropdown";
import Pagination from "@/components/collections/Pagination";
import { API_BASE_URL } from "@/lib/api";
import { useSearchParams } from "next/navigation";

interface Book {
  id: number;
  title: string;
  slug: string;
  image: string;
  author: { name: string };
  ratings_avg_rating: number;
}

interface Genre {
  id: number;
  name: string;
}

const STATIC_LANGUAGES = [
  { code: "id", name: "Indonesian" },
  { code: "en", name: "English" },
  { code: "zh", name: "Chinese" },
  { code: "ko", name: "Korean" },
  { code: "ja", name: "Japanese" },
];

export default function CollectionsPage() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") ?? "";

  const [books, setBooks] = useState<Book[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [search, setSearch] = useState(initialSearch);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [sort, setSort] = useState<string>("latest");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalBooks, setTotalBooks] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);

  // Fetch genres once
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/genres`)
      .then((res) => res.json())
      .then((data) => setGenres(data.genres || []));
  }, []);

  // Fetch books whenever filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.append("search", search);
    if (selectedGenres.length > 0)
      selectedGenres.forEach((g) => params.append("genres[]", g));
    if (selectedLanguages.length > 0)
      selectedLanguages.forEach((l) => params.append("languages[]", l));
    if (sort) params.append("sort", sort);
    params.append("page", currentPage.toString());
    params.append("perPage", "12");

    fetch(`${API_BASE_URL}/api/books?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setBooks(data.books.data || []);
        setTotalBooks(data.meta?.total ?? 0);
        setTotalPages(data.meta?.last_page ?? 1);
      });
  }, [search, selectedGenres, selectedLanguages, sort, currentPage]);

  const startIndex = (currentPage - 1) * 12 + 1;
  const endIndex = Math.min(currentPage * 12, totalBooks);

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
              <FilterSidebar
                genres={genres}
                languages={STATIC_LANGUAGES}
                search={search}
                setSearch={setSearch}
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                selectedLanguages={selectedLanguages}
                setSelectedLanguages={setSelectedLanguages}
              />
            </div>

            {/* Main Content */}
            <div className="xl:col-span-9 lg:col-span-7 col-span-12">
              <div className="flex justify-between items-center mb-4">
                <h2
                  className="font-bold text-[24px]"
                  style={{ fontFamily: "georgia, serif" }}
                >
                  Book Collections
                </h2>
                <SortDropdown value={sort} onChange={setSort} />
              </div>

              {/* Results Info */}
              <p
                className="mt-5 mb-2.5"
                style={{ fontFamily: "var(--font-urbanist)" }}
              >
                Showing {startIndex} – {endIndex} books out of {totalBooks} for{" "}
                <span
                  style={{
                    fontFamily: "var(--font-urbanist-bold)",
                    color: "#e45f65",
                  }}
                >
                  {search || selectedGenres.length > 0 || selectedLanguages.length > 0
                    ? "Your filters"
                    : "All Books"}
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