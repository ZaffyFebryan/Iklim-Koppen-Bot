import { Head, Link, useForm } from "@inertiajs/react";
import AdminSidebar from "@/Components/AdminSidebar";

export default function Create({ nextNumber }) {
    const { data, setData, post, processing, errors } = useForm({
        number: nextNumber,
        question: "",
        option_a: "",
        option_b: "",
        option_c: "",
        option_d: "",
        option_e: "",
        correct_answer: "",
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.challenges.store"), {
            forceFormData: true,
        });
    };

    return (
        <>
            <Head title="Tambah Soal Tantangan" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                <AdminSidebar />

                <main className="min-h-screen lg:ml-72">
                    {/* HEADER */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="mx-auto max-w-[1100px] px-6 py-6 sm:px-10">
                            <Link
                                href={route("admin.challenges.index")}
                                className="text-sm font-semibold text-[#087b68] hover:underline"
                            >
                                ← Kembali ke Soal Tantangan
                            </Link>

                            <h1 className="mt-3 text-2xl font-bold sm:text-3xl">
                                Tambah Soal Tantangan
                            </h1>

                            <p className="mt-1 text-sm text-gray-500">
                                Tambahkan soal latihan baru untuk siswa.
                            </p>
                        </div>
                    </header>

                    {/* FORM */}
                    <div className="mx-auto max-w-[1100px] px-6 py-8 sm:px-10">
                        <form onSubmit={submit}>
                            <div className="rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8">
                                {/* NOMOR */}
                                <div className="max-w-xs">
                                    <label className="text-sm font-bold">
                                        Nomor Soal
                                    </label>

                                    <input
                                        type="number"
                                        min="1"
                                        value={data.number}
                                        onChange={(e) =>
                                            setData(
                                                "number",
                                                e.target.value
                                            )
                                        }
                                        className="mt-2 w-full rounded-xl border border-[#c8dcda] px-4 py-3 outline-none focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/10"
                                    />

                                    {errors.number && (
                                        <p className="mt-1 text-xs text-red-500">
                                            {errors.number}
                                        </p>
                                    )}
                                </div>

                                {/* PERTANYAAN */}
                                <div className="mt-6">
                                    <label className="text-sm font-bold">
                                        Pertanyaan
                                    </label>

                                    <textarea
                                        rows={5}
                                        value={data.question}
                                        onChange={(e) =>
                                            setData(
                                                "question",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Tulis pertanyaan..."
                                        className="mt-2 w-full rounded-xl border border-[#c8dcda] px-4 py-3 text-sm outline-none focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/10"
                                    />

                                    {errors.question && (
                                        <p className="mt-1 text-xs text-red-500">
                                            {errors.question}
                                        </p>
                                    )}
                                </div>

                                {/* PILIHAN */}
                                <div className="mt-8">
                                    <h2 className="text-lg font-bold">
                                        Pilihan Jawaban
                                    </h2>

                                    <div className="mt-4 space-y-4">
                                        {[
                                            ["A", "option_a"],
                                            ["B", "option_b"],
                                            ["C", "option_c"],
                                            ["D", "option_d"],
                                            ["E", "option_e"],
                                        ].map(([label, field]) => (
                                            <div key={field}>
                                                <label className="text-sm font-bold">
                                                    Pilihan {label}
                                                    {label === "E" && (
                                                        <span className="ml-2 font-normal text-gray-400">
                                                            (opsional)
                                                        </span>
                                                    )}
                                                </label>

                                                <input
                                                    type="text"
                                                    value={data[field]}
                                                    onChange={(e) =>
                                                        setData(
                                                            field,
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder={`Jawaban ${label}`}
                                                    className="mt-2 w-full rounded-xl border border-[#c8dcda] px-4 py-3 text-sm outline-none focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/10"
                                                />

                                                {errors[field] && (
                                                    <p className="mt-1 text-xs text-red-500">
                                                        {errors[field]}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* JAWABAN BENAR */}
                                <div className="mt-8">
                                    <label className="text-sm font-bold">
                                        Jawaban Benar
                                    </label>

                                    <select
                                        value={data.correct_answer}
                                        onChange={(e) =>
                                            setData(
                                                "correct_answer",
                                                e.target.value
                                            )
                                        }
                                        className="mt-2 w-full rounded-xl border border-[#c8dcda] bg-white px-4 py-3 text-sm outline-none focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/10"
                                    >
                                        <option value="">
                                            Pilih jawaban benar
                                        </option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                        <option value="E">E</option>
                                    </select>

                                    {errors.correct_answer && (
                                        <p className="mt-1 text-xs text-red-500">
                                            {errors.correct_answer}
                                        </p>
                                    )}
                                </div>

                                {/* GAMBAR */}
                                <div className="mt-8">
                                    <label className="text-sm font-bold">
                                        Gambar Soal
                                    </label>

                                    <p className="mt-1 text-xs text-gray-500">
                                        Opsional. JPG, JPEG, PNG, atau WEBP.
                                        Maksimal 2 MB.
                                    </p>

                                    <input
                                        type="file"
                                        accept="image/jpeg,image/png,image/webp"
                                        onChange={(e) =>
                                            setData(
                                                "image",
                                                e.target.files[0]
                                            )
                                        }
                                        className="mt-3 block w-full rounded-xl border border-[#c8dcda] bg-[#f8fbfa] px-4 py-3 text-sm"
                                    />

                                    {errors.image && (
                                        <p className="mt-1 text-xs text-red-500">
                                            {errors.image}
                                        </p>
                                    )}
                                </div>

                                {/* BUTTON */}
                                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                                    <Link
                                        href={route(
                                            "admin.challenges.index"
                                        )}
                                        className="rounded-xl border border-[#c8dcda] bg-white px-6 py-3 text-center text-sm font-bold text-[#087b68] hover:bg-[#f3f9f8]"
                                    >
                                        Batal
                                    </Link>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="rounded-xl bg-[#087b68] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#066455] disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {processing
                                            ? "Menyimpan..."
                                            : "Simpan Soal"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}