"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail]     = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: panggil API register kamu di sini
      // const res = await fetch("/api/register", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({ username, email, password }) })
      // if (res.ok) router.push("/login")
      console.log({ username, email, password });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 min-h-screen">
      {/* Ilustrasi kiri (desktop only) */}
      <div className="lg:block hidden">
        <Image
          src="/images/register.svg"
          alt="Register Illustration"
          className="h-screen w-full object-cover"
          width={1200}
          height={1200}
          priority
        />
      </div>

      {/* Form kanan */}
      <div className="flex flex-col justify-center xl:mx-[125px] lg:mt-0 mt-[100px] sm:mx-[100px] mx-5">
        <div className="text-center mb-6">
          <h1 className="text-[40px] font-bold text-mainColor">Create an Account</h1>
          <h2 className="sm:text-[40px] text-[32px] font-bold">
            Fill in the Form Correctly
          </h2>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col mt-11 gap-4">
          <input
            type="text"
            className="input-text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            aria-label="Username"
            autoComplete="username"
          />
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
            autoComplete="new-password"
            minLength={6}
          />

          <button type="submit" className="btn-auth" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>

          <p className="text-[#272B2C]/50 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-mainColor">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}