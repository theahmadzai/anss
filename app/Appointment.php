<?php

namespace App;

use App\Traits\Date as DateTrait;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Appointment extends Model
{
    use SoftDeletes;
    use DateTrait;

    protected $table = 'appointments';

    protected $guarded = [];

    public function scopeUnbooked(Builder $builder)
    {
        return $builder->where('status', 0);
    }

    public function scopeUnexpired(Builder $builder)
    {
        return $builder->whereDate('date', '>=', Carbon::now());
    }
}
