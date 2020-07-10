<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Storage;

class Image extends Model
{
    public function getThumbnailPathAttribute()
    {
        return Storage::disk('public')->url('thumbnails/'.$this->image);
    }

    public function getImagePathAttribute()
    {
        return Storage::disk('public')->url('images/'.$this->image);
    }
}
