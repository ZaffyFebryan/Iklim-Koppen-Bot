import React from "react";
import { Head, Link } from "@inertiajs/react";
import TeacherSidebar from "../../../Components/TeacherSidebar";

export default function Modul5() {
    const steps = [
        {
            number: "01",
            title: "Cek suhu bulan terdingin",
            description:
                "Gunakan suhu bulan terdingin untuk menentukan kelompok iklim yang sesuai (A, B, C, D, atau E).",
            icon: "🌡️",
        },
        {
            number: "02",
            title: "Cek curah hujan bulan terkering",
            description:
                "Jika wilayah masuk kelompok A, C, atau D, periksa curah hujan bulan terkering untuk menentukan huruf kedua.",
            icon: "🌧️",
        },
        {
            number: "03",
            title: "Periksa suhu musim panas jika diperlukan",
            description:
                "Untuk tipe C dan D, suhu musim panas dapat digunakan untuk menentukan huruf ketiga.",
            icon: "☀️",
        },
    ];

    return (
        <>
            <Head title="Modul 5: Klasifikasi Wilayah Berdasarkan Data | IklimKöppenBot" />

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
                                        Modul 5: Klasifikasi Wilayah
                                        Berdasarkan Data
                                    </h1>

                                    <p className="mt-2 text-base text-slate-500">
                                        Membimbing siswa menentukan kode iklim
                                        Köppen berdasarkan data suhu dan curah
                                        hujan.
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
                        CONTENT
                    ====================================================== */}
                    <div className="px-5 py-8 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-6xl">
                            {/* Breadcrumb */}
                            <div className="mb-7 flex items-center gap-2 text-sm">
                                <span className="text-slate-500">
                                    Materi
                                </span>

                                <span className="text-slate-400">/</span>

                                <span className="font-semibold text-[#123b49]">
                                    Modul 5
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
                                            MODUL PEGANGAN GURU 05
                                        </span>
                                    </div>

                                    <h2 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl">
                                        Klasifikasi Wilayah Berdasarkan Data
                                    </h2>

                                    <p className="mt-4 max-w-3xl text-base leading-7 text-teal-50 sm:text-lg">
                                        Membantu siswa menggunakan data suhu
                                        dan curah hujan untuk menentukan
                                        kelompok serta kode iklim suatu
                                        wilayah.
                                    </p>

                                    {/* Info Chips */}
                                    <div className="mt-7 flex flex-wrap gap-3">
                                        <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-sm font-medium text-white">
                                            <span>🌡️</span>
                                            <span>Data Suhu</span>
                                        </div>

                                        <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-sm font-medium text-white">
                                            <span>🌧️</span>
                                            <span>Curah Hujan</span>
                                        </div>

                                        <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-sm font-medium text-white">
                                            <span>🧭</span>
                                            <span>Analisis Wilayah</span>
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
                                            Membimbing Siswa Menentukan
                                            Klasifikasi Iklim
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-slate-600">
                                            Modul ini digunakan sebagai panduan
                                            guru ketika mengajak siswa
                                            mengubah data suhu dan curah hujan
                                            menjadi kode klasifikasi iklim.
                                            Tekankan kepada siswa agar membaca
                                            data secara bertahap dan tidak
                                            langsung menebak kode.
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
                                                    Membaca data suhu
                                                </h4>

                                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                                    Bimbing siswa menggunakan
                                                    suhu bulan terdingin sebagai
                                                    langkah awal klasifikasi.
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
                                                    Membaca data curah hujan
                                                </h4>

                                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                                    Arahkan siswa melihat curah
                                                    hujan bulan terkering sesuai
                                                    dengan kelompok iklim.
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
                                                    Mengikuti urutan klasifikasi
                                                </h4>

                                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                                    Biasakan siswa menentukan
                                                    kode secara bertahap
                                                    berdasarkan data yang
                                                    tersedia.
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
                                                    Menjelaskan alasan
                                                </h4>

                                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                                    Minta siswa menjelaskan data
                                                    yang menjadi dasar setiap
                                                    huruf pada kode iklim.
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
                                        🧭
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-[#123b49]">
                                            Dari data menjadi kode iklim
                                        </h3>

                                        <p className="mt-2 text-sm leading-7 text-slate-600">
                                            Gunakan langkah-langkah berikut
                                            secara berurutan ketika
                                            membimbing siswa menentukan
                                            klasifikasi iklim suatu wilayah.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* =================================================
                                LANGKAH KLASIFIKASI
                            ================================================== */}
                            <section className="mb-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                                <div className="mb-6">
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#087b68]">
                                        Proses Klasifikasi
                                    </p>

                                    <h3 className="mt-1 text-xl font-bold text-[#123b49]">
                                        Langkah-langkah klasifikasi
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {steps.map((step, index) => (
                                        <div
                                            key={step.number}
                                            className="flex gap-4"
                                        >
                                            <div className="flex flex-col items-center">
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e7f4f1] text-xl">
                                                    {step.icon}
                                                </div>

                                                {index !== steps.length - 1 && (
                                                    <div className="mt-2 min-h-10 w-px flex-1 bg-teal-100" />
                                                )}
                                            </div>

                                            <div className="flex-1 pb-5">
                                                <p className="text-xs font-bold tracking-wide text-[#087b68]">
                                                    LANGKAH {step.number}
                                                </p>

                                                <h4 className="mt-1 text-base font-semibold text-[#123b49]">
                                                    {step.title}
                                                </h4>

                                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* =================================================
                                CATATAN GURU
                            ================================================== */}
                            <section className="mb-7 rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-7">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-xl">
                                        💡
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-amber-900">
                                            Catatan untuk Guru
                                        </h3>

                                        <p className="mt-2 text-sm leading-7 text-amber-900/80">
                                            Dorong siswa untuk tidak langsung
                                            menebak kode iklim. Minta mereka
                                            menunjukkan data yang digunakan
                                            pada setiap tahap dan menjelaskan
                                            alasan pemilihan hurufnya.
                                        </p>

                                        <div className="mt-5 rounded-xl border border-amber-200 bg-white/70 p-5">
                                            <p className="text-sm font-semibold text-[#123b49]">
                                                Pertanyaan pemantik:
                                            </p>

                                            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                                                <li>
                                                    • Data mana yang harus kita
                                                    lihat terlebih dahulu?
                                                </li>

                                                <li>
                                                    • Mengapa wilayah ini masuk
                                                    kelompok iklim tersebut?
                                                </li>

                                                <li>
                                                    • Data apa yang digunakan
                                                    untuk menentukan huruf
                                                    berikutnya?
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* =================================================
                                CONTOH PENERAPAN
                            ================================================== */}
                            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <div className="bg-[#123b49] px-6 py-6 text-white sm:px-7">
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-lime-200">
                                        Contoh Penerapan
                                    </p>

                                    <h3 className="mt-1 text-xl font-bold">
                                        Wilayah X
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-teal-100">
                                        Tentukan kode iklim berdasarkan data
                                        berikut.
                                    </p>
                                </div>

                                {/* Data */}
                                <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-7">
                                    <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
                                        <div className="text-sm font-medium text-orange-800">
                                            Suhu bulan terdingin
                                        </div>

                                        <div className="mt-2 text-3xl font-bold text-[#123b49]">
                                            25°C
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
                                        <div className="text-sm font-medium text-sky-800">
                                            Curah hujan bulan terkering
                                        </div>

                                        <div className="mt-2 text-3xl font-bold text-[#123b49]">
                                            80 mm
                                        </div>
                                    </div>
                                </div>

                                {/* Analisis */}
                                <div className="space-y-5 px-6 pb-6 sm:px-7 sm:pb-7">
                                    <div className="flex gap-3">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-800">
                                            1
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-[#123b49]">
                                                Tentukan kelompok iklim
                                            </h4>

                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                Suhu bulan terdingin 25°C, yaitu
                                                lebih dari atau sama dengan
                                                18°C. Wilayah X masuk kelompok
                                                iklim tropis{" "}
                                                <strong>A</strong>.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-800">
                                            2
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-[#123b49]">
                                                Tentukan huruf kedua
                                            </h4>

                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                Curah hujan bulan terkering
                                                80 mm, yaitu lebih dari atau
                                                sama dengan 60 mm. Berdasarkan
                                                kriteria contoh ini, huruf
                                                keduanya adalah{" "}
                                                <strong>f</strong>.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Result */}
                                    <div className="rounded-2xl border border-lime-200 bg-lime-50 p-6 text-center">
                                        <p className="text-sm font-semibold text-lime-900">
                                            Hasil klasifikasi Wilayah X
                                        </p>

                                        <div className="my-2 text-4xl font-extrabold tracking-widest text-[#123b49]">
                                            Af
                                        </div>

                                        <p className="text-sm leading-6 text-slate-600">
                                            Iklim tropis tanpa musim kering yang
                                            nyata berdasarkan contoh data.
                                        </p>
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
                                            Tampilkan data
                                        </h4>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            Minta siswa mengamati data suhu dan
                                            curah hujan terlebih dahulu.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-[#f3f9f8] p-5">
                                        <div className="text-2xl">②</div>

                                        <h4 className="mt-3 font-semibold text-[#123b49]">
                                            Ajukan pertanyaan
                                        </h4>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            Tanyakan langkah apa yang harus
                                            dilakukan dan data mana yang
                                            digunakan.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-[#f3f9f8] p-5">
                                        <div className="text-2xl">③</div>

                                        <h4 className="mt-3 font-semibold text-[#123b49]">
                                            Minta alasan
                                        </h4>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            Minta siswa menjelaskan alasan di
                                            balik setiap huruf pada kode
                                            iklim.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* =================================================
                                RINGKASAN
                            ================================================== */}
                            <section className="mt-7 overflow-hidden rounded-2xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-6 text-white shadow-sm sm:p-8">
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-lime-200">
                                    Ringkasan Modul 5
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
                                            Mulai dengan memeriksa suhu bulan
                                            terdingin.
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-white/10 p-4">
                                        <p className="text-sm leading-6 text-teal-50">
                                            <strong className="text-white">
                                                2.
                                            </strong>{" "}
                                            Periksa curah hujan bulan terkering
                                            sesuai kelompok iklim.
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-white/10 p-4">
                                        <p className="text-sm leading-6 text-teal-50">
                                            <strong className="text-white">
                                                3.
                                            </strong>{" "}
                                            Gunakan data secara berurutan untuk
                                            menentukan kode iklim.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* NAVIGATION */}
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <Link
                                    href={route("teacher.materials.show", 4)}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#c8dcda] bg-white px-5 py-3 font-semibold text-[#087b68] transition hover:bg-[#f3f9f8]"
                                >
                                    <span>←</span>
                                    Modul Sebelumnya
                                </Link>

                                <Link
                                    href={route("teacher.materials.show", 6)}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#123b49] px-5 py-3 font-semibold text-white transition hover:bg-[#0b2e39]"
                                >
                                    Modul Berikutnya
                                    <span>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}