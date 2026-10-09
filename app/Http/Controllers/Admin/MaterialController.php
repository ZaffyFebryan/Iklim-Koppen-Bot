<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Material;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MaterialController extends Controller
{
    /**
     * Daftar materi pembelajaran.
     */
    public function index(Request $request)
    {
        $search = $request->input('search');

        $materials = Material::query()
            ->when($search, function ($query, $search) {
                $query->where(function ($query) use ($search) {
                    $query->where('title', 'like', "%{$search}%")
                        ->orWhere('description', 'like', "%{$search}%");
                });
            })
            ->orderBy('order')
            ->orderBy('module_number')
            ->latest('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/Materials/Index', [
            'materials' => $materials,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    /**
     * Form tambah materi.
     */
    public function create()
    {
        return Inertia::render('Admin/Materials/Create');
    }

    /**
     * Simpan materi baru.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'module_number' => [
                'nullable',
                'integer',
                'min:1',
            ],

            'title' => [
                'required',
                'string',
                'max:255',
            ],

            'description' => [
                'nullable',
                'string',
                'max:1000',
            ],

            'student_content' => [
                'nullable',
                'array',
            ],

            'teacher_content' => [
                'nullable',
                'array',
            ],

            'is_published' => [
                'required',
                'boolean',
            ],

            'order' => [
                'nullable',
                'integer',
                'min:0',
            ],
        ], [
            'title.required' => 'Judul materi wajib diisi.',
            'title.max' => 'Judul materi maksimal 255 karakter.',

            'description.max' =>
                'Deskripsi materi maksimal 1000 karakter.',

            'module_number.integer' =>
                'Nomor modul harus berupa angka.',

            'module_number.min' =>
                'Nomor modul minimal 1.',

            'student_content.array' =>
                'Konten siswa harus berupa data yang valid.',

            'teacher_content.array' =>
                'Konten guru harus berupa data yang valid.',
        ]);

        Material::create([
            'module_number' => $validated['module_number'] ?? null,
            'title' => $validated['title'],
            'description' => $validated['description'] ?? null,

            'content' => null,

            'student_content' =>
                $validated['student_content'] ?? null,

            'teacher_content' =>
                $validated['teacher_content'] ?? null,

            'is_published' =>
                $validated['is_published'],

            'order' =>
                $validated['order'] ?? 0,
        ]);

        return redirect()
            ->route('admin.materials.index')
            ->with(
                'success',
                'Materi pembelajaran berhasil ditambahkan.'
            );
    }

    /**
     * Form edit materi.
     */
    public function edit(Material $material)
    {
        return Inertia::render('Admin/Materials/Edit', [
            'material' => $material,
        ]);
    }

    /**
     * Update materi.
     */
    public function update(
        Request $request,
        Material $material
    ) {
        $validated = $request->validate([
            'module_number' => [
                'nullable',
                'integer',
                'min:1',
            ],

            'title' => [
                'required',
                'string',
                'max:255',
            ],

            'description' => [
                'nullable',
                'string',
                'max:1000',
            ],

            'student_content' => [
                'nullable',
                'array',
            ],

            'teacher_content' => [
                'nullable',
                'array',
            ],

            'is_published' => [
                'required',
                'boolean',
            ],

            'order' => [
                'nullable',
                'integer',
                'min:0',
            ],
        ]);

        $material->update([
            'module_number' =>
                $validated['module_number'] ?? null,

            'title' =>
                $validated['title'],

            'description' =>
                $validated['description'] ?? null,

            'student_content' =>
                $validated['student_content'] ?? null,

            'teacher_content' =>
                $validated['teacher_content'] ?? null,

            'is_published' =>
                $validated['is_published'],

            'order' =>
                $validated['order'] ?? 0,
        ]);

        return redirect()
            ->route('admin.materials.index')
            ->with(
                'success',
                'Materi pembelajaran berhasil diperbarui.'
            );
    }

    /**
     * Hapus materi.
     */
    public function destroy(Material $material)
    {
        $material->delete();

        return redirect()
            ->route('admin.materials.index')
            ->with(
                'success',
                'Materi pembelajaran berhasil dihapus.'
            );
    }
}