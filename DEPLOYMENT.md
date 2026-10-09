# Deployment Vercel + Supabase

Aplikasi ini adalah Laravel 13 dengan Inertia/React. Vercel tidak menyediakan runtime PHP resmi; konfigurasi proyek menggunakan runtime komunitas [`vercel-php`](https://github.com/vercel-community/php). Runtime ini cocok untuk Function stateless, bukan PHP-FPM atau worker Laravel persisten.

## 1. Siapkan Supabase

1. Buat project Supabase.
2. Di **Connect**, pilih koneksi PostgreSQL yang sesuai untuk serverless. Gunakan **transaction pooler** (umumnya port `6543`) untuk request Vercel yang banyak membuat koneksi singkat. Salin host, port, database, username, dan password tanpa mengubah format username pooler.
3. Jalankan migrasi dari komputer/CI yang memiliki PHP dan Composer:

```sh
php artisan migrate --force
```

Gunakan environment production Supabase saat menjalankan perintah tersebut. Jangan menjalankan migrasi dari `buildCommand` Vercel karena build dapat berjalan berulang dan paralel.

Seeder bawaan berisi akun demo dengan password yang diketahui. Jalankan `php artisan db:seed` hanya setelah meninjau dan mengganti kredensial tersebut untuk kebutuhan production.

## 2. Siapkan Supabase Storage

Buat bucket Storage publik bernama `uploads` (atau gunakan nama lain dan samakan `SUPABASE_STORAGE_BUCKET`). Pada Vercel, isi:

- `SUPABASE_STORAGE_ENDPOINT`: `https://PROJECT_REF.supabase.co/storage/v1/s3`
- `SUPABASE_STORAGE_PUBLIC_URL`: `https://PROJECT_REF.supabase.co/storage/v1/object/public/uploads`
- `SUPABASE_STORAGE_ACCESS_KEY` dan `SUPABASE_STORAGE_SECRET_KEY`: kredensial S3-compatible Supabase

Aplikasi menyimpan avatar di `profiles/` dan gambar tantangan di `challenge/`. Disk upload dipilih lewat `UPLOAD_DISK`; lokal memakai `public`, sedangkan production memakai `supabase`. URL file dikirim sebagai `avatar_url` dan `image_url`, jadi frontend tidak bergantung pada `/storage/...` ketika deployed.

## 3. Import ke Vercel

1. Push repository ini ke GitHub/GitLab/Bitbucket.
2. Import repository di Vercel. Biarkan Root Directory di folder proyek Laravel.
3. Vercel akan membaca `vercel.json`. Build command proyek adalah `npm ci && npm run build`; output Vite dibuat di `public/build` dan request Laravel diteruskan ke `api/index.php`.
4. Tambahkan environment variables berikut untuk **Production** dan, bila diperlukan, Preview. Contoh nama dan placeholder tersedia di `.env.vercel.example`.

### Environment wajib

```text
APP_NAME
APP_ENV=production
APP_KEY
APP_DEBUG=false
APP_URL

DB_CONNECTION=pgsql
DB_HOST
DB_PORT
DB_DATABASE
DB_USERNAME
DB_PASSWORD
DB_SSLMODE=require

SESSION_DRIVER=database
CACHE_STORE=database
QUEUE_CONNECTION=sync
FILESYSTEM_DISK=supabase
UPLOAD_DISK=supabase

SUPABASE_STORAGE_BUCKET
SUPABASE_STORAGE_REGION
SUPABASE_STORAGE_ENDPOINT
SUPABASE_STORAGE_ACCESS_KEY
SUPABASE_STORAGE_SECRET_KEY
SUPABASE_STORAGE_PUBLIC_URL
```

Gunakan `APP_KEY` baru/rahasia dan jangan commit `.env`, password database, atau service-role key. Jika memakai Supabase Auth/REST di masa depan, key rahasia hanya boleh berada di server; jangan memasukkannya ke `VITE_*` atau bundle browser.

## 4. Batasan serverless

- Filesystem Function bersifat read-only dan `/tmp` hanya penyimpanan sementara. Jangan gunakan SQLite, file session/cache, `storage/app/public`, atau log file sebagai penyimpanan production.
- Konfigurasi production menggunakan session dan cache database Supabase. Migrasi Laravel harus membuat tabel `sessions` dan `cache` sebelum aplikasi digunakan.
- `QUEUE_CONNECTION=sync` aman untuk deployment awal. Vercel tidak menjalankan `php artisan queue:work` secara persisten; gunakan worker/queue eksternal jika pekerjaan asynchronous dibutuhkan.
- Gunakan `LOG_CHANNEL=stderr` agar log masuk ke log Function Vercel, bukan `storage/logs`.
- Runtime PHP ini dikelola komunitas. Request tetap tunduk pada batas durasi, ukuran Function, dan ukuran body Vercel. `vercel dev` tidak didukung oleh runtime; gunakan PHP built-in server untuk development lokal.

## 5. Verifikasi setelah deploy

1. Buka `https://DOMAIN_VERCEL/up` dan pastikan status health check berhasil.
2. Buka halaman utama dan pastikan asset dari `/build` termuat tanpa 404.
3. Uji login dengan akun yang memang sudah dibuat di Supabase.
4. Uji halaman yang membaca data, pengiriman form, dan session lintas request.
5. Uji upload avatar/gambar tantangan dan pastikan file muncul di bucket `uploads`.
6. Jika koneksi database gagal, cek kembali host/port pooler, password, `DB_SSLMODE=require`, dan apakah extension PDO PostgreSQL tersedia pada runtime.

## 6. Deployment berikutnya

Setiap perubahan kode dapat dideploy melalui push repository. Jalankan migrasi baru secara terpisah dan terkontrol sebelum traffic diarahkan ke kode yang memerlukannya. Rotasi `APP_KEY`, password database, dan kredensial Storage melalui Vercel Project Settings, lalu lakukan redeploy; jangan menaruh nilai tersebut di source control.
