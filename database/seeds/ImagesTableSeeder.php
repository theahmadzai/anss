<?php

use Illuminate\Database\Seeder;

class ImagesTableSeeder extends Seeder
{
    public function run()
    {
        factory(App\Image::class, 20)->create();
    }
}
