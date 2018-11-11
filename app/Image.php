<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Storage;

class Image extends Model
{
    protected $table = 'images';

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function getUrlAttribute($url)
    {
        return Storage::url($url ?? 'default/image.png');
    }
}
