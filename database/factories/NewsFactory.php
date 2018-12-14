<?php

use Faker\Generator as Faker;

$factory->define(App\News::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(6),
        'tags' => '2018, International Event',
        'content' => $faker->sentence(30),
        'date' => $faker->dateTimeBetween('- 7 days', '+ 7 days'),
    ];
});
