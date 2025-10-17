import { API_BASE_URL } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

interface Book {
  id: number;
  title: string;
  slug: string;
  image: string;
  author: { name: string };
  ratings_avg_rating: number;
}

interface BookGridProps {
  books: Book[];
}

export default function BookGrid({ books }: BookGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book, index) => (
        <Link
          key={index}
          href={`/books/${book.slug}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
        >
          <Image
            width={300}
            height={400}
            className="w-full h-64 object-cover"
            src={API_BASE_URL + "/" + book.image}
            alt={book.title}
          />
          <div className="p-4">
            <h5
              className="text-lg font-semibold"
              style={{ fontFamily: "var(--font-urbanist-semibold)" }}
            >
              {book.title}
            </h5>
            <p className="text-gray-600 mt-1 mb-2">{book.author.name}</p>
            <div className="flex mt-1">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`${i < book.ratings_avg_rating ? "fas" : "far"} fa-star mr-1`}
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