import React from "react";

import { Head, Link, useForm } from "@inertiajs/react";

import AdminSidebar from "@/Components/AdminSidebar";

const emptySection = (type = "text") => {
    const base = {
        type,
        title: "",
        content: "",
    };

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
                items: [],
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
                    "Suhu bulan terdingin": "",
                    "Curah hujan bulan terkering": "",
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
            return base;
    }
};

const sectionTypeLabels = {
    text: "Teks",
    highlight: "Highlight",
    list: "Daftar",
    climate_group: "Kelompok Iklim",
    comparison: "Perbandingan",
    steps: "Langkah-Langkah",
    example: "Contoh Data",
    questions: "Pertanyaan",
    teacher_note: "Catatan Guru",
};

function FieldError({ error }) {
    if (!error) return null;

    return (
        <p className="mt-2 text-xs text-red-600">
            {error}
        </p>
    );
}

function SmallButton({ children, onClick, type = "button" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="rounded-lg border border-[#cddedb] bg-white px-3 py-2 text-xs font-semibold text-[#123b49] transition hover:bg-[#f3f9f8]"
        >
            {children}
        </button>
    );
}

function TextInput({
    label,
    value,
    onChange,
    placeholder = "",
}) {
    return (
        <div>
            <label className="mb-2 block text-sm font-semibold text-[#123b49]">
                {label}
            </label>

            <input
                type="text"
                value={value ?? ""}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full rounded-xl border border-[#cddedb] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
            />
        </div>
    );
}

function TextArea({
    label,
    value,
    onChange,
    placeholder = "",
    rows = 4,
}) {
    return (
        <div>
            <label className="mb-2 block text-sm font-semibold text-[#123b49]">
                {label}
            </label>

            <textarea
                rows={rows}
                value={value ?? ""}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full resize-y rounded-xl border border-[#cddedb] bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
            />
        </div>
    );
}

function TagEditor({ title, tags, setTags }) {
    const safeTags = Array.isArray(tags) ? tags : [];

    const updateTag = (index, value) => {
        const next = [...safeTags];
        next[index] = value;
        setTags(next);
    };

    const addTag = () => {
        setTags([...safeTags, ""]);
    };

    const removeTag = (index) => {
        setTags(safeTags.filter((_, i) => i !== index));
    };

    return (
        <div>
            <div className="mb-3 flex items-center justify-between">
                <div>
                    <p className="text-sm font-semibold text-[#123b49]">
                        {title}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                        Contoh: 🌍 Geografi atau ⏱️ 10 menit
                    </p>
                </div>

                <SmallButton onClick={addTag}>
                    + Tambah
                </SmallButton>
            </div>

            <div className="space-y-2">
                {safeTags.length === 0 && (
                    <div className="rounded-xl border border-dashed border-[#cddedb] bg-white px-4 py-4 text-sm text-slate-400">
                        Belum ada tag.
                    </div>
                )}

                {safeTags.map((tag, index) => (
                    <div
                        key={index}
                        className="flex gap-2"
                    >
                        <input
                            type="text"
                            value={tag}
                            onChange={(e) =>
                                updateTag(index, e.target.value)
                            }
                            placeholder="Contoh: 🌍 Geografi"
                            className="flex-1 rounded-xl border border-[#cddedb] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                        />

                        <button
                            type="button"
                            onClick={() => removeTag(index)}
                            className="rounded-xl border border-red-200 px-3 text-sm font-semibold text-red-600 hover:bg-red-50"
                        >
                            Hapus
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

function StringListEditor({
    title,
    items,
    setItems,
    addLabel = "+ Tambah",
}) {
    const safeItems = Array.isArray(items) ? items : [];

    const updateItem = (index, value) => {
        const next = [...safeItems];
        next[index] = value;
        setItems(next);
    };

    const addItem = () => {
        setItems([...safeItems, ""]);
    };

    const removeItem = (index) => {
        setItems(safeItems.filter((_, i) => i !== index));
    };

    return (
        <div>
            <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-[#123b49]">
                    {title}
                </p>

                <SmallButton onClick={addItem}>
                    {addLabel}
                </SmallButton>
            </div>

            <div className="space-y-2">
                {safeItems.length === 0 && (
                    <div className="rounded-xl border border-dashed border-[#cddedb] bg-white px-4 py-4 text-sm text-slate-400">
                        Belum ada data.
                    </div>
                )}

                {safeItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex gap-2"
                    >
                        <textarea
                            rows="2"
                            value={item ?? ""}
                            onChange={(e) =>
                                updateItem(index, e.target.value)
                            }
                            placeholder={`Item ${index + 1}`}
                            className="flex-1 resize-y rounded-xl border border-[#cddedb] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                        />

                        <button
                            type="button"
                            onClick={() => removeItem(index)}
                            className="h-11 rounded-xl border border-red-200 px-3 text-xs font-semibold text-red-600 hover:bg-red-50"
                        >
                            Hapus
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

    const updateArray = (key, index, value) => {
        const current = Array.isArray(section[key])
            ? section[key]
            : [];

        const next = [...current];
        next[index] = value;

        update(key, next);
    };

    const addArrayItem = (key) => {
        const current = Array.isArray(section[key])
            ? section[key]
            : [];

        update(key, [...current, ""]);
    };

    const removeArrayItem = (key, index) => {
        const current = Array.isArray(section[key])
            ? section[key]
            : [];

        update(
            key,
            current.filter((_, i) => i !== index)
        );
    };

    return (
        <div className="rounded-2xl border border-[#d7e5e3] bg-white p-5">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d9f99d] text-sm font-bold text-[#123b49]">
                        {index + 1}
                    </div>

                    <div>
                        <p className="text-sm font-bold text-[#123b49]">
                            Bagian {index + 1}
                        </p>

                        <p className="text-xs text-slate-500">
                            {sectionTypeLabels[section.type] ||
                                "Bagian materi"}
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    <SmallButton
                        onClick={onMoveUp}
                    >
                        ↑
                    </SmallButton>

                    <SmallButton
                        onClick={onMoveDown}
                    >
                        ↓
                    </SmallButton>

                    <button
                        type="button"
                        onClick={onRemove}
                        className="rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-50"
                    >
                        Hapus Bagian
                    </button>
                </div>
            </div>

            <div className="mb-5">
                <label className="mb-2 block text-sm font-semibold text-[#123b49]">
                    Tipe Bagian
                </label>

                <select
                    value={section.type}
                    onChange={(e) =>
                        onChange(
                            emptySection(e.target.value)
                        )
                    }
                    className="w-full rounded-xl border border-[#cddedb] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                >
                    {Object.entries(sectionTypeLabels).map(
                        ([value, label]) => (
                            <option
                                key={value}
                                value={value}
                            >
                                {label}
                            </option>
                        )
                    )}
                </select>
            </div>

            {[
                "text",
                "highlight",
                "teacher_note",
                "list",
                "climate_group",
                "comparison",
                "steps",
                "example",
                "questions",
            ].includes(section.type) && (
                <div className="space-y-5">
                    {section.type !== "climate_group" &&
                        section.type !== "comparison" &&
                        section.type !== "steps" &&
                        section.type !== "example" &&
                        section.type !== "questions" && (
                            <TextInput
                                label="Judul"
                                value={section.title}
                                onChange={(value) =>
                                    update("title", value)
                                }
                            />
                        )}

                    {section.type === "text" && (
                        <>
                            <TextArea
                                label="Isi"
                                value={section.content}
                                onChange={(value) =>
                                    update("content", value)
                                }
                            />

                            <TextInput
                                label="Contoh / Catatan Tambahan (opsional)"
                                value={section.example}
                                onChange={(value) =>
                                    update("example", value)
                                }
                            />
                        </>
                    )}

                    {section.type === "highlight" && (
                        <TextArea
                            label="Isi Highlight"
                            value={section.content}
                            onChange={(value) =>
                                update("content", value)
                            }
                        />
                    )}

                    {section.type === "teacher_note" && (
                        <TextArea
                            label="Catatan"
                            value={section.content}
                            onChange={(value) =>
                                update("content", value)
                            }
                        />
                    )}

                    {section.type === "list" && (
                        <StringListEditor
                            title="Item Daftar"
                            items={section.items}
                            setItems={(items) =>
                                update("items", items)
                            }
                        />
                    )}

                    {section.type === "steps" && (
                        <div className="space-y-4">
                            <TextInput
                                label="Judul Langkah"
                                value={section.title}
                                onChange={(value) =>
                                    update("title", value)
                                }
                            />

                            <StringListEditor
                                title="Langkah"
                                items={section.items}
                                setItems={(items) =>
                                    update("items", items)
                                }
                            />
                        </div>
                    )}

                    {section.type === "questions" && (
                        <div className="space-y-4">
                            <TextInput
                                label="Judul Pertanyaan"
                                value={section.title}
                                onChange={(value) =>
                                    update("title", value)
                                }
                            />

                            <StringListEditor
                                title="Pertanyaan"
                                items={section.items}
                                setItems={(items) =>
                                    update("items", items)
                                }
                            />
                        </div>
                    )}

                    {section.type === "climate_group" && (
                        <div className="space-y-5">
                            <div className="grid gap-4 sm:grid-cols-3">
                                <TextInput
                                    label="Kode"
                                    value={section.code}
                                    onChange={(value) =>
                                        update("code", value)
                                    }
                                    placeholder="Contoh: A"
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

                            <TextArea
                                label="Penjelasan"
                                value={section.content}
                                onChange={(value) =>
                                    update("content", value)
                                }
                            />

                            <StringListEditor
                                title="Subtipe"
                                items={section.subtypes}
                                setItems={(items) =>
                                    update("subtypes", items)
                                }
                            />

                            <StringListEditor
                                title="Dampak / Karakteristik Tambahan"
                                items={section.items}
                                setItems={(items) =>
                                    update("items", items)
                                }
                            />
                        </div>
                    )}

                    {section.type === "comparison" && (
                        <div className="space-y-5">
                            <TextInput
                                label="Judul"
                                value={section.title}
                                onChange={(value) =>
                                    update("title", value)
                                }
                            />

                            <TextInput
                                label="Subjudul"
                                value={section.subtitle}
                                onChange={(value) =>
                                    update("subtitle", value)
                                }
                            />

                            <div className="grid gap-5 lg:grid-cols-2">
                                <TextArea
                                    label="Bagian Kiri"
                                    value={section.left}
                                    onChange={(value) =>
                                        update("left", value)
                                    }
                                />

                                <TextArea
                                    label="Bagian Kanan"
                                    value={section.right}
                                    onChange={(value) =>
                                        update("right", value)
                                    }
                                />
                            </div>

                            <TextArea
                                label="Catatan Pembeda"
                                value={section.note}
                                onChange={(value) =>
                                    update("note", value)
                                }
                            />
                        </div>
                    )}

                    {section.type === "example" && (
                        <div className="space-y-5">
                            <TextInput
                                label="Judul Contoh"
                                value={section.title}
                                onChange={(value) =>
                                    update("title", value)
                                }
                            />

                            <div>
                                <div className="mb-3 flex items-center justify-between">
                                    <p className="text-sm font-semibold text-[#123b49]">
                                        Data Contoh
                                    </p>

                                    <SmallButton
                                        onClick={() => {
                                            update(
                                                "data",
                                                {
                                                    ...(
                                                        section.data ||
                                                        {}
                                                    ),
                                                    "Data baru": "",
                                                }
                                            );
                                        }}
                                    >
                                        + Tambah Data
                                    </SmallButton>
                                </div>

                                <div className="space-y-2">
                                    {Object.entries(
                                        section.data || {}
                                    ).map(
                                        (
                                            [key, value],
                                            dataIndex
                                        ) => (
                                            <div
                                                key={dataIndex}
                                                className="grid gap-2 sm:grid-cols-[1fr_1fr_auto]"
                                            >
                                                <input
                                                    type="text"
                                                    value={key}
                                                    onChange={(
                                                        e
                                                    ) => {
                                                        const next =
                                                            {
                                                                ...(section.data ||
                                                                    {}),
                                                            };

                                                        delete next[
                                                            key
                                                        ];

                                                        next[
                                                            e.target
                                                                .value
                                                        ] =
                                                            value;

                                                        update(
                                                            "data",
                                                            next
                                                        );
                                                    }}
                                                    placeholder="Nama data"
                                                    className="rounded-xl border border-[#cddedb] px-4 py-3 text-sm outline-none focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                                                />

                                                <input
                                                    type="text"
                                                    value={
                                                        value ??
                                                        ""
                                                    }
                                                    onChange={(
                                                        e
                                                    ) => {
                                                        update(
                                                            "data",
                                                            {
                                                                ...(section.data ||
                                                                    {}),
                                                                [key]:
                                                                    e
                                                                        .target
                                                                        .value,
                                                            }
                                                        );
                                                    }}
                                                    placeholder="Nilai"
                                                    className="rounded-xl border border-[#cddedb] px-4 py-3 text-sm outline-none focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                                                />

                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        const next =
                                                            {
                                                                ...(section.data ||
                                                                    {}),
                                                            };

                                                        delete next[
                                                            key
                                                        ];

                                                        update(
                                                            "data",
                                                            next
                                                        );
                                                    }}
                                                    className="rounded-xl border border-red-200 px-3 text-xs font-semibold text-red-600 hover:bg-red-50"
                                                >
                                                    Hapus
                                                </button>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>

                            <StringListEditor
                                title="Langkah Penyelesaian"
                                items={section.steps}
                                setItems={(items) =>
                                    update("steps", items)
                                }
                            />

                            <TextArea
                                label="Hasil"
                                value={section.result}
                                onChange={(value) =>
                                    update("result", value)
                                }
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

function ContentEditor({
    title,
    description,
    content,
    setContent,
    isTeacher = false,
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

    const moveSection = (index, direction) => {
        const target = index + direction;

        if (target < 0 || target >= sections.length) {
            return;
        }

        const next = [...sections];

        [next[index], next[target]] = [
            next[target],
            next[index],
        ];

        update("sections", next);
    };

    const addSection = () => {
        update("sections", [
            ...sections,
            emptySection("text"),
        ]);
    };

    return (
        <div className="rounded-2xl border border-[#cde5df] bg-[#f8fcfb] p-5 sm:p-6">
            <div className="mb-6 flex items-start gap-3">
                <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl ${
                        isTeacher
                            ? "bg-[#e8f8f1]"
                            : "bg-[#d9f99d]"
                    }`}
                >
                    {isTeacher ? "👨‍🏫" : "🎓"}
                </div>

                <div>
                    <h2 className="text-xl font-bold text-[#123b49]">
                        {title}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        {description}
                    </p>
                </div>
            </div>

            <div className="space-y-6">
                <div className="grid gap-5 lg:grid-cols-2">
                    <TextInput
                        label="Judul Hero"
                        value={content.hero_title}
                        onChange={(value) =>
                            update("hero_title", value)
                        }
                        placeholder={
                            isTeacher
                                ? "Contoh: Modul Pegangan Guru 01"
                                : "Contoh: Pengertian Klasifikasi Iklim Köppen"
                        }
                    />

                    <TextArea
                        label="Deskripsi Hero"
                        value={content.hero_description}
                        onChange={(value) =>
                            update(
                                "hero_description",
                                value
                            )
                        }
                        placeholder="Deskripsi singkat untuk bagian hero..."
                        rows={3}
                    />
                </div>

                <TagEditor
                    title="Tag"
                    tags={content.tags}
                    setTags={(tags) =>
                        update("tags", tags)
                    }
                />

                {isTeacher && (
                    <StringListEditor
                        title="Fokus Pengajaran"
                        items={content.focus}
                        setItems={(items) =>
                            update("focus", items)
                        }
                    />
                )}

                <div>
                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h3 className="text-base font-bold text-[#123b49]">
                                Bagian Materi
                            </h3>

                            <p className="mt-1 text-xs text-slate-500">
                                Tambahkan bagian sesuai kebutuhan
                                materi.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={addSection}
                            className="rounded-xl bg-[#087b68] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#066b5d]"
                        >
                            + Tambah Bagian
                        </button>
                    </div>

                    <div className="space-y-4">
                        {sections.length === 0 && (
                            <div className="rounded-2xl border border-dashed border-[#cddedb] bg-white px-5 py-8 text-center">
                                <p className="text-sm font-semibold text-[#123b49]">
                                    Belum ada bagian materi
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                    Klik "Tambah Bagian" untuk mulai
                                    menulis materi.
                                </p>
                            </div>
                        )}

                        {sections.map((section, index) => (
                            <SectionEditor
                                key={index}
                                section={section}
                                index={index}
                                onChange={(value) =>
                                    updateSection(
                                        index,
                                        value
                                    )
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
                                    index ===
                                    sections.length - 1
                                }
                            />
                        ))}
                    </div>
                </div>

                {isTeacher && (
                    <StringListEditor
                        title="Strategi / Pertanyaan Pengajaran"
                        items={content.strategy}
                        setItems={(items) =>
                            update("strategy", items)
                        }
                    />
                )}

                <StringListEditor
                    title="Ringkasan"
                    items={
                        Array.isArray(content.summary)
                            ? content.summary
                            : content.summary
                              ? [content.summary]
                              : []
                    }
                    setItems={(items) =>
                        update("summary", items)
                    }
                />

                {!isTeacher && (
                    <TextArea
                        label="Praktik / Ajakan Chatbot (opsional)"
                        value={content.practice}
                        onChange={(value) =>
                            update("practice", value)
                        }
                        placeholder="Contoh: Buka Chatbot dan masukkan data suhu serta curah hujan..."
                        rows={4}
                    />
                )}
            </div>
        </div>
    );
}

export default function Create() {
    const {
        data,
        setData,
        post,
        processing,
        errors,
    } = useForm({
        module_number: "",
        title: "",
        description: "",

        student_content: {
            hero_title: "",
            hero_description: "",
            tags: [],
            sections: [],
            summary: [],
        },

        teacher_content: {
            hero_title: "",
            hero_description: "",
            tags: [],
            focus: [],
            sections: [],
            summary: [],
        },

        is_published: true,
        order: 0,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.materials.store"));
    };

    return (
        <>
            <Head title="Tambah Materi" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                <AdminSidebar />

                <main className="min-h-screen md:ml-64">
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="px-6 py-7 sm:px-10">
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087b68]">
                                Panel Administrator
                            </p>

                            <h1 className="mt-3 text-3xl font-bold text-[#123b49] sm:text-4xl">
                                Tambah Materi
                            </h1>

                            <p className="mt-2 max-w-2xl text-base text-slate-500">
                                Buat materi pembelajaran baru untuk
                                guru dan siswa.
                            </p>
                        </div>
                    </header>

                    <section className="px-5 py-8 sm:px-8 lg:px-10">
                        <div className="mx-auto max-w-7xl">
                            <form
                                onSubmit={submit}
                                className="overflow-hidden rounded-3xl border border-[#d7e5e3] bg-white shadow-sm"
                            >
                                <div className="space-y-8 p-6 sm:p-8">
                                    {/* INFORMASI DASAR */}
                                    <div>
                                        <div className="mb-5">
                                            <h2 className="text-xl font-bold text-[#123b49]">
                                                Informasi Materi
                                            </h2>

                                            <p className="mt-1 text-sm text-slate-500">
                                                Informasi dasar materi
                                                pembelajaran.
                                            </p>
                                        </div>

                                        <div className="grid gap-6 lg:grid-cols-2">
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
                                                    placeholder="Contoh: 7"
                                                    className="w-full rounded-xl border border-[#cddedb] px-4 py-3 text-sm outline-none focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                                                />

                                                <FieldError
                                                    error={
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
                                                    error={
                                                        errors.order
                                                    }
                                                />
                                            </div>

                                            <div className="lg:col-span-2">
                                                <TextInput
                                                    label="Judul Materi"
                                                    value={
                                                        data.title
                                                    }
                                                    onChange={(value) =>
                                                        setData(
                                                            "title",
                                                            value
                                                        )
                                                    }
                                                    placeholder="Contoh: Modul 7: ..."
                                                />

                                                <FieldError
                                                    error={
                                                        errors.title
                                                    }
                                                />
                                            </div>

                                            <div className="lg:col-span-2">
                                                <TextArea
                                                    label="Deskripsi"
                                                    value={
                                                        data.description
                                                    }
                                                    onChange={(value) =>
                                                        setData(
                                                            "description",
                                                            value
                                                        )
                                                    }
                                                    placeholder="Tuliskan deskripsi singkat materi..."
                                                    rows={3}
                                                />

                                                <FieldError
                                                    error={
                                                        errors.description
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* SISWA */}
                                    <ContentEditor
                                        title="Konten Siswa"
                                        description="Materi yang akan digunakan pada halaman pembelajaran siswa."
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

                                    <FieldError
                                        error={
                                            errors.student_content
                                        }
                                    />

                                    {/* GURU */}
                                    <ContentEditor
                                        title="Konten Guru"
                                        description="Materi pegangan guru yang dapat memiliki fokus, strategi, catatan, dan penjelasan tambahan."
                                        content={
                                            data.teacher_content
                                        }
                                        setContent={(value) =>
                                            setData(
                                                "teacher_content",
                                                value
                                            )
                                        }
                                        isTeacher
                                    />

                                    <FieldError
                                        error={
                                            errors.teacher_content
                                        }
                                    />

                                    {/* PUBLISH */}
                                    <div className="rounded-2xl bg-[#f3f9f8] p-5">
                                        <label className="flex cursor-pointer items-start gap-3">
                                            <input
                                                type="checkbox"
                                                checked={
                                                    data.is_published
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "is_published",
                                                        e.target
                                                            .checked
                                                    )
                                                }
                                                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#087b68] focus:ring-[#087b68]"
                                            />

                                            <div>
                                                <p className="text-sm font-semibold">
                                                    Publikasikan materi
                                                </p>

                                                <p className="mt-1 text-xs text-slate-500">
                                                    Materi dapat dilihat
                                                    oleh guru dan siswa.
                                                </p>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex flex-col-reverse gap-3 border-t border-[#e5eeee] p-6 sm:flex-row sm:justify-end sm:p-8">
                                    <Link
                                        href={route(
                                            "admin.materials.index"
                                        )}
                                        className="rounded-xl border border-[#cddedb] px-5 py-3 text-center text-sm font-semibold text-[#123b49] transition hover:bg-[#f3f9f8]"
                                    >
                                        Batal
                                    </Link>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="rounded-xl bg-[#087b68] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#066b5d] disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {processing
                                            ? "Menyimpan..."
                                            : "Simpan Materi"}
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