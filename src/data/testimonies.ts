export type Testimony = {
    id: string;
    name: string;
    eventPlace: string;
    eventYear: number;
    quote: string;
    rating: number; // 1–5
};

export const testimonies: Testimony[] = [
    {
        id: "1",
        name: "Nama Orang",
        eventPlace: "Malang",
        eventYear: 2024,
        quote: "Timnya sangat membantu dari awal persiapan sampai hari pernikahan. Kami bisa menikmati acara tanpa harus khawatir dengan detail teknis.",
        rating: 5,
    },
    {
        id: "2",
        name: "Nama Orang",
        eventPlace: "Surabaya",
        eventYear: 2024,
        quote: "Timnya sangat membantu dari awal persiapan sampai hari pernikahan. Kami bisa menikmati acara tanpa harus khawatir dengan detail teknis.",
        rating: 5,
    },
    {
        id: "3",
        name: "Nama Orang",
        eventPlace: "Sidoarjo",
        eventYear: 2023,
        quote: "Timnya sangat membantu dari awal persiapan sampai hari pernikahan. Kami bisa menikmati acara tanpa harus khawatir dengan detail teknis.",
        rating: 5,
    },
    {
        id: "4",
        name: "Nama Orang",
        eventPlace: "Batu",
        eventYear: 2023,
        quote: "Timnya sangat membantu dari awal persiapan sampai hari pernikahan. Kami bisa menikmati acara tanpa harus khawatir dengan detail teknis.",
        rating: 4,
    },
    {
        id: "5",
        name: "Nama Orang",
        eventPlace: "Gresik",
        eventYear: 2024,
        quote: "Timnya sangat membantu dari awal persiapan sampai hari pernikahan. Kami bisa menikmati acara tanpa harus khawatir dengan detail teknis.",
        rating: 5,
    },
];
