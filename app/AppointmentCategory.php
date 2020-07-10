<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AppointmentCategory extends Model
{
    public function appointment()
    {
        return $this->hasMany(Appointment::class);
    }
}
