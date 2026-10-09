<?php

use App\Http\Controllers\Admin\MaterialController as AdminMaterialController;
use App\Http\Controllers\Admin\StudentController as AdminStudentController;
use App\Http\Controllers\Admin\TeacherController as AdminTeacherController;
use App\Http\Controllers\Admin\ChallengeQuestionController;
use App\Http\Controllers\Admin\GradeController as AdminGradeController;

use App\Http\Controllers\ProfileController;

use App\Http\Controllers\Student\ChallengeController;
use App\Http\Controllers\Student\ChatbotController;
use App\Http\Controllers\Student\ModuleProgressController;

use App\Http\Controllers\Teacher\StudentController as TeacherStudentController;
use App\Http\Controllers\Teacher\GradeController as TeacherGradeController;

use App\Http\Controllers\UserProfileController;

use App\Models\StudentModuleProgress;

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');


/*
|--------------------------------------------------------------------------
| Main Dashboard
|--------------------------------------------------------------------------
*/

Route::get('/dashboard', function (Request $request) {

    $user = $request->user();

    return match ($user->role) {

        'admin' => redirect()->route('admin.dashboard'),

        'teacher' => redirect()->route('teacher.dashboard'),

        'student' => redirect()->route('student.dashboard'),

        default => abort(403, 'Role pengguna tidak dikenali.'),

    };

})->middleware(['auth', 'verified'])->name('dashboard');


/*
|--------------------------------------------------------------------------
| Student Routes
|--------------------------------------------------------------------------
|
| URL prefix : /student
| Route name : student.
| Middleware : auth, verified, role:student
|
*/

Route::middleware(['auth', 'verified', 'role:student'])
    ->prefix('student')
    ->name('student.')
    ->group(function () {

        /*
        |--------------------------------------------------------------------------
        | Dashboard Siswa
        |--------------------------------------------------------------------------
        */

        Route::get('/dashboard', function () {

            return Inertia::render('Student/Dashboard');

        })->name('dashboard');


        /*
        |--------------------------------------------------------------------------
        | Panduan Belajar
        |--------------------------------------------------------------------------
        */

        Route::get('/guide', function () {

            return Inertia::render('Student/Guide');

        })->name('guide');


        /*
        |--------------------------------------------------------------------------
        | Materi Pembelajaran
        |--------------------------------------------------------------------------
        */

        Route::get('/material', function (Request $request) {

            $completedModules = StudentModuleProgress::where(
                'user_id',
                $request->user()->id
            )
                ->whereNotNull('completed_at')
                ->count();

            return Inertia::render('Student/Material', [
                'completedModules' => $completedModules,
            ]);

        })->name('material');


        /*
        |--------------------------------------------------------------------------
        | Menyelesaikan Modul
        |--------------------------------------------------------------------------
        */

        Route::post(
            '/modul/{module}/complete',
            [ModuleProgressController::class, 'complete']
        )
            ->whereNumber('module')
            ->name('modul.complete');


        /*
        |--------------------------------------------------------------------------
        | Tujuan Pembelajaran
        |--------------------------------------------------------------------------
        */

        Route::get('/objectives', function () {

            return Inertia::render('Student/Objectives');

        })->name('objectives');


        /*
        |--------------------------------------------------------------------------
        | Chat AI Bot
        |--------------------------------------------------------------------------
        */

        Route::get('/chatbot', function () {

            return Inertia::render('Student/ChatBot');

        })->name('chatbot');

        Route::post(
            '/chatbot',
            [ChatbotController::class, 'chat']
        )->name('chatbot.chat');


        /*
        |--------------------------------------------------------------------------
        | Tantangan Siswa
        |--------------------------------------------------------------------------
        */

        Route::get(
            '/challenge',
            [ChallengeController::class, 'index']
        )->name('challenge');


        /*
        |--------------------------------------------------------------------------
        | Submit Jawaban Tantangan
        |--------------------------------------------------------------------------
        */

        Route::post(
            '/challenge/submit',
            [ChallengeController::class, 'submit']
        )->name('challenge.submit');


        /*
        |--------------------------------------------------------------------------
        | Hasil Skor Siswa
        |--------------------------------------------------------------------------
        */

        Route::get(
            '/scores',
            [ChallengeController::class, 'scores']
        )->name('scores');


        /*
        |--------------------------------------------------------------------------
        | Profil Siswa
        |--------------------------------------------------------------------------
        */

        Route::get('/profile', function (Request $request) {

            return Inertia::render('Student/Profile', [
                'user' => $request->user(),
            ]);

        })->name('profile');


        /*
        |--------------------------------------------------------------------------
        | Update Profil Siswa
        |--------------------------------------------------------------------------
        */

        Route::put(
            '/profile',
            [UserProfileController::class, 'update']
        )->name('profile.update');

    });


/*
|--------------------------------------------------------------------------
| Student Learning Modules
|--------------------------------------------------------------------------
|
| Modul pembelajaran iklim Köppen.
|
*/

