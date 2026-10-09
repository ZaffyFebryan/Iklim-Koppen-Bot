/* =========================================================
   IklimKöppenBot — Rule-Based Chat AI
   =========================================================
   Fitur:
   - 31 kode iklim Köppen
   - Penjelasan kode iklim
   - Penjelasan kelompok A-E
   - Pembedah huruf pertama, kedua, ketiga
   - Pertanyaan "tipe A", "kelompok A", dll
   - Jawaban cepat
   - Deteksi kode seperti Af, Am, Aw, BWh, Cfb
   - Daftar seluruh kode
   - Efek mengetik
   ========================================================= */


/* =========================================================
   1. DATA SEMUA KODE IKLIM KÖPPEN
   ========================================================= */

const KOPPEN = [

    /* =====================================================
       A — TROPIS
       ===================================================== */

    {
        code: "Af",
        nama: "Hutan Hujan Tropis",
        suhu: "Semua bulan bersuhu ≥ 18°C (umumnya 25-28°C sepanjang tahun).",
        hujan: "Setiap bulan hujan ≥ 60 mm, tidak ada musim kering.",
        contoh: "Pontianak, Singapura, Cekungan Amazon, Cekungan Kongo.",
        vegetasi: "Hutan hujan lebat, pohon tinggi dan berlapis-lapis."
    },

    {
        code: "Am",
        nama: "Monsun Tropis",
        suhu: "Semua bulan bersuhu ≥ 18°C.",
        hujan: "Ada musim kering singkat (bulan terkering < 60 mm), tetapi hujan total tahunan sangat tinggi sehingga tanah tetap lembap.",
        contoh: "Miami, Kochi (India), pesisir barat Semenanjung India.",
        vegetasi: "Hutan monsun dan hutan hujan tropis."
    },

    {
        code: "Aw",
        nama: "Savana Tropis",
        suhu: "Semua bulan bersuhu ≥ 18°C.",
        hujan: "Ada musim kemarau yang jelas (bulan terkering < 60 mm) dan hujan total tidak cukup untuk menjaga tanah tetap lembap.",
        contoh: "Surabaya (umumnya diklasifikasikan Aw), Kupang, Darwin, Mumbai.",
        vegetasi: "Padang rumput savana dengan pohon tersebar dan hutan gugur musiman."
    },

    {
        code: "As",
        nama: "Tropis dengan Kemarau Musim Panas",
        suhu: "Semua bulan bersuhu ≥ 18°C.",
        hujan: "Musim kering terjadi saat musim panas. Tipe ini sangat langka.",
        contoh: "Sebagian kecil wilayah pesisir, misalnya Hawaii.",
        vegetasi: "Hutan tropis kering hingga savana."
    },


    /* =====================================================
       B — KERING
       ===================================================== */

    {
        code: "BWh",
        nama: "Gurun Panas",
        suhu: "Suhu rata-rata tahunan ≥ 18°C; siang sangat panas, malam bisa dingin.",
        hujan: "Sangat sedikit, umumnya di bawah 250 mm per tahun.",
        contoh: "Gurun Sahara, Gurun Arab, Kairo, Riyadh.",
        vegetasi: "Semak jarang, kaktus dan tumbuhan tahan kering."
    },

    {
        code: "BWk",
        nama: "Gurun Dingin",
        suhu: "Suhu rata-rata tahunan < 18°C; musim dingin bisa sangat dingin.",
        hujan: "Sangat sedikit dan tergolong gurun.",
        contoh: "Gurun Gobi, Gurun Taklamakan, sebagian Patagonia.",
        vegetasi: "Semak kerdil dan tumbuhan tahan kering."
    },

    {
        code: "BSh",
        nama: "Stepa Panas",
        suhu: "Suhu rata-rata tahunan ≥ 18°C.",
        hujan: "Sedikit, tetapi lebih banyak daripada gurun.",
        contoh: "Sahel Afrika, India barat laut, pedalaman Australia.",
        vegetasi: "Padang rumput pendek dan semak."
    },

    {
        code: "BSk",
        nama: "Stepa Dingin",
        suhu: "Suhu rata-rata tahunan < 18°C; musim dingin dingin.",
        hujan: "Sedikit dan tergolong semi-kering.",
        contoh: "Great Plains AS, Denver, stepa Asia Tengah, Anatolia tengah.",
        vegetasi: "Padang rumput stepa."
    },


    /* =====================================================
       C — SUBTROPIS / SEDANG
       ===================================================== */

    {
        code: "Csa",
        nama: "Mediterania Musim Panas Panas",
        suhu: "Bulan terpanas ≥ 22°C.",
        hujan: "Musim panas kering, hujan turun terutama saat musim dingin.",
        contoh: "Athena, Roma, Lisbon, pesisir selatan Spanyol.",
        vegetasi: "Semak berdaun keras, pohon zaitun dan anggur."
    },

    {
        code: "Csb",
        nama: "Mediterania Musim Panas Hangat",
        suhu: "Bulan terpanas < 22°C, minimal 4 bulan bersuhu ≥ 10°C.",
        hujan: "Musim panas kering, hujan terutama saat musim dingin.",
        contoh: "San Francisco, Porto, pesisir Chile tengah.",
        vegetasi: "Hutan dan semak berdaun keras."
    },

    {
        code: "Csc",
        nama: "Mediterania Musim Panas Sejuk",
        suhu: "Kurang dari 4 bulan bersuhu ≥ 10°C.",
        hujan: "Musim panas kering. Tipe ini sangat langka.",
        contoh: "Sebagian kecil dataran tinggi, misalnya Andes.",
        vegetasi: "Hutan konifer dan semak pegunungan."
    },

    {
        code: "Cwa",
        nama: "Subtropis Lembap Kemarau Musim Dingin",
        suhu: "Bulan terpanas ≥ 22°C.",
        hujan: "Musim dingin kering, hujan lebat saat musim panas.",
        contoh: "Hong Kong, Guangzhou, India utara.",
        vegetasi: "Hutan subtropis dan lahan pertanian."
    },

    {
        code: "Cwb",
        nama: "Dataran Tinggi Subtropis Kemarau Musim Dingin",
        suhu: "Bulan terpanas < 22°C, minimal 4 bulan bersuhu ≥ 10°C.",
        hujan: "Musim dingin kering, musim panas basah.",
        contoh: "Mexico City, Johannesburg, dataran tinggi Ethiopia.",
        vegetasi: "Hutan pegunungan dan padang rumput dataran tinggi."
    },

    {
        code: "Cwc",
        nama: "Subtropis Kemarau Musim Dingin Sejuk",
        suhu: "Kurang dari 4 bulan bersuhu ≥ 10°C.",
        hujan: "Musim dingin kering. Tipe ini sangat langka.",
        contoh: "Sebagian kecil dataran tinggi Andes.",
        vegetasi: "Padang rumput dan semak dataran tinggi."
    },

    {
        code: "Cfa",
        nama: "Subtropis Lembap",
        suhu: "Bulan terpanas ≥ 22°C, musim panas panas dan lembap.",
        hujan: "Hujan merata sepanjang tahun.",
        contoh: "Tokyo, Sydney, Buenos Aires, tenggara Amerika Serikat.",
        vegetasi: "Hutan campuran, hutan daun lebar dan lahan pertanian."
    },

    {
        code: "Cfb",
        nama: "Oseanik",
        suhu: "Bulan terpanas < 22°C, minimal 4 bulan bersuhu ≥ 10°C.",
        hujan: "Hujan merata sepanjang tahun.",
        contoh: "London, Paris, Melbourne, Selandia Baru, Bogotá.",
        vegetasi: "Hutan gugur dan padang rumput hijau."
    },

    {
        code: "Cfc",
        nama: "Oseanik Subpolar",
        suhu: "Kurang dari 4 bulan bersuhu ≥ 10°C.",
        hujan: "Hujan merata sepanjang tahun.",
        contoh: "Reykjavik dan Kepulauan Faroe.",
        vegetasi: "Padang rumput dan semak."
    },


    /* =====================================================
       D — KONTINENTAL / DINGIN
       ===================================================== */

    {
        code: "Dsa",
        nama: "Kontinental Musim Panas Kering dan Panas",
        suhu: "Bulan terpanas ≥ 22°C.",
        hujan: "Musim panas kering. Tipe ini langka.",
        contoh: "Sebagian pegunungan Iran dan Anatolia timur.",
        vegetasi: "Padang rumput dan hutan terbuka."
    },

    {
        code: "Dsb",
        nama: "Kontinental Musim Panas Kering dan Hangat",
        suhu: "Bulan terpanas < 22°C, minimal 4 bulan ≥ 10°C.",
        hujan: "Musim panas kering.",
        contoh: "Pegunungan barat laut Amerika, Spokane, sebagian Turki.",
        vegetasi: "Hutan konifer pegunungan."
    },

    {
        code: "Dsc",
        nama: "Subarktik Musim Panas Kering",
        suhu: "Kurang dari 4 bulan ≥ 10°C.",
        hujan: "Musim panas kering.",
        contoh: "Sebagian pegunungan tinggi wilayah Mediterania.",
        vegetasi: "Hutan konifer pegunungan."
    },

    {
        code: "Dsd",
        nama: "Subarktik Ekstrem Musim Panas Kering",
        suhu: "Bulan terdingin < -38°C.",
        hujan: "Musim panas kering.",
        contoh: "Sedikit lokasi pegunungan tinggi lintang tinggi.",
        vegetasi: "Taiga atau tundra pegunungan."
    },

    {
        code: "Dwa",
        nama: "Kontinental Musim Dingin Kering dan Panas",
        suhu: "Bulan terpanas ≥ 22°C.",
        hujan: "Musim dingin kering, hujan terutama saat musim panas.",
        contoh: "Beijing, Seoul, Pyongyang.",
        vegetasi: "Hutan campuran dan lahan pertanian."
    },

    {
        code: "Dwb",
        nama: "Kontinental Musim Dingin Kering dan Hangat",
        suhu: "Bulan terpanas < 22°C, minimal 4 bulan ≥ 10°C.",
        hujan: "Musim dingin kering.",
        contoh: "Timur laut Tiongkok, Mongolia dan Siberia selatan.",
        vegetasi: "Hutan konifer dan campuran."
    },

    {
        code: "Dwc",
        nama: "Subarktik Musim Dingin Kering",
        suhu: "Kurang dari 4 bulan ≥ 10°C.",
        hujan: "Musim dingin kering.",
        contoh: "Siberia timur dan Mongolia utara.",
        vegetasi: "Taiga."
    },

    {
        code: "Dwd",
        nama: "Subarktik Ekstrem Musim Dingin Kering",
        suhu: "Bulan terdingin < -38°C.",
        hujan: "Musim dingin kering.",
        contoh: "Oymyakon, Siberia timur.",
        vegetasi: "Taiga jarang yang tahan dingin ekstrem."
    },

    {
        code: "Dfa",
        nama: "Kontinental Lembap Musim Panas Panas",
        suhu: "Bulan terpanas ≥ 22°C.",
        hujan: "Hujan merata sepanjang tahun.",
        contoh: "Chicago, Kansas City, sebagian Eropa timur.",
        vegetasi: "Padang rumput prairi dan hutan gugur."
    },

    {
        code: "Dfb",
        nama: "Kontinental Lembap Musim Panas Hangat",
        suhu: "Bulan terpanas < 22°C, minimal 4 bulan ≥ 10°C.",
        hujan: "Hujan merata sepanjang tahun.",
        contoh: "Moskow, Toronto, Kanada selatan, Eropa timur.",
        vegetasi: "Hutan campuran dan hutan konifer."
    },

    {
        code: "Dfc",
        nama: "Subarktik",
        suhu: "Kurang dari 4 bulan ≥ 10°C.",
        hujan: "Hujan merata sepanjang tahun.",
        contoh: "Fairbanks, Siberia, Skandinavia utara.",
        vegetasi: "Taiga."
    },

    {
        code: "Dfd",
        nama: "Subarktik Ekstrem",
        suhu: "Bulan terdingin < -38°C.",
        hujan: "Hujan merata sepanjang tahun.",
        contoh: "Yakutsk dan Verkhoyansk.",
        vegetasi: "Taiga yang jarang."
    },


    /* =====================================================
       E — KUTUB
       ===================================================== */

    {
        code: "ET",
        nama: "Tundra",
        suhu: "Bulan terpanas antara 0°C dan 10°C.",
        hujan: "Sedikit, sebagian besar berupa salju.",
        contoh: "Pesisir Arktik, Andes dan Himalaya bagian atas.",
        vegetasi: "Lumut, rumput dan semak kerdil."
    },

    {
        code: "EF",
        nama: "Es Abadi (Kutub)",
        suhu: "Semua bulan di bawah 0°C.",
        hujan: "Sangat sedikit dan berupa salju.",
        contoh: "Antartika dan pedalaman Greenland.",
        vegetasi: "Hampir tidak ada tumbuhan."
    }
];


