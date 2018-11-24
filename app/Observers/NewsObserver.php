<?php

namespace App\Observers;

use App\News;

class NewsObserver
{
    public function creating(News $news)
    {
        if (request()->hasFile('image')) {
            $news->image = request()->image->store('public/news');
            $news->createThumbnail();
        }
    }

    public function updating(News $news)
    {
        if (request()->hasFile('image')) {
            $news->image = request()->image->store('public/news');
            $news->createThumbnail();
        }
    }
}
