<?php

use Illuminate\Database\Seeder;

class ManagerTableSeeder extends Seeder
{
    public function run()
    {
        factory(App\Manager::class, 1)->create();
    }
}
