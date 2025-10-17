import { API_BASE_URL } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

interface Genre {
  id: number;
  name: string;
}

interface Book {
  id: number;
  title: string;
  slug: string;
  image: string;
  author: { name: string };
  ratings_avg_rating: number;
  genres?: Genre[];
}

interface BookGridProps {
  books: Book[];
}

export default function BookGrid({ books }: BookGridProps) {
  if (!books || books.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-20 text-center">
        <Image
          src="/images/book-not-found.png"
          alt="No books found"
          width={400}
          height={400}
          className="mb-6 opacity-80"
        />
        <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "georgia, serif" }}>
          Book Not Found
        </h3>
        <p className="text-gray-500 max-w-md">
          We couldn&apos;t find any books that match your search or filters.  
          Try adjusting your filters or searching for something else.
        </p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <Link
          key={book.id}
          href={`/books/${book.slug}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col"
        >
          {/* Cover */}
          <Image
            width={300}
            height={400}
            className="w-full h-64 object-cover"
            src={`${API_BASE_URL}/${book.image}`}
            alt={book.title}
          />

          {/* Info */}
          <div className="p-4 flex flex-col flex-1">
            <h5
              className="text-lg font-semibold line-clamp-2"
              style={{ fontFamily: "var(--font-urbanist-semibold)" }}
            >
              {book.title}
            </h5>

            <p className="text-gray-600 mt-1 mb-2 text-sm line-clamp-1">
              {book.author.name}
            </p>

            {/* Genre Badges */}
            {book.genres && book.genres.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-2">
                {book.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="text-xs bg-mainColor/10 text-mainColor font-medium px-2 py-1 rounded-full"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            {/* Rating */}
            <div className="flex mt-auto">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`${i < Math.round(book.ratings_avg_rating) ? "fas" : "far"} fa-star mr-1`}
                  style={{ color: "#e45f65" }}
                ></i>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}