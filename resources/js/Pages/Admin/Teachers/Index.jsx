import React, { useState } from "react";
import {
    Head,
    router,
    useForm,
    usePage,
} from "@inertiajs/react";

import AdminSidebar from "@/Components/AdminSidebar";

export default function Index({ teachers, filters }) {
    const { flash } = usePage().props;

    /*
    |--------------------------------------------------------------------------
    | State
    |--------------------------------------------------------------------------
    */

    const [showAddForm, setShowAddForm] = useState(false);

    const [search, setSearch] = useState(
        filters?.search || ""
    );

    const [deletingTeacherId, setDeletingTeacherId] = useState(null);

    const [editingTeacher, setEditingTeacher] = useState(null);

    /*
    |--------------------------------------------------------------------------
    | Form Tambah Guru
    |--------------------------------------------------------------------------
    */

    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
    } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    /*
    |--------------------------------------------------------------------------
    | Form Edit Password Guru
    |--------------------------------------------------------------------------
    */

    const {
        data: editData,
        setData: setEditData,
        put,
        processing: editProcessing,
        errors: editErrors,
        reset: resetEdit,
    } = useForm({
        password: "",
        password_confirmation: "",
    });


    /*
    |--------------------------------------------------------------------------
    | Tambah Guru
    |--------------------------------------------------------------------------
    */

    const submitTeacher = (e) => {
        e.preventDefault();

        post(route("admin.teachers.store"), {
            preserveScroll: true,

            onSuccess: () => {
                reset();
                setShowAddForm(false);
            },
        });
    };


    /*
    |--------------------------------------------------------------------------
    | Edit Password Guru
    |--------------------------------------------------------------------------
    */

    const openEditForm = (teacher) => {
        setEditingTeacher(teacher);
        resetEdit();
    };

    const closeEditForm = () => {
        setEditingTeacher(null);
        resetEdit();
    };

    const submitEditPassword = (e) => {
        e.preventDefault();

        put(
            route("admin.teachers.password.update", editingTeacher.id),
            {
                preserveScroll: true,

                onSuccess: () => {
                    closeEditForm();
                },
            }
        );
    };


    /*
    |--------------------------------------------------------------------------
    | Hapus Guru
    |--------------------------------------------------------------------------
    */

    const deleteTeacher = (teacher) => {
        const confirmed = window.confirm(
            `Apakah kamu yakin ingin menghapus akun guru "${teacher.name}"?`
        );

        if (!confirmed) {
            return;
        }

        setDeletingTeacherId(teacher.id);

        router.delete(
            route("admin.teachers.destroy", teacher.id),
            {
                preserveScroll: true,

                onFinish: () => {
                    setDeletingTeacherId(null);
                },
            }
        );
    };


    /*
    |--------------------------------------------------------------------------
    | Search
    |--------------------------------------------------------------------------
    */

    const handleSearch = (e) => {
        e.preventDefault();

        router.get(
            route("admin.teachers.index"),
            {
                search: search,
            },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            }
        );
    };


    /*
    |--------------------------------------------------------------------------
    | Close Modal
    |--------------------------------------------------------------------------
    */

    const closeForm = () => {
        reset();
        setShowAddForm(false);
    };


    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */

    return (
        <>
            <Head title="Data Guru" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">

                {/* =====================================================
                    SIDEBAR
                ====================================================== */}

                <AdminSidebar />


                {/* =====================================================
                    MAIN CONTENT
                ====================================================== */}

                <main className="min-h-screen md:ml-64">

                    {/* =================================================
                        HEADER
                    ================================================== */}

                    <header className="border-b border-[#d7e5e3] bg-white">

                        <div className="flex min-h-[155px] items-center justify-between gap-6 px-6 py-7 sm:px-10">

                            <div>

                                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087b68]">
                                    Panel Administrator
                                </p>

                                <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#123b49] sm:text-4xl">
                                    Data Guru
                                </h1>

                                <p className="mt-2 max-w-2xl text-base text-slate-500">
                                    Kelola akun dan data guru yang
                                    terdaftar di IklimKöppenBot.
                                </p>

                            </div>

                        </div>

                    </header>


                    {/* =================================================
                        CONTENT
                    ================================================== */}

                    <section className="px-5 py-8 sm:px-8 lg:px-10">

                        <div className="mx-auto max-w-7xl">


                            {/* =================================================
                                FLASH SUCCESS
                            ================================================== */}

                            {flash?.success && (
                                <div className="mb-6 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-800">

                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold">
                                        ✓
                                    </span>

                                    <span>
                                        {flash.success}
                                    </span>

                                </div>
                            )}


                            {/* =================================================
                                SUMMARY CARDS
                            ================================================== */}

                            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">


                                {/* ==============================
                                    TOTAL GURU
                                =============================== */}

                                <div className="rounded-2xl border border-[#d7e5e3] bg-white p-6 shadow-sm">

                                    <div className="flex items-start justify-between">

                                        <div>

                                            <p className="text-sm font-medium text-slate-500">
                                                Total Guru
                                            </p>

                                            <p className="mt-2 text-3xl font-bold text-[#123b49]">
                                                {teachers?.total || 0}
                                            </p>

                                            <p className="mt-1 text-xs text-slate-400">
                                                Akun guru terdaftar
                                            </p>

                                        </div>

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f8f1] text-2xl">
                                            👨‍🏫
                                        </div>

                                    </div>

                                </div>


                                {/* ==============================
                                    ROLE
                                =============================== */}

                                <div className="rounded-2xl border border-[#d7e5e3] bg-white p-6 shadow-sm">

                                    <div className="flex items-start justify-between">

                                        <div>

                                            <p className="text-sm font-medium text-slate-500">
                                                Role
                                            </p>

                                            <p className="mt-2 text-xl font-bold text-[#123b49]">
                                                Teacher
                                            </p>

                                            <p className="mt-1 text-xs text-slate-400">
                                                Pengguna ruang pengajar
                                            </p>

                                        </div>

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d9f99d] text-2xl">
                                            🎓
                                        </div>

                                    </div>

                                </div>


                                {/* ==============================
                                    TAMBAH GURU
                                =============================== */}

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowAddForm(true)
                                    }
                                    className="rounded-2xl border border-dashed border-[#9fc8c0] bg-[#f8fcfb] p-6 text-left transition hover:border-[#087b68] hover:bg-white"
                                >

                                    <div className="flex items-start justify-between">

                                        <div>

                                            <p className="text-sm font-medium text-slate-500">
                                                Kelola Akun
                                            </p>

                                            <p className="mt-2 text-xl font-bold text-[#087b68]">
                                                Tambah Guru
                                            </p>

                                            <p className="mt-1 text-xs text-slate-400">
                                                Buat akun guru baru
                                            </p>

                                        </div>

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087b68] text-xl text-white">
                                            +
                                        </div>

                                    </div>

                                </button>

                            </div>


                            {/* =================================================
                                TABLE CARD
                            ================================================== */}

                            <div className="mt-7 overflow-hidden rounded-3xl border border-[#d7e5e3] bg-white shadow-sm">


                                {/* =================================================
                                    TABLE HEADER
                                ================================================== */}

                                <div className="border-b border-[#e5eeee] px-6 py-5 sm:px-7">

                                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                                        <div>

                                            <h2 className="text-xl font-bold text-[#123b49]">
                                                Daftar Guru
                                            </h2>

                                            <p className="mt-1 text-sm text-slate-500">
                                                Daftar akun guru yang
                                                terdaftar.
                                            </p>

                                        </div>


                                        {/* ==============================
                                            SEARCH
                                        =============================== */}

                                        <form
                                            onSubmit={handleSearch}
                                            className="flex w-full gap-2 sm:w-auto"
                                        >

                                            <div className="relative flex-1 sm:w-72">

                                                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                                    🔍
                                                </span>

                                                <input
                                                    type="text"
                                                    value={search}
                                                    onChange={(e) =>
                                                        setSearch(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Cari nama atau email..."
                                                    className="w-full rounded-xl border border-[#cddedb] bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                                                />

                                            </div>


                                            <button
                                                type="submit"
                                                className="rounded-xl border border-[#cddedb] px-4 text-sm font-semibold text-[#123b49] transition hover:bg-[#f3f9f8]"
                                            >
                                                Cari
                                            </button>

                                        </form>

                                    </div>

                                </div>


                                {/* =================================================
                                    MOBILE ADD BUTTON
                                ================================================== */}

                                <div className="border-b border-[#e5eeee] p-4 sm:hidden">

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowAddForm(true)
                                        }
                                        className="w-full rounded-xl bg-[#087b68] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#066b5d]"
                                    >
                                        + Tambah Guru
                                    </button>

                                </div>


                                {/* =================================================
                                    TABLE
                                ================================================== */}

                                <div className="overflow-x-auto">

                                    <table className="w-full min-w-[900px]">

                                        <thead>

                                            <tr className="border-b border-[#e5eeee] bg-[#f8fcfb] text-left">

                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                                                    Guru
                                                </th>

                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                                                    Email
                                                </th>

                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                                                    Role
                                                </th>

                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                                                    Terdaftar
                                                </th>

                                                <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
                                                    Aksi
                                                </th>

                                            </tr>

                                        </thead>


                                        {/* =================================================
                                            TABLE BODY
                                        ================================================== */}

                                        <tbody className="divide-y divide-[#edf3f2]">

                                            {teachers?.data?.length > 0 ? (

                                                teachers.data.map(
                                                    (teacher) => {

                                                        const initial =
                                                            teacher.name
                                                                ?.charAt(0)
                                                                ?.toUpperCase() ||
                                                            "G";

                                                        const avatar =
                                                            teacher.avatar_url ??
                                                            null;

                                                        const isDeleting =
                                                            deletingTeacherId ===
                                                            teacher.id;


                                                        return (
                                                            <tr
                                                                key={
                                                                    teacher.id
                                                                }
                                                                className="transition hover:bg-[#f8fcfb]"
                                                            >

                                                                {/* ============================
                                                                    GURU
                                                                ============================= */}

                                                                <td className="px-6 py-4">

                                                                    <div className="flex items-center gap-3">

                                                                        {avatar ? (

                                                                            <img
                                                                                src={
                                                                                    avatar
                                                                                }
                                                                                alt={
                                                                                    teacher.name
                                                                                }
                                                                                className="h-11 w-11 shrink-0 rounded-full object-cover"
                                                                            />

                                                                        ) : (

                                                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d9f99d] font-bold text-[#07384b]">
                                                                                {
                                                                                    initial
                                                                                }
                                                                            </div>

                                                                        )}


                                                                        <div className="min-w-0">

                                                                            <p className="truncate font-semibold text-[#123b49]">
                                                                                {
                                                                                    teacher.name
                                                                                }
                                                                            </p>

                                                                            <p className="text-xs text-slate-400">
                                                                                ID #
                                                                                {
                                                                                    teacher.id
                                                                                }
                                                                            </p>

                                                                        </div>

                                                                    </div>

                                                                </td>


                                                                {/* ============================
                                                                    EMAIL
                                                                ============================= */}

                                                                <td className="px-6 py-4">

                                                                    <p className="text-sm text-slate-600">
                                                                        {
                                                                            teacher.email
                                                                        }
                                                                    </p>

                                                                </td>


                                                                {/* ============================
                                                                    ROLE
                                                                ============================= */}

                                                                <td className="px-6 py-4">

                                                                    <span className="inline-flex rounded-full bg-[#e8f8f1] px-3 py-1 text-xs font-bold text-[#087b68]">
                                                                        Guru
                                                                    </span>

                                                                </td>


                                                                {/* ============================
                                                                    TANGGAL
                                                                ============================= */}

                                                                <td className="px-6 py-4">

                                                                    <p className="text-sm text-slate-500">

                                                                        {teacher.created_at
                                                                            ? new Date(
                                                                                  teacher.created_at
                                                                              ).toLocaleDateString(
                                                                                  "id-ID",
                                                                                  {
                                                                                      day: "2-digit",
                                                                                      month: "short",
                                                                                      year: "numeric",
                                                                                  }
                                                                              )
                                                                            : "-"}

                                                                    </p>

                                                                </td>


                                                                {/* ============================
                                                                    AKSI
                                                                ============================= */}

                                                                <td className="px-6 py-4">

                                                                    <div className="flex justify-center gap-2">

                                                                        <button
                                                                            type="button"
                                                                            onClick={() =>
                                                                                openEditForm(
                                                                                    teacher
                                                                                )
                                                                            }
                                                                            className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-600 transition hover:bg-blue-100"
                                                                        >
                                                                            Edit Password
                                                                        </button>

                                                                        <button
                                                                            type="button"
                                                                            onClick={() =>
                                                                                deleteTeacher(
                                                                                    teacher
                                                                                )
                                                                            }
                                                                            disabled={
                                                                                isDeleting
                                                                            }
                                                                            className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-bold text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                                                                        >

                                                                            {isDeleting ? (
                                                                                <>
                                                                                    <span className="h-3 w-3 animate-spin rounded-full border-2 border-red-300 border-t-red-600" />

                                                                                    Menghapus...
                                                                                </>
                                                                            ) : (
                                                                                <>
                                                                                    Hapus Data
                                                                                </>
                                                                            )}

                                                                        </button>

                                                                    </div>

                                                                </td>

                                                            </tr>
                                                        );
                                                    }
                                                )

                                            ) : (

                                                /* ============================
                                                    EMPTY STATE
                                                ============================= */

                                                <tr>

                                                    <td
                                                        colSpan="5"
                                                        className="px-6 py-16 text-center"
                                                    >

                                                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e8f8f1] text-3xl">
                                                            👨‍🏫
                                                        </div>

                                                        <h3 className="mt-4 font-bold text-[#123b49]">
                                                            Belum ada guru
                                                        </h3>

                                                        <p className="mt-1 text-sm text-slate-500">
                                                            {search
                                                                ? "Tidak ada guru yang sesuai dengan pencarian."
                                                                : "Tambahkan akun guru pertama untuk memulai."}
                                                        </p>


                                                        {!search && (
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    setShowAddForm(
                                                                        true
                                                                    )
                                                                }
                                                                className="mt-5 rounded-xl bg-[#087b68] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#066b5d]"
                                                            >
                                                                + Tambah Guru
                                                            </button>
                                                        )}

                                                    </td>

                                                </tr>

                                            )}

                                        </tbody>

                                    </table>

                                </div>


                                {/* =================================================
                                    PAGINATION
                                ================================================== */}

                                {teachers?.links?.length > 3 && (

                                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#e5eeee] px-6 py-5">

                                        <p className="text-sm text-slate-500">

                                            Menampilkan{" "}

                                            <span className="font-semibold text-[#123b49]">
                                                {teachers.from || 0}
                                            </span>{" "}

                                            -{" "}

                                            <span className="font-semibold text-[#123b49]">
                                                {teachers.to || 0}
                                            </span>{" "}

                                            dari{" "}

                                            <span className="font-semibold text-[#123b49]">
                                                {teachers.total || 0}
                                            </span>{" "}

                                            guru

                                        </p>


                                        <div className="flex flex-wrap gap-1">

                                            {teachers.links.map(
                                                (link, index) => (

                                                    <button
                                                        key={index}
                                                        type="button"
                                                        disabled={!link.url}
                                                        onClick={() => {

                                                            if (link.url) {

                                                                router.get(
                                                                    link.url,
                                                                    {},
                                                                    {
                                                                        preserveState: true,
                                                                        preserveScroll: true,
                                                                    }
                                                                );

                                                            }

                                                        }}
                                                        dangerouslySetInnerHTML={{
                                                            __html: link.label,
                                                        }}
                                                        className={`min-w-9 rounded-lg px-3 py-2 text-sm transition ${
                                                            link.active
                                                                ? "bg-[#087b68] font-bold text-white"
                                                                : "text-slate-600 hover:bg-[#f3f9f8]"
                                                        } ${
                                                            !link.url
                                                                ? "cursor-not-allowed opacity-40"
                                                                : ""
                                                        }`}
                                                    />

                                                )
                                            )}

                                        </div>

                                    </div>

                                )}

                            </div>

                        </div>

                    </section>

                </main>


                {/* =====================================================
                    MODAL TAMBAH GURU
                ====================================================== */}

                {showAddForm && (

                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#07384b]/50 p-4 backdrop-blur-sm">

                        <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">


                            {/* =================================================
                                MODAL HEADER
                            ================================================== */}

                            <div className="flex items-center justify-between border-b border-[#e5eeee] px-6 py-5 sm:px-7">

                                <div>

                                    <h2 className="text-xl font-bold text-[#123b49]">
                                        Tambah Guru
                                    </h2>

                                    <p className="mt-1 text-sm text-slate-500">
                                        Buat akun baru untuk guru.
                                    </p>

                                </div>


                                <button
                                    type="button"
                                    onClick={closeForm}
                                    className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                                >
                                    ×
                                </button>

                            </div>


                            {/* =================================================
                                FORM
                            ================================================== */}

                            <form
                                onSubmit={submitTeacher}
                                className="space-y-5 p-6 sm:p-7"
                            >

                                {/* ==============================
                                    NAMA
                                =============================== */}

                                <div>

                                    <label
                                        htmlFor="teacher-name"
                                        className="mb-2 block text-sm font-semibold text-[#123b49]"
                                    >
                                        Nama Lengkap
                                    </label>

                                    <input
                                        id="teacher-name"
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData(
                                                "name",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Contoh: Budi Santoso"
                                        className="w-full rounded-xl border border-[#cddedb] px-4 py-3 text-sm outline-none transition focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                                    />

                                    {errors.name && (
                                        <p className="mt-2 text-xs text-red-600">
                                            {errors.name}
                                        </p>
                                    )}

                                </div>


                                {/* ==============================
                                    EMAIL
                                =============================== */}

                                <div>

                                    <label
                                        htmlFor="teacher-email"
                                        className="mb-2 block text-sm font-semibold text-[#123b49]"
                                    >
                                        Email
                                    </label>

                                    <input
                                        id="teacher-email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData(
                                                "email",
                                                e.target.value
                                            )
                                        }
                                        placeholder="contoh@email.com"
                                        className="w-full rounded-xl border border-[#cddedb] px-4 py-3 text-sm outline-none transition focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                                    />

                                    {errors.email && (
                                        <p className="mt-2 text-xs text-red-600">
                                            {errors.email}
                                        </p>
                                    )}

                                </div>


                                {/* ==============================
                                    PASSWORD
                                =============================== */}

                                <div>

                                    <label
                                        htmlFor="teacher-password"
                                        className="mb-2 block text-sm font-semibold text-[#123b49]"
                                    >
                                        Password
                                    </label>

                                    <input
                                        id="teacher-password"
                                        type="password"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData(
                                                "password",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Minimal 8 karakter"
                                        className="w-full rounded-xl border border-[#cddedb] px-4 py-3 text-sm outline-none transition focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                                    />

                                    {errors.password && (
                                        <p className="mt-2 text-xs text-red-600">
                                            {errors.password}
                                        </p>
                                    )}

                                </div>


                                {/* ==============================
                                    CONFIRM PASSWORD
                                =============================== */}

                                <div>

                                    <label
                                        htmlFor="teacher-password-confirmation"
                                        className="mb-2 block text-sm font-semibold text-[#123b49]"
                                    >
                                        Konfirmasi Password
                                    </label>

                                    <input
                                        id="teacher-password-confirmation"
                                        type="password"
                                        value={
                                            data.password_confirmation
                                        }
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Masukkan password kembali"
                                        className="w-full rounded-xl border border-[#cddedb] px-4 py-3 text-sm outline-none transition focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                                    />

                                    {errors.password_confirmation && (
                                        <p className="mt-2 text-xs text-red-600">
                                            {
                                                errors.password_confirmation
                                            }
                                        </p>
                                    )}

                                </div>


                                {/* ==============================
                                    INFO
                                =============================== */}

                                <div className="rounded-xl bg-[#f3f9f8] p-4 text-xs leading-5 text-slate-500">

                                    Akun yang dibuat dari halaman ini
                                    akan otomatis memiliki role{" "}

                                    <span className="font-bold text-[#087b68]">
                                        Guru
                                    </span>

                                    .

                                </div>


                                {/* ==============================
                                    ACTIONS
                                =============================== */}

                                <div className="flex flex-col-reverse gap-3 border-t border-[#e5eeee] pt-5 sm:flex-row sm:justify-end">

                                    <button
                                        type="button"
                                        onClick={closeForm}
                                        className="rounded-xl border border-[#cddedb] px-5 py-3 text-sm font-semibold text-[#123b49] transition hover:bg-[#f3f9f8]"
                                    >
                                        Batal
                                    </button>


                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="rounded-xl bg-[#087b68] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#066b5d] disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {processing
                                            ? "Menyimpan..."
                                            : "Tambah Guru"}
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                )}


                {/* =====================================================
                    MODAL EDIT PASSWORD GURU
                ====================================================== */}

                {editingTeacher && (

                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#07384b]/50 p-4 backdrop-blur-sm">

                        <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">


                            {/* =================================================
                                MODAL HEADER
                            ================================================== */}

                            <div className="flex items-center justify-between border-b border-[#e5eeee] px-6 py-5 sm:px-7">

                                <div>

                                    <h2 className="text-xl font-bold text-[#123b49]">
                                        Edit Password Guru
                                    </h2>

                                    <p className="mt-1 text-sm text-slate-500">
                                        Ubah password akun{" "}
                                        <span className="font-semibold text-[#123b49]">
                                            {editingTeacher.name}
                                        </span>
                                        .
                                    </p>

                                </div>


                                <button
                                    type="button"
                                    onClick={closeEditForm}
                                    className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                                >
                                    ×
                                </button>

                            </div>


                            {/* =================================================
                                FORM
                            ================================================== */}

                            <form
                                onSubmit={submitEditPassword}
                                className="space-y-5 p-6 sm:p-7"
                            >

                                {/* ==============================
                                    EMAIL (READ ONLY)
                                =============================== */}

                                <div>

                                    <label
                                        htmlFor="edit-teacher-email"
                                        className="mb-2 block text-sm font-semibold text-[#123b49]"
                                    >
                                        Email
                                    </label>

                                    <input
                                        id="edit-teacher-email"
                                        type="email"
                                        value={editingTeacher.email}
                                        readOnly
                                        disabled
                                        className="w-full cursor-not-allowed rounded-xl border border-[#cddedb] bg-[#f3f9f8] px-4 py-3 text-sm text-slate-500 outline-none"
                                    />

                                </div>


                                {/* ==============================
                                    PASSWORD BARU
                                =============================== */}

                                <div>

                                    <label
                                        htmlFor="edit-teacher-password"
                                        className="mb-2 block text-sm font-semibold text-[#123b49]"
                                    >
                                        Password Baru
                                    </label>

                                    <input
                                        id="edit-teacher-password"
                                        type="password"
                                        value={editData.password}
                                        onChange={(e) =>
                                            setEditData(
                                                "password",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Minimal 8 karakter"
                                        className="w-full rounded-xl border border-[#cddedb] px-4 py-3 text-sm outline-none transition focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                                    />

                                    {editErrors.password && (
                                        <p className="mt-2 text-xs text-red-600">
                                            {editErrors.password}
                                        </p>
                                    )}

                                </div>


                                {/* ==============================
                                    KONFIRMASI PASSWORD
                                =============================== */}

                                <div>

                                    <label
                                        htmlFor="edit-teacher-password-confirmation"
                                        className="mb-2 block text-sm font-semibold text-[#123b49]"
                                    >
                                        Konfirmasi Password Baru
                                    </label>

                                    <input
                                        id="edit-teacher-password-confirmation"
                                        type="password"
                                        value={
                                            editData.password_confirmation
                                        }
                                        onChange={(e) =>
                                            setEditData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Masukkan password kembali"
                                        className="w-full rounded-xl border border-[#cddedb] px-4 py-3 text-sm outline-none transition focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                                    />

                                    {editErrors.password_confirmation && (
                                        <p className="mt-2 text-xs text-red-600">
                                            {
                                                editErrors.password_confirmation
                                            }
                                        </p>
                                    )}

                                </div>


                                {/* ==============================
                                    ACTIONS
                                =============================== */}

                                <div className="flex flex-col-reverse gap-3 border-t border-[#e5eeee] pt-5 sm:flex-row sm:justify-end">

                                    <button
                                        type="button"
                                        onClick={closeEditForm}
                                        className="rounded-xl border border-[#cddedb] px-5 py-3 text-sm font-semibold text-[#123b49] transition hover:bg-[#f3f9f8]"
                                    >
                                        Batal
                                    </button>


                                    <button
                                        type="submit"
                                        disabled={editProcessing}
                                        className="rounded-xl bg-[#087b68] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#066b5d] disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {editProcessing
                                            ? "Menyimpan..."
                                            : "Simpan Password"}
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                )}

            </div>
        </>
    );
}