import { Head, Link } from '@inertiajs/react';
import StudentSidebar from '@/Components/StudentSidebar';
import CompleteModuleButton from "@/Components/CompleteModuleButton";

export default function Modul2() {
    return (
        <>
            <Head title="Modul 2: Kriteria Suhu dan Curah Hujan | IklimKöppenBot" />

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
                                    Modul 2: Kriteria Suhu dan Curah Hujan
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Memahami unsur iklim yang digunakan dalam klasifikasi Köppen.
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
                                Modul 2
                            </span>
                        </nav>

                        {/* HERO MODUL */}
                        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-7 text-white shadow-sm sm:p-10">

                            <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full border border-white/10" />

                            <div className="absolute -right-2 -top-8 h-40 w-40 rounded-full border border-white/10" />

                            <div className="relative">
                                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-teal-50">
                                    Modul Pembelajaran 02
                                </span>

                                <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                                    Kriteria Suhu dan Curah Hujan
                                </h1>

                                <p className="mt-4 max-w-2xl leading-relaxed text-teal-50">
                                    Mengenal cara suhu udara dan curah hujan
                                    digunakan untuk menentukan kelompok serta
                                    tipe iklim suatu wilayah.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        🌡️ Suhu Udara
                                    </span>

                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        💧 Curah Hujan
                                    </span>

                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        ⏱️ Estimasi 10 menit
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* ISI MATERI */}
                        <article className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">

                            <div className="border-b border-[#e5efed] px-6 py-6 sm:px-10">
                                <div className="flex items-start gap-4">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e1f5ed] text-2xl text-[#087b68]">
                                        🌡️
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                                            Materi 2.1
                                        </p>

                                        <h2 className="mt-1 text-xl font-bold text-[#123b49] sm:text-2xl">
                                            Unsur Iklim dalam Klasifikasi Köppen
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8 px-6 py-7 sm:px-10 sm:py-9">

                                {/* SUHU UDARA */}
                                <section>
                                    <div className="flex items-center gap-3">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff1d6] text-2xl">
                                            🌡️
                                        </div>

                                        <h3 className="text-xl font-bold text-[#123b49] sm:text-2xl">
                                            1. Suhu Udara
                                        </h3>
                                    </div>

                                    <p className="mt-4 text-justify text-base leading-8 text-gray-700">
                                        Suhu udara dilihat berdasarkan suhu
                                        rata-rata bulan terdingin dan bulan
                                        terpanas dalam setahun. Kedua data ini
                                        membantu menggambarkan kondisi suhu
                                        suatu wilayah dan menjadi salah satu
                                        dasar dalam menentukan kelompok iklim.
                                    </p>

                                    <div className="mt-5 rounded-2xl border border-[#f1dfb9] bg-[#fffaf0] p-5 sm:p-6">
                                        <div className="flex items-start gap-3">

                                            <span className="text-2xl">
                                                💡
                                            </span>

                                            <div>
                                                <h4 className="font-bold text-[#123b49]">
                                                    Contoh
                                                </h4>

                                                <p className="mt-2 leading-relaxed text-gray-700">
                                                    Jika suhu rata-rata bulan
                                                    terdingin di suatu wilayah
                                                    tetap di atas 18°C sepanjang
                                                    tahun, wilayah tersebut tidak
                                                    mengalami musim dingin
                                                    berdasarkan kriteria suhu ini
                                                    dan biasanya termasuk
                                                    kelompok iklim tropis (A).
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 grid gap-3 sm:grid-cols-2">

                                        <div className="rounded-xl bg-[#f8fbfa] p-5">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Data suhu pertama
                                            </p>

                                            <p className="mt-2 text-lg font-bold text-[#087b68]">
                                                Bulan terdingin
                                            </p>

                                            <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                                Suhu rata-rata pada bulan dengan
                                                suhu paling rendah dalam setahun.
                                            </p>
                                        </div>

                                        <div className="rounded-xl bg-[#f8fbfa] p-5">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Data suhu kedua
                                            </p>

                                            <p className="mt-2 text-lg font-bold text-[#087b68]">
                                                Bulan terpanas
                                            </p>

                                            <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                                Suhu rata-rata pada bulan dengan
                                                suhu paling tinggi dalam setahun.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <div className="border-t border-[#e5efed]" />

                                {/* CURAH HUJAN */}
                                <section>

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f4fb] text-2xl">
                                            💧
                                        </div>

                                        <h3 className="text-xl font-bold text-[#123b49] sm:text-2xl">
                                            2. Curah Hujan
                                        </h3>
                                    </div>

                                    <p className="mt-4 text-justify text-base leading-8 text-gray-700">
                                        Curah hujan dianalisis melalui jumlah
                                        hujan pada bulan terkering, yaitu bulan
                                        dengan curah hujan paling sedikit, serta
                                        total curah hujan tahunan. Data tersebut
                                        digunakan untuk memahami pola hujan dan
                                        kondisi kering suatu wilayah.
                                    </p>

                                    <div className="mt-5 rounded-2xl border border-[#cfe5f0] bg-[#f1f9fd] p-5 sm:p-6">
                                        <div className="flex items-start gap-3">

                                            <span className="text-2xl">
                                                💡
                                            </span>

                                            <div>
                                                <h4 className="font-bold text-[#123b49]">
                                                    Contoh
                                                </h4>

                                                <p className="mt-2 leading-relaxed text-gray-700">
                                                    Jika curah hujan pada bulan
                                                    terkering berada di bawah
                                                    60 mm, kondisi tersebut dapat
                                                    menjadi petunjuk adanya
                                                    periode kering yang jelas
                                                    dalam pola hujan wilayah
                                                    tersebut.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 grid gap-3 sm:grid-cols-2">

                                        <div className="rounded-xl bg-[#f8fbfa] p-5">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Data curah hujan pertama
                                            </p>

                                            <p className="mt-2 text-lg font-bold text-[#26718b]">
                                                Bulan terkering
                                            </p>

                                            <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                                Bulan dengan jumlah curah hujan
                                                paling sedikit dalam setahun.
                                            </p>
                                        </div>

                                        <div className="rounded-xl bg-[#f8fbfa] p-5">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Data curah hujan kedua
                                            </p>

                                            <p className="mt-2 text-lg font-bold text-[#26718b]">
                                                Curah hujan tahunan
                                            </p>

                                            <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                                Jumlah keseluruhan curah hujan
                                                selama satu tahun.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <div className="border-t border-[#e5efed]" />

                                {/* KESIMPULAN */}
                                <section className="rounded-2xl border border-[#cfe5df] bg-[#f3f9f8] p-5 sm:p-6">

                                    <div className="flex items-start gap-3">

                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d9f99d] text-xl">
                                            ✓
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold text-[#123b49]">
                                                Mengapa Kedua Data Ini Penting?
                                            </h3>

                                            <p className="mt-3 text-justify leading-8 text-gray-700">
                                                Data suhu dan curah hujan
                                                dikombinasikan untuk menentukan
                                                kode iklim akhir suatu wilayah.
                                                Oleh karena itu, penting untuk
                                                membaca angka, satuan, dan nama
                                                bulan dengan teliti agar
                                                klasifikasi iklim yang diperoleh
                                                sesuai dengan karakteristik
                                                wilayah tersebut.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </article>

                        {/* RINGKASAN */}
                        <section className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">

                            <div className="flex items-start gap-3">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d9f99d] text-xl">
                                    ☷
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-[#123b49]">
                                        Ringkasan Modul
                                    </h3>

                                    <p className="mt-1 text-gray-600">
                                        Ingat kembali dua unsur utama dalam
                                        klasifikasi iklim Köppen.
                                    </p>
                                </div>
                            </div>

                            <ul className="mt-5 space-y-3">
                                {[
                                    'Suhu udara dianalisis melalui suhu rata-rata bulan terdingin dan bulan terpanas.',
                                    'Curah hujan dianalisis melalui curah hujan bulan terkering dan total curah hujan tahunan.',
                                    'Suhu bulan terdingin di atas 18°C sepanjang tahun merupakan ciri penting kelompok iklim tropis (A).',
                                    'Curah hujan bulan terkering di bawah 60 mm dapat menunjukkan adanya periode kering yang jelas.',
                                    'Kedua unsur tersebut perlu dibaca secara teliti untuk membantu menentukan kode iklim suatu wilayah.',
                                ].map((point, index) => (
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

                        {/* SELESAIKAN MODUL */}
                        <div className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-5 shadow-sm sm:p-6">

                            <CompleteModuleButton moduleNumber={2} />

                        </div>

                        {/* NAVIGASI MODUL */}
                        <div className="mt-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                            <Link
                                href={route('student.modul1')}
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