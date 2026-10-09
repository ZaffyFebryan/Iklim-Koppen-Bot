import React from "react";
import { Head, Link } from "@inertiajs/react";
import TeacherSidebar from "@/Components/TeacherSidebar";

export default function Guide() {
    const guideSteps = [
        {
            number: "01",
            icon: "🎯",
            title: "Persiapkan Pembelajaran",
            description:
                "Mulai dengan memahami tujuan pembelajaran dan materi klasifikasi iklim Köppen yang akan digunakan.",
            details: [
                "Buka menu Tujuan Pembelajaran untuk melihat capaian belajar.",
                "Pelajari materi yang tersedia sebelum memulai kegiatan.",
                "Siapkan aktivitas atau kuis yang sesuai dengan kebutuhan kelas.",
            ],
        },
        {
            number: "02",
            icon: "👥",
            title: "Kelola Akun Siswa",
            description:
                "Tambahkan akun siswa agar mereka dapat mengakses kegiatan pembelajaran GeoBot.",
            details: [
                "Buka menu Data Siswa.",
                "Isi nama lengkap, email, dan password akun siswa.",
                "Tekan tombol Tambah Siswa untuk menyimpan akun.",
                "Periksa akun yang sudah terdaftar pada tabel daftar siswa.",
            ],
            href: route("teacher.students.index"),
            action: "Kelola Data Siswa",
        },
        {
            number: "03",
            icon: "📚",
            title: "Gunakan Materi Pembelajaran",
            description:
                "Manfaatkan materi pembelajaran untuk membantu siswa memahami konsep klasifikasi iklim Köppen.",
            details: [
                "Buka menu Materi Pembelajaran.",
                "Pilih materi yang akan digunakan dalam kegiatan belajar.",
                "Arahkan siswa untuk membaca dan memahami isi materi.",
                "Gunakan materi sebagai dasar sebelum latihan atau kuis.",
            ],
            href: "/teacher/materials",
            action: "Buka Materi",
        },
        {
            number: "04",
            icon: "🤖",
            title: "Gunakan Chatbot GeoBot",
            description:
                "Gunakan chatbot sebagai sarana latihan klasifikasi iklim berdasarkan informasi suhu dan curah hujan.",
            details: [
                "Buka menu Chatbot GeoBot.",
                "Masukkan informasi atau pertanyaan terkait klasifikasi iklim.",
                "Perhatikan penjelasan dan hasil yang diberikan chatbot.",
                "Diskusikan hasil latihan bersama siswa.",
            ],
            href: "/teacher/chatbot",
            action: "Buka Chatbot",
        },
        {
            number: "05",
            icon: "✏️",
            title: "Buat Kuis Pembelajaran",
            description:
                "Gunakan kuis untuk memberikan latihan dan memeriksa pemahaman siswa terhadap materi.",
            details: [
                "Buka menu Tambah Quiz.",
                "Buat pertanyaan sesuai materi yang dipelajari.",
                "Periksa kembali pertanyaan dan pilihan jawaban sebelum digunakan.",
                "Arahkan siswa mengerjakan kuis sesuai instruksi pembelajaran.",
            ],
            href: "/teacher/quizzes/create",
            action: "Tambah Quiz",
        },
        {
            number: "06",
            icon: "📊",
            title: "Pantau Hasil Belajar",
            description:
                "Gunakan halaman nilai untuk melihat hasil pengerjaan kuis dan memantau perkembangan belajar siswa.",
            details: [
                "Buka menu Nilai Siswa atau Hasil Kuis Siswa.",
                "Periksa hasil pengerjaan yang tersedia.",
                "Gunakan hasil evaluasi untuk menentukan materi yang perlu dipelajari kembali.",
            ],
            href: "/teacher/grades",
            action: "Lihat Hasil Kuis",
        },
    ];

    const learningTips = [
        {
            icon: "📖",
            title: "Mulai dari konsep dasar",
            description:
                "Pastikan siswa memahami unsur iklim seperti suhu dan curah hujan sebelum melakukan klasifikasi.",
        },
        {
            icon: "🧩",
            title: "Gunakan latihan bertahap",
            description:
                "Mulai dengan contoh sederhana, lalu lanjutkan ke latihan klasifikasi yang lebih menantang.",
        },
        {
            icon: "💬",
            title: "Diskusikan hasil",
            description:
                "Ajak siswa menjelaskan alasan di balik hasil klasifikasi, bukan hanya menghafal kode iklim.",
        },
    ];

    return (
        <>
            <Head title="Panduan Penggunaan - GeoBot" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                <TeacherSidebar />

                <main className="min-h-screen min-w-0 lg:ml-72">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                        {/* HEADER */}
                        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm font-medium text-[#087b68]">
                                    Panel Pengajar
                                </p>

                                <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#123b49] sm:text-3xl">
                                    Panduan Penggunaan
                                </h2>

                                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
                                    Panduan penggunaan GeoBot untuk membantu
                                    guru mengelola kegiatan pembelajaran
                                    klasifikasi iklim Köppen.
                                </p>
                            </div>

                            <Link
                                href={route("teacher.dashboard")}
                                className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#d4e4e1] bg-white px-4 py-3 text-sm font-semibold text-[#087b68] shadow-sm transition hover:bg-[#f7fbfa]"
                            >
                                <span>←</span>
                                Kembali ke Dashboard
                            </Link>
                        </header>

                        {/* HERO BANNER */}
                        <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-6 text-white shadow-lg sm:p-8">
                            <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full border-[30px] border-white/5" />
                            <div className="absolute -bottom-24 right-36 h-48 w-48 rounded-full bg-white/5" />

                            <div className="relative z-10 max-w-3xl">
                                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-teal-50">
                                    Panduan Penggunaan GeoBot
                                </span>

                                <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                                    Mulai Pembelajaran dengan GeoBot
                                </h3>

                                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-teal-50 sm:text-base">
                                    Ikuti tahapan berikut untuk menyiapkan
                                    pembelajaran, mengelola akun siswa,
                                    menggunakan materi dan chatbot, serta
                                    memantau hasil evaluasi.
                                </p>
                            </div>
                        </section>

                        {/* ALUR PENGGUNAAN */}
                        <section className="mb-8">
                            <div className="mb-5">
                                <h3 className="text-xl font-bold text-[#123b49]">
                                    Alur Penggunaan GeoBot
                                </h3>

                                <p className="mt-1 text-sm text-slate-500">
                                    Ikuti langkah-langkah berikut sesuai
                                    kebutuhan kegiatan belajar mengajar.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                {guideSteps.map((step) => (
                                    <article
                                        key={step.number}
                                        className="rounded-2xl border border-[#d4e4e1] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#87c9b5] hover:shadow-lg sm:p-6"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e5f5ef] text-2xl">
                                                {step.icon}
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <div className="mb-1 flex items-center justify-between gap-3">
                                                    <span className="text-xs font-semibold uppercase tracking-wider text-[#087b68]">
                                                        Langkah {step.number}
                                                    </span>

                                                    <span className="text-sm font-semibold text-[#a5c8bd]">
                                                        {step.number}
                                                    </span>
                                                </div>

                                                <h4 className="text-lg font-bold text-[#123b49]">
                                                    {step.title}
                                                </h4>
                                            </div>
                                        </div>

                                        <p className="mt-4 text-sm leading-relaxed text-slate-500">
                                            {step.description}
                                        </p>

                                        <ul className="mt-4 space-y-3">
                                            {step.details.map(
                                                (detail, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start gap-3 text-sm leading-relaxed text-slate-600"
                                                    >
                                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e5f5ef] text-xs font-bold text-[#087b68]">
                                                            ✓
                                                        </span>

                                                        <span>{detail}</span>
                                                    </li>
                                                )
                                            )}
                                        </ul>

                                        {step.href && (
                                            <div className="mt-5 border-t border-[#e7f0ee] pt-4">
                                                <Link
                                                    href={step.href}
                                                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#087b68] transition hover:text-[#066657]"
                                                >
                                                    {step.action}
                                                    <span>→</span>
                                                </Link>
                                            </div>
                                        )}
                                    </article>
                                ))}
                            </div>
                        </section>

                        {/* TIPS PEMBELAJARAN */}
                        <section className="mb-8">
                            <div className="mb-5">
                                <h3 className="text-xl font-bold text-[#123b49]">
                                    Tips Kegiatan Pembelajaran
                                </h3>

                                <p className="mt-1 text-sm text-slate-500">
                                    Beberapa hal yang dapat diperhatikan saat
                                    menggunakan GeoBot dalam pembelajaran.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                                {learningTips.map((tip, index) => (
                                    <div
                                        key={index}
                                        className="rounded-2xl border border-[#d4e4e1] bg-white p-5 shadow-sm"
                                    >
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e5f5ef] text-xl">
                                            {tip.icon}
                                        </div>

                                        <h4 className="mt-4 font-bold text-[#123b49]">
                                            {tip.title}
                                        </h4>

                                        <p className="mt-2 text-sm leading-relaxed text-slate-500">
                                            {tip.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* QUICK ACCESS */}
                        <section className="mb-8 rounded-2xl border border-[#d4e4e1] bg-white p-5 shadow-sm sm:p-6">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h3 className="font-bold text-[#123b49]">
                                        Siap Memulai?
                                    </h3>

                                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                                        Buka dashboard untuk mengakses fitur
                                        pembelajaran dan pengelolaan kelas.
                                    </p>
                                </div>

                                <Link
                                    href={route("teacher.dashboard")}
                                    className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-[#087b68] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#066657]"
                                >
                                    Ke Dashboard
                                    <span>→</span>
                                </Link>
                            </div>
                        </section>

                        {/* FOOTER */}
                        <footer className="rounded-2xl border border-[#d4e4e1] bg-white/70 px-5 py-4">
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