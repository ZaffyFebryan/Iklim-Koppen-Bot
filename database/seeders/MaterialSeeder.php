<?php

namespace Database\Seeders;

use App\Models\Material;
use Illuminate\Database\Seeder;

class MaterialSeeder extends Seeder
{
    public function run(): void
    {
        $materials = [
            [
                'module_number' => 1,
                'title' => 'Modul 1: Pengertian Klasifikasi Iklim Köppen',
                'description' => 'Memahami sejarah, dasar pengelompokan, dan kode huruf dalam sistem klasifikasi iklim Köppen.',
                'student_content' => [
                    'hero_title' => 'Pengertian Klasifikasi Iklim Köppen',
                    'hero_description' => 'Memahami sejarah, dasar pengelompokan, dan kode huruf dalam sistem klasifikasi iklim Köppen.',
                    'tags' => ['🌍 Geografi', '⏱️ 10 menit'],
                    'sections' => [
                        [
                            'type' => 'text',
                            'title' => 'Apa Itu Klasifikasi Iklim Köppen?',
                            'content' => 'Klasifikasi iklim Köppen merupakan sistem untuk mengelompokkan iklim berdasarkan karakteristik suhu dan curah hujan suatu wilayah.',
                        ],
                        [
                            'type' => 'text',
                            'title' => 'Sejarah Sistem Köppen',
                            'content' => 'Wladimir Köppen hidup pada 1846–1940 dan mengembangkan sistem klasifikasi iklim yang diperkenalkan sekitar tahun 1884. Sistem tersebut kemudian disempurnakan pada 1918 dan 1936. Georgi Philipovich Geiger kemudian ikut mengembangkan sistem tersebut sehingga dikenal sebagai klasifikasi Köppen-Geiger.',
                        ],
                        [
                            'type' => 'highlight',
                            'title' => 'Tahukah Kamu?',
                            'content' => 'Sistem Köppen menggunakan data suhu dan curah hujan untuk menentukan karakteristik iklim suatu wilayah.',
                        ],
                        [
                            'type' => 'text',
                            'title' => 'Köppen dan Junghuhn',
                            'content' => 'Berbeda dengan pembagian iklim Junghuhn yang berkaitan dengan ketinggian dan vegetasi, Köppen menggunakan rata-rata suhu bulanan atau tahunan serta curah hujan sebagai dasar utama. Vegetasi digunakan sebagai indikator karakteristik iklim.',
                        ],
                        [
                            'type' => 'list',
                            'title' => 'Kelompok Utama Iklim Köppen',
                            'items' => [
                                'A — Tropis',
                                'B — Kering',
                                'C — Subtropis Lembap',
                                'D — Kontinental',
                                'E — Kutub',
                            ],
                        ],
                        [
                            'type' => 'text',
                            'title' => 'Cara Membaca Kode Iklim',
                            'content' => 'Huruf pertama menunjukkan kelompok utama iklim. Huruf kedua menunjukkan karakteristik atau pola curah hujan. Huruf ketiga, pada tipe tertentu, menunjukkan karakteristik suhu.',
                            'example' => 'Contoh: Af menunjukkan kelompok A dengan karakteristik curah hujan yang tidak memiliki musim kering yang nyata.',
                        ],
                    ],
                    'summary' => [
                        'Köppen mengelompokkan iklim berdasarkan suhu dan curah hujan.',
                        'Sistem Köppen diperkenalkan pada akhir abad ke-19 dan terus disempurnakan.',
                        'Sistem ini kemudian dikenal sebagai Köppen-Geiger.',
                        'Kode iklim terdiri atas huruf yang menunjukkan karakteristik iklim tertentu.',
                    ],
                ],
                'teacher_content' => [
                    'hero_title' => 'Pengertian Klasifikasi Iklim Köppen',
                    'hero_description' => 'Membantu guru menjelaskan sejarah, dasar pengelompokan, dan kode huruf dalam sistem klasifikasi iklim Köppen.',
                    'tags' => ['🌍 Geografi', '👨‍🏫 Pegangan Guru', '⏱️ 10 menit'],
                    'focus' => [
                        'Menjelaskan pengertian klasifikasi iklim Köppen.',
                        'Menjelaskan sejarah perkembangan sistem Köppen.',
                        'Membantu siswa memahami lima kelompok utama.',
                        'Melatih siswa membaca kode iklim secara bertahap.',
                    ],
                    'sections' => [
                        [
                            'type' => 'text',
                            'title' => 'Apa Itu Klasifikasi Iklim Köppen?',
                            'content' => 'Klasifikasi iklim Köppen merupakan sistem untuk mengelompokkan iklim berdasarkan karakteristik suhu dan curah hujan suatu wilayah.',
                        ],
                        [
                            'type' => 'text',
                            'title' => 'Catatan untuk Guru',
                            'content' => 'Jelaskan bahwa sistem Köppen tidak hanya menggunakan satu unsur iklim. Suhu dan curah hujan digunakan bersama untuk menentukan kelompok dan tipe iklim.',
                        ],
                        [
                            'type' => 'text',
                            'title' => 'Cara Membaca Kode Iklim',
                            'content' => 'Huruf pertama menunjukkan kelompok iklim, huruf kedua menjelaskan pola curah hujan, dan huruf ketiga pada tipe tertentu menunjukkan karakteristik suhu.',
                        ],
                    ],
                    'summary' => [
                        'Köppen menggunakan suhu dan curah hujan sebagai dasar klasifikasi.',
                        'Sistem Köppen berkembang menjadi Köppen-Geiger.',
                        'Siswa perlu mengenali kelompok A sampai E terlebih dahulu.',
                        'Kode iklim sebaiknya dibaca secara bertahap.',
                    ],
                ],
            ],

            [
                'module_number' => 2,
                'title' => 'Modul 2: Kriteria Suhu dan Curah Hujan',
                'description' => 'Memahami unsur iklim yang digunakan dalam klasifikasi Köppen.',
                'student_content' => [
                    'hero_title' => 'Kriteria Suhu dan Curah Hujan',
                    'hero_description' => 'Mengenal cara suhu udara dan curah hujan digunakan untuk menentukan kelompok serta tipe iklim suatu wilayah.',
                    'tags' => ['🌡️ Suhu Udara', '💧 Curah Hujan', '⏱️ 10 menit'],
                    'sections' => [
                        [
                            'type' => 'text',
                            'title' => 'Materi 2.1 — Unsur Iklim dalam Klasifikasi Köppen',
                            'content' => 'Suhu udara dan curah hujan merupakan unsur penting yang digunakan untuk menentukan klasifikasi iklim Köppen.',
                        ],
                        [
                            'type' => 'text',
                            'title' => 'Suhu Udara',
                            'content' => 'Perhatikan suhu rata-rata bulan terdingin dan bulan terpanas. Sebagai contoh, jika suhu bulan terdingin tetap lebih dari 18°C sepanjang tahun, wilayah tersebut biasanya termasuk kelompok tropis A.',
                        ],
                        [
                            'type' => 'list',
                            'title' => 'Data Suhu yang Diperhatikan',
                            'items' => [
                                'Suhu rata-rata bulan terdingin.',
                                'Suhu rata-rata bulan terpanas.',
                            ],
                        ],
                        [
                            'type' => 'text',
                            'title' => 'Curah Hujan',
                            'content' => 'Selain suhu, perhatikan curah hujan bulan terkering dan jumlah curah hujan tahunan. Sebagai contoh, curah hujan bulan terkering kurang dari 60 mm dapat menunjukkan adanya periode kering yang jelas.',
                        ],
                        [
                            'type' => 'list',
                            'title' => 'Data Curah Hujan yang Diperhatikan',
                            'items' => [
                                'Curah hujan bulan terkering.',
                                'Jumlah curah hujan tahunan.',
                            ],
                        ],
                    ],
                    'summary' => [
                        'Suhu merupakan salah satu dasar penentuan kelompok iklim.',
                        'Suhu bulan terdingin dan terpanas perlu diperhatikan.',
                        'Curah hujan bulan terkering membantu membaca pola musim.',
                        'Curah hujan tahunan membantu memahami tingkat kelembapan.',
                        'Suhu dan curah hujan perlu dibaca secara bersama-sama.',
                    ],
                ],
                'teacher_content' => [
                    'hero_title' => 'Kriteria Suhu dan Curah Hujan',
                    'hero_description' => 'Membimbing guru menjelaskan unsur suhu udara dan curah hujan dalam klasifikasi Köppen.',
                    'tags' => ['🌡️ Suhu Udara', '💧 Curah Hujan', '👨‍🏫 Pegangan Guru'],
                    'focus' => [
                        'Menjelaskan data suhu yang digunakan.',
                        'Menjelaskan data curah hujan yang digunakan.',
                        'Membimbing siswa membaca data secara bertahap.',
                        'Menghubungkan suhu dan curah hujan dengan kelompok iklim.',
                    ],
                    'sections' => [
                        [
                            'type' => 'text',
                            'title' => 'Suhu Udara',
                            'content' => 'Ajak siswa memperhatikan suhu bulan terdingin dan bulan terpanas. Gunakan contoh sederhana sebelum masuk ke klasifikasi yang lebih spesifik.',
                        ],
                        [
                            'type' => 'text',
                            'title' => 'Catatan untuk Guru',
                            'content' => 'Tekankan bahwa data suhu tidak berdiri sendiri. Setelah kelompok iklim dikenali, data curah hujan digunakan untuk menentukan karakteristik berikutnya.',
                        ],
                        [
                            'type' => 'text',
                            'title' => 'Curah Hujan',
                            'content' => 'Perhatikan curah hujan bulan terkering dan jumlah curah hujan tahunan. Gunakan data bulanan agar siswa dapat melihat pola musim.',
                        ],
                        [
                            'type' => 'text',
                            'title' => 'Menghubungkan Suhu dan Curah Hujan',
                            'content' => 'Arahkan siswa membaca suhu terlebih dahulu, kemudian melihat pola curah hujan sesuai dengan kelompok iklim yang diperoleh.',
                        ],
                    ],
                    'summary' => [
                        'Mulai dari data suhu.',
                        'Perhatikan suhu bulan terdingin dan terpanas.',
                        'Lanjutkan dengan curah hujan sesuai kelompok iklim.',
                        'Gunakan pola data untuk menjelaskan alasan klasifikasi.',
                        'Hindari meminta siswa sekadar menghafalkan kode.',
                    ],
                ],
            ],

            [
                'module_number' => 3,
                'title' => 'Modul 3: Kelompok Iklim A, B, C, D, dan E',
                'description' => 'Mengenal karakteristik kelompok iklim A, B, C, D, dan E.',
                'student_content' => [
                    'hero_title' => 'Kelompok Iklim A, B, C, D, dan E',
                    'hero_description' => 'Memahami lima kelompok utama iklim Köppen berdasarkan karakteristik suhu dan curah hujan setiap wilayah.',
                    'tags' => ['🌴 Tropis', '🏜️ Kering', '🌤️ Sedang', '❄️ Kontinental dan Kutub'],
                    'sections' => [
                        [
                            'type' => 'text',
                            'title' => 'Lima Kelompok Utama Iklim Köppen',
                            'content' => 'Sistem klasifikasi iklim Köppen membagi iklim dunia menjadi lima kelompok utama, yaitu A, B, C, D, dan E. Setiap kelompok memiliki karakteristik suhu dan curah hujan yang berbeda.',
                        ],
                        [
                            'type' => 'climate_group',
                            'code' => 'A',
                            'title' => 'Iklim Tropis',
                            'icon' => '🌴',
                            'content' => 'Iklim tropis dicirikan oleh suhu bulan terdingin yang tetap lebih dari 18°C sepanjang tahun. Wilayah ini tidak mengalami musim dingin.',
                            'subtypes' => [
                                'Af — hutan hujan tropis dengan curah hujan bulan terkering ≥60 mm.',
                                'Am — iklim tropis monsun dengan musim kering pendek.',
                                'Aw — iklim sabana tropis dengan musim kering yang jelas.',
                            ],
                        ],
                        [
                            'type' => 'climate_group',
                            'code' => 'B',
                            'title' => 'Iklim Kering',
                            'icon' => '🏜️',
                            'content' => 'Ciri utama iklim B adalah tingkat penguapan yang lebih besar daripada curah hujan yang turun sehingga wilayah cenderung kering atau gersang.',
                            'subtypes' => [
                                'BW — iklim gurun.',
                                'BS — iklim stepa.',
                                'h — kondisi panas.',
                                'k — kondisi dingin.',
                            ],
                        ],
                        [
                            'type' => 'climate_group',
                            'code' => 'C',
                            'title' => 'Iklim Sedang',
                            'icon' => '🌤️',
                            'content' => 'Kelompok C memiliki suhu bulan terdingin antara -3°C sampai 18°C dan suhu bulan terpanas di atas 10°C.',
                            'subtypes' => [
                                's — musim panas kering.',
                                'w — musim dingin kering.',
                                'f — tidak memiliki musim kering yang signifikan.',
                                'a, b, c — karakteristik suhu musim panas.',
                            ],
                        ],
                        [
                            'type' => 'climate_group',
                            'code' => 'D',
                            'title' => 'Iklim Kontinental',
                            'icon' => '❄️',
                            'content' => 'Iklim kontinental memiliki variasi suhu musiman yang besar dan umumnya ditemukan di wilayah lintang tengah hingga tinggi di belahan bumi utara.',
                            'subtypes' => [
                                'Df — lembap kontinental.',
                                'Dw — kontinental dengan musim dingin kering.',
                                'd — musim dingin yang sangat ekstrem.',
                            ],
                        ],
                        [
                            'type' => 'climate_group',
                            'code' => 'E',
                            'title' => 'Iklim Kutub',
                            'icon' => '🧊',
                            'content' => 'Kelompok E dicirikan oleh suhu bulan terpanas yang tetap di bawah 10°C sepanjang tahun.',
                            'subtypes' => [
                                'ET — tundra.',
                                'EF — es abadi.',
                            ],
                        ],
                    ],
                    'summary' => [
                        'A adalah kelompok iklim tropis.',
                        'B adalah kelompok iklim kering.',
                        'C adalah kelompok iklim sedang.',
                        'D adalah kelompok iklim kontinental.',
                        'E adalah kelompok iklim kutub.',
                    ],
                ],
                'teacher_content' => [
                    'hero_title' => 'Kelompok Iklim A, B, C, D, dan E',
                    'hero_description' => 'Membantu guru menjelaskan lima kelompok utama iklim A, B, C, D, dan E.',
                    'tags' => ['🌴 Tropis', '🏜️ Kering', '🌤️ Sedang', '❄️ Kontinental', '🧊 Kutub'],
                    'focus' => [
                        'Siswa memahami karakteristik utama iklim tropis.',
                        'Siswa memahami karakteristik iklim kering dan pembagian gurun serta stepa.',
                        'Siswa memahami karakteristik iklim sedang dan kontinental.',
                        'Siswa memahami karakteristik iklim kutub serta perbedaan ET dan EF.',
                    ],
                    'sections' => [
                        [
                            'type' => 'text',
                            'title' => 'Materi 3.1 — Lima Kelompok Utama Iklim Köppen',
                            'content' => 'Pada modul ini, guru dapat membantu siswa mengenali kelompok A sampai E sebelum mempelajari kode iklim yang lebih khusus.',
                        ],
                        [
                            'type' => 'climate_group',
                            'code' => 'A',
                            'title' => 'Iklim Tropis',
                            'icon' => '🌴',
                            'content' => 'Iklim tropis dicirikan oleh suhu bulan terdingin yang tetap lebih dari 18°C sepanjang tahun. Perbedaan Af, Am, dan Aw berkaitan dengan pola curah hujan dan musim kering.',
                            'subtypes' => [
                                'Af — hutan hujan tropis.',
                                'Am — tropis monsun.',
                                'Aw — sabana tropis.',
                            ],
                        ],
                        [
                            'type' => 'climate_group',
                            'code' => 'B',
                            'title' => 'Iklim Kering',
                            'icon' => '🏜️',
                            'content' => 'Tekankan bahwa kelompok B berhubungan dengan kondisi kering. BW menunjukkan gurun, BS menunjukkan stepa, sedangkan h dan k menunjukkan kondisi panas atau dingin.',
                            'subtypes' => [
                                'BWh — gurun panas.',
                                'BSh — stepa panas.',
                                'BWk — gurun dingin.',
                                'BSk — stepa dingin.',
                            ],
                        ],
                        [
                            'type' => 'climate_group',
                            'code' => 'C',
                            'title' => 'Iklim Sedang',
                            'icon' => '🌤️',
                            'content' => 'Kelompok C memiliki suhu bulan terdingin antara -3°C sampai 18°C dan suhu bulan terpanas di atas 10°C. Huruf kedua menunjukkan pola musim kering dan huruf ketiga menunjukkan karakteristik suhu musim panas.',
                            'subtypes' => [
                                'Cf — tidak ada musim kering yang signifikan.',
                                'Cw — musim dingin kering.',
                                'Cs — musim panas kering.',
                            ],
                        ],
                        [
                            'type' => 'climate_group',
                            'code' => 'D',
                            'title' => 'Iklim Kontinental',
                            'icon' => '❄️',
                            'content' => 'Iklim kontinental dicirikan oleh variasi suhu musiman yang besar. Pola huruf kedua dan ketiga serupa dengan kelompok C, dengan tambahan d untuk musim dingin yang sangat ekstrem.',
                        ],
                        [
                            'type' => 'climate_group',
                            'code' => 'E',
                            'title' => 'Iklim Kutub',
                            'icon' => '🧊',
                            'content' => 'Kelompok E dicirikan oleh suhu bulan terpanas yang tetap di bawah 10°C sepanjang tahun. ET menunjukkan tundra dan EF menunjukkan es abadi.',
                        ],
                    ],
                    'summary' => [
                        'Mulai pembelajaran dari lima kelompok utama A sampai E.',
                        'Gunakan karakteristik suhu untuk membedakan kelompok.',
                        'Setelah kelompok diketahui, perhatikan pola curah hujan.',
                        'Kenalkan kode secara bertahap.',
                        'Gunakan contoh wilayah untuk menghubungkan teori dengan kondisi nyata.',
                    ],
                ],
            ],

            [
                'module_number' => 4,
                'title' => 'Modul 4: Perbedaan Tipe Iklim yang Mirip',
                'description' => 'Mengenal perbedaan tipe iklim yang memiliki karakteristik serupa.',
                'student_content' => [
                    'hero_title' => 'Perbedaan Tipe Iklim yang Mirip',
                    'hero_description' => 'Memahami perbedaan beberapa tipe iklim Köppen yang memiliki karakteristik serupa berdasarkan suhu dan curah hujan.',
                    'tags' => ['🌧️ Am vs Aw', '☀️ Cs vs Cw', '🌵 BW vs BS'],
                    'sections' => [
                        [
                            'type' => 'text',
                            'title' => 'Yuk, Pahami Bedanya!',
                            'content' => 'Beberapa kode iklim terlihat mirip. Kunci membedakannya adalah memperhatikan karakteristik yang menjadi pembeda utama.',
                        ],
                        [
                            'type' => 'comparison',
                            'title' => 'Am vs Aw',
                            'subtitle' => 'Iklim tropis dengan perbedaan pola curah hujan',
                            'left' => 'Am — Tropis Monsun. Curah hujan tahunan tetap tinggi karena musim hujan sangat basah dan dipengaruhi angin muson.',
                            'right' => 'Aw — Tropis Sabana. Curah hujan tahunan tidak cukup tinggi dan musim kering lebih jelas serta lebih panjang.',
                            'note' => 'Keduanya memiliki curah hujan bulan terkering <60 mm. Perbedaannya terutama pada curah hujan tahunan dan karakter musim kering.',
                        ],
                        [
                            'type' => 'comparison',
                            'title' => 'Cs vs Cw',
                            'subtitle' => 'Iklim sedang dengan waktu musim kering berbeda',
                            'left' => 'Cs — musim panas kering.',
                            'right' => 'Cw — musim dingin kering.',
                            'note' => 'Kunci membedakannya adalah waktu terjadinya musim kering.',
                        ],
                        [
                            'type' => 'comparison',
                            'title' => 'BW vs BS',
                            'subtitle' => 'Iklim kering dengan tingkat kekeringan berbeda',
                            'left' => 'BW — gurun, sangat kering.',
                            'right' => 'BS — stepa, lebih kering daripada wilayah lembap tetapi tidak seekstrem gurun.',
                            'note' => 'Keduanya merupakan iklim kering, tetapi BW jauh lebih kering daripada BS.',
                        ],
                    ],
                    'summary' => [
                        'Am dan Aw dibedakan terutama berdasarkan pola curah hujan dan karakter musim kering.',
                        'Cs berarti musim panas kering, sedangkan Cw berarti musim dingin kering.',
                        'BW menunjukkan gurun, sedangkan BS menunjukkan stepa.',
                    ],
                ],
                'teacher_content' => [
                    'hero_title' => 'Perbedaan Tipe Iklim yang Mirip',
                    'hero_description' => 'Membimbing siswa membedakan tipe iklim Köppen yang memiliki karakteristik serupa.',
                    'tags' => ['🌧️ Pola Curah Hujan', '🌡️ Karakter Suhu', '🔎 Membandingkan Kode', '⏱️ 10 menit'],
                    'focus' => [
                        'Membandingkan pola curah hujan.',
                        'Mengidentifikasi waktu musim kering.',
                        'Mengenali tingkat kekeringan.',
                    ],
                    'sections' => [
                        [
                            'type' => 'text',
                            'title' => 'Catatan Guru',
                            'content' => 'Jangan hanya meminta siswa menghafalkan kode. Gunakan strategi sederhana: tentukan kelompok terlebih dahulu, kemudian cari pembeda berdasarkan curah hujan atau suhu.',
                        ],
                        [
                            'type' => 'comparison',
                            'title' => 'Am vs Aw',
                            'left' => 'Am — tropis monsun dengan curah hujan tahunan tetap tinggi.',
                            'right' => 'Aw — tropis sabana dengan musim kering lebih jelas dan panjang.',
                            'note' => 'Gunakan pola curah hujan bulanan untuk menunjukkan perbedaannya.',
                        ],
                        [
                            'type' => 'comparison',
                            'title' => 'Cs vs Cw',
                            'left' => 'Cs — musim panas kering.',
                            'right' => 'Cw — musim dingin kering.',
                            'note' => 'Sebelum menentukan huruf kedua, tanyakan kepada siswa kapan musim kering terjadi.',
                        ],
                        [
                            'type' => 'comparison',
                            'title' => 'BW vs BS',
                            'left' => 'BW — gurun.',
                            'right' => 'BS — stepa.',
                            'note' => 'Tekankan bahwa W berarti gurun dan S berarti stepa.',
                        ],
                    ],
                    'strategy' => [
                        'Kelompok apa?',
                        'Bagaimana karakteristik suhunya?',
                        'Bagaimana pola curah hujannya?',
                        'Kapan periode kering terjadi?',
                        'Apa pembeda utamanya?',
                    ],
                    'summary' => [
                        'Bandingkan pola curah hujan untuk Am dan Aw.',
                        'Perhatikan waktu musim kering untuk Cs dan Cw.',
                        'Perhatikan tingkat kekeringan untuk BW dan BS.',
                    ],
                ],
            ],

            [
                'module_number' => 5,
                'title' => 'Modul 5: Klasifikasi Wilayah Berdasarkan Data',
                'description' => 'Mengenal cara menentukan klasifikasi iklim berdasarkan data suhu dan curah hujan.',
                'student_content' => [
                    'hero_title' => 'Klasifikasi Wilayah Berdasarkan Data',
                    'hero_description' => 'Berlatih membaca data suhu dan curah hujan untuk menentukan klasifikasi iklim suatu wilayah berdasarkan kriteria Köppen.',
                    'tags' => ['🌡️ Data Suhu', '💧 Curah Hujan', '📊 Analisis Data', '🎯 Menentukan Tipe Iklim'],
                    'sections' => [
                        [
                            'type' => 'text',
                            'title' => 'Dari Data Menjadi Kode Iklim',
                            'content' => 'Untuk menentukan klasifikasi iklim, ikuti langkah pembacaan data secara berurutan.',
                        ],
                        [
                            'type' => 'steps',
                            'title' => 'Langkah Menentukan Klasifikasi',
                            'items' => [
                                'Cek suhu bulan terdingin. Gunakan suhu bulan terdingin untuk menentukan kelompok A, B, C, D, atau E.',
                                'Cek curah hujan bulan terkering. Jika termasuk kelompok A, C, atau D, periksa curah hujan bulan terkering untuk menentukan karakteristik berikutnya.',
                                'Periksa suhu musim panas jika diperlukan. Untuk kelompok C dan D, suhu musim panas dapat menentukan huruf ketiga.',
                            ],
                        ],
                        [
                            'type' => 'example',
                            'title' => 'Contoh Wilayah X',
                            'data' => [
                                'Suhu bulan terdingin' => '25°C',
                                'Curah hujan bulan terkering' => '80 mm',
                            ],
                            'steps' => [
                                '25°C ≥18°C sehingga wilayah masuk kelompok A.',
                                'Curah hujan bulan terkering 80 mm ≥60 mm sehingga berdasarkan contoh digunakan huruf f.',
                                'Hasil klasifikasi: Af.',
                            ],
                            'result' => 'Af — iklim tropis tanpa musim kering yang nyata berdasarkan contoh data.',
                        ],
                    ],
                    'summary' => [
                        'Mulai dengan suhu bulan terdingin.',
                        'Lanjutkan dengan curah hujan bulan terkering sesuai kelompok.',
                        'Gunakan suhu musim panas jika diperlukan.',
                    ],
                    'practice' => 'Buka Chatbot dan masukkan data suhu serta curah hujan. GeoBot dapat membantu menentukan kode iklim berdasarkan data yang diberikan.',
                ],
                'teacher_content' => [
                    'hero_title' => 'Klasifikasi Wilayah Berdasarkan Data',
                    'hero_description' => 'Membimbing siswa menentukan kode iklim Köppen berdasarkan data suhu dan curah hujan.',
                    'tags' => ['🌡️ Data Suhu', '🌧️ Curah Hujan', '🧭 Analisis Wilayah', '⏱️ 15 menit'],
                    'focus' => [
                        'Membaca data suhu.',
                        'Membaca data curah hujan.',
                        'Mengikuti urutan klasifikasi.',
                        'Menjelaskan alasan hasil klasifikasi.',
                    ],
                    'sections' => [
                        [
                            'type' => 'text',
                            'title' => 'Dari Data Menjadi Kode Iklim',
                            'content' => 'Bimbing siswa membaca data secara berurutan dan jangan meminta siswa menebak kode iklim.',
                        ],
                        [
                            'type' => 'steps',
                            'title' => 'Langkah Klasifikasi',
                            'items' => [
                                'Cek suhu bulan terdingin.',
                                'Cek curah hujan bulan terkering sesuai kelompok.',
                                'Periksa suhu musim panas jika diperlukan.',
                            ],
                        ],
                        [
                            'type' => 'example',
                            'title' => 'Contoh Wilayah X',
                            'data' => [
                                'Suhu bulan terdingin' => '25°C',
                                'Curah hujan bulan terkering' => '80 mm',
                            ],
                            'steps' => [
                                '25°C ≥18°C sehingga masuk kelompok A.',
                                '80 mm ≥60 mm sehingga berdasarkan contoh digunakan huruf f.',
                                'Hasil: Af.',
                            ],
                            'result' => 'Af — iklim tropis tanpa musim kering yang nyata berdasarkan contoh data.',
                        ],
                        [
                            'type' => 'questions',
                            'title' => 'Pertanyaan untuk Siswa',
                            'items' => [
                                'Data mana yang dilihat terlebih dahulu?',
                                'Mengapa wilayah masuk kelompok iklim tersebut?',
                                'Data apa yang digunakan untuk huruf berikutnya?',
                            ],
                        ],
                    ],
                    'summary' => [
                        'Mulai dari suhu bulan terdingin.',
                        'Periksa curah hujan bulan terkering sesuai kelompok.',
                        'Gunakan data secara berurutan dan jelaskan alasannya.',
                    ],
                ],
            ],

            [
                'module_number' => 6,
                'title' => 'Modul 6: Dampak Iklim terhadap Kehidupan',
                'description' => 'Mengenal pengaruh tipe iklim terhadap kehidupan dan aktivitas manusia.',
                'student_content' => [
                    'hero_title' => 'Dampak Iklim terhadap Kehidupan',
                    'hero_description' => 'Memahami bagaimana tipe iklim memengaruhi kegiatan pertanian, lingkungan, dan kehidupan penduduk di berbagai wilayah.',
                    'tags' => ['🌴 Tropis', '🌵 Kering', '🌤️ Sedang', '❄️ Kontinental', '🧊 Kutub'],
                    'sections' => [
                        [
                            'type' => 'text',
                            'title' => 'Iklim Memengaruhi Kehidupan Sehari-hari',
                            'content' => 'Tipe iklim suatu wilayah berpengaruh besar terhadap kegiatan penduduk, terutama dalam pertanian, pemanfaatan lingkungan, dan cara memenuhi kebutuhan hidup.',
                        ],
                        [
                            'type' => 'climate_group',
                            'code' => 'A',
                            'title' => 'Iklim Tropis',
                            'icon' => '🌴',
                            'items' => [
                                'Cocok untuk pertanian sepanjang tahun, seperti padi dan kelapa sawit.',
                                'Memiliki hutan hujan yang lebat.',
                                'Kelembapan udara tinggi.',
                            ],
                        ],
                        [
                            'type' => 'climate_group',
                            'code' => 'B',
                            'title' => 'Iklim Kering',
                            'icon' => '🌵',
                            'items' => [
                                'Pertanian terbatas dan biasanya memerlukan irigasi khusus.',
                                'Penduduk sering melakukan peternakan atau hidup nomaden.',
                            ],
                        ],
                        [
                            'type' => 'climate_group',
                            'code' => 'C',
                            'title' => 'Iklim Sedang',
                            'icon' => '🍇',
                            'items' => [
                                'Cocok untuk pertanian musiman.',
                                'Contoh tanaman: gandum dan anggur di wilayah Mediterania.',
                            ],
                        ],
                        [
                            'type' => 'climate_group',
                            'code' => 'D',
                            'title' => 'Iklim Kontinental',
                            'icon' => '❄️',
                            'items' => [
                                'Memiliki musim tanam yang terbatas.',
                                'Memerlukan persiapan khusus untuk menghadapi musim dingin ekstrem.',
                            ],
                        ],
                        [
                            'type' => 'climate_group',
                            'code' => 'E',
                            'title' => 'Iklim Kutub',
                            'icon' => '🧊',
                            'items' => [
                                'Kondisi iklim menyulitkan kegiatan pertanian.',
                                'Penduduk biasanya bergantung pada perikanan atau berburu.',
                            ],
                        ],
                        [
                            'type' => 'highlight',
                            'title' => 'Contoh di Indonesia — Mengapa Indonesia Subur?',
                            'content' => 'Sebagian besar wilayah Indonesia masuk tipe iklim A (tropis). Hal ini menjadi salah satu alasan mengapa Indonesia subur dan cocok untuk kegiatan pertanian sepanjang tahun.',
                        ],
                    ],
                    'summary' => 'Setiap tipe iklim memiliki dampak yang berbeda terhadap kehidupan penduduk. Iklim tropis mendukung pertanian sepanjang tahun, sedangkan iklim kering, kontinental, dan kutub memiliki keterbatasan atau kebutuhan khusus dalam kegiatan sehari-hari.',
                ],
                'teacher_content' => [
                    'hero_title' => 'Dampak Iklim terhadap Kehidupan',
                    'hero_description' => 'Membantu siswa memahami bagaimana karakteristik iklim suatu wilayah berhubungan dengan lingkungan, pertanian, dan aktivitas penduduk.',
                    'tags' => ['🌍 Karakter Iklim', '🌱 Pertanian', '🏘️ Kehidupan Penduduk', '⏱️ 15 menit'],
                    'focus' => [
                        'Menghubungkan iklim dan lingkungan.',
                        'Menghubungkan iklim dan pertanian.',
                        'Mengamati adaptasi penduduk.',
                        'Menggunakan contoh nyata.',
                    ],
                    'sections' => [
                        [
                            'type' => 'text',
                            'title' => 'Iklim Memengaruhi Kehidupan Sehari-hari',
                            'content' => 'Tipe iklim suatu wilayah berpengaruh terhadap kondisi lingkungan, pilihan kegiatan ekonomi, pola pertanian, serta cara penduduk menyesuaikan diri dengan lingkungan tempat tinggalnya.',
                        ],
                        [
                            'type' => 'climate_group',
                            'code' => 'A',
                            'title' => 'Iklim Tropis',
                            'icon' => '🌴',
                            'items' => [
                                'Cocok untuk berbagai kegiatan pertanian karena suhu hangat dan curah hujan relatif tinggi.',
                                'Mendukung keberadaan hutan hujan dan vegetasi yang lebat.',
                                'Kelembapan udara cenderung tinggi.',
                            ],
                        ],
                        [
                            'type' => 'climate_group',
                            'code' => 'B',
                            'title' => 'Iklim Kering',
                            'icon' => '🌵',
                            'items' => [
                                'Kegiatan pertanian dapat terbatas dan sering membutuhkan pengelolaan air atau irigasi.',
                                'Peternakan dapat menjadi salah satu kegiatan yang berkembang di wilayah tertentu.',
                            ],
                        ],
                        [
                            'type' => 'climate_group',
                            'code' => 'C',
                            'title' => 'Iklim Sedang',
                            'icon' => '🍇',
                            'items' => [
                                'Mendukung berbagai kegiatan pertanian dengan pola musim yang lebih jelas.',
                                'Jenis tanaman dapat menyesuaikan kondisi suhu dan curah hujan setempat.',
                            ],
                        ],
                        [
                            'type' => 'climate_group',
                            'code' => 'D',
                            'title' => 'Iklim Kontinental',
                            'icon' => '❄️',
                            'items' => [
                                'Musim tanam dapat lebih terbatas karena perbedaan suhu antarmusim.',
                                'Kegiatan penduduk perlu menyesuaikan diri dengan musim dingin yang dapat berlangsung cukup panjang.',
                            ],
                        ],
                        [
                            'type' => 'climate_group',
                            'code' => 'E',
                            'title' => 'Iklim Kutub',
                            'icon' => '🧊',
                            'items' => [
                                'Kondisi suhu sangat rendah membatasi kegiatan pertanian.',
                                'Kegiatan penduduk lebih banyak menyesuaikan diri dengan lingkungan dingin dan sumber daya setempat.',
                            ],
                        ],
                        [
                            'type' => 'teacher_note',
                            'title' => 'Catatan untuk Guru',
                            'content' => 'Tekankan bahwa klasifikasi iklim menjelaskan karakteristik iklim, sedangkan dampak terhadap kehidupan merupakan contoh hubungan antara kondisi iklim dengan lingkungan dan aktivitas manusia. Hindari menyampaikan bahwa satu tipe iklim selalu menghasilkan kondisi sosial yang sama di semua wilayah.',
                        ],
                        [
                            'type' => 'highlight',
                            'title' => 'Contoh di Indonesia',
                            'content' => 'Sebagian besar wilayah Indonesia memiliki karakter iklim tropis. Suhu yang relatif hangat dan pola curah hujan yang mendukung membuat kondisi iklim menjadi salah satu faktor yang diperhatikan dalam kegiatan pertanian dan pengelolaan lingkungan.',
                        ],
                    ],
                    'summary' => [
                        'Setiap kelompok iklim memiliki karakteristik suhu dan curah hujan yang berbeda.',
                        'Karakter iklim dapat berhubungan dengan kondisi lingkungan dan kegiatan manusia.',
                        'Contoh wilayah nyata dapat digunakan untuk membantu memahami penerapan klasifikasi iklim.',
                        'Kondisi iklim bukan satu-satunya faktor yang menentukan kehidupan penduduk; faktor lingkungan, sosial, ekonomi, dan budaya juga berperan.',
                    ],
                ],
            ],
        ];

        foreach ($materials as $index => $material) {
            Material::updateOrCreate(
                [
                    'module_number' => $material['module_number'],
                ],
                [
                    'title' => $material['title'],
                    'description' => $material['description'],
                    'student_content' => json_encode(
                        $material['student_content'],
                        JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
                    ),
                    'teacher_content' => json_encode(
                        $material['teacher_content'],
                        JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
                    ),
                    'is_published' => true,
                    'order' => $index + 1,
                ]
            );
        }
    }
}