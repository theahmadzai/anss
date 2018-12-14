<?php

namespace App;

use App\Traits\ImageTrait;
use App\Traits\ThumbnailTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Image extends Model
{
    use SoftDeletes, ThumbnailTrait, ImageTrait;

    protected $table = 'images';

    protected $guarded = [];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }
}
