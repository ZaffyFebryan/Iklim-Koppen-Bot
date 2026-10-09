<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class ChallengeQuestion extends Model
{
    protected $appends = ['image_url'];

    public function getImageUrlAttribute(): ?string
    {
        return $this->image
            ? Storage::disk(config('filesystems.upload_disk'))->url($this->image)
            : null;
    }

    protected $fillable = [
        'number',
        'question',
        'option_a',
        'option_b',
        'option_c',
        'option_d',
        'option_e',
        'image',
        'correct_answer',
        'order',
    ];

    protected $casts = [
        'number' => 'integer',
    ];
}