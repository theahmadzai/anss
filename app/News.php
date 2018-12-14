<?php

namespace App;

use App\Traits\DateTrait;
use App\Traits\ImageTrait;
use App\Traits\ThumbnailTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class News extends Model
{
    use SoftDeletes, DateTrait, ThumbnailTrait, ImageTrait;

    protected $table = 'news';

    protected $guarded = [];

    protected $attributes = [
        'tags' => 'ANSS Foundation',
    ];
}
