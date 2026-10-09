<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class StudentController extends Controller
{
    /**
     * Menampilkan daftar seluruh akun siswa.
     */
    public function index()
    {
        $students = User::where('role', 'student')
            ->latest()
            ->get([
                'id',
                'name',
                'email',
                'created_at',
            ]);

        return Inertia::render('Teacher/Students/Index', [
            'students' => $students,
        ]);
    }

    /**
     * Menambahkan akun siswa baru.
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
                Rule::unique('users', 'email'),
            ],

            'password' => [
                'required',
                'string',
                'min:8',
            ],
        ], [
            'name.required' => 'Nama siswa wajib diisi.',
            'name.max' => 'Nama siswa maksimal 255 karakter.',
            'email.required' => 'Email wajib diisi.',
            'email.email' => 'Format email tidak valid.',
            'email.unique' => 'Email tersebut sudah terdaftar.',
            'password.required' => 'Password wajib diisi.',
            'password.min' => 'Password minimal 8 karakter.',
        ]);

        $student = new User();

        $student->name = $validated['name'];
        $student->email = $validated['email'];
        $student->password = Hash::make($validated['password']);
        $student->role = 'student';

        $student->save();

        return redirect()
            ->route('teacher.students.index')
            ->with('success', 'Akun siswa berhasil ditambahkan.');
    }

    public function destroy(User $student)
    {
        abort_unless($student->role === 'student', 404);

        $student->delete();

        return redirect()
            ->route('teacher.students.index')
            ->with('success', 'Akun siswa berhasil dihapus.');
    }
}