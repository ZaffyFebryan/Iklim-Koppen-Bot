<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\ChatbotKnowledge;
use Illuminate\Http\Request;

class ChatbotController extends Controller
{
    /**
     * =========================================================
     * DAFTAR SEMUA KODE IKLIM KÖPPEN
     * =========================================================
     */
    private const KOPPEN_CODES = [
        // A - Tropis
        'Af',
        'Am',
        'Aw',
        'As',

        // B - Kering
        'BWh',
        'BWk',
        'BSh',
        'BSk',

        // C - Subtropis / Sedang
        'Csa',
        'Csb',
        'Csc',
        'Cwa',
        'Cwb',
        'Cwc',
        'Cfa',
        'Cfb',
        'Cfc',

        // D - Kontinental / Dingin
        'Dsa',
        'Dsb',
        'Dsc',
        'Dsd',
        'Dwa',
        'Dwb',
        'Dwc',
        'Dwd',
        'Dfa',
        'Dfb',
        'Dfc',
        'Dfd',

        // E - Kutub
        'ET',
        'EF',
    ];

    /**
     * =========================================================
     * DATA KELOMPOK IKLIM A-E
     *
     * Dipakai ketika user mengetik:
     * - A
     * - tipe A
     * - kelompok A
     * - iklim tropis
     * - tipe iklim A
     * dan variasi lainnya.
     * =========================================================
     */
    private const KOPPEN_GROUPS = [
        'A' => [
            'nama' => 'Tropis',

            'pengertian' =>
                'Kelompok iklim A adalah iklim tropis, yaitu wilayah yang memiliki suhu rata-rata setiap bulan sepanjang tahun selalu ≥ 18°C. Iklim ini umumnya terdapat di wilayah lintang rendah di sekitar garis khatulistiwa.',

            'ciri' =>
                'Suhu rata-rata setiap bulan sepanjang tahun selalu ≥ 18°C. Amplitudo atau selisih suhu tahunan relatif kecil, kelembapan udara umumnya tinggi, dan wilayahnya menerima penyinaran matahari yang kuat sepanjang tahun.',

            'pembagian' =>
                'Kelompok A dibedakan berdasarkan pola curah hujan menjadi Af (hutan hujan tropis), Am (monsun tropis), Aw (savana tropis), dan As (tropis dengan kemarau musim panas yang sangat langka).',

            'persebaran' =>
                'Tersebar di wilayah sekitar garis khatulistiwa, seperti sebagian besar Indonesia dan Asia Tenggara, Cekungan Amazon di Amerika Selatan, serta Cekungan Kongo di Afrika Tengah.',

            'subtipe' => [
                'Af' => 'Hutan Hujan Tropis',
                'Am' => 'Monsun Tropis',
                'Aw' => 'Savana Tropis',
                'As' => 'Tropis dengan Kemarau Musim Panas',
            ],
        ],

        'B' => [
            'nama' => 'Kering',

            'pengertian' =>
                'Kelompok iklim B adalah iklim kering, yaitu wilayah yang mengalami kondisi kekurangan air karena penguapan atau evapotranspirasi lebih besar daripada curah hujan.',

            'ciri' =>
                'Curah hujan relatif rendah dibandingkan kebutuhan air wilayah. Udara cenderung kering dan pada wilayah gurun perbedaan suhu antara siang dan malam dapat sangat besar.',

            'pembagian' =>
                'Kelompok B terbagi menjadi BW (gurun) dan BS (stepa atau semi-kering). Masing-masing dapat dibedakan menjadi h untuk kondisi panas dan k untuk kondisi dingin.',

            'persebaran' =>
                'Umumnya ditemukan pada wilayah subtropis sekitar 20°–35° LU/LS serta wilayah pedalaman benua yang jauh dari pengaruh laut, seperti Gurun Sahara, Jazirah Arab, Gurun Gobi, dan pedalaman Australia.',

            'subtipe' => [
                'BWh' => 'Gurun Panas',
                'BWk' => 'Gurun Dingin',
                'BSh' => 'Stepa Panas',
                'BSk' => 'Stepa Dingin',
            ],
        ],

        'C' => [
            'nama' => 'Subtropis / Sedang',

            'pengertian' =>
                'Kelompok iklim C adalah iklim subtropis atau sedang. Suhu bulan terdingin berada pada kisaran -3°C sampai 18°C, sedangkan bulan terpanas memiliki suhu di atas 10°C.',

            'ciri' =>
                'Memiliki variasi suhu musiman yang lebih jelas dibandingkan iklim tropis. Musim panas dan musim dingin dapat dirasakan, tetapi musim dinginnya tidak seekstrem kelompok D.',

            'pembagian' =>
                'Kelompok C terbagi menjadi Cs dengan musim panas kering atau Mediterania, Cw dengan musim dingin kering, dan Cf dengan kondisi lembap sepanjang tahun. Subtipe selanjutnya menggunakan a, b, atau c berdasarkan karakteristik suhu musim panas.',

            'persebaran' =>
                'Umumnya ditemukan pada lintang tengah sekitar 30°–50° LU/LS, seperti kawasan Mediterania, Eropa barat, Tiongkok selatan, Australia bagian tertentu, dan tenggara Amerika Serikat.',

            'subtipe' => [
                'Csa' => 'Mediterania Musim Panas Panas',
                'Csb' => 'Mediterania Musim Panas Hangat',
                'Csc' => 'Mediterania Musim Panas Sejuk',
                'Cwa' => 'Subtropis Lembap Kemarau Musim Dingin',
                'Cwb' => 'Dataran Tinggi Subtropis Kemarau Musim Dingin',
                'Cwc' => 'Subtropis Kemarau Musim Dingin Sejuk',
                'Cfa' => 'Subtropis Lembap',
                'Cfb' => 'Oseanik',
                'Cfc' => 'Oseanik Subpolar',
            ],
        ],

        'D' => [
            'nama' => 'Kontinental / Dingin',

            'pengertian' =>
                'Kelompok iklim D adalah iklim kontinental atau dingin. Suhu bulan terdingin berada di bawah -3°C, sedangkan bulan terpanas berada di atas 10°C.',

            'ciri' =>
                'Memiliki perbedaan suhu antara musim panas dan musim dingin yang besar. Musim dingin dapat berlangsung panjang dan sangat dingin, terutama di wilayah pedalaman benua.',

            'pembagian' =>
                'Kelompok D terbagi menjadi Ds dengan musim panas kering, Dw dengan musim dingin kering, dan Df dengan kondisi lembap sepanjang tahun. Subtipe a, b, c, dan d menunjukkan karakteristik suhu musim panas dan tingkat ekstrem musim dingin.',

            'persebaran' =>
                'Banyak ditemukan di belahan bumi utara karena terdapat daratan luas pada lintang tinggi, seperti Siberia, Kanada, Skandinavia utara, dan Mongolia.',

            'subtipe' => [
                'Dsa' => 'Kontinental Musim Panas Kering dan Panas',
                'Dsb' => 'Kontinental Musim Panas Kering dan Hangat',
                'Dsc' => 'Subarktik Musim Panas Kering',
                'Dsd' => 'Subarktik Ekstrem Musim Panas Kering',
                'Dwa' => 'Kontinental Musim Dingin Kering dan Panas',
                'Dwb' => 'Kontinental Musim Dingin Kering dan Hangat',
                'Dwc' => 'Subarktik Musim Dingin Kering',
                'Dwd' => 'Subarktik Ekstrem Musim Dingin Kering',
                'Dfa' => 'Kontinental Lembap Musim Panas Panas',
                'Dfb' => 'Kontinental Lembap Musim Panas Hangat',
                'Dfc' => 'Subarktik',
                'Dfd' => 'Subarktik Ekstrem',
            ],
        ],

        'E' => [
            'nama' => 'Kutub',

            'pengertian' =>
                'Kelompok iklim E adalah iklim kutub atau polar, yaitu wilayah yang memiliki suhu sangat rendah sepanjang tahun. Suhu bulan terpanas selalu berada di bawah 10°C.',

            'ciri' =>
                'Tidak mengalami musim panas yang sebenarnya. Suhu rendah berlangsung sepanjang tahun dan sebagian besar presipitasi dapat berupa salju.',

            'pembagian' =>
                'Kelompok E terbagi menjadi ET (tundra) dan EF (es abadi). ET memiliki bulan terpanas antara 0°C dan 10°C, sedangkan EF memiliki seluruh bulan dengan suhu di bawah 0°C.',

            'persebaran' =>
                'Ditemukan di lintang sangat tinggi mendekati kutub, seperti wilayah pesisir Arktik, Antartika, pedalaman Greenland, serta beberapa puncak pegunungan tinggi.',

            'subtipe' => [
                'ET' => 'Tundra',
                'EF' => 'Es Abadi (Kutub)',
            ],
        ],
    ];

