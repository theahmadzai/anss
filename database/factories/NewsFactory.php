<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\News;
use Faker\Generator as Faker;

$factory->define(News::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(6),
        'slug' => $faker->slug,
        'image' => 'default.png',
        'date' => $faker->dateTimeBetween('- 7 days', '+ 7 days'),
        'tags' => $faker->word,
        'content' => $faker->sentence(30),
    ];
});
