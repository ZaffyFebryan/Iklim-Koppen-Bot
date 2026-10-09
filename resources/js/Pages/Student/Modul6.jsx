import { Head, Link } from "@inertiajs/react";
import StudentSidebar from "@/Components/StudentSidebar";
import CompleteModuleButton from "@/Components/CompleteModuleButton";

export default function Modul6() {
    const climateImpacts = [
        {
            code: "A",
            type: "Tropis",
            icon: "🌴",
            color: "bg-emerald-50 border-emerald-200",
            badge: "bg-emerald-100 text-emerald-800",
            impacts: [
                "Cocok untuk pertanian sepanjang tahun, seperti padi dan kelapa sawit.",
                "Memiliki hutan hujan yang lebat.",
                "Kelembapan udara tinggi.",
            ],
        },
        {
            code: "B",
            type: "Kering",
            icon: "🌵",
            color: "bg-amber-50 border-amber-200",
            badge: "bg-amber-100 text-amber-800",
            impacts: [
                "Pertanian terbatas dan biasanya memerlukan irigasi khusus.",
                "Penduduk sering melakukan peternakan atau hidup nomaden.",
            ],
        },
        {
            code: "C",
            type: "Sedang",
            icon: "🍇",
            color: "bg-sky-50 border-sky-200",
            badge: "bg-sky-100 text-sky-800",
            impacts: [
                "Cocok untuk pertanian musiman.",
                "Contoh tanaman: gandum dan anggur di wilayah Mediterania.",
            ],
        },
        {
            code: "D",
            type: "Kontinental",
            icon: "❄️",
            color: "bg-indigo-50 border-indigo-200",
            badge: "bg-indigo-100 text-indigo-800",
            impacts: [
                "Memiliki musim tanam yang terbatas.",
                "Memerlukan persiapan khusus untuk menghadapi musim dingin ekstrem.",
            ],
        },
        {
            code: "E",
            type: "Kutub",
            icon: "🧊",
            color: "bg-cyan-50 border-cyan-200",
            badge: "bg-cyan-100 text-cyan-800",
            impacts: [
                "Kondisi iklim menyulitkan kegiatan pertanian.",
                "Penduduk biasanya bergantung pada perikanan atau berburu.",
            ],
        },
    ];

    return (
        <>
            <Head title="Modul 6: Dampak Iklim terhadap Kehidupan" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                {/* SIDEBAR */}
                <StudentSidebar />

                {/* AREA KANAN SIDEBAR */}
                <div className="min-h-screen md:ml-64">
                    {/* HEADER */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="flex min-h-[155px] items-center justify-between gap-6 px-6 py-6 sm:px-10">
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087b68]">
                                    Media Pembelajaran Kelas X
                                </p>

                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#123b49] sm:text-4xl">
                                    Modul 6: Dampak Iklim terhadap Kehidupan
                                </h1>

                                <p className="mt-1 text-base text-slate-500">
                                    Mengenal pengaruh tipe iklim terhadap
                                    kehidupan dan aktivitas manusia.
                                </p>
                            </div>

                            <Link
                                href={route("student.material")}
                                className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#c8dcda] bg-white px-5 py-3 text-sm font-semibold text-[#087b68] transition hover:border-[#087b68] hover:bg-[#f3f9f8]"
                            >
                                ← Kembali
                            </Link>
                        </div>
                    </header>

                    {/* MAIN CONTENT */}
                    <main className="min-h-screen px-4 py-8 sm:px-7 md:px-10">
                        <div className="mx-auto max-w-[1400px]">
                            {/* BREADCRUMB */}
                            <div className="mb-7 flex items-center gap-3 text-sm">
                                <span className="text-slate-500">
                                    Materi Köppen
                                </span>

                                <span className="text-slate-400">/</span>

                                <span className="font-semibold text-[#123b49]">
                                    Modul 6
                                </span>
                            </div>

                            {/* HERO MODUL */}
                            <section className="mb-7 overflow-hidden rounded-[28px] bg-gradient-to-r from-[#07384b] to-[#087b70] px-7 py-8 text-white shadow-sm sm:px-10 sm:py-10">
                                <div className="max-w-4xl">
                                    <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-teal-50">
                                        Modul Pembelajaran 06
                                    </div>

                                    <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                                        Dampak Iklim terhadap Kehidupan
                                    </h2>

                                    <p className="mt-4 max-w-3xl text-base leading-7 text-teal-50 sm:text-lg">
                                        Memahami bagaimana tipe iklim
                                        memengaruhi kegiatan pertanian,
                                        lingkungan, dan kehidupan penduduk di
                                        berbagai wilayah.
                                    </p>

                                    <div className="mt-7 flex flex-wrap gap-3">
                                        <span className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium">
                                            🌴 Tropis
                                        </span>

                                        <span className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium">
                                            🌵 Kering
                                        </span>

                                        <span className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium">
                                            🌤️ Sedang
                                        </span>

                                        <span className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium">
                                            ❄️ Kontinental
                                        </span>

                                        <span className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium">
                                            🧊 Kutub
                                        </span>
                                    </div>
                                </div>
                            </section>

                            {/* INTRO */}
                            <section className="mb-7 rounded-2xl border border-teal-100 bg-white p-5 shadow-sm sm:p-6">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl">
                                        🌍
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-[#123b49]">
                                            Iklim memengaruhi kehidupan sehari-hari
                                        </h3>

                                        <p className="mt-1 text-sm leading-6 text-slate-600">
                                            Tipe iklim suatu wilayah berpengaruh
                                            besar terhadap kegiatan penduduk,
                                            terutama dalam pertanian,
                                            pemanfaatan lingkungan, dan cara
                                            memenuhi kebutuhan hidup.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* CLIMATE CARDS */}
                            <section>
                                <div className="mb-5">
                                    <h3 className="text-xl font-bold text-[#123b49]">
                                        Dampak setiap tipe iklim
                                    </h3>

                                    <p className="mt-1 text-sm text-slate-500">
                                        Perhatikan ciri dan dampak kehidupan
                                        dari masing-masing kelompok iklim.
                                    </p>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                    {climateImpacts.map((climate) => (
                                        <article
                                            key={climate.code}
                                            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                                        >
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

                            {/* INDONESIA HIGHLIGHT */}
                            <section className="mt-8 overflow-hidden rounded-2xl border border-lime-200 bg-lime-50 shadow-sm">
                                <div className="p-5 sm:p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                                            🇮🇩
                                        </div>

                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                                                Contoh di Indonesia
                                            </p>

                                            <h3 className="mt-1 text-xl font-bold text-[#123b49]">
                                                Mengapa Indonesia subur?
                                            </h3>

                                            <p className="mt-2 text-sm leading-6 text-slate-700">
                                                Sebagian besar wilayah Indonesia
                                                masuk tipe iklim A (tropis).
                                                Hal ini menjadi salah satu
                                                alasan mengapa Indonesia subur
                                                dan cocok untuk kegiatan
                                                pertanian sepanjang tahun.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* SUMMARY */}
                            <section className="mt-8 rounded-2xl bg-[#123b49] p-5 text-white shadow-sm sm:p-6">
                                <h3 className="flex items-center gap-2 text-lg font-bold">
                                    <span>📌</span>
                                    Ringkasan Modul 6
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-teal-50">
                                    Setiap tipe iklim memiliki dampak yang
                                    berbeda terhadap kehidupan penduduk. Iklim
                                    tropis mendukung pertanian sepanjang tahun,
                                    sedangkan iklim kering, kontinental, dan
                                    kutub memiliki keterbatasan atau kebutuhan
                                    khusus dalam kegiatan sehari-hari.
                                </p>
                            </section>

                            {/* SELESAIKAN MODUL */}
                            <div className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-5 shadow-sm sm:p-6">

                                <CompleteModuleButton moduleNumber={6} />

                            </div>

                            {/* NAVIGATION */}
                            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <Link
                                    href={route("student.modul5")}
                                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#123b49] transition hover:bg-slate-50"
                                >
                                    ← Modul Sebelumnya
                                </Link>

                                <Link
                                    href={route("student.material")}
                                    className="inline-flex items-center justify-center rounded-xl bg-[#087b68] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#066657]"
                                >
                                    Kembali ke Daftar Materi
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}