    /**
     * =========================================================
     * POST /student/chatbot
     * =========================================================
     */
    public function chat(Request $request)
    {
        $validated = $request->validate([
            'message' => ['required', 'string', 'max:2000'],
        ]);

        $message = trim($validated['message']);
        $normalized = $this->normalize($message);

        /*
        |--------------------------------------------------------------------------
        | 1. KODE KÖPPEN SPESIFIK
        |--------------------------------------------------------------------------
        |
        | Contoh:
        | Af
        | aw
        | kode aw
        | apa arti BWh?
        | jelaskan iklim Cfb
        |
        */

        $code = $this->detectKoppenCode($message);

        if ($code) {
            $knowledge = ChatbotKnowledge::where(
                'title',
                'like',
                "Kode {$code} -%"
            )->first();

            if ($knowledge) {
                return $this->successResponse(
                    $knowledge->content,
                    'knowledge'
                );
            }

            /*
             * Kalau knowledge DB belum memiliki kode tersebut,
             * berikan informasi dasar dari kelompoknya.
             */
            $group = strtoupper(substr($code, 0, 1));

            if (isset(self::KOPPEN_GROUPS[$group])) {
                $groupData = self::KOPPEN_GROUPS[$group];

                $message = "Kode {$code} termasuk kelompok iklim {$group} — {$groupData['nama']}.\n\n";
                $message .= "Pengertian kelompok: {$groupData['pengertian']}\n\n";
                $message .= "Ciri kelompok: {$groupData['ciri']}\n\n";

                if (isset($groupData['subtipe'][$code])) {
                    $message .= "Nama tipe {$code}: {$groupData['subtipe'][$code]}\n\n";
                }

                $message .= "Untuk penjelasan lengkap kode {$code}, pastikan data kode tersebut sudah tersedia di knowledge base.";

                return $this->successResponse(
                    $message,
                    'group'
                );
            }
        }

        /*
        |--------------------------------------------------------------------------
        | 2. KELOMPOK IKLIM A-E
        |--------------------------------------------------------------------------
        |
        | Ini bagian penting untuk menangani:
        |
        | "tipe a"
        | "tipe A"
        | "kelompok a"
        | "iklim A"
        | "golongan A"
        | "jelaskan tipe A"
        | "pengertian tipe A"
        |
        */

        $group = $this->detectKoppenGroup($normalized);

        if ($group) {
            return $this->successResponse(
                $this->buildGroupResponse($group),
                'group'
            );
        }

        /*
        |--------------------------------------------------------------------------
        | 3. DAFTAR SEMUA KODE
        |--------------------------------------------------------------------------
        */

        if (
            $normalized === 'daftar' ||
            $normalized === 'daftar kode' ||
            $normalized === 'semua kode' ||
            str_contains($normalized, 'daftar kode iklim')
        ) {
            $knowledge = ChatbotKnowledge::where(
                'title',
                'Daftar Kode Iklim Köppen'
            )->first();

            if ($knowledge) {
                return $this->successResponse(
                    $knowledge->content,
                    'knowledge'
                );
            }

            return $this->successResponse(
                $this->buildAllCodesResponse(),
                'system'
            );
        }

        /*
        |--------------------------------------------------------------------------
        | 4. PERBEDAAN AF AM AW
        |--------------------------------------------------------------------------
        */

        if (
            str_contains($normalized, 'beda af am aw') ||
            str_contains($normalized, 'perbedaan af am aw') ||
            (
                str_contains($normalized, 'af') &&
                str_contains($normalized, 'am') &&
                str_contains($normalized, 'aw')
            )
        ) {
            $knowledge = ChatbotKnowledge::where(
                'title',
                'Perbedaan Af Am Aw'
            )->first();

            if ($knowledge) {
                return $this->successResponse(
                    $knowledge->content,
                    'knowledge'
                );
            }

            return $this->successResponse(
                "Af, Am, dan Aw sama-sama termasuk kelompok iklim A (tropis).\n\n" .
                "• Af — Hutan Hujan Tropis: setiap bulan hujan ≥ 60 mm dan tidak memiliki musim kering.\n\n" .
                "• Am — Monsun Tropis: memiliki musim kering singkat, tetapi jumlah hujan tahunan tetap sangat tinggi.\n\n" .
                "• Aw — Savana Tropis: memiliki musim kemarau yang jelas.",
                'system'
            );
        }

        /*
        |--------------------------------------------------------------------------
        | 5. SURABAYA
        |--------------------------------------------------------------------------
        */

        if (
            str_contains($normalized, 'surabaya') &&
            (
                str_contains($normalized, 'iklim') ||
                str_contains($normalized, 'koppen') ||
                str_contains($normalized, 'köppen')
            )
        ) {
            $knowledge = ChatbotKnowledge::where(
                'title',
                'Iklim Surabaya'
            )->first();

            if ($knowledge) {
                return $this->successResponse(
                    $knowledge->content,
                    'knowledge'
                );
            }

            return $this->successResponse(
                'Surabaya umumnya diklasifikasikan sebagai Aw (savana tropis). Wilayah ini termasuk kelompok A atau iklim tropis dan memiliki musim kemarau yang cukup jelas.',
                'system'
            );
        }

        /*
        |--------------------------------------------------------------------------
        | 6. APA ITU KÖPPEN
        |--------------------------------------------------------------------------
        */

        if (
            str_contains($normalized, 'apa itu koppen') ||
            str_contains($normalized, 'apa itu köppen') ||
            str_contains($normalized, 'klasifikasi iklim koppen') ||
            str_contains($normalized, 'klasifikasi iklim köppen')
        ) {
            $knowledge = ChatbotKnowledge::where(
                'title',
                'Apa itu Klasifikasi Iklim Köppen?'
            )->first();

            if ($knowledge) {
                return $this->successResponse(
                    $knowledge->content,
                    'knowledge'
                );
            }

            return $this->successResponse(
                'Klasifikasi iklim Köppen adalah sistem pengelompokan iklim dunia berdasarkan suhu dan curah hujan. Sistem ini dikembangkan oleh Wladimir Köppen dan menghasilkan kelompok utama A, B, C, D, dan E.',
                'system'
            );
        }

        /*
        |--------------------------------------------------------------------------
        | 7. INDONESIA
        |--------------------------------------------------------------------------
        */

        if (
            str_contains($normalized, 'iklim indonesia') ||
            str_contains($normalized, 'kode iklim indonesia') ||
            (
                str_contains($normalized, 'indonesia') &&
                str_contains($normalized, 'koppen')
            )
        ) {
            $knowledge = ChatbotKnowledge::where(
                'title',
                'Kode Iklim Indonesia'
            )->first();

            if ($knowledge) {
                return $this->successResponse(
                    $knowledge->content,
                    'knowledge'
                );
            }

            return $this->successResponse(
                "Indonesia umumnya termasuk kelompok A atau iklim tropis.\n\n" .
                "Beberapa tipe yang dapat ditemukan antara lain:\n" .
                "• Af — Hutan Hujan Tropis\n" .
                "• Am — Monsun Tropis\n" .
                "• Aw — Savana Tropis\n\n" .
                "Perbedaan tipe tersebut terutama berkaitan dengan pola curah hujan dan musim kering.",
                'system'
            );
        }

        /*
        |--------------------------------------------------------------------------
        | 8. ARTI HURUF PERTAMA
        |--------------------------------------------------------------------------
        */

        if (
            str_contains($normalized, 'huruf pertama') ||
            str_contains($normalized, 'huruf 1') ||
            str_contains($normalized, 'arti huruf pertama')
        ) {
            $knowledge = ChatbotKnowledge::where(
                'title',
                'Arti Huruf Pertama Köppen'
            )->first();

            if ($knowledge) {
                return $this->successResponse(
                    $knowledge->content,
                    'knowledge'
                );
            }

            return $this->successResponse(
                "Huruf pertama pada klasifikasi Köppen menunjukkan kelompok iklim utama:\n\n" .
                "A = Tropis\n" .
                "B = Kering\n" .
                "C = Subtropis/Sedang\n" .
                "D = Kontinental/Dingin\n" .
                "E = Kutub",
                'system'
            );
        }

        /*
        |--------------------------------------------------------------------------
        | 9. ARTI HURUF KEDUA
        |--------------------------------------------------------------------------
        */

        if (
            str_contains($normalized, 'huruf kedua') ||
            str_contains($normalized, 'huruf 2') ||
            str_contains($normalized, 'arti huruf kedua')
        ) {
            $knowledge = ChatbotKnowledge::where(
                'title',
                'Arti Huruf Kedua Köppen'
            )->first();

            if ($knowledge) {
                return $this->successResponse(
                    $knowledge->content,
                    'knowledge'
                );
            }

            return $this->successResponse(
                "Huruf kedua menunjukkan pola curah hujan atau kondisi kelembapan:\n\n" .
                "f = hujan merata sepanjang tahun\n" .
                "m = monsun\n" .
                "w = musim dingin kering\n" .
                "s = musim panas kering\n" .
                "W = gurun\n" .
                "S = stepa",
                'system'
            );
        }

        /*
        |--------------------------------------------------------------------------
        | 10. ARTI HURUF KETIGA
        |--------------------------------------------------------------------------
        */

        if (
            str_contains($normalized, 'huruf ketiga') ||
            str_contains($normalized, 'huruf 3') ||
            str_contains($normalized, 'arti huruf ketiga')
        ) {
            $knowledge = ChatbotKnowledge::where(
                'title',
                'Arti Huruf Ketiga Köppen'
            )->first();

            if ($knowledge) {
                return $this->successResponse(
                    $knowledge->content,
                    'knowledge'
                );
            }

            return $this->successResponse(
                "Huruf ketiga digunakan untuk menunjukkan karakteristik suhu tertentu:\n\n" .
                "a = musim panas sangat hangat\n" .
                "b = musim panas hangat\n" .
                "c = musim panas sejuk\n" .
                "d = musim dingin ekstrem\n\n" .
                "Pada kelompok B, huruf ketiga juga dapat berupa h atau k untuk menunjukkan kondisi panas atau dingin.",
                'system'
            );
        }

        /*
        |--------------------------------------------------------------------------
        | 11. SAPAAN
        |--------------------------------------------------------------------------
        */

        if (in_array($normalized, [
            'halo',
            'hai',
            'hi',
            'hello',
            'p',
        ])) {
            return $this->successResponse(
                'Halo! 👋 Aku IklimKöppenBot. Kamu bisa bertanya tentang klasifikasi iklim Köppen, kelompok A-E, atau kode iklim seperti Af, Am, Aw, BWh, Cfb, dan lainnya. Kamu juga bisa mengetik "daftar kode".',
                'system'
            );
        }

        /*
        |--------------------------------------------------------------------------
        | 12. PENCARIAN KNOWLEDGE
        |--------------------------------------------------------------------------
        */

        $knowledge = $this->searchKnowledge($normalized);

        if ($knowledge) {
            return $this->successResponse(
                $knowledge->content,
                'knowledge'
            );
        }

        /*
        |--------------------------------------------------------------------------
        | 13. FALLBACK
        |--------------------------------------------------------------------------
        */

        return $this->successResponse(
            'Aku belum menemukan materi yang cukup relevan untuk menjawab pertanyaan tersebut. Coba tanyakan tentang kelompok A-E, kode iklim seperti Af, Am, Aw, BWh, Cfb, iklim Indonesia, iklim Surabaya, atau ketik "daftar kode".',
            'fallback'
        );
    }

