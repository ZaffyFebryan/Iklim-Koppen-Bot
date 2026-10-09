import { Head, Link } from "@inertiajs/react";
import StudentSidebar from "@/Components/StudentSidebar";

export default function Scores({ attempt }) {
    const score = attempt?.score ?? 0;

    return (
        <>
            <Head title="Hasil Skor | IklimKöppenBot" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                <StudentSidebar />

                <div className="min-h-screen md:ml-64">
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="mx-auto max-w-[1200px] px-6 py-7 sm:px-10">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                Evaluasi Pembelajaran
                            </p>

                            <h1 className="mt-2 text-3xl font-bold">
                                Hasil Skor
                            </h1>

                            <p className="mt-2 text-gray-500">
                                Lihat hasil pengerjaan tantanganmu.
                            </p>
                        </div>
                    </header>

                    <main className="mx-auto max-w-[1700px] px-6 py-8 sm:px-10">
                        {!attempt ? (
                            <div className="rounded-3xl border border-[#d4e4e1] bg-white p-10 text-center shadow-sm">
                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#e8f8f1] text-4xl">
                                    📝
                                </div>

                                <h2 className="mt-5 text-2xl font-bold">
                                    Belum Ada Nilai
                                </h2>

                                <p className="mx-auto mt-2 max-w-md text-gray-500">
                                    Kamu belum mengerjakan Tantangan Iklim
                                    Köppen. Kerjakan tantangan terlebih dahulu
                                    untuk mendapatkan nilai.
                                </p>

                                <Link
                                    href={route("student.challenge")}
                                    className="mt-6 inline-flex rounded-xl bg-[#087b68] px-6 py-3 font-semibold text-white transition hover:bg-[#076957]"
                                >
                                    Mulai Tantangan →
                                </Link>
                            </div>
                        ) : (
                            <>
                                <section className="overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-sm">
                                    <div className="bg-gradient-to-r from-[#07384b] to-[#087b70] px-8 py-10 text-center text-white">
                                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-teal-100">
                                            Nilai Tantanganmu
                                        </p>

                                        <div className="mt-4 text-7xl font-bold">
                                            {score}
                                        </div>

                                        <p className="mt-2 text-teal-100">
                                            dari 100
                                        </p>
                                    </div>

                                    <div className="grid gap-4 p-6 sm:grid-cols-3 sm:p-8">
                                        <div className="rounded-2xl bg-[#f3f9f8] p-5 text-center">
                                            <p className="text-sm text-gray-500">
                                                Jawaban Benar
                                            </p>

                                            <p className="mt-2 text-3xl font-bold text-[#087b68]">
                                                {attempt.correct_answers}
                                            </p>
                                        </div>

                                        <div className="rounded-2xl bg-[#f3f9f8] p-5 text-center">
                                            <p className="text-sm text-gray-500">
                                                Jumlah Soal
                                            </p>

                                            <p className="mt-2 text-3xl font-bold text-[#123b49]">
                                                {attempt.total_questions}
                                            </p>
                                        </div>

                                        <div className="rounded-2xl bg-[#f3f9f8] p-5 text-center">
                                            <p className="text-sm text-gray-500">
                                                Persentase
                                            </p>

                                            <p className="mt-2 text-3xl font-bold text-[#087b68]">
                                                {score}%
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section className="mt-6 rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm">
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                        <div>
                                            <h2 className="font-bold text-[#123b49]">
                                                Status Pengerjaan
                                            </h2>

                                            <p className="mt-1 text-sm text-gray-500">
                                                Tantangan telah berhasil
                                                dikumpulkan.
                                            </p>
                                        </div>

                                        <div className="rounded-full bg-[#e1f5ed] px-4 py-2 text-sm font-semibold text-[#087b68]">
                                            ✓ Selesai
                                        </div>
                                    </div>

                                    {attempt.submitted_at && (
                                        <p className="mt-4 border-t border-[#e5eeec] pt-4 text-sm text-gray-500">
                                            Dikumpulkan pada:{" "}
                                            <span className="font-medium text-[#123b49]">
                                                {attempt.submitted_at}
                                            </span>
                                        </p>
                                    )}
                                </section>

                                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                    <Link
                                        href={route("student.dashboard")}
                                        className="rounded-xl border border-[#c8dcda] bg-white px-6 py-3 text-center font-semibold text-[#123b49] transition hover:bg-[#f3f9f8]"
                                    >
                                        ← Kembali ke Beranda
                                    </Link>

                                    <Link
                                        href={route("student.material")}
                                        className="rounded-xl bg-[#d9f99d] px-6 py-3 text-center font-semibold text-[#123b49] transition hover:bg-[#c7ef7e]"
                                    >
                                        Pelajari Materi
                                    </Link>
                                </div>
                            </>
                        )}
                    </main>
                </div>
            </div>
        </>
    );
}