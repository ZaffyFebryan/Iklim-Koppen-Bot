import { Head, Link } from '@inertiajs/react';
import StudentSidebar from '@/Components/StudentSidebar';
import CompleteModuleButton from "@/Components/CompleteModuleButton";

export default function Modul3() {
    const tableClass =
        'w-full min-w-[600px] border-collapse text-left text-sm';

    const thClass =
        'border-b border-[#d4e4e1] bg-[#f3f9f8] px-4 py-3 font-bold text-[#123b49]';

    const tdClass =
        'border-b border-[#e5efed] px-4 py-4 align-top leading-relaxed text-gray-700';

    return (
        <>
            <Head title="Modul 3: Kelompok Iklim A, B, C, D, dan E | IklimKöppenBot" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">

                {/* SIDEBAR */}
                <StudentSidebar />

                {/* MAIN CONTENT */}
                <div className="min-h-screen md:ml-64">

                    {/* HEADER */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-6 py-6 sm:px-10">

                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                    Media Pembelajaran Kelas X
                                </p>

                                <h2 className="mt-1 text-2xl font-bold text-[#123b49] sm:text-3xl">
                                    Modul 3: Kelompok Iklim Köppen
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Mengenal karakteristik kelompok iklim A, B, C, D, dan E.
                                </p>
                            </div>

                            <Link
                                href={route('student.material')}
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
                                href={route('student.material')}
                                className="transition hover:text-[#087b68]"
                            >
                                Materi Köppen
                            </Link>

                            <span>/</span>

                            <span className="font-medium text-[#123b49]">
                                Modul 3
                            </span>
                        </nav>

                        {/* HERO MODUL */}
                        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-7 text-white shadow-sm sm:p-10">
                            <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full border border-white/10" />
                            <div className="absolute -right-2 -top-8 h-40 w-40 rounded-full border border-white/10" />

                            <div className="relative">
                                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-teal-50">
                                    Modul Pembelajaran 03
                                </span>

                                <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                                    Kelompok Iklim A, B, C, D, dan E
                                </h1>

                                <p className="mt-4 max-w-2xl leading-relaxed text-teal-50">
                                    Memahami lima kelompok utama iklim Köppen
                                    berdasarkan karakteristik suhu dan curah
                                    hujan setiap wilayah.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        🌴 Tropis
                                    </span>

                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        🏜️ Kering
                                    </span>

                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        🌤️ Sedang
                                    </span>

                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        ❄️ Kontinental dan Kutub
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* PENGANTAR */}
                        <section className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e1f5ed] text-2xl">
                                    🌎
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-[#123b49]">
                                        Lima Kelompok Utama Iklim Köppen
                                    </h2>

                                    <p className="mt-3 leading-8 text-gray-700">
                                        Sistem klasifikasi iklim Köppen
                                        membagi iklim dunia menjadi lima
                                        kelompok utama, yaitu A, B, C, D, dan E.
                                        Setiap kelompok memiliki karakteristik
                                        suhu dan curah hujan yang berbeda.
                                        Kelompok tersebut juga memiliki kode
                                        turunan untuk menjelaskan kondisi iklim
                                        yang lebih khusus.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* SELESAIKAN MODUL */}
                        <div className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-5 shadow-sm sm:p-6">

                            <CompleteModuleButton moduleNumber={3} />

                        </div>

                        {/* NAVIGASI MODUL */}
                        <div className="mt-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                            <Link
                                href={route('student.modul2')}
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#c8dcda] bg-white px-5 py-3 font-semibold text-[#087b68] transition hover:bg-[#f3f9f8]"
                            >
                                <span>←</span>
                                Modul Sebelumnya
                            </Link>

                            <Link
                                href={route('student.material')}
                                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#087b68] px-6 py-3 font-semibold text-white transition hover:bg-[#066455]"
                            >
                                Kembali ke Daftar Materi
                                <span>→</span>
                            </Link>

                        </div>

                    </main>
                </div>
            </div>
        </>
    );
}