/* =========================================================
   2. ARTI HURUF PERTAMA
   ========================================================= */

const HURUF_1 = {

    A: "iklim tropis: semua bulan bersuhu ≥ 18°C",

    B: "iklim kering: penguapan lebih besar daripada curah hujan",

    C: "iklim subtropis/sedang: bulan terdingin antara -3°C dan 18°C",

    D: "iklim kontinental/dingin: bulan terdingin di bawah -3°C",

    E: "iklim kutub: bulan terpanas di bawah 10°C"
};


/* =========================================================
   3. ARTI HURUF KEDUA
   ========================================================= */

const HURUF_2 = {

    f: "hujan merata sepanjang tahun, tidak ada musim kering",

    m: "monsun: ada musim kering singkat, tetapi hujan total tahunan sangat tinggi",

    w: "ada musim kering saat musim dingin",

    s: "ada musim kering saat musim panas",

    W: "gurun",

    S: "stepa",

    T: "tundra",

    F: "es abadi"
};


/* =========================================================
   4. ARTI HURUF KETIGA
   ========================================================= */

const HURUF_3 = {

    h: "panas, suhu rata-rata tahunan ≥ 18°C",

    k: "dingin, suhu rata-rata tahunan < 18°C",

    a: "musim panas sangat hangat, bulan terpanas ≥ 22°C",

    b: "musim panas hangat, bulan terpanas < 22°C dan minimal 4 bulan ≥ 10°C",

    c: "musim panas sejuk, kurang dari 4 bulan ≥ 10°C",

    d: "musim dingin ekstrem, bulan terdingin < -38°C"
};


