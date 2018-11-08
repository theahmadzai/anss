<?php

use Faker\Generator as Faker;

$factory->define(App\Appointment::class, function (Faker $faker) {
    return [
        'timing' => $faker->dateTimeBetween('now', '+ 5 days'),
        'description' => $faker->sentence(10)
    ];
});
