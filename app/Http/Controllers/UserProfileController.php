<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class UserProfileController extends Controller
{
    public function update(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],

            'email' => [
                'required',
                'email',
                'max:255',
                Rule::unique('users', 'email')->ignore($user->id),
            ],

            'avatar' => [
                'nullable',
                'image',
                'mimes:jpg,jpeg,png,webp',
                'max:2048',
            ],
        ]);

        $user->name = $validated['name'];

        if ($user->email !== $validated['email']) {
            $user->email = $validated['email'];
            $user->email_verified_at = null;
        }

        if ($request->hasFile('avatar')) {
            $uploadDisk = config('filesystems.upload_disk');
            $newAvatar = $request->file('avatar')
                ->store('profiles', $uploadDisk);

            if ($user->avatar) {
                Storage::disk($uploadDisk)->delete($user->avatar);
            }

            $user->avatar = $newAvatar;
        }

        $user->save();

        $profileRoute = match ($user->role) {
            'admin' => 'admin.profile',
            'teacher' => 'teacher.profile',
            'student' => 'student.profile',
            default => 'dashboard',
        };

        return redirect()
            ->route($profileRoute)
            ->with('success', 'Profil berhasil diperbarui.');
    }
}