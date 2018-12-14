<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Storage;

class User extends Authenticatable
{
    use Notifiable;

    protected $table = 'users';

    protected $guarded = [];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function getAvatarAttribute($value)
    {
        return Storage::url($value ?? 'default/image.png');
    }

    public function getDobAttribute($value)
    {
        return Carbon::parse($value);
    }
}
