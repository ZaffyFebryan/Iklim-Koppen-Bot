import React, { useEffect, useState } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import AdminSidebar from "@/Components/AdminSidebar";

export default function Profile() {
    const { auth } = usePage().props;
    const user = auth?.user;

    const [preview, setPreview] = useState(
        user?.avatar_url ?? null
    );

    const { data, setData, post, processing, errors, reset } = useForm({
        name: user?.name || "",
        email: user?.email || "",
        avatar: null,
        _method: "PUT",
    });

    useEffect(() => {
        return () => {
            if (preview?.startsWith("blob:")) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    const initial = user?.name
        ? user.name.charAt(0).toUpperCase()
        : "A";

    const handlePhotoChange = (e) => {
        const file = e.target.files?.[0];

        if (!file) {
            return;
        }

        // Validasi sederhana di frontend
        if (!file.type.startsWith("image/")) {
            alert("File yang dipilih harus berupa gambar.");
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            alert("Ukuran foto maksimal 2 MB.");
            return;
        }

        setData("avatar", file);

        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);
    };

    const removePhoto = () => {
        setData("avatar", null);

        if (user?.avatar) {
            setPreview(user.avatar_url ?? null);
        } else {
            setPreview(null);
        }
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.profile.update"), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                // Preview akan mengikuti data terbaru setelah halaman
                // mendapatkan props baru dari Inertia.
            },
        });
    };

    return (
        <>
            <Head title="Profil Admin" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">

                {/* Sidebar */}
                <AdminSidebar />

                {/* Main */}
                <main className="min-h-screen md:ml-64">

                    {/* Header */}
                    <header className="border-b border-[#d7e5e3] bg-white">
                        <div className="flex min-h-[155px] items-center justify-between gap-6 px-6 py-7 sm:px-10">

                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087b68]">
                                    Panel Administrator
                                </p>

                                <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#123b49] sm:text-4xl">
                                    Profil Saya
                                </h1>

                                <p className="mt-2 text-base text-slate-500">
                                    Kelola informasi akun administrator.
                                </p>
                            </div>

                        </div>
                    </header>


                    {/* Content */}
                    <section className="px-5 py-8 sm:px-8 lg:px-10">

                        <div className="mx-auto max-w-7xl">

                            {/* =========================
                                PROFILE HEADER
                            ========================== */}
                            <div className="overflow-hidden rounded-3xl border border-[#d7e5e3] bg-white shadow-sm">

                                {/* Cover */}
                                <div className="h-28 bg-gradient-to-r from-[#07384b] via-[#075969] to-[#087b70] sm:h-32" />

                                {/* Profile Info */}
                                <div className="px-6 pb-7 sm:px-10">

                                    <div className="flex flex-col sm:flex-row sm:items-end sm:gap-7">

                                        {/* Avatar */}
                                        <div className="-mt-12 shrink-0 sm:-mt-14">

                                            <div className="relative">

                                                {preview ? (
                                                    <img
                                                        src={preview}
                                                        alt="Foto profil"
                                                        className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-lg sm:h-32 sm:w-32"
                                                    />
                                                ) : (
                                                    <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-[#d9f99d] text-4xl font-bold text-[#07384b] shadow-lg sm:h-32 sm:w-32">
                                                        {initial}
                                                    </div>
                                                )}

                                                {/* Camera Button */}
                                                <label
                                                    htmlFor="avatar"
                                                    className="absolute bottom-1 right-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-4 border-white bg-[#087b68] text-lg text-white shadow-md transition hover:bg-[#066b5d]"
                                                    title="Ubah foto profil"
                                                >
                                                    📷
                                                </label>

                                                <input
                                                    id="avatar"
                                                    type="file"
                                                    accept="image/png,image/jpeg,image/jpg,image/webp"
                                                    className="hidden"
                                                    onChange={handlePhotoChange}
                                                />

                                            </div>

                                            {errors.avatar && (
                                                <p className="mt-2 text-xs text-red-600">
                                                    {errors.avatar}
                                                </p>
                                            )}

                                        </div>


                                        {/* Name */}
                                        <div className="mt-5 pb-1 sm:mt-0">

                                            <h2 className="text-2xl font-bold text-[#123b49]">
                                                {user?.name || "Administrator"}
                                            </h2>

                                            <p className="mt-1 text-sm text-slate-500">
                                                Administrator
                                            </p>

                                            <p className="mt-2 text-xs text-slate-400">
                                                JPG, PNG, atau WEBP · Maksimal 2 MB
                                            </p>

                                        </div>

                                    </div>

                                </div>
                            </div>


                            {/* =========================
                                PROFILE FORM
                            ========================== */}
                            <div className="mt-8 rounded-3xl border border-[#d7e5e3] bg-white p-6 shadow-sm sm:p-9">

                                <div className="border-b border-[#e5eeee] pb-6">

                                    <h2 className="text-xl font-bold text-[#123b49]">
                                        Informasi Akun
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-slate-500">
                                        Perbarui nama dan alamat email yang
                                        digunakan untuk akun administrator.
                                    </p>

                                </div>


                                <form
                                    onSubmit={submit}
                                    className="mt-8 space-y-7"
                                >

                                    {/* =====================
                                        FOTO PROFIL
                                    ====================== */}
                                    <div className="rounded-2xl border border-[#d7e5e3] bg-[#f8fcfb] p-5 sm:p-6">

                                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                                            {/* Mini Avatar */}
                                            {preview ? (
                                                <img
                                                    src={preview}
                                                    alt="Preview foto profil"
                                                    className="h-20 w-20 rounded-full object-cover ring-4 ring-white shadow-sm"
                                                />
                                            ) : (
                                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#d9f99d] text-2xl font-bold text-[#07384b] ring-4 ring-white shadow-sm">
                                                    {initial}
                                                </div>
                                            )}

                                            <div className="flex-1">

                                                <h3 className="text-sm font-bold text-[#123b49]">
                                                    Foto Profil
                                                </h3>

                                                <p className="mt-1 text-sm leading-5 text-slate-500">
                                                    Gunakan foto yang jelas agar
                                                    profil lebih mudah dikenali.
                                                </p>

                                                <div className="mt-4 flex flex-wrap gap-2">

                                                    <label
                                                        htmlFor="avatar"
                                                        className="cursor-pointer rounded-xl bg-[#087b68] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#066b5d]"
                                                    >
                                                        {preview
                                                            ? "Ubah Foto"
                                                            : "Tambah Foto"}
                                                    </label>

                                                    {data.avatar && (
                                                        <button
                                                            type="button"
                                                            onClick={removePhoto}
                                                            className="rounded-xl border border-[#d7e5e3] bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                                                        >
                                                            Batalkan Foto
                                                        </button>
                                                    )}

                                                </div>

                                            </div>

                                        </div>

                                    </div>


                                    {/* =====================
                                        NAMA
                                    ====================== */}
                                    <div>

                                        <label
                                            htmlFor="name"
                                            className="mb-2.5 block text-sm font-semibold text-[#123b49]"
                                        >
                                            Nama Lengkap
                                        </label>

                                        <input
                                            id="name"
                                            type="text"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData(
                                                    "name",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Masukkan nama lengkap"
                                            className="w-full rounded-xl border border-[#cddedb] bg-white px-4 py-3.5 text-sm text-[#123b49] outline-none transition placeholder:text-slate-400 focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                                        />

                                        {errors.name && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.name}
                                            </p>
                                        )}

                                    </div>


                                    {/* =====================
                                        EMAIL
                                    ====================== */}
                                    <div>

                                        <label
                                            htmlFor="email"
                                            className="mb-2.5 block text-sm font-semibold text-[#123b49]"
                                        >
                                            Email
                                        </label>

                                        <input
                                            id="email"
                                            type="email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData(
                                                    "email",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Masukkan alamat email"
                                            className="w-full rounded-xl border border-[#cddedb] bg-white px-4 py-3.5 text-sm text-[#123b49] outline-none transition placeholder:text-slate-400 focus:border-[#087b68] focus:ring-2 focus:ring-[#087b68]/20"
                                        />

                                        {errors.email && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.email}
                                            </p>
                                        )}

                                    </div>


                                    {/* =====================
                                        ROLE
                                    ====================== */}
                                    <div>

                                        <label className="mb-2.5 block text-sm font-semibold text-[#123b49]">
                                            Role Pengguna
                                        </label>

                                        <div className="flex items-center gap-4 rounded-xl border border-[#d7e5e3] bg-[#f3f9f8] px-4 py-4">

                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d9f99d]">
                                                🛡️
                                            </div>

                                            <div>
                                                <p className="text-sm font-bold text-[#123b49]">
                                                    Administrator
                                                </p>

                                                <p className="mt-0.5 text-xs text-slate-500">
                                                    Memiliki akses ke panel
                                                    administrator
                                                </p>
                                            </div>

                                        </div>

                                    </div>


                                    {/* Info */}
                                    <div className="rounded-2xl border border-[#d7e5e3] bg-[#f3f9f8] p-4 sm:p-5">

                                        <div className="flex gap-3">

                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white">
                                                ℹ️
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold text-[#123b49]">
                                                    Informasi akun
                                                </p>

                                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                                    Perubahan nama, email, dan
                                                    foto profil akan disimpan
                                                    ke akun administrator kamu.
                                                </p>
                                            </div>

                                        </div>

                                    </div>


                                    {/* Buttons */}
                                    <div className="flex flex-col-reverse gap-3 border-t border-[#e5eeee] pt-7 sm:flex-row sm:justify-end">

                                        <Link
                                            href={route("admin.dashboard")}
                                            className="rounded-xl border border-[#cddedb] px-6 py-3 text-center text-sm font-semibold text-[#123b49] transition hover:bg-[#f3f9f8]"
                                        >
                                            Batal
                                        </Link>

                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="rounded-xl bg-[#087b68] px-7 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#066b5d] disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            {processing
                                                ? "Menyimpan..."
                                                : "Simpan Perubahan"}
                                        </button>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </section>
                </main>
            </div>
        </>
    );
}