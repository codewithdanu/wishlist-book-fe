"use client";

import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
  Star,
  Heart,
  Bookmark,
  Share2,
  Instagram,
  Twitter,
  Facebook,
  MessageCircle,
  Copy,
} from "lucide-react";

export default function DetailPage() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareUrl = "https://novex.com/share";

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <head>
        <title>Novex | Harry Potter and The Cursed Child</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </head>

      <div className="flex">
        <Sidebar />
        <MobileNav />
        <main className="ml-auto container mx-5 sm:mx-auto relative z-10 mb-[100px]">
          <Navbar />

          {/* Hero */}
          <div className="flex md:flex-row flex-col justify-center items-center z-10 relative">
            <Image
              className="mr-[70px] lg:w-[250px] w-[300px]"
              src="/images/books/harry-potter-and-the-cursed-child.jpg"
              width={300}
              height={400}
              alt="Harry Potter and the Cursed Child"
            />
            <div>
              <h1 className="font-[georgia] font-bold text-[32px] ">
                Harry Potter and the Cursed Child
              </h1>

              <div className="flex items-center mt-[5px] mb-5">
                {/* Rating */}
                <div className="flex items-center">
                  {/* lucide default outline; pakai fill untuk efek 'solid' */}
                  <Star className="mr-1 w-4 h-4 text-mainColor" fill="currentColor" />
                  <Star className="mr-1 w-4 h-4 text-mainColor" fill="currentColor" />
                  <Star className="mr-1 w-4 h-4 text-mainColor" fill="currentColor" />
                  <Star className="mr-1 w-4 h-4 text-mainColor" fill="currentColor" />
                  <Star className="w-4 h-4 text-mainColor" fill="currentColor" />
                  <span className="ml-1 mt-0.5 ">(4.5)</span>
                </div>

                {/* Separator */}
                <span className="mx-5 w-[0.5px] h-6 bg-textColor/50" />

                {/* Likes */}
                <div className="flex items-center">
                  <Heart className="w-4 h-4 text-mainColor mr-2" fill="currentColor" />
                  <span className="flex">
                    120 <span className=" lg:block md:hidden block ml-1">likes</span>
                  </span>
                </div>

                {/* Separator */}
                <span className="mx-5 w-[0.5px] h-6 bg-textColor/50" />

                {/* Saved */}
                <div className="flex items-center">
                  <Bookmark className="w-4 h-4 text-mainColor mr-2" fill="currentColor" />
                  <span className="flex">
                    34 <span className=" lg:block md:hidden block ml-1">saved</span>
                  </span>
                </div>
              </div>

              <p className="text-[20px] mb-[50px] ">J.K. Rowling</p>

              <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start">
                {/* Actions */}
                <div className="flex lg:order-2 order-1 xl:mr-0 mr-10 relative">
                  {/* Bookmark */}
                  <button
                    type="button"
                    className="p-3 cursor-pointer text-[20px] rounded-full bg-textColor/10"
                    title="Bookmark"
                    aria-label="Bookmark"
                  >
                    <Bookmark className="w-[18px] h-[18px]" />
                  </button>

                  {/* Share */}
                  <button
                    type="button"
                    onClick={() => setIsShareOpen((v) => !v)}
                    className="px-2.5 cursor-po-3 text-[20px] rounded-full bg-textColor/10 mx-6 focus:outline-none"
                    title="Share"
                    aria-haspopup="menu"
                    aria-expanded={isShareOpen}
                    aria-controls="share-menu"
                  >
                    <Share2 className="w-[18px] h-[18px]" />
                  </button>

                  {/* Share dropdown */}
                  {isShareOpen && (
                    <div
                      id="share-menu"
                      role="menu"
                      className="absolute z-20 right-0 mt-12 w-72 p-4 bg-white rounded-lg shadow-xl"
                    >
                      <p className="capitalize text-sm font-semibold mb-2">share</p>

                      <div className="flex items-center justify-start space-x-3 mb-3">
                        <Link
                          href="https://wa.me/?text=https://novex.web.app/detail.html"
                          target="_blank"
                          className="text-textColor hover:text-mainColor"
                          aria-label="Share to WhatsApp"
                        >
                          <MessageCircle className="w-5 h-5" />
                        </Link>
                        <Link
                          href="https://www.instagram.com/?url=https://novex.web.app/detail.html"
                          target="_blank"
                          className="text-textColor hover:text-mainColor"
                          aria-label="Share to Instagram"
                        >
                          <Instagram className="w-5 h-5" />
                        </Link>
                        <Link
                          href="https://twitter.com/intent/tweet?text=Harry%20Potter%20and%20The%20Cursed%20Child&url=https://novex.web.app/detail.html"
                          target="_blank"
                          className="text-textColor hover:text-mainColor"
                          aria-label="Share to X/Twitter"
                        >
                          <Twitter className="w-5 h-5" />
                        </Link>
                        <Link
                          href="https://www.facebook.com/sharer.php?u=https://novex.web.app/detail.html"
                          target="_blank"
                          className="text-textColor hover:text-mainColor"
                          aria-label="Share to Facebook"
                        >
                          <Facebook className="w-5 h-5" />
                        </Link>
                      </div>

                      {/* Copy link */}
                      <div className="flex items-center bg-gray-100/50 rounded px-3 py-2">
                        <span className="text-xs flex-1 truncate text-textColor">{shareUrl}</span>
                        <button
                          type="button"
                          onClick={copyLink}
                          className="ml-3 text-xs cursor-pointer font-medium text-mainColor hover:underline inline-flex items-center gap-1"
                          aria-live="polite"
                        >
                          <Copy className="w-3.5 h-3.5" />
                          {copied ? "Copied" : "Copy"}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Like */}
                  <button
                    type="button"
                    className="p-3 cursor-pointer text-[20px] rounded-full bg-textColor/10 focus:outline-none"
                    title="Like"
                    aria-label="Like"
                  >
                    <Heart className="w-[18px] h-[18px]" />
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full mt-[50px] h-[1px] bg-textColor/20 lg:block hidden" />
            </div>
          </div>

          {/* Description & details */}
          <div className="bg-lightMode rounded-lg lg:mt-0 mt-[50px] shadow-lg w-full px-[50px] pb-[50px] lg:pt-[200px] pt-[50px] relative lg:-top-[165px] top-0">
            <div className="grid grid-cols-12 gap-10">
              <div className="lg:col-span-7 col-span-12 lg:order-1 order-2 pr-20">
                <h4 className="font-urbanistSemibold text-[20px] mb-3 ">Description</h4>
                <p className="/80">
                  J. K. Rowling’s magical seven-volume Harry Potter series is the ultimate
                  bildungsroman, tracing that young wizard’s coming of age, as he not only
                  battles evil but also struggles to come to terms with the responsibilities,
                  losses and burdens of adulthood. In the course of those books, we see a plucky
                  schoolboy, torn by adolescent doubts and confusions, grow into an epic hero,
                  kin to King Arthur, Luke Skywalker and Spider-Man.
                </p>
                <br />
                <p className="/80">
                  Now, in a play set 19 years later, we get to see how this legendary hero has
                  settled into middle age as a civil servant in London, working at the Ministry
                  of Magic. More important, we get to see Harry as a father — and his teenage
                  son Albus’s efforts to cope with the suffocating expectations that come with
                  having a famous father. “Harry Potter and the Cursed Child” is about the
                  journey Albus takes while growing up, and the roles he and his best friend,
                  Scorpius (Draco Malfoy’s son), play when dark forces, perhaps in league with
                  Voldemort, once again threaten the fate of the planet.
                </p>
              </div>

              <div className="flex flex-col justify-between lg:col-span-5 col-span-12 lg:order-2 order-1">
                <div className="mb-4">
                  <h4 className="text-[20px]  font-urbanistSemibold">Genre</h4>
                  <p className="/80 font-urbanist">Adventure, Drama, Fantasy</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-[20px]  font-urbanistSemibold">Language</h4>
                  <p className="/80 font-urbanist">English</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-[20px]  font-urbanistSemibold">Written by</h4>
                  <p className="/80 font-urbanist">J.K. Rowling, Jack Thorne, John Tiffany</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-[20px]  font-urbanistSemibold">Published</h4>
                  <p className="/80 font-urbanist">July 31, 2016</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-[20px]  font-urbanistSemibold">Total Read</h4>
                  <p className="/80 font-urbanist">60 times read</p>
                </div>
              </div>
            </div>
          </div>

          {/* Collection */}
          <div className="bg-lightMode rounded-lg relative lg:-top-20 lg:mt-0 mt-[50px] top-0 shadow-lg px-[50px] py-[30px]">
            <h4 className="font-urbanistSemibold text-[20px] mb-[30px] ">
              Book Collection by J.K. Rowling
            </h4>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
               <Link href={"/books/book-slug"} className="flex group">
                <span className="px-5 py-3 group-hover:bg-mainColor  rounded-md duration-300 group-hover:text-lightMode bg-readMode font-urbanistSemibold text-[16px] mr-[5px]">
                  1
                </span>
                <p className="px-5 py-3 group-hover:bg-mainColor  rounded-md duration-300 group-hover:text-lightMode bg-readMode font-urbanistSemibold text-[16px] w-full">
                  Harry Potter and the Sorcerer’s Stone
                </p>
              </Link>
              <Link href={"/books/book-slug"} className="flex group">
                <span className="px-5 py-3 bg-readMode group-hover:bg-mainColor  rounded-md group-hover:text-lightMode duration-300 font-urbanistSemibold text-[16px] mr-[5px]">
                  2
                </span>
                <p className="px-5 py-3 bg-readMode group-hover:bg-mainColor  rounded-md group-hover:text-lightMode duration-300 font-urbanistSemibold text-[16px] w-full">
                  Harry Potter and the Chamber of Secrets
                </p>
              </Link>
              <Link href={"/books/book-slug"} className="flex group">
                <span className="px-5 py-3 group-hover:bg-mainColor  rounded-md duration-300 group-hover:text-lightMode bg-readMode font-urbanistSemibold text-[16px] mr-[5px]">
                  3
                </span>
                <p className="px-5 py-3 group-hover:bg-mainColor  rounded-md duration-300 group-hover:text-lightMode bg-readMode font-urbanistSemibold text-[16px] w-full">
                  Harry Potter and the Prisoner of Azkaban
                </p>
              </Link>
              <Link href={"/books/book-slug"} className="flex group">
                <span className="px-5 py-3 bg-readMode group-hover:bg-mainColor  rounded-md group-hover:text-lightMode duration-300 font-urbanistSemibold text-[16px] mr-[5px]">
                  4
                </span>
                <p className="px-5 py-3 bg-readMode group-hover:bg-mainColor  rounded-md group-hover:text-lightMode duration-300 font-urbanistSemibold text-[16px] w-full">
                  Harry Potter and the Goblet of Fire
                </p>
              </Link>
              <Link href={"/books/book-slug"} className="flex group">
                <span className="px-5 py-3 group-hover:bg-mainColor  rounded-md duration-300 group-hover:text-lightMode bg-readMode font-urbanistSemibold text-[16px] mr-[5px]">
                  5
                </span>
                <p className="px-5 py-3 group-hover:bg-mainColor  rounded-md duration-300 group-hover:text-lightMode bg-readMode font-urbanistSemibold text-[16px] w-full">
                  Harry Potter and the Order of the Phoenix
                </p>
              </Link>
              <Link href={"/books/book-slug"} className="flex group">
                <span className="px-5 py-3 bg-readMode group-hover:bg-mainColor  rounded-md group-hover:text-lightMode duration-300 font-urbanistSemibold text-[16px] mr-[5px]">
                  6
                </span>
                <p className="px-5 py-3 bg-readMode group-hover:bg-mainColor  rounded-md duration-300 group-hover:text-lightMode font-urbanistSemibold text-[16px] w-full">
                  Harry Potter and the Half-Blood Prince
                </p>
              </Link>
              <Link href={"/books/book-slug"} className="flex group">
                <span className="px-5 py-3 group-hover:bg-mainColor  rounded-md duration-300 group-hover:text-lightMode bg-readMode font-urbanistSemibold text-[16px] mr-[5px]">
                  7
                </span>
                <p className="px-5 py-3 group-hover:bg-mainColor  rounded-md duration-300 group-hover:text-lightMode bg-readMode font-urbanistSemibold text-[16px] w-full">
                  Harry Potter and the Deathly Hallows
                </p>
              </Link>
              <Link href={"/books/book-slug"} className="flex">
                <span className="px-5 py-3 bg-mainColor text-lightMode duration-300 font-urbanistSemibold rounded-md text-[16px] mr-[5px]">
                  8
                </span>
                <p className="px-5 py-3 bg-mainColor text-lightMode duration-300 font-urbanistSemibold rounded-md text-[16px] w-full">
                  Harry Potter and the Cursed Child
                </p>
              </Link>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}