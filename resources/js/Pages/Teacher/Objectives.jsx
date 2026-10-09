import React from 'react';
import { Head, Link } from '@inertiajs/react';
import TeacherSidebar from '@/Components/TeacherSidebar';

export default function Objectives() {
    const objectives = [
        'Memahami konsep dasar klasifikasi iklim Köppen serta karakteristik setiap kelompok iklim A, B, C, D, dan E sebagai dasar dalam menyusun pembelajaran.',

        'Menjelaskan kriteria suhu dan curah hujan yang digunakan dalam menentukan klasifikasi iklim Köppen kepada siswa secara sistematis dan mudah dipahami.',

        'Membimbing siswa dalam membedakan tipe-tipe iklim yang memiliki karakteristik mirip, seperti Am dan Aw, serta Cs dan Cw.',

        'Membimbing siswa menentukan klasifikasi iklim suatu wilayah berdasarkan data curah hujan dan suhu melalui contoh, latihan, dan studi kasus.',

        'Memanfaatkan GeoBot sebagai media pembelajaran interaktif untuk mendukung kegiatan tanya-jawab, simulasi, dan pemahaman siswa mengenai klasifikasi iklim Köppen.',

        'Memantau perkembangan belajar siswa melalui aktivitas pembelajaran, latihan, dan hasil evaluasi untuk mengetahui ketercapaian tujuan pembelajaran.',
    ];

    const totalObjectives = objectives.length;

    return (
        <>
            <Head title="Tujuan Pembelajaran Guru - GeoBot" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">

                {/* SIDEBAR GURU */}
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
                                        Tujuan Pembelajaran
                                    </h1>

                                    <p className="mt-1 max-w-2xl text-sm text-gray-500 sm:text-base">
                                        Panduan kompetensi yang perlu dicapai guru
                                        dalam mengelola pembelajaran klasifikasi
                                        iklim Köppen bersama siswa.
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

                    {/* ISI */}
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

                        {/* HERO */}
                        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#07384b] via-[#075568] to-[#087b70] p-6 text-white shadow-sm sm:p-8">

                            {/* Dekorasi */}
                            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10" />
                            <div className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 rounded-full border border-white/10" />
                            <div className="pointer-events-none absolute -bottom-16 -left-8 h-40 w-40 rounded-full border border-white/10" />

                            <div className="relative max-w-3xl">
                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-3xl backdrop-blur-sm">
                                    🎯
                                </div>

                                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-teal-100">
                                    Panduan Guru
                                </p>

                                <h2 className="mt-2 text-2xl font-extrabold leading-tight sm:text-3xl">
                                    Tujuan Pembelajaran
                                </h2>

                                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-teal-50 sm:text-base">
                                    Gunakan tujuan berikut sebagai acuan dalam
                                    merancang, melaksanakan, dan mengevaluasi
                                    pembelajaran klasifikasi iklim Köppen
                                    menggunakan GeoBot.
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
                                            Fokus
                                        </p>
                                        <h3 className="mt-1 font-bold text-[#123b49]">
                                            Pembelajaran
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-[#d4e8e4] bg-white p-5 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eff9f7] text-2xl">
                                        🤖
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                            Media
                                        </p>
                                        <h3 className="mt-1 font-bold text-[#123b49]">
                                            GeoBot
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-[#d4e8e4] bg-white p-5 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eff9f7] text-2xl">
                                        📊
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                            Fokus
                                        </p>
                                        <h3 className="mt-1 font-bold text-[#123b49]">
                                            Evaluasi Siswa
                                        </h3>
                                    </div>
                                </div>
                            </div>

                        </section>

                        {/* KARTU TUJUAN */}
                        <section className="relative mt-6 overflow-hidden rounded-3xl border border-[#d4e8e4] bg-white p-5 shadow-sm sm:p-8">

                            {/* Dekorasi */}
                            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#d8f1e9]" />
                            <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full border border-[#d8f1e9]" />

                            {/* Judul */}
                            <div className="relative mb-7">

                                <div className="flex items-start justify-between gap-4">

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                                            Kompetensi Guru
                                        </p>

                                        <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#075568]">
                                            Tujuan
                                            <br />
                                            Pembelajaran
                                        </h2>

                                        <div className="mt-5 h-2 w-32 rounded-full bg-[#55c2ae]" />
                                    </div>

                                    <div className="hidden text-5xl text-[#55bda9] sm:block">
                                        🎯
                                    </div>

                                </div>

                                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#42616a] sm:text-base">
                                    Setelah menggunakan halaman ini sebagai
                                    acuan, guru diharapkan mampu mengelola
                                    pembelajaran klasifikasi iklim Köppen
                                    secara terarah, interaktif, dan sesuai
                                    dengan kebutuhan belajar siswa.
                                </p>

                            </div>

                            {/* DAFTAR TUJUAN */}
                            <div className="space-y-3">

                                {objectives.map((objective, index) => (
                                    <div
                                        key={index}
                                        className="group flex items-center gap-4 rounded-2xl border border-[#e4eeec] bg-white p-4 shadow-sm transition hover:border-[#b9ded5] hover:bg-[#fbfefd] hover:shadow-md sm:gap-6 sm:p-5"
                                    >

                                        {/* Nomor */}
                                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#eff9f7] text-4xl font-extrabold text-[#55bda9] transition group-hover:bg-[#dff4ee] sm:h-20 sm:w-20 sm:text-5xl">
                                            {index + 1}
                                        </div>

                                        {/* Garis */}
                                        <div className="hidden h-16 border-l-2 border-dotted border-[#b9ded5] sm:block" />

                                        {/* Deskripsi */}
                                        <p className="flex-1 text-sm font-medium leading-relaxed text-[#174453] sm:text-base">
                                            {objective}
                                        </p>

                                        {/* Check */}
                                        <div
                                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#69c8b4] text-lg font-bold text-[#55bda9] transition group-hover:bg-[#087b70] group-hover:text-white sm:h-11 sm:w-11"
                                            aria-label="Tujuan pembelajaran"
                                        >
                                            ✓
                                        </div>

                                    </div>
                                ))}

                            </div>

                            {/* RINGKASAN JUMLAH TUJUAN */}
                            <div className="mt-7 rounded-2xl border border-[#e1efec] bg-[#f4fbf9] p-5 sm:p-6">

                                <div className="flex items-center gap-4">

                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#087b70] text-2xl text-white">
                                        🎯
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-[#123b49] sm:text-2xl">
                                            Fokus Pembelajaran
                                        </h3>

                                        <p className="mt-1 text-sm text-[#42616a] sm:text-base">
                                            {totalObjectives} tujuan utama yang
                                            menjadi acuan guru dalam proses
                                            pembelajaran.
                                        </p>
                                    </div>

                                </div>

                                {/* Progress visual */}
                                <div className="mt-5 h-4 overflow-hidden rounded-full border border-[#dce8e5] bg-[#e9eeee]">
                                    <div
                                        className="h-full rounded-full bg-[#55c2ae]"
                                        style={{ width: '100%' }}
                                    />
                                </div>

                                <p className="mt-2 text-right text-xs font-semibold text-[#16805f]">
                                    {totalObjectives} Tujuan
                                </p>

                            </div>

                            {/* AKSI */}
                            <div className="mt-5 grid gap-3 sm:grid-cols-2">

                                <Link
                                    href={route('teacher.guide')}
                                    className="flex items-center justify-center rounded-2xl border border-[#cfe4df] bg-white px-6 py-4 text-base font-bold text-[#075568] shadow-sm transition hover:border-[#087b70] hover:bg-[#f0faf7]"
                                >
                                    <span className="mr-3">📖</span>
                                    Buka Panduan Belajar
                                </Link>

                                <Link
                                    href={route('teacher.students.index')}
                                    className="flex items-center justify-center rounded-2xl bg-[#087b70] px-6 py-4 text-base font-bold text-white shadow-sm transition hover:bg-[#06675e]"
                                >
                                    <span className="mr-3">👥</span>
                                    Kelola Data Siswa
                                </Link>

                            </div>

                        </section>

                        {/* CATATAN UNTUK GURU */}
                        <section className="mt-6 rounded-3xl border border-[#d4e8e4] bg-white p-5 shadow-sm sm:p-7">

                            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#d9f99d] text-2xl">
                                    💡
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-[#123b49]">
                                        Catatan Penggunaan
                                    </h3>

                                    <p className="mt-2 text-sm leading-relaxed text-[#42616a] sm:text-base">
                                        Tujuan pembelajaran ini dapat digunakan
                                        sebagai acuan saat guru menyiapkan
                                        materi, mengarahkan aktivitas siswa,
                                        menggunakan GeoBot, serta memantau
                                        ketercapaian pembelajaran. Guru dapat
                                        menghubungkan setiap tujuan dengan
                                        materi, latihan, dan evaluasi yang
                                        tersedia di GeoBot.
                                    </p>
                                </div>

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