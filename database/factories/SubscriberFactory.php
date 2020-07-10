<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Subscriber;
use Faker\Generator as Faker;

$factory->define(Subscriber::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
    ];
});
