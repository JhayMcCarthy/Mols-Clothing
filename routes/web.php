<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\ContactController;

Route::get('/', function () {
    return view('welcome');
});

// API Routes
Route::prefix('api')->group(function () {
    Route::get('/reviews', [ReviewController::class, 'index']);
    Route::post('/reviews', [ReviewController::class, 'store']);
    Route::post('/contact', [ContactController::class, 'store']);
});

// Catch-all route for React Router
// This ensures that all frontend routes are handled by React Router
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
