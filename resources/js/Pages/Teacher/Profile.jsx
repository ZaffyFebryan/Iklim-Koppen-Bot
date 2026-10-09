import React, { useEffect, useRef, useState } from "react";
import { Head, Link, usePage, router, useForm } from "@inertiajs/react";
import TeacherSidebar from "@/Components/TeacherSidebar";

export default function Profile() {
    const { auth, user: pageUser, flash } = usePage().props;
    const user = pageUser ?? auth?.user ?? {};

    const roleLabel = "Guru";

    const [isEditing, setIsEditing] = useState(false);
    const [preview, setPreview] = useState(null);

    const fileInputRef = useRef(null);

    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
    } = useForm({
        name: user?.name ?? "",
        email: user?.email ?? "",
        avatar: null,
        _method: "put",
    });

    const initial = data.name
        ? data.name.charAt(0).toUpperCase()
        : "G";

    const avatarUrl = user?.avatar_url ?? null;

    const displayedAvatar = preview || avatarUrl;

    // Membersihkan URL preview ketika komponen diperbarui atau dilepas.
    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    const handleLogout = () => {
        router.post(route("logout"));
    };

    // Memilih foto profil dan menampilkan preview.
    const handleAvatarChange = (event) => {
        const file = event.target.files?.[0];

        if (!file) return;

        setData("avatar", file);

        if (preview) {
            URL.revokeObjectURL(preview);
        }

        setPreview(URL.createObjectURL(file));
    };

    // Menyimpan perubahan profil.
    const handleSubmit = (event) => {
        event.preventDefault();

        post(route("teacher.profile.update"), {
            forceFormData: true,
            preserveScroll: true,

            onSuccess: () => {
                setIsEditing(false);
                setPreview(null);

                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
            },
        });
    };

    // Membatalkan proses edit.
    const handleCancelEdit = () => {
        reset();
        setPreview(null);
        setIsEditing(false);

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const profileItems = [
        {
            label: "Nama Lengkap",
            value: user?.name ?? "-",
            icon: "♙",
        },
        {
            label: "Username",
            value: user?.username ?? "-",
            icon: "@",
        },
        {
            label: "Email",
            value: user?.email ?? "-",
            icon: "✉",
        },
        {
            label: "Role Pengguna",
            value: roleLabel,
            icon: "▣",
        },
        {
            label: "ID Pengguna",
            value: user?.id ?? "-",
            icon: "#",
        },
    ];

    return (
        <>
            <Head title="Profil Guru - GeoBot" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">
                {/* SIDEBAR DARI COMPONENT BERSAMA */}
                <TeacherSidebar />

                {/* MAIN CONTENT */}
                <main className="min-h-screen min-w-0 lg:ml-72">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

                        {/* HEADER */}
                        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm font-medium text-[#087b68]">
                                    Pengaturan Akun
                                </p>

                                <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#123b49] sm:text-3xl">
                                    Profil Guru
                                </h2>

                                <p className="mt-2 text-sm text-slate-500">
                                    Informasi akun dan identitas pengguna GeoBot.
                                </p>
                            </div>

                            <Link
                                href={route("teacher.dashboard")}
                                className="inline-flex items-center justify-center gap-2 self-start rounded-xl border border-[#d4e4e1] bg-white px-4 py-3 text-sm font-semibold text-[#087b68] shadow-sm transition hover:bg-[#e5f5ef]"
                            >
                                <span>←</span>
                                Kembali ke Dashboard
                            </Link>
                        </header>

                        {/* PROFILE BANNER */}
                        <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-[#07384b] to-[#087b70] p-6 text-white shadow-lg sm:p-8">
                            <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full border-[30px] border-white/5" />
                            <div className="absolute -bottom-24 right-36 h-48 w-48 rounded-full bg-white/5" />

                            <div className="relative z-10 flex flex-col items-center gap-5 sm:flex-row">
                                {/* FOTO PROFIL */}
                                {displayedAvatar ? (
                                    <img
                                        src={displayedAvatar}
                                        alt="Foto profil guru"
                                        className="h-24 w-24 shrink-0 rounded-full border-4 border-white/20 object-cover shadow-lg"
                                    />
                                ) : (
                                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-white/20 bg-[#d9f99d] text-4xl font-bold text-[#123b49] shadow-lg">
                                        {initial}
                                    </div>
                                )}

                                <div className="text-center sm:text-left">
                                    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-teal-50">
                                        Akun Pengajar
                                    </span>

                                    <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                                        {user?.name ?? "Guru"}
                                    </h3>

                                    <p className="mt-1 break-all text-sm text-teal-100">
                                        {user?.email ?? ""}
                                    </p>

                                    <span className="mt-3 inline-flex rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#087b68]">
                                        {roleLabel}
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* INFORMASI AKUN */}
                        <section className="overflow-hidden rounded-2xl border border-[#d4e4e1] bg-white shadow-sm">

                            {/* SECTION HEADER */}
                            <div className="border-b border-[#e7f0ee] px-6 py-5 sm:px-8">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e5f5ef] text-lg text-[#087b68]">
                                        ▣
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-[#123b49]">
                                            Informasi Pengguna
                                        </h3>

                                        <p className="mt-1 text-xs text-slate-500">
                                            Detail identitas akun yang sedang digunakan.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* PESAN SUKSES */}
                            {flash?.success && (
                                <div
                                    role="alert"
                                    className="mx-6 mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 sm:mx-8"
                                >
                                    {flash.success}
                                </div>
                            )}

                            {/* TAMPILAN INFORMASI PROFIL */}
                            {!isEditing ? (
                                <>
                                    <div className="grid grid-cols-1 gap-5 p-6 sm:grid-cols-2 sm:p-8">
                                        {profileItems.map((item) => (
                                            <div
                                                key={item.label}
                                                className="rounded-xl border border-[#e7f0ee] bg-[#fbfdfc] p-4 transition hover:border-[#b8d9ce]"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e5f5ef] text-sm font-semibold text-[#087b68]">
                                                        {item.icon}
                                                    </div>

                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                                            {item.label}
                                                        </p>

                                                        <p className="mt-2 break-words text-sm font-semibold text-[#123b49]">
                                                            {item.value}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* ACTION BUTTONS */}
                                    <div className="flex flex-col gap-3 border-t border-[#e7f0ee] bg-[#fbfdfc] px-6 py-5 sm:flex-row sm:px-8">
                                        <button
                                            type="button"
                                            onClick={() => setIsEditing(true)}
                                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#087b68] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#066456]"
                                        >
                                            ✎ Edit Profil
                                        </button>

                                        <button
                                            type="button"
                                            onClick={handleLogout}
                                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#d4e4e1] bg-white px-5 py-3 text-sm font-semibold text-[#087b68] transition hover:bg-[#e5f5ef]"
                                        >
                                            Keluar dari Akun
                                            <span>→</span>
                                        </button>
                                    </div>
                                </>
                            ) : (
                                /* FORM EDIT PROFIL */
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6 p-6 sm:p-8"
                                >
                                    {/* UPLOAD FOTO */}
                                    <div className="rounded-2xl border border-dashed border-[#b8d9ce] bg-[#fbfdfc] p-5">
                                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                                            {displayedAvatar ? (
                                                <img
                                                    src={displayedAvatar}
                                                    alt="Preview foto profil"
                                                    className="h-24 w-24 shrink-0 rounded-full border-4 border-white object-cover shadow"
                                                />
                                            ) : (
                                                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#d9f99d] text-3xl font-bold text-[#123b49]">
                                                    {initial}
                                                </div>
                                            )}

                                            <div className="flex-1">
                                                <h4 className="font-semibold text-[#123b49]">
                                                    Foto Profil
                                                </h4>

                                                <p className="mt-1 text-sm text-slate-500">
                                                    Pilih foto dengan format JPG,
                                                    JPEG, PNG, atau WEBP.
                                                    Maksimal 2 MB.
                                                </p>

                                                <input
                                                    ref={fileInputRef}
                                                    type="file"
                                                    accept="image/jpeg,image/png,image/webp"
                                                    onChange={handleAvatarChange}
                                                    className="hidden"
                                                />

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        fileInputRef.current?.click()
                                                    }
                                                    className="mt-3 rounded-xl bg-[#087b68] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#066456]"
                                                >
                                                    Pilih Foto
                                                </button>

                                                {data.avatar && (
                                                    <p className="mt-2 text-xs text-[#087b68]">
                                                        Foto baru dipilih:{" "}
                                                        {data.avatar.name}
                                                    </p>
                                                )}

                                                {errors.avatar && (
                                                    <p className="mt-2 text-sm text-red-600">
                                                        {errors.avatar}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* NAMA LENGKAP */}
                                    <div>
                                        <label
                                            htmlFor="profile-name"
                                            className="mb-2 block text-sm font-semibold text-[#123b49]"
                                        >
                                            Nama Lengkap
                                        </label>

                                        <input
                                            id="profile-name"
                                            type="text"
                                            value={data.name}
                                            onChange={(event) =>
                                                setData("name", event.target.value)
                                            }
                                            className="w-full rounded-xl border border-[#d4e4e1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#087b68] focus:ring-4 focus:ring-[#087b68]/10"
                                            placeholder="Masukkan nama lengkap"
                                        />

                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    {/* EMAIL */}
                                    <div>
                                        <label
                                            htmlFor="profile-email"
                                            className="mb-2 block text-sm font-semibold text-[#123b49]"
                                        >
                                            Email
                                        </label>

                                        <input
                                            id="profile-email"
                                            type="email"
                                            value={data.email}
                                            onChange={(event) =>
                                                setData("email", event.target.value)
                                            }
                                            className="w-full rounded-xl border border-[#d4e4e1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#087b68] focus:ring-4 focus:ring-[#087b68]/10"
                                            placeholder="nama@email.com"
                                        />

                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    {/* TOMBOL FORM */}
                                    <div className="flex flex-col-reverse gap-3 border-t border-[#e7f0ee] pt-6 sm:flex-row sm:justify-end">
                                        <button
                                            type="button"
                                            onClick={handleCancelEdit}
                                            disabled={processing}
                                            className="rounded-xl border border-[#d4e4e1] px-5 py-3 text-sm font-semibold text-[#42616a] transition hover:bg-[#f3f9f8] disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            Batal
                                        </button>

                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="rounded-xl bg-[#087b68] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#066456] disabled:cursor-not-allowed disabled:opacity-60"
                                        >
                                            {processing
                                                ? "Menyimpan..."
                                                : "Simpan Perubahan"}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </section>

                        {/* FOOTER */}
                        <footer className="mt-8 rounded-2xl border border-[#d4e4e1] bg-white/70 px-5 py-4">
                            <p className="text-sm leading-relaxed text-slate-500">
                                <span className="font-semibold text-[#123b49]">
                                    GeoBot
                                </span>{" "}
                                — Media pembelajaran klasifikasi iklim Köppen
                                untuk mendukung kegiatan belajar mengajar.
                            </p>
                        </footer>
                    </div>
                </main>
            </div>
        </>
    );
}