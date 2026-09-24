export default function Footer() {
  return (
    <footer className="w-full bg-[#6d1f2b] text-white">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-12">
        {/* Konten Utama Footer (3 Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-14">
          {/* Kolom 1: Logo & Media Sosial */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            {/* Logo Badge */}
            <div className="border border-white/40 rounded-xl px-6 py-2 bg-white/5 backdrop-blur-sm">
              <span className="font-fraunces text-base font-medium tracking-wide">
                LogoIpsum
              </span>
            </div>

            <p className="font-plus-jkt text-xs md:text-sm text-white/80 max-w-xs leading-relaxed">
              Membantu setiap pasangan merayakan hari istimewa dengan penuh makna.
            </p>

            {/* Ikon Media Sosial Bulat */}
            <div className="flex items-center gap-3 pt-2">
            {/* Instagram */}
            <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white hover:text-[#6d1f2b] transition-colors"
                aria-label="Instagram"
            >
                <svg className="w-4 h-4" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="white" />
                </svg>
            </a>

            {/* Twitter / X */}
            <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white hover:text-[#6d1f2b] transition-colors"
                aria-label="Twitter"
            >
                <svg className="w-3.5 h-3.5" fill="white" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </a>

            {/* YouTube */}
            <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white hover:text-[#6d1f2b] transition-colors"
                aria-label="YouTube"
            >
                <svg className="w-3.5 h-3.5" fill="white" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            </a>

            {/* Facebook */}
            <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white hover:text-[#6d1f2b] transition-colors"
                aria-label="Facebook"
            >
                <svg className="w-3.5 h-3.5" fill="white" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z" />
                </svg>
            </a>
            </div>
          </div>

          {/* Kolom 2: Kontak */}
          <div className="md:col-span-4 font-plus-jkt flex flex-col gap-3 text-xs md:text-sm">
            <h4 className="font-fraunces text-base font-normal text-white mb-1">
              Kontak
            </h4>
            <p className="text-white/80 leading-relaxed max-w-xs">
              Jl. Contoh Alamat No. 123, Kota Malang, 16114, Jawa Timur, Indonesia
            </p>

            <div className="flex items-center gap-2.5 text-white/90 pt-1">
              <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>+62 812 3456 789</span>
            </div>

            <div className="flex items-center gap-2.5 text-white/90">
              <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span>kontak@phoenix.co.id</span>
            </div>
          </div>

          {/* Kolom 3: Navigasi */}
          <div className="md:col-span-3 font-plus-jkt flex flex-col gap-3 text-xs md:text-sm">
            <h4 className="font-fraunces text-base font-normal text-white mb-1">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-white/80">
              <li>
                <a href="#beranda" className="hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#paket" className="hover:text-white transition-colors">
                  Paket Wedding
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-white transition-colors">
                  Kontak Kami
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Garis Pembatas Horisontal */}
        <div className="w-full h-px bg-white/20 mb-8" />

        {/* Copyright */}
        <p className="font-fraunces text-center text-xs md:text-sm text-white/90">
          © 2026 Phoenix Wedding Organizer. Hak Cipta Dilindungi
        </p>
      </div>
    </footer>
  );
}