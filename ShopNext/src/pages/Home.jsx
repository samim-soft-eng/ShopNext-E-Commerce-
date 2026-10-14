import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=4")
      .then((response) => setFeaturedProducts(response.data))
      .catch(() => setFeaturedProducts([]));
  }, []);

  const categories = [
    { title: "Everyday style", subtitle: "Clothes with character", tone: "bg-[#dce8d5]", mark: "01" },
    { title: "Little luxuries", subtitle: "A little something extra", tone: "bg-[#f2dec4]", mark: "02" },
    { title: "Useful things", subtitle: "Smart picks for every day", tone: "bg-[#d9e7e2]", mark: "03" },
  ];

  return (
    <main className="overflow-hidden bg-[#f6f5ed] text-[#20382d]">
      <section className="relative isolate min-h-[610px] overflow-hidden bg-[#183b2e] text-[#fffaf0] lg:min-h-[650px]">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[48%] bg-[#d9e4cf] lg:block" aria-hidden="true" />
        <div className="absolute -right-28 top-[-150px] -z-10 hidden h-[540px] w-[540px] rotate-12 rounded-[5rem] border-[34px] border-[#bed0b3] lg:block" aria-hidden="true" />
        <div className="mx-auto grid min-h-[610px] max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 lg:min-h-[650px] lg:grid-cols-[0.94fr_1.06fr] lg:px-12 lg:py-12">
          <div className="relative z-10 max-w-xl">
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#d6e4be]">
              <span className="size-2 rounded-full bg-[#e6ba6a]" /> Thoughtful finds, fresh for you
            </p>
            <h1 className="font-serif text-5xl font-bold leading-[0.98] sm:text-6xl lg:text-7xl">
              Good things
              <span className="mt-2 block text-[#e7c783]">find their way</span>
              <span className="mt-2 block">to you.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-[#d6e0d4] sm:text-lg">
              A considered collection of everyday favorites, little luxuries, and things you didn’t know you needed.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/products" className="group inline-flex min-h-12 items-center gap-4 rounded-full bg-[#e8bf74] px-6 text-sm font-extrabold text-[#233b2d] transition hover:bg-[#f3d294] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3d294]">
                Explore the collection <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
              <span className="text-xs font-semibold text-[#cedbc9]">A better kind of browse</span>
            </div>
            <div className="mt-10 flex items-center gap-4 border-t border-white/15 pt-5 text-xs text-[#d6e0d4]">
              <span className="font-bold text-[#f7e2b8]">01</span>
              <span>Useful things. Lovely details. No fuss.</span>
            </div>
          </div>

          <div className="relative mx-auto flex h-[330px] w-full max-w-[540px] items-center justify-center sm:h-[390px] lg:h-[500px]">
            <div className="absolute left-[5%] top-[8%] h-[78%] w-[76%] rotate-[-7deg] rounded-[2rem] bg-[#eac77f] sm:rounded-[2.5rem]" aria-hidden="true" />
            <div className="absolute right-[5%] top-[4%] h-[79%] w-[78%] rotate-[7deg] rounded-[2rem] bg-[#ecf0e3] shadow-[0_26px_55px_rgba(18,46,34,0.22)] sm:rounded-[2.5rem]" aria-hidden="true" />
            <div className="absolute right-[12%] top-[11%] z-10 flex h-[70%] w-[64%] rotate-[3deg] items-center justify-center overflow-hidden rounded-[1.7rem] bg-white p-6 sm:rounded-[2rem] sm:p-10">
              {featuredProducts[0] ? (
                <img src={featuredProducts[0].image} alt={featuredProducts[0].title} className="h-full w-full object-contain mix-blend-multiply" />
              ) : (
                <div className="h-full w-full animate-pulse rounded-xl bg-[#f0eee5]" aria-label="Featured product loading" />
              )}
            </div>
            <div className="absolute bottom-[5%] left-[1%] z-20 w-[46%] rounded-2xl bg-[#fffaf0] p-4 text-[#20382d] shadow-[0_16px_35px_rgba(18,46,34,0.2)] sm:p-5">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#71836a]">The good find</p>
              <p className="mt-2 line-clamp-2 text-sm font-bold leading-5 sm:text-base">
                {featuredProducts[0]?.title || "A fresh favorite is on its way"}
              </p>
              {featuredProducts[0] && <p className="mt-2 text-sm font-extrabold text-[#9a573d]">${featuredProducts[0].price.toFixed(2)}</p>}
            </div>
            <div className="absolute right-[3%] top-[5%] z-20 grid size-16 rotate-12 place-items-center rounded-2xl bg-[#6f9364] text-center text-[9px] font-black uppercase leading-3 tracking-wider text-white shadow-lg sm:size-20 sm:text-[10px]">
              GOOD<br />PICK
            </div>
            <span className="absolute bottom-[5%] right-[9%] z-20 font-serif text-sm italic text-[#193d2f]">shop well, feel good</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#547650]">A little direction</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#20382d] sm:text-4xl">Find your kind of good.</h2>
          </div>
          <Link to="/products" className="text-sm font-bold text-[#42664d] underline decoration-[#b9c9ad] decoration-2 underline-offset-4 transition hover:text-[#244c3b]">Browse everything <span aria-hidden="true">→</span></Link>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.title} to="/products" className={`group relative flex min-h-36 items-end overflow-hidden rounded-2xl ${category.tone} p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(32,56,45,0.12)]`}>
              <span className="absolute right-5 top-3 font-serif text-6xl font-bold text-[#345640]/15 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" aria-hidden="true">{category.mark}</span>
              <span className="relative">
                <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#61765f]">Shop the edit</span>
                <span className="mt-1 block font-serif text-xl font-bold text-[#20382d]">{category.title}</span>
                <span className="mt-1 block text-xs text-[#596b59]">{category.subtitle}</span>
              </span>
              <span className="absolute bottom-5 right-5 text-lg text-[#42664d] transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[#e1e5d9] bg-[#eef1e8]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#547650]">Picked for you</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#20382d] sm:text-4xl">A few things worth a look.</h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-[#42664d] transition hover:text-[#244c3b]">View all products <span aria-hidden="true">→</span></Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(featuredProducts.length ? featuredProducts : Array.from({ length: 4 }, (_, index) => ({ id: index, loading: true }))).map((product) => (
              <Link key={product.id} to="/products" className="group overflow-hidden rounded-2xl border border-[#e5e7dd] bg-[#fffdf8] p-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(32,56,45,0.12)]">
                <div className="grid aspect-[4/3] place-items-center overflow-hidden rounded-xl bg-[#f1f0e8] p-6">
                  {product.image ? (
                    <img src={product.image} alt={product.title} className="h-full w-full object-contain mix-blend-multiply transition duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="h-full w-full animate-pulse rounded-lg bg-[#e6e7dc]" aria-label="Featured product loading" />
                  )}
                </div>
                <div className="px-2 pb-2 pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#829078]">{product.category || "ShopNext selection"}</p>
                  <h3 className="mt-2 line-clamp-2 min-h-10 text-sm font-bold leading-5 text-[#283f32]">{product.title || "Finding something lovely"}</h3>
                  {product.price != null && <p className="mt-3 font-extrabold text-[#547650]">${product.price.toFixed(2)}</p>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#547650]">Ready when you are</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-[#20382d]">Your next good thing is out there.</h2>
        </div>
        <Link to="/products" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#244c3b] px-6 text-sm font-extrabold text-white transition hover:bg-[#173a2c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244c3b]">Go find it <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}

export default Home;