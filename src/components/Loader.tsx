"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Loader() {
  useEffect(() => {
    const loader = document.querySelector(".loader") as HTMLElement | null;
    if (!loader) return;

    const handleLoad = () => {
      loader.classList.add("loader--hidden");
      loader.addEventListener("transitionend", () => {
        loader.parentElement?.removeChild(loader);
      });
    };

    // Trigger ketika semua assets (image, font) selesai load
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="loader fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-lightMode z-[999] transition-opacity duration-700">
      <Image
        width={150}
        height={150}
        className="block"
        src="/images/logo-novex-light.svg"
        alt="Loader Light"
      />
      <Image
        width={150}
        height={150}
        className="hidden"
        src="/images/logo-novex-dark.svg"
        alt="Loader Dark"
      />
    </div>
  );
}