<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Category;
use Storage;
use App\Traits\Thumbnail;

class Image extends Model
{
    use Thumbnail;

    protected $table = 'images';

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function getUrlAttribute($url)
    {
        return Storage::url($url ?? 'default/image.png');
    }

    public static function getSlides()
    {
        $category = Category::where('name', 'slider')->get();

        if($category->count() > 0) {
            return self::where('category_id', $category->first()->id)->get();
        }
    }
}
