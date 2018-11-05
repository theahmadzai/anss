<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $table = 'images';

    public function getUrlAttribute($url)
    {
        return $url ?? 'https://via.placeholder.com/250x250';
    }
}
