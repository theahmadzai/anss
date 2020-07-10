<?php

use Illuminate\Database\Seeder;

class AppointmentCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\AppointmentCategory::class, 5)->create();
    }
}
