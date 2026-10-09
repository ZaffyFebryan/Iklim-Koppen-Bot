import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Login | GeoBot" />

            <div className="flex min-h-screen flex-col bg-[#f3f9f8] text-[#123b49] lg:h-screen lg:min-h-0 lg:overflow-hidden">

                {/* NAVBAR */}
                <header className="shrink-0 border-b border-[#d7e5e3] bg-white">
                    <div className="mx-auto flex w-full max-w-[1700px] items-center justify-between px-5 py-3 sm:px-8 lg:px-12">

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e1f5ed] text-2xl">
                                🌍
                            </div>

                            <div>
                                <h1 className="text-lg font-bold tracking-wide text-[#07384b] sm:text-xl">
                                    GeoBot
                                </h1>

                                <p className="hidden text-xs text-gray-500 sm:block">
                                    Ruang Belajar Köppen
                                </p>
                            </div>
                        </Link>

                        <Link
                            href="/"
                            className="rounded-xl px-4 py-2 text-sm font-semibold text-[#07384b] transition hover:bg-[#e1f5ed]"
                        >
                            Kembali ke Beranda
                        </Link>
                    </div>
                </header>

                {/* MAIN */}
                <main className="flex flex-1 items-center justify-center px-4 py-5 sm:px-8 lg:min-h-0 lg:py-4">

                    <div className="grid w-full max-w-[1700px] overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-xl lg:h-full lg:min-h-0 lg:grid-cols-2">

                        {/* PANEL KIRI */}
                        <section className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-[#07384b] via-[#075766] to-[#087b70] p-8 text-white md:flex lg:min-h-0 lg:p-10 xl:p-14">

                            {/* Dekorasi */}
                            <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full border border-white/10" />
                            <div className="pointer-events-none absolute -right-12 -top-8 h-52 w-52 rounded-full border border-white/10" />
                            <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-white/10" />

                            {/* Pola titik */}
                            <div
                                className="pointer-events-none absolute inset-0 opacity-20"
                                style={{
                                    backgroundImage:
                                        'radial-gradient(circle, #a6d5df 1px, transparent 1px)',
                                    backgroundSize: '14px 14px',
                                }}
                            />

                            <div className="relative z-10">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-3xl">
                                    🌍
                                </div>

                                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#a8e5ce]">
                                    Media Pembelajaran Kelas X
                                </p>

                                <h2 className="mt-3 text-3xl font-extrabold leading-tight lg:text-4xl xl:text-5xl">
                                    Selamat Datang
                                    <span className="mt-2 block text-[#d9f99d]">
                                        di GeoBot
                                    </span>
                                </h2>

                                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#d0e4e7] lg:text-base xl:text-lg">
                                    Masuk ke ruang belajar untuk menjelajahi
                                    klasifikasi iklim Köppen melalui materi,
                                    tantangan interaktif, dan evaluasi hasil belajar.
                                </p>
                            </div>

                            {/* Informasi bawah */}
                            <div className="relative z-10 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                                <p className="text-sm font-semibold text-[#d9f99d]">
                                    Jelajahi Iklim Dunia
                                </p>

                                <p className="mt-2 text-sm leading-relaxed text-[#d0e4e7]">
                                    Pahami hubungan suhu, curah hujan, dan
                                    karakteristik berbagai wilayah.
                                </p>
                            </div>
                        </section>

                        {/* PANEL KANAN - FORM LOGIN */}
                        <section className="flex items-center justify-center px-6 py-7 sm:px-10 lg:min-h-0 lg:px-12 lg:py-6 xl:px-16">

                            <div className="w-full max-w-xl">

                                {/* Header Form */}
                                <div className="mb-5 lg:mb-6">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e1f5ed] text-2xl md:hidden">
                                        🌍
                                    </div>

                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                        Ruang Belajar Köppen
                                    </p>

                                    <h2 className="mt-2 text-2xl font-extrabold text-[#123b49] sm:text-3xl">
                                        Masuk ke Akun
                                    </h2>

                                    <p className="mt-2 text-sm leading-relaxed text-gray-500 sm:text-base">
                                        Masukkan email dan password untuk
                                        melanjutkan pembelajaran.
                                    </p>
                                </div>

                                {/* Status */}
                                {status && (
                                    <div className="mb-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                                        {status}
                                    </div>
                                )}

                                {/* FORM */}
                                <form onSubmit={submit} className="space-y-4 lg:space-y-5">

                                    {/* Email */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-semibold text-[#123b49]"
                                        >
                                            Alamat Email
                                        </label>

                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            autoComplete="username"
                                            autoFocus
                                            required
                                            onChange={(e) =>
                                                setData('email', e.target.value)
                                            }
                                            placeholder="nama@email.com"
                                            className={`w-full rounded-xl border bg-[#f8fcfb] px-4 py-3 text-sm text-[#123b49] outline-none transition focus:border-[#16805f] focus:ring-4 focus:ring-[#16805f]/10 ${
                                                errors.email
                                                    ? 'border-red-400'
                                                    : 'border-[#c8dcda]'
                                            }`}
                                        />

                                        {errors.email && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="mb-2 block text-sm font-semibold text-[#123b49]"
                                        >
                                            Password
                                        </label>

                                        <input
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            autoComplete="current-password"
                                            required
                                            onChange={(e) =>
                                                setData('password', e.target.value)
                                            }
                                            placeholder="Masukkan password"
                                            className={`w-full rounded-xl border bg-[#f8fcfb] px-4 py-3 text-sm text-[#123b49] outline-none transition focus:border-[#16805f] focus:ring-4 focus:ring-[#16805f]/10 ${
                                                errors.password
                                                    ? 'border-red-400'
                                                    : 'border-[#c8dcda]'
                                            }`}
                                        />

                                        {errors.password && (
                                            <p className="mt-2 text-sm text-red-600">
                                                {errors.password}
                                            </p>
                                        )}
                                    </div>

                                    {/* Remember + Forgot Password */}
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                                        <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                                            <input
                                                type="checkbox"
                                                name="remember"
                                                checked={data.remember}
                                                onChange={(e) =>
                                                    setData(
                                                        'remember',
                                                        e.target.checked
                                                    )
                                                }
                                                className="h-4 w-4 rounded border-[#c8dcda] text-[#087b68] focus:ring-[#16805f]"
                                            />

                                            Ingat saya
                                        </label>

                                        {canResetPassword && (
                                            <Link
                                                href={route('password.request')}
                                                className="text-sm font-semibold text-[#087b68] transition hover:text-[#066653] hover:underline"
                                            >
                                                Lupa password?
                                            </Link>
                                        )}
                                    </div>

                                    {/* Tombol Login */}
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#087b68] px-5 py-3 font-bold text-white shadow-sm transition hover:bg-[#066653] disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {processing ? 'Memproses...' : 'Masuk'}

                                        {!processing && (
                                            <span className="text-xl">›</span>
                                        )}
                                    </button>
                                </form>

                                {/* Footer Form */}
                                <div className="mt-6 border-t border-[#e2ecea] pt-4 text-center lg:mt-7">
                                    <p className="text-sm text-gray-500">
                                        Belum memiliki akun?
                                    </p>

                                    <Link
                                        href={route('register')}
                                        className="mt-2 inline-flex font-semibold text-[#087b68] transition hover:text-[#066653] hover:underline"
                                    >
                                        Daftar akun baru
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>

                {/* FOOTER */}
                <footer className="shrink-0 border-t border-[#d7e5e3] bg-white px-6 py-2.5 text-center">
                    <p className="text-xs text-gray-500">
                        GeoBot · Media Pembelajaran Klasifikasi Iklim Köppen
                    </p>
                </footer>
            </div>
        </>
    );
}