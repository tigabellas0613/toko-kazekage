export default function Home() {
  const products = [
    { id: 1, name: "Jubah Kazekage", price: "Rp 450.000", img: "🧥", tag: "BEST SELLER" },
    { id: 2, name: "Pasir Gaara Gourd", price: "Rp 320.000", img: "🏜️", tag: "LIMITED" },
    { id: 3, name: "Kipas Temari", price: "Rp 280.000", img: "🪭", tag: "NEW" },
    { id: 4, name: "Boneka Shukaku", price: "Rp 150.000", img: "🦝", tag: "" },
    { id: 5, name: "Ikat Kepala Suna", price: "Rp 95.000", img: "🎌", tag: "HOT" },
    { id: 6, name: "Kunai Pasir Hitam", price: "Rp 75.000", img: "⚔️", tag: "" },
  ];

  return (
    <main className="min-h-screen bg-[#fdf8ef] text-zinc-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b flex justify-between items-center px-6 md:px-10 py-4">
        <h1 className="font-black text-xl tracking-tighter">KAZEKAGE<span className="text-red-600">.STORE</span></h1>
        <div className="flex gap-3">
          <a href="https://wa.me/6281234567890" className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-bold">Chat WA</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 md:px-10 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="bg-red-600 text-white inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest mb-4">SUNAGAKURE COLLECTION 2026</p>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">JADI<br/>KAZEKAGE<br/>BERIKUTNYA.</h2>
          <p className="mt-5 text-zinc-600 max-w-md">Streetwear x Shinobi. Desain original dari desa pasir. Bahan premium, jahitan kuat kayak pertahanan pasir Gaara.</p>
          <div className="mt-7 flex gap-3">
            <a href="#produk" className="bg-zinc-900 text-white px-7 py-3 rounded-full font-bold">Belanja Sekarang</a>
            <button className="border border-zinc-900 px-7 py-3 rounded-full font-bold">Lookbook</button>
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-200 to-red-300 rounded-[2.5rem] h-[420px] flex items-center justify-center text-[120px]">🌪️</div>
      </section>

      {/* PRODUCTS */}
      <section id="produk" className="px-6 md:px-10 pb-20">
        <h3 className="font-black text-2xl mb-6">PRODUK TERBARU /</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-[1.8rem] p-5 border hover:shadow-xl transition">
              <div className="flex justify-between">
                <span className="text-4xl">{p.img}</span>
                {p.tag && <span className="text-[10px] font-black bg-zinc-900 text-white h-fit px-2 py-1 rounded-full">{p.tag}</span>}
              </div>
              <h4 className="font-bold mt-6 leading-tight">{p.name}</h4>
              <p className="font-black mt-1">{p.price}</p>
              <a href={`https://wa.me/6281234567890?text=Halo%20min%20mau%20order%20${encodeURIComponent(p.name)}`} className="mt-4 block text-center bg-zinc-900 text-white py-2.5 rounded-full text-sm font-bold">Beli via WA</a>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-10 text-xs tracking-widest text-zinc-500">© 2026 KAZEKAGE.STORE - PALEMBANG, SUNA</footer>
    </main>
  );
}