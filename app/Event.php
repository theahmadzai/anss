<?php

namespace App;

use App\Traits\Date as DateTrait;
use App\Traits\Image as ImageTrait;
use App\Traits\Thumbnail as ThumbnailTrait;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Event extends Model
{
    use SoftDeletes;
    use ThumbnailTrait;
    use ImageTrait;
    use DateTrait;

    protected $table = 'events';

    protected $guarded = [];

    protected $attributes = [
        'tags' => 'None',
    ];

    public function scopeUpcoming(Builder $builder)
    {
        return $builder->whereDate('date', '>=', Carbon::now());
    }

    public function scopePast(Builder $builder)
    {
        return $builder->whereDate('date', '<=', Carbon::now());
    }
}
