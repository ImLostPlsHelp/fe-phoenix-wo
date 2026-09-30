import { Trash } from "lucide-react";

export default function FooterTambahAcara() {
    return (
        <section className="flex flex-row justify-between items-center p-8 bg-white border border-admin-cream text-sm font-plus-jkt text-black">
            <button className="flex items-center gap-2 border rounded-lg px-6 py-3 border-maroon text-maroon">
                <Trash className="w-4 h-4" />
                <span>Hapus</span>
            </button>
            <section className="flex flex-row gap-4">
                <button className="flex items-center gap-2 px-6 py-3 border rounded-lg border-gray-tertiary text-gray-secondary">
                    <span>{"<"} Sebelumnya</span>
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border rounded-lg bg-maroon text-white">
                    <span>Selanjutnya {">"}</span>
                </button>
            </section>
        </section>
    );
}