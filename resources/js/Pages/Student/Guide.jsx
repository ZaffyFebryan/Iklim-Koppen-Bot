import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import StudentSidebar from "../../Components/StudentSidebar";

export default function Guide() {
    const { auth } = usePage().props;
    const user = auth?.user;

    const dashboardUrl =
        user?.role === "teacher"
            ? route("teacher.dashboard")
            : route("student.dashboard");

    const steps = [
        {
            number: "1",
            icon: "◎",
            title: "Buka Tujuan Pembelajaran",
            description:
                "Pahami kompetensi dan kemampuan yang akan kamu capai setelah mempelajari klasifikasi iklim Köppen.",
        },
        {
            number: "2",
            icon: "▣",
            title: "Pelajari Materi Köppen",
            description:
                "Baca konsep klasifikasi iklim, karakteristik setiap kelompok, serta contoh wilayahnya.",
        },
        {
            number: "3",
            icon: "◇",
            title: "Coba Tantangan",
            description:
                "Jawab studi kasus untuk menguji pemahamanmu dalam menentukan kelompok iklim berdasarkan karakteristiknya.",
        },
        {
            number: "4",
            icon: "▥",
            title: "Lihat Hasil Skor",
            description:
                "Periksa jumlah jawaban benar, persentase nilai, dan perkembangan hasil belajarmu.",
        },
        {
            number: "5",
            icon: "☏",
            title: "Gunakan Chatbot IklimKöppenBot",
            description:
                "Tanyakan konsep iklim Köppen dan dapatkan bantuan belajar melalui chatbot berbasis aturan.",
        },
    ];

    return (
        <>
            <Head title="Petunjuk | IklimKöppenBot" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                {/* SIDEBAR */}
                <StudentSidebar />

                {/* KONTEN UTAMA */}
                <div className="min-h-screen md:ml-64">
                    {/* HEADER */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-5 px-6 py-6 sm:px-10 md:flex-row md:items-center">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                    Media Pembelajaran Kelas X Fase E
                                    Materi Iklim Köppen
                                </p>

                                <h2 className="mt-1 text-3xl font-bold text-[#123b49]">
                                    Petunjuk
                                </h2>

                                <p className="mt-1 text-gray-500">
                                    Ikuti langkah berikut untuk mulai belajar
                                    dengan IklimKöppenBot.
                                </p>
                            </div>
                        </div>
                    </header>

                    {/* MAIN CONTENT */}
                    <main className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10">
                        {/* PENGANTAR */}
                        <section className="mb-8">
                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                                Selamat datang
                            </p>

                            <h3 className="mt-1 text-2xl font-bold text-[#123b49]">
                                Mulai pengalaman belajarmu
                            </h3>

                            <p className="mt-2 max-w-3xl leading-relaxed text-gray-500">
                                IklimKöppenBot membantu kamu memahami
                                klasifikasi iklim Köppen melalui materi,
                                latihan kasus, dan evaluasi hasil belajar.
                                Ikuti panduan berikut agar proses belajarmu
                                lebih terarah.
                            </p>
                        </section>

                        {/* KENALI MENU */}
                        <section className="overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            <div className="p-6 sm:p-8">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e1f5ed] text-xl text-[#087b68]">
                                        ☷
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-[#123b49]">
                                            Kenali menu utama yang tersedia
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Ini adalah fitur yang dapat kamu
                                            gunakan.
                                        </p>
                                    </div>
                                </div>

                                {/* ILUSTRASI DASHBOARD */}
                                <div className="mt-6 overflow-hidden rounded-2xl border border-[#d4e4e1] bg-[#f3f9f8] p-3 sm:p-5">
                                    <div className="flex min-h-[250px] overflow-hidden rounded-xl border border-[#d4e4e1] bg-white shadow-sm">
                                        {/* MINI SIDEBAR */}
                                        <div className="hidden w-1/4 max-w-[170px] flex-col bg-[#07384b] p-3 text-white sm:flex">
                                            <div className="mb-5 flex items-center gap-2">
                                                <span className="text-lg">
                                                    🌍
                                                </span>

                                                <span className="font-bold">
                                                    IklimKöppenBot
                                                </span>
                                            </div>

                                            <div className="space-y-2 text-xs">
                                                {[
                                                    "⌂  Beranda",
                                                    "☷  Petunjuk",
                                                    "◎  Tujuan Belajar",
                                                    "☼  Materi Köppen",
                                                    "◇  Tantangan",
                                                    "▥  Hasil Skor",
                                                ].map((item, index) => (
                                                    <div
                                                        key={item}
                                                        className={`rounded-lg px-2 py-2 ${
                                                            index === 1
                                                                ? "bg-[#e8f8f1] font-semibold text-[#07384b]"
                                                                : "text-teal-50"
                                                        }`}
                                                    >
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* MINI DASHBOARD */}
                                        <div className="min-w-0 flex-1 p-4 sm:p-5">
                                            <p className="text-[9px] font-bold uppercase tracking-wider text-[#16805f]">
                                                Media Pembelajaran Kelas X Fase
                                                E Materi Iklim Köppen
                                            </p>

                                            <h4 className="mt-1 text-lg font-bold text-[#123b49]">
                                                Beranda
                                            </h4>

                                            <div className="mt-3 grid overflow-hidden rounded-lg bg-[#07384b] sm:grid-cols-2">
                                                <div className="p-4 text-white">
                                                    <p className="text-[9px] font-bold uppercase text-[#a8e5ce]">
                                                        Selamat datang di
                                                        IklimKöppenBot
                                                    </p>

                                                    <p className="mt-2 text-sm font-bold">
                                                        Membaca pola iklim dunia
                                                        dengan sistem Köppen.
                                                    </p>

                                                    <div className="mt-3 inline-block rounded-md bg-[#d9f99d] px-3 py-1 text-[9px] font-bold text-[#123b49]">
                                                        Mulai Belajar
                                                    </div>
                                                </div>

                                                <div className="hidden items-center justify-center bg-[#111333] text-5xl sm:flex">
                                                    🌐
                                                </div>
                                            </div>

                                            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                                                {[
                                                    "Petunjuk",
                                                    "Tujuan Belajar",
                                                    "Materi",
                                                    "Tantangan",
                                                    "Chatbot",
                                                    "Hasil Skor",
                                                ].map((item) => (
                                                    <div
                                                        key={item}
                                                        className="rounded-lg border border-[#d4e4e1] bg-white p-3"
                                                    >
                                                        <div className="mb-2 h-5 w-5 rounded-md bg-[#e1f5ed]" />

                                                        <p className="text-[10px] font-bold text-[#123b49]">
                                                            {item}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="mt-3 text-center text-xs text-gray-500">
                                    Tampilan Beranda IklimKöppenBot.
                                </p>
                            </div>
                        </section>

                        {/* LANGKAH BELAJAR */}
                        <section className="mt-10">
                            <div className="mb-6">
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                                    Panduan penggunaan
                                </p>

                                <h3 className="mt-1 text-2xl font-bold text-[#123b49]">
                                    Ikuti langkah belajar berikut
                                </h3>

                                <p className="mt-2 text-gray-500">
                                    Selesaikan setiap bagian secara berurutan
                                    untuk memahami materi dengan lebih baik.
                                </p>
                            </div>

                            {/* TIMELINE */}
                            <div className="relative space-y-4">
                                <div className="absolute bottom-10 left-5 top-10 hidden w-0.5 bg-[#b9ddd0] sm:block" />

                                {steps.map((step) => (
                                    <div
                                        key={step.number}
                                        className="relative sm:pl-14"
                                    >
                                        {/* NOMOR */}
                                        <div className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#f3f9f8] bg-[#087b68] text-sm font-bold text-white shadow-sm sm:flex">
                                            {step.number}
                                        </div>

                                        {/* CARD */}
                                        <div className="flex flex-col gap-4 rounded-2xl border border-[#d4e4e1] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-center sm:gap-6 sm:p-6">
                                            {/* ICON */}
                                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#e1f5ed] text-3xl text-[#087b68]">
                                                {step.icon}
                                            </div>

                                            {/* CONTENT */}
                                            <div>
                                                <div className="mb-1 flex items-center gap-2 sm:hidden">
                                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#087b68] text-xs font-bold text-white">
                                                        {step.number}
                                                    </span>

                                                    <span className="text-xs font-semibold uppercase tracking-wide text-[#16805f]">
                                                        Langkah {step.number}
                                                    </span>
                                                </div>

                                                <h4 className="text-lg font-bold text-[#123b49]">
                                                    {step.title}
                                                </h4>

                                                <p className="mt-2 leading-relaxed text-gray-500">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* CTA */}
                        <section className="mt-8 rounded-2xl border border-[#cce7d9] bg-[#effaf3] p-5 sm:p-6">
                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#d9f99d] text-3xl">
                                        🎓
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-[#123b49]">
                                            Siap memulai pembelajaran?
                                        </h3>

                                        <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                            Ikuti langkah-langkah di atas agar
                                            belajar iklim Köppen menjadi lebih
                                            terarah dan menyenangkan.
                                        </p>
                                    </div>
                                </div>

                                <Link
                                    href={dashboardUrl}
                                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#d9f99d] px-5 py-3 font-semibold text-[#123b49] transition hover:bg-[#c7ef7e]"
                                >
                                    Kembali ke Beranda
                                    <span>›</span>
                                </Link>
                            </div>
                        </section>
                    </main>

                    {/* FOOTER */}
                    <footer className="mt-8 border-t border-[#d7e5e3] bg-white">
                        <div className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10">
                            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
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

                                <div className="text-left md:text-right">
                                    <p className="text-sm font-semibold text-[#123b49]">
                                        Media Pembelajaran Kelas X
                                    </p>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Belajar • Berlatih • Memahami Iklim
                                    </p>
                                </div>
                            </div>

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