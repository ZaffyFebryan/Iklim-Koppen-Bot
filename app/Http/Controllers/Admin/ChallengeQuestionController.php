<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ChallengeQuestion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ChallengeQuestionController extends Controller
{
    /**
     * Daftar soal tantangan
     */
    public function index()
    {
        $questions = ChallengeQuestion::orderBy('number')
            ->get()
            ->map(function ($question) {
                return [
                    'id' => $question->id,
                    'number' => $question->number,
                    'question' => $question->question,
                    'option_a' => $question->option_a,
                    'option_b' => $question->option_b,
                    'option_c' => $question->option_c,
                    'option_d' => $question->option_d,
                    'option_e' => $question->option_e,
                    'correct_answer' => $question->correct_answer,
                    'image' => $question->image_url,
                ];
            });

        return Inertia::render('Admin/Challenges/Index', [
            'questions' => $questions,
        ]);
    }

    /**
     * Form tambah soal
     */
    public function create()
    {
        $nextNumber = (ChallengeQuestion::max('number') ?? 0) + 1;

        return Inertia::render('Admin/Challenges/Create', [
            'nextNumber' => $nextNumber,
        ]);
    }

    /**
     * Simpan soal baru
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'number' => [
                'required',
                'integer',
                'min:1',
                'unique:challenge_questions,number',
            ],

            'question' => [
                'required',
                'string',
            ],

            'option_a' => [
                'required',
                'string',
            ],

            'option_b' => [
                'required',
                'string',
            ],

            'option_c' => [
                'required',
                'string',
            ],

            'option_d' => [
                'required',
                'string',
            ],

            'option_e' => [
                'nullable',
                'string',
            ],

            'correct_answer' => [
                'required',
                'in:A,B,C,D,E',
            ],

            'image' => [
                'nullable',
                'image',
                'mimes:jpg,jpeg,png,webp',
                'max:2048',
            ],
        ], [
            'number.required' => 'Nomor soal wajib diisi.',
            'number.unique' => 'Nomor soal sudah digunakan.',
            'question.required' => 'Pertanyaan wajib diisi.',
            'option_a.required' => 'Pilihan A wajib diisi.',
            'option_b.required' => 'Pilihan B wajib diisi.',
            'option_c.required' => 'Pilihan C wajib diisi.',
            'option_d.required' => 'Pilihan D wajib diisi.',
            'correct_answer.required' => 'Jawaban benar wajib dipilih.',
            'correct_answer.in' => 'Jawaban benar harus A, B, C, D, atau E.',
            'image.image' => 'File harus berupa gambar.',
            'image.mimes' => 'Format gambar harus JPG, JPEG, PNG, atau WEBP.',
            'image.max' => 'Ukuran gambar maksimal 2 MB.',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request
                ->file('image')
                ->store('challenge', config('filesystems.upload_disk'));
        }

        ChallengeQuestion::create($validated);

        return redirect()
            ->route('admin.challenges.index')
            ->with('success', 'Soal tantangan berhasil ditambahkan.');
    }

    /**
     * Form edit soal
     */
    public function edit(ChallengeQuestion $challenge)
    {
        return Inertia::render('Admin/Challenges/Edit', [
            'question' => [
                'id' => $challenge->id,
                'number' => $challenge->number,
                'question' => $challenge->question,
                'option_a' => $challenge->option_a,
                'option_b' => $challenge->option_b,
                'option_c' => $challenge->option_c,
                'option_d' => $challenge->option_d,
                'option_e' => $challenge->option_e,
                'correct_answer' => $challenge->correct_answer,
                'image' => $challenge->image_url,
            ],
        ]);
    }

    /**
     * Update soal
     */
    public function update(
        Request $request,
        ChallengeQuestion $challenge
    ) {
        $validated = $request->validate([
            'number' => [
                'required',
                'integer',
                'min:1',
                'unique:challenge_questions,number,' . $challenge->id,
            ],

            'question' => [
                'required',
                'string',
            ],

            'option_a' => [
                'required',
                'string',
            ],

            'option_b' => [
                'required',
                'string',
            ],

            'option_c' => [
                'required',
                'string',
            ],

            'option_d' => [
                'required',
                'string',
            ],

            'option_e' => [
                'nullable',
                'string',
            ],

            'correct_answer' => [
                'required',
                'in:A,B,C,D,E',
            ],

            'image' => [
                'nullable',
                'image',
                'mimes:jpg,jpeg,png,webp',
                'max:2048',
            ],
        ], [
            'number.required' => 'Nomor soal wajib diisi.',
            'number.unique' => 'Nomor soal sudah digunakan.',
            'question.required' => 'Pertanyaan wajib diisi.',
            'option_a.required' => 'Pilihan A wajib diisi.',
            'option_b.required' => 'Pilihan B wajib diisi.',
            'option_c.required' => 'Pilihan C wajib diisi.',
            'option_d.required' => 'Pilihan D wajib diisi.',
            'correct_answer.required' => 'Jawaban benar wajib dipilih.',
            'correct_answer.in' => 'Jawaban benar harus A, B, C, D, atau E.',
            'image.image' => 'File harus berupa gambar.',
            'image.mimes' => 'Format gambar harus JPG, JPEG, PNG, atau WEBP.',
            'image.max' => 'Ukuran gambar maksimal 2 MB.',
        ]);

        if ($request->hasFile('image')) {
            $uploadDisk = config('filesystems.upload_disk');

            if ($challenge->image) {
                Storage::disk($uploadDisk)->delete($challenge->image);
            }

            $validated['image'] = $request
                ->file('image')
                ->store('challenge', $uploadDisk);
        }

        $challenge->update($validated);

        return redirect()
            ->route('admin.challenges.index')
            ->with('success', 'Soal tantangan berhasil diperbarui.');
    }

    /**
     * Hapus soal
     */
    public function destroy(ChallengeQuestion $challenge)
    {
        if ($challenge->image) {
            Storage::disk(config('filesystems.upload_disk'))->delete($challenge->image);
        }

        $challenge->delete();

        return redirect()
            ->route('admin.challenges.index')
            ->with('success', 'Soal tantangan berhasil dihapus.');
    }
}