import React from "react";
import { Head, Link } from "@inertiajs/react";
import StudentSidebar from "../../Components/StudentSidebar";

export default function Objectives() {
    const objectives = [
        "Menjelaskan pengertian klasifikasi iklim dan kegunaannya dalam memahami kondisi wilayah.",

        "Menganalisis kriteria curah hujan dan suhu udara pada tiap kelompok iklim (A, B, C, D, dan E).",

        "Membedakan tipe-tipe iklim yang memiliki kriteria mirip, seperti Am dan Aw, atau Cs dan Cw.",

        "Menentukan klasifikasi iklim suatu wilayah berdasarkan data curah hujan dan suhu yang diberikan.",

        "Menerapkan kriteria klasifikasi iklim Köppen pada studi kasus wilayah di Indonesia dan dunia melalui simulasi tanya-jawab bersama GeoBot.",

        "Menjelaskan dampak tipe iklim terhadap kehidupan, seperti pola pertanian, persebaran vegetasi, dan aktivitas manusia sehari-hari.",
    ];

    return (
        <>
            <Head title="Tujuan Pembelajaran | IklimKöppenBot" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                {/* SIDEBAR */}
                <StudentSidebar />

                {/* KONTEN UTAMA */}
                <div className="min-h-screen md:ml-64">
                    {/* HEADER */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="mx-auto max-w-[1400px] px-6 py-5 sm:px-8">
                            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                Media Pembelajaran Kelas X
                            </p>

                            <h2 className="mt-1 text-2xl font-bold text-[#123b49]">
                                Tujuan Pembelajaran
                            </h2>

                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Kompetensi yang akan kamu capai setelah
                                mempelajari klasifikasi iklim Köppen.
                            </p>
                        </div>
                    </header>

                    {/* ISI HALAMAN */}
                    <main className="mx-auto max-w-[1250px] px-6 py-7 sm:px-8">
                        <section className="relative overflow-hidden rounded-3xl border border-[#d4e8e4] bg-white p-5 shadow-sm sm:p-7">
                            {/* Dekorasi */}
                            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[#d8f1e9]" />

                            <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full border border-[#d8f1e9]" />

                            {/* Judul */}
                            <div className="relative mb-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-2xl font-extrabold leading-tight text-[#075568]">
                                            Tujuan Pembelajaran
                                        </h3>

                                        <div className="mt-3 h-1.5 w-24 rounded-full bg-[#55c2ae]" />
                                    </div>

                                    <div className="hidden text-3xl text-[#55bda9] sm:block">
                                        📍
                                    </div>
                                </div>
                            </div>

                            {/* Daftar tujuan */}
                            <div className="space-y-3">
                                {objectives.map((objective, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 rounded-2xl border border-[#e4eeec] bg-white p-3.5 shadow-sm transition hover:border-[#b9ded5] hover:shadow-md sm:gap-4 sm:p-4"
                                    >
                                        {/* Nomor */}
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eff9f7] text-xl font-extrabold text-[#55bda9] sm:h-14 sm:w-14 sm:text-2xl">
                                            {index + 1}
                                        </div>

                                        {/* Garis pemisah */}
                                        <div className="hidden h-10 border-l-2 border-dotted border-[#b9ded5] sm:block" />

                                        {/* Deskripsi */}
                                        <p className="flex-1 text-[13px] font-medium leading-6 text-[#174453] sm:text-sm">
                                            {objective}
                                        </p>

                                        {/* Ikon ceklis */}
                                        <div
                                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-[#69c8b4] text-sm font-bold text-[#55bda9] sm:h-8 sm:w-8"
                                            aria-label="Tujuan pembelajaran"
                                        >
                                            ✓
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Tombol mulai materi */}
                            <div className="mt-6">
                                <Link
                                    href={route("student.material")}
                                    className="flex w-full items-center justify-center rounded-2xl bg-[#087b70] px-5 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#06675e]"
                                >
                                    Mulai Materi
                                    <span className="ml-2 text-base">→</span>
                                </Link>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}