    /**
     * =========================================================
     * RESPONSE HELPER
     * =========================================================
     */
    private function successResponse(
        string $message,
        string $source = 'system'
    ) {
        return response()->json([
            'success' => true,
            'message' => $message,
            'source' => $source,
        ]);
    }

    /**
     * =========================================================
     * NORMALISASI
     * =========================================================
     */
    private function normalize(string $text): string
    {
        $text = strtolower($text);

        $text = str_replace(
            [
                '?',
                '!',
                '.',
                ',',
                ';',
                ':',
                '"',
                "'",
                '(',
                ')',
                '-',
            ],
            ' ',
            $text
        );

        return trim(
            preg_replace('/\s+/', ' ', $text)
        );
    }

    /**
     * =========================================================
     * DETEKSI KODE KÖPPEN
     * =========================================================
     */
    private function detectKoppenCode(string $message): ?string
    {
        $clean = preg_replace(
            '/[^a-zA-Z0-9\s]/',
            ' ',
            $message
        );

        $words = preg_split(
            '/\s+/',
            trim($clean)
        );

        foreach ($words as $word) {
            foreach (self::KOPPEN_CODES as $code) {
                if (
                    strtolower($word) ===
                    strtolower($code)
                ) {
                    return $code;
                }
            }
        }

        return null;
    }

