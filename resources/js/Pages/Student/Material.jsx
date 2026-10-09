import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import StudentSidebar from "@/Components/StudentSidebar";

export default function Material({ completedModules = 0 }) {
    const [search, setSearch] = useState("");

    // Daftar modul materi
    const modules = [
        {
            number: 1,
            icon: "▤",
            title: "Pengertian Klasifikasi Iklim",
            description:
                "Mengenal pengertian iklim dan dasar klasifikasi iklim Köppen.",
            href: route("student.modul1"),
        },
        {
            number: 2,
            icon: "🌡",
            title: "Kriteria Suhu dan Curah Hujan",
            description:
                "Memahami unsur suhu dan curah hujan yang digunakan dalam klasifikasi.",
            href: route("student.modul2"),
        },
        {
            number: 3,
            icon: "◎",
            title: "Kelompok Iklim A, B, C, D, dan E",
            description:
                "Mengenal lima kelompok utama iklim berdasarkan sistem Köppen.",
            href: route("student.modul3"),
        },
        {
            number: 4,
            icon: "⚖",
            title: "Perbedaan Tipe Iklim yang Mirip",
            description:
                "Membandingkan karakteristik tipe iklim yang memiliki ciri serupa.",
            href: route("student.modul4"),
        },
        {
            number: 5,
            icon: "▥",
            title: "Klasifikasi Wilayah Berdasarkan Data",
            description:
                "Berlatih membaca data suhu dan curah hujan untuk menentukan tipe iklim.",
            href: route("student.modul5"),
        },
        {
            number: 6,
            icon: "♧",
            title: "Dampak Iklim terhadap Kehidupan",
            description:
                "Menghubungkan karakteristik iklim dengan lingkungan dan aktivitas manusia.",
            href: route("student.modul6"),
        },
    ];

    const filteredModules = modules.filter((module) => {
        const query = search.toLowerCase().trim();

        return (
            module.title.toLowerCase().includes(query) ||
            module.description.toLowerCase().includes(query)
        );
    });

    const totalModules = modules.length;

    const progressPercentage =
        totalModules > 0
            ? Math.round((completedModules / totalModules) * 100)
            : 0;

    return (
        <>
            <Head title="Materi Köppen | IklimKöppenBot" />

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
                                    Media Pembelajaran Kelas X Fase E Materi
                                    Iklim Köppen
                                </p>

                                <h2 className="mt-1 text-3xl font-bold text-[#123b49]">
                                    Materi Iklim Köppen
                                </h2>

                                <p className="mt-1 text-gray-500">
                                    Mempelajari klasifikasi iklim berdasarkan
                                    suhu dan curah hujan.
                                </p>
                            </div>

                            {/* Search */}
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
                                    placeholder="Cari modul materi..."
                                    aria-label="Cari modul materi"
                                    className="w-full rounded-xl border border-[#c8dcda] bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#16805f] focus:ring-2 focus:ring-[#16805f]/10"
                                />
                            </div>
                        </div>
                    </header>

                    {/* PAGE CONTENT */}
                    <main className="mx-auto max-w-[1500px] px-6 py-8 sm:px-10">
                        {/* HERO MATERI */}
                        <section className="grid overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm md:min-h-[300px] md:grid-cols-[1.15fr_0.85fr]">
                            <div className="flex flex-col justify-center px-8 py-9 sm:px-10">
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                                    Media Pembelajaran Iklim Köppen
                                </p>

                                <h3 className="mt-4 max-w-xl text-2xl font-bold leading-tight text-[#123b49] sm:text-3xl">
                                    Pengantar Klasifikasi Iklim Köppen
                                </h3>

                                <p className="mt-4 max-w-xl leading-relaxed text-gray-600">
                                    Mengenali konsep dasar dan cara kerja
                                    klasifikasi iklim Köppen melalui enam modul
                                    pembelajaran.
                                </p>

                                <div className="mt-6">
                                    <a
                                        href="#daftar-modul"
                                        className="inline-flex items-center gap-3 rounded-xl bg-[#d9f99d] px-5 py-3 font-semibold text-[#123b49] transition hover:bg-[#c7ef7e]"
                                    >
                                        <span className="text-xl">▤</span>
                                        Mulai Belajar
                                        <span>→</span>
                                    </a>
                                </div>
                            </div>

                            {/* Ilustrasi dekoratif */}
                            <div className="relative hidden min-h-[280px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#e8f8f1] via-[#f3fbf8] to-[#d8f3eb] md:flex">
                                <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#b8e6d8]" />

                                <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full border border-[#b8e6d8]" />

                                <div className="relative flex h-52 w-52 items-center justify-center rounded-full border-8 border-[#087b70]/20 bg-[#d7f2e9] shadow-inner">
                                    <div className="flex h-40 w-40 items-center justify-center rounded-full border-2 border-[#168b7b] bg-[#b8e7d8] text-8xl">
                                        🌐
                                    </div>
                                </div>

                                <div className="absolute bottom-8 left-10 text-4xl">
                                    🌡️
                                </div>

                                <div className="absolute right-12 top-10 text-3xl">
                                    💧
                                </div>

                                <p className="absolute bottom-5 right-8 text-xs font-bold uppercase tracking-[0.2em] text-[#16805f]">
                                    Kenali Iklim Dunia
                                </p>
                            </div>
                        </section>

                        {/* DAFTAR MODUL */}
                        <section
                            id="daftar-modul"
                            className="mt-8 scroll-mt-6"
                        >
                            <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#123b49]">
                                        Modul Materi
                                    </h3>

                                    <p className="mt-1 text-gray-500">
                                        Mempelajari setiap topik secara
                                        berurutan.
                                    </p>
                                </div>

                                <span className="text-sm font-medium text-[#16805f]">
                                    {modules.length} Modul Pembelajaran
                                </span>
                            </div>

                            <div className="space-y-3">
                                {filteredModules.map((module) => {
                                    const isCompleted =
                                        module.number <= completedModules;

                                    return (
                                        <Link
                                            key={module.number}
                                            href={module.href}
                                            className="group flex items-center gap-4 rounded-2xl border border-[#d4e4e1] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#a8d9c9] hover:shadow-md sm:px-5"
                                        >
                                            {/* ICON MODUL */}
                                            <div
                                                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl transition ${
                                                    isCompleted
                                                        ? "bg-[#dff5e9] text-[#087b68]"
                                                        : "bg-[#e1f5ed] text-[#087b68] group-hover:bg-[#d1f0e4]"
                                                }`}
                                            >
                                                {isCompleted
                                                    ? "✓"
                                                    : module.icon}
                                            </div>

                                            {/* INFORMASI MODUL */}
                                            <div className="min-w-0 flex-1">
                                                <p className="text-xs font-semibold uppercase tracking-wide text-[#16805f]">
                                                    Modul {module.number}
                                                </p>

                                                <h4 className="mt-1 font-semibold text-[#123b49] sm:text-lg">
                                                    {module.title}
                                                </h4>

                                                <p className="mt-1 hidden text-sm leading-relaxed text-gray-500 sm:block">
                                                    {module.description}
                                                </p>
                                            </div>

                                            {/* STATUS */}
                                            <div className="shrink-0">
                                                {isCompleted ? (
                                                    <span className="hidden rounded-full bg-[#e3f4ee] px-3 py-1 text-xs font-semibold text-[#16805f] sm:inline-block">
                                                        Selesai
                                                    </span>
                                                ) : (
                                                    <span className="text-2xl text-[#16805f] transition group-hover:translate-x-1">
                                                        →
                                                    </span>
                                                )}
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>

                            {filteredModules.length === 0 && (
                                <div className="rounded-2xl border border-dashed border-[#c8dcda] bg-white p-8 text-center text-gray-500">
                                    Tidak ditemukan modul yang cocok dengan
                                    pencarian.
                                </div>
                            )}
                        </section>

                        {/* PROGRES MATERI */}
                        <section className="mt-8 overflow-hidden rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">
                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#07384b] text-3xl text-white">
                                    ☷
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-[#123b49]">
                                        Progres Materi
                                    </h3>

                                    <p className="mt-1 text-gray-600">
                                        {completedModules} dari {totalModules}{" "}
                                        modul selesai
                                    </p>
                                </div>

                                <div className="text-3xl font-bold text-[#087b68]">
                                    {progressPercentage}%
                                </div>
                            </div>

                            {/* PROGRESS BAR */}
                            <div
                                className="mt-6 h-3 overflow-hidden rounded-full bg-gray-100"
                                role="progressbar"
                                aria-label="Progres penyelesaian materi"
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-valuenow={progressPercentage}
                            >
                                <div
                                    className="h-full rounded-full bg-gradient-to-r from-[#087b68] to-[#a3d94b] transition-all duration-500"
                                    style={{
                                        width: `${progressPercentage}%`,
                                    }}
                                />
                            </div>

                            <p className="mt-3 text-sm text-gray-500">
                                Selesaikan modul secara bertahap untuk
                                meningkatkan progres belajarmu.
                            </p>
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}