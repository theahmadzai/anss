<?php

namespace App\Observers;

use App\Image;

class ImageObserver
{
    public function creating(Image $image)
    {
        if (request()->hasFile('image')) {
            $image->image = request()->image->store('public/images');
            $image->createThumbnail(200, 200);
        }
    }

    public function updating(Image $image)
    {
        if (request()->hasFile('image')) {
            $image->image = request()->image->store('public/images');
            $image->createThumbnail(200, 200);
        }
    }
}
