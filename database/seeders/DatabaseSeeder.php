<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {

        $this->call([
            ChallengeQuestionSeeder::class,
        ]);

        $this->call([
            ChatbotKnowledgeSeeder::class,
            MaterialSeeder::class,
        ]);

        // Data Peserta Didik

        User::updateOrCreate(
            ['email' => 'testing@smabhaone.com'],
            [
                'name' => 'Coba-coba saja',
                'password' => '12345',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'acintya@smabhaone.com'],
            [
                'name' => 'Acintya Ambarwati',
                'password' => '14833',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate( 
            ['email' => 'adelia@smabhaone.com'],
            [
                'name' => 'Adelia Martha Indria Putri',
                'password' => '14834',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'aldeq@smabhaone.com'],
            [
                'name' => 'Aldeq Sultan Pratama',
                'password' => '14847',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'alvin@smabhaone.com'],
            [
                'name' => 'Alvin Dwi Pramono',
                'password' => '14850',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'amelia@smabhaone.com'],
            [
                'name' => 'Amelia Maharani Wulandari',
                'password' => '14855',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'asyafira@smabhaone.com'],
            [
                'name' => 'Asyafira Leyna Fiolita',
                'password' => '14875',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'brian@smabhaone.com'],
            [
                'name' => 'Brian Naufal Abbasy',
                'password' => '14892',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'chantika@smabhaone.com'],
            [
                'name' => 'Chantika Efiyana Adhi Setya',
                'password' => '14898',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'chelsea@smabhaone.com'],
            [
                'name' => 'Chelsea Cahya Setiawan',
                'password' => '14902',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'chyntia@smabhaone.com'],
            [
                'name' => 'Chyntia Ariella',
                'password' => '14904',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'Dhika@smabhaone.com'],
            [
                'name' => 'Dika Firmansyah',
                'password' => '14919',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'emilie@smabhaone.com'],
            [
                'name' => 'Emilie Audrey Hamdoyo',
                'password' => '14929',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'farel@smabhaone.com'],
            [
                'name' => 'Farel Andriano Koentoro',
                'password' => '14937',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'farrena@smabhaone.com'],
            [
                'name' => 'Farrena Elyasa Winona',
                'password' => '14940',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'ferdian@smabhaone.com'],
            [
                'name' => 'Ferdian Pratama Putra',
                'password' => '14946',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'hanunnah@smabhaone.com'],
            [
                'name' => 'Hanunnah Ismahani Hanifah',
                'password' => '14960',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'hilmi@smabhaone.com'],
            [
                'name' => 'Hilmi Ali Musyaffa',
                'password' => '14965',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'melia@smabhaone.com'],
            [
                'name' => 'Melia Sumartono',
                'password' => '15000',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'moch.zheldano@smabhaone.com'],
            [
                'name' => 'Moch. Zheldano Agra Murphi',
                'password' => '15003',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

         User::updateOrCreate(
            ['email' => 'muhammad.farid@smabhaone.com'],
            [
                'name' => 'Muhammad Farid Abyansyah',
                'password' => '15014',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

         User::updateOrCreate(
            ['email' => 'muhammad.irfanuddaqiqi@smabhaone.com'],
            [
                'name' => 'Muhammad Irfanuddaqiqi Yaqin',
                'password' => '15019',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

         User::updateOrCreate(
            ['email' => 'mustika@smabhaone.com'],
            [
                'name' => 'Mustika Ramadhani',
                'password' => '15025',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'natasha@smabhaone.com'],
            [
                'name' => 'Natasha Aurora Fabriane',
                'password' => '15034',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'nisrina@smabhaone.com'],
            [
                'name' => 'Nisrina Nabil Ramadhanii',
                'password' => '15041',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'putra@smabhaone.com'],
            [
                'name' => 'Putra Danish Wijaya',
                'password' => '15047',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'putri@smabhaone.com'],
            [
                'name' => 'Putri Isnaini Kalyana',
                'password' => '15048',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'rafansyah@smabhaone.com'],
            [
                'name' => 'Rafansyah Ramadhan Elmar',
                'password' => '15053',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'rayhan@smabhaone.com'],
            [
                'name' => 'Rayhan Vai Arifin',
                'password' => '15058',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'rizky@smabhaone.com'],
            [
                'name' => 'Rizky Akhmal Minardi',
                'password' => '15063',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'rr.zakia@smabhaone.com'],
            [
                'name' => 'Rr. Zakia Nur Safitri',
                'password' => '15065',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'syavalia@smabhaone.com'],
            [
                'name' => 'Syavalia Sepzian Ramadhani',
                'password' => '15090',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'tennofallah@smabhaone.com'],
            [
                'name' => 'Tennofallah Regina Putri Utama',
                'password' => '15092',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        // Data Guru
        User::updateOrCreate(
            ['email' => 'suaibatulislamiyah@smabhaone.com'],
            [
                'name' => 'Suaibatul Islamiyah',
                'password' => 'password123',
                'role' => 'teacher',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'royagata@smabhaone.com'],
            [
                'name' => 'Roy Agata',
                'password' => 'password123',
                'role' => 'teacher',
                'email_verified_at' => now(),
            ]
        );

        // Data Admin
        User::updateOrCreate(
            ['email' => 'erinasaharani@smabhaone.com'],
            [
                'name' => 'Erina Saharani Hermanto Putri',
                'password' => 'password123',
                'role' => 'admin',
                'email_verified_at' => now(),
            ]
        );
    }
}