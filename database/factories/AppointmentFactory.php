<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Appointment;
use App\AppointmentCategory;
use Faker\Generator as Faker;

$factory->define(Appointment::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
        'phone' => $faker->tollFreePhoneNumber,
        'date' => $faker->dateTimeBetween('now', '+ 5 days'),
        'message' => $faker->text,
        'status' => $faker->randomElement([true, false]),
        'appointment_category_id' => AppointmentCategory::all()->random(),
    ];
});
