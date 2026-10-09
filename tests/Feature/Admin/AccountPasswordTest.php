<?php

namespace Tests\Feature\Admin;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AccountPasswordTest extends TestCase
{
    use RefreshDatabase;

    private function admin(): User
    {
        return User::factory()->create([
            'role' => 'admin',
            'email_verified_at' => now(),
        ]);
    }

    public function test_admin_can_update_student_password(): void
    {
        $student = User::factory()->create([
            'role' => 'student',
            'email_verified_at' => now(),
        ]);

        $response = $this->actingAs($this->admin())->put(
            route('admin.students.password.update', $student),
            [
                'password' => 'password-baru-123',
                'password_confirmation' => 'password-baru-123',
            ]
        );

        $response->assertRedirect(route('admin.students.index'));

        $this->assertTrue(
            Hash::check('password-baru-123', $student->fresh()->password)
        );
    }

    public function test_admin_can_update_teacher_password(): void
    {
        $teacher = User::factory()->create([
            'role' => 'teacher',
            'email_verified_at' => now(),
        ]);

        $response = $this->actingAs($this->admin())->put(
            route('admin.teachers.password.update', $teacher),
            [
                'password' => 'password-baru-456',
                'password_confirmation' => 'password-baru-456',
            ]
        );

        $response->assertRedirect(route('admin.teachers.index'));

        $this->assertTrue(
            Hash::check('password-baru-456', $teacher->fresh()->password)
        );
    }

    public function test_password_update_requires_matching_confirmation(): void
    {
        $student = User::factory()->create([
            'role' => 'student',
            'email_verified_at' => now(),
        ]);

        $response = $this->actingAs($this->admin())->put(
            route('admin.students.password.update', $student),
            [
                'password' => 'password-baru-123',
                'password_confirmation' => 'berbeda',
            ]
        );

        $response->assertSessionHasErrors('password');

        $this->assertFalse(
            Hash::check('password-baru-123', $student->fresh()->password)
        );
    }

    public function test_teacher_cannot_update_student_password(): void
    {
        $teacher = User::factory()->create([
            'role' => 'teacher',
            'email_verified_at' => now(),
        ]);

        $student = User::factory()->create([
            'role' => 'student',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($teacher)
            ->put(route('admin.students.password.update', $student), [
                'password' => 'password-baru-123',
                'password_confirmation' => 'password-baru-123',
            ])
            ->assertForbidden();
    }

    public function test_admin_profile_update_redirects_to_admin_profile(): void
    {
        $admin = $this->admin();

        $response = $this->actingAs($admin)->put(
            route('admin.profile.update'),
            [
                'name' => 'Nama Admin Baru',
                'email' => $admin->email,
            ]
        );

        $response->assertRedirect(route('admin.profile'));

        $this->assertSame('Nama Admin Baru', $admin->fresh()->name);
    }

    public function test_student_profile_update_redirects_to_student_profile(): void
    {
        $student = User::factory()->create([
            'role' => 'student',
            'email_verified_at' => now(),
        ]);

        $response = $this->actingAs($student)->put(
            route('student.profile.update'),
            [
                'name' => 'Nama Siswa Baru',
                'email' => $student->email,
            ]
        );

        $response->assertRedirect(route('student.profile'));

        $this->assertSame('Nama Siswa Baru', $student->fresh()->name);
    }
}
