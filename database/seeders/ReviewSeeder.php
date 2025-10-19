<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Review;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $reviews = [
            [
                'name' => 'Sarah Mensah',
                'text' => 'Exceptional quality and attention to detail. My custom dress fit perfectly and the finishing was outstanding. Highly recommended!',
                'rating' => 5,
                'is_approved' => true
            ],
            [
                'name' => 'Kwame Asante',
                'text' => 'Professional service from start to finish. The team understood my requirements and delivered beyond expectations. Will definitely use again.',
                'rating' => 5,
                'is_approved' => true
            ],
            [
                'name' => 'Ama Osei',
                'text' => 'Beautiful ready-to-wear collection. The materials are premium quality and the designs are timeless. Perfect for any occasion.',
                'rating' => 5,
                'is_approved' => true
            ],
            [
                'name' => 'John Boateng',
                'text' => 'Outstanding craftsmanship and customer service. My bespoke suit was delivered on time and exceeded all my expectations.',
                'rating' => 5,
                'is_approved' => true
            ],
            [
                'name' => 'Grace Adjei',
                'text' => 'The made-to-order service is exceptional. They brought my vision to life with incredible attention to detail. Truly professional.',
                'rating' => 5,
                'is_approved' => true
            ],
            [
                'name' => 'Michael Tetteh',
                'text' => 'Comfort and style combined perfectly. The clothing is not only beautiful but incredibly comfortable to wear all day long.',
                'rating' => 5,
                'is_approved' => true
            ]
        ];

        foreach ($reviews as $review) {
            Review::create($review);
        }
    }
}
