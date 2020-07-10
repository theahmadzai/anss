<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Storage;
use Str;

class Event extends Model
{
    protected $dates = [
        'date',
    ];

    public function scopeUpcoming(Builder $builder)
    {
        return $builder->whereDate('date', '>', Carbon::now());
    }

    public function scopePast(Builder $builder)
    {
        return $builder->whereDate('date', '<', Carbon::now());
    }

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
