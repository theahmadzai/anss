<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Storage;
use Carbon\Carbon;

class Event extends Model
{
    protected $table = 'events';

    public function getImageAttribute($image)
    {
        return Storage::url($image ?? 'default/image.png');
    }

    public function getDateAttribute($value)
    {
        return Carbon::parse($value);
    }

    public static function getPastEvents($value = null)
    {
        if($value != null) {
            return self::whereDate('date', '<=', Carbon::now())->latest()->limit(3)->get();
        }

        return self::whereDate('date', '<=', Carbon::now())->get();
    }

    public static function getUpcomingEvents($value = null)
    {
        if($value != null) {
            return self::whereDate('date', '>=', Carbon::now())->latest()->limit(3)->get();
        }

        return self::whereDate('date', '>=', Carbon::now())->get();
    }
}
