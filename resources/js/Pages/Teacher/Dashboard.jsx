import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import TeacherSidebar from "@/Components/TeacherSidebar";

export default function Dashboard() {
    const { auth } = usePage().props;
    const user = auth?.user;

    const teacherFeatures = [
        {
            number: "01",
            title: "Materi Pembelajaran",
            description:
                "Buka materi pembelajaran klasifikasi iklim Köppen dan pelajari konten yang tersedia di GeoBot.",
            href: "/teacher/materials",
            icon: "▧",
            action: "Buka Materi",
        },
        {
            number: "02",
            title: "Chatbot GeoBot",
            description:
                "Gunakan chatbot untuk mencoba klasifikasi iklim berdasarkan data suhu dan curah hujan.",
            href: "/teacher/chatbot",
            icon: "☏",
            action: "Buka Chatbot",
        },
        {
            number: "03",
            title: "Data Siswa",
            description:
                "Tambah akun siswa dan lihat daftar siswa yang terdaftar di GeoBot.",
            href: route("teacher.students.index"),
            icon: "♙",
            action: "Kelola Data Siswa",
        },
        {
            number: "04",
            title: "Tambah Materi",
            description:
                "Buat dan tambahkan materi pembelajaran baru untuk mendukung kegiatan belajar siswa.",
            href: "/teacher/materials/create",
            icon: "＋",
            action: "Tambah Materi",
        },
        {
            number: "05",
            title: "Tambah Quiz",
            description:
                "Buat kuis untuk mengevaluasi pemahaman siswa mengenai klasifikasi iklim Köppen.",
            href: "/teacher/quizzes/create",
            icon: "✎",
            action: "Buat Quiz",
        },
        {
            number: "06",
            title: "Hasil Kuis Siswa",
            description:
                "Lihat hasil pengerjaan kuis, periksa nilai, dan pantau perkembangan pemahaman siswa.",
            href: "/teacher/grades",
            icon: "▥",
            action: "Lihat Hasil Kuis",
        },
    ];

    return (
        <>
            <Head title="Dashboard Guru - GeoBot" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                {/* SIDEBAR BERSAMA */}
                <TeacherSidebar />

                {/* MAIN CONTENT */}
                <main className="min-h-screen min-w-0 lg:ml-72">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                        {/* HEADER */}
                        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm font-medium text-[#087b68]">
                                    Panel Pengajar
                                </p>

                                <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#123b49] sm:text-3xl">
                                    Dashboard Guru
                                </h2>

                                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
                                    Akses pembelajaran, kelola siswa, buat
                                    materi dan kuis, serta pantau hasil evaluasi.
                                </p>
                            </div>

                            <div className="flex items-center gap-3 rounded-2xl border border-[#d4e4e1] bg-white px-4 py-3 shadow-sm">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9f99d] font-bold text-[#123b49]">
                                    {(user?.name ?? "G")
                                        .charAt(0)
                                        .toUpperCase()}
                                </div>

                                <div className="min-w-0">
                                    <p className="max-w-[180px] truncate text-sm font-semibold text-[#123b49]">
                                        {user?.name ?? "Guru"}
                                    </p>

                                    <p className="text-xs text-slate-500">
                                        Selamat mengajar!
                                    </p>
                                </div>
                            </div>
                        </header>

                        {/* WELCOME BANNER */}
                        <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-6 text-white shadow-lg sm:p-8">
                            <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full border-[30px] border-white/5" />

                            <div className="absolute -bottom-24 right-36 h-48 w-48 rounded-full bg-white/5" />

                            <div className="relative z-10 max-w-2xl">
                                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-teal-50">
                                    Ruang Kerja Guru
                                </span>

                                <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                                    Selamat datang, {user?.name ?? "Guru"}!
                                </h3>

                                <p className="mt-3 max-w-xl text-sm leading-relaxed text-teal-50 sm:text-base">
                                    Gunakan GeoBot untuk mendukung kegiatan
                                    belajar mengajar. Akses materi dan chatbot,
                                    kelola akun siswa, tambahkan materi serta
                                    kuis, dan pantau hasil evaluasi siswa.
                                </p>
                            </div>
                        </section>

                        {/* FEATURE SECTION */}
                        <div className="mb-5">
                            <h3 className="text-xl font-bold text-[#123b49]">
                                Fitur Guru
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                                Semua fitur pembelajaran dan pengelolaan kelas
                                tersedia melalui menu berikut.
                            </p>
                        </div>

                        {/* FEATURE CARDS */}
                        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {teacherFeatures.map((card) => (
                                <Link
                                    key={card.number}
                                    href={card.href}
                                    className="group rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#87c9b5] hover:shadow-lg"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e5f5ef] text-2xl text-[#087b68] transition group-hover:bg-[#d9f99d]">
                                            {card.icon}
                                        </div>

                                        <span className="text-sm font-semibold text-[#a5c8bd]">
                                            {card.number}
                                        </span>
                                    </div>

                                    <h4 className="mt-5 text-lg font-bold text-[#123b49]">
                                        {card.title}
                                    </h4>

                                    <p className="mt-2 min-h-[72px] text-sm leading-relaxed text-slate-500">
                                        {card.description}
                                    </p>

                                    <div className="mt-5 flex items-center justify-between border-t border-[#e7f0ee] pt-4">
                                        <span className="text-sm font-semibold text-[#087b68]">
                                            {card.action}
                                        </span>

                                        <span className="text-lg text-[#087b68] transition group-hover:translate-x-1">
                                            →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </section>

                        {/* INFORMASI HAK AKSES */}
                        <section className="mt-8 rounded-2xl border border-[#d4e4e1] bg-white p-5">
                            <div className="flex items-start gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e5f5ef] text-lg text-[#087b68]">
                                    ℹ
                                </div>

                                <div>
                                    <h3 className="font-semibold text-[#123b49]">
                                        Informasi Hak Akses Guru
                                    </h3>

                                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                                        Guru dapat menggunakan fitur
                                        pembelajaran GeoBot, mengelola data
                                        siswa, menambahkan materi dan kuis,
                                        serta melihat hasil evaluasi siswa.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* FOOTER */}
                        <footer className="mt-8 rounded-2xl border border-[#d4e4e1] bg-white/70 px-5 py-4">
                            <p className="text-sm leading-relaxed text-slate-500">
                                <span className="font-semibold text-[#123b49]">
                                    GeoBot
                                </span>{" "}
                                — Media pembelajaran klasifikasi iklim Köppen
                                untuk mendukung kegiatan belajar mengajar.
                            </p>
                        </footer>
                    </div>
                </main>
            </div>
        </>
    );
}