"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-700 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between text-white">

        {/* Logo */}
       <Link href="/" className="flex items-center gap-2">
        <Image
  src="/swifturl-logo.png"
  alt="SwiftURL Logo"
  width={50}
  height={50}
  priority
/>
          <span className="text-xl font-bold tracking-wide">
            SwiftURL
          </span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          <li className="hover:text-purple-200 transition">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-purple-200 transition">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-purple-200 transition">
            <Link href="/shorten">Shorten</Link>
          </li>
         
        </ul>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link href="/shorten">
            <button className="px-4 py-2 rounded-lg bg-white text-purple-700 font-semibold hover:bg-purple-100 transition shadow">
              Try Now
            </button>
          </Link>

          <Link href="https://github.com/Rahul-9307" target="_blank">
            <button className="px-4 py-2 rounded-lg border border-white/40 hover:bg-white/10 transition font-semibold">
              GitHub
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
