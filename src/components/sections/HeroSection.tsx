import heroImage from "../../assets/hero-image.png";

function HeroSection() {
  return (
    <div className="items-center justify-between bg-white max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 px-6 py-16 font-fraunces">
      {/* Kolom Kiri: Teks & Aksi */}
      <section className="flex-1 flex flex-col gap-6">
        <h1 className="text-4xl md:text-[56px] font-bold text-black leading-tight font-medium">
          Wujudkan <br />
          <span className="text-maroon">Pernikahan Impianmu</span> <br />
          Bersama Kami
        </h1>
        <p className="text-slate-600 max-w-md">
          Kami membantu merencanakan dan mewujudkan hari istimewamu dengan
          detail, ketenangan, dan sentuhan personal.
        </p>
        <section className="flex flex-col sm:flex-row gap-4 pt-2">
          <button className="bg-maroon text-white px-6 py-3 rounded-xl font-medium hover:bg-[#571822] transition-colors">
            Pesan Sekarang
          </button>
          <button className="border border-maroon text-maroon px-6 py-3 rounded-xl font-medium hover:bg-rose-50 transition-colors">
            Lihat Paket Wedding
          </button>
        </section>
      </section>

      {/* Kolom Kanan: Gambar & Floating Badge */}
      <div className="flex-1 relative w-full max-w-[480px]">
        {/* Gambar Utama */}
        <img
          className="w-full h-auto object-cover"
          src={heroImage}
          alt="Hero Wedding"
        />

        {/* Floating Card: 100+ Pasangan */}
        <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-rose-100/60 max-w-[240px]">
          <h3 className="text-3xl font-bold text-maroon mb-1">100+</h3>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            Pasangan telah mempercayakan hari bahagianya kepada kami.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;