<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class StudentController extends Controller
{
    /**
     * Menampilkan daftar siswa.
     */
    public function index(Request $request)
    {
        $search = $request->input('search');

        $students = User::query()
            ->where('role', 'student')
            ->when($search, function ($query, $search) {
                $query->where(function ($query) use ($search) {
                    $query->where('name', 'like', "%{$search}%")
                        ->orWhere('email', 'like', "%{$search}%");
                });
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/Students/Index', [
            'students' => $students,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }


    /**
     * Menyimpan siswa baru.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => [
                'required',
                'string',
                'max:255',
            ],

            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                'unique:users,email',
            ],

            'password' => [
                'required',
                'confirmed',
                Password::min(8),
            ],
        ], [
            'name.required' => 'Nama siswa wajib diisi.',

            'email.required' => 'Email siswa wajib diisi.',
            'email.email' => 'Format email tidak valid.',
            'email.unique' => 'Email tersebut sudah digunakan.',

            'password.required' => 'Password wajib diisi.',
            'password.min' => 'Password minimal 8 karakter.',
            'password.confirmed' => 'Konfirmasi password tidak sesuai.',
        ]);

        User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => 'student',
        ]);

        return redirect()
            ->route('admin.students.index')
            ->with('success', 'Akun siswa berhasil ditambahkan.');
    }


    /**
     * Memperbarui password siswa.
     */
    public function updatePassword(Request $request, User $student)
    {
        if ($student->role !== 'student') {
            abort(403, 'Akun yang dipilih bukan akun siswa.');
        }

        $validated = $request->validate([
            'password' => [
                'required',
                'confirmed',
                Password::min(8),
            ],
        ], [
            'password.required' => 'Password wajib diisi.',
            'password.min' => 'Password minimal 8 karakter.',
            'password.confirmed' => 'Konfirmasi password tidak sesuai.',
        ]);

        $student->update([
            'password' => Hash::make($validated['password']),
        ]);

        return redirect()
            ->route('admin.students.index')
            ->with(
                'success',
                "Password akun siswa {$student->name} berhasil diperbarui."
            );
    }


    /**
     * Menghapus data siswa.
     */
    public function destroy(User $student)
    {
        /*
         * Pastikan akun yang akan dihapus
         * memang merupakan akun siswa.
         */
        if ($student->role !== 'student') {
            abort(403, 'Akun yang dipilih bukan akun siswa.');
        }

        $studentName = $student->name;

        $student->delete();

        return redirect()
            ->route('admin.students.index')
            ->with(
                'success',
                "Akun siswa {$studentName} berhasil dihapus."
            );
    }
}