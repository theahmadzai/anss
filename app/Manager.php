<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Manager extends Model
{
    protected $table = 'manager';

    public static function isAppointmentsAllow()
    {
        return self::latest()->pluck('appointments_allow')->first();
    }

    public static function getAppointmentsCount()
    {
        return self::latest()->pluck('appointments_count')->first();
    }

}