Route::middleware(['auth', 'verified', 'role:student'])
    ->group(function () {

        /*
        |--------------------------------------------------------------------------
        | Modul 1
        |--------------------------------------------------------------------------
        */

        Route::get('/student/modul-1', function () {

            return Inertia::render('Student/Modul1');

        })->name('student.modul1');


        /*
        |--------------------------------------------------------------------------
        | Modul 2
        |--------------------------------------------------------------------------
        */

        Route::get('/student/modul-2', function () {

            return Inertia::render('Student/Modul2');

        })->name('student.modul2');


        /*
        |--------------------------------------------------------------------------
        | Modul 3
        |--------------------------------------------------------------------------
        */

        Route::get('/student/modul-3', function () {

            return Inertia::render('Student/Modul3');

        })->name('student.modul3');


        /*
        |--------------------------------------------------------------------------
        | Modul 4
        |--------------------------------------------------------------------------
        */

        Route::get('/student/modul-4', function () {

            return Inertia::render('Student/Modul4');

        })->name('student.modul4');


        /*
        |--------------------------------------------------------------------------
        | Modul 5
        |--------------------------------------------------------------------------
        */

        Route::get('/student/modul-5', function () {

            return Inertia::render('Student/Modul5');

        })->name('student.modul5');


        /*
        |--------------------------------------------------------------------------
        | Modul 6
        |--------------------------------------------------------------------------
        */

        Route::get('/student/modul-6', function () {

            return Inertia::render('Student/Modul6');

        })->name('student.modul6');

    });


/*
|--------------------------------------------------------------------------
| Teacher Routes
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'verified', 'role:teacher'])
    ->prefix('teacher')
    ->name('teacher.')
    ->group(function () {

        /*
        |--------------------------------------------------------------------------
        | Dashboard Guru
        |--------------------------------------------------------------------------
        */

        Route::get('/dashboard', function () {

            return Inertia::render('Teacher/Dashboard');

        })->name('dashboard');


        /*
        |--------------------------------------------------------------------------
        | Profil Guru
        |--------------------------------------------------------------------------
        */

        Route::get('/profile', function (Request $request) {

            return Inertia::render('Teacher/Profile', [
                'user' => $request->user(),
            ]);

        })->name('profile');


        Route::put(
            '/profile',
            [UserProfileController::class, 'update']
        )->name('profile.update');


        /*
        |--------------------------------------------------------------------------
        | Panduan Guru
        |--------------------------------------------------------------------------
        */

        Route::get('/guide', function () {

            return Inertia::render('Teacher/Guide');

        })->name('guide');


        /*
        |--------------------------------------------------------------------------
        | Tujuan Pembelajaran
        |--------------------------------------------------------------------------
        */

        Route::get('/objectives', function () {

            return Inertia::render('Teacher/Objectives');

        })->name('objectives');


        /*
        |--------------------------------------------------------------------------
        | Materi
        |--------------------------------------------------------------------------
        */

        Route::get('/materials', function () {

            return Inertia::render('Teacher/Materials/Index');

        })->name('materials.index');


        Route::get('/materials/{material}', function ($material) {

            return Inertia::render(
                "Teacher/Materials/Modul{$material}"
            );

        })
            ->whereNumber('material')
            ->name('materials.show');


        /*
        |--------------------------------------------------------------------------
        | Data Siswa
        |--------------------------------------------------------------------------
        */

        Route::get(
            '/students',
            [TeacherStudentController::class, 'index']
        )->name('students.index');


        Route::post(
            '/students',
            [TeacherStudentController::class, 'store']
        )->name('students.store');


        Route::delete(
            '/students/{student}',
            [TeacherStudentController::class, 'destroy']
        )->name('students.destroy');


        /*
        |--------------------------------------------------------------------------
        | Nilai Siswa
        |--------------------------------------------------------------------------
        */

        Route::get(
            '/grades',
            [TeacherGradeController::class, 'index']
        )->name('grades.index');


        Route::get(
            '/grades/{student}',
            [TeacherGradeController::class, 'show']
        )->name('grades.show');


        /*
        |--------------------------------------------------------------------------
        | Chatbot Guru
        |--------------------------------------------------------------------------
        */

        Route::get('/chatbot', function () {

            return Inertia::render('Teacher/ChatBot');

        })->name('chatbot');


        Route::post(
            '/chatbot',
            [ChatbotController::class, 'chat']
        )->name('chatbot.chat');

    });


