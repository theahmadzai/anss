<?php

namespace App\Observers;

use App\Image;

class ImageObserver
{
    public function creating(Image $event)
    {
        $event->createThumbnail(200, 200);
    }

    public function updating(Image $event)
    {
        $event->createThumbnail(200, 200);
    }
}
