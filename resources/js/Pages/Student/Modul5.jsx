import { Head, Link } from "@inertiajs/react";
import StudentSidebar from "@/Components/StudentSidebar";
import CompleteModuleButton from "@/Components/CompleteModuleButton";

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
            <Head title="Modul 5 - Klasifikasi Wilayah Berdasarkan Data" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">

                {/* SIDEBAR */}
                <StudentSidebar />

                {/* AREA UTAMA */}
                <div className="min-h-screen md:ml-64">

                    {/* =====================================================
                        TOP HEADER
                    ====================================================== */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="flex items-center justify-between gap-6 px-6 py-6 sm:px-10">

                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#16805f]">
                                    Media Pembelajaran Kelas X
                                </p>

                                <h1 className="mt-1 text-3xl font-bold tracking-tight text-[#123b49]">
                                    Modul 5: Klasifikasi Wilayah Berdasarkan Data
                                </h1>

                                <p className="mt-1 text-base text-gray-500">
                                    Mengenal cara menentukan klasifikasi iklim
                                    berdasarkan data suhu dan curah hujan.
                                </p>
                            </div>

                            {/* Tombol kembali desktop */}
                            <Link
                                href={route("student.material")}
                                className="hidden shrink-0 items-center gap-2 rounded-xl border border-[#c8dcda] bg-white px-5 py-3 text-sm font-semibold text-[#087b68] transition hover:border-[#087b68] hover:bg-[#f3f9f8] sm:inline-flex"
                            >
                                ← Kembali
                            </Link>
                        </div>
                    </header>

                    {/* =====================================================
                        MOBILE BACK BUTTON
                    ====================================================== */}
                    <div className="border-b border-[#d7e5e3] bg-white px-6 pb-5 sm:hidden">
                        <Link
                            href={route("student.material")}
                            className="inline-flex items-center gap-2 rounded-xl border border-[#c8dcda] px-4 py-2.5 text-sm font-semibold text-[#087b68]"
                        >
                            ← Kembali
                        </Link>
                    </div>

                    {/* =====================================================
                        CONTENT WRAPPER
                    ====================================================== */}
                    <div className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10">

                        {/* =================================================
                            BREADCRUMB
                        ================================================== */}
                        <div className="mb-7 flex items-center gap-3 text-sm">

                            <Link
                                href={route("student.material")}
                                className="text-gray-500 transition hover:text-[#087b68]"
                            >
                                Materi Köppen
                            </Link>

                            <span className="text-gray-400">
                                /
                            </span>

                            <span className="font-medium text-[#123b49]">
                                Modul 5
                            </span>

                        </div>

                        {/* =================================================
                            HERO MODUL
                        ================================================== */}
                        <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#07384b] via-[#08635f] to-[#087b70] px-8 py-10 text-white shadow-sm sm:px-12 sm:py-11">

                            {/* Dekorasi lingkaran */}
                            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border border-white/10" />

                            <div className="absolute -right-20 -top-10 h-72 w-72 rounded-full border border-white/10" />

                            <div className="relative z-10 max-w-4xl">

                                {/* Label */}
                                <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold tracking-wide">
                                    MODUL PEMBELAJARAN 05
                                </div>

                                {/* Judul */}
                                <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
                                    Klasifikasi Wilayah Berdasarkan Data
                                </h2>

                                {/* Deskripsi */}
                                <p className="mt-4 max-w-3xl text-base leading-7 text-teal-50 sm:text-lg">
                                    Berlatih membaca data suhu dan curah hujan
                                    untuk menentukan klasifikasi iklim suatu
                                    wilayah berdasarkan kriteria Köppen.
                                </p>

                                {/* Kategori */}
                                <div className="mt-7 flex flex-wrap gap-3">

                                    <span className="rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium">
                                        🌡️ Data Suhu
                                    </span>

                                    <span className="rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium">
                                        💧 Curah Hujan
                                    </span>

                                    <span className="rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium">
                                        📊 Analisis Data
                                    </span>

                                    <span className="rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium">
                                        🎯 Menentukan Tipe Iklim
                                    </span>

                                </div>
                            </div>
                        </section>

                        {/* =================================================
                            ISI MODUL
                        ================================================== */}
                        <main className="mx-auto mt-8 max-w-7xl">

                            {/* =================================================
                                INTRO
                            ================================================== */}
                            <div className="mb-6 rounded-2xl border border-teal-100 bg-white p-5 shadow-sm sm:p-6">

                                <div className="flex items-start gap-3">

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl">
                                        🧭
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-[#123b49]">
                                            Dari data menjadi kode iklim
                                        </h3>

                                        <p className="mt-1 text-sm leading-6 text-slate-600">
                                            Ikuti langkah-langkah berikut secara
                                            berurutan untuk membantu menentukan
                                            klasifikasi iklim suatu wilayah.
                                        </p>
                                    </div>

                                </div>
                            </div>

                            {/* =================================================
                                STEPS
                            ================================================== */}
                            <section className="mb-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

                                <h3 className="mb-5 text-lg font-bold text-[#123b49]">
                                    Langkah-langkah klasifikasi
                                </h3>

                                <div className="space-y-4">

                                    {steps.map((step, index) => (
                                        <div
                                            key={step.number}
                                            className="flex gap-4"
                                        >

                                            {/* Icon + garis */}
                                            <div className="flex flex-col items-center">

                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e7f4f1] text-xl">
                                                    {step.icon}
                                                </div>

                                                {index !== steps.length - 1 && (
                                                    <div className="mt-2 min-h-8 w-px flex-1 bg-teal-100" />
                                                )}

                                            </div>

                                            {/* Isi langkah */}
                                            <div className="flex-1 pb-5">

                                                <p className="text-xs font-bold tracking-wide text-[#087b68]">
                                                    LANGKAH {step.number}
                                                </p>

                                                <h4 className="mt-1 font-semibold text-[#123b49]">
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
                                CONTOH PENERAPAN
                            ================================================== */}
                            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                                {/* Header contoh */}
                                <div className="bg-[#123b49] px-5 py-5 text-white sm:px-6">

                                    <p className="text-xs font-bold uppercase tracking-wider text-lime-200">
                                        Contoh Penerapan
                                    </p>

                                    <h3 className="mt-1 text-xl font-bold">
                                        Wilayah X
                                    </h3>

                                    <p className="mt-1 text-sm text-teal-100">
                                        Tentukan kode iklim berdasarkan data berikut.
                                    </p>

                                </div>

                                {/* Data */}
                                <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">

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

                                {/* Penjelasan */}
                                <div className="space-y-4 px-5 pb-5 sm:px-6 sm:pb-6">

                                    {/* Langkah 1 */}
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
                                                iklim tropis <strong>A</strong>.
                                            </p>
                                        </div>

                                    </div>

                                    {/* Langkah 2 */}
                                    <div className="flex gap-3">

                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-800">
                                            2
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-[#123b49]">
                                                Tentukan huruf kedua
                                            </h4>

                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                Curah hujan bulan terkering 80
                                                mm, yaitu lebih dari atau sama
                                                dengan 60 mm. Berdasarkan
                                                kriteria contoh ini, huruf
                                                keduanya adalah
                                                <strong> f</strong>.
                                            </p>
                                        </div>

                                    </div>

                                    {/* Hasil */}
                                    <div className="rounded-2xl border border-lime-200 bg-lime-50 p-5 text-center">

                                        <p className="text-sm font-semibold text-lime-900">
                                            Hasil klasifikasi Wilayah X
                                        </p>

                                        <div className="my-2 text-4xl font-extrabold tracking-widest text-[#123b49]">
                                            Af
                                        </div>

                                        <p className="text-sm text-slate-600">
                                            Iklim tropis tanpa musim kering yang
                                            nyata berdasarkan contoh data.
                                        </p>

                                    </div>

                                </div>
                            </section>

                            {/* =================================================
                                CHATBOT CTA
                            ================================================== */}
                            <section className="mt-7 overflow-hidden rounded-2xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-6 text-white shadow-sm sm:p-8">

                                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                                    <div className="max-w-xl">

                                        <div className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-lime-200">
                                            Praktik Mandiri
                                        </div>

                                        <h3 className="text-xl font-bold sm:text-2xl">
                                            Siap mencoba sendiri?
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-teal-50">
                                            Buka menu Chatbot, masukkan data suhu
                                            dan curah hujan wilayah yang ingin
                                            kamu klasifikasikan. GeoBot akan
                                            membantu menentukan kode iklimnya!
                                        </p>

                                    </div>

                                    <Link
                                        href={route("student.dashboard")}
                                        className="inline-flex shrink-0 items-center justify-center rounded-xl bg-lime-200 px-5 py-3 text-sm font-bold text-[#123b49] transition hover:bg-lime-100"
                                    >
                                        Coba di Chatbot →
                                    </Link>

                                </div>
                            </section>

                            {/* SELESAIKAN MODUL */}
                            <div className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-5 shadow-sm sm:p-6">

                                <CompleteModuleButton moduleNumber={5} />

                            </div>

                            {/* =================================================
                                NAVIGATION
                            ================================================== */}
                            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">

                                <Link
                                    href={route("student.modul4")}
                                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#123b49] transition hover:bg-slate-50"
                                >
                                    ← Modul Sebelumnya
                                </Link>

                                <Link
                                    href={route("student.modul6")}
                                    className="inline-flex items-center justify-center rounded-xl bg-[#087b68] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#066657]"
                                >
                                    Modul Selanjutnya →
                                </Link>

                            </div>

                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}