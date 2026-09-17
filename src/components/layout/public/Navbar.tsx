// TODO
export default function Navbar() {
    return (
    <div className="text-slate-800 bg-white mb-16 font-fraunces"> {/* Wrapper  BG*/}
    <div className="outline outline-color-gray-500"> {/* Wrapper Navbar */}
      <header className="flex justify-between items-center p-4 max-w-[1200px] mx-auto"> {/* Navbar */}
        <img className="h-10 w-10" src="/path/to/logo.png" alt="Logo" />
        <nav>
          <ul className="flex space-x-[50px]">
            <li>
              <a href="#" className="text-slate-800 hover:text-slate-600">
                Beranda
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-800 hover:text-slate-600">
                Paket Wedding
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-800 hover:text-slate-600">
                Kontak Kami
              </a>
            </li>
          </ul>
        </nav>
        <button className="bg-maroon text-white px-6 py-3 rounded-xl">Pesan Sekarang {">"}</button>
      </header>
    </div>
    </div>
  );
}

