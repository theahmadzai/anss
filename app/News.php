<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Storage;
use App\Traits\Thumbnail;

class News extends Model
{
    use Thumbnail;

    protected $table = 'news';

    public function getImageAttribute($image)
    {
        return Storage::url($image ?? 'default/image.png');
    }
}
