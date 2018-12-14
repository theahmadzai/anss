<?php

namespace App\Traits;

use Storage;

trait ImageTrait
{
    public function getImageAttribute($value)
    {
        return Storage::url($value ?? 'default/image.png');
    }
}
