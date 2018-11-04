<?php

use Faker\Generator as Faker;

$factory->define(App\Appointment::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'phone' => $faker->tollFreePhoneNumber,
        'message' => $faker->sentence(10),
        'status' => false
    ];
});
