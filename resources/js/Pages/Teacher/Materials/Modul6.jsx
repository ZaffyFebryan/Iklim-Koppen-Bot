import React from "react";
import { Head, Link } from "@inertiajs/react";
import TeacherSidebar from "../../../Components/TeacherSidebar";

export default function Modul6() {
    const climateImpacts = [
        {
            code: "A",
            type: "Tropis",
            icon: "🌴",
            color: "bg-emerald-50 border-emerald-200",
            badge: "bg-emerald-100 text-emerald-800",
            impacts: [
                "Cocok untuk berbagai kegiatan pertanian karena suhu hangat dan curah hujan relatif tinggi.",
                "Mendukung keberadaan hutan hujan dan vegetasi yang lebat.",
                "Kelembapan udara cenderung tinggi.",
            ],
        },
        {
            code: "B",
            type: "Kering",
            icon: "🌵",
            color: "bg-amber-50 border-amber-200",
            badge: "bg-amber-100 text-amber-800",
            impacts: [
                "Kegiatan pertanian dapat terbatas dan sering membutuhkan pengelolaan air atau irigasi.",
                "Peternakan dapat menjadi salah satu kegiatan yang berkembang di wilayah tertentu.",
            ],
        },
        {
            code: "C",
            type: "Sedang",
            icon: "🍇",
            color: "bg-sky-50 border-sky-200",
            badge: "bg-sky-100 text-sky-800",
            impacts: [
                "Mendukung berbagai kegiatan pertanian dengan pola musim yang lebih jelas.",
                "Jenis tanaman dapat menyesuaikan kondisi suhu dan curah hujan setempat.",
            ],
        },
        {
            code: "D",
            type: "Kontinental",
            icon: "❄️",
            color: "bg-indigo-50 border-indigo-200",
            badge: "bg-indigo-100 text-indigo-800",
            impacts: [
                "Musim tanam dapat lebih terbatas karena perbedaan suhu antarmusim.",
                "Kegiatan penduduk perlu menyesuaikan diri dengan musim dingin yang dapat berlangsung cukup panjang.",
            ],
        },
        {
            code: "E",
            type: "Kutub",
            icon: "🧊",
            color: "bg-cyan-50 border-cyan-200",
            badge: "bg-cyan-100 text-cyan-800",
            impacts: [
                "Kondisi suhu sangat rendah membatasi kegiatan pertanian.",
                "Kegiatan penduduk lebih banyak menyesuaikan diri dengan lingkungan dingin dan sumber daya setempat.",
            ],
        },
    ];

    return (
        <>
            <Head title="Modul 6: Dampak Iklim terhadap Kehidupan | IklimKöppenBot" />

            <div className="min-h-screen bg-[#f3f9f8]">
                <TeacherSidebar />

                <main className="min-w-0 lg:ml-72">
                    {/* =====================================================
                        TOP HEADER
                    ====================================================== */}
                    <header className="border-b border-slate-200 bg-white">
                        <div className="px-6 py-7 sm:px-8 lg:px-12">
                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#087b68]">
                                        Materi Pegangan Guru
                                    </p>

                                    <h1 className="text-3xl font-bold tracking-tight text-[#123b49] sm:text-4xl">
                                        Modul 6: Dampak Iklim terhadap
                                        Kehidupan
                                    </h1>

                                    <p className="mt-2 text-base text-slate-500">
                                        Membimbing siswa memahami hubungan
                                        antara tipe iklim, lingkungan, dan
                                        aktivitas kehidupan manusia.
                                    </p>
                                </div>

                                <Link
                                    href={route("teacher.materials.index")}
                                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[#c9dfdc] bg-white px-5 py-3 text-sm font-semibold text-[#087b68] transition hover:bg-[#f3f9f8]"
                                >
                                    ← Kembali
                                </Link>
                            </div>
                        </div>
                    </header>

                    {/* =====================================================
                        MAIN CONTENT
                    ====================================================== */}
                    <div className="px-5 py-8 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-6xl">
                            {/* Breadcrumb */}
                            <div className="mb-7 flex items-center gap-2 text-sm">
                                <span className="text-slate-500">
                                    Materi Köppen
                                </span>

                                <span className="text-slate-400">/</span>

                                <span className="font-semibold text-[#123b49]">
                                    Modul 6
                                </span>
                            </div>

                            {/* =================================================
                                HERO
                            ================================================== */}
                            <section className="relative mb-8 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#07384b] to-[#087b70] px-7 py-8 text-white shadow-sm sm:px-10 sm:py-10">
                                {/* Decorative circles */}
                                <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full border border-white/10" />
                                <div className="pointer-events-none absolute -right-2 -top-8 h-36 w-36 rounded-full border border-white/10" />

                                <div className="relative">
                                    {/* Badge */}
                                    <div className="mb-7">
                                        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold tracking-wide text-white">
                                            MODUL PEGANGAN GURU 06
                                        </span>
                                    </div>

                                    <h2 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl">
                                        Dampak Iklim terhadap Kehidupan
                                    </h2>

                                    <p className="mt-4 max-w-3xl text-base leading-7 text-teal-50 sm:text-lg">
                                        Membantu siswa memahami bagaimana
                                        karakteristik iklim suatu wilayah
                                        berhubungan dengan lingkungan,
                                        pertanian, dan aktivitas penduduk.
                                    </p>

                                    {/* Info Chips */}
                                    <div className="mt-7 flex flex-wrap gap-3">
                                        <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-sm font-medium text-white">
                                            <span>🌍</span>
                                            <span>Karakter Iklim</span>
                                        </div>

                                        <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-sm font-medium text-white">
                                            <span>🌱</span>
                                            <span>Pertanian</span>
                                        </div>

                                        <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-sm font-medium text-white">
                                            <span>🏘️</span>
                                            <span>Kehidupan Penduduk</span>
                                        </div>

                                        <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-sm font-medium text-white">
                                            <span>⏱️</span>
                                            <span>Estimasi 15 menit</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* =================================================
                                FOKUS PENGAJARAN
                            ================================================== */}
                            <section className="mb-7 rounded-2xl border border-[#d7e8e5] bg-white p-6 shadow-sm sm:p-8">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#dff3ed] text-2xl">
                                        🎯
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#087b68]">
                                            Fokus Pengajaran
                                        </p>

                                        <h3 className="mt-1 text-2xl font-bold text-[#123b49]">
                                            Menghubungkan Iklim dengan Kehidupan
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-slate-600">
                                            Modul ini membantu guru mengajak
                                            siswa melihat bahwa klasifikasi
                                            iklim tidak hanya berupa kode A,
                                            B, C, D, dan E. Setiap karakter
                                            iklim memiliki hubungan dengan
                                            kondisi lingkungan dan aktivitas
                                            manusia.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-2xl border border-slate-200 bg-[#f8fbfa] p-5">
                                        <div className="flex gap-3">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e2f3ee] text-sm font-bold text-[#087b68]">
                                                01
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-[#123b49]">
                                                    Menghubungkan iklim dan
                                                    lingkungan
                                                </h4>

                                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                                    Bimbing siswa memahami
                                                    bahwa suhu dan curah hujan
                                                    memengaruhi kondisi
                                                    lingkungan suatu wilayah.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-slate-200 bg-[#f8fbfa] p-5">
                                        <div className="flex gap-3">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e2f3ee] text-sm font-bold text-[#087b68]">
                                                02
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-[#123b49]">
                                                    Menghubungkan iklim dan
                                                    pertanian
                                                </h4>

                                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                                    Ajak siswa melihat bahwa
                                                    kegiatan pertanian perlu
                                                    disesuaikan dengan kondisi
                                                    iklim setempat.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-slate-200 bg-[#f8fbfa] p-5">
                                        <div className="flex gap-3">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e2f3ee] text-sm font-bold text-[#087b68]">
                                                03
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-[#123b49]">
                                                    Mengamati adaptasi penduduk
                                                </h4>

                                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                                    Diskusikan bagaimana
                                                    penduduk menyesuaikan
                                                    aktivitasnya dengan kondisi
                                                    lingkungan.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-slate-200 bg-[#f8fbfa] p-5">
                                        <div className="flex gap-3">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e2f3ee] text-sm font-bold text-[#087b68]">
                                                04
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-[#123b49]">
                                                    Menggunakan contoh nyata
                                                </h4>

                                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                                    Gunakan contoh wilayah
                                                    Indonesia dan dunia agar
                                                    siswa dapat menghubungkan
                                                    konsep dengan kehidupan
                                                    sehari-hari.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* =================================================
                                INTRO
                            ================================================== */}
                            <section className="mb-7 rounded-2xl border border-teal-100 bg-white p-6 shadow-sm sm:p-7">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl">
                                        🌍
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-[#123b49]">
                                            Iklim memengaruhi kehidupan sehari-hari
                                        </h3>

                                        <p className="mt-2 text-sm leading-7 text-slate-600">
                                            Tipe iklim suatu wilayah berpengaruh
                                            terhadap kondisi lingkungan,
                                            pilihan kegiatan ekonomi, pola
                                            pertanian, serta cara penduduk
                                            menyesuaikan diri dengan lingkungan
                                            tempat tinggalnya.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* =================================================
                                CLIMATE IMPACTS
                            ================================================== */}
                            <section>
                                <div className="mb-5">
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#087b68]">
                                        Kelompok Iklim
                                    </p>

                                    <h3 className="mt-1 text-xl font-bold text-[#123b49]">
                                        Dampak setiap tipe iklim
                                    </h3>

                                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                                        Gunakan contoh berikut untuk membantu
                                        siswa menghubungkan kelompok iklim
                                        Köppen dengan kondisi lingkungan dan
                                        aktivitas manusia.
                                    </p>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    {climateImpacts.map((climate) => (
                                        <article
                                            key={climate.code}
                                            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                                        >
                                            {/* Card Header */}
                                            <div className="flex items-center gap-4 border-b border-slate-100 p-5">
                                                <div
                                                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border text-2xl ${climate.color}`}
                                                >
                                                    {climate.icon}
                                                </div>

                                                <div className="min-w-0">
                                                    <span
                                                        className={`inline-flex rounded-lg px-2.5 py-1 text-xs font-bold ${climate.badge}`}
                                                    >
                                                        Kelompok {climate.code}
                                                    </span>

                                                    <h4 className="mt-1 text-lg font-bold text-[#123b49]">
                                                        Iklim {climate.type}
                                                    </h4>
                                                </div>
                                            </div>

                                            {/* Card Content */}
                                            <div className="p-5">
                                                <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#087b68]">
                                                    Dampak ke Kehidupan
                                                </p>

                                                <ul className="space-y-3">
                                                    {climate.impacts.map(
                                                        (impact, index) => (
                                                            <li
                                                                key={index}
                                                                className="flex gap-3 text-sm leading-6 text-slate-600"
                                                            >
                                                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e7f4f1] text-xs font-bold text-[#087b68]">
                                                                    ✓
                                                                </span>

                                                                <span>
                                                                    {impact}
                                                                </span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </section>

                            {/* =================================================
                                CATATAN GURU
                            ================================================== */}
                            <section className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm sm:p-7">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-xl">
                                        💡
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-amber-900">
                                            Catatan untuk Guru
                                        </h3>

                                        <p className="mt-2 text-sm leading-7 text-amber-900/80">
                                            Tekankan bahwa klasifikasi iklim
                                            menjelaskan karakteristik iklim,
                                            sedangkan dampak terhadap kehidupan
                                            merupakan contoh hubungan antara
                                            kondisi iklim dengan lingkungan dan
                                            aktivitas manusia. Hindari
                                            menyampaikan bahwa satu tipe iklim
                                            selalu menghasilkan kondisi sosial
                                            yang sama di semua wilayah.
                                        </p>

                                        <div className="mt-5 rounded-xl border border-amber-200 bg-white/70 p-5">
                                            <p className="text-sm font-semibold text-[#123b49]">
                                                Pertanyaan pemantik:
                                            </p>

                                            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                                                <li>
                                                    • Bagaimana suhu dan curah
                                                    hujan memengaruhi lingkungan
                                                    suatu wilayah?
                                                </li>

                                                <li>
                                                    • Mengapa jenis kegiatan
                                                    pertanian dapat berbeda
                                                    antarwilayah?
                                                </li>

                                                <li>
                                                    • Bagaimana penduduk
                                                    menyesuaikan aktivitasnya
                                                    dengan kondisi iklim?
                                                </li>

                                                <li>
                                                    • Apakah semua wilayah
                                                    dengan kelompok iklim yang
                                                    sama memiliki kehidupan
                                                    penduduk yang sama?
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* =================================================
                                INDONESIA HIGHLIGHT
                            ================================================== */}
                            <section className="mt-7 overflow-hidden rounded-2xl border border-lime-200 bg-lime-50 shadow-sm">
                                <div className="p-6 sm:p-7">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                                            🇮🇩
                                        </div>

                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                                                Contoh di Indonesia
                                            </p>

                                            <h3 className="mt-1 text-xl font-bold text-[#123b49]">
                                                Menghubungkan iklim dengan
                                                kehidupan Indonesia
                                            </h3>

                                            <p className="mt-2 text-sm leading-7 text-slate-700">
                                                Sebagian besar wilayah Indonesia
                                                memiliki karakter iklim tropis.
                                                Suhu yang relatif hangat dan
                                                pola curah hujan yang mendukung
                                                membuat kondisi iklim menjadi
                                                salah satu faktor yang
                                                diperhatikan dalam kegiatan
                                                pertanian dan pengelolaan
                                                lingkungan.
                                            </p>

                                            <div className="mt-5 grid gap-3 sm:grid-cols-3">
                                                <div className="rounded-xl border border-lime-200 bg-white/70 p-4">
                                                    <div className="text-xl">
                                                        🌾
                                                    </div>

                                                    <h4 className="mt-2 text-sm font-bold text-[#123b49]">
                                                        Pertanian
                                                    </h4>

                                                    <p className="mt-1 text-xs leading-5 text-slate-600">
                                                        Pemilihan tanaman dan
                                                        waktu tanam berkaitan
                                                        dengan kondisi iklim.
                                                    </p>
                                                </div>

                                                <div className="rounded-xl border border-lime-200 bg-white/70 p-4">
                                                    <div className="text-xl">
                                                        🌳
                                                    </div>

                                                    <h4 className="mt-2 text-sm font-bold text-[#123b49]">
                                                        Vegetasi
                                                    </h4>

                                                    <p className="mt-1 text-xs leading-5 text-slate-600">
                                                        Suhu dan curah hujan
                                                        memengaruhi jenis
                                                        vegetasi yang dapat
                                                        berkembang.
                                                    </p>
                                                </div>

                                                <div className="rounded-xl border border-lime-200 bg-white/70 p-4">
                                                    <div className="text-xl">
                                                        🏘️
                                                    </div>

                                                    <h4 className="mt-2 text-sm font-bold text-[#123b49]">
                                                        Aktivitas Penduduk
                                                    </h4>

                                                    <p className="mt-1 text-xs leading-5 text-slate-600">
                                                        Penduduk menyesuaikan
                                                        berbagai aktivitas
                                                        dengan kondisi
                                                        lingkungan.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* =================================================
                                ARAHAN PEMBELAJARAN
                            ================================================== */}
                            <section className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                                <div className="mb-6">
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#087b68]">
                                        Arahan Guru
                                    </p>

                                    <h3 className="mt-1 text-xl font-bold text-[#123b49]">
                                        Arahan Pembelajaran di Kelas
                                    </h3>
                                </div>

                                <div className="grid gap-4 md:grid-cols-3">
                                    <div className="rounded-2xl bg-[#f3f9f8] p-5">
                                        <div className="text-2xl">①</div>

                                        <h4 className="mt-3 font-semibold text-[#123b49]">
                                            Mulai dari karakter iklim
                                        </h4>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            Minta siswa menyebutkan
                                            karakteristik suhu dan curah hujan
                                            dari kelompok iklim yang sedang
                                            dibahas.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-[#f3f9f8] p-5">
                                        <div className="text-2xl">②</div>

                                        <h4 className="mt-3 font-semibold text-[#123b49]">
                                            Hubungkan dengan lingkungan
                                        </h4>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            Ajak siswa menghubungkan kondisi
                                            iklim dengan vegetasi, pertanian,
                                            dan kondisi lingkungan.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-[#f3f9f8] p-5">
                                        <div className="text-2xl">③</div>

                                        <h4 className="mt-3 font-semibold text-[#123b49]">
                                            Berikan contoh wilayah
                                        </h4>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            Gunakan contoh wilayah Indonesia
                                            atau wilayah lain agar siswa dapat
                                            melihat penerapan konsep secara
                                            nyata.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* =================================================
                                RINGKASAN
                            ================================================== */}
                            <section className="mt-7 overflow-hidden rounded-2xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-6 text-white shadow-sm sm:p-8">
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-lime-200">
                                    Ringkasan Modul 6
                                </p>

                                <h3 className="mt-1 text-xl font-bold">
                                    Hal penting yang perlu dikuasai siswa
                                </h3>

                                <div className="mt-5 space-y-3">
                                    <div className="rounded-xl bg-white/10 p-4">
                                        <p className="text-sm leading-6 text-teal-50">
                                            <strong className="text-white">
                                                1.
                                            </strong>{" "}
                                            Setiap kelompok iklim memiliki
                                            karakteristik suhu dan curah hujan
                                            yang berbeda.
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-white/10 p-4">
                                        <p className="text-sm leading-6 text-teal-50">
                                            <strong className="text-white">
                                                2.
                                            </strong>{" "}
                                            Karakter iklim dapat berhubungan
                                            dengan kondisi lingkungan dan
                                            kegiatan manusia.
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-white/10 p-4">
                                        <p className="text-sm leading-6 text-teal-50">
                                            <strong className="text-white">
                                                3.
                                            </strong>{" "}
                                            Contoh wilayah nyata dapat
                                            digunakan untuk membantu memahami
                                            penerapan klasifikasi iklim.
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-white/10 p-4">
                                        <p className="text-sm leading-6 text-teal-50">
                                            <strong className="text-white">
                                                4.
                                            </strong>{" "}
                                            Kondisi iklim bukan satu-satunya
                                            faktor yang menentukan kehidupan
                                            penduduk; faktor lingkungan,
                                            sosial, ekonomi, dan budaya juga
                                            berperan.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* =================================================
                                FOOTER / NAVIGATION
                            ================================================== */}
                            <div className="mt-8 flex flex-col-reverse gap-3 pb-8 sm:flex-row sm:items-center sm:justify-between">
                                <Link
                                    href={route(
                                        "teacher.materials.show",
                                        5
                                    )}
                                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#123b49] transition hover:bg-slate-50"
                                >
                                    ← Modul Sebelumnya
                                </Link>

                                <Link
                                    href={route("teacher.materials.index")}
                                    className="inline-flex items-center justify-center rounded-xl bg-[#087b68] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#066657]"
                                >
                                    Kembali ke Daftar Materi
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}