import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AdminSidebar from "@/Components/AdminSidebar";

const sectionTypes = [
    { value: "text", label: "Teks" },
    { value: "highlight", label: "Highlight" },
    { value: "list", label: "Daftar" },
    { value: "climate_group", label: "Kelompok Iklim" },
    { value: "comparison", label: "Perbandingan" },
    { value: "steps", label: "Langkah-langkah" },
    { value: "example", label: "Contoh" },
    { value: "questions", label: "Pertanyaan" },
    { value: "teacher_note", label: "Catatan Guru" },
];

const emptyStudentContent = {
    hero_title: "",
    hero_description: "",
    tags: [],
    sections: [],
    summary: [],
};

const emptyTeacherContent = {
    hero_title: "",
    hero_description: "",
    tags: [],
    focus: [],
    sections: [],
    summary: [],
};

const makeSection = (type = "text") => {
    switch (type) {
        case "highlight":
            return {
                type: "highlight",
                title: "",
                content: "",
            };

        case "list":
            return {
                type: "list",
                title: "",
                items: [""],
            };

        case "climate_group":
            return {
                type: "climate_group",
                code: "",
                title: "",
                icon: "",
                content: "",
                subtypes: [""],
                items: [""],
            };

        case "comparison":
            return {
                type: "comparison",
                title: "",
                subtitle: "",
                left: "",
                right: "",
                note: "",
            };

        case "steps":
            return {
                type: "steps",
                title: "",
                items: [""],
            };

        case "example":
            return {
                type: "example",
                title: "",
                data: {
                    "Data 1": "",
                },
                steps: [""],
                result: "",
            };

        case "questions":
            return {
                type: "questions",
                title: "",
                items: [""],
            };

        case "teacher_note":
            return {
                type: "teacher_note",
                title: "",
                content: "",
            };

        default:
            return {
                type: "text",
                title: "",
                content: "",
                example: "",
            };
    }
};

function FieldError({ message }) {
    if (!message) return null;

    return (
        <p className="mt-1 text-xs font-medium text-red-600">
            {message}
        </p>
    );
}

function TextInput({
    label,
    value,
    onChange,
    placeholder = "",
    textarea = false,
}) {
    return (
        <div>
            <label className="mb-2 block text-sm font-semibold text-[#123b49]">
                {label}
            </label>

            {textarea ? (
                <textarea
                    rows={4}
                    value={value ?? ""}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="w-full resize-y rounded-xl border border-[#cddedb] bg-white px-4 py-3 text-sm text-[#123b49] outline-none transition focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                />
            ) : (
                <input
                    type="text"
                    value={value ?? ""}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="w-full rounded-xl border border-[#cddedb] bg-white px-4 py-3 text-sm text-[#123b49] outline-none transition focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                />
            )}
        </div>
    );
}

