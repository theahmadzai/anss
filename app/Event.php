<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Storage;

class Event extends Model
{
    protected $table = 'events';

    public function getImageAttribute($image)
    {
        return Storage::url($image ?? 'default/image.png');
    }
}
