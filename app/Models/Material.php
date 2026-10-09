<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use HasFactory;

    protected $fillable = [
        'module_number',
        'title',
        'description',
        'content',
        'student_content',
        'teacher_content',
        'is_published',
        'order',
    ];

    protected $casts = [
        'is_published' => 'boolean',
        'student_content' => 'array',
        'teacher_content' => 'array',
    ];
}