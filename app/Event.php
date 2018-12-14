<?php

namespace App;

use App\Traits\DateTrait;
use App\Traits\ImageTrait;
use App\Traits\ThumbnailTrait;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Event extends Model
{
    use SoftDeletes, ThumbnailTrait, ImageTrait, DateTrait;

    protected $table = 'events';

    protected $guarded = [];

    protected $attributes = [
        'tags' => 'ANSS Foundation',
    ];

    public function scopeUpcoming(Builder $builder)
    {
        return $builder->whereDate('date', '>', Carbon::now());
    }

    public function scopePast(Builder $builder)
    {
        return $builder->whereDate('date', '<', Carbon::now());
    }
}