    /**
     * =========================================================
     * DETEKSI KELOMPOK A-E
     *
     * Contoh yang dikenali:
     *
     * A
     * tipe A
     * tipe a
     * tipe iklim A
     * kelompok A
     * golongan A
     * iklim A
     * jelaskan tipe A
     * pengertian tipe A
     *
     * Termasuk nama kelompok:
     *
     * iklim tropis
     * iklim kering
     * iklim subtropis
     * iklim kontinental
     * iklim kutub
     * =========================================================
     */
    private function detectKoppenGroup(string $normalized): ?string
    {
        /*
         * Kalau input hanya satu huruf A-E.
         */
        if (preg_match('/^[a-e]$/', $normalized)) {
            return strtoupper($normalized);
        }

        /*
         * Pola:
         * tipe a
         * tipe iklim a
         * kelompok a
         * kelompok iklim a
         * golongan a
         * golongan iklim a
         * iklim a
         * pengertian tipe a
         * jelaskan tipe a
         */
        foreach (['A', 'B', 'C', 'D', 'E'] as $group) {
            $lower = strtolower($group);

            $patterns = [
                "tipe {$lower}",
                "tipe iklim {$lower}",
                "kelompok {$lower}",
                "kelompok iklim {$lower}",
                "golongan {$lower}",
                "golongan iklim {$lower}",
                "iklim {$lower}",
                "pengertian tipe {$lower}",
                "pengertian kelompok {$lower}",
                "jelaskan tipe {$lower}",
                "jelaskan kelompok {$lower}",
                "jelaskan iklim {$lower}",
            ];

            foreach ($patterns as $pattern) {
                if (
                    $normalized === $pattern ||
                    str_contains($normalized, $pattern)
                ) {
                    return $group;
                }
            }
        }

        /*
         * Nama kelompok berdasarkan istilah sehari-hari.
         */
        $groupKeywords = [
            'iklim tropis' => 'A',
            'kelompok tropis' => 'A',
            'golongan tropis' => 'A',
            'tipe tropis' => 'A',

            'iklim kering' => 'B',
            'kelompok kering' => 'B',
            'golongan kering' => 'B',
            'iklim gurun' => 'B',
            'iklim arid' => 'B',

            'iklim subtropis' => 'C',
            'iklim sedang' => 'C',
            'kelompok sedang' => 'C',
            'golongan sedang' => 'C',

            'iklim kontinental' => 'D',
            'iklim dingin' => 'D',
            'kelompok dingin' => 'D',
            'golongan dingin' => 'D',

            'iklim kutub' => 'E',
            'iklim polar' => 'E',
            'kelompok kutub' => 'E',
            'golongan kutub' => 'E',
        ];

        foreach ($groupKeywords as $keyword => $group) {
            if (str_contains($normalized, $keyword)) {
                return $group;
            }
        }

        return null;
    }

