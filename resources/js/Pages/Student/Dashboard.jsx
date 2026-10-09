import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";

import StudentSidebar from "../../Components/StudentSidebar";

export default function Dashboard({ auth }) {
    const user = auth.user;

    const [search, setSearch] = useState("");

    const learningCards = [
        {
            icon: "☷",
            title: "Petunjuk",
            description:
                "Ketahui langkah belajar dan tips penggunaan media.",
            href: route("student.guide"),
            isPage: true,
        },
        {
            icon: "◎",
            title: "Tujuan Pembelajaran",
            description:
                "Pahami kemampuan yang akan dilatih pada materi ini.",
            href: route("student.objectives"),
            isPage: true,
        },
        {
            icon: "▣",
            title: "Materi Köppen",
            description:
                "Pelajari klasifikasi iklim berdasarkan suhu dan curah hujan.",
            href: route("student.material"),
            isPage: true,
        },
        {
            icon: "◇",
            title: "Tantangan",
            description:
                "Tentukan kelompok iklim dari lima kasus sederhana.",
            href: "#tantangan",
        },
        {
            icon: "◌",
            title: "Chatbot",
            description:
                "Tanyakan konsep Köppen kepada IklimKöppenBot rule-based.",
            href: "#chatbot",
        },
        {
            icon: "▥",
            title: "Hasil Skor",
            description:
                "Tinjau jumlah benar dan persentase belajarmu.",
            href: "#hasil-skor",
        },
    ];

    const filteredCards = learningCards.filter((card) => {
        const query = search.toLowerCase().trim();

        return (
            card.title.toLowerCase().includes(query) ||
            card.description.toLowerCase().includes(query)
        );
    });

    return (
        <>
            <Head title="Beranda | IklimKöppenBot" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                {/* SIDEBAR */}
                <StudentSidebar />

                {/* MAIN CONTENT */}
                <div className="min-h-screen md:ml-64">
                    {/* HEADER */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-5 px-6 py-6 sm:flex-row sm:items-center sm:px-10">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                    Media Pembelajaran Kelas X Fase E
                                    Materi Iklim Köppen
                                </p>

                                <h2 className="mt-1 text-3xl font-bold text-[#123b49]">
                                    Beranda
                                </h2>

                                <p className="mt-1 text-gray-500">
                                    Belajar tentang pola suhu dan curah hujan
                                    dunia.
                                </p>
                            </div>

                            {/* SEARCH */}
                            <div className="relative w-full sm:max-w-xs">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                    ⌕
                                </span>

                                <input
                                    type="search"
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(e.target.value)
                                    }
                                    placeholder="Cari materi atau bantuan..."
                                    className="w-full rounded-xl border border-[#c8dcda] bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#16805f] focus:ring-2 focus:ring-[#16805f]/10"
                                />
                            </div>
                        </div>
                    </header>

                    {/* KONTEN */}
                    <main className="mx-auto max-w-[1500px] px-6 py-8 sm:px-10">
                        {/* HERO */}
                        <section className="grid overflow-hidden rounded-3xl bg-[#07384b] shadow-xl md:min-h-[340px] md:grid-cols-[1.15fr_0.85fr]">
                            <div className="flex flex-col justify-center px-8 py-10 sm:px-12">
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a8e5ce]">
                                    Halo Anak-Anak !!!
                                    <br />
                                    Selamat datang di Media Belajar
                                    Iklim Köppen Bot,
                                    <br />
                                    Pantun dulu yaa Bestii
                                    <br />
                                    Jalan-Jalan ke Surabaya,
                                    <br />
                                    Mampir dulu ke Kota Lama,
                                    <br />
                                    Halo SMA Bhayangkari 1 Surabaya,
                                    <br />
                                    Mari belajar Iklim Köppen dengan Suka
                                    Cita
                                </p>

                                <h3 className="mt-5 max-w-xl text-2xl font-bold leading-tight text-white sm:text-3xl">
                                    Pembelajaran materi klasifikasi iklim
                                    Köppen.
                                </h3>

                                <p className="mt-4 max-w-xl leading-relaxed text-[#d0e4e7]">
                                    Pelajari klasifikasi iklim Köppen,
                                    berlatih melalui kasus sederhana, lalu
                                    berdiskusi dengan IklimKöppenBot berbasis
                                    aturan lokal.
                                </p>

                                <div className="mt-6">
                                    <Link
                                        href={route("student.material")}
                                        className="inline-flex items-center rounded-xl bg-[#d9f99d] px-5 py-3 font-semibold text-[#123b49] transition hover:bg-[#c7ef7e]"
                                    >
                                        Mulai Belajar →
                                    </Link>
                                </div>
                            </div>

                            {/* VISUAL HERO */}
                            <div className="relative hidden min-h-[280px] overflow-hidden bg-[#111333] md:block">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#17234b] via-[#10142e] to-[#061b2d]" />

                                <div
                                    className="absolute inset-0 opacity-30"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, #a6d5df 1px, transparent 1px)",
                                        backgroundSize: "12px 12px",
                                    }}
                                />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-8xl opacity-80">
                                            🌐
                                        </div>

                                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#b6d7df]">
                                            Menjelajahi Iklim yang ada di Dunia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* JALUR BELAJAR */}
                        <section className="mt-8">
                            <h3 className="text-2xl font-bold text-[#123b49]">
                                Ini adalah alur belajar kamu
                            </h3>

                            <p className="mt-1 text-gray-500">
                                Ikuti bagian berikut secara berurutan atau
                                gunakan menu untuk berpindah.
                            </p>

                            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                                {filteredCards.map((card) => {
                                    const cardClass =
                                        "group rounded-2xl border border-[#d4e4e1] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md";

                                    const cardContent = (
                                        <>
                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e1f5ed] text-xl font-semibold text-[#087b68] transition group-hover:bg-[#d1f0e4]">
                                                {card.icon}
                                            </div>

                                            <h4 className="mt-4 text-lg font-bold text-[#123b49]">
                                                {card.title}
                                            </h4>

                                            <p className="mt-2 leading-relaxed text-gray-500">
                                                {card.description}
                                            </p>
                                        </>
                                    );

                                    return card.isPage ? (
                                        <Link
                                            key={card.title}
                                            href={card.href}
                                            className={cardClass}
                                        >
                                            {cardContent}
                                        </Link>
                                    ) : (
                                        <a
                                            key={card.title}
                                            href={card.href}
                                            className={cardClass}
                                        >
                                            {cardContent}
                                        </a>
                                    );
                                })}
                            </div>

                            {filteredCards.length === 0 && (
                                <div className="mt-5 rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center text-gray-500">
                                    Tidak ditemukan materi yang cocok dengan
                                    pencarian.
                                </div>
                            )}
                        </section>
                    </main>

                    {/* FOOTER */}
                    <footer className="mt-8 border-t border-[#d7e5e3] bg-white">
                        <div className="mx-auto max-w-[1500px] px-6 py-8 sm:px-10">
                            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                                {/* BRAND */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e1f5ed] text-2xl">
                                        🌍
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-[#123b49]">
                                            IklimKöppenBot
                                        </h3>

                                        <p className="mt-1 max-w-md text-sm leading-relaxed text-gray-500">
                                            Media pembelajaran interaktif untuk
                                            mempelajari klasifikasi iklim
                                            Köppen berdasarkan suhu dan curah
                                            hujan.
                                        </p>
                                    </div>
                                </div>

                                {/* INFO */}
                                <div className="text-left md:text-right">
                                    <p className="text-sm font-semibold text-[#123b49]">
                                        Media Pembelajaran Kelas X
                                    </p>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Belajar • Berlatih • Memahami Iklim
                                    </p>
                                </div>
                            </div>

                            {/* COPYRIGHT */}
                            <div className="mt-6 border-t border-[#e5eeec] pt-5 text-center">
                                <p className="text-xs text-gray-400">
                                    © {new Date().getFullYear()} IklimKöppenBot.
                                    Semua hak dilindungi.
                                </p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}