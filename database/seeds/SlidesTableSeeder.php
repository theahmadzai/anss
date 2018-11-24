<?php

use Illuminate\Database\Seeder;

class SlidesTableSeeder extends Seeder
{
    public function run()
    {
        factory(App\Slide::class, 5)->create();
    }
}
