import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import StatsCounter from "@/components/StatsCounter";
import GenreSwiper from "@/components/GenreSwiper";
import Footer from "@/components/Footer";

const popularBooks = [
  {
    title: "Harry Potter and The Cursed Child",
    author: "J.K. Rowling",
    image: "/images/books/harry-potter-and-the-cursed-child.jpg",
    rating: 5,
  },
  {
    title: "The Shining",
    author: "Stephen King",
    image: "/images/books/the-shining.jpeg",
    rating: 5,
  },
  {
    title: "Koala Kumal",
    author: "Raditya Dika",
    image: "/images/books/koala-kumal.jpg",
    rating: 4,
  },
  {
    title: "Laut Bercerita",
    author: "Leila S. Chudori",
    image: "/images/books/laut-bercerita.jpg",
    rating: 4,
  },
];

const authors = [
  { name: "J.K. Rowling", books: 24, image: "/images/authors/jk-rowling.svg" },
  { name: "Stephen King", books: 65, image: "/images/authors/stephen-king.svg" },
  { name: "Suzzane Collins", books: 71, image: "/images/authors/suzanne-collins.svg" },
  { name: "Raditya Dika", books: 17, image: "/images/authors/raditya-dika.svg" },
  { name: "Leila S. Chudori", books: 10, image: "/images/authors/leila-s-chudori.svg" },
  { name: "Ernest Prakasa", books: 5, image: "/images/authors/ernest-prakasa.svg" },
];

export default function Home() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <MobileNav />

        <main className="container mx-5 sm:mx-auto relative z-10">
          <Navbar />

          {/* Hero Section */}
          <header className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 lg:mt-0 mt-10">
            <div className="flex flex-col justify-center">
              <h1 className="xl:text-[56px] text-[45px] font-[georgia] font-bold">
                A Book Can
              </h1>
              <h1 className="xl:text-[56px] text-[45px] font-[georgia] font-bold">
                Change Your Life
              </h1>
              <p className="my-[30px]">
                Novex is an online platform that provides easy and convenient access to read novels.
                With a diverse and continuously updated collection of novels, Novex allows users to
                enjoy various genres and engaging stories at their fingertips. Designed for user
                convenience, the Novex website offers a user-friendly interface, intuitive
                navigation, and search features that make it easy for readers to find their favorite
                novels quickly.
              </p>
              <Link href="/collections" className="btn text-center">
                Explore Now
              </Link>
            </div>
            <div className="right-side lg:block hidden">
              <Image
                width={600}
                height={600}
                src="/images/header-home.png"
                className="w-full"
                alt="Header"
                priority
              />
            </div>
          </header>

          {/* Stats Counter */}
          <StatsCounter />

          {/* Genre Swiper */}
          <GenreSwiper />

          {/* Popular Books */}
          <section>
            <h1 className="font-[georgia] font-bold text-[32px] mb-10">
              Popular Now
            </h1>
            <div className="grid lg:grid-cols-4 xs:grid-cols-2 grid-cols-1 gap-10">
              {popularBooks.map((book) => (
                <Link
                  key={book.title}
                  className="hover:-translate-y-2 duration-500"
                  href="/detail"
                >
                  <Image
                    width={300}
                    height={400}
                    className="w-full rounded"
                    src={book.image}
                    alt={book.title}
                  />
                  <h5 className="font-urbanistSemibold text-[18px] mt-2.5">
                    {book.title}
                  </h5>
                  <p className="text-textColor/80 mt-1.5 mb-2.5">
                    {book.author}
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`${
                          i < book.rating ? "fas" : "far"
                        } fa-star mr-1 text-mainColor`}
                      ></i>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                href="/collections"
                className="text-center btn bg-textColor text-lightMode focus:ring-textColor/50 mt-16"
              >
                Show All
              </Link>
            </div>
          </section>

          {/* Authors Section */}
          <section>
            <h1 className="font-[georgia] font-bold text-[32px] mb-10">
              New Author Collection
            </h1>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10">
              {authors.map((author) => (
                <div
                  key={author.name}
                  className="flex 2xs:flex-row flex-col 2xs:items-center items-start duration-300 hover:brightness-90"
                >
                  <Image
                    width={150}
                    height={150}
                    className="mr-5 rounded 2xs:w-[150px] w-full 2xl:mb-0 mb-2"
                    src={author.image}
                    alt={author.name}
                  />
                  <div>
                    <h5 className="font-urbanistSemibold text-[20px]">
                      {author.name}
                    </h5>
                    <p className="text-textColor/80 mt-3 mb-5">
                      {author.books} books have been published
                    </p>
                    <Link
                      href="/detail"
                      className="text-center text-[12px] btn bg-textColor text-lightMode focus:ring-textColor/50 mt-16"
                    >
                      Read Book Series
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}