/* =========================================================
   5. PEMBAHASAN KELOMPOK A-E
   ========================================================= */

const PEMBAHASAN_KELOMPOK = {

    A: {

        nama: "Tropis",

        pengertian:
            "Kelompok iklim A adalah iklim tropis. Ciri utamanya adalah semua bulan memiliki suhu rata-rata ≥ 18°C. Iklim ini umumnya terdapat di wilayah lintang rendah di sekitar garis khatulistiwa.",

        ciri:
            "Suhu tinggi sepanjang tahun, amplitudo suhu tahunan relatif kecil, kelembapan umumnya tinggi, dan curah hujan menjadi faktor penting dalam membedakan subtipenya.",

        pembagian:
            "Kelompok A dibagi menjadi Af, Am, Aw, dan As berdasarkan pola curah hujan dan musim kering.",

        persebaran:
            "Banyak ditemukan di Indonesia, Asia Tenggara, Cekungan Amazon, Cekungan Kongo, serta wilayah tropis lainnya.",

        subtipe: [
            "Af — Hutan Hujan Tropis",
            "Am — Monsun Tropis",
            "Aw — Savana Tropis",
            "As — Tropis dengan Kemarau Musim Panas"
        ]
    },


    B: {

        nama: "Kering",

        pengertian:
            "Kelompok iklim B adalah iklim kering atau arid. Ciri utamanya adalah jumlah penguapan lebih besar daripada curah hujan sehingga terjadi kekurangan air.",

        ciri:
            "Curah hujan rendah, kelembapan relatif rendah, dan perbedaan suhu siang-malam dapat cukup besar.",

        pembagian:
            "Kelompok B dibagi menjadi BW (gurun) dan BS (stepa). Keduanya dapat dibedakan lagi berdasarkan suhu menjadi h (panas) dan k (dingin).",

        persebaran:
            "Banyak ditemukan di wilayah subtropis sekitar 20°-35° LU/LS dan wilayah pedalaman benua.",

        subtipe: [
            "BWh — Gurun Panas",
            "BWk — Gurun Dingin",
            "BSh — Stepa Panas",
            "BSk — Stepa Dingin"
        ]
    },


    C: {

        nama: "Subtropis / Sedang",

        pengertian:
            "Kelompok iklim C adalah iklim subtropis atau sedang. Suhu bulan terdingin berada pada kisaran sekitar -3°C sampai 18°C, sedangkan bulan terpanas umumnya lebih dari 10°C.",

        ciri:
            "Memiliki variasi suhu musiman yang lebih jelas dibandingkan iklim tropis, tetapi musim dinginnya tidak seekstrem kelompok D.",

        pembagian:
            "Kelompok C terdiri dari Cs (kering musim panas), Cw (kering musim dingin), dan Cf (lembap sepanjang tahun).",

        persebaran:
            "Umumnya terdapat pada lintang tengah sekitar 30°-50° LU/LS, seperti Eropa barat, kawasan Mediterania, Tiongkok selatan, dan wilayah tertentu di Australia serta Amerika.",

        subtipe: [
            "Csa — Mediterania Musim Panas Panas",
            "Csb — Mediterania Musim Panas Hangat",
            "Csc — Mediterania Musim Panas Sejuk",
            "Cwa — Subtropis Lembap Kemarau Musim Dingin",
            "Cwb — Dataran Tinggi Subtropis Kemarau Musim Dingin",
            "Cwc — Subtropis Kemarau Musim Dingin Sejuk",
            "Cfa — Subtropis Lembap",
            "Cfb — Oseanik",
            "Cfc — Oseanik Subpolar"
        ]
    },


    D: {

        nama: "Kontinental / Dingin",

        pengertian:
            "Kelompok iklim D adalah iklim kontinental atau dingin. Ciri utamanya adalah musim dingin yang dingin dengan perbedaan suhu musiman yang besar.",

        ciri:
            "Bulan terdingin berada di bawah sekitar -3°C, sedangkan bulan terpanas lebih dari 10°C. Perbedaan antara musim panas dan musim dingin cukup besar.",

        pembagian:
            "Kelompok D terdiri dari Ds (kering musim panas), Dw (kering musim dingin), dan Df (lembap sepanjang tahun).",

        persebaran:
            "Banyak ditemukan di belahan bumi utara seperti Siberia, Kanada, Mongolia, Skandinavia dan sebagian wilayah Eropa Timur.",

        subtipe: [
            "Dsa — Kontinental Musim Panas Kering dan Panas",
            "Dsb — Kontinental Musim Panas Kering dan Hangat",
            "Dsc — Subarktik Musim Panas Kering",
            "Dsd — Subarktik Ekstrem Musim Panas Kering",
            "Dwa — Kontinental Musim Dingin Kering dan Panas",
            "Dwb — Kontinental Musim Dingin Kering dan Hangat",
            "Dwc — Subarktik Musim Dingin Kering",
            "Dwd — Subarktik Ekstrem Musim Dingin Kering",
            "Dfa — Kontinental Lembap Musim Panas Panas",
            "Dfb — Kontinental Lembap Musim Panas Hangat",
            "Dfc — Subarktik",
            "Dfd — Subarktik Ekstrem"
        ]
    },


    E: {

        nama: "Kutub",

        pengertian:
            "Kelompok iklim E adalah iklim kutub atau polar. Ciri utamanya adalah suhu bulan terpanas tetap di bawah 10°C sehingga tidak terdapat musim panas yang sebenarnya.",

        ciri:
            "Suhu sangat rendah sepanjang tahun dan sebagian besar presipitasi dapat berupa salju.",

        pembagian:
            "Kelompok E dibagi menjadi ET (tundra) dan EF (es abadi).",

        persebaran:
            "Ditemukan di wilayah sekitar Kutub Utara, Antartika, Greenland, serta daerah pegunungan sangat tinggi.",

        subtipe: [
            "ET — Tundra",
            "EF — Es Abadi"
        ]
    }
};


