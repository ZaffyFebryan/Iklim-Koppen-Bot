import React from 'react';
import { Head, Link } from '@inertiajs/react';
import TeacherSidebar from '@/Components/TeacherSidebar';

export default function Materials() {
    const materials = [
        {
            number: '01',
            icon: '🌍',
            title: 'Pengertian Klasifikasi Iklim Köppen',
            description:
                'Pelajari konsep dasar klasifikasi iklim Köppen, tujuan penggunaannya, serta bagaimana sistem klasifikasi ini digunakan untuk mengelompokkan iklim berdasarkan karakteristik suhu dan curah hujan.',
            topics: [
                'Pengertian klasifikasi iklim',
                'Sistem klasifikasi Köppen',
                'Dasar pengelompokan iklim',
                'Kegunaan klasifikasi iklim',
            ],
            href: route('teacher.materials.show', 1),
        },
        {
            number: '02',
            icon: '🌡️',
            title: 'Kelompok Iklim Köppen',
            description:
                'Pahami karakteristik kelompok utama iklim Köppen, yaitu A, B, C, D, dan E sebagai dasar untuk membimbing siswa dalam mengenali tipe iklim suatu wilayah.',
            topics: [
                'Iklim A — Tropis',
                'Iklim B — Kering',
                'Iklim C — Sedang',
                'Iklim D — Kontinental',
                'Iklim E — Kutub',
            ],
            href: route('teacher.materials.show', 2),
        },
        {
            number: '03',
            icon: '🌧️',
            title: 'Kriteria Curah Hujan',
            description:
                'Pelajari bagaimana curah hujan digunakan dalam menentukan klasifikasi iklim, termasuk cara melihat kondisi bulan terkering dan pola curah hujan suatu wilayah.',
            topics: [
                'Data curah hujan',
                'Bulan terkering',
                'Pola musim hujan',
                'Kriteria klasifikasi',
            ],
            href: route('teacher.materials.show', 3),
        },
        {
            number: '04',
            icon: '☀️',
            title: 'Kriteria Suhu Udara',
            description:
                'Pahami peranan suhu udara dalam menentukan kelompok iklim Köppen serta bagaimana data suhu digunakan bersama data curah hujan.',
            topics: [
                'Suhu rata-rata',
                'Suhu bulan terpanas',
                'Suhu bulan terdingin',
                'Kriteria kelompok iklim',
            ],
            href: route('teacher.materials.show', 4),
        },
        {
            number: '05',
            icon: '🔎',
            title: 'Membedakan Tipe Iklim',
            description:
                'Pelajari cara membedakan tipe-tipe iklim yang memiliki karakteristik mirip agar guru dapat memberikan penjelasan dan contoh yang lebih mudah dipahami siswa.',
            topics: [
                'Af, Am, dan Aw',
                'Cs dan Cw',
                'Perbandingan karakteristik',
                'Analisis data iklim',
            ],
            href: route('teacher.materials.show', 5),
        },
        {
            number: '06',
            icon: '🗺️',
            title: 'Penerapan pada Wilayah',
            description:
                'Gunakan konsep klasifikasi Köppen untuk membahas karakteristik iklim berbagai wilayah di Indonesia dan dunia melalui data dan studi kasus.',
            topics: [
                'Studi kasus wilayah',
                'Data suhu dan curah hujan',
                'Penentuan tipe iklim',
                'Contoh wilayah Indonesia dan dunia',
            ],
            href: route('teacher.materials.show', 6),
        },
    ];

    return (
        <>
            <Head title="Materi Köppen - Guru | GeoBot" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">

                {/* SIDEBAR */}
                <TeacherSidebar />

                {/* KONTEN UTAMA */}
                <main className="min-h-screen min-w-0 lg:ml-72">

                    {/* HEADER */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                        Media Pembelajaran Kelas X
                                    </p>

                                    <h1 className="mt-1 text-3xl font-bold text-[#123b49]">
                                        Materi Köppen
                                    </h1>

                                    <p className="mt-1 max-w-2xl text-sm text-gray-500 sm:text-base">
                                        Materi yang dapat digunakan guru untuk
                                        membimbing siswa memahami klasifikasi
                                        iklim Köppen.
                                    </p>
                                </div>

                                <Link
                                    href={route('teacher.dashboard')}
                                    className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#cfe4df] bg-white px-4 py-2.5 text-sm font-semibold text-[#075568] shadow-sm transition hover:border-[#087b70] hover:bg-[#f0faf7]"
                                >
                                    <span>←</span>
                                    Kembali ke Dashboard
                                </Link>

                            </div>
                        </div>
                    </header>

                    {/* CONTENT */}
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

                        {/* HERO */}
                        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#07384b] via-[#075568] to-[#087b70] p-6 text-white shadow-sm sm:p-8">

                            {/* Dekorasi */}
                            <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border border-white/10" />

                            <div className="pointer-events-none absolute -right-5 -top-5 h-28 w-28 rounded-full border border-white/10" />

                            <div className="pointer-events-none absolute -bottom-20 -left-10 h-44 w-44 rounded-full border border-white/10" />

                            <div className="relative max-w-3xl">

                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-3xl backdrop-blur-sm">
                                    🌍
                                </div>

                                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-teal-100">
                                    Ruang Materi Guru
                                </p>

                                <h2 className="mt-2 text-2xl font-extrabold leading-tight sm:text-3xl">
                                    Memahami Klasifikasi
                                    <br />
                                    Iklim Köppen
                                </h2>

                                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-teal-50 sm:text-base">
                                    Pelajari konsep, kriteria, dan penerapan
                                    klasifikasi iklim Köppen sebagai bekal
                                    untuk membimbing siswa dalam proses
                                    pembelajaran.
                                </p>

                            </div>
                        </section>

                        {/* RINGKASAN */}
                        <section className="mt-6 grid gap-4 sm:grid-cols-3">

                            <div className="rounded-2xl border border-[#d4e8e4] bg-white p-5 shadow-sm">
                                <div className="flex items-center gap-4">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eff9f7] text-2xl">
                                        📚
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                            Total
                                        </p>

                                        <h3 className="mt-1 font-bold text-[#123b49]">
                                            {materials.length} Materi
                                        </h3>
                                    </div>

                                </div>
                            </div>

                            <div className="rounded-2xl border border-[#d4e8e4] bg-white p-5 shadow-sm">
                                <div className="flex items-center gap-4">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eff9f7] text-2xl">
                                        🌡️
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                            Fokus
                                        </p>

                                        <h3 className="mt-1 font-bold text-[#123b49]">
                                            Suhu & Curah Hujan
                                        </h3>
                                    </div>

                                </div>
                            </div>

                            <div className="rounded-2xl border border-[#d4e8e4] bg-white p-5 shadow-sm">
                                <div className="flex items-center gap-4">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eff9f7] text-2xl">
                                        🗺️
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                            Penerapan
                                        </p>

                                        <h3 className="mt-1 font-bold text-[#123b49]">
                                            Studi Kasus
                                        </h3>
                                    </div>

                                </div>
                            </div>

                        </section>

                        {/* DAFTAR MATERI */}
                        <section className="mt-8">

                            <div className="mb-6">
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                                    Daftar Materi
                                </p>

                                <h2 className="mt-1 text-2xl font-bold text-[#123b49]">
                                    Materi Pembelajaran Köppen
                                </h2>

                                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-500 sm:text-base">
                                    Gunakan materi berikut sebagai referensi
                                    ketika menjelaskan konsep klasifikasi iklim
                                    kepada siswa.
                                </p>
                            </div>

                            <div className="grid gap-5 md:grid-cols-2">

                                {materials.map((material) => (
                                    <article
                                        key={material.number}
                                        className="group overflow-hidden rounded-3xl border border-[#d4e8e4] bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#b9ded5] hover:shadow-md"
                                    >

                                        {/* Bagian atas */}
                                        <div className="relative overflow-hidden bg-[#f4fbf9] p-6">

                                            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full border border-[#d8f1e9]" />

                                            <div className="relative flex items-start justify-between gap-4">

                                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                                                    {material.icon}
                                                </div>

                                                <span className="rounded-full bg-[#d9f99d] px-3 py-1 text-xs font-extrabold text-[#123b49]">
                                                    Materi {material.number}
                                                </span>

                                            </div>

                                            <h3 className="mt-5 text-xl font-bold leading-tight text-[#123b49]">
                                                {material.title}
                                            </h3>

                                            <p className="mt-3 text-sm leading-relaxed text-gray-500">
                                                {material.description}
                                            </p>

                                        </div>

                                        {/* Topik */}
                                        <div className="p-6">

                                            <p className="text-xs font-bold uppercase tracking-[0.13em] text-[#16805f]">
                                                Pokok Bahasan
                                            </p>

                                            <div className="mt-4 space-y-2">

                                                {material.topics.map((topic) => (
                                                    <div
                                                        key={topic}
                                                        className="flex items-center gap-3 rounded-xl bg-[#f8fbfa] px-3 py-2.5"
                                                    >
                                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e1f5ed] text-xs font-bold text-[#087b68]">
                                                            ✓
                                                        </span>

                                                        <span className="text-sm font-medium text-[#174453]">
                                                            {topic}
                                                        </span>
                                                    </div>
                                                ))}

                                            </div>

                                            <div className="mt-5 border-t border-[#e5efed] pt-5">

                                                <div className="flex items-center justify-between gap-3">

                                                    <div>
                                                        <p className="text-xs text-gray-500">
                                                            Status materi
                                                        </p>

                                                        <p className="mt-1 text-sm font-semibold text-[#16805f]">
                                                            Tersedia
                                                        </p>
                                                    </div>

                                                    <Link
                                                        href={material.href}
                                                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#087b70] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#06675e]"
                                                    >
                                                        Buka Materi
                                                        <span className="transition-transform group-hover:translate-x-1">
                                                            →
                                                        </span>
                                                    </Link>

                                                </div>

                                            </div>

                                        </div>

                                    </article>
                                ))}

                            </div>
                        </section>

                        {/* CARA MENGGUNAKAN MATERI */}
                        <section className="mt-8 overflow-hidden rounded-3xl border border-[#d4e8e4] bg-white shadow-sm">

                            <div className="p-6 sm:p-8">

                                <div className="flex items-start gap-4">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e1f5ed] text-2xl">
                                        💡
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                                            Tips Penggunaan
                                        </p>

                                        <h3 className="mt-1 text-2xl font-bold text-[#123b49]">
                                            Gunakan materi secara bertahap
                                        </h3>

                                        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-500 sm:text-base">
                                            Guru dapat menggunakan materi ini
                                            sebagai dasar dalam menyusun
                                            penjelasan, memberikan contoh,
                                            mengarahkan diskusi, dan memberikan
                                            latihan kepada siswa.
                                        </p>
                                    </div>

                                </div>

                                <div className="mt-6 grid gap-4 md:grid-cols-3">

                                    <div className="rounded-2xl border border-[#dcebe7] bg-[#f8fbfa] p-5">
                                        <div className="text-2xl">
                                            1️⃣
                                        </div>

                                        <h4 className="mt-3 font-bold text-[#123b49]">
                                            Pahami konsep
                                        </h4>

                                        <p className="mt-2 text-sm leading-relaxed text-gray-500">
                                            Kuasai konsep dasar sebelum
                                            menyampaikan materi kepada siswa.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#dcebe7] bg-[#f8fbfa] p-5">
                                        <div className="text-2xl">
                                            2️⃣
                                        </div>

                                        <h4 className="mt-3 font-bold text-[#123b49]">
                                            Berikan contoh
                                        </h4>

                                        <p className="mt-2 text-sm leading-relaxed text-gray-500">
                                            Gunakan contoh wilayah dan data
                                            iklim untuk membantu siswa
                                            memahami konsep.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#dcebe7] bg-[#f8fbfa] p-5">
                                        <div className="text-2xl">
                                            3️⃣
                                        </div>

                                        <h4 className="mt-3 font-bold text-[#123b49]">
                                            Arahkan latihan
                                        </h4>

                                        <p className="mt-2 text-sm leading-relaxed text-gray-500">
                                            Arahkan siswa menggunakan GeoBot
                                            untuk bertanya dan menguji
                                            pemahamannya.
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </section>

                        {/* CTA */}
                        <section className="mt-6 rounded-2xl border border-[#cce7d9] bg-[#effaf3] p-5 sm:p-6">

                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                                <div className="flex items-center gap-4">

                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#d9f99d] text-3xl">
                                        👥
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-[#123b49]">
                                            Lanjutkan ke Data Siswa
                                        </h3>

                                        <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                            Kelola akun siswa yang akan
                                            menggunakan materi pembelajaran
                                            GeoBot.
                                        </p>
                                    </div>

                                </div>

                                <Link
                                    href={route('teacher.students.index')}
                                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#087b70] px-5 py-3 font-semibold text-white transition hover:bg-[#06675e]"
                                >
                                    Data Siswa
                                    <span>›</span>
                                </Link>

                            </div>

                        </section>

                        {/* FOOTER */}
                        <footer className="mt-8 border-t border-[#d7e5e3] pt-5 pb-8 text-center text-sm text-gray-400">
                            GeoBot · Media Pembelajaran Klasifikasi Iklim Köppen
                        </footer>

                    </div>
                </main>
            </div>
        </>
    );
}