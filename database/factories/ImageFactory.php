<?php

use Faker\Generator as Faker;

$factory->define(App\Image::class, function (Faker $faker) {
    $categories = App\Category::pluck('id')->toArray();

    return [
        'title' => $faker->sentence(6),
        'description' => $faker->sentence(20),
        'category_id' => $faker->randomElement($categories),
    ];
});