/* =========================================================
   6. JAWABAN CEPAT
   ========================================================= */

const JAWABAN_CEPAT = {

    "apa itu köppen":
        "Klasifikasi iklim Köppen adalah sistem pengelompokan iklim dunia berdasarkan suhu dan curah hujan yang dikembangkan oleh Wladimir Köppen. Sistem ini menggunakan kode huruf untuk menunjukkan kelompok iklim, pola curah hujan, dan karakteristik suhu.",

    "apa itu klasifikasi iklim köppen":
        "Klasifikasi iklim Köppen adalah sistem untuk mengelompokkan iklim dunia berdasarkan karakteristik suhu dan curah hujan. Sistem ini membagi iklim menjadi lima kelompok utama, yaitu A, B, C, D, dan E.",

    "kode iklim indonesia":
        "Indonesia umumnya berada pada kelompok A atau iklim tropis. Beberapa tipe yang ditemukan antara lain Af (hutan hujan tropis), Am (monsun tropis), dan Aw (savana tropis).",

    "beda af am aw":
        "Ketiganya termasuk iklim tropis. Af memiliki hujan sepanjang tahun tanpa musim kering, Am memiliki musim kering singkat tetapi curah hujan tahunan tinggi, sedangkan Aw memiliki musim kemarau yang lebih jelas.",

    "iklim surabaya apa":
        "Surabaya umumnya diklasifikasikan sebagai Aw atau iklim savana tropis. Suhunya tinggi sepanjang tahun dan memiliki musim kemarau yang cukup jelas."
};


