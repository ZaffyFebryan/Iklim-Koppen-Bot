import { Head, Link, useForm } from '@inertiajs/react';

export default function Welcome({ auth, canLogin, canRegister }) {
    const { post, processing } = useForm();

    const user = auth?.user;

    // Arahkan pengguna yang sudah login sesuai role
    const dashboardUrl = user
        ? user.role === 'teacher'
            ? route('teacher.dashboard')
            : route('student.dashboard')
        : route('login');

    const logout = (e) => {
        e.preventDefault();
        post(route('logout'));
    };

    const features = [
        {
            icon: '📘',
            title: 'Materi Köppen',
            description:
                'Pelajari kelompok iklim A, B, C, D, dan E beserta karakteristik suhu, curah hujan, dan contoh wilayahnya.',
        },
        {
            icon: '🌍',
            title: 'Peta dan Persebaran Iklim',
            description:
                'Kenali persebaran berbagai tipe iklim di dunia dan hubungkan karakteristiknya dengan kondisi wilayah.',
        },
        {
            icon: '🧩',
            title: 'Tantangan Interaktif',
            description:
                'Uji pemahaman melalui latihan dan studi kasus klasifikasi iklim berdasarkan data yang diberikan.',
        },
        {
            icon: '📊',
            title: 'Hasil Belajar',
            description:
                'Pantau skor latihan dan perkembangan pemahamanmu selama menggunakan media pembelajaran.',
        },
    ];

    const learningSteps = [
        {
            number: '01',
            title: 'Kenali konsep dasar',
            description:
                'Pahami pengertian klasifikasi iklim dan unsur iklim yang digunakan dalam sistem Köppen.',
        },
        {
            number: '02',
            title: 'Pelajari kelompok iklim',
            description:
                'Pelajari karakteristik setiap kelompok iklim dan kode klasifikasinya.',
        },
        {
            number: '03',
            title: 'Latihan dan evaluasi',
            description:
                'Kerjakan tantangan untuk menerapkan konsep dan melihat hasil belajarmu.',
        },
    ];

    return (
        <>
            <Head title="Media Pembelajaran Iklim Köppen | GeoBot" />

            <div className="min-h-screen bg-[#f3f9f8] text-[#123b49]">

                {/* NAVBAR */}
                <header className="sticky top-0 z-40 border-b border-[#d7e5e3] bg-white/95 backdrop-blur">
                    <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4 sm:px-10">

                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-3"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e1f5ed] text-2xl">
                                🌍
                            </div>

                            <div>
                                <h1 className="text-xl font-bold tracking-wide text-[#07384b]">
                                    IklimKöppenBot
                                </h1>
                                <p className="hidden text-xs text-gray-500 sm:block">
                                    Ruang Belajar untuk Materi Iklim Köppen
                                </p>
                            </div>
                        </Link>

                        {/* Navigasi */}
                        <nav className="flex items-center gap-2 sm:gap-4">
                            {user ? (
                                <>
                                    <Link
                                        href={dashboardUrl}
                                        className="rounded-xl px-4 py-2.5 text-sm font-semibold text-[#07384b] transition hover:bg-[#e1f5ed]"
                                    >
                                        Dashboard
                                    </Link>

                                    <button
                                        type="button"
                                        onClick={logout}
                                        disabled={processing}
                                        className="rounded-xl border border-[#d4e4e1] px-4 py-2.5 text-sm font-semibold text-[#123b49] transition hover:bg-[#f3f9f8] disabled:opacity-60"
                                    >
                                        Keluar
                                    </button>
                                </>
                            ) : (
                                <>
                                    {canLogin && (
                                        <Link
                                            href={route('login')}
                                            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-[#07384b] transition hover:bg-[#e1f5ed]"
                                        >
                                            Login
                                        </Link>
                                    )}

                                    {canRegister && (
                                        <Link
                                            href={route('register')}
                                            className="rounded-xl bg-[#087b68] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#066653]"
                                        >
                                            Daftar
                                        </Link>
                                    )}
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                <main>

                    {/* HERO */}
                    <section className="mx-auto max-w-[1500px] px-6 pb-10 pt-8 sm:px-10 sm:pt-12">
                        <div className="grid overflow-hidden rounded-3xl bg-[#07384b] shadow-xl md:min-h-[430px] md:grid-cols-[1.1fr_0.9fr]">

                            {/* Teks Hero */}
                            <div className="flex flex-col justify-center px-7 py-12 sm:px-12 sm:py-14">
                                <span className="inline-flex w-fit items-center rounded-full border border-[#a8e5ce]/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#a8e5ce]">
                                    Media Pembelajaran Kelas X Fase E
                                </span>

                                <h2 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                                    Jelajahi Yukkk
                                    <span className="block text-[#d9f99d]">
                                        Klasifikasi Iklim Köppen
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-xl text-base leading-relaxed text-[#d0e4e7] sm:text-lg">
                                    Anak-Anak media ini dibuat untuk membantu kalian mempelajari pola suhu dan curah hujan yang ada
                                    dunia melalui materi interaktif, peta persebaran iklim, latihan
                                    studi kasus seperti tantangan, tanya chatbot, dan evaluasi hasil belajar.
                                </p>

                                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                    <Link
                                        href={dashboardUrl}
                                        className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#d9f99d] px-6 py-3.5 font-bold text-[#123b49] shadow-sm transition hover:bg-[#c7ef7e]"
                                    >
                                        {user ? 'Masuk ke Dashboard' : 'Mulai Belajar'}
                                        <span className="text-xl">›</span>
                                    </Link>

                                    {!user && canLogin && (
                                        <Link
                                            href={route('login')}
                                            className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                                        >
                                            Login ke Akun
                                        </Link>
                                    )}
                                </div>

                                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#d0e4e7]">
                                    <span className="flex items-center gap-2">
                                        <span className="text-[#d9f99d]">✓</span>
                                        Materi terstruktur
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <span className="text-[#d9f99d]">✓</span>
                                        Latihan interaktif
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <span className="text-[#d9f99d]">✓</span>
                                        Evaluasi belajar
                                    </span>
                                </div>
                            </div>

                            {/* Ilustrasi dekoratif */}
                            <div className="relative hidden min-h-[350px] overflow-hidden md:flex md:items-center md:justify-center">

                                <div className="absolute inset-0 bg-gradient-to-br from-[#0b5965] via-[#102e49] to-[#111333]" />

                                {/* Pola titik */}
                                <div
                                    className="absolute inset-0 opacity-25"
                                    style={{
                                        backgroundImage:
                                            'radial-gradient(circle, #a6d5df 1px, transparent 1px)',
                                        backgroundSize: '14px 14px',
                                    }}
                                />

                                {/* Lingkaran dekoratif */}
                                <div className="absolute h-[340px] w-[340px] rounded-full border border-[#a8e5ce]/20" />
                                <div className="absolute h-[270px] w-[270px] rounded-full border border-[#a8e5ce]/25" />
                                <div className="absolute h-[200px] w-[200px] rounded-full border border-[#a8e5ce]/30" />

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="flex h-44 w-44 items-center justify-center rounded-full border border-white/20 bg-white/10 text-8xl shadow-2xl backdrop-blur-sm">
                                        🌐
                                    </div>

                                    <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-[#b6d7df]">
                                        Menjelajahi Iklim Dunia
                                    </p>
                                    <p className="mt-2 max-w-xs text-sm text-[#d0e4e7]">
                                        Memahami suhu, curah hujan, dan karakteristik wilayah.
                                    </p>
                                </div>

                                {/* Label dekoratif */}
                                <div className="absolute left-8 top-12 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                                    🌧 Curah Hujan
                                </div>

                                <div className="absolute bottom-12 right-8 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                                    🌡 Suhu Udara
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FITUR PEMBELAJARAN */}
                    <section className="mx-auto max-w-[1500px] px-6 py-10 sm:px-10">
                        <div className="mb-6">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                Fitur pembelajaran
                            </p>

                            <h3 className="mt-2 text-2xl font-bold text-[#123b49] sm:text-3xl">
                                Tersedia untuk pembelajaran
                            </h3>

                            <p className="mt-2 max-w-2xl leading-relaxed text-gray-500">
                                Gunakan berbagai fitur IklimKöppenBot yang tersedia untuk memahami konsep
                                klasifikasi iklim secara bertahap.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                            {features.map((feature) => (
                                <div
                                    key={feature.title}
                                    className="group rounded-2xl border border-[#d4e4e1] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e1f5ed] text-3xl transition group-hover:bg-[#d1f0e4]">
                                        {feature.icon}
                                    </div>

                                    <h4 className="mt-5 text-lg font-bold text-[#123b49]">
                                        {feature.title}
                                    </h4>

                                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ALUR BELAJAR */}
                    <section className="mx-auto max-w-[1500px] px-6 py-10 sm:px-10">
                        <div className="grid gap-8 rounded-3xl border border-[#d4e4e1] bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">

                            <div className="flex flex-col justify-center">
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#16805f]">
                                    Dimulai dari sini
                                </p>

                                <h3 className="mt-2 text-2xl font-bold text-[#123b49] sm:text-3xl">
                                    Perjalanan belajarmu dimulai dari langkah kecil hingga besar
                                </h3>

                                <p className="mt-4 leading-relaxed text-gray-500">
                                    Ikuti alur pembelajaran dari pengenalan konsep,
                                    memahami kelompok iklim, hingga menerapkan
                                    pengetahuan yang kamu dapatkan melalui latihan.
                                </p>

                                <Link
                                    href={dashboardUrl}
                                    className="mt-6 inline-flex w-fit items-center gap-3 rounded-xl bg-[#087b68] px-5 py-3 font-semibold text-white transition hover:bg-[#066653]"
                                >
                                    Lihat Ruang Belajar
                                    <span className="text-xl">›</span>
                                </Link>
                            </div>

                            <div className="space-y-4">
                                {learningSteps.map((step, index) => (
                                    <div
                                        key={step.number}
                                        className="flex gap-4 rounded-2xl border border-[#d4e4e1] bg-[#f8fcfb] p-5"
                                    >
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e1f5ed] text-sm font-extrabold text-[#087b68]">
                                            {step.number}
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-[#123b49]">
                                                {step.title}
                                            </h4>

                                            <p className="mt-1 text-sm leading-relaxed text-gray-500">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA BAWAH */}
                    <section className="mx-auto max-w-[1500px] px-6 pb-12 pt-4 sm:px-10">
                        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#cce7d9] bg-[#effaf3] p-7 text-center sm:flex-row sm:px-10 sm:text-left">
                            <div>
                                <h3 className="text-2xl font-bold text-[#123b49]">
                                    Apakah kamu siap menjelajahi iklim dunia?
                                </h3>

                                <p className="mt-2 max-w-2xl text-gray-600">
                                    Mulai belajar klasifikasi iklim Köppen bersama IklimKöppenBot
                                    dan menemukan bagaimana karakteristik iklim yang membentuk
                                    berbagai wilayah.
                                </p>
                            </div>

                            <Link
                                href={dashboardUrl}
                                className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#d9f99d] px-6 py-3.5 font-bold text-[#123b49] transition hover:bg-[#c7ef7e]"
                            >
                                Mulai Belajar
                                <span className="text-xl">›</span>
                            </Link>
                        </div>
                    </section>
                </main>

                {/* FOOTER */}
                <footer className="border-t border-[#d7e5e3] bg-white">
                    <div className="mx-auto flex max-w-[1500px] flex-col gap-2 px-6 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:text-left">
                        <p className="font-bold text-[#07384b]">
                            IklimKöppenBot · Ruang Belajar Iklim Köppen
                        </p>

                        <p className="text-sm text-gray-500">
                            Media Pembelajaran Klasifikasi Iklim Köppen
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}