<?php

/*
|--------------------------------------------------------------------------
| Generator SQL Supabase
|--------------------------------------------------------------------------
|
| Menghasilkan satu file SQL PostgreSQL berisi:
| - DDL seluruh tabel aplikasi
| - Baris tabel `migrations` agar `php artisan migrate` menjadi no-op
| - Data seed: users, materials, challenge_questions, chatbot_knowledge
|
| Jalankan dari root proyek:
|   php scripts/generate-supabase-sql.php
|
*/

require __DIR__ . '/../vendor/autoload.php';

$app = require __DIR__ . '/../bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

$out = [];

$out[] = '-- ============================================================================';
$out[] = '-- Skema dan data awal untuk Supabase (PostgreSQL)';
$out[] = '-- Dibuat: ' . now()->toDateTimeString();
$out[] = '--';
$out[] = '-- Cara pakai:';
$out[] = '--   1. Buka Supabase Dashboard -> SQL Editor -> New query';
$out[] = '--   2. Tempel seluruh isi file ini, lalu Run';
$out[] = '--   3. Isi environment Vercel sesuai .env.vercel.example';
$out[] = '--';
$out[] = '-- Catatan: jalankan pada database kosong. Blok DDL memakai DROP TABLE IF EXISTS.';
$out[] = '-- ============================================================================';
$out[] = '';
$out[] = 'BEGIN;';
$out[] = '';

/*
|--------------------------------------------------------------------------
| DDL
|--------------------------------------------------------------------------
*/

$ddl = <<<'SQL'
-- ---------------------------------------------------------------- users
DROP TABLE IF EXISTS "users" CASCADE;
CREATE TABLE "users" (
    "id" BIGSERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL UNIQUE,
    "email_verified_at" TIMESTAMP(0) WITHOUT TIME ZONE NULL,
    "password" VARCHAR(255) NOT NULL,
    "remember_token" VARCHAR(100) NULL,
    "created_at" TIMESTAMP(0) WITHOUT TIME ZONE NULL,
    "updated_at" TIMESTAMP(0) WITHOUT TIME ZONE NULL,
    "role" VARCHAR(255) NOT NULL DEFAULT 'student',
    "avatar" VARCHAR(255) NULL
);

-- ------------------------------------------------- password_reset_tokens
DROP TABLE IF EXISTS "password_reset_tokens" CASCADE;
CREATE TABLE "password_reset_tokens" (
    "email" VARCHAR(255) PRIMARY KEY,
    "token" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(0) WITHOUT TIME ZONE NULL
);

-- -------------------------------------------------------------- sessions
DROP TABLE IF EXISTS "sessions" CASCADE;
CREATE TABLE "sessions" (
    "id" VARCHAR(255) PRIMARY KEY,
    "user_id" BIGINT NULL,
    "ip_address" VARCHAR(45) NULL,
    "user_agent" TEXT NULL,
    "payload" TEXT NOT NULL,
    "last_activity" INTEGER NOT NULL
);
CREATE INDEX "sessions_user_id_index" ON "sessions" ("user_id");
CREATE INDEX "sessions_last_activity_index" ON "sessions" ("last_activity");

-- ----------------------------------------------------------------- cache
DROP TABLE IF EXISTS "cache" CASCADE;
CREATE TABLE "cache" (
    "key" VARCHAR(255) PRIMARY KEY,
    "value" TEXT NOT NULL,
    "expiration" BIGINT NOT NULL
);
CREATE INDEX "cache_expiration_index" ON "cache" ("expiration");

-- ----------------------------------------------------------- cache_locks
DROP TABLE IF EXISTS "cache_locks" CASCADE;
CREATE TABLE "cache_locks" (
    "key" VARCHAR(255) PRIMARY KEY,
    "owner" VARCHAR(255) NOT NULL,
    "expiration" BIGINT NOT NULL
);
CREATE INDEX "cache_locks_expiration_index" ON "cache_locks" ("expiration");

-- ------------------------------------------------------------------ jobs
DROP TABLE IF EXISTS "jobs" CASCADE;
CREATE TABLE "jobs" (
    "id" BIGSERIAL PRIMARY KEY,
    "queue" VARCHAR(255) NOT NULL,
    "payload" TEXT NOT NULL,
    "attempts" SMALLINT NOT NULL,
    "reserved_at" INTEGER NULL,
    "available_at" INTEGER NOT NULL,
    "created_at" INTEGER NOT NULL
);
CREATE INDEX "jobs_queue_index" ON "jobs" ("queue");

