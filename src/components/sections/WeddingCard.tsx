import { weddingList } from '../../data/weddingList';
import { Eye } from 'lucide-react';

export default function WeddingCard() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 font-plus-jkt text-sm">
      <h1 className="text-lg font-semibold text-black col-span-full">
        Daftar Pernikahan
      </h1>

      {weddingList.map((wedding, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6 flex flex-col justify-between gap-4"
        >
          {/* Informasi Teks */}
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-900 leading-tight">
              {wedding.nama_klien}
            </h3>
            <p className="text-stone-500 text-sm">{wedding.tanggal_acara}</p>
            <p className="text-stone-900 font-semibold pt-2">
              {wedding.sisa_tagihan}
            </p>
          </div>

          {/* Tombol Lihat Detail di Pojok Kiri Bawah */}
          <button className="w-fit flex self-end gap-2 text-maroon hover:bg-rose-50 border border-maroon rounded-lg px-3.5 py-1.5 transition-colors font-medium text-xs">
            <Eye size={15} />
            <span>Lihat Detail</span>
          </button>
        </div>
      ))}
    </section>
  );
}