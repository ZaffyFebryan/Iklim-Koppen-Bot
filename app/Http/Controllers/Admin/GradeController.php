<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ChallengeAttempt;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GradeController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');

        $students = User::query()
            ->where('role', 'student')
            ->when($search, function ($query) use ($search) {
                $query->where(function ($q) use ($search) {
                    $q->where('name', 'like', "%{$search}%")
                        ->orWhere('email', 'like', "%{$search}%");
                });
            })
            ->with([
                'challengeAttempts' => function ($query) {
                    $query->latest('submitted_at');
                }
            ])
            ->orderBy('name')
            ->get()
            ->map(function ($student) {
                $attempt = $student->challengeAttempts->first();

                return [
                    'id' => $student->id,
                    'name' => $student->name,
                    'email' => $student->email,
                    'score' => $attempt?->score,
                    'correct_answers' => $attempt?->correct_answers,
                    'total_questions' => $attempt?->total_questions,
                    'submitted_at' => $attempt?->submitted_at?->format('d-m-Y H:i'),
                    'has_attempt' => $attempt !== null,
                ];
            });

        return Inertia::render('Admin/Grades/Index', [
            'students' => $students,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    public function show(User $student)
    {
        abort_unless(
            $student->role === 'student',
            404
        );

        $attempt = ChallengeAttempt::where(
            'user_id',
            $student->id
        )
            ->latest('submitted_at')
            ->first();

        return Inertia::render('Admin/Grades/Detail', [
            'student' => [
                'id' => $student->id,
                'name' => $student->name,
                'email' => $student->email,
            ],

            'attempt' => $attempt ? [
                'id' => $attempt->id,
                'score' => $attempt->score,
                'correct_answers' => $attempt->correct_answers,
                'total_questions' => $attempt->total_questions,
                'answers' => $attempt->answers,
                'submitted_at' => $attempt->submitted_at?->format('d-m-Y H:i'),
            ] : null,
        ]);
    }
}