/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'verified', 'role:admin'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {

        /*
        |--------------------------------------------------------------------------
        | Dashboard Admin
        |--------------------------------------------------------------------------
        */

        Route::get('/dashboard', function () {

            return Inertia::render('Admin/Dashboard');

        })->name('dashboard');


        /*
        |--------------------------------------------------------------------------
        | Profil Admin
        |--------------------------------------------------------------------------
        */

        Route::get('/profile', function (Request $request) {

            return Inertia::render('Admin/Profile', [
                'user' => $request->user(),
            ]);

        })->name('profile');


        /*
        |--------------------------------------------------------------------------
        | Update Profil Admin
        |--------------------------------------------------------------------------
        */

        Route::put(
            '/profile',
            [UserProfileController::class, 'update']
        )->name('profile.update');


        /*
        |--------------------------------------------------------------------------
        | Daftar Siswa
        |--------------------------------------------------------------------------
        */

        Route::get(
            '/students',
            [AdminStudentController::class, 'index']
        )->name('students.index');


        /*
        |--------------------------------------------------------------------------
        | Tambah Siswa
        |--------------------------------------------------------------------------
        */

        Route::post(
            '/students',
            [AdminStudentController::class, 'store']
        )->name('students.store');

        Route::put(
            '/students/{student}/password',
            [AdminStudentController::class, 'updatePassword']
        )->name('students.password.update');


        /*
        |--------------------------------------------------------------------------
        | Hapus Siswa
        |--------------------------------------------------------------------------
        */

        Route::delete(
            '/students/{student}',
            [AdminStudentController::class, 'destroy']
        )->name('students.destroy');


        /*
        |--------------------------------------------------------------------------
        | Daftar Guru
        |--------------------------------------------------------------------------
        */

        Route::get(
            '/teachers',
            [AdminTeacherController::class, 'index']
        )->name('teachers.index');


        /*
        |--------------------------------------------------------------------------
        | Tambah Guru
        |--------------------------------------------------------------------------
        */

        Route::post(
            '/teachers',
            [AdminTeacherController::class, 'store']
        )->name('teachers.store');

        Route::put(
            '/teachers/{teacher}/password',
            [AdminTeacherController::class, 'updatePassword']
        )->name('teachers.password.update');


        /*
        |--------------------------------------------------------------------------
        | Hapus Guru
        |--------------------------------------------------------------------------
        */

        Route::delete(
            '/teachers/{teacher}',
            [AdminTeacherController::class, 'destroy']
        )->name('teachers.destroy');


        /*
        |--------------------------------------------------------------------------
        | Daftar Materi
        |--------------------------------------------------------------------------
        */

        Route::get(
            '/materials',
            [AdminMaterialController::class, 'index']
        )->name('materials.index');


        /*
        |--------------------------------------------------------------------------
        | Tambah Materi
        |--------------------------------------------------------------------------
        */

        Route::get(
            '/materials/create',
            [AdminMaterialController::class, 'create']
        )->name('materials.create');


        /*
        |--------------------------------------------------------------------------
        | Simpan Materi
        |--------------------------------------------------------------------------
        */

        Route::post(
            '/materials',
            [AdminMaterialController::class, 'store']
        )->name('materials.store');


        /*
        |--------------------------------------------------------------------------
        | Edit Materi
        |--------------------------------------------------------------------------
        */

        Route::get(
            '/materials/{material}/edit',
            [AdminMaterialController::class, 'edit']
        )->name('materials.edit');


        /*
        |--------------------------------------------------------------------------
        | Update Materi
        |--------------------------------------------------------------------------
        */

        Route::put(
            '/materials/{material}',
            [AdminMaterialController::class, 'update']
        )->name('materials.update');


        /*
        |--------------------------------------------------------------------------
        | Hapus Materi
        |--------------------------------------------------------------------------
        */

        Route::delete(
            '/materials/{material}',
            [AdminMaterialController::class, 'destroy']
        )->name('materials.destroy');


        /*
        |--------------------------------------------------------------------------
        | Soal Tantangan
        |--------------------------------------------------------------------------
        */

        Route::get(
            '/challenges',
            [ChallengeQuestionController::class, 'index']
        )->name('challenges.index');


        Route::get(
            '/challenges/create',
            [ChallengeQuestionController::class, 'create']
        )->name('challenges.create');


        Route::post(
            '/challenges',
            [ChallengeQuestionController::class, 'store']
        )->name('challenges.store');


        Route::get(
            '/challenges/{challenge}/edit',
            [ChallengeQuestionController::class, 'edit']
        )->name('challenges.edit');


        Route::put(
            '/challenges/{challenge}',
            [ChallengeQuestionController::class, 'update']
        )->name('challenges.update');


        Route::delete(
            '/challenges/{challenge}',
            [ChallengeQuestionController::class, 'destroy']
        )->name('challenges.destroy');


        /*
        |--------------------------------------------------------------------------
        | Nilai Siswa
        |--------------------------------------------------------------------------
        */

        Route::get(
            '/grades',
            [AdminGradeController::class, 'index']
        )->name('grades.index');


        Route::get(
            '/grades/{student}',
            [AdminGradeController::class, 'show']
        )->name('grades.show');

    });


/*
|--------------------------------------------------------------------------
| General Profile Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth')
    ->group(function () {

        Route::get(
            '/profile',
            [ProfileController::class, 'edit']
        )->name('profile.edit');


        Route::patch(
            '/profile',
            [ProfileController::class, 'update']
        )->name('profile.update');


        Route::delete(
            '/profile',
            [ProfileController::class, 'destroy']
        )->name('profile.destroy');

    });


/*
|--------------------------------------------------------------------------
| Authentication Routes
|--------------------------------------------------------------------------
*/

require __DIR__ . '/auth.php';