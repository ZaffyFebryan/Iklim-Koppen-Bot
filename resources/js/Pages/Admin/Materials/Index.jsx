import React, { useState } from "react";

import {
    Head,
    Link,
    router,
    usePage,
} from "@inertiajs/react";

import AdminSidebar from "@/Components/AdminSidebar";

export default function Index({ materials, filters }) {
    const { flash } = usePage().props;

    const [search, setSearch] = useState(
        filters?.search || ""
    );

    const [deletingMaterialId, setDeletingMaterialId] =
        useState(null);


    /*
    |--------------------------------------------------------------------------
    | Search
    |--------------------------------------------------------------------------
    */

    const handleSearch = (e) => {
        e.preventDefault();

        router.get(
            route("admin.materials.index"),
            {
                search,
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
    | Delete
    |--------------------------------------------------------------------------
    */

    const deleteMaterial = (material) => {
        const confirmed = window.confirm(
            `Apakah kamu yakin ingin menghapus materi "${material.title}"?`
        );

        if (!confirmed) {
            return;
        }

        setDeletingMaterialId(material.id);

        router.delete(
            route(
                "admin.materials.destroy",
                material.id
            ),
            {
                preserveScroll: true,

                onFinish: () => {
                    setDeletingMaterialId(null);
                },
            }
        );
    };


    return (
        <>
            <Head title="Materi Pembelajaran" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">

                <AdminSidebar />


                <main className="min-h-screen md:ml-64">

                    {/* HEADER */}

                    <header className="border-b border-[#d7e5e3] bg-white">

                        <div className="flex min-h-[155px] items-center justify-between gap-6 px-6 py-7 sm:px-10">

                            <div>

                                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087b68]">
                                    Panel Administrator
                                </p>

                                <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#123b49] sm:text-4xl">
                                    Materi Pembelajaran
                                </h1>

                                <p className="mt-2 max-w-2xl text-base text-slate-500">
                                    Kelola materi pembelajaran
                                    yang digunakan oleh guru
                                    dan siswa.
                                </p>

                            </div>

                        </div>

                    </header>


                    {/* CONTENT */}

                    <section className="px-5 py-8 sm:px-8 lg:px-10">

                        <div className="mx-auto max-w-7xl">


                            {/* FLASH */}

                            {flash?.success && (
                                <div className="mb-6 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-800">

                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 font-bold">
                                        ✓
                                    </span>

                                    <span>
                                        {flash.success}
                                    </span>

                                </div>
                            )}


                            {/* SUMMARY */}

                            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                                <div className="rounded-2xl border border-[#d7e5e3] bg-white p-6 shadow-sm">

                                    <div className="flex items-start justify-between">

                                        <div>

                                            <p className="text-sm font-medium text-slate-500">
                                                Total Materi
                                            </p>

                                            <p className="mt-2 text-3xl font-bold text-[#123b49]">
                                                {materials?.total || 0}
                                            </p>

                                            <p className="mt-1 text-xs text-slate-400">
                                                Materi pembelajaran
                                                terdaftar
                                            </p>

                                        </div>

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f8f1] text-2xl">
                                            📚
                                        </div>

                                    </div>

                                </div>


                                <div className="rounded-2xl border border-[#d7e5e3] bg-white p-6 shadow-sm">

                                    <div className="flex items-start justify-between">

                                        <div>

                                            <p className="text-sm font-medium text-slate-500">
                                                Modul Utama
                                            </p>

                                            <p className="mt-2 text-xl font-bold text-[#123b49]">
                                                Modul 1–6
                                            </p>

                                            <p className="mt-1 text-xs text-slate-400">
                                                Materi pembelajaran
                                                Köppen
                                            </p>

                                        </div>

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d9f99d] text-2xl">
                                            🎓
                                        </div>

                                    </div>

                                </div>


                                <Link
                                    href={route(
                                        "admin.materials.create"
                                    )}
                                    className="rounded-2xl border border-dashed border-[#9fc8c0] bg-[#f8fcfb] p-6 text-left transition hover:border-[#087b68] hover:bg-white"
                                >

                                    <div className="flex items-start justify-between">

                                        <div>

                                            <p className="text-sm font-medium text-slate-500">
                                                Kelola Materi
                                            </p>

                                            <p className="mt-2 text-xl font-bold text-[#087b68]">
                                                Tambah Materi
                                            </p>

                                            <p className="mt-1 text-xs text-slate-400">
                                                Buat materi baru
                                            </p>

                                        </div>

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087b68] text-xl text-white">
                                            +
                                        </div>

                                    </div>

                                </Link>

                            </div>


                            {/* TABLE */}

                            <div className="mt-7 overflow-hidden rounded-3xl border border-[#d7e5e3] bg-white shadow-sm">

                                <div className="border-b border-[#e5eeee] px-6 py-5 sm:px-7">

                                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                                        <div>

                                            <h2 className="text-xl font-bold text-[#123b49]">
                                                Daftar Materi
                                            </h2>

                                            <p className="mt-1 text-sm text-slate-500">
                                                Materi yang digunakan
                                                bersama oleh guru
                                                dan siswa.
                                            </p>

                                        </div>


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
                                                    placeholder="Cari materi..."
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


                                <div className="overflow-x-auto">

                                    <table className="w-full min-w-[900px]">

                                        <thead>

                                            <tr className="border-b border-[#e5eeee] bg-[#f8fcfb] text-left">

                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                                                    Modul
                                                </th>

                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                                                    Materi
                                                </th>

                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                                                    Status
                                                </th>

                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                                                    Dibuat
                                                </th>

                                                <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
                                                    Aksi
                                                </th>

                                            </tr>

                                        </thead>


                                        <tbody className="divide-y divide-[#edf3f2]">

                                            {materials?.data?.length > 0 ? (

                                                materials.data.map(
                                                    (material) => {

                                                        const isDeleting =
                                                            deletingMaterialId ===
                                                            material.id;

                                                        return (
                                                            <tr
                                                                key={
                                                                    material.id
                                                                }
                                                                className="transition hover:bg-[#f8fcfb]"
                                                            >

                                                                <td className="px-6 py-4">

                                                                    <span className="inline-flex rounded-lg bg-[#e8f8f1] px-3 py-2 text-xs font-bold text-[#087b68]">

                                                                        {material.module_number
                                                                            ? `Modul ${material.module_number}`
                                                                            : "Materi"}

                                                                    </span>

                                                                </td>


                                                                <td className="px-6 py-4">

                                                                    <div className="max-w-md">

                                                                        <p className="font-semibold text-[#123b49]">
                                                                            {
                                                                                material.title
                                                                            }
                                                                        </p>

                                                                        <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                                                                            {
                                                                                material.description ||
                                                                                "Tidak ada deskripsi."
                                                                            }
                                                                        </p>

                                                                    </div>

                                                                </td>


                                                                <td className="px-6 py-4">

                                                                    {material.is_published ? (

                                                                        <span className="inline-flex rounded-full bg-[#e8f8f1] px-3 py-1 text-xs font-bold text-[#087b68]">
                                                                            Dipublikasikan
                                                                        </span>

                                                                    ) : (

                                                                        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                                                                            Draft
                                                                        </span>

                                                                    )}

                                                                </td>


                                                                <td className="px-6 py-4">

                                                                    <p className="text-sm text-slate-500">

                                                                        {material.created_at
                                                                            ? new Date(
                                                                                  material.created_at
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


                                                                <td className="px-6 py-4">

                                                                    <div className="flex justify-center gap-2">

                                                                        <Link
                                                                            href={route(
                                                                                "admin.materials.edit",
                                                                                material.id
                                                                            )}
                                                                            className="rounded-lg border border-[#cddedb] bg-white px-3 py-2 text-xs font-bold text-[#087b68] transition hover:bg-[#e8f8f1]"
                                                                        >
                                                                            Edit
                                                                        </Link>


                                                                        <button
                                                                            type="button"
                                                                            onClick={() =>
                                                                                deleteMaterial(
                                                                                    material
                                                                                )
                                                                            }
                                                                            disabled={
                                                                                isDeleting
                                                                            }
                                                                            className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-bold text-red-600 transition hover:bg-red-100 disabled:opacity-50"
                                                                        >

                                                                            {isDeleting
                                                                                ? "Menghapus..."
                                                                                : "Hapus"}

                                                                        </button>

                                                                    </div>

                                                                </td>

                                                            </tr>
                                                        );
                                                    }
                                                )

                                            ) : (

                                                <tr>

                                                    <td
                                                        colSpan="5"
                                                        className="px-6 py-16 text-center"
                                                    >

                                                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e8f8f1] text-3xl">
                                                            📚
                                                        </div>

                                                        <h3 className="mt-4 font-bold text-[#123b49]">
                                                            Belum ada materi
                                                        </h3>

                                                        <p className="mt-1 text-sm text-slate-500">
                                                            Belum ada materi
                                                            pembelajaran yang
                                                            tersimpan.
                                                        </p>

                                                        <Link
                                                            href={route(
                                                                "admin.materials.create"
                                                            )}
                                                            className="mt-5 inline-flex rounded-xl bg-[#087b68] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#066b5d]"
                                                        >
                                                            + Tambah Materi
                                                        </Link>

                                                    </td>

                                                </tr>

                                            )}

                                        </tbody>

                                    </table>

                                </div>


                                {/* PAGINATION */}

                                {materials?.links?.length > 3 && (

                                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#e5eeee] px-6 py-5">

                                        <p className="text-sm text-slate-500">

                                            Menampilkan{" "}

                                            <span className="font-semibold text-[#123b49]">
                                                {materials.from || 0}
                                            </span>{" "}

                                            -{" "}

                                            <span className="font-semibold text-[#123b49]">
                                                {materials.to || 0}
                                            </span>{" "}

                                            dari{" "}

                                            <span className="font-semibold text-[#123b49]">
                                                {materials.total || 0}
                                            </span>{" "}

                                            materi

                                        </p>


                                        <div className="flex flex-wrap gap-1">

                                            {materials.links.map(
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

            </div>
        </>
    );
}