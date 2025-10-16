"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: panggil API login kamu di sini
    // contoh:
    // const res = await fetch("/api/login", { method: "POST", body: JSON.stringify({ email, password }) })
    // if (res.ok) router.push("/")
    console.log({ email, password });
  };

  return (
    <div className="grid lg:grid-cols-2 min-h-screen">
      {/* Ilustrasi kiri (desktop only) */}
      <div className="lg:block hidden">
        <Image
          src="/images/login.svg"
          alt="Login Illustration"
          className="h-screen w-full object-cover"
          width={1200}
          height={1200}
          priority
        />
      </div>

      {/* Form kanan */}
      <div className="flex flex-col justify-center xl:mx-[125px] lg:mt-0 mt-[100px] sm:mx-[100px] mx-5">
        <div className="text-center mb-6">
          <h1 className="text-[40px] font-bold text-mainColor">Welcome Back</h1>
          <h2 className="sm:text-[40px] text-[32px] font-bold">
            Please Login Your Account
          </h2>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col mt-11 gap-4">
          <input
            type="email"
            className="input-text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email"
            autoComplete="email"
          />
          <input
            type="password"
            className="input-text"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Password"
            autoComplete="current-password"
          />

          <button type="submit" className="btn-auth">
            Login
          </button>

          <p className="text-[#272B2C]/50 text-center">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-mainColor">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