    /**
     * =========================================================
     * MEMBUAT JAWABAN KELOMPOK A-E
     * =========================================================
     */
    private function buildGroupResponse(string $group): string
    {
        $data = self::KOPPEN_GROUPS[$group];

        $text = "Kelompok Iklim {$group} — {$data['nama']}\n\n";

        $text .= "📖 Pengertian\n";
        $text .= $data['pengertian'];
        $text .= "\n\n";

        $text .= "🌡️ Ciri Utama\n";
        $text .= $data['ciri'];
        $text .= "\n\n";

        $text .= "🌧️ Pembagian\n";
        $text .= $data['pembagian'];
        $text .= "\n\n";

        $text .= "🌍 Persebaran\n";
        $text .= $data['persebaran'];
        $text .= "\n\n";

        $text .= "📚 Subtipe Kelompok {$group}\n";

        foreach ($data['subtipe'] as $code => $name) {
            $text .= "• {$code} — {$name}\n";
        }

        $text .= "\n";
        $text .= "Ketik salah satu kode di atas, misalnya \"{$this->firstSubtype($data['subtipe'])}\", untuk melihat penjelasan yang lebih spesifik.";

        return $text;
    }

    /**
     * Mengambil kode pertama dari kelompok.
     */
    private function firstSubtype(array $subtypes): string
    {
        return array_key_first($subtypes) ?? '';
    }

