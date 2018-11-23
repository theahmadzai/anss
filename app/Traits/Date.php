<?php

namespace App\Traits;

use Carbon\Carbon;

trait Date
{
    public function getDateAttribute($value)
    {
        return Carbon::parse($value);
    }
}
