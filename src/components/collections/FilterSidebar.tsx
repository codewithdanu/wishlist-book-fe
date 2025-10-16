"use client";

import { useState } from "react";

const genres = [
  "Fiction",
  "Nonfiction",
  "Romance",
  "Fantasy",
  "Science Fiction",
  "Horror",
  "Mystery",
  "Thriller",
  "Comedy",
  "History",
  "Psychology",
  "Family",
  "Adventure",
  "Drama",
  "Action",
  "Slice of Life",
  "Kingdom",
];

const languages = ["Indonesian", "English", "Japanese", "Korean"];

export default function FilterSidebar() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const toggleLanguage = (language: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((l) => l !== language)
        : [...prev, language]
    );
  };

  return (
    <aside className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3
          className="font-bold text-xl"
          style={{ fontFamily: "georgia, serif" }}
        >
          Filter
        </h3>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          style={{ fontFamily: "var(--font-urbanist-medium)" }}
        >
          Apply
        </button>
      </div>

      {/* Genres Filter */}
      <details className="mb-4" open>
        <summary
          className="cursor-pointer font-medium py-2"
          style={{ fontFamily: "var(--font-urbanist-medium)" }}
        >
          Genres
        </summary>
        <ul className="mt-2 space-y-2">
          {genres.map((genre) => (
            <li key={genre}>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox text-red-500"
                  checked={selectedGenres.includes(genre)}
                  onChange={() => toggleGenre(genre)}
                />
                <span>{genre}</span>
              </label>
            </li>
          ))}
        </ul>
      </details>

      {/* Languages Filter */}
      <details className="mb-4">
        <summary
          className="cursor-pointer font-medium py-2"
          style={{ fontFamily: "var(--font-urbanist-medium)" }}
        >
          Languages
        </summary>
        <ul className="mt-2 space-y-2">
          {languages.map((language) => (
            <li key={language}>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox text-red-500"
                  checked={selectedLanguages.includes(language)}
                  onChange={() => toggleLanguage(language)}
                />
                <span>{language}</span>
              </label>
            </li>
          ))}
        </ul>
      </details>
    </aside>
  );
}