-- ----------------------------------------------------------- job_batches
DROP TABLE IF EXISTS "job_batches" CASCADE;
CREATE TABLE "job_batches" (
    "id" VARCHAR(255) PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "total_jobs" INTEGER NOT NULL,
    "pending_jobs" INTEGER NOT NULL,
    "failed_jobs" INTEGER NOT NULL,
    "failed_job_ids" TEXT NOT NULL,
    "options" TEXT NULL,
    "cancelled_at" INTEGER NULL,
    "created_at" INTEGER NOT NULL,
    "finished_at" INTEGER NULL
);

-- ----------------------------------------------------------- failed_jobs
DROP TABLE IF EXISTS "failed_jobs" CASCADE;
CREATE TABLE "failed_jobs" (
    "id" BIGSERIAL PRIMARY KEY,
    "uuid" VARCHAR(255) NOT NULL UNIQUE,
    "connection" VARCHAR(255) NOT NULL,
    "queue" VARCHAR(255) NOT NULL,
    "payload" TEXT NOT NULL,
    "exception" TEXT NOT NULL,
    "failed_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX "failed_jobs_connection_queue_failed_at_index" ON "failed_jobs" ("connection", "queue", "failed_at");

-- ------------------------------------------------------------- materials
DROP TABLE IF EXISTS "materials" CASCADE;
CREATE TABLE "materials" (
    "id" BIGSERIAL PRIMARY KEY,
    "module_number" INTEGER NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NULL,
    "student_content" TEXT NULL,
    "teacher_content" TEXT NULL,
    "content" TEXT NULL,
    "is_published" BOOLEAN NOT NULL DEFAULT TRUE,
    "order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(0) WITHOUT TIME ZONE NULL,
    "updated_at" TIMESTAMP(0) WITHOUT TIME ZONE NULL
);
CREATE INDEX "materials_module_number_index" ON "materials" ("module_number");
CREATE INDEX "materials_is_published_index" ON "materials" ("is_published");

-- ---------------------------------------------------- challenge_questions
DROP TABLE IF EXISTS "challenge_questions" CASCADE;
CREATE TABLE "challenge_questions" (
    "id" BIGSERIAL PRIMARY KEY,
    "number" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "image" VARCHAR(255) NULL,
    "option_a" TEXT NULL,
    "option_b" TEXT NULL,
    "option_c" TEXT NULL,
    "option_d" TEXT NULL,
    "option_e" TEXT NULL,
    "correct_answer" CHAR(1) NOT NULL,
    "created_at" TIMESTAMP(0) WITHOUT TIME ZONE NULL,
    "updated_at" TIMESTAMP(0) WITHOUT TIME ZONE NULL
);

-- ----------------------------------------------------- challenge_attempts
DROP TABLE IF EXISTS "challenge_attempts" CASCADE;
CREATE TABLE "challenge_attempts" (
    "id" BIGSERIAL PRIMARY KEY,
    "user_id" BIGINT NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE,
    "score" INTEGER NOT NULL,
    "correct_answers" INTEGER NOT NULL DEFAULT 0,
    "total_questions" INTEGER NOT NULL DEFAULT 10,
    "answers" JSONB NULL,
    "submitted_at" TIMESTAMP(0) WITHOUT TIME ZONE NULL,
    "created_at" TIMESTAMP(0) WITHOUT TIME ZONE NULL,
    "updated_at" TIMESTAMP(0) WITHOUT TIME ZONE NULL,
    CONSTRAINT "challenge_attempts_user_id_unique" UNIQUE ("user_id")
);

-- ----------------------------------------------------- chatbot_knowledge
DROP TABLE IF EXISTS "chatbot_knowledge" CASCADE;
CREATE TABLE "chatbot_knowledge" (
    "id" BIGSERIAL PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "module" INTEGER NULL,
    "content" TEXT NOT NULL,
    "keywords" TEXT NULL,
    "created_at" TIMESTAMP(0) WITHOUT TIME ZONE NULL,
    "updated_at" TIMESTAMP(0) WITHOUT TIME ZONE NULL
);

-- ----------------------------------------------- student_module_progress
DROP TABLE IF EXISTS "student_module_progress" CASCADE;
CREATE TABLE "student_module_progress" (
    "id" BIGSERIAL PRIMARY KEY,
    "user_id" BIGINT NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE,
    "module_number" SMALLINT NOT NULL,
    "completed_at" TIMESTAMP(0) WITHOUT TIME ZONE NULL,
    "created_at" TIMESTAMP(0) WITHOUT TIME ZONE NULL,
    "updated_at" TIMESTAMP(0) WITHOUT TIME ZONE NULL,
    CONSTRAINT "student_module_progress_user_id_module_number_unique" UNIQUE ("user_id", "module_number")
);

-- ------------------------------------------------------------ migrations
DROP TABLE IF EXISTS "migrations" CASCADE;
CREATE TABLE "migrations" (
    "id" SERIAL PRIMARY KEY,
    "migration" VARCHAR(255) NOT NULL,
    "batch" INTEGER NOT NULL
);
SQL;

$out[] = $ddl;
$out[] = '';

/*
|--------------------------------------------------------------------------
| Helper
|--------------------------------------------------------------------------
*/

function sqlValue($value): string
{
    if ($value === null) {
        return 'NULL';
    }

    if (is_bool($value)) {
        return $value ? 'TRUE' : 'FALSE';
    }

    if (is_int($value) || is_float($value)) {
        return (string) $value;
    }

    $escaped = str_replace("'", "''", (string) $value);

    return "'" . $escaped . "'";
}

function dumpTable(string $table, array $columns, string $orderBy, array &$out): void
{
    $rows = DB::table($table)->orderBy($orderBy)->get();

    if ($rows->isEmpty()) {
        $out[] = "-- {$table}: tidak ada data";
        $out[] = '';
        return;
    }

    $colList = '"' . implode('", "', $columns) . '"';

    $out[] = "-- {$table}: {$rows->count()} baris";

    foreach ($rows->chunk(50) as $chunk) {
        $values = [];

        foreach ($chunk as $row) {
            $tuple = array_map(
                fn ($col) => sqlValue($row->{$col} ?? null),
                $columns
            );

            $values[] = '    (' . implode(', ', $tuple) . ')';
        }

        $out[] = "INSERT INTO \"{$table}\" ({$colList}) VALUES";
        $out[] = implode(",\n", $values) . ';';
    }

    // Set ulang sequence BIGSERIAL agar id berikutnya tidak bentrok.
    $out[] = "SELECT setval(pg_get_serial_sequence('{$table}', 'id'), COALESCE((SELECT MAX(\"id\") FROM \"{$table}\"), 1), true);";
    $out[] = '';
}

/*
|--------------------------------------------------------------------------
| Data
|--------------------------------------------------------------------------
*/

$out[] = '-- ============================================================================';
$out[] = '-- DATA';
$out[] = '-- ============================================================================';
$out[] = '';

dumpTable('migrations', ['migration', 'batch'], 'id', $out);

dumpTable('users', [
    'id', 'name', 'email', 'email_verified_at', 'password',
    'remember_token', 'created_at', 'updated_at', 'role', 'avatar',
], 'id', $out);

dumpTable('materials', [
    'id', 'module_number', 'title', 'description',
    'student_content', 'teacher_content', 'content',
    'is_published', 'order', 'created_at', 'updated_at',
], 'id', $out);

dumpTable('challenge_questions', [
    'id', 'number', 'question', 'image',
    'option_a', 'option_b', 'option_c', 'option_d', 'option_e',
    'correct_answer', 'created_at', 'updated_at',
], 'id', $out);

dumpTable('chatbot_knowledge', [
    'id', 'title', 'module', 'content', 'keywords',
    'created_at', 'updated_at',
], 'id', $out);

$out[] = 'COMMIT;';
$out[] = '';

/*
|--------------------------------------------------------------------------
| Tulis file
|--------------------------------------------------------------------------
*/

$target = __DIR__ . '/../database/supabase_schema_and_seed.sql';

if (! is_dir(dirname($target))) {
    mkdir(dirname($target), 0777, true);
}

file_put_contents($target, implode("\n", $out));

echo "SQL ditulis ke: {$target}\n";
echo 'Ukuran: ' . number_format(filesize($target) / 1024, 1) . " KB\n";
