<?php

use Illuminate\Database\Seeder;

class ProductionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\AppointmentCategory::insert([
            ['name' => 'General'],
            ['name' => 'settlement'],
            ['name' => 'employment'],
            ['name' => 'referrals'],
            ['name' => 'other'],
        ]);
    }
}
