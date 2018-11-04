<?php

use Faker\Generator as Faker;

$factory->define(App\Manager::class, function (Faker $faker) {
    return [
        'appointments_allow' => false,
        'appointments_count' => 0
    ];
});
