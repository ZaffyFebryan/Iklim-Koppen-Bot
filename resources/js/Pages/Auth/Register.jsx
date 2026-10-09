import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Daftar Akun | GeoBot" />

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
                    </div>
                </header>

                {/* MAIN */}
                <main className="flex items-center justify-center px-4 py-6 sm:px-8 sm:py-8">

                    <div className="grid w-full max-w-[1700px] overflow-hidden rounded-3xl border border-[#d4e4e1] bg-white shadow-xl md:grid-cols-2">

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
                                    Buat akun ke ruang belajar untuk menjelajahi
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

                        {/* PANEL KANAN - FORM REGISTER */}
                        <section className="flex items-center justify-center px-6 py-8 sm:px-10 md:px-12 lg:px-14">

                            <div className="w-full max-w-lg">

                                {/* Header Form */}
                                <div className="mb-6">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e1f5ed] text-2xl md:hidden">
                                        🌍
                                    </div>

                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                        Ruang Belajar Köppen
                                    </p>

                                    <h2 className="mt-2 text-3xl font-extrabold text-[#123b49]">
                                        Buat Akun Baru
                                    </h2>

                                    <p className="mt-2 leading-relaxed text-gray-500">
                                        Daftarkan akunmu untuk mulai menjelajahi
                                        materi pembelajaran GeoBot.
                                    </p>
                                </div>

                                {/* FORM */}
                                <form onSubmit={submit} className="space-y-4">

                                    {/* Nama Lengkap */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-sm font-semibold text-[#123b49]"
                                        >
                                            Nama Lengkap
                                        </label>

                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={data.name}
                                            autoComplete="name"
                                            autoFocus
                                            required
                                            onChange={(e) =>
                                                setData('name', e.target.value)
                                            }
                                            placeholder="Masukkan nama lengkap"
                                            className={`w-full rounded-xl border bg-[#f8fcfb] px-4 py-3 text-sm text-[#123b49] outline-none transition placeholder:text-gray-400 focus:border-[#16805f] focus:ring-4 focus:ring-[#16805f]/10 ${
                                                errors.name
                                                    ? 'border-red-400'
                                                    : 'border-[#c8dcda]'
                                            }`}
                                        />

                                        {errors.name && (
                                            <p className="mt-1.5 text-sm text-red-600">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

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
                                            required
                                            onChange={(e) =>
                                                setData('email', e.target.value)
                                            }
                                            placeholder="nama@email.com"
                                            className={`w-full rounded-xl border bg-[#f8fcfb] px-4 py-3 text-sm text-[#123b49] outline-none transition placeholder:text-gray-400 focus:border-[#16805f] focus:ring-4 focus:ring-[#16805f]/10 ${
                                                errors.email
                                                    ? 'border-red-400'
                                                    : 'border-[#c8dcda]'
                                            }`}
                                        />

                                        {errors.email && (
                                            <p className="mt-1.5 text-sm text-red-600">
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
                                            autoComplete="new-password"
                                            required
                                            onChange={(e) =>
                                                setData('password', e.target.value)
                                            }
                                            placeholder="Buat password"
                                            className={`w-full rounded-xl border bg-[#f8fcfb] px-4 py-3 text-sm text-[#123b49] outline-none transition placeholder:text-gray-400 focus:border-[#16805f] focus:ring-4 focus:ring-[#16805f]/10 ${
                                                errors.password
                                                    ? 'border-red-400'
                                                    : 'border-[#c8dcda]'
                                            }`}
                                        />

                                        {errors.password && (
                                            <p className="mt-1.5 text-sm text-red-600">
                                                {errors.password}
                                            </p>
                                        )}
                                    </div>

                                    {/* Konfirmasi Password */}
                                    <div>
                                        <label
                                            htmlFor="password_confirmation"
                                            className="mb-2 block text-sm font-semibold text-[#123b49]"
                                        >
                                            Konfirmasi Password
                                        </label>

                                        <input
                                            id="password_confirmation"
                                            type="password"
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            autoComplete="new-password"
                                            required
                                            onChange={(e) =>
                                                setData(
                                                    'password_confirmation',
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Ulangi password"
                                            className={`w-full rounded-xl border bg-[#f8fcfb] px-4 py-3 text-sm text-[#123b49] outline-none transition placeholder:text-gray-400 focus:border-[#16805f] focus:ring-4 focus:ring-[#16805f]/10 ${
                                                errors.password_confirmation
                                                    ? 'border-red-400'
                                                    : 'border-[#c8dcda]'
                                            }`}
                                        />

                                        {errors.password_confirmation && (
                                            <p className="mt-1.5 text-sm text-red-600">
                                                {errors.password_confirmation}
                                            </p>
                                        )}
                                    </div>

                                    {/* Tombol Register */}
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#087b68] px-5 py-3.5 font-bold text-white shadow-sm transition hover:bg-[#066653] disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {processing
                                            ? 'Memproses...'
                                            : 'Daftar Akun'}

                                        {!processing && (
                                            <span className="text-xl">›</span>
                                        )}
                                    </button>
                                </form>

                                {/* Footer Form */}
                                <div className="mt-6 border-t border-[#e2ecea] pt-5 text-center">
                                    <p className="text-sm text-gray-500">
                                        Sudah memiliki akun?
                                    </p>

                                    <Link
                                        href={route('login')}
                                        className="mt-2 inline-flex font-semibold text-[#087b68] transition hover:text-[#066653] hover:underline"
                                    >
                                        Masuk ke akun
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