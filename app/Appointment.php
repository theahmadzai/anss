<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;
use Carbon\Carbon;

class Appointment extends Model
{
    protected $table = 'appointments';

    public static function availableAppointments()
    {
        return self::where('status',false)->whereDate('timing', '>=', DB::raw('NOW()'))->get();
    }

    public function getTimingAttribute($value)
    {
        return Carbon::parse($value);
    }
}
