<?php

use Faker\Generator as Faker;

$factory->define(App\Image::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(6),
        'description' => $faker->sentence(20),
        'category' => $faker->randomElement(['a', 'b', 'c'])
    ];
});
