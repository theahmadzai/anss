<?php

namespace App\Observers;

use App\Slide;

class SlideObserver
{
    public function creating(Slide $event)
    {
        $event->createThumbnail();
    }

    public function updating(Slide $event)
    {
        $event->createThumbnail();
    }
}
