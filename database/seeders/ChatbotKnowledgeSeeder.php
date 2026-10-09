<?php

namespace Database\Seeders;

use App\Models\ChatbotKnowledge;
use Illuminate\Database\Seeder;

class ChatbotKnowledgeSeeder extends Seeder
{
    public function run(): void
    {
        /*
        |--------------------------------------------------------------------------
        | Bersihkan knowledge lama
        |--------------------------------------------------------------------------
        */

        ChatbotKnowledge::query()->delete();

        $now = now();

        /*
        |--------------------------------------------------------------------------
        | Pengetahuan umum
        |--------------------------------------------------------------------------
        */

        $knowledge = [
            [
                'title' => 'Apa itu Klasifikasi Iklim Köppen?',
                'module' => null,
                'content' => 'Klasifikasi iklim Köppen adalah sistem pengelompokan iklim dunia berdasarkan suhu dan curah hujan, yang dicetuskan oleh Wladimir Köppen. Hasilnya berupa kode huruf: huruf pertama menunjukkan kelompok iklim (A-E), huruf kedua pola curah hujan, dan huruf ketiga tingkat suhu.',
                'keywords' => 'apa itu köppen koppen klasifikasi iklim sistem klasifikasi iklim suhu curah hujan wladimir köppen',
            ],

            [
                'title' => 'Kode Iklim Indonesia',
                'module' => null,
                'content' => "Indonesia umumnya berada di kelompok A (tropis):\n- Af: hutan hujan tropis, mis. Kalimantan dan Sumatra\n- Am: monsun tropis, sebagian wilayah dengan musim kering singkat\n- Aw: savana tropis, mis. Jawa Timur, NTB, NTT\n\nDi dataran tinggi tertentu bisa ditemukan iklim sejuk, tetapi sebagian besar wilayah tetap A.",
                'keywords' => 'kode iklim indonesia indonesia iklim tropis af am aw kalimantan sumatra jawa timur ntb ntt',
            ],

            [
                'title' => 'Perbedaan Af Am Aw',
                'module' => null,
                'content' => "Ketiganya sama-sama iklim tropis (suhu ≥ 18°C). Bedanya ada di hujan:\n- Af: semua bulan hujan ≥ 60 mm, tidak ada musim kering\n- Am: ada musim kering singkat, tapi hujan total tinggi\n- Aw: musim kemarau jelas, savana",
                'keywords' => 'beda af am aw perbedaan af am aw iklim tropis musim hujan musim kemarau',
            ],

            [
                'title' => 'Iklim Surabaya',
                'module' => null,
                'content' => 'Surabaya umumnya diklasifikasikan Aw (savana tropis): suhu selalu ≥ 18°C dan ada musim kemarau yang jelas, biasanya sekitar Juni sampai September.',
                'keywords' => 'iklim surabaya surabaya aw savana tropis jawa timur musim kemarau juni september',
            ],

            [
                'title' => 'Daftar Kode Iklim Köppen',
                'module' => null,
                'content' => "Daftar kode iklim Köppen:\n\nTropis (A): Af, Am, Aw, As\nKering (B): BWh, BWk, BSh, BSk\nSubtropis/Sedang (C): Csa, Csb, Csc, Cwa, Cwb, Cwc, Cfa, Cfb, Cfc\nKontinental/Dingin (D): Dsa, Dsb, Dsc, Dsd, Dwa, Dwb, Dwc, Dwd, Dfa, Dfb, Dfc, Dfd\nKutub (E): ET, EF\n\nKetik salah satu kode, misalnya \"Aw\", untuk melihat penjelasannya.",
                'keywords' => 'daftar daftar kode semua kode kode iklim köppen koppen af am aw as bwh bwk bsh bsk csa csb csc cwa cwb cwc cfa cfb cfc dsa dsb dsc dsd dwa dwb dwc dwd dfa dfb dfc dfd et ef',
            ],
        ];

        /*
        |--------------------------------------------------------------------------
        | Data 31 kode Köppen
        |--------------------------------------------------------------------------
        */

        $codes = [
            [
                'code' => 'Af',
                'name' => 'Hutan Hujan Tropis',
                'temp' => 'Semua bulan bersuhu ≥ 18°C (umumnya 25-28°C sepanjang tahun).',
                'rain' => 'Setiap bulan hujan ≥ 60 mm, tidak ada musim kering.',
                'example' => 'Pontianak, Singapura, Cekungan Amazon, Cekungan Kongo.',
                'vegetation' => 'Hutan hujan lebat, pohon tinggi dan berlapis-lapis.',
            ],
            [
                'code' => 'Am',
                'name' => 'Monsun Tropis',
                'temp' => 'Semua bulan bersuhu ≥ 18°C.',
                'rain' => 'Ada musim kering singkat (bulan terkering < 60 mm), tetapi hujan total tahunan sangat tinggi sehingga tanah tetap lembap.',
                'example' => 'Miami, Kochi (India), pesisir barat Semenanjung India.',
                'vegetation' => 'Hutan monsun dan hutan hujan tropis.',
            ],
            [
                'code' => 'Aw',
                'name' => 'Savana Tropis',
                'temp' => 'Semua bulan bersuhu ≥ 18°C.',
                'rain' => 'Ada musim kemarau yang jelas (bulan terkering < 60 mm) dan hujan total tidak cukup untuk menjaga tanah tetap lembap.',
                'example' => 'Surabaya (umumnya diklasifikasikan Aw), Kupang, Darwin, Mumbai.',
                'vegetation' => 'Padang rumput savana dengan pohon tersebar, hutan gugur musiman.',
            ],
            [
                'code' => 'As',
                'name' => 'Tropis dengan Kemarau Musim Panas',
                'temp' => 'Semua bulan bersuhu ≥ 18°C.',
                'rain' => 'Musim kering terjadi saat musim panas. Tipe ini sangat langka.',
                'example' => 'Hanya di sebagian kecil wilayah pesisir (misalnya Hawaii).',
                'vegetation' => 'Hutan tropis kering hingga savana.',
            ],

            [
                'code' => 'BWh',
                'name' => 'Gurun Panas',
                'temp' => 'Suhu rata-rata tahunan ≥ 18°C; siang sangat panas, malam bisa dingin.',
                'rain' => 'Sangat sedikit (umumnya di bawah 250 mm per tahun), penguapan melebihi curah hujan.',
                'example' => 'Gurun Sahara, Gurun Arab, Kairo, Riyadh.',
                'vegetation' => 'Semak jarang, kaktus dan tumbuhan tahan kering (xerofit), oasis.',
            ],
            [
                'code' => 'BWk',
                'name' => 'Gurun Dingin',
                'temp' => 'Suhu rata-rata tahunan < 18°C; musim dingin bisa sangat dingin.',
                'rain' => 'Sangat sedikit, tergolong gurun.',
                'example' => 'Gurun Gobi, Gurun Taklamakan, sebagian Patagonia.',
                'vegetation' => 'Semak kerdil dan tumbuhan tahan kering.',
            ],
            [
                'code' => 'BSh',
                'name' => 'Stepa Panas',
                'temp' => 'Suhu rata-rata tahunan ≥ 18°C.',
                'rain' => 'Sedikit, tetapi lebih banyak daripada gurun; zona peralihan antara gurun dan wilayah lembap.',
                'example' => 'Sahel (Afrika), India barat laut, pedalaman Australia.',
                'vegetation' => 'Padang rumput pendek dan semak.',
            ],
            [
                'code' => 'BSk',
                'name' => 'Stepa Dingin',
                'temp' => 'Suhu rata-rata tahunan < 18°C; musim dingin dingin.',
                'rain' => 'Sedikit, tergolong semi-kering.',
                'example' => 'Great Plains (AS), Denver, stepa Asia Tengah, Anatolia tengah.',
                'vegetation' => 'Padang rumput stepa.',
            ],

            [
                'code' => 'Csa',
                'name' => 'Mediterania Musim Panas Panas',
                'temp' => 'Bulan terpanas ≥ 22°C.',
                'rain' => 'Musim panas kering, hujan turun terutama saat musim dingin.',
                'example' => 'Athena, Roma, Lisbon, pesisir selatan Spanyol.',
                'vegetation' => 'Semak berdaun keras, pohon zaitun, anggur.',
            ],
            [
                'code' => 'Csb',
                'name' => 'Mediterania Musim Panas Hangat',
                'temp' => 'Bulan terpanas < 22°C, minimal 4 bulan bersuhu ≥ 10°C.',
                'rain' => 'Musim panas kering, hujan terutama saat musim dingin.',
                'example' => 'San Francisco, Porto, pesisir Chile tengah.',
                'vegetation' => 'Hutan dan semak berdaun keras.',
            ],
            [
                'code' => 'Csc',
                'name' => 'Mediterania Musim Panas Sejuk',
                'temp' => 'Kurang dari 4 bulan bersuhu ≥ 10°C.',
                'rain' => 'Musim panas kering. Tipe ini sangat langka.',
                'example' => 'Sebagian kecil dataran tinggi, misalnya di Andes dan pesisir barat Amerika.',
                'vegetation' => 'Hutan konifer dan semak pegunungan.',
            ],
            [
                'code' => 'Cwa',
                'name' => 'Subtropis Lembap Kemarau Musim Dingin',
                'temp' => 'Bulan terpanas ≥ 22°C.',
                'rain' => 'Musim dingin kering, hujan lebat saat musim panas.',
                'example' => 'Hong Kong, Guangzhou, Utara India.',
                'vegetation' => 'Hutan subtropis dan lahan pertanian (padi, teh).',
            ],
            [
                'code' => 'Cwb',
                'name' => 'Dataran Tinggi Subtropis Kemarau Musim Dingin',
                'temp' => 'Bulan terpanas < 22°C, minimal 4 bulan bersuhu ≥ 10°C.',
                'rain' => 'Musim dingin kering, musim panas basah.',
                'example' => 'Mexico City, Johannesburg, dataran tinggi Ethiopia.',
                'vegetation' => 'Hutan pegunungan dan padang rumput dataran tinggi.',
            ],
            [
                'code' => 'Cwc',
                'name' => 'Subtropis Kemarau Musim Dingin Sejuk',
                'temp' => 'Kurang dari 4 bulan bersuhu ≥ 10°C.',
                'rain' => 'Musim dingin kering. Tipe ini sangat langka.',
                'example' => 'Sebagian kecil dataran tinggi Andes (Bolivia).',
                'vegetation' => 'Padang rumput dan semak dataran tinggi.',
            ],
            [
                'code' => 'Cfa',
                'name' => 'Subtropis Lembap',
                'temp' => 'Bulan terpanas ≥ 22°C, musim panas panas dan lembap.',
                'rain' => 'Hujan merata sepanjang tahun, tidak ada musim kering.',
                'example' => 'Tokyo, Sydney, Buenos Aires, tenggara Amerika Serikat.',
                'vegetation' => 'Hutan campuran, hutan daun lebar, lahan pertanian.',
            ],
            [
                'code' => 'Cfb',
                'name' => 'Oseanik',
                'temp' => 'Bulan terpanas < 22°C, minimal 4 bulan bersuhu ≥ 10°C; musim panas sejuk, musim dingin tidak terlalu dingin.',
                'rain' => 'Hujan merata sepanjang tahun.',
                'example' => 'London, Paris, Melbourne, Selandia Baru, Bogotá.',
                'vegetation' => 'Hutan gugur, padang rumput hijau.',
            ],
            [
                'code' => 'Cfc',
                'name' => 'Oseanik Subpolar',
                'temp' => 'Kurang dari 4 bulan bersuhu ≥ 10°C; musim panas pendek dan sejuk.',
                'rain' => 'Hujan merata sepanjang tahun.',
                'example' => 'Reykjavik (Islandia), Kepulauan Faroe.',
                'vegetation' => 'Padang rumput dan semak, hampir tanpa pohon besar.',
            ],

            [
                'code' => 'Dsa',
                'name' => 'Kontinental Musim Panas Kering dan Panas',
                'temp' => 'Bulan terpanas ≥ 22°C, musim dingin dingin.',
                'rain' => 'Musim panas kering. Tipe ini langka.',
                'example' => 'Sebagian pegunungan Iran dan Anatolia timur.',
                'vegetation' => 'Padang rumput dan hutan terbuka.',
            ],
            [
                'code' => 'Dsb',
                'name' => 'Kontinental Musim Panas Kering dan Hangat',
                'temp' => 'Bulan terpanas < 22°C, minimal 4 bulan ≥ 10°C.',
                'rain' => 'Musim panas kering.',
                'example' => 'Pegunungan di barat laut Amerika, Spokane, sebagian Turki.',
                'vegetation' => 'Hutan konifer pegunungan.',
            ],
            [
                'code' => 'Dsc',
                'name' => 'Subarktik Musim Panas Kering',
                'temp' => 'Kurang dari 4 bulan ≥ 10°C, musim dingin dingin.',
                'rain' => 'Musim panas kering. Tipe ini langka.',
                'example' => 'Sebagian pegunungan tinggi di wilayah beriklim Mediterania.',
                'vegetation' => 'Hutan konifer (taiga) pegunungan.',
            ],
            [
                'code' => 'Dsd',
                'name' => 'Subarktik Ekstrem Musim Panas Kering',
                'temp' => 'Bulan terdingin < -38°C.',
                'rain' => 'Musim panas kering. Tipe ini sangat langka.',
                'example' => 'Hanya di sedikit lokasi pegunungan tinggi di lintang tinggi.',
                'vegetation' => 'Taiga atau tundra pegunungan.',
            ],
            [
                'code' => 'Dwa',
                'name' => 'Kontinental Musim Dingin Kering dan Panas',
                'temp' => 'Bulan terpanas ≥ 22°C, musim dingin sangat dingin.',
                'rain' => 'Musim dingin kering, hujan terutama saat musim panas.',
                'example' => 'Beijing, Seoul, Pyongyang.',
                'vegetation' => 'Hutan campuran dan lahan pertanian.',
            ],
            [
                'code' => 'Dwb',
                'name' => 'Kontinental Musim Dingin Kering dan Hangat',
                'temp' => 'Bulan terpanas < 22°C, minimal 4 bulan ≥ 10°C.',
                'rain' => 'Musim dingin kering.',
                'example' => 'Timur laut Tiongkok, sebagian Mongolia dan Siberia selatan.',
                'vegetation' => 'Hutan konifer dan campuran.',
            ],
            [
                'code' => 'Dwc',
                'name' => 'Subarktik Musim Dingin Kering',
                'temp' => 'Kurang dari 4 bulan ≥ 10°C, musim dingin sangat dingin.',
                'rain' => 'Musim dingin kering.',
                'example' => 'Siberia timur dan sebagian Mongolia utara.',
                'vegetation' => 'Taiga (hutan konifer).',
            ],
            [
                'code' => 'Dwd',
                'name' => 'Subarktik Ekstrem Musim Dingin Kering',
                'temp' => 'Bulan terdingin < -38°C: salah satu iklim terdingin di dunia.',
                'rain' => 'Musim dingin kering.',
                'example' => 'Oymyakon (Siberia timur).',
                'vegetation' => 'Taiga jarang yang tahan dingin ekstrem.',
            ],
            [
                'code' => 'Dfa',
                'name' => 'Kontinental Lembap Musim Panas Panas',
                'temp' => 'Bulan terpanas ≥ 22°C, musim dingin dingin.',
                'rain' => 'Hujan merata sepanjang tahun.',
                'example' => 'Chicago, Kansas City, sebagian Eropa timur.',
                'vegetation' => 'Padang rumput prairi dan hutan gugur.',
            ],
            [
                'code' => 'Dfb',
                'name' => 'Kontinental Lembap Musim Panas Hangat',
                'temp' => 'Bulan terpanas < 22°C, minimal 4 bulan ≥ 10°C.',
                'rain' => 'Hujan merata sepanjang tahun.',
                'example' => 'Moskow, Toronto, Kanada selatan, Eropa timur.',
                'vegetation' => 'Hutan campuran dan hutan konifer.',
            ],
            [
                'code' => 'Dfc',
                'name' => 'Subarktik',
                'temp' => 'Kurang dari 4 bulan ≥ 10°C; musim dingin panjang dan sangat dingin.',
                'rain' => 'Hujan merata sepanjang tahun.',
                'example' => 'Fairbanks (Alaska), Siberia, Skandinavia utara.',
                'vegetation' => 'Taiga (hutan konifer luas).',
            ],
            [
                'code' => 'Dfd',
                'name' => 'Subarktik Ekstrem',
                'temp' => 'Bulan terdingin < -38°C.',
                'rain' => 'Hujan merata sepanjang tahun.',
                'example' => 'Yakutsk dan Verkhoyansk (Siberia timur).',
                'vegetation' => 'Taiga yang jarang.',
            ],

            [
                'code' => 'ET',
                'name' => 'Tundra',
                'temp' => 'Bulan terpanas antara 0°C dan 10°C.',
                'rain' => 'Sedikit, sebagian besar berupa salju; tanah membeku (permafrost).',
                'example' => 'Pesisir Arktik, pegunungan tinggi (Andes, Himalaya bagian atas).',
                'vegetation' => 'Lumut, rumput, dan semak kerdil; tidak ada pohon.',
            ],
            [
                'code' => 'EF',
                'name' => 'Es Abadi (Kutub)',
                'temp' => 'Semua bulan di bawah 0°C.',
                'rain' => 'Sangat sedikit, berupa salju; tertutup es sepanjang tahun.',
                'example' => 'Antartika dan pedalaman Greenland.',
                'vegetation' => 'Hampir tidak ada tumbuhan.',
            ],
        ];

        /*
        |--------------------------------------------------------------------------
        | Masukkan 31 kode ke knowledge
        |--------------------------------------------------------------------------
        */

        foreach ($codes as $item) {
            $knowledge[] = [
                'title' => "Kode {$item['code']} - {$item['name']}",
                'module' => null,
                'content' =>
                    "Kode {$item['code']}: {$item['name']}\n\n" .
                    "Suhu: {$item['temp']}\n" .
                    "Hujan: {$item['rain']}\n" .
                    "Contoh wilayah: {$item['example']}\n" .
                    "Vegetasi: {$item['vegetation']}",
                'keywords' =>
                    strtolower(
                        "{$item['code']} {$item['name']} " .
                        "{$item['temp']} {$item['rain']} " .
                        "{$item['example']} {$item['vegetation']}"
                    ),
            ];
        }

        /*
        |--------------------------------------------------------------------------
        | Arti huruf pertama
        |--------------------------------------------------------------------------
        */

        $knowledge[] = [
            'title' => 'Arti Huruf Pertama Köppen',
            'module' => null,
            'content' => "Huruf pertama menunjukkan kelompok utama iklim:\n\nA: iklim tropis: semua bulan bersuhu ≥ 18°C\nB: iklim kering: penguapan lebih besar daripada curah hujan\nC: iklim subtropis/sedang: bulan terdingin antara -3°C dan 18°C\nD: iklim kontinental/dingin: bulan terdingin di bawah -3°C\nE: iklim kutub: bulan terpanas di bawah 10°C",
            'keywords' => 'huruf pertama köppen A B C D E kelompok utama tropis kering subtropis kontinental kutub',
        ];

        /*
        |--------------------------------------------------------------------------
        | Arti huruf kedua
        |--------------------------------------------------------------------------
        */

        $knowledge[] = [
            'title' => 'Arti Huruf Kedua Köppen',
            'module' => null,
            'content' => "Huruf kedua menunjukkan pola curah hujan atau karakteristik iklim:\n\nf: hujan merata sepanjang tahun, tidak ada musim kering (f = feucht, basah)\nm: monsun: ada musim kering singkat, tetapi hujan total tahunan sangat tinggi\nw: ada musim kering saat musim dingin (w = winter dry)\ns: ada musim kering saat musim panas (s = summer dry)\nW: gurun (W = Wüste)\nS: stepa (S = Steppe)\nT: tundra\nF: es abadi (F = Frost)",
            'keywords' => 'huruf kedua köppen f m w s W S T F hujan monsun gurun stepa tundra es',
        ];

        /*
        |--------------------------------------------------------------------------
        | Arti huruf ketiga
        |--------------------------------------------------------------------------
        */

        $knowledge[] = [
            'title' => 'Arti Huruf Ketiga Köppen',
            'module' => null,
            'content' => "Huruf ketiga menunjukkan karakteristik suhu:\n\nh: panas (suhu rata-rata tahunan ≥ 18°C)\nk: dingin (suhu rata-rata tahunan < 18°C)\na: musim panas sangat hangat (bulan terpanas ≥ 22°C)\nb: musim panas hangat (bulan terpanas < 22°C, minimal 4 bulan ≥ 10°C)\nc: musim panas sejuk (kurang dari 4 bulan ≥ 10°C)\nd: musim dingin ekstrem (bulan terdingin < -38°C)",
            'keywords' => 'huruf ketiga köppen h k a b c d suhu panas dingin musim panas musim dingin',
        ];

        /*
        |--------------------------------------------------------------------------
        | Simpan semua
        |--------------------------------------------------------------------------
        */

        foreach ($knowledge as $item) {
            ChatbotKnowledge::create([
                'title' => $item['title'],
                'module' => $item['module'],
                'content' => $item['content'],
                'keywords' => $item['keywords'],
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
    }
}