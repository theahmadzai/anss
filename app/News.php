<?php

namespace App;

use App\Traits\Date as DateTrait;
use App\Traits\Image as ImageTrait;
use App\Traits\Thumbnail as ThumbnailTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class News extends Model
{
    use SoftDeletes;
    use DateTrait;
    use ThumbnailTrait;
    use ImageTrait;

    protected $table = 'news';

    protected $guarded = [];

    protected $attributes = [
        'tags' => 'ANSS Foundation',
    ];
}
