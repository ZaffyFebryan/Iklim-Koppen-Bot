import { Head, Link } from "@inertiajs/react";

import StudentSidebar from "@/Components/StudentSidebar";
import CompleteModuleButton from "@/Components/CompleteModuleButton";

export default function Modul1() {
    return (
        <>
            <Head title="Modul 1: Pengertian Klasifikasi Iklim Köppen | IklimKöppenBot" />

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
                                    Modul 1: Pengertian Klasifikasi Iklim Köppen
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Mengenal konsep dasar sistem klasifikasi iklim Köppen.
                                </p>
                            </div>

                            <Link
                                href={route("student.material")}
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
                                href={route("student.material")}
                                className="transition hover:text-[#087b68]"
                            >
                                Materi Köppen
                            </Link>

                            <span>/</span>

                            <span className="font-medium text-[#123b49]">
                                Modul 1
                            </span>

                        </nav>


                        {/* HERO MODUL */}
                        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-7 text-white shadow-sm sm:p-10">

                            <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full border border-white/10" />

                            <div className="absolute -right-2 -top-8 h-40 w-40 rounded-full border border-white/10" />

                            <div className="relative">

                                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-teal-50">
                                    Modul Pembelajaran 01
                                </span>

                                <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                                    Pengertian Klasifikasi Iklim Köppen
                                </h1>

                                <p className="mt-4 max-w-2xl leading-relaxed text-teal-50">
                                    Memahami sejarah, dasar pengelompokan, dan
                                    kode huruf dalam sistem klasifikasi iklim Köppen.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3 text-sm">

                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        📘 Materi Geografi
                                    </span>

                                    <span className="rounded-lg bg-white/10 px-3 py-2">
                                        ⏱️ Estimasi 10 menit
                                    </span>

                                </div>

                            </div>
                        </section>


                        {/* ISI MATERI */}
                        <article className="mt-7 overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">

                            {/* JUDUL ARTIKEL */}
                            <div className="border-b border-[#e5efed] px-6 py-6 sm:px-10">

                                <div className="flex items-start gap-4">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e1f5ed] text-2xl text-[#087b68]">
                                        ▤
                                    </div>

                                    <div>

                                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#16805f]">
                                            Materi 1.1
                                        </p>

                                        <h2 className="mt-1 text-xl font-bold text-[#123b49] sm:text-2xl">
                                            Apa Itu Klasifikasi Iklim Köppen?
                                        </h2>

                                    </div>

                                </div>

                            </div>


                            {/* ISI TEKS */}
                            <div className="space-y-6 px-6 py-7 sm:px-10 sm:py-9">

                                {/* PARAGRAF PEMBUKA */}
                                <p className="text-justify text-base leading-8 text-gray-700">
                                    Klasifikasi iklim Köppen dikembangkan oleh
                                    <strong className="font-semibold text-[#123b49]">
                                        {" "}Wladimir Köppen
                                    </strong>,
                                    seorang ahli iklim, geograf, dan botanis Jerman
                                    kelahiran Saint Petersburg, Rusia (1846–1940).
                                    Sistem ini pertama kali diperkenalkan sekitar
                                    tahun 1884, kemudian disempurnakan pada 1918
                                    dan 1936. Belakangan, sistem ini juga
                                    dikembangkan lebih lanjut oleh Rudolph Geiger,
                                    sehingga sering disebut juga klasifikasi iklim
                                    Köppen-Geiger.
                                </p>


                                {/* PETA KLASIFIKASI IKLIM KÖPPEN-GEIGER */}
                                <figure className="overflow-hidden rounded-2xl border border-[#d4e4e1] bg-[#f8fbfa]">

                                    <div className="bg-white p-3 sm:p-5">

                                        <img
                                            src="/image/peta-klasifikasi-koppen.jpeg"
                                            alt="Peta klasifikasi iklim Köppen-Geiger dunia"
                                            className="h-auto w-full rounded-xl object-contain"
                                        />

                                    </div>

                                    <figcaption className="border-t border-[#e5efed] px-5 py-4 text-center text-sm leading-relaxed text-gray-500 sm:px-6">
                                        Peta persebaran klasifikasi iklim
                                        Köppen-Geiger di dunia. Setiap warna
                                        menunjukkan tipe iklim yang berbeda
                                        berdasarkan karakteristik suhu dan
                                        curah hujan.
                                    </figcaption>

                                </figure>


                                {/* TAHUKAH KAMU */}
                                <div className="rounded-2xl border-l-4 border-[#087b68] bg-[#f3f9f8] p-5 sm:p-6">

                                    <div className="flex items-start gap-3">

                                        <span className="text-2xl">
                                            💡
                                        </span>

                                        <div>

                                            <h3 className="font-bold text-[#123b49]">
                                                Tahukah Kamu?
                                            </h3>

                                            <p className="mt-2 leading-relaxed text-gray-600">
                                                Sistem Köppen-Geiger menggunakan
                                                data suhu dan curah hujan untuk
                                                menggambarkan karakteristik iklim
                                                berbagai wilayah di dunia.
                                            </p>

                                        </div>

                                    </div>

                                </div>


                                {/* PENJELASAN DASAR */}
                                <p className="text-justify text-base leading-8 text-gray-700">
                                    Berbeda dari klasifikasi iklim Junghuhn yang
                                    mengutamakan ketinggian tempat, Köppen
                                    mengklasifikasikan iklim berdasarkan suhu
                                    udara dan curah hujan rata-rata bulanan serta
                                    tahunan, dengan mempertimbangkan pola
                                    vegetasi sebagai indikator. Sistem ini
                                    menggunakan kode huruf: huruf pertama
                                    menunjukkan kelompok iklim utama, huruf
                                    kedua menandakan pola curah hujan musiman,
                                    dan huruf ketiga (pada beberapa tipe)
                                    menunjukkan karakteristik suhu.
                                </p>


                                {/* KODE KLASIFIKASI */}
                                <section className="rounded-2xl border border-[#d4e4e1] p-5 sm:p-6">

                                    <h3 className="text-lg font-bold text-[#123b49]">
                                        Cara Membaca Kode Iklim Köppen
                                    </h3>

                                    <p className="mt-2 leading-relaxed text-gray-600">
                                        Kode iklim Köppen tersusun dari huruf
                                        yang menunjukkan karakteristik iklim.
                                    </p>


                                    <div className="mt-5 grid gap-3 sm:grid-cols-3">

                                        {/* HURUF PERTAMA */}
                                        <div className="rounded-xl bg-[#e1f5ed] p-4">

                                            <div className="text-3xl font-bold text-[#087b68]">
                                                A
                                            </div>

                                            <h4 className="mt-2 font-semibold text-[#123b49]">
                                                Huruf Pertama
                                            </h4>

                                            <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                                Menunjukkan kelompok iklim utama.
                                            </p>

                                        </div>


                                        {/* HURUF KEDUA */}
                                        <div className="rounded-xl bg-[#eef7fb] p-4">

                                            <div className="text-3xl font-bold text-[#26718b]">
                                                f
                                            </div>

                                            <h4 className="mt-2 font-semibold text-[#123b49]">
                                                Huruf Kedua
                                            </h4>

                                            <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                                Menunjukkan pola curah hujan musiman.
                                            </p>

                                        </div>


                                        {/* HURUF KETIGA */}
                                        <div className="rounded-xl bg-[#f5f1fc] p-4">

                                            <div className="text-3xl font-bold text-[#7955a5]">
                                                a
                                            </div>

                                            <h4 className="mt-2 font-semibold text-[#123b49]">
                                                Huruf Ketiga
                                            </h4>

                                            <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                                Pada tipe tertentu menunjukkan
                                                karakteristik suhu.
                                            </p>

                                        </div>

                                    </div>


                                    {/* CONTOH KODE */}
                                    <div className="mt-4 rounded-xl bg-[#f8fbfa] p-4">

                                        <p className="text-sm font-medium text-gray-500">
                                            Contoh kode iklim
                                        </p>

                                        <p className="mt-2 text-3xl font-bold tracking-widest text-[#087b68]">
                                            Af
                                        </p>

                                        <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                            Kode ini termasuk kelompok iklim A,
                                            dengan pola curah hujan yang
                                            ditunjukkan oleh huruf kedua.
                                        </p>

                                    </div>

                                </section>


                                {/* LIMA KELOMPOK */}
                                <p className="text-justify text-base leading-8 text-gray-700">
                                    Köppen membagi iklim dunia menjadi lima
                                    kelompok utama: A (tropis), B (kering),
                                    C (subtropis lembap), D (kontinental), dan
                                    E (kutub).
                                </p>


                                {/* LIMA KELOMPOK IKLIM */}
                                <section>

                                    <h3 className="text-xl font-bold text-[#123b49]">
                                        Lima Kelompok Utama Iklim Köppen
                                    </h3>

                                    <p className="mt-2 leading-relaxed text-gray-600">
                                        Setiap kelompok memiliki karakteristik
                                        suhu dan curah hujan yang berbeda.
                                    </p>


                                    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                                        {[
                                            {
                                                code: "A",
                                                title: "Tropis",
                                                description:
                                                    "Memiliki suhu tinggi sepanjang tahun.",
                                                icon: "🌴",
                                                color: "bg-[#e4f5e8]",
                                            },
                                            {
                                                code: "B",
                                                title: "Kering",
                                                description:
                                                    "Ditandai kondisi kekurangan air atau curah hujan yang rendah.",
                                                icon: "🏜️",
                                                color: "bg-[#fff3d9]",
                                            },
                                            {
                                                code: "C",
                                                title: "Subtropis Lembap",
                                                description:
                                                    "Memiliki kondisi suhu sedang dengan variasi musiman.",
                                                icon: "🌿",
                                                color: "bg-[#e8f4fb]",
                                            },
                                            {
                                                code: "D",
                                                title: "Kontinental",
                                                description:
                                                    "Umumnya memiliki perbedaan suhu musiman yang nyata.",
                                                icon: "🍂",
                                                color: "bg-[#f8eadf]",
                                            },
                                            {
                                                code: "E",
                                                title: "Kutub",
                                                description:
                                                    "Memiliki suhu sangat rendah sepanjang tahun.",
                                                icon: "❄️",
                                                color: "bg-[#e8f0fc]",
                                            },
                                        ].map((climate) => (

                                            <div
                                                key={climate.code}
                                                className="flex items-start gap-4 rounded-xl border border-[#e5efed] p-4 transition hover:border-[#a8d9c9] hover:shadow-sm"
                                            >

                                                <div
                                                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl ${climate.color}`}
                                                >
                                                    {climate.icon}
                                                </div>

                                                <div>

                                                    <p className="text-xs font-bold uppercase tracking-wider text-[#16805f]">
                                                        Kelompok {climate.code}
                                                    </p>

                                                    <h4 className="mt-1 font-semibold text-[#123b49]">
                                                        Iklim {climate.title}
                                                    </h4>

                                                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                                        {climate.description}
                                                    </p>

                                                </div>

                                            </div>

                                        ))}

                                    </div>

                                </section>

                            </div>
                        </article>


                        {/* RINGKASAN */}
                        <section className="mt-7 rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">

                            <div className="flex items-start gap-3">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d9f99d] text-xl">
                                    ✓
                                </div>

                                <div>

                                    <h3 className="text-xl font-bold text-[#123b49]">
                                        Ringkasan Modul
                                    </h3>

                                    <p className="mt-1 text-gray-600">
                                        Hal-hal penting yang perlu kamu ingat:
                                    </p>

                                </div>

                            </div>


                            <ul className="mt-5 space-y-3">

                                {[
                                    "Klasifikasi Köppen dikembangkan oleh Wladimir Köppen dan disempurnakan pada 1918 serta 1936.",
                                    "Sistem Köppen-Geiger menggunakan suhu dan curah hujan sebagai dasar klasifikasi iklim.",
                                    "Kode huruf menunjukkan kelompok iklim, pola curah hujan, dan pada tipe tertentu karakteristik suhu.",
                                    "Terdapat lima kelompok iklim utama, yaitu A, B, C, D, dan E.",
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

                            <CompleteModuleButton moduleNumber={1} />

                        </div>


                        {/* NAVIGASI MODUL */}
                        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                            <Link
                                href={route("student.material")}
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#c8dcda] bg-white px-5 py-3 font-semibold text-[#087b68] transition hover:bg-[#f3f9f8]"
                            >
                                <span>←</span>
                                Daftar Materi
                            </Link>


                            <Link
                                href={route("student.modul2")}
                                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#087b68] px-6 py-3 font-semibold text-white transition hover:bg-[#066455]"
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