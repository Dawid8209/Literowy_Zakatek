import React, { useEffect, useState } from "react";

// LiterowyZakatek.jsx
// Single-file React component (default export) styled with Tailwind CSS.
// Usage:
// 1. Your project must have Tailwind CSS set up. (PostCSS + Tailwind config or use CRA + tailwind setup)
// 2. Add Google Fonts to your index.html (Playfair Display + Poppins):
//    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
// 3. Use this component in your app. It includes a light/dark toggle, responsive layout (desktop + mobile),
//    a header with the A-J staircase logo, a hero grid with large book covers, a best-rated carousel placeholder,
//    recent reviews, about section and footer.
// 4. Replace placeholder images/data with real content from your CMS (Strapi) later.

export default function LiterowyZakatek() {
  const letters = "ABCDEFGHIJ".split("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const books = [
    { id: 1, title: "Cienie poranka", author: "M. Kowal", rating: 4.6, cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80" },
    { id: 2, title: "Opowieści z zakątka", author: "A. Nowak", rating: 1.9, cover: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800&q=80" },
    { id: 3, title: "Tam gdzie liście szepczą", author: "E. Lis", rating: 3.3, cover: "https://gfx.chillizet.pl/var/g3-chillizet-2/storage/images/kultura/najlepsza-polska-ksiazka-wszech-czasow-polacy-rzadko-czytaja-w-calosci/22239985-1-pol-PL/Najlepsza-polska-ksiazka-wszech-czasow-wybrana.-Polacy-rzadko-czytaja-ja-w-calosci_content.webp" },
    { id: 4, title: "Podróż dźwięków", author: "K. Brąz", rating: 2.2, cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&q=80" },
    { id: 5, title: "Księga poranków", author: "Z. Białek", rating: 4.8, cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80" },
  ];

  const reviews = [
    { id: 1, user: "Ania", book: "Cienie poranka", rating: 5, text: "Przepiękna opowieść — wciągnęła mnie od pierwszej strony." },
    { id: 2, user: "Marek", book: "Opowieści z zakątka", rating: 3, text: "Ciepły, kameralny styl. Polecam dla wieczornego czytania." },
    { id: 3, user: "Zosia", book: "Księga poranków", rating: 4, text: "Jedna z moich ulubionych lektur tego roku." },
  ];

  function Stars({ value }) {
    const full = Math.floor(value);
    const half = value - full >= 0.5;
    const total = 5;
    return (
      <div className="flex items-center space-x-1 text-sm">
        {Array.from({ length: total }).map((_, i) => (
          <svg key={i} className={`w-4 h-4 ${i < full ? "text-amber-400" : "text-gray-300 dark:text-gray-600"}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.539 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.048 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69L9.05 2.927z" />
          </svg>
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-kremowy dark:bg-ciemnyBraz transition-colors transition-colors duration-500">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Logo: A-J staircase */}
          <div className="flex flex-col items-center">
            <div className="flex items-end select-none" aria-hidden>
              {letters.map((ltr, idx) => {
                const scale = 1 - idx * 0.06; // gentle decreasing scale
                const translateY = idx * 2; // gentle step
                const colorStep = idx / (letters.length - 1);
                // compute color interpolation from dark #3E2C23 to light #C7A17A
                return (
                  <span
                    key={ltr}
                    style={{ transform: `translateY(${translateY}px) scale(${scale})` }}
                    className="font-extrabold leading-none"
                  >
                    <span className={`inline-block`} style={{ color: `rgb(${62 + Math.round( (199-62)*colorStep )}, ${47 + Math.round((161-47)*colorStep)}, ${35 + Math.round((122-35)*colorStep)})` }}>{ltr}</span>
                  </span>
                );
              })}
            </div>
            <div className="mt-1 text-center">
              <div className="text-xl font-serif text-[#6B4F3B] dark:text-[#EADBC8]">Literowy Zakątek</div>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a className="text-ciemnyBraz dark:text-kremowy hover:text-jasnyBraz dark:hover:text-bez transition-colors duration-300" href="#books">Książki</a>
          <a className="text-ciemnyBraz dark:text-kremowy hover:text-jasnyBraz dark:hover:text-bez transition-colors duration-300" href="#reviews">Recenzje</a>
          <a className="text-ciemnyBraz dark:text-kremowy hover:text-jasnyBraz dark:hover:text-bez transition-colors duration-300" href="#about">O projekcie</a>
          <a className="text-ciemnyBraz dark:text-kremowy hover:text-jasnyBraz dark:hover:text-bez transition-colors duration-300" href="#contact">Kontakt</a>
          <button
            onClick={() => setDark(!dark)}
            className="ml-2 p-2 rounded-md bg-[#C7A17A] hover:bg-[#b89263] text-white dark:bg-[#6B4F3B] dark:hover:bg-[#5b3f2f] shadow-md transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            {dark ? '🌙' : '🌞'}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center space-x-2">
          <button onClick={() => setDark(!dark)} className="p-2 rounded-md bg-[#C7A17A] text-white">{dark ? '🌙' : '🌞'}</button>
          <button className="p-2 rounded-md border border-[#C7A17A] dark:border-[#EADBC8]">☰</button>
        </div>
      </header>

      {/* Hero / New books */}
      <main className="max-w-7xl mx-auto px-6 pb-16">
        <section id="books" className="mt-12 text-left">
          <h2 className="text-3xl font-serif text-ciemnyBraz dark:text-kremowy mb-8 transition-colors duration-500">
            Nasze książki
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map(book => (
              <div
                key={book.id}
                className="bg-bez dark:bg-czekoladowy rounded-2xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform duration-300"
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-left">
                  <h3 className="text-xl font-semibold text-ciemnyBraz dark:text-kremowy">
                    {book.title}
                  </h3>
                  <p className="text-sm text-czekoladowy dark:text-bez opacity-80">
                    {book.author}
                  </p>
                  <p className="mt-2 text-amber-600 dark:text-amber-400 font-bold">
                    ⭐ {book.rating.toFixed(1)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Best rated */}
        <section className="mt-12">
  <h2 className="text-2xl font-serif text-ciemnyBraz dark:text-kremowy transition-colors duration-500 mb-6">
    Najlepiej oceniane
  </h2>

  <div className="flex space-x-5 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#C7A17A] dark:scrollbar-thumb-[#EADBC8]">
    {books
      .slice()
      .sort((a, b) => b.rating - a.rating)
      .map((b) => (
        <div
          key={b.id}
          className="min-w-[240px] bg-[#EADBC8] dark:bg-[#5b3f2f] rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
        >
          <img
            src={b.cover}
            alt={b.title}
            className="w-full h-44 object-cover rounded-t-2xl"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-ciemnyBraz dark:text-kremowy mb-1 transition-colors duration-500">
              {b.title}
            </h3>
            <p className="text-sm text-czekoladowy dark:text-bez opacity-80 transition-colors duration-500">
              {b.author}
            </p>
            <div className="mt-2 flex items-center justify-between">
              <Stars value={b.rating} />
              <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                {b.rating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      ))}
  </div>
</section>

        {/* Reviews */}
        <section id="reviews" className="mt-16 text-center">
          <h2 className="text-3xl font-serif text-ciemnyBraz dark:text-kremowy mb-8 transition-colors duration-500">
            Recenzje czytelników
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {reviews.map(review => (
            <div
              key={review.id}
              className="bg-bez dark:bg-czekoladowy rounded-2xl p-5 shadow-md transition-all duration-300 hover:shadow-lg"
              >
              <p className="text-lg text-ciemnyBraz dark:text-kremowy font-medium">
                {review.user}
              </p>
              <p className="text-sm text-czekoladowy dark:text-bez opacity-80 italic">
                o książce <span className="font-semibold">{review.book}</span>
              </p>
              <p className="mt-2 text-amber-600 dark:text-amber-400">
                {"⭐".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
              </p>
              <p className="mt-3 text-czekoladowy dark:text-bez transition-colors duration-500">
                “{review.text}”
              </p>
            </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-12 bg-[#F9F5EC] dark:bg-transparent p-6 rounded-2xl">
          <h2 className="text-2xl font-serif text-ciemnyBraz dark:text-kremowy transition-colors duration-300">O projekcie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p className="text-sm text-czekoladowy dark:text-bez opacity-90 transition-colors duration-300">Literowy Zakątek to przytulne miejsce w sieci — kolekcja tekstowych książek, opinii czytelników i ciepłego designu. Dodawaj nowe tytuły, oceniaj, dziel się myślami.
            </p>
            <div className="flex items-center justify-center">
              <div className="w-48 h-32 bg-[#C7A17A] rounded-lg flex items-center justify-center text-white font-semibold">Ilustracja</div>
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section id="contact" className="mt-12">
          <div className="bg-[#EADBC8] dark:bg-[#6B4F3B] p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-serif text-ciemnyBraz dark:text-kremowy transition-colors duration-300">Masz pytania?</h3>
              <p className="text-sm text-czekoladowy dark:text-bez opacity-90 transition-colors duration-300">Napisz do nas — chętnie porozmawiamy o projekcie i możliwościach współpracy.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <a href="mailto:kontakt@literowyzakatak.pl" className="px-5 py-2 rounded-md bg-[#3E2C23] text-white">Napisz do nas</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#3E2C23] dark:bg-[#3E2C23] text-[#EADBC8] mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="font-serif text-lg">Literowy Zakątek</div>
            <div className="text-sm opacity-80 mt-2">© Literowy Zakątek 2025</div>
          </div>
          <div className="text-sm opacity-80">
            <div className="mb-2">Linki</div>
            <ul className="space-y-1">
              <li><a className="hover:underline">Polityka prywatności</a></li>
              <li><a className="hover:underline">Regulamin</a></li>
            </ul>
          </div>
          <div className="text-sm opacity-80">
            <div className="mb-2">Kontakt</div>
            <div>kontakt@literowyzakatak.pl</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
