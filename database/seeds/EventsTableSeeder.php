<?php

use Illuminate\Database\Seeder;

class EventsTableSeeder extends Seeder
{
    public function run()
    {
        factory(App\Event::class, 10)->create();
    }
}
