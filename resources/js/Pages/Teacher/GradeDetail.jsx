import { Head, Link } from "@inertiajs/react";
import TeacherSidebar from "@/Components/TeacherSidebar";

export default function GradeDetail({ student, attempt }) {
    return (
        <>
            <Head title={`Nilai ${student.name}`} />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                {/* SIDEBAR */}
                <TeacherSidebar />

                {/* MAIN */}
                <main className="min-h-screen lg:ml-72">
                    {/* HEADER */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="mx-auto max-w-[1200px] px-6 py-6 sm:px-10">
                            <Link
                                href={route("teacher.grades.index")}
                                className="text-sm font-semibold text-[#087b68] hover:underline"
                            >
                                ← Kembali ke Nilai Siswa
                            </Link>

                            <h1 className="mt-3 text-2xl font-bold sm:text-3xl">
                                Detail Nilai Siswa
                            </h1>
                        </div>
                    </header>

                    {/* CONTENT */}
                    <div className="mx-auto max-w-[1200px] px-6 py-8 sm:px-10">
                        {/* STUDENT */}
                        <section className="rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-wider text-[#16805f]">
                                Data Siswa
                            </p>

                            <h2 className="mt-2 text-2xl font-bold">
                                {student.name}
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                {student.email}
                            </p>
                        </section>

                        {attempt ? (
                            <>
                                {/* SCORE */}
                                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                                    <div className="rounded-2xl border border-[#d4e4e1] bg-white p-6 text-center shadow-sm">
                                        <p className="text-sm text-gray-500">
                                            Nilai
                                        </p>

                                        <p className="mt-2 text-5xl font-bold text-[#087b68]">
                                            {attempt.score}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#d4e4e1] bg-white p-6 text-center shadow-sm">
                                        <p className="text-sm text-gray-500">
                                            Jawaban Benar
                                        </p>

                                        <p className="mt-2 text-4xl font-bold text-[#123b49]">
                                            {attempt.correct_answers}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#d4e4e1] bg-white p-6 text-center shadow-sm">
                                        <p className="text-sm text-gray-500">
                                            Total Soal
                                        </p>

                                        <p className="mt-2 text-4xl font-bold text-[#123b49]">
                                            {attempt.total_questions}
                                        </p>
                                    </div>
                                </div>

                                {/* INFORMATION */}
                                <section className="mt-6 rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm">
                                    <h3 className="text-lg font-bold">
                                        Informasi Pengerjaan
                                    </h3>

                                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                        <div className="rounded-xl bg-[#f8fbfa] p-4">
                                            <p className="text-xs font-semibold uppercase text-gray-500">
                                                Status
                                            </p>

                                            <p className="mt-1 font-bold text-[#16805f]">
                                                Sudah mengerjakan
                                            </p>
                                        </div>

                                        <div className="rounded-xl bg-[#f8fbfa] p-4">
                                            <p className="text-xs font-semibold uppercase text-gray-500">
                                                Waktu pengerjaan
                                            </p>

                                            <p className="mt-1 font-bold">
                                                {attempt.submitted_at || "-"}
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </>
                        ) : (
                            <section className="mt-6 rounded-2xl border border-[#d4e4e1] bg-white p-10 text-center shadow-sm">
                                <div className="text-5xl">📝</div>

                                <h3 className="mt-4 text-xl font-bold">
                                    Siswa belum mengerjakan tantangan
                                </h3>

                                <p className="mt-2 text-sm text-gray-500">
                                    Nilai akan muncul setelah siswa
                                    menyelesaikan tantangan.
                                </p>
                            </section>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}