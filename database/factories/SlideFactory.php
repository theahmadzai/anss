<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Slide;
use Faker\Generator as Faker;

$factory->define(Slide::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(6),
        'image' => 'default.png',
        'link' => $faker->url,
    ];
});
