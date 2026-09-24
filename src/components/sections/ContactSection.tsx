// TODO
import ctaBg from "../../assets/cta-bg.png";

export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Gambar Background */}
      <img
        src={ctaBg}
        alt="Wedding Celebration"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay Gelap Tipis Keseluruhan agar Teks Tetap Kontras */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Gradien Merah Maroon dari Bawah ke Tengah */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#6d1f2b] via-[#6d1f2b]/70 to-transparent" />

      {/* Konten Utama */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16">
        {/* Sisi Kiri: Judul & Tombol CTA */}
        <div className="flex-1">
          <h2 className="font-fraunces text-3xl md:text-5xl text-white font-normal leading-tight mb-8">
            Siap Merencanakan <br />
            Pernikahan Impianmu?
          </h2>
          <button className="font-plus-jkt bg-white text-[#6d1f2b] hover:bg-stone-100 transition-colors px-6 py-3 rounded-xl font-medium text-sm md:text-base shadow-md">
            Pesan Sekarang
          </button>
        </div>

        {/* Sisi Kanan: Deskripsi dengan Border Kiri */}
        <div className="flex-1 border-l border-white/60 pl-6 max-w-lg">
          <p className="font-plus-jkt text-white/90 text-sm md:text-base leading-relaxed">
            Ceritakan rencana pernikahanmu kepada kami. Tim kami akan membantu
            menemukan solusi dan paket yang paling sesuai untuk kebutuhanmu.
          </p>
        </div>
      </div>
    </section>
  );
}