"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  label: string;
  duration?: number;
}

function Counter({ end, label, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-center lg:mb-0 mb-5">
      <h5 className="text-mainColor font-bold text-[40px]">
        {count.toLocaleString()}
      </h5>
      <p className="text-[24px]">{label}</p>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <div className="lg:flex grid rounded-md xs:grid-cols-2 grid-cols-1 justify-around items-center py-7 mb-[50px] lg:bg-[#F0EEE2]/40 mt-10">
      <Counter end={50} label="Book Collections" />
      <Counter end={10545} label="Book Read" />
      <Counter end={896} label="Reviews" />
      <Counter end={52423} label="Total Visits" />
    </div>
  );
}