import SideBarAdmin from "../../components/layout/public/SideBarAdmin.tsx";
import TambahAcaraBar from "../../components/layout/public/TambahAcaraBar.tsx";
import DetailAkun from "../../components/sections/tambah-pernikahan/DetailAkun.tsx";
import FooterTambahAcara from "../../components/sections/tambah-pernikahan/FooterTambahAcara.tsx";

export default function TambahPernikahan() {
    return (
        <section className="flex flex-row h-screen w-full overflow-hidden bg-cream">
            <SideBarAdmin />
            <main className="flex-1 flex flex-col h-full overflow-y-auto">
                <TambahAcaraBar currentStep={1} />
                <div className="flex-1 p-9">
                    <DetailAkun />
                </div>
                <FooterTambahAcara />
            </main>
        </section>
    );
}