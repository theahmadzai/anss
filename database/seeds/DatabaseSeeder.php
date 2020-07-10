<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserSeeder::class,
            NewsSeeder::class,
            EventSeeder::class,
            AppointmentCategorySeeder::class,
            AppointmentSeeder::class,
            ImageSeeder::class,
            SlideSeeder::class,
            SubscriberSeeder::class,
        ]);
    }
}
