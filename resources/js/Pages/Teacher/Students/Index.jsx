import React from "react";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import TeacherSidebar from "@/Components/TeacherSidebar";

export default function Index({ students = [] }) {
    const { auth, flash } = usePage().props;
    const user = auth?.user;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
    });

    // TAMBAH SISWA
    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("teacher.students.store"), {
            onSuccess: () => reset(),
        });
    };

    // HAPUS SISWA
    const handleDelete = (student) => {
        const confirmed = window.confirm(
            `Yakin ingin menghapus akun ${student.name} (${student.email})?`
        );

        if (!confirmed) return;

        router.delete(route("teacher.students.destroy", student.id));
    };

    return (
        <>
            <Head title="Data Siswa - GeoBot" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                {/* SIDEBAR DARI COMPONENT BERSAMA */}
                <TeacherSidebar />

                {/* KONTEN UTAMA */}
                <main className="min-h-screen min-w-0 lg:ml-72">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                        {/* HEADER */}
                        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm font-medium text-[#087b68]">
                                    Panel Pengajar
                                </p>

                                <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#123b49] sm:text-3xl">
                                    Data Siswa
                                </h2>

                                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
                                    Kelola akun siswa dan lihat daftar siswa
                                    yang terdaftar di GeoBot.
                                </p>
                            </div>

                            <div className="flex items-center gap-3 rounded-2xl border border-[#d4e4e1] bg-white px-4 py-3 shadow-sm">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9f99d] font-bold text-[#123b49]">
                                    {(user?.name ?? "G")
                                        .charAt(0)
                                        .toUpperCase()}
                                </div>

                                <div className="min-w-0">
                                    <p className="max-w-[180px] truncate text-sm font-semibold text-[#123b49]">
                                        {user?.name ?? "Guru"}
                                    </p>

                                    <p className="text-xs text-slate-500">
                                        Panel pengelolaan siswa
                                    </p>
                                </div>
                            </div>
                        </header>

                        {/* PESAN SUKSES */}
                        {flash?.success && (
                            <div
                                role="alert"
                                className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
                            >
                                {flash.success}
                            </div>
                        )}

                        {/* FORM TAMBAH SISWA */}
                        <section className="mb-8 rounded-2xl border border-[#d4e4e1] bg-white p-5 shadow-sm sm:p-7">
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-[#123b49]">
                                    Tambah Akun Siswa
                                </h3>

                                <p className="mt-1 text-sm text-slate-500">
                                    Isi informasi berikut untuk membuat akun
                                    siswa baru.
                                </p>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="grid grid-cols-1 gap-5 md:grid-cols-2"
                            >
                                {/* NAMA */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Nama Lengkap
                                    </label>

                                    <input
                                        id="name"
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        placeholder="Masukkan nama siswa"
                                        autoComplete="name"
                                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                                    />

                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* EMAIL */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Email
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        placeholder="contoh@email.com"
                                        autoComplete="email"
                                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                                    />

                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                {/* PASSWORD */}
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Password
                                    </label>

                                    <input
                                        id="password"
                                        type="password"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        placeholder="Minimal 8 karakter"
                                        autoComplete="new-password"
                                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                                    />

                                    {errors.password && (
                                        <p className="mt-1 text-sm text-red-600">
                                            {errors.password}
                                        </p>
                                    )}
                                </div>

                                {/* TOMBOL TAMBAH */}
                                <div className="flex items-end">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full rounded-xl bg-[#087b68] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#066657] disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
                                    >
                                        {processing
                                            ? "Menyimpan..."
                                            : "Tambah Siswa"}
                                    </button>
                                </div>
                            </form>
                        </section>

                        {/* TABEL DATA SISWA */}
                        <section className="overflow-hidden rounded-2xl border border-[#d4e4e1] bg-white shadow-sm">
                            <div className="flex flex-col gap-2 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                                <div>
                                    <h3 className="text-lg font-bold text-[#123b49]">
                                        Daftar Siswa
                                    </h3>

                                    <p className="mt-1 text-sm text-slate-500">
                                        Daftar akun siswa yang terdaftar di
                                        GeoBot.
                                    </p>
                                </div>

                                <span className="w-fit rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700">
                                    {students.length} siswa
                                </span>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[720px] text-left text-sm">
                                    <thead className="bg-[#f7fbfa] text-xs uppercase tracking-wide text-slate-500">
                                        <tr>
                                            <th className="px-6 py-4">No.</th>
                                            <th className="px-6 py-4">
                                                Nama Siswa
                                            </th>
                                            <th className="px-6 py-4">Email</th>
                                            <th className="px-6 py-4">
                                                Tanggal Bergabung
                                            </th>
                                            <th className="px-6 py-4">
                                                Status
                                            </th>
                                            <th className="px-6 py-4 text-center">
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-slate-100">
                                        {students.length > 0 ? (
                                            students.map((student, index) => (
                                                <tr
                                                    key={student.id}
                                                    className="transition hover:bg-[#f8fcfb]"
                                                >
                                                    <td className="px-6 py-4 text-slate-500">
                                                        {index + 1}
                                                    </td>

                                                    <td className="px-6 py-4 font-semibold text-[#123b49]">
                                                        {student.name}
                                                    </td>

                                                    <td className="px-6 py-4 text-slate-600">
                                                        {student.email}
                                                    </td>

                                                    <td className="px-6 py-4 text-slate-600">
                                                        {student.created_at
                                                            ? new Date(
                                                                  student.created_at
                                                              ).toLocaleDateString(
                                                                  "id-ID",
                                                                  {
                                                                      day: "numeric",
                                                                      month: "long",
                                                                      year: "numeric",
                                                                  }
                                                              )
                                                            : "-"}
                                                    </td>

                                                    <td className="px-6 py-4">
                                                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                                            Aktif
                                                        </span>
                                                    </td>

                                                    {/* TOMBOL HAPUS */}
                                                    <td className="px-6 py-4 text-center">
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                handleDelete(
                                                                    student
                                                                )
                                                            }
                                                            className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                                                        >
                                                            Hapus
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan="6"
                                                    className="px-6 py-12 text-center"
                                                >
                                                    <div className="mx-auto flex max-w-sm flex-col items-center">
                                                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-xl">
                                                            👥
                                                        </div>

                                                        <p className="font-semibold text-slate-700">
                                                            Belum ada data siswa
                                                        </p>

                                                        <p className="mt-1 text-sm text-slate-500">
                                                            Tambahkan akun siswa
                                                            melalui formulir di
                                                            atas.
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* FOOTER */}
                        <footer className="mt-8 rounded-2xl border border-[#d4e4e1] bg-white/70 px-5 py-4">
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