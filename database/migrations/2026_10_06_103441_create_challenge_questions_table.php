<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('challenge_questions', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('number');
            $table->text('question');

            $table->string('image')->nullable();

            $table->text('option_a')->nullable();
            $table->text('option_b')->nullable();
            $table->text('option_c')->nullable();
            $table->text('option_d')->nullable();
            $table->text('option_e')->nullable();

            $table->char('correct_answer', 1);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('challenge_questions');
    }
};