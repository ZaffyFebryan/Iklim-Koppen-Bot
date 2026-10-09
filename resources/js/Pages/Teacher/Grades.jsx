import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";
import TeacherSidebar from "@/Components/TeacherSidebar";

export default function Grades({ students = [], filters = {} }) {
    const [search, setSearch] = useState(filters.search || "");

    const handleSearch = (e) => {
        e.preventDefault();

        router.get(
            route("teacher.grades.index"),
            {
                search,
            },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    const totalStudents = students.length;

    const completedStudents = students.filter(
        (student) => student.has_attempt
    ).length;

    const notCompletedStudents = students.filter(
        (student) => !student.has_attempt
    ).length;

    return (
        <>
            <Head title="Nilai Siswa" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                {/* SIDEBAR */}
                <TeacherSidebar />

                {/* MAIN */}
                <main className="min-h-screen lg:ml-72">
                    {/* HEADER */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="mx-auto max-w-[1500px] px-6 py-6 sm:px-10">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                Panel Guru
                            </p>

                            <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
                                Nilai Siswa
                            </h1>

                            <p className="mt-1 text-sm text-gray-500">
                                Lihat hasil tantangan yang telah dikerjakan
                                siswa.
                            </p>
                        </div>
                    </header>

                    {/* CONTENT */}
                    <div className="mx-auto max-w-[1500px] px-6 py-8 sm:px-10">
                        {/* SUMMARY */}
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {/* TOTAL SISWA */}
                            <div className="rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm">
                                <p className="text-sm font-medium text-gray-500">
                                    Total Siswa
                                </p>

                                <p className="mt-2 text-3xl font-bold text-[#123b49]">
                                    {totalStudents}
                                </p>
                            </div>

                            {/* SUDAH MENGERJAKAN */}
                            <div className="rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm">
                                <p className="text-sm font-medium text-gray-500">
                                    Sudah Mengerjakan
                                </p>

                                <p className="mt-2 text-3xl font-bold text-[#087b68]">
                                    {completedStudents}
                                </p>
                            </div>

                            {/* BELUM MENGERJAKAN */}
                            <div className="rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm">
                                <p className="text-sm font-medium text-gray-500">
                                    Belum Mengerjakan
                                </p>

                                <p className="mt-2 text-3xl font-bold text-orange-500">
                                    {notCompletedStudents}
                                </p>
                            </div>
                        </div>

                        {/* TABLE CARD */}
                        <section className="mt-7 overflow-hidden rounded-2xl border border-[#d4e4e1] bg-white shadow-sm">
                            {/* CARD HEADER */}
                            <div className="border-b border-[#e5efed] p-6">
                                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
                                    <div>
                                        <h2 className="text-xl font-bold">
                                            Daftar Nilai
                                        </h2>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Nilai diperoleh dari hasil Tantangan
                                            siswa.
                                        </p>
                                    </div>

                                    {/* SEARCH */}
                                    <form
                                        onSubmit={handleSearch}
                                        className="flex w-full gap-2 lg:w-auto"
                                    >
                                        <input
                                            type="text"
                                            value={search}
                                            onChange={(e) =>
                                                setSearch(e.target.value)
                                            }
                                            placeholder="Cari nama siswa..."
                                            className="w-full rounded-xl border border-[#c8dcda] px-4 py-3 text-sm outline-none transition focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/10 lg:w-72"
                                        />

                                        <button
                                            type="submit"
                                            className="rounded-xl bg-[#087b68] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#066455]"
                                        >
                                            Cari
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* TABLE */}
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[900px]">
                                    <thead>
                                        <tr className="border-b border-[#e5efed] bg-[#f8fbfa] text-left">
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                                                No
                                            </th>

                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                                                Siswa
                                            </th>

                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                                                Nilai
                                            </th>

                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                                                Benar
                                            </th>

                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                                                Waktu
                                            </th>

                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                                                Status
                                            </th>

                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {students.length > 0 ? (
                                            students.map((student, index) => (
                                                <tr
                                                    key={student.id}
                                                    className="border-b border-[#edf3f1] last:border-0 hover:bg-[#f8fbfa]"
                                                >
                                                    {/* NO */}
                                                    <td className="px-6 py-5 text-sm text-gray-500">
                                                        {index + 1}
                                                    </td>

                                                    {/* SISWA */}
                                                    <td className="px-6 py-5">
                                                        <p className="font-semibold text-[#123b49]">
                                                            {student.name}
                                                        </p>

                                                        <p className="mt-1 text-xs text-gray-500">
                                                            {student.email}
                                                        </p>
                                                    </td>

                                                    {/* NILAI */}
                                                    <td className="px-6 py-5">
                                                        {student.has_attempt ? (
                                                            <span className="text-xl font-bold text-[#087b68]">
                                                                {student.score}
                                                            </span>
                                                        ) : (
                                                            <span className="text-sm text-gray-400">
                                                                —
                                                            </span>
                                                        )}
                                                    </td>

                                                    {/* BENAR */}
                                                    <td className="px-6 py-5 text-sm">
                                                        {student.has_attempt ? (
                                                            <span>
                                                                <strong>
                                                                    {
                                                                        student.correct_answers
                                                                    }
                                                                </strong>{" "}
                                                                /{" "}
                                                                {
                                                                    student.total_questions
                                                                }
                                                            </span>
                                                        ) : (
                                                            "—"
                                                        )}
                                                    </td>

                                                    {/* WAKTU */}
                                                    <td className="px-6 py-5 text-sm text-gray-500">
                                                        {student.submitted_at ||
                                                            "—"}
                                                    </td>

                                                    {/* STATUS */}
                                                    <td className="px-6 py-5">
                                                        {student.has_attempt ? (
                                                            <span className="inline-flex rounded-full bg-[#e3f4ee] px-3 py-1 text-xs font-bold text-[#16805f]">
                                                                Sudah mengerjakan
                                                            </span>
                                                        ) : (
                                                            <span className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
                                                                Belum mengerjakan
                                                            </span>
                                                        )}
                                                    </td>

                                                    {/* AKSI */}
                                                    <td className="px-6 py-5">
                                                        <Link
                                                            href={route(
                                                                "teacher.grades.show",
                                                                student.id
                                                            )}
                                                            className="inline-flex rounded-lg bg-[#087b68] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#066455]"
                                                        >
                                                            Detail
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan="7"
                                                    className="px-6 py-12 text-center"
                                                >
                                                    <div className="text-4xl">
                                                        🔍
                                                    </div>

                                                    <p className="mt-3 font-semibold">
                                                        Data siswa tidak
                                                        ditemukan
                                                    </p>

                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Coba gunakan kata kunci
                                                        pencarian lain.
                                                    </p>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </>
    );
}