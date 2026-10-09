<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\ChallengeAttempt;
use App\Models\ChallengeQuestion;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChallengeController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        $questions = ChallengeQuestion::orderBy('number')
            ->get()
            ->map(function ($question) {
                return [
                    'id' => $question->id,
                    'number' => $question->number,
                    'question' => $question->question,

                    // TAMBAHKAN INI
                    'image' => $question->image_url,

                    'options' => [
                        'A' => $question->option_a,
                        'B' => $question->option_b,
                        'C' => $question->option_c,
                        'D' => $question->option_d,
                        'E' => $question->option_e,
                    ],
                ];
            });

        $attempt = ChallengeAttempt::where(
            'user_id',
            $user->id
        )->first();

        return Inertia::render('Student/Challenge', [
            'questions' => $questions,

            'attempt' => $attempt
                ? [
                    'id' => $attempt->id,
                    'score' => $attempt->score,
                    'correct_answers' => $attempt->correct_answers,
                    'total_questions' => $attempt->total_questions,
                    'submitted_at' => $attempt->submitted_at,
                ]
                : null,
        ]);
    }

    public function submit(Request $request)
    {
        $user = $request->user();

        $existingAttempt = ChallengeAttempt::where(
            'user_id',
            $user->id
        )->first();

        if ($existingAttempt) {
            return back()->withErrors([
                'challenge' => 'Kamu sudah mengerjakan tantangan ini.',
            ]);
        }

        $questions = ChallengeQuestion::orderBy('number')->get();

        $validated = $request->validate([
            'answers' => ['required', 'array'],
            'answers.*' => ['nullable', 'in:A,B,C,D,E'],
        ]);

        $answers = $validated['answers'];

        $correctAnswers = 0;

        foreach ($questions as $question) {
            $studentAnswer = $answers[$question->id] ?? null;

            if (
                $studentAnswer &&
                $studentAnswer === $question->correct_answer
            ) {
                $correctAnswers++;
            }
        }

        $totalQuestions = $questions->count();

        $score = $totalQuestions > 0
            ? round(($correctAnswers / $totalQuestions) * 100)
            : 0;

        ChallengeAttempt::create([
            'user_id' => $user->id,
            'score' => $score,
            'correct_answers' => $correctAnswers,
            'total_questions' => $totalQuestions,
            'answers' => $answers,
            'submitted_at' => now(),
        ]);

        return redirect()
            ->route('student.scores')
            ->with('success', 'Tantangan berhasil dikumpulkan.');
    }

    public function scores(Request $request)
    {
        $attempt = ChallengeAttempt::where(
            'user_id',
            $request->user()->id
        )->first();

        return Inertia::render('Student/Scores', [
            'attempt' => $attempt
                ? [
                    'score' => $attempt->score,
                    'correct_answers' => $attempt->correct_answers,
                    'total_questions' => $attempt->total_questions,
                    'submitted_at' => $attempt->submitted_at?->format(
                        'd M Y, H:i'
                    ),
                ]
                : null,
        ]);
    }
}