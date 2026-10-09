import React from "react";
import { Link, router, usePage } from "@inertiajs/react";

export default function AdminSidebar() {
    const { auth } = usePage().props;
    const user = auth?.user;
    const currentUrl = usePage().url;

    const avatarUrl = user?.avatar_url ?? null;

    const initial = user?.name
        ? user.name.charAt(0).toUpperCase()
        : "A";

    const menuItems = [
        {
            icon: "⌂",
            label: "Dashboard",
            href: route("admin.dashboard"),
            active: currentUrl === "/admin/dashboard",
        },
        {
            icon: "♙",
            label: "Data Siswa",
            href: route("admin.students.index"),
            active: currentUrl.startsWith("/admin/students"),
        },
        {
            icon: "♙",
            label: "Data Guru",
            href: route("admin.teachers.index"),
            active: currentUrl.startsWith("/admin/teachers"),
        },
        {
            icon: "☷",
            label: "Materi Pembelajaran",
            href: route("admin.materials.index"),
            active: currentUrl.startsWith("/admin/materials"),
        },
        {
            icon: "📝",
            label: "Soal Tantangan",
            href: route("admin.challenges.index"),
            active: currentUrl.startsWith("/admin/challenges"),
        },
        {
            icon: "📊",
            label: "Nilai Siswa",
            href: route("admin.grades.index"),
            active: currentUrl.startsWith("/admin/grades"),
        },
    ];

    const logout = (e) => {
        e.preventDefault();

        router.post(route("logout"));
    };

    return (
        <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col bg-gradient-to-b from-[#07384b] to-[#087b70] text-white md:flex">

            {/* =====================================================
                LOGO
            ====================================================== */}
            <div className="px-6 pt-7">
                <Link
                    href={route("admin.dashboard")}
                    className="flex items-center gap-3"
                >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-2xl">
                        🌍
                    </div>

                    <h1 className="text-xl font-bold tracking-wide">
                        IklimKöppenBot
                    </h1>
                </Link>
            </div>


            {/* =====================================================
                DIVIDER
            ====================================================== */}
            <div className="mx-4 mt-6 border-t border-white/20" />


            {/* =====================================================
                MENU
            ====================================================== */}
            <div className="px-4 pt-5">

                <p className="px-3 text-xs font-bold uppercase tracking-[0.15em] text-teal-100/80">
                    Ruang Administrator
                </p>

                <nav className="mt-3 space-y-1">

                    {menuItems.map((item) => {

                        const itemClass = `
                            flex items-center gap-3 rounded-xl px-4 py-3
                            transition
                            ${
                                item.active
                                    ? "bg-[#e8f8f1] font-semibold text-[#07384b]"
                                    : "text-teal-50 hover:bg-white/10"
                            }
                        `;

                        const content = (
                            <>
                                <span className="w-5 text-center text-xl">
                                    {item.icon}
                                </span>

                                <span>
                                    {item.label}
                                </span>
                            </>
                        );


                        /*
                        |--------------------------------------------------------------------------
                        | Active
                        |--------------------------------------------------------------------------
                        */

                        if (item.active) {
                            return (
                                <div
                                    key={item.label}
                                    className={itemClass}
                                    aria-current="page"
                                >
                                    {content}
                                </div>
                            );
                        }


                        /*
                        |--------------------------------------------------------------------------
                        | Internal Admin Page
                        |--------------------------------------------------------------------------
                        */

                        const isInternalPage =
                            item.href &&
                            item.href.startsWith("/admin/");


                        if (isInternalPage) {
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={itemClass}
                                >
                                    {content}
                                </Link>
                            );
                        }


                        /*
                        |--------------------------------------------------------------------------
                        | Coming Soon / Placeholder
                        |--------------------------------------------------------------------------
                        */

                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => {
                                    if (item.href === "#") {
                                        e.preventDefault();
                                    }
                                }}
                                className={itemClass}
                            >
                                {content}
                            </a>
                        );
                    })}

                </nav>
            </div>


            {/* =====================================================
                USER PROFILE
            ====================================================== */}
            <div className="mt-auto p-4">

                <Link
                    href={route("admin.profile")}
                    className={`
                        mb-3 flex items-center gap-3 rounded-xl
                        border p-3 transition
                        ${
                            currentUrl.startsWith("/admin/profile")
                                ? "border-white/30 bg-white/20"
                                : "border-white/20 bg-white/10 hover:bg-white/20"
                        }
                    `}
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
                            {user?.name || "Administrator"}
                        </p>

                        <p className="text-xs text-teal-100">
                            Administrator · Profil Saya
                        </p>

                    </div>


                    {/* Arrow */}
                    <span className="text-lg">
                        ›
                    </span>

                </Link>


                {/* Logout */}
                <button
                    type="button"
                    onClick={logout}
                    className="w-full rounded-xl border border-white/20 px-4 py-2.5 text-left text-sm text-white transition hover:bg-white/10"
                >
                    ↪ Keluar
                </button>

            </div>

        </aside>
    );
}