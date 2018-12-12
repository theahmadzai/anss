<?php

namespace App;

use App\Traits\Image as ImageTrait;
use App\Traits\Thumbnail as ThumbnailTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Slide extends Model
{
    use SoftDeletes, ThumbnailTrait, ImageTrait;

    protected $table = 'slides';

    protected $guarded = [];
}
