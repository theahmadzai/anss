<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Storage;

class News extends Model
{
    protected $table = 'news';

    public function getImageAttribute($image)
    {
        return Storage::url($image ?? 'default/image.png');
    }
}