    /**
     * =========================================================
     * DAFTAR SEMUA KODE
     * =========================================================
     */
    private function buildAllCodesResponse(): string
    {
        $text = "🌍 Daftar Kode Iklim Köppen\n\n";

        foreach (self::KOPPEN_GROUPS as $group => $data) {
            $text .= "{$group} — {$data['nama']}\n";

            foreach ($data['subtipe'] as $code => $name) {
                $text .= "• {$code} — {$name}\n";
            }

            $text .= "\n";
        }

        $text .= 'Ketik salah satu kode, misalnya "Aw", untuk melihat penjelasan lebih rinci.';

        return $text;
    }

    /**
     * =========================================================
     * SEARCH KNOWLEDGE
     * =========================================================
     */
    private function searchKnowledge(
        string $normalized
    ): ?ChatbotKnowledge {
        $knowledgeList = ChatbotKnowledge::all();

        $bestKnowledge = null;
        $bestScore = 0;

        foreach ($knowledgeList as $knowledge) {
            $score = 0;

            /*
             * Keywords
             */
            $keywords = $knowledge->keywords ?? '';

            if ($keywords !== '') {
                $keywordList = preg_split(
                    '/[,|]+/',
                    strtolower($keywords)
                );

                foreach ($keywordList as $keyword) {
                    $keyword = trim($keyword);

                    if (
                        $keyword !== '' &&
                        str_contains(
                            $normalized,
                            $keyword
                        )
                    ) {
                        $score += 2;
                    }
                }
            }

            /*
             * Judul knowledge
             */
            $title = $this->normalize(
                $knowledge->title
            );

            $titleWords = preg_split(
                '/\s+/',
                $title
            );

            foreach ($titleWords as $word) {
                if (
                    strlen($word) >= 3 &&
                    str_contains(
                        $normalized,
                        $word
                    )
                ) {
                    $score++;
                }
            }

            if ($score > $bestScore) {
                $bestScore = $score;
                $bestKnowledge = $knowledge;
            }
        }

        return $bestScore > 0
            ? $bestKnowledge
            : null;
    }
}