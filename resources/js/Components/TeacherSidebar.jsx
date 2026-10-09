import React from "react";
import { Link, router, usePage } from "@inertiajs/react";

export default function TeacherSidebar() {
    const { auth } = usePage().props;
    const user = auth?.user;

    const currentUrl = usePage().url;

    const menuItems = [
        {
            title: "Dashboard",
            href: route("teacher.dashboard"),
            icon: "⌂",
            active: currentUrl === "/teacher/dashboard",
        },

        {
            title: "Panduan Penggunaan",
            href: route("teacher.guide"),
            icon: "▤",
            active: currentUrl.startsWith("/teacher/guide"),
        },

        {
            title: "Tujuan Pembelajaran",
            href: route("teacher.objectives"),
            icon: "◎",
            active: currentUrl.startsWith("/teacher/objectives"),
        },

        {
            title: "Materi Pembelajaran",
            href: route("teacher.materials.index"),
            icon: "☼",
            active: currentUrl.startsWith("/teacher/materials"),
        },

        {
            title: "Data Siswa",
            href: route("teacher.students.index"),
            icon: "♙",
            active: currentUrl.startsWith("/teacher/students"),
        },

        {
            title: "Nilai Siswa",
            href: route("teacher.grades.index"),
            icon: "▥",
            active: currentUrl.startsWith("/teacher/grades"),
        },

        {
            title: "Chatbot GeoBot",
            href: route("teacher.chatbot"),
            icon: "☏",
            active: currentUrl.startsWith("/teacher/chatbot"),
        },
    ];

    const handleLogout = () => {
        router.post(route("logout"));
    };

    const linkClass = (item) =>
        `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
            item.active
                ? "bg-white text-[#087b68] shadow-lg"
                : "text-teal-50 hover:bg-white/10"
        }`;

    const iconClass = (item) =>
        `flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-lg ${
            item.active ? "bg-[#e5f5ef]" : "bg-white/10"
        }`;

    return (
        <>
            {/* =========================================================
                SIDEBAR DESKTOP
            ========================================================= */}
            <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col overflow-y-auto bg-gradient-to-b from-[#07384b] to-[#087b70] text-white lg:flex">

                {/* LOGO */}
                <div className="flex items-center gap-3 px-6 py-7">

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                        🌍
                    </div>

                    <div>
                        <h1 className="text-lg font-bold tracking-wide">
                            GeoBot
                        </h1>

                        <p className="text-xs text-teal-100">
                            Media Pembelajaran Iklim
                        </p>
                    </div>

                </div>


                {/* PANEL GURU */}
                <div className="mx-5 rounded-2xl border border-white/15 bg-white/10 p-4">

                    <p className="text-xs font-medium uppercase tracking-wider text-teal-100">
                        Panel Guru
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                        Pembelajaran dan pengelolaan kelas
                    </p>

                </div>


                {/* NAVIGASI */}
                <nav className="mt-7 flex-1 space-y-2 px-4 pb-5">

                    <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-teal-100/70">
                        Menu Utama
                    </p>

                    {menuItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className={linkClass(item)}
                        >
                            <span className={iconClass(item)}>
                                {item.icon}
                            </span>

                            <span className="truncate">
                                {item.title}
                            </span>
                        </Link>
                    ))}

                </nav>


                {/* PROFIL + LOGOUT */}
                <div className="border-t border-white/15 p-5">

                    <div className="flex items-center gap-3">

                        {/* Avatar */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d9f99d] font-bold text-[#123b49]">
                            {(user?.name ?? "G")
                                .charAt(0)
                                .toUpperCase()}
                        </div>


                        {/* User Info */}
                        <div className="min-w-0 flex-1">

                            <p className="truncate text-sm font-semibold">
                                {user?.name ?? "Guru"}
                            </p>

                            <p className="truncate text-xs text-teal-100">
                                {user?.email ?? ""}
                            </p>

                        </div>

                    </div>


                    {/* Profile / Logout */}
                    <div className="mt-4 grid grid-cols-2 gap-2">

                        <Link
                            href={route("teacher.profile")}
                            className="rounded-lg border border-white/20 px-3 py-2 text-center text-xs font-medium transition hover:bg-white/10"
                        >
                            Profil
                        </Link>

                        <button
                            type="button"
                            onClick={handleLogout}
                            className="rounded-lg bg-white/15 px-3 py-2 text-xs font-medium transition hover:bg-white/25"
                        >
                            Keluar
                        </button>

                    </div>

                </div>

            </aside>


            {/* =========================================================
                MOBILE NAVIGATION
            ========================================================= */}
            <div className="border-b border-teal-100 bg-gradient-to-r from-[#07384b] to-[#087b70] text-white lg:hidden">

                {/* Mobile Header */}
                <div className="flex items-center justify-between px-4 py-4">

                    <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-xl">
                            🌍
                        </div>

                        <div>

                            <h1 className="font-bold">
                                GeoBot
                            </h1>

                            <p className="text-xs text-teal-100">
                                Panel Guru
                            </p>

                        </div>

                    </div>


                    {/* Logout */}
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="rounded-lg bg-white/15 px-3 py-2 text-xs font-medium transition hover:bg-white/25"
                    >
                        Keluar
                    </button>

                </div>


                {/* Mobile Menu */}
                <nav className="flex gap-2 overflow-x-auto px-4 pb-4">

                    {menuItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className={`flex shrink-0 items-center rounded-xl px-3 py-2 text-xs font-medium transition ${
                                item.active
                                    ? "bg-white text-[#087b68]"
                                    : "bg-white/10 text-white hover:bg-white/20"
                            }`}
                        >
                            <span className="mr-2">
                                {item.icon}
                            </span>

                            {item.title}
                        </Link>
                    ))}

                </nav>

            </div>
        </>
    );
}