/* =========================================================
   7. KATA KUNCI KELOMPOK A-E
   ========================================================= */

const KATA_KE_KELOMPOK = {

    /* ---------- A ---------- */

    "iklim tropis": "A",
    "kelompok tropis": "A",
    "golongan tropis": "A",
    "tipe tropis": "A",

    "tipe a": "A",
    "tipe iklim a": "A",
    "jenis a": "A",
    "jenis iklim a": "A",
    "kelompok a": "A",
    "golongan a": "A",
    "iklim a": "A",
    "tipe a apa": "A",
    "a itu apa": "A",

    /* ---------- B ---------- */

    "iklim kering": "B",
    "kelompok kering": "B",
    "golongan kering": "B",
    "iklim gurun": "B",
    "iklim arid": "B",
    "tipe kering": "B",

    "tipe b": "B",
    "tipe iklim b": "B",
    "jenis b": "B",
    "jenis iklim b": "B",
    "kelompok b": "B",
    "golongan b": "B",
    "iklim b": "B",
    "b itu apa": "B",

    /* ---------- C ---------- */

    "iklim subtropis": "C",
    "iklim sedang": "C",
    "kelompok sedang": "C",
    "golongan sedang": "C",
    "tipe subtropis": "C",
    "tipe sedang": "C",

    "tipe c": "C",
    "tipe iklim c": "C",
    "jenis c": "C",
    "jenis iklim c": "C",
    "kelompok c": "C",
    "golongan c": "C",
    "iklim c": "C",
    "c itu apa": "C",

    /* ---------- D ---------- */

    "iklim kontinental": "D",
    "iklim dingin": "D",
    "kelompok dingin": "D",
    "golongan dingin": "D",
    "tipe kontinental": "D",

    "tipe d": "D",
    "tipe iklim d": "D",
    "jenis d": "D",
    "jenis iklim d": "D",
    "kelompok d": "D",
    "golongan d": "D",
    "iklim d": "D",
    "d itu apa": "D",

    /* ---------- E ---------- */

    "iklim kutub": "E",
    "iklim polar": "E",
    "kelompok kutub": "E",
    "golongan kutub": "E",
    "tipe polar": "E",

    "tipe e": "E",
    "tipe iklim e": "E",
    "jenis e": "E",
    "jenis iklim e": "E",
    "kelompok e": "E",
    "golongan e": "E",
    "iklim e": "E",
    "e itu apa": "E"
};


