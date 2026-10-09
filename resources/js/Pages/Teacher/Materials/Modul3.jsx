import React from "react";
import { Head, Link } from "@inertiajs/react";
import TeacherSidebar from "@/Components/TeacherSidebar";

export default function Modul3() {
    const groups = [
        {
            code: "A",
            title: "Iklim Tropis",
            icon: "🌴",
            color: "bg-[#16805f]",
            labelColor: "text-[#16805f]",
            bg: "from-[#e7f7e9] to-[#f5fbef]",
            description:
                "Iklim tropis dicirikan oleh suhu bulan terdingin yang tetap lebih dari 18°C sepanjang tahun. Wilayah ini tidak mengalami musim dingin.",
            focus:
                "Tekankan bahwa kelompok A terutama dikenali dari kondisi suhu. Perbedaan Af, Am, dan Aw kemudian berkaitan dengan pola curah hujan dan musim kering.",
        },
        {
            code: "B",
            title: "Iklim Kering",
            icon: "🏜️",
            color: "bg-[#b7791f]",
            labelColor: "text-[#a66a18]",
            bg: "from-[#fff0d9] to-[#fff9ed]",
            description:
                "Ciri utama iklim B adalah tingkat penguapan yang lebih besar daripada curah hujan yang turun. Oleh karena itu, wilayah ini cenderung kering atau gersang.",
            focus:
                "Tekankan bahwa kelompok B berhubungan dengan kondisi kering. BW menunjukkan gurun, BS menunjukkan stepa, sedangkan huruf h dan k menunjukkan kondisi panas atau dingin.",
        },
        {
            code: "C",
            title: "Iklim Sedang",
            icon: "🌤️",
            color: "bg-[#3974b8]",
            labelColor: "text-[#3974b8]",
            bg: "from-[#e7f1fc] to-[#f4f8ff]",
            description:
                "Kelompok C memiliki suhu bulan terdingin antara -3°C sampai 18°C dan suhu bulan terpanas di atas 10°C.",
            focus:
                "Bantu siswa membaca kode C secara bertahap. Huruf kedua menjelaskan pola musim kering, sedangkan huruf ketiga menunjukkan karakteristik suhu musim panas.",
        },
        {
            code: "D",
            title: "Iklim Kontinental",
            icon: "❄️",
            color: "bg-[#7654ad]",
            labelColor: "text-[#7654ad]",
            bg: "from-[#eee9fc] to-[#f8f5ff]",
            description:
                "Iklim kontinental dicirikan oleh variasi suhu musiman yang besar dengan curah hujan relatif tidak tinggi. Kelompok ini umumnya ditemukan di wilayah lintang tengah hingga tinggi di belahan bumi utara.",
            focus:
                "Arahkan siswa untuk memperhatikan perbedaan suhu musim panas dan musim dingin. Pola huruf kedua dan ketiga serupa dengan kelompok C.",
        },
        {
            code: "E",
            title: "Iklim Kutub",
            icon: "🧊",
            color: "bg-[#287d9b]",
            labelColor: "text-[#287d9b]",
            bg: "from-[#e3f5fa] to-[#f2fbfd]",
            description:
                "Kelompok iklim E dicirikan oleh suhu bulan terpanas yang tetap di bawah 10°C sepanjang tahun.",
            focus:
                "Jelaskan perbedaan ET dan EF berdasarkan karakteristik lingkungan dan kondisi vegetasinya.",
        },
    ];

    return (
        <>
            <Head title="Modul 3: Kelompok Iklim A, B, C, D, dan E | IklimKöppenBot" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                <TeacherSidebar />

                {/* MAIN CONTENT */}
                <div className="min-h-screen lg:ml-72">
                    {/* HEADER */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-6 py-6 sm:px-10">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                    Pegangan Guru · Media Pembelajaran Kelas X
                                </p>

                                <h2 className="mt-1 text-2xl font-bold text-[#123b49] sm:text-3xl">
                                    Modul 3: Kelompok Iklim Köppen
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Panduan guru dalam menjelaskan karakteristik
                                    kelompok iklim A, B, C, D, dan E.
                                </p>
                            </div>

                            <Link
                                href={route("teacher.materials.index")}
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
                                href={route("teacher.materials.index")}
                                className="transition hover:text-[#087b68]"
                            >
                                Materi Pegangan Guru
                            </Link>

                            <span>/</span>

                            <span className="font-medium text-[#123b49]">
                                Modul 3
                            </span>
                        </nav>

                        {/* HERO */}
                        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-7 text-white shadow-sm sm:p-10">
                            <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full border border-white/10" />
                            <div className="absolute -right-2 -top-8 h-40 w-40 rounded-full border border-white/10" />

                            <div className="relative">
                                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-teal-50">
                                    Modul Pegangan Guru 03
                                </span>

                                <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                                    Kelompok Iklim A, B, C, D, dan E
                                </h1>

                                <p className="mt-4 max-w-2xl leading-relaxed text-teal-50">
                                    Membantu guru menjelaskan lima kelompok
                                    utama iklim Köppen berdasarkan karakteristik
                                    suhu dan curah hujan setiap wilayah.
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
                                        ❄️ Kontinental
                                    </span>

                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        🧊 Kutub
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* FOKUS PENGAJARAN */}
                        <section className="mt-7 rounded-3xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d9f99d] text-2xl">
                                    🎯
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                                        Fokus Pengajaran
                                    </p>

                                    <h2 className="mt-1 text-xl font-bold text-[#123b49] sm:text-2xl">
                                        Mengenalkan lima kelompok utama
                                    </h2>

                                    <p className="mt-2 leading-relaxed text-gray-600">
                                        Pada modul ini, guru dapat membantu siswa
                                        mengenali kelompok A sampai E sebelum
                                        mempelajari kode iklim yang lebih khusus.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                {[
                                    {
                                        number: "01",
                                        title: "Mengenali kelompok A",
                                        text: "Siswa memahami karakteristik utama iklim tropis.",
                                    },
                                    {
                                        number: "02",
                                        title: "Mengenali kelompok B",
                                        text: "Siswa memahami karakteristik iklim kering dan pembagian gurun serta stepa.",
                                    },
                                    {
                                        number: "03",
                                        title: "Mengenali kelompok C dan D",
                                        text: "Siswa memahami karakteristik iklim sedang dan kontinental.",
                                    },
                                    {
                                        number: "04",
                                        title: "Mengenali kelompok E",
                                        text: "Siswa memahami karakteristik iklim kutub serta perbedaan ET dan EF.",
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.number}
                                        className="rounded-2xl bg-[#f8fbfa] p-5"
                                    >
                                        <div className="flex items-start gap-4">
                                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#087b68] text-xs font-bold text-white">
                                                {item.number}
                                            </span>

                                            <div>
                                                <h3 className="font-bold text-[#123b49]">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-2 text-sm leading-6 text-gray-600">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* PENGANTAR */}
                        <section className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e1f5ed] text-2xl">
                                    🌎
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                                        Materi 3.1
                                    </p>

                                    <h2 className="mt-1 text-xl font-bold text-[#123b49] sm:text-2xl">
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

                        {/* KELOMPOK A */}
                        <section className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            <div className="bg-gradient-to-r from-[#e7f7e9] to-[#f5fbef] px-6 py-6 sm:px-8">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16805f] text-2xl font-bold text-white">
                                        A
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-[#16805f]">
                                            Kelompok Iklim A
                                        </p>

                                        <h2 className="text-2xl font-bold text-[#123b49]">
                                            Iklim Tropis
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5 p-6 sm:p-8">
                                <p className="leading-8 text-gray-700">
                                    Iklim tropis dicirikan oleh suhu bulan
                                    terdingin yang tetap lebih dari 18°C
                                    sepanjang tahun. Wilayah ini tidak mengalami
                                    musim dingin. Vegetasi yang dapat ditemukan
                                    antara lain hutan hujan tropis (Af) dan
                                    sabana (Aw).
                                </p>

                                <div className="overflow-x-auto rounded-xl border border-[#d4e4e1]">
                                    <table className="w-full min-w-[650px] border-collapse text-left text-sm">
                                        <thead>
                                            <tr>
                                                <th className="border-b border-[#d4e4e1] bg-[#f3f9f8] px-4 py-3 font-bold">
                                                    Kode
                                                </th>
                                                <th className="border-b border-[#d4e4e1] bg-[#f3f9f8] px-4 py-3 font-bold">
                                                    Kriteria
                                                </th>
                                                <th className="border-b border-[#d4e4e1] bg-[#f3f9f8] px-4 py-3 font-bold">
                                                    Karakteristik
                                                </th>
                                                <th className="border-b border-[#d4e4e1] bg-[#f3f9f8] px-4 py-3 font-bold">
                                                    Contoh Wilayah
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="border-b border-[#e5efed] px-4 py-4 font-bold text-[#087b68]">
                                                    Af
                                                </td>
                                                <td className="border-b border-[#e5efed] px-4 py-4">
                                                    Curah hujan bulan terkering ≥60
                                                    mm.
                                                </td>
                                                <td className="border-b border-[#e5efed] px-4 py-4">
                                                    Iklim hutan hujan tropis dengan
                                                    hujan merata sepanjang tahun.
                                                </td>
                                                <td className="border-b border-[#e5efed] px-4 py-4">
                                                    Kalimantan dan Sumatra bagian
                                                    tengah.
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border-b border-[#e5efed] px-4 py-4 font-bold text-[#087b68]">
                                                    Am
                                                </td>
                                                <td className="border-b border-[#e5efed] px-4 py-4">
                                                    Curah hujan bulan terkering
                                                    &lt;60 mm, dikompensasi curah
                                                    hujan tahunan tinggi.
                                                </td>
                                                <td className="border-b border-[#e5efed] px-4 py-4">
                                                    Musim kering pendek dan
                                                    dipengaruhi angin muson.
                                                </td>
                                                <td className="border-b border-[#e5efed] px-4 py-4">
                                                    Sebagian Jawa dan pesisir
                                                    Sumatra.
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="px-4 py-4 font-bold text-[#087b68]">
                                                    Aw
                                                </td>
                                                <td className="px-4 py-4">
                                                    Curah hujan bulan terkering
                                                    &lt;60 mm dan tidak
                                                    dikompensasi curah hujan
                                                    tahunan.
                                                </td>
                                                <td className="px-4 py-4">
                                                    Iklim sabana tropis dengan
                                                    musim kering jelas dan
                                                    panjang.
                                                </td>
                                                <td className="px-4 py-4">
                                                    Nusa Tenggara dan Jawa Timur.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="rounded-xl border border-[#cfe5df] bg-[#f3f9f8] p-5">
                                    <p className="font-bold text-[#123b49]">
                                        🌿 Catatan untuk Guru
                                    </p>

                                    <p className="mt-2 leading-relaxed text-gray-700">
                                        Kelompok A memiliki suhu bulan
                                        terdingin di atas 18°C. Perbedaan kode
                                        Af, Am, dan Aw terutama berkaitan dengan
                                        kondisi curah hujan dan musim kering.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* KELOMPOK B */}
                        <section className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            <div className="bg-gradient-to-r from-[#fff0d9] to-[#fff9ed] px-6 py-6 sm:px-8">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b7791f] text-2xl font-bold text-white">
                                        B
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-[#a66a18]">
                                            Kelompok Iklim B
                                        </p>

                                        <h2 className="text-2xl font-bold text-[#123b49]">
                                            Iklim Kering / Arid
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5 p-6 sm:p-8">
                                <p className="leading-8 text-gray-700">
                                    Ciri utama iklim B adalah tingkat penguapan
                                    yang lebih besar daripada curah hujan yang
                                    turun. Oleh karena itu, wilayah ini cenderung
                                    kering atau gersang. Kelompok B terbagi
                                    menjadi dua subkelompok utama.
                                </p>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-2xl border border-[#f1dfb9] bg-[#fffaf0] p-5">
                                        <div className="text-3xl">🏜️</div>

                                        <h3 className="mt-3 text-xl font-bold text-[#a66a18]">
                                            BW — Iklim Gurun
                                        </h3>

                                        <p className="mt-2 leading-relaxed text-gray-700">
                                            Iklim gurun atau arid. Kondisinya
                                            sangat kering dengan curah hujan
                                            yang sangat minim.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#eadfc8] bg-[#faf6ed] p-5">
                                        <div className="text-3xl">🌾</div>

                                        <h3 className="mt-3 text-xl font-bold text-[#a66a18]">
                                            BS — Iklim Stepa
                                        </h3>

                                        <p className="mt-2 leading-relaxed text-gray-700">
                                            Iklim stepa atau semi-arid.
                                            Kondisinya kering, tetapi tidak
                                            seekstrem wilayah gurun.
                                        </p>
                                    </div>
                                </div>

                                <h3 className="pt-2 text-lg font-bold text-[#123b49]">
                                    Kode berdasarkan suhu
                                </h3>

                                <p className="leading-relaxed text-gray-700">
                                    Kode BW dan BS dibedakan lagi berdasarkan
                                    kondisi suhu, yaitu panas (h) atau dingin
                                    (k).
                                </p>

                                <div className="overflow-x-auto rounded-xl border border-[#d4e4e1]">
                                    <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                                        <thead>
                                            <tr>
                                                <th className="border-b border-[#d4e4e1] bg-[#f3f9f8] px-4 py-3 font-bold">
                                                    Kode
                                                </th>

                                                <th className="border-b border-[#d4e4e1] bg-[#f3f9f8] px-4 py-3 font-bold">
                                                    Keterangan
                                                </th>

                                                <th className="border-b border-[#d4e4e1] bg-[#f3f9f8] px-4 py-3 font-bold">
                                                    Contoh
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {[
                                                ["BWh", "Gurun panas.", "Sahara."],
                                                ["BSh", "Stepa panas.", "Wilayah stepa panas."],
                                                ["BWk", "Gurun dingin.", "Wilayah gurun dingin."],
                                                ["BSk", "Stepa dingin.", "Wilayah stepa dingin."],
                                            ].map((row, index) => (
                                                <tr key={index}>
                                                    <td className="border-b border-[#e5efed] px-4 py-4 font-bold text-[#a66a18]">
                                                        {row[0]}
                                                    </td>

                                                    <td className="border-b border-[#e5efed] px-4 py-4 text-gray-700">
                                                        {row[1]}
                                                    </td>

                                                    <td className="border-b border-[#e5efed] px-4 py-4 text-gray-700">
                                                        {row[2]}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="rounded-xl border border-[#f1dfb9] bg-[#fffaf0] p-5">
                                    <p className="font-bold text-[#123b49]">
                                        💡 Catatan untuk Guru
                                    </p>

                                    <p className="mt-2 leading-relaxed text-gray-700">
                                        Huruf B menunjukkan kelompok iklim
                                        kering. Huruf W berarti gurun, S berarti
                                        stepa, h berarti panas, dan k berarti
                                        dingin.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* KELOMPOK C */}
                        <section className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            <div className="bg-gradient-to-r from-[#e7f1fc] to-[#f4f8ff] px-6 py-6 sm:px-8">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3974b8] text-2xl font-bold text-white">
                                        C
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-[#3974b8]">
                                            Kelompok Iklim C
                                        </p>

                                        <h2 className="text-2xl font-bold text-[#123b49]">
                                            Iklim Sedang
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5 p-6 sm:p-8">
                                <p className="leading-8 text-gray-700">
                                    Kelompok C memiliki suhu bulan terdingin
                                    antara -3°C sampai 18°C dan suhu bulan
                                    terpanas di atas 10°C. Kode iklim C
                                    menggunakan tiga huruf.
                                </p>

                                <div className="rounded-xl border border-[#cfe5f0] bg-[#f1f9fd] p-5">
                                    <p className="font-bold text-[#123b49]">
                                        👨‍🏫 Cara menjelaskan kode C
                                    </p>

                                    <p className="mt-2 leading-relaxed text-gray-700">
                                        Huruf kedua menjelaskan pola musim
                                        kering, sedangkan huruf ketiga
                                        menunjukkan karakteristik suhu musim
                                        panas.
                                    </p>
                                </div>

                                <h3 className="text-lg font-bold text-[#123b49]">
                                    Huruf kedua: pola curah hujan
                                </h3>

                                <div className="grid gap-3 sm:grid-cols-3">
                                    {[
                                        ["s", "Kering di musim panas."],
                                        ["w", "Kering di musim dingin."],
                                        ["f", "Tanpa musim kering yang signifikan."],
                                    ].map((item) => (
                                        <div
                                            key={item[0]}
                                            className="rounded-xl bg-[#f8fbfa] p-5"
                                        >
                                            <p className="text-2xl font-bold text-[#3974b8]">
                                                {item[0]}
                                            </p>

                                            <p className="mt-2 text-sm leading-6 text-gray-700">
                                                {item[1]}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-lg font-bold text-[#123b49]">
                                    Huruf ketiga: karakteristik musim panas
                                </h3>

                                <div className="grid gap-3 sm:grid-cols-3">
                                    {[
                                        ["a", "Musim panas panas."],
                                        ["b", "Musim panas hangat."],
                                        ["c", "Musim panas sejuk."],
                                    ].map((item) => (
                                        <div
                                            key={item[0]}
                                            className="rounded-xl bg-[#f8fbfa] p-5"
                                        >
                                            <p className="text-2xl font-bold text-[#3974b8]">
                                                {item[0]}
                                            </p>

                                            <p className="mt-2 text-sm leading-6 text-gray-700">
                                                {item[1]}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-lg font-bold text-[#123b49]">
                                    Kombinasi kode iklim C
                                </h3>

                                <div className="overflow-x-auto rounded-xl border border-[#d4e4e1]">
                                    <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                                        <thead>
                                            <tr>
                                                <th className="border-b border-[#d4e4e1] bg-[#f3f9f8] px-4 py-3 font-bold">
                                                    Kode
                                                </th>

                                                <th className="border-b border-[#d4e4e1] bg-[#f3f9f8] px-4 py-3 font-bold">
                                                    Karakteristik
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {[
                                                [
                                                    "Cf",
                                                    "Iklim subtropis lembap tanpa musim kering.",
                                                ],
                                                [
                                                    "Cw",
                                                    "Iklim subtropis lembap dengan musim dingin yang kering.",
                                                ],
                                                [
                                                    "Cs",
                                                    "Iklim mediterania dengan musim panas yang kering.",
                                                ],
                                            ].map((row) => (
                                                <tr key={row[0]}>
                                                    <td className="border-b border-[#e5efed] px-4 py-4 font-bold text-[#3974b8]">
                                                        {row[0]}
                                                    </td>

                                                    <td className="border-b border-[#e5efed] px-4 py-4 text-gray-700">
                                                        {row[1]}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="rounded-xl border border-[#cfe5f0] bg-[#f1f9fd] p-5">
                                    <p className="font-bold text-[#123b49]">
                                        💡 Contoh kode: Csa
                                    </p>

                                    <p className="mt-2 leading-relaxed text-gray-700">
                                        Csa menunjukkan iklim sedang dengan
                                        musim panas yang kering dan musim panas
                                        yang panas. Tipe ini banyak ditemukan di
                                        sekitar Laut Mediterania.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* KELOMPOK D */}
                        <section className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            <div className="bg-gradient-to-r from-[#eee9fc] to-[#f8f5ff] px-6 py-6 sm:px-8">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7654ad] text-2xl font-bold text-white">
                                        D
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-[#7654ad]">
                                            Kelompok Iklim D
                                        </p>

                                        <h2 className="text-2xl font-bold text-[#123b49]">
                                            Iklim Kontinental
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5 p-6 sm:p-8">
                                <p className="leading-8 text-gray-700">
                                    Iklim kontinental dicirikan oleh variasi
                                    suhu musiman yang besar dengan curah hujan
                                    relatif tidak tinggi. Kelompok ini umumnya
                                    ditemukan di wilayah lintang tengah hingga
                                    tinggi di belahan bumi utara, seperti
                                    sebagian Rusia dan Kanada.
                                </p>

                                <p className="leading-8 text-gray-700">
                                    Pola huruf kedua dan ketiga serupa dengan
                                    kelompok C. Namun, kelompok D memiliki
                                    tambahan subtipe khusus, yaitu huruf d yang
                                    menunjukkan musim dingin sangat ekstrem.
                                </p>

                                <div className="overflow-x-auto rounded-xl border border-[#d4e4e1]">
                                    <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                                        <thead>
                                            <tr>
                                                <th className="border-b border-[#d4e4e1] bg-[#f3f9f8] px-4 py-3 font-bold">
                                                    Kode
                                                </th>

                                                <th className="border-b border-[#d4e4e1] bg-[#f3f9f8] px-4 py-3 font-bold">
                                                    Kriteria
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="border-b border-[#e5efed] px-4 py-4 font-bold text-[#7654ad]">
                                                    Df
                                                </td>

                                                <td className="border-b border-[#e5efed] px-4 py-4 text-gray-700">
                                                    Iklim sedang kontinental yang
                                                    lembap.
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border-b border-[#e5efed] px-4 py-4 font-bold text-[#7654ad]">
                                                    Dw
                                                </td>

                                                <td className="border-b border-[#e5efed] px-4 py-4 text-gray-700">
                                                    Iklim sedang kontinental
                                                    dengan musim dingin yang
                                                    kering.
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="px-4 py-4 font-bold text-[#7654ad]">
                                                    d
                                                </td>

                                                <td className="px-4 py-4 text-gray-700">
                                                    Musim dingin yang sangat
                                                    ekstrem; subtipe khusus pada
                                                    kelompok D.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="rounded-xl border border-[#e0d7f2] bg-[#f7f3ff] p-5">
                                    <p className="font-bold text-[#123b49]">
                                        ❄️ Contoh kombinasi kode
                                    </p>

                                    <p className="mt-2 leading-relaxed text-gray-700">
                                        Beberapa kombinasi kode kelompok D
                                        antara lain Dfa, Dwb, dan Dfd. Huruf d
                                        menunjukkan musim dingin yang sangat
                                        ekstrem.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* KELOMPOK E */}
                        <section className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                            <div className="bg-gradient-to-r from-[#e3f5fa] to-[#f2fbfd] px-6 py-6 sm:px-8">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#287d9b] text-2xl font-bold text-white">
                                        E
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-[#287d9b]">
                                            Kelompok Iklim E
                                        </p>

                                        <h2 className="text-2xl font-bold text-[#123b49]">
                                            Iklim Kutub
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5 p-6 sm:p-8">
                                <p className="leading-8 text-gray-700">
                                    Kelompok iklim E dicirikan oleh suhu bulan
                                    terpanas yang tetap di bawah 10°C sepanjang
                                    tahun. Wilayah ini tidak mengalami kondisi
                                    musim panas yang benar-benar hangat.
                                </p>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-2xl border border-[#cfe5f0] bg-[#f1f9fd] p-5">
                                        <div className="text-3xl">🧊</div>

                                        <h3 className="mt-3 text-xl font-bold text-[#287d9b]">
                                            ET — Iklim Tundra
                                        </h3>

                                        <p className="mt-2 leading-relaxed text-gray-700">
                                            Masih terdapat sedikit tumbuhan
                                            seperti lumut dan rumput pada musim
                                            panas yang singkat.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#cfe5f0] bg-[#f1f9fd] p-5">
                                        <div className="text-3xl">❄️</div>

                                        <h3 className="mt-3 text-xl font-bold text-[#287d9b]">
                                            EF — Iklim Daerah Es Abadi
                                        </h3>

                                        <p className="mt-2 leading-relaxed text-gray-700">
                                            Wilayah hampir selalu tertutup es
                                            dan salju serta tidak memiliki
                                            tumbuhan.
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-xl border border-[#cfe5f0] bg-[#f1f9fd] p-5">
                                    <p className="font-bold text-[#123b49]">
                                        👨‍🏫 Catatan untuk Guru
                                    </p>

                                    <p className="mt-2 leading-relaxed text-gray-700">
                                        Tekankan bahwa kelompok E ditentukan
                                        oleh suhu bulan terpanas yang tetap
                                        berada di bawah 10°C. Setelah kelompok
                                        E dikenali, siswa dapat membedakan ET
                                        dan EF berdasarkan karakteristik
                                        lingkungannya.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* STRATEGI MENJELASKAN */}
                        <section className="mt-7 rounded-3xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d9f99d] text-2xl">
                                    🧑‍🏫
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                                        Arahan Pengajaran
                                    </p>

                                    <h2 className="mt-1 text-xl font-bold text-[#123b49] sm:text-2xl">
                                        Urutan menjelaskan kelompok iklim
                                    </h2>

                                    <p className="mt-2 leading-relaxed text-gray-600">
                                        Guru dapat menggunakan langkah berikut
                                        agar siswa tidak langsung menghafalkan
                                        kode, tetapi memahami karakteristik
                                        masing-masing kelompok.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 space-y-3">
                                {[
                                    "Mulai dengan menjelaskan bahwa A, B, C, D, dan E merupakan lima kelompok utama.",
                                    "Gunakan karakteristik suhu untuk membantu siswa membedakan kelompok utama.",
                                    "Setelah kelompok dikenali, lanjutkan dengan melihat pola curah hujan dan karakteristik musim.",
                                    "Perkenalkan kode huruf secara bertahap, terutama pada kelompok A, B, dan C.",
                                    "Gunakan contoh wilayah atau data iklim untuk membantu siswa menghubungkan teori dengan kondisi nyata.",
                                ].map((point, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 rounded-xl bg-[#f8fbfa] p-4"
                                    >
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#087b68] text-xs font-bold text-white">
                                            {index + 1}
                                        </span>

                                        <p className="leading-relaxed text-gray-700">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

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
                                        Poin penting lima kelompok utama iklim
                                        Köppen.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 space-y-3">
                                {groups.map((group) => (
                                    <div
                                        key={group.code}
                                        className="flex items-start gap-4 rounded-xl bg-[#f8fbfa] p-4"
                                    >
                                        <div
                                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${group.color} font-bold text-white`}
                                        >
                                            {group.code}
                                        </div>

                                        <div>
                                            <p className="font-bold text-[#123b49]">
                                                Kelompok {group.code} —{" "}
                                                {group.title}
                                            </p>

                                            <p className="mt-1 leading-relaxed text-gray-600">
                                                {group.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* NAVIGASI */}
                        <div className="mt-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                            <Link
                                href={route("teacher.materials.show", 2)}
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#c8dcda] bg-white px-5 py-3 font-semibold text-[#087b68] transition hover:bg-[#f3f9f8]"
                            >
                                <span>←</span>
                                Modul Sebelumnya
                            </Link>

                            <Link
                                href={route("teacher.materials.show", 4)}
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#c8dcda] bg-white px-5 py-3 font-semibold text-[#087b68] transition hover:bg-[#f3f9f8]"
                            >
                                Modul Berikutnya
                                <span>→</span>
                            </Link>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}