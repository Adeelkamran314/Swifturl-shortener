import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="pt-28 bg-purple-50 text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[80vh]">
        <div className="flex flex-col gap-6">
          <h1
            className={`text-4xl md:text-5xl font-extrabold text-purple-800 leading-tight ${poppins.className}`}
          >
            Shorten URLs.<br />Share Faster.<br />Grow Smarter.
          </h1>

          <p className="text-gray-600 text-lg max-w-xl">
            BitLinks is a fast, secure, and privacy-focused URL shortener.
            No login required. No tracking. Just clean and reliable short links
            for everyone.
          </p>

          <div className="flex gap-4">
            <Link href="/shorten">
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold shadow transition">
                Get Started 🚀
              </button>
            </Link>

            <Link href="https://github.com" target="_blank">
              <button className="px-6 py-3 border border-purple-600 text-purple-700 rounded-lg font-semibold hover:bg-purple-100 transition">
                View on GitHub
              </button>
            </Link>
          </div>
        </div>

        <div className="relative w-full h-[320px] md:h-[450px]">
          <Image
            src="/vector.jpg"
            alt="URL Shortener Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-purple-800">
            Why Choose BitLinks?
          </h2>
          <p className="text-center text-gray-600 mt-3">
            Everything you need from a modern URL shortener
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                ⚡ Fast & Reliable
              </h3>
              <p className="text-gray-600">
                Generate short links instantly with high availability and
                optimized performance.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                🔒 Privacy First
              </h3>
              <p className="text-gray-600">
                We don’t track users, collect data, or force logins.
                Your links stay private.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                🎯 Custom URLs
              </h3>
              <p className="text-gray-600">
                Create branded and memorable short links using custom aliases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-purple-800">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14 text-center">
            <div>
              <div className="text-4xl mb-3">🔗</div>
              <h4 className="font-semibold text-lg">Paste your long URL</h4>
              <p className="text-gray-600 mt-2">
                Enter the long link you want to shorten.
              </p>
            </div>

            <div>
              <div className="text-4xl mb-3">✂️</div>
              <h4 className="font-semibold text-lg">Customize it</h4>
              <p className="text-gray-600 mt-2">
                Choose a custom short name for easy sharing.
              </p>
            </div>

            <div>
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="font-semibold text-lg">Share anywhere</h4>
              <p className="text-gray-600 mt-2">
                Use your short link on social media, messages, or websites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-purple-700 py-20 text-center text-white">
        <h2 className="text-3xl font-bold">
          Start shortening links today
        </h2>
        <p className="mt-3 text-purple-100">
          Simple. Fast. Free. No signup required.
        </p>

        <Link href="/shorten">
          <button className="mt-6 px-8 py-3 bg-white text-purple-700 rounded-lg font-semibold hover:bg-purple-100 transition shadow">
            Try BitLinks Now
          </button>
        </Link>
      </section>

    </main>
  );
}
