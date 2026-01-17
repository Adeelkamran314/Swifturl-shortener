import Link from "next/link";


export default function AboutPage() {
  return (
    <main className="pt-28 bg-purple-50 min-h-screen text-gray-800">

      {/* ================= HERO ABOUT ================= */}
      <section className="max-w-6xl mx-auto px-6 text-center py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800">
          About BitLinks
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
          BitLinks is a simple, fast, and privacy-focused URL shortener built
          to make sharing links easier without tracking or unnecessary logins.
        </p>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-purple-800">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mission is to provide a clean and trustworthy URL shortening
              service that respects user privacy. We believe tools should be
              simple, transparent, and accessible to everyone without forcing
              signups or collecting personal data.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-purple-800">
              Our Vision
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We envision a web where sharing links is fast, safe, and free from
              unnecessary tracking. BitLinks aims to become a reliable utility
              for individuals, developers, and businesses alike.
            </p>
          </div>

        </div>
      </section>

      {/* ================= WHY BITLINKS ================= */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-purple-800">
            Why BitLinks?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                🔒 Privacy Friendly
              </h3>
              <p className="text-gray-600">
                No tracking pixels, no analytics abuse, and no data selling.
                Your links stay yours.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                ⚡ High Performance
              </h3>
              <p className="text-gray-600">
                Built for speed with modern web technologies for instant link
                generation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                🎯 Simple & Clean
              </h3>
              <p className="text-gray-600">
                No clutter, no ads, no confusion — just a clean interface that
                works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO IT'S FOR ================= */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-purple-800">
            Who Is It For?
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            BitLinks is designed for everyone who needs quick, reliable link
            sharing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-4xl mb-2">👩‍💻</div>
              <h4 className="font-semibold">Developers</h4>
              <p className="text-gray-600 mt-2">
                Share clean links in documentation and projects.
              </p>
            </div>

            <div>
              <div className="text-4xl mb-2">📈</div>
              <h4 className="font-semibold">Marketers</h4>
              <p className="text-gray-600 mt-2">
                Use branded short links for campaigns and promotions.
              </p>
            </div>

            <div>
              <div className="text-4xl mb-2">🙋‍♂️</div>
              <h4 className="font-semibold">Everyone</h4>
              <p className="text-gray-600 mt-2">
                Anyone who wants simple and fast URL shortening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-purple-700 py-20 text-center text-white">
        <h2 className="text-3xl font-bold">
          Ready to shorten your links?
        </h2>
        <p className="mt-3 text-purple-100">
          Experience fast and privacy-friendly URL shortening today.
        </p>

        <Link href="/shorten">
          <button className="mt-6 px-8 py-3 bg-white text-purple-700 rounded-lg font-semibold hover:bg-purple-100 transition shadow">
            Get Started 🚀
          </button>
        </Link>
      </section>

    </main>
  );
}
