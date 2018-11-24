<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            ManagerTableSeeder::class,
            UsersTableSeeder::class,
            NewsTableSeeder::class,
            EventsTableSeeder::class,
            AppointmentsTableSeeder::class,
            CategoriesTableSeeder::class,
            ImagesTableSeeder::class,
            SlidesTableSeeder::class,
            SubscribersTableSeeder::class,
        ]);
    }
}
