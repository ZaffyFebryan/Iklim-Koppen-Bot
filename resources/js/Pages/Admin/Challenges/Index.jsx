import { Head, Link, router, usePage } from "@inertiajs/react";
import AdminSidebar from "@/Components/AdminSidebar";

export default function Index({ questions = [] }) {
    const { flash } = usePage().props;

    const handleDelete = (id) => {
        if (!confirm("Yakin ingin menghapus soal ini?")) {
            return;
        }

        router.delete(route("admin.challenges.destroy", id));
    };

    return (
        <>
            <Head title="Soal Tantangan" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                <AdminSidebar />

                <main className="min-h-screen lg:ml-72">
                    {/* HEADER */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="mx-auto max-w-[1500px] px-6 py-6 sm:px-10">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                Panel Admin
                            </p>

                            <div className="mt-1 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                                <div>
                                    <h1 className="text-2xl font-bold sm:text-3xl">
                                        Soal Tantangan
                                    </h1>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Kelola soal latihan yang dikerjakan
                                        siswa.
                                    </p>
                                </div>

                                <Link
                                    href={route("admin.challenges.create")}
                                    className="inline-flex items-center justify-center rounded-xl bg-[#087b68] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#066455]"
                                >
                                    + Tambah Soal
                                </Link>
                            </div>
                        </div>
                    </header>

                    {/* CONTENT */}
                    <div className="mx-auto max-w-[1500px] px-6 py-8 sm:px-10">
                        {flash?.success && (
                            <div className="mb-6 rounded-xl border border-[#bfe5d7] bg-[#e9f7f1] px-5 py-4 text-sm font-semibold text-[#16805f]">
                                {flash.success}
                            </div>
                        )}

                        {/* SUMMARY */}
                        <div className="mb-7 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm">
                                <p className="text-sm font-medium text-gray-500">
                                    Total Soal
                                </p>

                                <p className="mt-2 text-3xl font-bold text-[#123b49]">
                                    {questions.length}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm">
                                <p className="text-sm font-medium text-gray-500">
                                    Status
                                </p>

                                <p className="mt-2 text-lg font-bold text-[#087b68]">
                                    Aktif untuk Tantangan
                                </p>
                            </div>
                        </div>

                        {/* TABLE */}
                        <section className="overflow-hidden rounded-2xl border border-[#d4e4e1] bg-white shadow-sm">
                            <div className="border-b border-[#e5efed] px-6 py-5">
                                <h2 className="text-lg font-bold">
                                    Daftar Soal
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Soal yang tampil di halaman Tantangan
                                    siswa.
                                </p>
                            </div>

                            {questions.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[900px]">
                                        <thead>
                                            <tr className="border-b border-[#e5efed] bg-[#f8fbfa] text-left">
                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                                                    No
                                                </th>

                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                                                    Soal
                                                </th>

                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                                                    Gambar
                                                </th>

                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                                                    Jawaban
                                                </th>

                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {questions.map((question) => (
                                                <tr
                                                    key={question.id}
                                                    className="border-b border-[#edf3f1] last:border-0 hover:bg-[#f8fbfa]"
                                                >
                                                    <td className="px-6 py-5">
                                                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e9f5f1] text-sm font-bold text-[#087b68]">
                                                            {
                                                                question.number
                                                            }
                                                        </span>
                                                    </td>

                                                    <td className="max-w-[500px] px-6 py-5">
                                                        <p className="line-clamp-3 text-sm font-semibold text-[#123b49]">
                                                            {
                                                                question.question
                                                            }
                                                        </p>
                                                    </td>

                                                    <td className="px-6 py-5">
                                                        {question.image ? (
                                                            <img
                                                                src={question.image}
                                                                alt={`Soal ${question.number}`}
                                                                className="h-16 w-24 rounded-lg object-cover"
                                                            />
                                                        ) : (
                                                            <span className="text-sm text-gray-400">
                                                                Tidak ada
                                                            </span>
                                                        )}
                                                    </td>

                                                    <td className="px-6 py-5">
                                                        <span className="inline-flex rounded-full bg-[#d9f99d] px-3 py-1 text-xs font-bold text-[#123b49]">
                                                            {
                                                                question.correct_answer
                                                            }
                                                        </span>
                                                    </td>

                                                    <td className="px-6 py-5">
                                                        <div className="flex gap-2">
                                                            <Link
                                                                href={route(
                                                                    "admin.challenges.edit",
                                                                    question.id
                                                                )}
                                                                className="rounded-lg bg-[#087b68] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#066455]"
                                                            >
                                                                Edit
                                                            </Link>

                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    handleDelete(
                                                                        question.id
                                                                    )
                                                                }
                                                                className="rounded-lg bg-red-50 px-4 py-2 text-xs font-bold text-red-600 transition hover:bg-red-100"
                                                            >
                                                                Hapus
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="px-6 py-16 text-center">
                                    <div className="text-5xl">📝</div>

                                    <h3 className="mt-4 text-lg font-bold">
                                        Belum ada soal
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Silakan tambahkan soal tantangan
                                        pertama.
                                    </p>

                                    <Link
                                        href={route(
                                            "admin.challenges.create"
                                        )}
                                        className="mt-5 inline-flex rounded-xl bg-[#087b68] px-5 py-3 text-sm font-bold text-white"
                                    >
                                        + Tambah Soal
                                    </Link>
                                </div>
                            )}
                        </section>
                    </div>
                </main>
            </div>
        </>
    );
}