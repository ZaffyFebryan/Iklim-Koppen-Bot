<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        // Memeriksa email dan password pengguna.
        $request->authenticate();

        // Membuat session baru setelah login.
        $request->session()->regenerate();

        // Selalu arahkan ke dashboard utama.
        // Route dashboard akan menentukan tujuan berdasarkan role.
        return redirect()->route('dashboard');
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        // Logout dari guard web.
        Auth::guard('web')->logout();

        // Menghapus session.
        $request->session()->invalidate();

        // Membuat token CSRF baru.
        $request->session()->regenerateToken();

        // Kembali ke halaman utama.
        return redirect('/');
    }
}