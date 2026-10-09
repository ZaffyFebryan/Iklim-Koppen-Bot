import React from "react";
import { Head, Link } from "@inertiajs/react";
import TeacherSidebar from "../../../Components/TeacherSidebar";

export default function Modul4() {
    const comparisons = [
        {
            title: "Am vs Aw",
            subtitle: "Perbedaan pola curah hujan pada iklim tropis",
            first: {
                code: "Am",
                name: "Tropis Monsun",
                description:
                    "Curah hujan tahunan tetap tinggi meskipun terdapat bulan dengan curah hujan rendah. Polanya berkaitan dengan pengaruh angin muson.",
                color: "bg-teal-50 border-teal-200",
                badge: "bg-teal-100 text-teal-800",
            },
            second: {
                code: "Aw",
                name: "Tropis Sabana",
                description:
                    "Memiliki musim kering yang lebih jelas dan berlangsung lebih panjang. Curah hujan tahunan tidak cukup tinggi untuk mengimbangi kondisi kering.",
                color: "bg-amber-50 border-amber-200",
                badge: "bg-amber-100 text-amber-800",
            },
            note:
                "Tekankan kepada siswa bahwa Am dan Aw sama-sama memiliki bulan terkering di bawah 60 mm. Pembeda utamanya adalah kondisi curah hujan tahunan dan karakter musim kering.",
            teaching:
                "Gunakan contoh pola hujan bulanan agar siswa tidak hanya menghafal kode. Arahkan siswa membandingkan bulan terkering dengan keseluruhan pola curah hujan tahunan.",
        },
        {
            title: "Cs vs Cw",
            subtitle: "Perbedaan waktu terjadinya musim kering",
            first: {
                code: "Cs",
                name: "Musim kering pada musim panas",
                description:
                    "Periode kering terjadi pada musim panas sehingga pola curah hujannya menunjukkan karakter iklim mediterania.",
                color: "bg-orange-50 border-orange-200",
                badge: "bg-orange-100 text-orange-800",
            },
            second: {
                code: "Cw",
                name: "Musim kering pada musim dingin",
                description:
                    "Periode kering terjadi pada musim dingin. Pola ini menjadi pembeda utama dari tipe Cs.",
                color: "bg-sky-50 border-sky-200",
                badge: "bg-sky-100 text-sky-800",
            },
            note:
                "Kunci membedakannya adalah waktu terjadinya musim kering: Cs berarti kering pada musim panas, sedangkan Cw berarti kering pada musim dingin.",
            teaching:
                "Saat menjelaskan, minta siswa menentukan terlebih dahulu kapan bulan-bulan kering terjadi sebelum menentukan huruf kedua pada kode iklim.",
        },
        {
            title: "BW vs BS",
            subtitle: "Perbedaan tingkat kekeringan pada kelompok B",
            first: {
                code: "BW",
                name: "Iklim Gurun",
                description:
                    "Menunjukkan kondisi yang sangat kering dengan curah hujan yang sangat sedikit. Tipe ini dikenal sebagai iklim gurun.",
                color: "bg-rose-50 border-rose-200",
                badge: "bg-rose-100 text-rose-800",
            },
            second: {
                code: "BS",
                name: "Iklim Stepa",
                description:
                    "Menunjukkan kondisi semi-kering. Kekeringannya masih memungkinkan keberadaan vegetasi seperti rumput.",
                color: "bg-lime-50 border-lime-200",
                badge: "bg-lime-100 text-lime-800",
            },
            note:
                "Keduanya termasuk kelompok iklim kering. BW menunjukkan kondisi gurun yang lebih kering, sedangkan BS menunjukkan kondisi stepa atau semi-kering.",
            teaching:
                "Tekankan bahwa huruf W pada BW mengarah pada desert atau gurun, sedangkan S pada BS mengarah pada steppe atau stepa.",
        },
    ];

    return (
        <>
            <Head title="Modul 4: Perbedaan Tipe Iklim yang Mirip | GeoBot" />

            <TeacherSidebar />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49] lg:ml-72">
                {/* HEADER */}
                <header className="border-b border-[#d7e5e3] bg-white">
                    <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-6 py-6 sm:px-10">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                Materi Pegangan Guru
                            </p>

                            <h2 className="mt-1 text-2xl font-bold text-[#123b49] sm:text-3xl">
                                Modul 4: Perbedaan Tipe Iklim yang Mirip
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Membimbing siswa membedakan tipe iklim Köppen
                                yang memiliki karakteristik serupa.
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

                {/* CONTENT */}
                <main className="mx-auto max-w-[1200px] px-6 py-8 sm:px-10">
                    {/* BREADCRUMB */}
                    <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                        <Link
                            href={route("teacher.materials.index")}
                            className="transition hover:text-[#087b68]"
                        >
                            Materi Köppen
                        </Link>

                        <span>/</span>

                        <span className="font-medium text-[#123b49]">
                            Modul 4
                        </span>
                    </nav>

                    {/* HERO */}
                    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-7 text-white shadow-sm sm:p-10">
                        <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full border border-white/10" />
                        <div className="absolute -right-2 -top-8 h-40 w-40 rounded-full border border-white/10" />

                        <div className="relative">
                            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-teal-50">
                                Modul Pegangan Guru 04
                            </span>

                            <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                                Perbedaan Tipe Iklim yang Mirip
                            </h1>

                            <p className="mt-4 max-w-2xl leading-relaxed text-teal-50">
                                Membantu siswa mengenali ciri pembeda antara
                                beberapa kode iklim Köppen yang sering
                                tertukar.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3 text-sm">
                                <span className="rounded-lg bg-white/10 px-3 py-2">
                                    🌧️ Pola Curah Hujan
                                </span>

                                <span className="rounded-lg bg-white/10 px-3 py-2">
                                    🌡️ Karakter Suhu
                                </span>

                                <span className="rounded-lg bg-white/10 px-3 py-2">
                                    🔎 Membandingkan Kode
                                </span>

                                <span className="rounded-lg bg-white/10 px-3 py-2">
                                    ⏱️ Estimasi 10 menit
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* TUJUAN PENGAJARAN */}
                    <section className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e1f5ed] text-2xl">
                                🎯
                            </div>

                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                                    Fokus Pengajaran
                                </p>

                                <h2 className="mt-1 text-xl font-bold text-[#123b49] sm:text-2xl">
                                    Membimbing Siswa Membedakan Tipe Iklim
                                </h2>

                                <p className="mt-3 leading-8 text-gray-700">
                                    Modul ini dapat digunakan sebagai panduan
                                    ketika guru menjelaskan tipe iklim yang
                                    memiliki karakteristik serupa. Siswa
                                    diarahkan untuk membaca data dan mencari
                                    ciri pembeda sebelum menentukan kode iklim.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-3">
                            {[
                                "Membandingkan pola curah hujan.",
                                "Mengidentifikasi waktu musim kering.",
                                "Mengenali tingkat kekeringan.",
                            ].map((point, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl bg-[#f8fbfa] p-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#087b68] text-sm font-bold text-white">
                                            {index + 1}
                                        </span>

                                        <p className="text-sm font-semibold leading-relaxed text-[#123b49]">
                                            {point}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* INTRO */}
                    <section className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d9f99d] text-2xl">
                                💡
                            </div>

                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                                    Catatan Guru
                                </p>

                                <h2 className="mt-1 text-xl font-bold text-[#123b49]">
                                    Jangan hanya meminta siswa menghafal kode
                                </h2>

                                <p className="mt-3 leading-8 text-gray-700">
                                    Beberapa kode iklim Köppen terlihat mirip
                                    karena berada dalam kelompok yang sama atau
                                    memiliki karakteristik yang berdekatan.
                                    Arahkan siswa untuk mencari{" "}
                                    <strong>ciri pembeda utama</strong> dari
                                    setiap pasangan kode.
                                </p>

                                <div className="mt-5 rounded-xl border border-[#cfe5df] bg-[#f3f9f8] p-5">
                                    <p className="font-bold text-[#123b49]">
                                        🔎 Strategi sederhana
                                    </p>

                                    <p className="mt-2 leading-relaxed text-gray-700">
                                        Ajarkan siswa untuk membaca kode secara
                                        bertahap: tentukan kelompok iklim
                                        terlebih dahulu, kemudian lihat pola
                                        curah hujan atau kondisi suhu yang
                                        menjadi pembeda.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* COMPARISON CARDS */}
                    <div className="mt-7 space-y-6">
                        {comparisons.map((item, index) => (
                            <section
                                key={item.title}
                                className="overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm"
                            >
                                {/* SECTION HEADER */}
                                <div className="border-b border-[#e5efed] px-6 py-6 sm:px-8">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e1f5ed] font-bold text-[#087b68]">
                                            0{index + 1}
                                        </div>

                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                                                Perbandingan Tipe
                                            </p>

                                            <h2 className="mt-1 text-xl font-bold text-[#123b49] sm:text-2xl">
                                                {item.title}
                                            </h2>

                                            <p className="mt-1 text-sm text-gray-500">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* TWO TYPES */}
                                <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
                                    {[item.first, item.second].map(
                                        (climate) => (
                                            <div
                                                key={climate.code}
                                                className={`rounded-2xl border p-5 ${climate.color}`}
                                            >
                                                <span
                                                    className={`inline-flex rounded-lg px-3 py-1 text-sm font-bold ${climate.badge}`}
                                                >
                                                    {climate.code}
                                                </span>

                                                <h3 className="mt-3 text-lg font-bold text-[#123b49]">
                                                    {climate.name}
                                                </h3>

                                                <p className="mt-2 text-sm leading-7 text-gray-700">
                                                    {climate.description}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>

                                {/* KEY DIFFERENCE */}
                                <div className="mx-6 mb-4 rounded-xl bg-[#f3f9f8] p-5 sm:mx-8">
                                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#087b68]">
                                        Kunci Perbedaan
                                    </p>

                                    <p className="mt-2 leading-7 text-gray-700">
                                        {item.note}
                                    </p>
                                </div>

                                {/* TEACHER NOTE */}
                                <div className="mx-6 mb-6 rounded-xl border border-[#d4e4e1] bg-white p-5 sm:mx-8">
                                    <div className="flex items-start gap-3">
                                        <span className="text-xl">👨‍🏫</span>

                                        <div>
                                            <p className="font-bold text-[#123b49]">
                                                Arahan untuk Guru
                                            </p>

                                            <p className="mt-2 leading-7 text-gray-700">
                                                {item.teaching}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* STRATEGI PEMBELAJARAN */}
                    <section className="mt-7 rounded-3xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e1f5ed] text-2xl">
                                🧑‍🏫
                            </div>

                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                                    Strategi Pengajaran
                                </p>

                                <h2 className="mt-1 text-xl font-bold text-[#123b49] sm:text-2xl">
                                    Cara Membimbing Siswa
                                </h2>

                                <p className="mt-3 leading-8 text-gray-700">
                                    Gunakan urutan pertanyaan sederhana agar
                                    siswa terbiasa menganalisis data sebelum
                                    menentukan tipe iklim.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 space-y-3">
                            {[
                                "Kelompok iklim apa yang sedang dianalisis?",
                                "Apa ciri suhu yang terlihat dari data?",
                                "Bagaimana pola curah hujannya?",
                                "Kapan periode kering terjadi?",
                                "Apa ciri utama yang membedakan dua kode tersebut?",
                            ].map((question, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 rounded-xl bg-[#f8fbfa] p-4"
                                >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#087b68] text-sm font-bold text-white">
                                        {index + 1}
                                    </span>

                                    <p className="pt-1 leading-relaxed text-gray-700">
                                        {question}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* RINGKASAN */}
                    <section className="mt-7 rounded-3xl bg-[#123b49] p-6 text-white shadow-sm sm:p-8">
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d9f99d] text-xl text-[#123b49]">
                                ✓
                            </div>

                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-teal-100">
                                    Ringkasan untuk Guru
                                </p>

                                <h2 className="mt-1 text-xl font-bold sm:text-2xl">
                                    Tiga Pasangan yang Perlu Diperhatikan
                                </h2>
                            </div>
                        </div>

                        <div className="mt-6 space-y-4">
                            <div className="rounded-xl bg-white/10 p-4">
                                <p className="font-bold text-[#d9f99d]">
                                    Am vs Aw
                                </p>

                                <p className="mt-1 leading-7 text-teal-50">
                                    Fokuskan pada total curah hujan tahunan
                                    dan karakter musim kering.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white/10 p-4">
                                <p className="font-bold text-[#d9f99d]">
                                    Cs vs Cw
                                </p>

                                <p className="mt-1 leading-7 text-teal-50">
                                    Fokuskan pada waktu terjadinya musim
                                    kering, yaitu musim panas atau musim
                                    dingin.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white/10 p-4">
                                <p className="font-bold text-[#d9f99d]">
                                    BW vs BS
                                </p>

                                <p className="mt-1 leading-7 text-teal-50">
                                    Fokuskan pada tingkat kekeringan antara
                                    gurun dan stepa.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* NAVIGATION */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <Link
                            href={route("teacher.materials.show", 3)}
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#c8dcda] bg-white px-5 py-3 font-semibold text-[#087b68] transition hover:bg-[#f3f9f8]"
                        >
                            <span>←</span>
                            Modul Sebelumnya
                        </Link>

                        <Link
                            href={route("teacher.materials.show", 5)}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#123b49] px-5 py-3 font-semibold text-white transition hover:bg-[#0b2e39]"
                        >
                            Modul Berikutnya
                            <span>→</span>
                        </Link>
                    </div>
                </main>
            </div>
        </>
    );
}