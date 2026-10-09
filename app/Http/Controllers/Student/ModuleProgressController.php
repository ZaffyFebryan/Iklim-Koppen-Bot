<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\StudentModuleProgress;
use Illuminate\Http\Request;

class ModuleProgressController extends Controller
{
    public function complete(Request $request, int $module)
    {
        $user = $request->user();

        // Modul hanya 1 sampai 6
        if ($module < 1 || $module > 6) {
            abort(404);
        }

        // Modul 2-6 harus menyelesaikan modul sebelumnya
        if ($module > 1) {
            $previousCompleted = StudentModuleProgress::where(
                'user_id',
                $user->id
            )
                ->where('module_number', $module - 1)
                ->whereNotNull('completed_at')
                ->exists();

            if (!$previousCompleted) {
                return back()->withErrors([
                    'module' =>
                        'Selesaikan Modul ' .
                        ($module - 1) .
                        ' terlebih dahulu.',
                ]);
            }
        }

        // Simpan / update progres
        StudentModuleProgress::updateOrCreate(
            [
                'user_id' => $user->id,
                'module_number' => $module,
            ],
            [
                'completed_at' => now(),
            ]
        );

        return back()->with(
            'success',
            "Modul {$module} berhasil diselesaikan."
        );
    }
}