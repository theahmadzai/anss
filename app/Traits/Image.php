<?php

namespace App\Traits;

use Storage;

trait Image
{
    public function getImageAttribute($value)
    {
        return Storage::url($value ?? 'default/image.png');
    }
}
