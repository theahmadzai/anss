<?php

use Faker\Generator as Faker;
$factory->define(App\Appointment::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
        'phone' => $faker->tollFreePhoneNumber,
        'category' => $faker->biasedNumberBetween(1, 5),
        'message' => $faker->text,
        'date' => $faker->dateTimeBetween('now', '+ 5 days'),
    ];
});
