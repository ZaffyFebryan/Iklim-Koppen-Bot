import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import AdminSidebar from "@/Components/AdminSidebar";

export default function Dashboard() {
    const { auth } = usePage().props;
    const user = auth?.user;

    return (
        <>
            <Head title="Dashboard Admin" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                {/* Sidebar */}
                <AdminSidebar />

                {/* Main Content */}
                <main className="min-h-screen md:ml-64">
                    {/* Header */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="flex min-h-[155px] items-center justify-between gap-6 px-6 py-6 sm:px-10">
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087b68]">
                                    Panel Administrator
                                </p>

                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#123b49] sm:text-4xl">
                                    Dashboard Admin
                                </h1>

                                <p className="mt-1 max-w-2xl text-base text-slate-500">
                                    Kelola pengguna, materi, soal tantangan,
                                    dan nilai siswa Iklim Köppen.
                                </p>
                            </div>
                        </div>
                    </header>

                    {/* Content */}
                    <section className="px-6 py-8 sm:px-10">
                        {/* Welcome */}
                        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-7 text-white shadow-sm">
                            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-teal-100">
                                        Selamat datang
                                    </p>

                                    <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                        Halo, {user?.name || "Admin"} 👋
                                    </h2>

                                    <p className="mt-2 max-w-2xl text-sm leading-6 text-teal-50">
                                        Pantau dan kelola seluruh sistem
                                        pembelajaran IklimKöppenBot dari
                                        panel administrator.
                                    </p>
                                </div>

                                <div className="hidden text-6xl opacity-90 md:block">
                                    🌍
                                </div>
                            </div>
                        </div>

                        {/* Statistik */}
                        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                            {/* Siswa */}
                            <Link
                                href={route("admin.students.index")}
                                className="group rounded-2xl border border-[#d7e5e3] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-500">
                                            Siswa
                                        </p>

                                        <h3 className="mt-2 text-2xl font-bold text-[#123b49]">
                                            Data Siswa
                                        </h3>
                                    </div>

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl">
                                        👨‍🎓
                                    </div>
                                </div>

                                <p className="mt-4 text-sm text-slate-500">
                                    Kelola akun dan data siswa.
                                </p>

                                <div className="mt-5 text-sm font-bold text-[#087b68] group-hover:underline">
                                    Kelola siswa →
                                </div>
                            </Link>

                            {/* Guru */}
                            <Link
                                href={route("admin.teachers.index")}
                                className="group rounded-2xl border border-[#d7e5e3] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-500">
                                            Guru
                                        </p>

                                        <h3 className="mt-2 text-2xl font-bold text-[#123b49]">
                                            Data Guru
                                        </h3>
                                    </div>

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl">
                                        👨‍🏫
                                    </div>
                                </div>

                                <p className="mt-4 text-sm text-slate-500">
                                    Kelola akun dan data guru.
                                </p>

                                <div className="mt-5 text-sm font-bold text-[#087b68] group-hover:underline">
                                    Kelola guru →
                                </div>
                            </Link>

                            {/* Materi */}
                            <Link
                                href={route("admin.materials.index")}
                                className="group rounded-2xl border border-[#d7e5e3] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-500">
                                            Pembelajaran
                                        </p>

                                        <h3 className="mt-2 text-2xl font-bold text-[#123b49]">
                                            Materi
                                        </h3>
                                    </div>

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl">
                                        📚
                                    </div>
                                </div>

                                <p className="mt-4 text-sm text-slate-500">
                                    Kelola materi pembelajaran Köppen.
                                </p>

                                <div className="mt-5 text-sm font-bold text-[#087b68] group-hover:underline">
                                    Kelola materi →
                                </div>
                            </Link>

                            {/* Nilai */}
                            <Link
                                href={route("admin.grades.index")}
                                className="group rounded-2xl border border-[#d7e5e3] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-500">
                                            Evaluasi
                                        </p>

                                        <h3 className="mt-2 text-2xl font-bold text-[#123b49]">
                                            Nilai Siswa
                                        </h3>
                                    </div>

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-100 text-2xl">
                                        📊
                                    </div>
                                </div>

                                <p className="mt-4 text-sm text-slate-500">
                                    Lihat hasil tantangan siswa.
                                </p>

                                <div className="mt-5 text-sm font-bold text-[#087b68] group-hover:underline">
                                    Lihat nilai →
                                </div>
                            </Link>
                        </div>

                        {/* Management */}
                        <div className="mt-8">
                            <div className="mb-4">
                                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#087b68]">
                                    Manajemen Sistem
                                </p>

                                <h2 className="mt-1 text-2xl font-bold text-[#123b49]">
                                    Kelola Pembelajaran
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    Akses cepat ke fitur administrasi
                                    IklimKöppenBot.
                                </p>
                            </div>

                            <div className="grid gap-5 md:grid-cols-2">
                                {/* Soal Tantangan */}
                                <Link
                                    href={route("admin.challenges.index")}
                                    className="group rounded-2xl border border-[#d7e5e3] bg-white p-6 shadow-sm transition hover:border-[#087b68] hover:shadow-md"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e8f7f3] text-2xl">
                                            📝
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold text-[#123b49]">
                                                Soal Tantangan
                                            </h3>

                                            <p className="mt-1 text-sm text-slate-500">
                                                Tambah, edit, dan hapus soal
                                                tantangan siswa.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-5 text-sm font-bold text-[#087b68] group-hover:underline">
                                        Kelola soal →
                                    </div>
                                </Link>

                                {/* Nilai Siswa */}
                                <Link
                                    href={route("admin.grades.index")}
                                    className="group rounded-2xl border border-[#d7e5e3] bg-white p-6 shadow-sm transition hover:border-[#087b68] hover:shadow-md"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f0f9d8] text-2xl">
                                            📊
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold text-[#123b49]">
                                                Nilai Siswa
                                            </h3>

                                            <p className="mt-1 text-sm text-slate-500">
                                                Pantau hasil dan skor tantangan
                                                seluruh siswa.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-5 text-sm font-bold text-[#087b68] group-hover:underline">
                                        Lihat nilai →
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="mt-8 rounded-3xl border border-[#d7e5e3] bg-white p-6 shadow-sm sm:p-7">
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#087b68]">
                                        Aksi Cepat
                                    </p>

                                    <h2 className="mt-1 text-xl font-bold text-[#123b49]">
                                        Kelola sistem dengan cepat
                                    </h2>
                                </div>

                                <span className="text-2xl">
                                    ⚡
                                </span>
                            </div>

                            <div className="mt-5 flex flex-wrap gap-3">
                                <Link
                                    href={route("admin.students.index")}
                                    className="rounded-xl bg-[#123b49] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0d2e39]"
                                >
                                    👨‍🎓 Kelola Siswa
                                </Link>

                                <Link
                                    href={route("admin.teachers.index")}
                                    className="rounded-xl border border-[#cfe0dd] bg-white px-5 py-3 text-sm font-bold text-[#123b49] transition hover:bg-[#f3f9f8]"
                                >
                                    👨‍🏫 Kelola Guru
                                </Link>

                                <Link
                                    href={route("admin.materials.create")}
                                    className="rounded-xl border border-[#cfe0dd] bg-white px-5 py-3 text-sm font-bold text-[#123b49] transition hover:bg-[#f3f9f8]"
                                >
                                    ➕ Tambah Materi
                                </Link>

                                <Link
                                    href={route("admin.challenges.create")}
                                    className="rounded-xl border border-[#cfe0dd] bg-white px-5 py-3 text-sm font-bold text-[#123b49] transition hover:bg-[#f3f9f8]"
                                >
                                    📝 Tambah Soal
                                </Link>
                            </div>
                        </div>

                        {/* Footer Info */}
                        <div className="mt-6 flex flex-col gap-2 rounded-2xl border border-[#d7e5e3] bg-white px-6 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                            <p>
                                IklimKöppenBot · Panel Administrator
                            </p>

                            <p className="font-medium text-[#087b68]">
                                Sistem Pembelajaran Iklim Köppen 🌍
                            </p>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}