function ArrayEditor({
    label,
    items,
    onChange,
    placeholder = "Tulis item...",
}) {
    const values = Array.isArray(items) ? items : [];

    const updateItem = (index, value) => {
        const next = [...values];
        next[index] = value;
        onChange(next);
    };

    const addItem = () => {
        onChange([...values, ""]);
    };

    const removeItem = (index) => {
        onChange(values.filter((_, i) => i !== index));
    };

    return (
        <div>
            <div className="mb-2 flex items-center justify-between">
                <label className="block text-sm font-semibold text-[#123b49]">
                    {label}
                </label>

                <button
                    type="button"
                    onClick={addItem}
                    className="text-xs font-bold text-[#087b68] hover:underline"
                >
                    + Tambah
                </button>
            </div>

            <div className="space-y-2">
                {values.length === 0 && (
                    <div className="rounded-xl border border-dashed border-[#cddedb] bg-white px-4 py-4 text-sm text-slate-400">
                        Belum ada item.
                    </div>
                )}

                {values.map((item, index) => (
                    <div key={index} className="flex gap-2">
                        <input
                            type="text"
                            value={item ?? ""}
                            onChange={(e) =>
                                updateItem(index, e.target.value)
                            }
                            placeholder={placeholder}
                            className="flex-1 rounded-xl border border-[#cddedb] bg-white px-4 py-3 text-sm outline-none focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                        />

                        <button
                            type="button"
                            onClick={() => removeItem(index)}
                            className="rounded-xl border border-red-200 px-3 text-sm font-bold text-red-500 hover:bg-red-50"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SectionEditor({
    section,
    index,
    onChange,
    onRemove,
    onMoveUp,
    onMoveDown,
    isFirst,
    isLast,
}) {
    const update = (key, value) => {
        onChange({
            ...section,
            [key]: value,
        });
    };

    const changeType = (type) => {
        onChange(makeSection(type));
    };

    const updateArray = (key, value) => {
        update(key, value);
    };

    const addData = () => {
        const current = section.data || {};

        let number = Object.keys(current).length + 1;
        let key = `Data ${number}`;

        while (current[key] !== undefined) {
            number++;
            key = `Data ${number}`;
        }

        update("data", {
            ...current,
            [key]: "",
        });
    };

    const updateDataKey = (oldKey, newKey) => {
        const current = section.data || {};
        const next = {};

        Object.entries(current).forEach(([key, value]) => {
            next[key === oldKey ? newKey : key] = value;
        });

        update("data", next);
    };

    const updateDataValue = (key, value) => {
        update("data", {
            ...(section.data || {}),
            [key]: value,
        });
    };

    const removeData = (key) => {
        const next = {
            ...(section.data || {}),
        };

        delete next[key];

        update("data", next);
    };

    return (
        <div className="rounded-2xl border border-[#d7e5e3] bg-white shadow-sm">
            {/* SECTION HEADER */}
            <div className="flex flex-col gap-3 border-b border-[#e5eeee] bg-[#f8fcfb] p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#087b68] text-sm font-bold text-white">
                        {index + 1}
                    </div>

                    <div>
                        <p className="text-sm font-bold text-[#123b49]">
                            Section {index + 1}
                        </p>

                        <p className="text-xs text-slate-500">
                            {sectionTypes.find(
                                (item) => item.value === section.type
                            )?.label || "Section"}
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    <button
                        type="button"
                        disabled={isFirst}
                        onClick={onMoveUp}
                        className="rounded-lg border border-[#cddedb] px-3 py-2 text-xs font-semibold disabled:opacity-30"
                    >
                        ↑
                    </button>

                    <button
                        type="button"
                        disabled={isLast}
                        onClick={onMoveDown}
                        className="rounded-lg border border-[#cddedb] px-3 py-2 text-xs font-semibold disabled:opacity-30"
                    >
                        ↓
                    </button>

                    <button
                        type="button"
                        onClick={onRemove}
                        className="rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50"
                    >
                        Hapus
                    </button>
                </div>
            </div>

            <div className="space-y-5 p-5">
                {/* TYPE */}
                <div>
                    <label className="mb-2 block text-sm font-semibold text-[#123b49]">
                        Jenis Section
                    </label>

                    <select
                        value={section.type || "text"}
                        onChange={(e) => changeType(e.target.value)}
                        className="w-full rounded-xl border border-[#cddedb] bg-white px-4 py-3 text-sm outline-none focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                    >
                        {sectionTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                                {type.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* TEXT */}
                {section.type === "text" && (
                    <>
                        <TextInput
                            label="Judul"
                            value={section.title}
                            onChange={(value) => update("title", value)}
                            placeholder="Contoh: Sejarah Sistem Köppen"
                        />

                        <TextInput
                            label="Isi"
                            textarea
                            value={section.content}
                            onChange={(value) => update("content", value)}
                            placeholder="Tuliskan isi materi..."
                        />

                        <TextInput
                            label="Contoh (opsional)"
                            textarea
                            value={section.example}
                            onChange={(value) => update("example", value)}
                            placeholder="Contoh tambahan jika ada..."
                        />
                    </>
                )}

                {/* HIGHLIGHT */}
                {section.type === "highlight" && (
                    <>
                        <TextInput
                            label="Judul Highlight"
                            value={section.title}
                            onChange={(value) => update("title", value)}
                            placeholder="Contoh: Tahukah Kamu?"
                        />

                        <TextInput
                            label="Isi Highlight"
                            textarea
                            value={section.content}
                            onChange={(value) => update("content", value)}
                            placeholder="Tuliskan informasi penting..."
                        />
                    </>
                )}

                {/* LIST */}
                {section.type === "list" && (
                    <>
                        <TextInput
                            label="Judul"
                            value={section.title}
                            onChange={(value) => update("title", value)}
                            placeholder="Contoh: Kelompok Utama Iklim Köppen"
                        />

                        <ArrayEditor
                            label="Daftar Item"
                            items={section.items}
                            onChange={(value) =>
                                updateArray("items", value)
                            }
                            placeholder="Tulis item..."
                        />
                    </>
                )}

                {/* CLIMATE GROUP */}
                {section.type === "climate_group" && (
                    <>
                        <div className="grid gap-4 sm:grid-cols-3">
                            <TextInput
                                label="Kode"
                                value={section.code}
                                onChange={(value) =>
                                    update("code", value)
                                }
                                placeholder="A"
                            />

                            <TextInput
                                label="Ikon"
                                value={section.icon}
                                onChange={(value) =>
                                    update("icon", value)
                                }
                                placeholder="🌴"
                            />

                            <TextInput
                                label="Judul"
                                value={section.title}
                                onChange={(value) =>
                                    update("title", value)
                                }
                                placeholder="Iklim Tropis"
                            />
                        </div>

                        <TextInput
                            label="Deskripsi"
                            textarea
                            value={section.content}
                            onChange={(value) =>
                                update("content", value)
                            }
                            placeholder="Jelaskan karakteristik kelompok iklim..."
                        />

                        {section.items && (
                            <ArrayEditor
                                label="Poin-Poin"
                                items={section.items}
                                onChange={(value) =>
                                    update("items", value)
                                }
                                placeholder="Tulis poin..."
                            />
                        )}

                        {section.subtypes && (
                            <ArrayEditor
                                label="Subtipe"
                                items={section.subtypes}
                                onChange={(value) =>
                                    update("subtypes", value)
                                }
                                placeholder="Contoh: Af — hutan hujan tropis"
                            />
                        )}

                        {!section.items && !section.subtypes && (
                            <button
                                type="button"
                                onClick={() =>
                                    update("subtypes", [""])
                                }
                                className="rounded-xl border border-[#cddedb] px-4 py-2 text-xs font-semibold text-[#087b68]"
                            >
                                + Tambahkan Subtipe
                            </button>
                        )}
                    </>
                )}

                {/* COMPARISON */}
                {section.type === "comparison" && (
                    <>
                        <TextInput
                            label="Judul"
                            value={section.title}
                            onChange={(value) => update("title", value)}
                            placeholder="Contoh: Am vs Aw"
                        />

                        <TextInput
                            label="Subjudul"
                            value={section.subtitle}
                            onChange={(value) =>
                                update("subtitle", value)
                            }
                            placeholder="Perbedaan pola curah hujan"
                        />

                        <div className="grid gap-4 lg:grid-cols-2">
                            <div className="rounded-xl border border-[#cde5df] bg-[#f8fcfb] p-4">
                                <TextInput
                                    label="Bagian Kiri"
                                    textarea
                                    value={section.left}
                                    onChange={(value) =>
                                        update("left", value)
                                    }
                                    placeholder="Am — Tropis Monsun..."
                                />
                            </div>

                            <div className="rounded-xl border border-[#cde5df] bg-[#f8fcfb] p-4">
                                <TextInput
                                    label="Bagian Kanan"
                                    textarea
                                    value={section.right}
                                    onChange={(value) =>
                                        update("right", value)
                                    }
                                    placeholder="Aw — Tropis Sabana..."
                                />
                            </div>
                        </div>

                        <TextInput
                            label="Catatan"
                            textarea
                            value={section.note}
                            onChange={(value) => update("note", value)}
                            placeholder="Tuliskan kunci perbedaannya..."
                        />
                    </>
                )}

                {/* STEPS */}
                {section.type === "steps" && (
                    <>
                        <TextInput
                            label="Judul"
                            value={section.title}
                            onChange={(value) => update("title", value)}
                            placeholder="Contoh: Langkah Menentukan Klasifikasi"
                        />

                        <ArrayEditor
                            label="Langkah"
                            items={section.items}
                            onChange={(value) =>
                                update("items", value)
                            }
                            placeholder="Tulis langkah..."
                        />
                    </>
                )}

                {/* EXAMPLE */}
                {section.type === "example" && (
                    <>
                        <TextInput
                            label="Judul Contoh"
                            value={section.title}
                            onChange={(value) => update("title", value)}
                            placeholder="Contoh Wilayah X"
                        />

                        <div>
                            <div className="mb-2 flex items-center justify-between">
                                <label className="block text-sm font-semibold text-[#123b49]">
                                    Data Contoh
                                </label>

                                <button
                                    type="button"
                                    onClick={addData}
                                    className="text-xs font-bold text-[#087b68]"
                                >
                                    + Tambah Data
                                </button>
                            </div>

                            <div className="space-y-3">
                                {Object.entries(section.data || {}).map(
                                    ([key, value]) => (
                                        <div
                                            key={key}
                                            className="grid gap-2 sm:grid-cols-[1fr_1fr_auto]"
                                        >
                                            <input
                                                type="text"
                                                value={key}
                                                onChange={(e) =>
                                                    updateDataKey(
                                                        key,
                                                        e.target.value
                                                    )
                                                }
                                                className="rounded-xl border border-[#cddedb] px-4 py-3 text-sm"
                                                placeholder="Nama data"
                                            />

                                            <input
                                                type="text"
                                                value={value}
                                                onChange={(e) =>
                                                    updateDataValue(
                                                        key,
                                                        e.target.value
                                                    )
                                                }
                                                className="rounded-xl border border-[#cddedb] px-4 py-3 text-sm"
                                                placeholder="Nilai"
                                            />

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeData(key)
                                                }
                                                className="rounded-xl border border-red-200 px-3 text-sm font-bold text-red-500"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        <ArrayEditor
                            label="Langkah Penjelasan"
                            items={section.steps}
                            onChange={(value) =>
                                update("steps", value)
                            }
                            placeholder="Tuliskan langkah analisis..."
                        />

                        <TextInput
                            label="Hasil"
                            textarea
                            value={section.result}
                            onChange={(value) => update("result", value)}
                            placeholder="Tuliskan hasil klasifikasi..."
                        />
                    </>
                )}

                {/* QUESTIONS */}
                {section.type === "questions" && (
                    <>
                        <TextInput
                            label="Judul"
                            value={section.title}
                            onChange={(value) => update("title", value)}
                            placeholder="Pertanyaan untuk Siswa"
                        />

                        <ArrayEditor
                            label="Pertanyaan"
                            items={section.items}
                            onChange={(value) =>
                                update("items", value)
                            }
                            placeholder="Tuliskan pertanyaan..."
                        />
                    </>
                )}

                {/* TEACHER NOTE */}
                {section.type === "teacher_note" && (
                    <>
                        <TextInput
                            label="Judul"
                            value={section.title}
                            onChange={(value) => update("title", value)}
                            placeholder="Catatan untuk Guru"
                        />

                        <TextInput
                            label="Isi Catatan"
                            textarea
                            value={section.content}
                            onChange={(value) =>
                                update("content", value)
                            }
                            placeholder="Tuliskan catatan untuk guru..."
                        />
                    </>
                )}
            </div>
        </div>
    );
}

function ContentEditor({
    title,
    icon,
    content,
    setContent,
    teacher = false,
}) {
    const update = (key, value) => {
        setContent({
            ...content,
            [key]: value,
        });
    };

    const sections = Array.isArray(content.sections)
        ? content.sections
        : [];

    const updateSection = (index, section) => {
        const next = [...sections];
        next[index] = section;

        update("sections", next);
    };

    const removeSection = (index) => {
        update(
            "sections",
            sections.filter((_, i) => i !== index)
        );
    };

    const addSection = () => {
        update("sections", [
            ...sections,
            makeSection("text"),
        ]);
    };

    const moveSection = (index, direction) => {
        const next = [...sections];
        const target = index + direction;

        if (target < 0 || target >= next.length) {
            return;
        }

        [next[index], next[target]] = [
            next[target],
            next[index],
        ];

        update("sections", next);
    };

    return (
        <div className="rounded-3xl border border-[#cde5df] bg-[#f8fcfb] p-5 sm:p-7">
            {/* HEADER */}
            <div className="mb-7 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#d9f99d] text-2xl">
                    {icon}
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-[#123b49]">
                        {title}
                    </h2>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                        {teacher
                            ? "Materi pegangan yang digunakan guru."
                            : "Materi pembelajaran yang ditampilkan kepada siswa."}
                    </p>
                </div>
            </div>

            <div className="space-y-7">
                {/* HERO */}
                <div className="rounded-2xl border border-[#d7e5e3] bg-white p-5">
                    <div className="mb-4">
                        <h3 className="font-bold text-[#123b49]">
                            Bagian Hero
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                            Informasi utama yang tampil di bagian atas
                            materi.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <TextInput
                            label="Judul Hero"
                            value={content.hero_title}
                            onChange={(value) =>
                                update("hero_title", value)
                            }
                            placeholder="Judul materi..."
                        />

                        <TextInput
                            label="Deskripsi Hero"
                            textarea
                            value={content.hero_description}
                            onChange={(value) =>
                                update(
                                    "hero_description",
                                    value
                                )
                            }
                            placeholder="Deskripsi materi..."
                        />

                        <ArrayEditor
                            label="Tags"
                            items={content.tags}
                            onChange={(value) =>
                                update("tags", value)
                            }
                            placeholder="Contoh: 🌍 Geografi"
                        />
                    </div>
                </div>

                {/* FOCUS GURU */}
                {teacher && (
                    <div className="rounded-2xl border border-[#d7e5e3] bg-white p-5">
                        <ArrayEditor
                            label="Fokus Pengajaran"
                            items={content.focus}
                            onChange={(value) =>
                                update("focus", value)
                            }
                            placeholder="Contoh: Menjelaskan pengertian klasifikasi iklim..."
                        />
                    </div>
                )}

                {/* SECTIONS */}
                <div>
                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-[#123b49]">
                                Sections Materi
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                                Tambahkan bagian materi sesuai kebutuhan.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={addSection}
                            className="rounded-xl bg-[#087b68] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#066b5d]"
                        >
                            + Tambah Section
                        </button>
                    </div>

                    <div className="space-y-4">
                        {sections.length === 0 && (
                            <div className="rounded-2xl border border-dashed border-[#cddedb] bg-white p-8 text-center">
                                <p className="font-semibold text-[#123b49]">
                                    Belum ada section
                                </p>

                                <p className="mt-1 text-sm text-slate-500">
                                    Klik "Tambah Section" untuk mulai
                                    membuat materi.
                                </p>
                            </div>
                        )}

                        {sections.map((section, index) => (
                            <SectionEditor
                                key={index}
                                section={section}
                                index={index}
                                onChange={(value) =>
                                    updateSection(index, value)
                                }
                                onRemove={() =>
                                    removeSection(index)
                                }
                                onMoveUp={() =>
                                    moveSection(index, -1)
                                }
                                onMoveDown={() =>
                                    moveSection(index, 1)
                                }
                                isFirst={index === 0}
                                isLast={
                                    index === sections.length - 1
                                }
                            />
                        ))}
                    </div>
                </div>

                {/* SUMMARY */}
                <div className="rounded-2xl border border-[#d7e5e3] bg-white p-5">
                    <ArrayEditor
                        label="Ringkasan"
                        items={
                            Array.isArray(content.summary)
                                ? content.summary
                                : content.summary
                                  ? [content.summary]
                                  : []
                        }
                        onChange={(value) =>
                            update("summary", value)
                        }
                        placeholder="Tuliskan poin ringkasan..."
                    />
                </div>

                {/* PRACTICE STUDENT */}
                {!teacher && (
                    <div className="rounded-2xl border border-[#d7e5e3] bg-white p-5">
                        <TextInput
                            label="Latihan / Ajakan Chatbot (Opsional)"
                            textarea
                            value={content.practice}
                            onChange={(value) =>
                                update("practice", value)
                            }
                            placeholder="Contoh: Buka Chatbot dan masukkan data suhu..."
                        />
                    </div>
                )}

                {/* STRATEGY TEACHER */}
                {teacher && (
                    <div className="rounded-2xl border border-[#d7e5e3] bg-white p-5">
                        <ArrayEditor
                            label="Strategi Pengajaran"
                            items={content.strategy}
                            onChange={(value) =>
                                update("strategy", value)
                            }
                            placeholder="Contoh: Kelompok apa?"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Edit({ material }) {
    const studentContent =
        material.student_content &&
        typeof material.student_content === "object"
            ? material.student_content
            : emptyStudentContent;

    const teacherContent =
        material.teacher_content &&
        typeof material.teacher_content === "object"
            ? material.teacher_content
            : emptyTeacherContent;

    const { data, setData, put, processing, errors } = useForm({
        module_number: material.module_number ?? "",
        title: material.title ?? "",
        description: material.description ?? "",
        student_content: {
            ...emptyStudentContent,
            ...studentContent,
        },
        teacher_content: {
            ...emptyTeacherContent,
            ...teacherContent,
        },
        is_published: Boolean(material.is_published),
        order: material.order ?? 0,
    });

    const submit = (e) => {
        e.preventDefault();

        put(route("admin.materials.update", material.id));
    };

    return (
        <>
            <Head title={`Edit ${material.title}`} />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                <AdminSidebar />

                <main className="min-h-screen md:ml-64">
                    {/* HEADER */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="px-6 py-7 sm:px-10">
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087b68]">
                                Panel Administrator
                            </p>

                            <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                                <div>
                                    <h1 className="text-3xl font-bold text-[#123b49] sm:text-4xl">
                                        Edit Materi
                                    </h1>

                                    <p className="mt-2 max-w-3xl text-base text-slate-500">
                                        Kelola isi materi siswa dan guru
                                        tanpa perlu mengedit struktur JSON
                                        secara manual.
                                    </p>
                                </div>

                                <Link
                                    href={route(
                                        "admin.materials.index"
                                    )}
                                    className="rounded-xl border border-[#cddedb] bg-white px-5 py-3 text-center text-sm font-semibold text-[#123b49] hover:bg-[#f3f9f8]"
                                >
                                    ← Kembali ke Materi
                                </Link>
                            </div>
                        </div>
                    </header>

                    <section className="px-5 py-8 sm:px-8 lg:px-10">
                        <div className="mx-auto max-w-7xl">
                            <form
                                onSubmit={submit}
                                className="space-y-7"
                            >
                                {/* INFORMASI DASAR */}
                                <div className="rounded-3xl border border-[#d7e5e3] bg-white p-6 shadow-sm sm:p-8">
                                    <div className="mb-6">
                                        <h2 className="text-xl font-bold">
                                            Informasi Materi
                                        </h2>

                                        <p className="mt-1 text-sm text-slate-500">
                                            Informasi dasar materi
                                            pembelajaran.
                                        </p>
                                    </div>

                                    <div className="grid gap-5 lg:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-sm font-semibold">
                                                Nomor Modul
                                            </label>

                                            <input
                                                type="number"
                                                min="1"
                                                value={
                                                    data.module_number
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "module_number",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full rounded-xl border border-[#cddedb] px-4 py-3 text-sm outline-none focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                                            />

                                            <FieldError
                                                message={
                                                    errors.module_number
                                                }
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm font-semibold">
                                                Urutan Materi
                                            </label>

                                            <input
                                                type="number"
                                                min="0"
                                                value={data.order}
                                                onChange={(e) =>
                                                    setData(
                                                        "order",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full rounded-xl border border-[#cddedb] px-4 py-3 text-sm outline-none focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                                            />

                                            <FieldError
                                                message={
                                                    errors.order
                                                }
                                            />
                                        </div>

                                        <div className="lg:col-span-2">
                                            <label className="mb-2 block text-sm font-semibold">
                                                Judul Materi
                                            </label>

                                            <input
                                                type="text"
                                                value={data.title}
                                                onChange={(e) =>
                                                    setData(
                                                        "title",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full rounded-xl border border-[#cddedb] px-4 py-3 text-sm outline-none focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                                            />

                                            <FieldError
                                                message={
                                                    errors.title
                                                }
                                            />
                                        </div>

                                        <div className="lg:col-span-2">
                                            <label className="mb-2 block text-sm font-semibold">
                                                Deskripsi
                                            </label>

                                            <textarea
                                                rows={3}
                                                value={
                                                    data.description
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "description",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full resize-y rounded-xl border border-[#cddedb] px-4 py-3 text-sm outline-none focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                                            />

                                            <FieldError
                                                message={
                                                    errors.description
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* SISWA */}
                                <ContentEditor
                                    title="Konten Siswa"
                                    icon="🎓"
                                    content={
                                        data.student_content
                                    }
                                    setContent={(value) =>
                                        setData(
                                            "student_content",
                                            value
                                        )
                                    }
                                />

                                {/* GURU */}
                                <ContentEditor
                                    title="Konten Guru"
                                    icon="👨‍🏫"
                                    content={
                                        data.teacher_content
                                    }
                                    setContent={(value) =>
                                        setData(
                                            "teacher_content",
                                            value
                                        )
                                    }
                                    teacher
                                />

                                {/* PUBLISH */}
                                <div className="rounded-2xl border border-[#d7e5e3] bg-white p-5 shadow-sm">
                                    <label className="flex cursor-pointer items-center gap-3">
                                        <input
                                            type="checkbox"
                                            checked={
                                                data.is_published
                                            }
                                            onChange={(e) =>
                                                setData(
                                                    "is_published",
                                                    e.target.checked
                                                )
                                            }
                                            className="h-5 w-5 rounded border-gray-300 text-[#087b68] focus:ring-[#087b68]"
                                        />

                                        <div>
                                            <p className="font-semibold">
                                                Publikasikan materi
                                            </p>

                                            <p className="text-sm text-slate-500">
                                                Materi dapat dilihat oleh
                                                guru dan siswa.
                                            </p>
                                        </div>
                                    </label>
                                </div>

                                {/* ACTION */}
                                <div className="flex flex-col-reverse gap-3 pb-10 sm:flex-row sm:justify-end">
                                    <Link
                                        href={route(
                                            "admin.materials.index"
                                        )}
                                        className="rounded-xl border border-[#cddedb] bg-white px-6 py-3 text-center text-sm font-semibold hover:bg-[#f3f9f8]"
                                    >
                                        Batal
                                    </Link>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="rounded-xl bg-[#087b68] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#066b5d] disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {processing
                                            ? "Menyimpan..."
                                            : "Simpan Perubahan"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}