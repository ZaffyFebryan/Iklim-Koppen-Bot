import React from "react";
import { Head, Link } from "@inertiajs/react";
import TeacherSidebar from "../../../Components/TeacherSidebar";

export default function Modul1() {
    const climateGroups = [
        {
            code: "A",
            title: "Tropis",
            description:
                "Memiliki suhu tinggi sepanjang tahun dan umumnya berkaitan dengan wilayah tropis.",
            icon: "🌴",
            color: "bg-[#e4f5e8]",
        },
        {
            code: "B",
            title: "Kering",
            description:
                "Ditandai oleh kondisi kekurangan air atau curah hujan yang relatif rendah.",
            icon: "🏜️",
            color: "bg-[#fff3d9]",
        },
        {
            code: "C",
            title: "Subtropis Lembap",
            description:
                "Memiliki suhu sedang dengan variasi kondisi suhu dan curah hujan secara musiman.",
            icon: "🌿",
            color: "bg-[#e8f4fb]",
        },
        {
            code: "D",
            title: "Kontinental",
            description:
                "Umumnya memiliki perbedaan suhu musiman yang cukup nyata.",
            icon: "🍂",
            color: "bg-[#f8eadf]",
        },
        {
            code: "E",
            title: "Kutub",
            description:
                "Memiliki suhu sangat rendah dan ditemukan pada wilayah lintang tinggi.",
            icon: "❄️",
            color: "bg-[#e8f0fc]",
        },
    ];

    const summaryPoints = [
        "Klasifikasi Köppen dikembangkan oleh Wladimir Köppen dan kemudian disempurnakan pada beberapa tahap.",
        "Sistem Köppen-Geiger menggunakan suhu dan curah hujan sebagai dasar utama dalam klasifikasi iklim.",
        "Kode huruf digunakan untuk menunjukkan kelompok iklim, pola curah hujan, dan pada tipe tertentu karakteristik suhu.",
        "Lima kelompok utama dalam sistem Köppen adalah A, B, C, D, dan E.",
    ];

    return (
        <>
            <Head title="Modul 1: Pengertian Klasifikasi Iklim Köppen | IklimKöppenBot" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                {/* SIDEBAR GURU */}
                <TeacherSidebar />

                {/* MAIN CONTENT */}
                <div className="min-h-screen lg:ml-72">
                    {/* HEADER */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-6 py-6 sm:px-10">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                    Materi Pegangan Guru
                                </p>

                                <h2 className="mt-1 text-2xl font-bold text-[#123b49] sm:text-3xl">
                                    Modul 1: Pengertian Klasifikasi Iklim Köppen
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Panduan materi untuk membantu guru menjelaskan
                                    konsep dasar klasifikasi iklim Köppen kepada siswa.
                                </p>
                            </div>

                            <Link
                                href={route("teacher.materials.index")}
                                className="hidden shrink-0 items-center gap-2 rounded-xl border border-[#c8dcda] px-4 py-3 text-sm font-semibold text-[#087b68] transition hover:bg-[#f3f9f8] sm:inline-flex"
                            >
                                <span>←</span>
                                Kembali
                            </Link>
                        </div>
                    </header>

                    {/* PAGE CONTENT */}
                    <main className="mx-auto max-w-[1200px] px-6 py-8 sm:px-10">
                        {/* BREADCRUMB */}
                        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                            <Link
                                href={route("teacher.materials.index")}
                                className="transition hover:text-[#087b68]"
                            >
                                Materi
                            </Link>

                            <span>/</span>

                            <span className="font-medium text-[#123b49]">
                                Modul 1
                            </span>
                        </nav>

                        {/* HERO MODUL */}
                        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-7 text-white shadow-sm sm:p-10">
                            <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full border border-white/10" />
                            <div className="absolute -right-2 -top-8 h-40 w-40 rounded-full border border-white/10" />

                            <div className="relative">
                                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-teal-50">
                                    Modul Pegangan Guru 01
                                </span>

                                <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                                    Pengertian Klasifikasi Iklim Köppen
                                </h1>

                                <p className="mt-4 max-w-2xl leading-relaxed text-teal-50">
                                    Memahami konsep dasar, sejarah, dasar
                                    pengelompokan, serta cara membaca kode
                                    klasifikasi iklim Köppen untuk mendukung
                                    proses pembelajaran di kelas.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        👨‍🏫 Pegangan Guru
                                    </span>

                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        📘 Materi Geografi
                                    </span>

                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        ⏱️ Estimasi 10 menit
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* TUJUAN PEMBELAJARAN UNTUK GURU */}
                        <section className="mt-7 rounded-3xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e1f5ed] text-2xl">
                                    🎯
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                                        Fokus Pengajaran
                                    </p>

                                    <h2 className="mt-1 text-xl font-bold text-[#123b49] sm:text-2xl">
                                        Hal yang perlu dikuasai guru
                                    </h2>

                                    <p className="mt-2 leading-relaxed text-gray-600">
                                        Setelah mempelajari modul ini, guru
                                        diharapkan dapat menjelaskan konsep
                                        dasar klasifikasi Köppen secara
                                        sistematis kepada siswa.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                {[
                                    "Menjelaskan pengertian klasifikasi iklim Köppen.",
                                    "Menjelaskan dasar penggunaan suhu dan curah hujan.",
                                    "Menjelaskan fungsi kode huruf dalam klasifikasi Köppen.",
                                    "Mengenalkan lima kelompok utama iklim A, B, C, D, dan E.",
                                ].map((point, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 rounded-xl bg-[#f8fbfa] p-4"
                                    >
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#087b68] text-xs font-bold text-white">
                                            {index + 1}
                                        </span>

                                        <p className="text-sm leading-relaxed text-gray-700">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* ISI MATERI */}
                        <article className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            {/* Judul artikel */}
                            <div className="border-b border-[#e5efed] px-6 py-6 sm:px-10">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e1f5ed] text-2xl text-[#087b68]">
                                        ▤
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                                            Materi 1.1
                                        </p>

                                        <h2 className="mt-1 text-xl font-bold text-[#123b49] sm:text-2xl">
                                            Apa Itu Klasifikasi Iklim Köppen?
                                        </h2>

                                        <p className="mt-2 text-sm text-gray-500">
                                            Materi inti yang dapat digunakan guru
                                            sebagai dasar penjelasan kepada siswa.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Isi teks */}
                            <div className="space-y-6 px-6 py-7 sm:px-10 sm:py-9">
                                <p className="text-justify text-base leading-8 text-gray-700">
                                    Klasifikasi iklim Köppen dikembangkan oleh
                                    <strong className="font-semibold text-[#123b49]">
                                        {" "}Wladimir Köppen
                                    </strong>
                                    , seorang ahli iklim, geograf, dan botanis
                                    Jerman kelahiran Saint Petersburg, Rusia
                                    (1846–1940). Sistem ini pertama kali
                                    diperkenalkan sekitar tahun 1884, kemudian
                                    disempurnakan pada 1918 dan 1936.
                                    Perkembangan selanjutnya juga melibatkan
                                    Rudolph Geiger sehingga sistem ini sering
                                    disebut sebagai klasifikasi iklim
                                    Köppen-Geiger.
                                </p>

                                {/* CATATAN GURU */}
                                <div className="rounded-2xl border-l-4 border-[#087b68] bg-[#f3f9f8] p-5 sm:p-6">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">👨‍🏫</span>

                                        <div>
                                            <h3 className="font-bold text-[#123b49]">
                                                Catatan untuk Guru
                                            </h3>

                                            <p className="mt-2 leading-relaxed text-gray-600">
                                                Saat menjelaskan bagian ini,
                                                tekankan bahwa klasifikasi
                                                Köppen merupakan sistem yang
                                                menggunakan karakteristik suhu
                                                dan curah hujan untuk
                                                menggambarkan kondisi iklim
                                                suatu wilayah.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-justify text-base leading-8 text-gray-700">
                                    Berbeda dari klasifikasi iklim Junghuhn yang
                                    mengutamakan ketinggian tempat, Köppen
                                    mengklasifikasikan iklim berdasarkan suhu
                                    udara dan curah hujan rata-rata bulanan
                                    serta tahunan, dengan mempertimbangkan pola
                                    vegetasi sebagai indikator.
                                </p>

                                <p className="text-justify text-base leading-8 text-gray-700">
                                    Sistem ini menggunakan kode huruf. Huruf
                                    pertama menunjukkan kelompok iklim utama,
                                    huruf kedua menunjukkan pola curah hujan
                                    musiman, sedangkan huruf ketiga pada tipe
                                    tertentu menunjukkan karakteristik suhu.
                                </p>

                                {/* KODE KLASIFIKASI */}
                                <section className="rounded-2xl border border-[#d4e4e1] p-5 sm:p-6">
                                    <h3 className="text-lg font-bold text-[#123b49]">
                                        Cara Membaca Kode Iklim Köppen
                                    </h3>

                                    <p className="mt-2 leading-relaxed text-gray-600">
                                        Kode iklim Köppen tersusun dari huruf
                                        yang menunjukkan karakteristik tertentu
                                        dari suatu tipe iklim.
                                    </p>

                                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                                        <div className="rounded-xl bg-[#e1f5ed] p-4">
                                            <div className="text-3xl font-bold text-[#087b68]">
                                                A
                                            </div>

                                            <h4 className="mt-2 font-semibold text-[#123b49]">
                                                Huruf Pertama
                                            </h4>

                                            <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                                Menunjukkan kelompok iklim utama.
                                            </p>
                                        </div>

                                        <div className="rounded-xl bg-[#eef7fb] p-4">
                                            <div className="text-3xl font-bold text-[#26718b]">
                                                f
                                            </div>

                                            <h4 className="mt-2 font-semibold text-[#123b49]">
                                                Huruf Kedua
                                            </h4>

                                            <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                                Menunjukkan pola curah hujan
                                                musiman.
                                            </p>
                                        </div>

                                        <div className="rounded-xl bg-[#f5f1fc] p-4">
                                            <div className="text-3xl font-bold text-[#7955a5]">
                                                a
                                            </div>

                                            <h4 className="mt-2 font-semibold text-[#123b49]">
                                                Huruf Ketiga
                                            </h4>

                                            <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                                Pada tipe tertentu menunjukkan
                                                karakteristik suhu.
                                            </p>
                                        </div>
                                    </div>

                                    {/* CONTOH */}
                                    <div className="mt-4 rounded-xl bg-[#f8fbfa] p-4">
                                        <p className="text-sm font-medium text-gray-500">
                                            Contoh kode iklim
                                        </p>

                                        <p className="mt-2 text-3xl font-bold tracking-widest text-[#087b68]">
                                            Af
                                        </p>

                                        <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                            Kode tersebut termasuk kelompok
                                            iklim A dengan pola curah hujan
                                            yang ditunjukkan oleh huruf kedua.
                                        </p>
                                    </div>
                                </section>

                                {/* LIMA KELOMPOK */}
                                <section>
                                    <h3 className="text-xl font-bold text-[#123b49]">
                                        Lima Kelompok Utama Iklim Köppen
                                    </h3>

                                    <p className="mt-2 leading-relaxed text-gray-600">
                                        Guru dapat memperkenalkan lima kelompok
                                        utama berikut sebelum masuk ke
                                        pembahasan tipe iklim yang lebih
                                        spesifik.
                                    </p>

                                    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                        {climateGroups.map((climate) => (
                                            <div
                                                key={climate.code}
                                                className="flex items-start gap-4 rounded-xl border border-[#e5efed] p-4 transition hover:border-[#a8d9c9] hover:shadow-sm"
                                            >
                                                <div
                                                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl ${climate.color}`}
                                                >
                                                    {climate.icon}
                                                </div>

                                                <div>
                                                    <p className="text-xs font-bold uppercase tracking-wider text-[#16805f]">
                                                        Kelompok {climate.code}
                                                    </p>

                                                    <h4 className="mt-1 font-semibold text-[#123b49]">
                                                        Iklim {climate.title}
                                                    </h4>

                                                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                                        {climate.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* ARAHAN PENJELASAN */}
                                <section className="rounded-2xl border border-[#cfe3dd] bg-[#f8fbfa] p-5 sm:p-6">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">💡</span>

                                        <div>
                                            <h3 className="font-bold text-[#123b49]">
                                                Arahan Penjelasan di Kelas
                                            </h3>

                                            <p className="mt-2 leading-relaxed text-gray-600">
                                                Guru dapat menggunakan contoh
                                                sederhana seperti kode <strong>Af</strong>
                                                untuk memperkenalkan cara kerja
                                                kode Köppen. Setelah siswa
                                                memahami fungsi huruf pertama
                                                dan kedua, pembahasan dapat
                                                dilanjutkan pada kriteria setiap
                                                kelompok iklim.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </article>

                        {/* RINGKASAN UNTUK GURU */}
                        <section className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">
                            <div className="flex items-start gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d9f99d] text-xl">
                                    ✓
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                                        Pegangan Guru
                                    </p>

                                    <h3 className="mt-1 text-xl font-bold text-[#123b49]">
                                        Ringkasan Modul 1
                                    </h3>

                                    <p className="mt-1 text-gray-600">
                                        Poin utama yang perlu dikuasai sebelum
                                        menyampaikan materi kepada siswa:
                                    </p>
                                </div>
                            </div>

                            <ul className="mt-5 space-y-3">
                                {summaryPoints.map((point, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 rounded-xl bg-[#f8fbfa] p-4"
                                    >
                                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#087b68] text-xs font-bold text-white">
                                            {index + 1}
                                        </span>

                                        <p className="leading-relaxed text-gray-700">
                                            {point}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* NAVIGASI MODUL */}
                        <div className="mt-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                            <Link
                                href={route("teacher.materials.index")}
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#c8dcda] bg-white px-5 py-3 font-semibold text-[#087b68] transition hover:bg-[#f3f9f8]"
                            >
                                <span>←</span>
                                Daftar Materi
                            </Link>

                            <Link
                                href={route("teacher.materials.show", 2)}
                                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#087b68] px-6 py-3 font-semibold text-white transition hover:bg-[#066455]"
                            >
                                Materi Berikutnya
                                <span>→</span>
                            </Link>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}