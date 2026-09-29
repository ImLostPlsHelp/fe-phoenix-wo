export default function SideBarAdmin() {
  return (
    <aside className="flex flex-col w-64 h-screen bg-white text-gray-800 justify-between p-4 shadow-lg">
      {/* Bagian Atas: Logo & Navigasi */}
      <div className="flex flex-col">
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="w-24 h-24 object-contain my-4" />

        <div className="w-full flex flex-col mt-4">
          <p className="font-bold text-sm tracking-wider text-gray-400 mb-2">MENU UTAMA</p>
          
          <ul className="flex flex-col w-full gap-2 font-medium text-sm">
            <li className="hover:bg-red-900 hover:text-white rounded-lg w-full py-2.5 cursor-pointer transition-colors">
              Dasbor Utama
            </li>
            <li className="hover:bg-red-900 hover:text-white rounded-lg w-full py-2.5 cursor-pointer transition-colors">
              Manajemen Pernikahan
            </li>
            <li className="hover:bg-red-900 hover:text-white rounded-lg w-full py-2.5 cursor-pointer transition-colors">
              Manajemen Pengguna
            </li>
            <li className="hover:bg-red-900 hover:text-white rounded-lg w-full py-2.5 cursor-pointer transition-colors">
              Manajemen CMS
            </li>
          </ul>
        </div>

        {/* Lainnya */}
        <div className="w-full mt-6">
          <a className="flex gap-2 hover:bg-red-900 hover:text-white rounded-lg w-full text-center py-2.5 cursor-pointer transition-colors text-sm font-medium">
            <span>Pengaturan Sistem</span>
          </a>
        </div>
      </div>

      {/* Bagian Bawah: Profil & Logout */}
      <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-3 px-2 py-2">
          <img src="/logout.png" alt="Avatar" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col text-left">
            <h1 className="text-sm font-semibold">Admin Utama</h1>
            <p className="text-xs text-gray-500">admin@phoenix.co.id</p>
          </div>
        </div>

        <a className="flex gap-2 hover:bg-red-900 hover:text-white rounded-lg w-full py-2 cursor-pointer transition-colors text-sm font-medium">
          <img src="/logout.png" alt="Logout" className="w-4 h-4" />
          <span>Keluar</span>
        </a>
      </div>
    </aside>
  );
}