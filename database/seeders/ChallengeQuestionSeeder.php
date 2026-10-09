<?php

namespace Database\Seeders;

use App\Models\ChallengeQuestion;
use Illuminate\Database\Seeder;

class ChallengeQuestionSeeder extends Seeder
{
    public function run(): void
    {
        ChallengeQuestion::query()->delete();

        $questions = [
            [
                'number' => 1,
                'question' => 'Kota Surabaya memiliki suhu rata-rata bulan terdingin 27°C. Curah hujan bulan terkering 6 mm dan curah hujan tahunan 1.819 mm, dengan musim kering yang berlangsung panjang dan jelas dibandingkan musim hujan. Berdasarkan catatan kriteria tipe A, manakah penentuan tipe iklim Köppen yang tepat beserta alasannya?',
                'option_a' => 'Am, karena curah hujan tahunan sangat tinggi sepanjang tahun.',
                'option_b' => 'Af, karena suhu tahunan tergolong tinggi sepanjang tahun.',
                'option_c' => 'Aw, karena curah hujan bulan terkering di bawah 60 mm dan curah hujan tahunan (1.819 mm) < 25 x (100 – 25) = 2.350 mm, sehingga musim kering panjang dan tidak terkompensasi.',
                'option_d' => 'BS, karena curah hujan tahunan tergolong sangat rendah untuk wilayah tropis.',
                'option_e' => 'Cw, karena tidak ada musim kering yang jelas.',
                'image' => null,
                'correct_answer' => 'C',
            ],

            [
                'number' => 2,
                'question' => 'Dataran Tinggi Dieng berada di wilayah tropis dengan ketinggian sekitar 2.000 meter di atas permukaan laut. Suhu bulan terdingin berada di bawah 18°C, terdapat musim kemarau yang jelas, dan suhu musim panas relatif hangat. Berdasarkan informasi tersebut, faktor utama yang menyebabkan wilayah tersebut bertipe Cwb adalah?',
                'option_a' => 'Letaknya dekat dengan garis khatulistiwa.',
                'option_b' => 'Curah hujan tahunan yang selalu tinggi.',
                'option_c' => 'Pengaruh ketinggian tempat terhadap suhu serta adanya musim dingin kering.',
                'option_d' => 'Letaknya berada di wilayah gurun.',
                'option_e' => 'Suhu bulan terpanas selalu di bawah 10°C.',
                'image' => null,
                'correct_answer' => 'C',
            ],

            [
                'number' => 3,
                'question' => 'Vasya tinggal di Kabupaten Indramayu. Data iklim Kabupaten Indramayu mencatat suhu rata-rata bulan terdingin 27°C, curah hujan rendah (11–59 mm per bulan) berlangsung dari Juni hingga September, sementara bulan-bulan lainnya di atas 100 mm. Manakah penentuan tipe iklim yang tepat beserta alasannya?',
                'option_a' => 'Af, karena suhu wilayah tergolong tinggi sepanjang tahun.',
                'option_b' => 'Am, karena musim keringnya relatif singkat meski curah hujan terkering rendah.',
                'option_c' => 'Cf, karena tidak ditemukan musim kering yang signifikan.',
                'option_d' => 'BS, karena curah hujan tahunan sangat rendah.',
                'option_e' => 'Aw, karena curah hujan bulan terkering di bawah 60 mm dan musim kering berlangsung panjang serta jelas (4 bulan berturut-turut).',
                'image' => 'challenge/soal-3.png',
                'correct_answer' => 'E',
            ],

            [
                'number' => 4,
                'question' => 'Perhatikan grafik suhu dengan nilai Januari 2°C dan Juli 26°C. Erina menyatakan bahwa wilayah ini bertipe E karena suhu bulan Januari relatif rendah (2°C) dibanding bulan lainnya. Manakah evaluasi yang tepat terhadap pernyataan Erina?',
                'option_a' => 'Benar, karena ada bulan dengan suhu di bawah 0°C.',
                'option_b' => 'Benar, karena rata-rata suhu tahunan di wilayah ini rendah.',
                'option_c' => 'Salah, karena kriteria tipe E mensyaratkan suhu bulan terpanas di bawah 10°C, sedangkan Juli pada grafik mencapai 26°C, suhu terdingin (Januari, 2°C) juga masih di atas ambang -3°C, sehingga wilayah ini tergolong tipe C, bukan D maupun E.',
                'option_d' => 'Salah, karena tipe E hanya berlaku di kutub Bumi.',
                'option_e' => 'Benar, karena variasi suhu antar bulan sangat besar.',
                'image' => null,
                'correct_answer' => 'C',
            ],

            [
                'number' => 5,
                'question' => 'Suatu kabupaten memiliki data iklim: curah hujan tahunan 450 mm, suhu rata-rata tahunan 28°C, dengan pola hujan musiman yang tidak menentu dan sering terjadi kekeringan panjang. Masyarakat setempat menghadapi dua masalah sekaligus: keterbatasan air untuk pertanian dan kebutuhan pendapatan yang stabil sepanjang tahun. Evaluasilah pilihan berikut, manakah rekomendasi kegiatan ekonomi yang paling sesuai dengan tipe iklim wilayah ini sekaligus menjawab kedua masalah tersebut?',
                'option_a' => 'Sawah irigasi teknis sepanjang tahun, karena air dapat didatangkan dari luar wilayah.',
                'option_b' => 'Kombinasi peternakan ekstensif (sapi/kambing di padang rumput stepa) dengan pertanian tadah hujan pada musim basah, sebagai strategi diversifikasi pendapatan yang sesuai iklim BSh.',
                'option_c' => 'Perkebunan kelapa sawit skala besar yang membutuhkan curah hujan tinggi merata.',
                'option_d' => 'Perikanan tambak air tawar yang membutuhkan genangan air sepanjang tahun.',
                'option_e' => 'Perkebunan teh dataran tinggi yang membutuhkan suhu sejuk dan kelembapan tinggi.',
                'image' => 'challenge/soal-5.png',
                'correct_answer' => 'B',
            ],

            [
                'number' => 6,
                'question' => 'Kota Kupang memiliki suhu rata-rata semua bulan di atas 18°C, curah hujan bulan terkering 4 mm, dan curah hujan tahunan 1.588 mm. Berdasarkan catatan kriteria tipe A, manakah penentuan tipe iklim Köppen yang tepat beserta alasannya?',
                'option_a' => 'Af, karena suhu tinggi sepanjang tahun.',
                'option_b' => 'Am, karena curah hujan bulan terkering di bawah 60 mm.',
                'option_c' => 'Aw, karena curah hujan bulan terkering di bawah 60 mm dan curah hujan tahunan (1.588 mm) < 25 x (100 – 4) = 2.400 mm, sehingga musim kering tidak terkompensasi.',
                'option_d' => 'BS, karena curah hujan bulan terkering sangat rendah.',
                'option_e' => 'Cw, karena terdapat musim kering yang jelas.',
                'image' => null,
                'correct_answer' => 'C',
            ],

            [
                'number' => 7,
                'question' => 'Kota Bekasi memiliki suhu rata-rata semua bulan di atas 18°C, curah hujan bulan terkering 40 mm, dan curah hujan tahunan 1.994 mm. Hanya tiga bulan (Juli–September) yang curah hujannya di bawah 60 mm. Rani menyatakan: "Ada musim kemarau, jadi pasti Aw." Manakah evaluasi yang tepat terhadap pernyataan Rani?',
                'option_a' => 'Benar, karena adanya musim kemarau otomatis menentukan tipe Aw.',
                'option_b' => 'Benar, karena curah hujan bulan terkering di bawah 60 mm.',
                'option_c' => 'Salah, karena wilayah ini bertipe Af akibat suhu yang tinggi sepanjang tahun.',
                'option_d' => 'Salah, karena wilayah ini bertipe BS akibat curah hujan bulanan yang rendah.',
                'option_e' => 'Salah, karena curah hujan tahunan (1.994 mm) ≥ 25 x (100 – 40) = 1.500 mm, sehingga musim kering singkat terkompensasi dan wilayah ini bertipe Am.',
                'image' => null,
                'correct_answer' => 'E',
            ],

            [
                'number' => 8,
                'question' => 'Jakarta Selatan memiliki suhu rata-rata semua bulan di atas 18°C, curah hujan bulan terkering 66 mm, dan curah hujan tahunan 2.353 mm. Warga setempat merasa wilayahnya mengalami musim kemarau. Berdasarkan catatan kriteria tipe A, manakah tipe iklim Köppen yang tepat?',
                'option_a' => 'Af, karena curah hujan bulan terkering 66 mm sehingga tidak ada bulan kering menurut kriteria Köppen.',
                'option_b' => 'Am, karena warga merasakan adanya musim kemarau.',
                'option_c' => 'Aw, karena terdapat bulan dengan curah hujan jauh lebih rendah dari bulan lainnya.',
                'option_d' => 'Cf, karena curah hujan tahunan sangat tinggi.',
                'option_e' => 'BS, karena terdapat perbedaan curah hujan antarbulan yang besar.',
                'image' => null,
                'correct_answer' => 'A',
            ],

            [
                'number' => 9,
                'question' => 'Wilayah Q memiliki suhu rata-rata semua bulan di atas 26°C, tetapi curah hujan tahunannya hanya 250 mm. Seorang siswa menyebutnya tipe A karena suhunya panas seperti wilayah tropis. Berdasarkan catatan kriteria tipe B, manakah evaluasi yang tepat?',
                'option_a' => 'Benar, karena suhu tinggi sepanjang tahun adalah syarat utama tipe A.',
                'option_b' => 'Benar, karena wilayah panas pasti beriklim tropis basah.',
                'option_c' => 'Salah, karena wilayah ini bertipe BS akibat curah hujan tahunan 300–700 mm.',
                'option_d' => 'Salah, karena curah hujan tahunan 250 mm (< 300 mm) menjadikannya BW, dan suhu tinggi menjadikannya subtipe h, sehingga bertipe BWh.',
                'option_e' => 'Salah, karena wilayah ini bertipe BWk akibat suhu tahunan di bawah 18°C.',
                'image' => null,
                'correct_answer' => 'D',
            ],

            [
                'number' => 10,
                'question' => 'Kabupaten Wonosobo (Dataran Tinggi Dieng) berada di wilayah tropis dengan suhu rata-rata tahunan sekitar 14°C dan suhu bulan terpanas di bawah 22°C. Curah hujan bulanan (mm): Jan 489, Feb 464, Mar 477, Apr 403, Mei 229, Jun 124, Jul 71, Agu 43, Sep 71, Okt 221, Nov 461, Des 539. Terdapat musim kemarau yang jelas pada Juli–September. Manakah tipe iklim Köppen yang tepat beserta alasannya?',
                'option_a' => 'Aw, karena terdapat musim kering yang jelas di wilayah tropis.',
                'option_b' => 'Cwb, karena suhu bulan terdingin di bawah 18°C akibat ketinggian, terdapat musim kemarau yang jelas, dan suhu bulan terpanas di bawah 22°C.',
                'option_c' => 'Cfb, karena curah hujan tinggi dan merata sepanjang tahun.',
                'option_d' => 'Af, karena curah hujan tahunan sangat tinggi.',
                'option_e' => 'ET, karena suhu tahunan rendah akibat ketinggian.',
                'image' => null,
                'correct_answer' => 'B',
            ],
        ];

        foreach ($questions as $question) {
            ChallengeQuestion::create($question);
        }
    }
}