<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Appointment extends Model
{
    protected $table = 'appointments';

    public static function getAppointments()
    {
        return self::whereDate('timing', '>=', Carbon::now())->get();
    }

    public static function getAvailableAppointments()
    {
        return self::where('status', 0)->whereDate('timing', '>', Carbon::now())->get();
    }

    public static function getAvailableAppointment($id)
    {
        return self::where('id', $id)->where('status', 0)->whereDate('timing', '>', Carbon::now())->first();
    }

    public function getTimingAttribute($value)
    {
        return Carbon::parse($value);
    }
}
