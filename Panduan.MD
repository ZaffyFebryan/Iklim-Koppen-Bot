# Panduan Deploy Koppen Bot ke Supabase dan Vercel

Panduan ini menyiapkan database dan storage di Supabase, lalu menghubungkan repository GitHub ke Vercel.

## 1. Persiapan

Pastikan repository sudah tersedia di GitHub:

- Repository: <https://github.com/arif-fahruddin/media-iklim-koppen-bot>
- Branch: `main`

Konfigurasi deployment Vercel berada di `vercel.json`. Contoh environment variable tersedia di `.env.vercel.example`. Jangan unggah `.env`, credential nyata, database SQLite lokal, atau SQL dump berisi data ke repository publik.

## 2. Buat database Supabase

1. Buka <https://supabase.com>, buat project baru, lalu tunggu sampai status project **Active**.
2. Simpan database password dengan aman.
3. Buka **Connect** pada project Supabase. Pilih **Transaction pooler** untuk koneksi serverless dan catat host, port, database, username, serta password persis seperti yang ditampilkan. Port transaction pooler biasanya `6543`.

### Pilih satu cara menyiapkan schema dan data

#### Opsi A — Import SQL lokal

File SQL lokal dapat dibuat atau diperbarui dengan:

```bash
php scripts/generate-supabase-sql.php
```

Kemudian:

1. Buka file `database/supabase_schema_and_seed.sql` di komputer lokal.
2. Salin seluruh isinya ke **Supabase Dashboard → SQL Editor → New query**.
3. Jalankan query.

> **Peringatan:** dump ini berisi tabel, migration records, data demo siswa/guru/admin, materi, soal, knowledge chatbot, dan hash password. Script menggunakan `DROP TABLE IF EXISTS ... CASCADE`; jalankan hanya pada project/database Supabase baru yang kosong. Eksekusi dapat menghapus tabel dengan nama yang sama beserta objek terkait. Jangan unggah file dump ini ke GitHub publik.

#### Opsi B — Laravel migrations

Jika ingin membuat schema tanpa mengimpor dump, siapkan environment PostgreSQL Supabase secara lokal dan jalankan:

```bash
php artisan migrate --force
```

Untuk menambahkan data awal, jalankan hanya setelah memeriksa akun/password demo di `database/seeders/DatabaseSeeder.php`:

```bash
php artisan db:seed --force
```

Pilih **Opsi A atau Opsi B**. Jangan menjalankan keduanya pada database yang sama. Jangan menjalankan migration dari build command Vercel.

## 3. Siapkan Supabase Storage untuk upload

1. Di Supabase, buka **Storage → New bucket**.
2. Buat bucket publik bernama `uploads`.
3. Buka **Project Settings → Storage** dan buat credential S3-compatible. Nama menu dapat berubah mengikuti versi dashboard.
4. Catat Project URL, S3 endpoint, Access Key ID, dan Secret Access Key.

Endpoint dan URL publik umumnya berbentuk:

```text
https://PROJECT_REF.supabase.co/storage/v1/s3
https://PROJECT_REF.supabase.co/storage/v1/object/public/uploads
```

`PROJECT_REF` adalah referensi project Supabase. Jangan menggunakan Supabase service-role key sebagai S3 key, dan jangan menaruh credential rahasia di frontend atau variable `VITE_*`.

## 4. Import repository ke Vercel

1. Buka <https://vercel.com> dan masuk ke akun Vercel.
2. Pilih **Add New → Project**.
3. Hubungkan GitHub jika diminta, lalu import `arif-fahruddin/media-iklim-koppen-bot`.
4. Gunakan Root Directory repository (folder root proyek). Biarkan konfigurasi build dari `vercel.json`; build command yang ditetapkan proyek adalah:

```text
npm ci && npm run build
```

5. Tambahkan environment variables di bawah pada **Project Settings → Environment Variables**, pilih **Production**. Tambahkan ke Preview hanya jika Preview akan memakai database/storage yang terpisah atau memang diizinkan.
6. Deploy.

