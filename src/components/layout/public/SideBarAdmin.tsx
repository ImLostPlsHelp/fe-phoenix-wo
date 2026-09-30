import { LayoutGrid, Calendar, Users, Sliders, Settings, LogOut } from "lucide-react";

export default function SideBarAdmin() {
  return (
    <aside className="flex flex-col w-64 h-screen bg-white text-gray-secondary justify-between p-4 shadow-lg text-gray-secondary text-sm font-plus-jkt font-medium">
      {/* Bagian Atas: Logo & Navigasi */}
      <div className="flex flex-col">
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="w-24 h-24 object-contain my-4" />

        <div className="w-full flex flex-col mt-4">
          <p className="tracking-wider mb-2">MENU UTAMA</p>
          
          <ul className="flex flex-col w-full gap-2">
            <li className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-rose-50 text-[#6d1f2b] cursor-pointer">
              <LayoutGrid className="w-5 h-5 text-[#6d1f2b]" />
              <span>Dasbor Utama</span>
            </li>
            <li className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-stone-50 transition-colors cursor-pointer">
              <Calendar className="w-5 h-5 text-gray-secondary" />
              <span>Manajemen Pernikahan</span>
            </li>
            <li className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-stone-50 transition-colors cursor-pointer">
              <Users className="w-5 h-5 text-gray-secondary" />
              <span>Manajemen Pernikahan</span>
            </li>
            <li className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-stone-50 transition-colors cursor-pointer">
              <Sliders className="w-5 h-5 text-gray-secondary" />
              <span>Manajemen Pernikahan</span>
            </li>
          </ul>
        </div>

        {/* Lainnya */}
        <div className="w-full mt-6">
          <p className="tracking-wider mb-2">LAINNYA</p>
          <a className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-secondary hover:bg-stone-50 transition-colors cursor-pointer">
            <Settings className="w-5 h-5 text-gray-secondary" />
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

        <a className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-secondary hover:bg-stone-50 transition-colors cursor-pointer">
          <LogOut className="w-5 h-5 text-gray-secondary" />
          <span>Keluar</span>
        </a>
      </div>
    </aside>
  );
}