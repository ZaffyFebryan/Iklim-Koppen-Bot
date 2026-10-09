import { Head, Link, useForm } from "@inertiajs/react";
import StudentSidebar from "@/Components/StudentSidebar";

export default function Challenge({ questions, attempt }) {
    const { data, setData, post, processing, errors } = useForm({
        answers: {},
    });

    const handleAnswer = (questionId, answer) => {
        setData("answers", {
            ...data.answers,
            [questionId]: answer,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const unanswered = questions.filter(
            (question) => !data.answers[question.id]
        );

        if (unanswered.length > 0) {
            alert(
                `Masih ada ${unanswered.length} soal yang belum dijawab.`
            );
            return;
        }

        const confirmed = window.confirm(
            "Apakah kamu yakin ingin mengumpulkan jawaban? Setelah dikumpulkan, jawaban tidak dapat diubah."
        );

        if (!confirmed) {
            return;
        }

        post(route("student.challenge.submit"));
    };

    return (
        <>
            <Head title="Tantangan | IklimKöppenBot" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                <StudentSidebar />

                <div className="min-h-screen md:ml-64">
                    {/* HEADER */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="mx-auto max-w-[1200px] px-6 py-7 sm:px-10">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                Tantangan Pembelajaran
                            </p>

                            <h1 className="mt-2 text-3xl font-bold">
                                Tantangan Iklim Köppen
                            </h1>

                            <p className="mt-2 max-w-3xl leading-relaxed text-gray-500">
                                Uji pemahamanmu tentang klasifikasi iklim
                                Köppen melalui beberapa pertanyaan pilihan
                                ganda.
                            </p>
                        </div>
                    </header>

                    {/* MAIN */}
                    <main className="mx-auto max-w-[1200px] px-6 py-8 sm:px-10">
                        {attempt ? (
                            /* JIKA SUDAH MENGERJAKAN */
                            <div className="rounded-3xl border border-[#cfe3de] bg-white p-8 text-center shadow-sm">
                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#e1f5ed] text-4xl">
                                    ✓
                                </div>

                                <h2 className="mt-5 text-2xl font-bold">
                                    Tantangan Sudah Dikerjakan
                                </h2>

                                <p className="mx-auto mt-2 max-w-lg text-gray-500">
                                    Kamu sudah mengumpulkan jawaban untuk
                                    tantangan ini. Silakan lihat hasil
                                    nilaimu pada halaman Hasil Skor.
                                </p>

                                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                                    <Link
                                        href={route("student.scores")}
                                        className="rounded-xl bg-[#087b68] px-6 py-3 font-semibold text-white transition hover:bg-[#076957]"
                                    >
                                        Lihat Hasil Skor
                                    </Link>

                                    <Link
                                        href={route("student.dashboard")}
                                        className="rounded-xl border border-[#c8dcda] px-6 py-3 font-semibold text-[#123b49] transition hover:bg-[#f3f9f8]"
                                    >
                                        Kembali ke Beranda
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            /* FORM SOAL */
                            <form onSubmit={handleSubmit}>
                                {/* PETUNJUK */}
                                <div className="mb-6 flex flex-col justify-between gap-4 rounded-2xl border border-[#d4e4e1] bg-white p-5 shadow-sm sm:flex-row sm:items-center">
                                    <div>
                                        <p className="text-sm font-semibold text-[#087b68]">
                                            PETUNJUK PENGERJAAN
                                        </p>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Pilih satu jawaban yang paling
                                            tepat untuk setiap soal.
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-[#e8f8f1] px-4 py-2 text-sm font-semibold text-[#087b68]">
                                        {questions.length} Soal
                                    </div>
                                </div>

                                {/* ERROR */}
                                {errors.challenge && (
                                    <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
                                        {errors.challenge}
                                    </div>
                                )}

                                {/* DAFTAR SOAL */}
                                <div className="space-y-6">
                                    {questions.map((question) => (
                                        <section
                                            key={question.id}
                                            className="rounded-3xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8"
                                        >
                                            <div className="flex gap-4">
                                                {/* NOMOR SOAL */}
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#07384b] font-bold text-white">
                                                    {question.number}
                                                </div>

                                                <div className="flex-1">
                                                    {/* PERTANYAAN */}
                                                    <h2 className="text-base font-semibold leading-relaxed text-[#123b49] sm:text-lg">
                                                        {question.question}
                                                    </h2>

                                                    {/* ================================= */}
                                                    {/* GAMBAR SOAL                      */}
                                                    {/* ================================= */}
                                                    {question.image && (
                                                        <div className="mt-5 overflow-hidden rounded-2xl border border-[#d9e6e3] bg-[#f8fcfb] p-4">
                                                            <img
                                                                src={question.image}
                                                                alt={`Gambar soal nomor ${question.number}`}
                                                                className="mx-auto max-h-[450px] w-auto max-w-full rounded-lg object-contain"
                                                                onError={(e) => {
                                                                    console.error(
                                                                        "Gambar gagal dimuat:",
                                                                        e.currentTarget.src
                                                                    );
                                                                    e.currentTarget.style.display =
                                                                        "none";
                                                                }}
                                                            />
                                                        </div>
                                                    )}

                                                    {/* PILIHAN JAWABAN */}
                                                    <div className="mt-6 space-y-3">
                                                        {Object.entries(
                                                            question.options
                                                        ).map(
                                                            ([
                                                                optionKey,
                                                                optionText,
                                                            ]) => {
                                                                const selected =
                                                                    data.answers[
                                                                        question.id
                                                                    ] ===
                                                                    optionKey;

                                                                return (
                                                                    <label
                                                                        key={
                                                                            optionKey
                                                                        }
                                                                        className={`flex cursor-pointer gap-3 rounded-2xl border p-4 transition ${
                                                                            selected
                                                                                ? "border-[#087b68] bg-[#e8f8f1] ring-2 ring-[#087b68]/10"
                                                                                : "border-[#d9e6e3] hover:border-[#a8d9c9] hover:bg-[#f8fcfb]"
                                                                        }`}
                                                                    >
                                                                        <input
                                                                            type="radio"
                                                                            name={`question-${question.id}`}
                                                                            value={
                                                                                optionKey
                                                                            }
                                                                            checked={
                                                                                selected
                                                                            }
                                                                            onChange={() =>
                                                                                handleAnswer(
                                                                                    question.id,
                                                                                    optionKey
                                                                                )
                                                                            }
                                                                            className="mt-1 h-4 w-4 accent-[#087b68]"
                                                                        />

                                                                        <span className="flex-1 text-sm leading-relaxed text-gray-700">
                                                                            <span className="mr-2 font-bold text-[#087b68]">
                                                                                {
                                                                                    optionKey
                                                                                }
                                                                                .
                                                                            </span>

                                                                            {
                                                                                optionText
                                                                            }
                                                                        </span>
                                                                    </label>
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    ))}
                                </div>

                                {/* TOMBOL SUBMIT */}
                                <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-3xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:flex-row">
                                    <div>
                                        <p className="font-semibold">
                                            Sudah yakin dengan jawabanmu?
                                        </p>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Pastikan semua soal sudah dipilih
                                            sebelum mengumpulkan.
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full rounded-xl bg-[#087b68] px-7 py-3 font-semibold text-white transition hover:bg-[#076957] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                                    >
                                        {processing
                                            ? "Mengirim..."
                                            : "Kumpulkan Jawaban →"}
                                    </button>
                                </div>
                            </form>
                        )}
                    </main>
                </div>
            </div>
        </>
    );
}