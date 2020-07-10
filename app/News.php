<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Storage;
use Str;

class News extends Model
{
    protected $dates = [
        'date',
    ];

    public function getThumbnailPathAttribute()
    {
        return Storage::disk('public')->url('thumbnails/'.$this->image);
    }

    public function getImagePathAttribute()
    {
        return Storage::disk('public')->url('images/'.$this->image);
    }

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
