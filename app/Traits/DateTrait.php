<?php

namespace App\Traits;

use Carbon\Carbon;

trait DateTrait
{
    public function getDateAttribute($value)
    {
        return Carbon::parse($value);
    }
}
