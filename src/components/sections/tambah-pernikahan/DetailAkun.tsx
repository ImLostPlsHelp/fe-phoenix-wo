// import {Calendar} from "lucide-react";

export default function DetailAkun() {
    return (
        <section className="flex flex-col gap-9 text-sm font-plus-jkt text-black">
            <section className="flex flex-col gap-8 p-8 bg-white rounded-lg border border-admin-cream">
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold">Detail Akun</h1>
                    <p className="text-gray-secondary">Pastikan data akun yang dibuat sudah benar.</p>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email-klien" className="w-1/4">Nama Email Klien</label>
                        <input type="text" id="email-klien" className="flex-1 border border-admin-cream rounded-lg px-3 py-2" placeholder="Masukkan email klien..." />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password-klien" className="w-1/4">Password Klien</label>
                        <input type="password" id="password-klien" className="flex-1 border border-admin-cream rounded-lg px-3 py-2" placeholder="Masukkan password klien..." />
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-8 p-8 bg-white rounded-lg border border-admin-cream">
                <h1 className="font-bold">Tanggal Acara</h1>
                <p className="text-gray-secondary">Pastikan tanggal acara yang dibuat sudah benar.</p>
                <div className="flex flex-col gap-1">
                    <label htmlFor="tanggal-acara" className="w-1/4">
                    Tanggal Acara</label>
                    <input type="date" id="tanggal-acara" className="flex-1 border border-admin-cream rounded-lg px-3 py-2" />
                </div>
            </section>
        </section>
    );
}