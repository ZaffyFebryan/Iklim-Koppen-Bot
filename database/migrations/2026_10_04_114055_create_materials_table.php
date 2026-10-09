<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('materials', function (Blueprint $table) {
            $table->id();

            $table->unsignedInteger('module_number')->nullable();

            $table->string('title');

            $table->text('description')->nullable();

            $table->longText('content');

            $table->boolean('is_published')->default(true);

            $table->unsignedInteger('order')->default(0);

            $table->timestamps();

            $table->index('module_number');
            $table->index('is_published');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('materials');
    }
};