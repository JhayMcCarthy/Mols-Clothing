<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Review;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ReviewController extends Controller
{
    use ApiResponse;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reviews = Review::where('is_approved', true)
            ->orderBy('created_at', 'desc')
            ->get();

        return $this->success($reviews, 'Reviews retrieved successfully');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'text' => 'required|string|max:1000',
            'rating' => 'integer|min:1|max:5'
        ]);

        if ($validator->fails()) {
            return $this->error('Validation failed', 422, $validator->errors());
        }

        $review = Review::create([
            'name' => $request->name,
            'text' => $request->text,
            'rating' => $request->rating ?? 5,
            'is_approved' => false
        ]);

        return $this->success($review, 'Review submitted successfully. It will be reviewed before being published.');
    }
}
