<?php

use Faker\Generator as Faker;

$factory->define(App\Event::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(6),
        'venue' => $faker->sentence(1),
        'content' => $faker->sentence(30),
        'date' => $faker->dateTimeBetween('- 7 days', '+ 7 days'),
    ];
});
