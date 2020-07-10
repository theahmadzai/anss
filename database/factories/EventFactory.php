<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Event;
use Faker\Generator as Faker;

$factory->define(Event::class, function (Faker $faker) {
    return      [
        'title' => $faker->sentence(6),
        'slug' => $faker->slug,
        'image' => 'default.png',
        'venue' => $faker->city,
        'date' => $faker->dateTimeBetween('- 7 days', '+ 7 days'),
        'tags' => $faker->word,
        'content' => $faker->sentence(30),
    ];
});
