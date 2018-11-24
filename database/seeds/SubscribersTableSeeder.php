<?php

use Illuminate\Database\Seeder;

class SubscribersTableSeeder extends Seeder
{
    public function run()
    {
        factory(App\Subscriber::class, 5)->create();
    }
}
