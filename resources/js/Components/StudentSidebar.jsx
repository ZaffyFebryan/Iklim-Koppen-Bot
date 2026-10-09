import React from "react";
import { Link, router, usePage } from "@inertiajs/react";

export default function StudentSidebar() {
    const { auth } = usePage().props;
    const user = auth?.user;

    const currentUrl = usePage().url;

    const roleLabel = user?.role === "teacher" ? "Guru" : "Siswa";

    const avatarUrl = user?.avatar_url ?? null;

    const initial = user?.name
        ? user.name.charAt(0).toUpperCase()
        : "U";

    /*
    |--------------------------------------------------------------------------
    | Cek halaman aktif
    |--------------------------------------------------------------------------
    */

    const isActive = (path) => {
        return currentUrl.startsWith(path);
    };

    /*
    |--------------------------------------------------------------------------
    | Menu Sidebar
    |--------------------------------------------------------------------------
    */

    const menuItems = [
        {
            icon: "⌂",
            label: "Beranda",
            href: route("student.dashboard"),
            active: isActive("/student/dashboard"),
            type: "link",
        },
        {
            icon: "☷",
            label: "Petunjuk",
            href: route("student.guide"),
            active: isActive("/student/guide"),
            type: "link",
        },
        {
            icon: "◎",
            label: "Tujuan Belajar",
            href: route("student.objectives"),
            active: isActive("/student/objectives"),
            type: "link",
        },
        {
            icon: "☼",
            label: "Materi Köppen",
            href: route("student.material"),
            active:
                isActive("/student/material") ||
                isActive("/student/modul"),
            type: "link",
        },
        {
            icon: "◇",
            label: "Tantangan",
            href: route("student.challenge"),
            active: isActive("/student/challenge"),
            type: "link",
        },
        {
            icon: "▥",
            label: "Hasil Skor",
            href: route("student.scores"),
            active: isActive("/student/scores"),
            type: "link",
        },
        {
            icon: "ⓘ",
            label: "Chat AI Bot",
            href: route("student.chatbot"),
            active: isActive("/student/chatbot"),
            type: "link",
        },
    ];

    /*
    |--------------------------------------------------------------------------
    | Logout
    |--------------------------------------------------------------------------
    */

    const handleLogout = () => {
        router.post(route("logout"));
    };

    return (
        <>
            {/* =========================================================
                DESKTOP SIDEBAR
            ========================================================== */}
            <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col bg-gradient-to-b from-[#07384b] to-[#087b70] text-white md:flex">

                {/* =====================================================
                    LOGO
                ====================================================== */}
                <div className="px-6 pt-7">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-2xl">
                            🌍
                        </div>

                        <div>
                            <h1 className="text-xl font-bold tracking-wide">
                                IklimKöppenBot
                            </h1>

                            <p className="mt-0.5 text-xs text-teal-100">
                                Media Pembelajaran Iklim
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mx-4 mt-6 border-t border-white/20" />

                {/* =====================================================
                    MENU
                ====================================================== */}
                <div className="px-4 pt-5">
                    <p className="px-3 text-xs font-bold uppercase tracking-[0.15em] text-teal-100/80">
                        Ruang Belajar Köppen
                    </p>

                    <nav className="mt-3 space-y-1">
                        {menuItems.map((item) => {
                            const className = `flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                                item.active
                                    ? "bg-[#e8f8f1] font-semibold text-[#07384b] shadow-sm"
                                    : "text-teal-50 hover:bg-white/10 hover:text-white"
                            }`;

                            /*
                            |--------------------------------------------------------------------------
                            | Menu berupa route
                            |--------------------------------------------------------------------------
                            */

                            if (item.type === "link") {
                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className={className}
                                    >
                                        <span className="w-5 text-center text-xl">
                                            {item.icon}
                                        </span>

                                        <span>{item.label}</span>
                                    </Link>
                                );
                            }

                            /*
                            |--------------------------------------------------------------------------
                            | Menu berupa anchor
                            |--------------------------------------------------------------------------
                            */

                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={className}
                                >
                                    <span className="w-5 text-center text-xl">
                                        {item.icon}
                                    </span>

                                    <span>{item.label}</span>
                                </a>
                            );
                        })}
                    </nav>
                </div>

                {/* =====================================================
                    PROFIL + LOGOUT
                ====================================================== */}
                <div className="mt-auto p-4">

                    {/* Profile */}
                    <Link
                        href={route("student.profile")}
                        className={`mb-3 flex items-center gap-3 rounded-xl border p-3 transition ${
                            isActive("/student/profile")
                                ? "border-white/30 bg-white/20"
                                : "border-white/20 bg-white/10 hover:bg-white/20"
                        }`}
                    >
                        {/* Avatar */}
                        {avatarUrl ? (
                            <img
                                src={avatarUrl}
                                alt="Foto profil"
                                className="h-10 w-10 shrink-0 rounded-full object-cover"
                            />
                        ) : (
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d9f99d] font-bold text-[#07384b]">
                                {initial}
                            </div>
                        )}

                        {/* User Info */}
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold">
                                {user?.name || "Siswa"}
                            </p>

                            <p className="truncate text-xs text-teal-100">
                                {roleLabel} · Profil Saya
                            </p>
                        </div>

                        <span className="text-lg">
                            ›
                        </span>
                    </Link>

                    {/* Logout */}
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="w-full rounded-xl border border-white/20 px-4 py-2.5 text-left text-sm text-white transition hover:bg-white/10"
                    >
                        ↪ Keluar
                    </button>
                </div>
            </aside>

            {/* =========================================================
                MOBILE TOP BAR
            ========================================================== */}
            <div className="sticky top-0 z-40 border-b border-white/10 bg-gradient-to-r from-[#07384b] to-[#087b70] text-white md:hidden">
                <div className="flex items-center justify-between px-4 py-3">

                    {/* Logo */}
                    <Link
                        href={route("student.dashboard")}
                        className="flex items-center gap-3"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-xl">
                            🌍
                        </div>

                        <div>
                            <p className="text-base font-bold">
                                IklimKöppenBot
                            </p>

                            <p className="text-[11px] text-teal-100">
                                Media Pembelajaran Iklim
                            </p>
                        </div>
                    </Link>

                    {/* Profile */}
                    <Link
                        href={route("student.profile")}
                        className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#d9f99d] font-bold text-[#07384b]"
                    >
                        {avatarUrl ? (
                            <img
                                src={avatarUrl}
                                alt="Foto profil"
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            initial
                        )}
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex gap-1 overflow-x-auto px-3 pb-3">
                    {menuItems
                        .filter((item) => item.type === "link")
                        .map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`whitespace-nowrap rounded-xl px-3 py-2 text-xs font-medium transition ${
                                    item.active
                                        ? "bg-white text-[#07384b]"
                                        : "bg-white/10 text-teal-50 hover:bg-white/20"
                                }`}
                            >
                                <span className="mr-1.5">
                                    {item.icon}
                                </span>

                                {item.label}
                            </Link>
                        ))}
                </nav>
            </div>
        </>
    );
}