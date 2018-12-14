<?php

namespace App;

use App\Traits\DateTrait;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Appointment extends Model
{
    use SoftDeletes, DateTrait;

    protected $table = 'appointments';

    protected $guarded = [];

    public function scopeUnexpired(Builder $builder)
    {
        return $builder->whereDate('date', '>=', Carbon::now());
    }

    public function getCategoryAttribute($value)
    {
        $categories = [
            '1' => 'General',
            '2' => 'Settlement',
            '3' => 'Employment',
            '4' => 'Referrals',
            '5' => 'Other',
        ];

        return $categories[$value];
    }
}