## 5. Environment variables Vercel

Isi nilai rahasia melalui dashboard Vercel. Contoh placeholder juga ada di `.env.vercel.example`.

```dotenv
APP_NAME="Koppen Bot"
APP_ENV=production
APP_KEY=base64:ISI_DENGAN_KEY_BARU
APP_DEBUG=false
APP_URL=https://DOMAIN-VERCEL-ANDA

LOG_CHANNEL=stderr
LOG_LEVEL=warning

DB_CONNECTION=pgsql
DB_HOST=HOST_DARI_SUPABASE_CONNECT
DB_PORT=6543
DB_DATABASE=postgres
DB_USERNAME=USERNAME_DARI_SUPABASE_CONNECT
DB_PASSWORD=PASSWORD_DATABASE_SUPABASE
DB_SSLMODE=require

SESSION_DRIVER=database
SESSION_LIFETIME=120
CACHE_STORE=database
QUEUE_CONNECTION=sync

FILESYSTEM_DISK=supabase
UPLOAD_DISK=supabase
SUPABASE_STORAGE_BUCKET=uploads
SUPABASE_STORAGE_REGION=us-east-1
SUPABASE_STORAGE_ENDPOINT=https://PROJECT_REF.supabase.co/storage/v1/s3
SUPABASE_STORAGE_ACCESS_KEY=ACCESS_KEY_S3_SUPABASE
SUPABASE_STORAGE_SECRET_KEY=SECRET_KEY_S3_SUPABASE
SUPABASE_STORAGE_PUBLIC_URL=https://PROJECT_REF.supabase.co/storage/v1/object/public/uploads

MAIL_MAILER=log
```

Buat `APP_KEY` baru untuk production, jangan memakai key lokal. Dari komputer dengan PHP dan Composer, jalankan dari root proyek:

```bash
php artisan key:generate --show
```

Salin hasilnya ke variable Vercel `APP_KEY`. Jangan menambahkan nilai secret ke file, commit Git, issue, atau chat. Setelah domain Vercel diketahui, pastikan `APP_URL` cocok dengan domain final dan lakukan redeploy jika nilainya berubah.

## 6. Verifikasi deployment

Setelah deployment berhasil:

1. Buka `https://DOMAIN-VERCEL-ANDA/up`; health check harus berhasil.
2. Buka halaman utama dan periksa bahwa stylesheet dan JavaScript termuat.
3. Coba login dengan akun yang memang ada di database Supabase.
4. Periksa halaman yang menggunakan database, session, dan cache.
5. Uji upload avatar dan gambar challenge; pastikan file masuk ke bucket `uploads` dan URL dapat dibuka.
6. Jika koneksi database gagal, cocokkan kembali host, port, username, password, dan `DB_SSLMODE=require` dengan **Connect** Supabase.

Jika menggunakan data dari SQL dump, akun admin demo yang dibuat seeder:

```text
Email: erinasaharani@smabhaone.com
Password: password123
```

Segera ganti password tersebut sebelum penggunaan nyata. Dump juga memuat akun demo lain; tinjau datanya sebelum import.

## 7. Catatan operasional

- Vercel menggunakan runtime PHP komunitas `vercel-php`; bukan runtime PHP resmi Vercel.
- Filesystem Function tidak persisten. SQLite lokal, file upload lokal, file session/cache, dan queue worker jangka panjang tidak cocok untuk production Vercel.
- Gunakan Supabase PostgreSQL untuk database/session/cache, Supabase Storage untuk upload, dan `QUEUE_CONNECTION=sync` sampai tersedia worker eksternal.
- Migration baru dijalankan secara terpisah dan terkontrol sebelum kode yang memerlukannya menerima traffic.
- Rotasi `APP_KEY`, password database, dan credential Storage di Vercel Project Settings, lalu redeploy. Jangan commit `.env`.
