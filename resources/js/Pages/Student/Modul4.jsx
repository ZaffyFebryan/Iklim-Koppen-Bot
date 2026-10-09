import { Head, Link } from "@inertiajs/react";
import StudentSidebar from "@/Components/StudentSidebar";
import CompleteModuleButton from "@/Components/CompleteModuleButton";

export default function Modul4() {
    const comparisons = [
        {
            title: "Am vs Aw",
            subtitle: "Iklim tropis dengan perbedaan pola curah hujan",
            first: {
                code: "Am",
                name: "Tropis Monsun",
                description:
                    "Total curah hujan setahun tetap tinggi karena musim hujannya sangat basah, dipengaruhi efek angin muson.",
                color: "bg-teal-50 border-teal-200",
                badge: "bg-teal-100 text-teal-800",
            },
            second: {
                code: "Aw",
                name: "Tropis Sabana",
                description:
                    "Total curah hujan setahun tidak cukup tinggi. Musim kering terasa lebih jelas dan berlangsung lebih panjang.",
                color: "bg-amber-50 border-amber-200",
                badge: "bg-amber-100 text-amber-800",
            },
            note: "Keduanya memiliki curah hujan bulan terkering di bawah 60 mm. Perbedaannya terletak pada total curah hujan tahunan dan karakter musim kering.",
        },
        {
            title: "Cs vs Cw",
            subtitle: "Iklim sedang dengan musim kering pada waktu berbeda",
            first: {
                code: "Cs",
                name: "Musim kering pada musim panas",
                description:
                    "Periode kering terjadi pada musim panas.",
                color: "bg-orange-50 border-orange-200",
                badge: "bg-orange-100 text-orange-800",
            },
            second: {
                code: "Cw",
                name: "Musim kering pada musim dingin",
                description:
                    "Periode kering terjadi pada musim dingin.",
                color: "bg-sky-50 border-sky-200",
                badge: "bg-sky-100 text-sky-800",
            },
            note: "Kunci membedakannya adalah kapan musim kering terjadi: musim panas untuk Cs dan musim dingin untuk Cw.",
        },
        {
            title: "BW vs BS",
            subtitle: "Iklim kering dengan tingkat kekeringan berbeda",
            first: {
                code: "BW",
                name: "Iklim Gurun",
                description:
                    "Sangat kering dan dikenal sebagai iklim gurun.",
                color: "bg-rose-50 border-rose-200",
                badge: "bg-rose-100 text-rose-800",
            },
            second: {
                code: "BS",
                name: "Iklim Stepa",
                description:
                    "Kering sedang atau semi-kering. Kondisinya masih memungkinkan rumput tumbuh.",
                color: "bg-lime-50 border-lime-200",
                badge: "bg-lime-100 text-lime-800",
            },
            note: "Keduanya termasuk iklim kering. BW menunjukkan kondisi sangat kering, sedangkan BS merupakan kondisi kering sedang.",
        },
    ];

    return (
        <>
            <Head title="Modul 4 - Perbedaan Tipe Iklim yang Mirip" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">

                {/* SIDEBAR */}
                <StudentSidebar />

                {/* AREA UTAMA */}
                <div className="min-h-screen md:ml-64">

                    {/* TOP HEADER */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="flex items-center justify-between gap-6 px-6 py-6 sm:px-10">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#16805f]">
                                    Media Pembelajaran Kelas X
                                </p>

                                <h1 className="mt-1 text-3xl font-bold tracking-tight text-[#123b49]">
                                    Modul 4: Perbedaan Tipe Iklim yang Mirip
                                </h1>

                                <p className="mt-1 text-base text-gray-500">
                                    Mengenal perbedaan tipe iklim yang memiliki
                                    karakteristik serupa.
                                </p>
                            </div>

                            <Link
                                href={route("student.material")}
                                className="hidden shrink-0 items-center gap-2 rounded-xl border border-[#c8dcda] bg-white px-5 py-3 text-sm font-semibold text-[#087b68] transition hover:border-[#087b68] hover:bg-[#f3f9f8] sm:inline-flex"
                            >
                                ← Kembali
                            </Link>
                        </div>
                    </header>

                    {/* MOBILE BACK BUTTON */}
                    <div className="border-b border-[#d7e5e3] bg-white px-6 pb-5 sm:hidden">
                        <Link
                            href={route("student.material")}
                            className="inline-flex items-center gap-2 rounded-xl border border-[#c8dcda] px-4 py-2.5 text-sm font-semibold text-[#087b68]"
                        >
                            ← Kembali
                        </Link>
                    </div>

                    {/* CONTENT */}
                    <div className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10">

                        {/* BREADCRUMB */}
                        <div className="mb-7 flex items-center gap-3 text-sm">
                            <Link
                                href={route("student.material")}
                                className="text-gray-500 transition hover:text-[#087b68]"
                            >
                                Materi Köppen
                            </Link>

                            <span className="text-gray-400">/</span>

                            <span className="font-medium text-[#123b49]">
                                Modul 4
                            </span>
                        </div>

                        {/* HERO MODUL */}
                        <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#07384b] via-[#08635f] to-[#087b70] px-8 py-10 text-white shadow-sm sm:px-12 sm:py-11">

                            {/* Lingkaran dekoratif */}
                            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border border-white/10" />

                            <div className="absolute -right-20 -top-10 h-72 w-72 rounded-full border border-white/10" />

                            <div className="relative z-10 max-w-4xl">

                                {/* LABEL */}
                                <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold tracking-wide">
                                    MODUL PEMBELAJARAN 04
                                </div>

                                {/* JUDUL */}
                                <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
                                    Perbedaan Tipe Iklim yang Mirip
                                </h2>

                                {/* DESKRIPSI */}
                                <p className="mt-4 max-w-3xl text-base leading-7 text-teal-50 sm:text-lg">
                                    Memahami perbedaan beberapa tipe iklim
                                    Köppen yang memiliki karakteristik serupa
                                    berdasarkan suhu dan curah hujan.
                                </p>

                                {/* KATEGORI */}
                                <div className="mt-7 flex flex-wrap gap-3">

                                    <span className="rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium">
                                        🌧️ Am vs Aw
                                    </span>

                                    <span className="rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium">
                                        ☀️ Cs vs Cw
                                    </span>

                                    <span className="rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium">
                                        🌵 BW vs BS
                                    </span>

                                </div>
                            </div>
                        </section>

                        {/* ISI MODUL */}
                        <main className="mx-auto mt-8 max-w-7xl">

                            {/* INTRO */}
                            <div className="mb-6 rounded-2xl border border-teal-100 bg-white p-5 shadow-sm sm:p-6">
                                <div className="flex items-start gap-3">

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl">
                                        💡
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-[#123b49]">
                                            Yuk, pahami bedanya!
                                        </h3>

                                        <p className="mt-1 text-sm leading-6 text-slate-600">
                                            Beberapa kode iklim Köppen terlihat
                                            mirip. Perhatikan ciri pembeda utama
                                            setiap pasangan kode berikut.
                                        </p>
                                    </div>

                                </div>
                            </div>

                            {/* COMPARISON CARDS */}
                            <div className="space-y-6">

                                {comparisons.map((item, index) => (
                                    <section
                                        key={item.title}
                                        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                                    >

                                        {/* CARD HEADER */}
                                        <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
                                            <div className="flex items-center gap-3">

                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e7f4f1] font-bold text-[#087b68]">
                                                    0{index + 1}
                                                </div>

                                                <div>
                                                    <h3 className="text-xl font-bold text-[#123b49]">
                                                        {item.title}
                                                    </h3>

                                                    <p className="mt-1 text-sm text-slate-500">
                                                        {item.subtitle}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>

                                        {/* TWO CLIMATE TYPES */}
                                        <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">

                                            {[item.first, item.second].map(
                                                (climate) => (
                                                    <div
                                                        key={climate.code}
                                                        className={`rounded-2xl border p-5 ${climate.color}`}
                                                    >

                                                        <span
                                                            className={`inline-flex rounded-lg px-3 py-1 text-sm font-bold ${climate.badge}`}
                                                        >
                                                            {climate.code}
                                                        </span>

                                                        <h4 className="mt-3 text-lg font-bold text-[#123b49]">
                                                            {climate.name}
                                                        </h4>

                                                        <p className="mt-2 text-sm leading-6 text-slate-700">
                                                            {climate.description}
                                                        </p>

                                                    </div>
                                                )
                                            )}

                                        </div>

                                        {/* KEY DIFFERENCE */}
                                        <div className="mx-5 mb-5 rounded-xl bg-[#f3f9f8] p-4 sm:mx-6 sm:mb-6">

                                            <p className="text-xs font-bold uppercase tracking-wide text-[#087b68]">
                                                Kunci Perbedaan
                                            </p>

                                            <p className="mt-1 text-sm leading-6 text-slate-700">
                                                {item.note}
                                            </p>

                                        </div>

                                    </section>
                                ))}

                            </div>

                            {/* SUMMARY */}
                            <section className="mt-7 rounded-2xl bg-[#123b49] p-5 text-white shadow-sm sm:p-6">

                                <h3 className="flex items-center gap-2 text-lg font-bold">
                                    <span>📌</span>
                                    Ringkasan Modul 4
                                </h3>

                                <div className="mt-4 space-y-3 text-sm leading-6 text-teal-50">

                                    <p>
                                        <strong className="text-lime-200">
                                            Am dan Aw:
                                        </strong>{" "}
                                        bandingkan total hujan tahunan serta
                                        karakter musim kering.
                                    </p>

                                    <p>
                                        <strong className="text-lime-200">
                                            Cs dan Cw:
                                        </strong>{" "}
                                        perhatikan apakah musim kering terjadi
                                        pada musim panas atau musim dingin.
                                    </p>

                                    <p>
                                        <strong className="text-lime-200">
                                            BW dan BS:
                                        </strong>{" "}
                                        bedakan tingkat kekeringannya, yaitu
                                        gurun yang sangat kering dan stepa yang
                                        semi-kering.
                                    </p>

                                </div>
                            </section>

                        {/* SELESAIKAN MODUL */}
                        <div className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-5 shadow-sm sm:p-6">

                            <CompleteModuleButton moduleNumber={4} />

                        </div>

                            {/* NAVIGATION */}
                            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">

                                <Link
                                    href={route("student.modul3")}
                                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#123b49] transition hover:bg-slate-50"
                                >
                                    ← Modul Sebelumnya
                                </Link>

                                <Link
                                    href={route("student.modul5")}
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