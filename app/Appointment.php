<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $guarded = [];

    protected $dates = [
        'date',
    ];

    public function appointmentCategory()
    {
        return $this->belongsTo(AppointmentCategory::class);
    }

    public function scopeUnexpired(Builder $builder)
    {
        return $builder->whereDate('date', '>=', Carbon::now());
    }
}
