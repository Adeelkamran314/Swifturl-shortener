"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";

export default function ShortenPage() {
  const [url, setUrl] = useState("");
  const [shorturl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = async () => {
    if (!url || !shorturl) {
      toast.warning("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl }),
      });

      const result = await res.json();

      if (result.error) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);
      setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
      setUrl("");
      setShortUrl("");
      setCopied(false);
    } catch {
      toast.error("Server error");
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generated);
      setCopied(true);
      toast.success("Short URL copied to clipboard!");
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <section className="pt-28 min-h-screen bg-purple-50 flex justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center text-purple-700">
          URL Shortener
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Convert long links into short & shareable URLs
        </p>

        <div className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Enter long URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="text"
            placeholder="Custom short name"
            value={shorturl}
            onChange={(e) => setShortUrl(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            onClick={generate}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Generate Short URL 🚀
          </button>
        </div>

        {generated && (
          <div className="mt-6 bg-purple-50 border border-purple-200 rounded-lg p-4 text-center space-y-3">
            <p className="text-sm text-gray-600">Your Short URL</p>

            <Link
              href={generated}
              target="_blank"
              className="text-purple-700 font-semibold break-all hover:underline block"
            >
              {generated}
            </Link>

            <button
              onClick={copyToClipboard}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                copied
                  ? "bg-green-500 text-white"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
            >
              {copied ? "Copied ✓" : "Copy URL 📋"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
