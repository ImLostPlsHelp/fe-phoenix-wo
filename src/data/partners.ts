// TODO
export type Partner = {
    id: string;
    name: string;
    logoUrl: string;
};

export const partners: Partner[] = [
    {
        id: "pertamina",
        name: "Pertamina",
        logoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Pertamina_Logo.svg?width=240",
    },
    {
        id: "unesa",
        name: "UNESA",
        logoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/State_University_of_Surabaya_logo.png?width=240",
    },
    {
        id: "pama",
        name: "PAMA",
        logoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Pamapersada_Nusantara.png?width=240",
    },
    {
        id: "bsi",
        name: "BSI",
        logoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Bank_Syariah_Indonesia.svg?width=240",
    },
    // Sumber logo resmi belum dipastikan — masih placeholder, ganti manual:
    { id: "solas", name: "SOLAS", logoUrl: "https://placehold.co/240x100?text=SOLAS" },
    { id: "ppa", name: "PPA", logoUrl: "https://placehold.co/240x100?text=PPA" },
    { id: "seblak-mamang-ndut", name: "Seblak Mamang Ndut", logoUrl: "https://placehold.co/240x100?text=Seblak+Mamang+Ndut" },
    { id: "pemkot-malang", name: "Pemerintah Kota Malang", logoUrl: "https://placehold.co/240x100?text=Pemkot+Malang" },
    { id: "umm", name: "Universitas Muhammadiyah Malang", logoUrl: "https://placehold.co/240x100?text=UMM" },
    { id: "jamkrindo", name: "Jamkrindo", logoUrl: "https://placehold.co/240x100?text=Jamkrindo" },
    { id: "kakang-mbakyu-malang", name: "Kakang Mbakyu Kota Malang", logoUrl: "https://placehold.co/240x100?text=Kakang+Mbakyu" },
];