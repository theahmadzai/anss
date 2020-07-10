<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\AppointmentCategory;
use Faker\Generator as Faker;

$factory->define(AppointmentCategory::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
    ];
});
