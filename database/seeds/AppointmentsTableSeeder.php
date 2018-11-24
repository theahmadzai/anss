<?php

use Illuminate\Database\Seeder;

class AppointmentsTableSeeder extends Seeder
{
    public function run()
    {
        factory(App\Appointment::class, 5)->create();
    }
}
