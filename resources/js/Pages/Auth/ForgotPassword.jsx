import { Head, Link, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <>
            <Head title="Lupa Password | GeoBot" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">

                {/* NAVBAR */}
                <header className="border-b border-[#d7e5e3] bg-white">
                    <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-3 sm:px-10">

                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e1f5ed] text-2xl">
                                🌍
                            </div>

                            <div>
                                <h1 className="text-xl font-bold tracking-wide text-[#07384b]">
                                    GeoBot
                                </h1>

                                <p className="hidden text-xs text-gray-500 sm:block">
                                    Ruang Belajar Köppen
                                </p>
                            </div>
                        </Link>

                        <Link
                            href={route('login')}
                            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-[#07384b] transition hover:bg-[#e1f5ed]"
                        >
                            Kembali ke Login
                        </Link>
                    </div>
                </header>

                {/* MAIN */}
                <main className="flex items-center justify-center px-4 py-6 sm:px-8 sm:py-8">

                    <div className="grid w-full max-w-[1700px] overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-xl md:grid-cols-2">

                        {/* PANEL KIRI */}
                        <section className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-[#07384b] via-[#075766] to-[#087b70] p-8 text-white md:flex lg:p-12">

                            {/* Dekorasi */}
                            <div className="absolute -right-24 -top-20 h-72 w-72 rounded-full border border-white/10" />
                            <div className="absolute -right-12 -top-8 h-52 w-52 rounded-full border border-white/10" />
                            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-white/10" />

                            {/* Konten */}
                            <div className="relative z-10">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-3xl">
                                    🌍
                                </div>

                                <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#a8e5ce]">
                                    Media Pembelajaran Kelas X
                                </p>

                                <h2 className="mt-4 text-3xl font-extrabold leading-tight lg:text-4xl">
                                    Kembali
                                    <span className="mt-2 block text-[#d9f99d]">
                                        Belajar Bersama GeoBot
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-md leading-relaxed text-[#d0e4e7]">
                                    Jangan khawatir jika lupa password.
                                    Pulihkan akses akunmu agar kamu dapat
                                    melanjutkan pembelajaran klasifikasi iklim Köppen.
                                </p>
                            </div>

                            {/* Informasi bawah */}
                            <div className="relative z-10 mt-6 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                                <p className="text-sm font-semibold text-[#d9f99d]">
                                    Jelajahi Iklim Dunia
                                </p>

                                <p className="mt-2 text-sm leading-relaxed text-[#d0e4e7]">
                                    Pelajari pola suhu, curah hujan, dan
                                    karakteristik berbagai wilayah melalui
                                    media pembelajaran interaktif.
                                </p>
                            </div>

                            {/* Pola dekoratif */}
                            <div
                                className="pointer-events-none absolute inset-0 opacity-20"
                                style={{
                                    backgroundImage:
                                        'radial-gradient(circle, #a6d5df 1px, transparent 1px)',
                                    backgroundSize: '14px 14px',
                                }}
                            />
                        </section>

                        {/* PANEL KANAN - FORM LUPA PASSWORD */}
                        <section className="flex items-center justify-center px-6 py-10 sm:px-10 md:px-12 lg:px-14">

                            <div className="w-full max-w-lg">

                                {/* Header Form */}
                                <div className="mb-7">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e1f5ed] text-2xl md:hidden">
                                        🌍
                                    </div>

                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                        Pemulihan Akun
                                    </p>

                                    <h2 className="mt-2 text-3xl font-extrabold text-[#123b49]">
                                        Lupa Password?
                                    </h2>

                                    <p className="mt-3 leading-relaxed text-gray-500">
                                        Masukkan alamat email yang terdaftar.
                                        Kami akan mengirimkan tautan untuk
                                        mengatur ulang password akunmu.
                                    </p>
                                </div>

                                {/* Status */}
                                {status && (
                                    <div className="mb-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm leading-relaxed text-green-700">
                                        {status}
                                    </div>
                                )}

                                {/* FORM */}
                                <form onSubmit={submit} className="space-y-5">

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
                                            autoComplete="email"
                                            autoFocus
                                            required
                                            onChange={(e) =>
                                                setData('email', e.target.value)
                                            }
                                            placeholder="nama@email.com"
                                            className={`w-full rounded-xl border bg-[#f8fcfb] px-4 py-3.5 text-sm text-[#123b49] outline-none transition placeholder:text-gray-400 focus:border-[#16805f] focus:ring-4 focus:ring-[#16805f]/10 ${
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

                                    {/* Tombol Kirim */}
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#087b68] px-5 py-3.5 font-bold text-white shadow-sm transition hover:bg-[#066653] disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {processing
                                            ? 'Mengirim...'
                                            : 'Kirim Tautan Reset Password'}

                                        {!processing && (
                                            <span className="text-xl">›</span>
                                        )}
                                    </button>
                                </form>

                                {/* Footer Form */}
                                <div className="mt-7 border-t border-[#e2ecea] pt-5 text-center">
                                    <p className="text-sm text-gray-500">
                                        Ingat password kamu?
                                    </p>

                                    <Link
                                        href={route('login')}
                                        className="mt-2 inline-flex font-semibold text-[#087b68] transition hover:text-[#066653] hover:underline"
                                    >
                                        Kembali ke halaman Login
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>

                {/* FOOTER */}
                <footer className="border-t border-[#d7e5e3] bg-white px-6 py-3 text-center">
                    <p className="text-xs text-gray-500">
                        GeoBot · Media Pembelajaran Klasifikasi Iklim Köppen
                    </p>
                </footer>
            </div>
        </>
    );
}