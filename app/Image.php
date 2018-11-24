<?php

namespace App;

use App\Traits\Image as ImageTrait;
use App\Traits\Thumbnail as ThumbnailTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Image extends Model
{
    use SoftDeletes;
    use ThumbnailTrait;
    use ImageTrait;

    protected $table = 'images';

    protected $guarded = [];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }
}