/* =========================================================
   8. NORMALISASI INPUT
   ========================================================= */

function normalisasi(teks) {

    return teks
        .toLowerCase()
        .replace(/[?!.,:;]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}


/* =========================================================
   9. BEDAH KODE SPESIFIK
   ========================================================= */

function bedahKode(item) {

    const c = item.code;

    let t = `Kode ${c}: ${item.nama}\n\n`;

    t += `Huruf "${c[0]}": ${HURUF_1[c[0]]}\n`;

    if (c[1]) {
        t += `Huruf "${c[1]}": ${HURUF_2[c[1]]}\n`;
    }

    if (c[2]) {
        t += `Huruf "${c[2]}": ${HURUF_3[c[2]]}\n`;
    }

    t += `\nSuhu: ${item.suhu}`;

    t += `\nHujan: ${item.hujan}`;

    t += `\nContoh wilayah: ${item.contoh}`;

    t += `\nVegetasi: ${item.vegetasi}`;

    return t;
}


/* =========================================================
   10. BEDAH KELOMPOK A-E
   ========================================================= */

function bedahKelompok(huruf) {

    const info = PEMBAHASAN_KELOMPOK[huruf];

    if (!info) {
        return null;
    }

    const subtipe = KOPPEN.filter(
        item => item.code[0] === huruf
    );

    const daftarSubtipe = subtipe
        .map(item => `- ${item.code}: ${item.nama}`)
        .join("\n");

    let t = "";

    t += `Kelompok Iklim ${huruf} — ${info.nama}\n\n`;

    t += `Pengertian:\n${info.pengertian}\n\n`;

    t += `Ciri utama:\n${info.ciri}\n\n`;

    t += `Pembagian:\n${info.pembagian}\n\n`;

    t += `Persebaran wilayah:\n${info.persebaran}\n\n`;

    t += `Subtipe pada kelompok ${huruf}:\n${daftarSubtipe}\n\n`;

    t += `Ketik salah satu kode di atas, misalnya "${subtipe[0]?.code}", untuk mendapatkan penjelasan yang lebih rinci.`;

    return t;
}


/* =========================================================
   11. DAFTAR SEMUA KODE
   ========================================================= */

function daftarKode() {

    const grup = {

        A: "Tropis (A)",

        B: "Kering (B)",

        C: "Subtropis/Sedang (C)",

        D: "Kontinental/Dingin (D)",

        E: "Kutub (E)"
    };

    let t = "Daftar kode iklim Köppen:\n";

    Object.keys(grup).forEach(group => {

        const kode = KOPPEN
            .filter(item => item.code[0] === group)
            .map(item => item.code)
            .join(", ");

        t += `\n${grup[group]}:\n${kode}\n`;
    });

    t +=
        "\nKetik salah satu huruf kelompok A, B, C, D, atau E untuk pembahasan umum. " +
        "Kamu juga bisa mengetik kode spesifik seperti Af, Aw, BWh, atau Cfb.";

    return t;
}


/* =========================================================
   12. CARI KODE SPESIFIK
   ========================================================= */

function cariKodeSpesifik(input) {

    /*
     * Contoh yang harus bisa:
     *
     * Af
     * af
     * kode Af
     * iklim Aw
     * jelaskan Cfb
     * apa itu BWh
     */

    const cocok = input.match(
        /\b(Af|Am|Aw|As|BWh|BWk|BSh|BSk|Csa|Csb|Csc|Cwa|Cwb|Cwc|Cfa|Cfb|Cfc|Dsa|Dsb|Dsc|Dsd|Dwa|Dwb|Dwc|Dwd|Dfa|Dfb|Dfc|Dfd|ET|EF)\b/i
    );

    if (!cocok) {
        return null;
    }

    const kode = cocok[1].toLowerCase();

    return KOPPEN.find(
        item => item.code.toLowerCase() === kode
    ) || null;
}


/* =========================================================
   13. MESIN CHAT UTAMA
   ========================================================= */

function balasBot(inputUser) {

    const raw = inputUser.trim();

    const n = normalisasi(raw);


    /* -----------------------------------------------------
       SALAM
       ----------------------------------------------------- */

    if (
        [
            "halo",
            "hai",
            "hi",
            "hello",
            "p"
        ].includes(n)
    ) {

        return (
            "Halo! Aku IklimKöppenBot 👋\n\n" +

            "Aku bisa membantu menjelaskan klasifikasi iklim Köppen.\n\n" +

            "Kamu bisa bertanya seperti:\n" +

            "• Apa itu Köppen?\n" +
            "• Tipe A itu apa?\n" +
            "• Jelaskan kelompok B\n" +
            "• Iklim tropis\n" +
            "• Apa itu Af?\n" +
            "• Surabaya iklim apa?\n" +
            "• Beda Af, Am, Aw\n" +
            "• Daftar kode"
        );
    }


    /* -----------------------------------------------------
       DAFTAR KODE
       ----------------------------------------------------- */

    if (
        n === "daftar" ||
        n === "daftar kode" ||
        n === "semua kode" ||
        n === "kode lengkap" ||
        n === "semua tipe iklim"
    ) {

        return daftarKode();
    }


    /* -----------------------------------------------------
       PERTANYAAN KHUSUS
       ----------------------------------------------------- */

    for (const kunci in JAWABAN_CEPAT) {

        if (n.includes(kunci)) {

            return JAWABAN_CEPAT[kunci];
        }
    }


    /* -----------------------------------------------------
       KELOMPOK A-E LANGSUNG
       Contoh:
       A
       B
       C
       D
       E
       ----------------------------------------------------- */

    if (/^[a-e]$/.test(n)) {

        return bedahKelompok(
            n.toUpperCase()
        );
    }


    /* -----------------------------------------------------
       KELOMPOK A-E DARI KATA KUNCI
       Contoh:
       tipe a
       tipe A itu apa
       kelompok A
       iklim tropis
       tipe b
       kelompok c
       ----------------------------------------------------- */

    for (const kunci in KATA_KE_KELOMPOK) {

        if (n.includes(kunci)) {

            const huruf =
                KATA_KE_KELOMPOK[kunci];

            return bedahKelompok(huruf);
        }
    }


    /* -----------------------------------------------------
       KODE SPESIFIK
       Contoh:
       Af
       Aw
       BWh
       Cfb
       ----------------------------------------------------- */

    const itemKode =
        cariKodeSpesifik(raw);

    if (itemKode) {

        return bedahKode(itemKode);
    }


    /* -----------------------------------------------------
       PERTANYAAN UMUM BERDASARKAN KATA
       ----------------------------------------------------- */

    if (
        n.includes("iklim tropis") ||
        n.includes("tropis itu apa")
    ) {

        return bedahKelompok("A");
    }

    if (
        n.includes("iklim kering") ||
        n.includes("iklim gurun")
    ) {

        return bedahKelompok("B");
    }

    if (
        n.includes("iklim subtropis") ||
        n.includes("iklim sedang")
    ) {

        return bedahKelompok("C");
    }

    if (
        n.includes("iklim kontinental") ||
        n.includes("iklim dingin")
    ) {

        return bedahKelompok("D");
    }

    if (
        n.includes("iklim kutub") ||
        n.includes("iklim polar")
    ) {

        return bedahKelompok("E");
    }


    /* -----------------------------------------------------
       FALLBACK
       ----------------------------------------------------- */

    return (
        "Aku belum memahami pertanyaan tersebut.\n\n" +

        "Coba tanyakan salah satu contoh berikut:\n\n" +

        "• Tipe A itu apa?\n" +
        "• Jelaskan kelompok B\n" +
        "• Apa itu iklim C?\n" +
        "• Iklim D itu apa?\n" +
        "• Jelaskan kelompok E\n" +
        "• Apa itu Af?\n" +
        "• Apa itu Aw?\n" +
        "• Beda Af, Am, Aw\n" +
        "• Iklim Indonesia apa?\n" +
        "• Iklim Surabaya apa?\n" +
        "• Daftar kode"
    );
}


/* =========================================================
   14. EFEK MENGETIK
   ========================================================= */

function ketik(
    elemen,
    teks,
    kecepatan = 20,
    selesai = () => {}
) {

    elemen.textContent = "";

    let i = 0;

    const timer = setInterval(() => {

        elemen.textContent += teks[i];

        i++;

        if (i >= teks.length) {

            clearInterval(timer);

            selesai();
        }

    }, kecepatan);
}


/* =========================================================
   15. JAWABAN DENGAN EFEK MENGETIK
   ========================================================= */

function jawabDenganKetik(
    elemen,
    inputUser
) {

    elemen.textContent =
        "IklimKöppenBot sedang mengetik...";

    setTimeout(() => {

        const jawaban =
            balasBot(inputUser);

        ketik(
            elemen,
            jawaban
        );

    }, 700);
}


/* =========================================================
   16. TOMBOL CEPAT
   ========================================================= */

const TOMBOL_CEPAT = [

    "Apa itu Köppen?",

    "Tipe A itu apa?",

    "Jelaskan kelompok iklim A",

    "Jelaskan kelompok iklim B",

    "Jelaskan kelompok iklim C",

    "Jelaskan kelompok iklim D",

    "Jelaskan kelompok iklim E",

    "Kode iklim Indonesia",

    "Beda Af, Am, Aw",

    "Iklim Surabaya apa?",

    "Daftar kode"
];


/* =========================================================
   17. EXPORT
   =========================================================
   Bagian ini penting kalau file digunakan oleh
   halaman React / JavaScript lainnya.
   ========================================================= */

if (typeof window !== "undefined") {

    window.KOPPEN = KOPPEN;

    window.balasBot = balasBot;

    window.bedahKode = bedahKode;

    window.bedahKelompok = bedahKelompok;

    window.daftarKode = daftarKode;

    window.jawabDenganKetik = jawabDenganKetik;

    window.TOMBOL_CEPAT = TOMBOL_CEPAT;
}


/* =========================================================
   CONTOH HASIL:
   =========================================================

   User:
   "tipe a"

   Bot:

   Kelompok Iklim A — Tropis

   Pengertian:
   Kelompok iklim A adalah iklim tropis. Ciri utamanya
   adalah semua bulan memiliki suhu rata-rata ≥ 18°C.
   Iklim ini umumnya terdapat di wilayah lintang rendah
   di sekitar garis khatulistiwa.

   Ciri utama:
   Suhu tinggi sepanjang tahun, amplitudo suhu tahunan
   relatif kecil, kelembapan umumnya tinggi, dan curah
   hujan menjadi faktor penting dalam membedakan subtipenya.

   Pembagian:
   Kelompok A dibagi menjadi Af, Am, Aw, dan As berdasarkan
   pola curah hujan dan musim kering.

   Persebaran wilayah:
   Banyak ditemukan di Indonesia, Asia Tenggara,
   Cekungan Amazon, Cekungan Kongo, serta wilayah tropis lainnya.

   Subtipe pada kelompok A:
   - Af — Hutan Hujan Tropis
   - Am — Monsun Tropis
   - Aw — Savana Tropis
   - As — Tropis dengan Kemarau Musim Panas

   Ketik salah satu kode di atas, misalnya "Af",
   untuk mendapatkan penjelasan yang lebih rinci.

   ========================================================= */