<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class TeacherController extends Controller

{
    /**
     * Menampilkan daftar guru.
     */
    public function index(Request $request)
    {
        $search = $request->input('search');

        $teachers = User::query()
            ->where('role', 'teacher')
            ->when($search, function ($query, $search) {
                $query->where(function ($query) use ($search) {
                    $query->where('name', 'like', "%{$search}%")
                        ->orWhere('email', 'like', "%{$search}%");
                });
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/Teachers/Index', [
            'teachers' => $teachers,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    /**
     * Menambahkan akun guru baru.
     */
    public function store(Request $request)
    {
        $validated = $request->validate(
            [
                'name' => ['required', 'string', 'max:255'],
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
            ],
            [
                'name.required' => 'Nama guru wajib diisi.',

                'email.required' => 'Email guru wajib diisi.',
                'email.email' => 'Format email tidak valid.',
                'email.unique' => 'Email tersebut sudah digunakan.',

                'password.required' => 'Password wajib diisi.',
                'password.min' => 'Password minimal 8 karakter.',
                'password.confirmed' => 'Konfirmasi password tidak sesuai.',
            ]
        );

        User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => 'teacher',
        ]);

        return redirect()
            ->route('admin.teachers.index')
            ->with('success', 'Akun guru berhasil ditambahkan.');
    }

    /**
     * Memperbarui password akun guru.
     */
    public function updatePassword(Request $request, User $teacher)
    {
        if ($teacher->role !== 'teacher') {
            abort(403, 'Akun yang dipilih bukan akun guru.');
        }

        $validated = $request->validate(
            [
                'password' => [
                    'required',
                    'confirmed',
                    Password::min(8),
                ],
            ],
            [
                'password.required' => 'Password wajib diisi.',
                'password.min' => 'Password minimal 8 karakter.',
                'password.confirmed' => 'Konfirmasi password tidak sesuai.',
            ]
        );

        $teacher->update([
            'password' => Hash::make($validated['password']),
        ]);

        return redirect()
            ->route('admin.teachers.index')
            ->with(
                'success',
                "Password akun guru {$teacher->name} berhasil diperbarui."
            );
    }

    /**
     * Menghapus akun guru.
     */
    public function destroy(User $teacher)
    {
        if ($teacher->role !== 'teacher') {
            abort(403, 'Akun yang dipilih bukan akun guru.');
        }

        $teacherName = $teacher->name;

        $teacher->delete();

        return redirect()
            ->route('admin.teachers.index')
            ->with(
                'success',
                "Akun guru {$teacherName} berhasil dihapus."
            );
    }
}