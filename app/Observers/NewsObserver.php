<?php

namespace App\Observers;

use App\News;

class NewsObserver
{
    public function creating(News $event)
    {
        $event->createThumbnail();
    }

    public function updating(News $event)
    {
        $event->createThumbnail();
    }
}
