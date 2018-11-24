<?php

namespace App\Observers;

use App\Slide;

class SlideObserver
{
    public function creating(Slide $slide)
    {
        if (request()->hasFile('image')) {
            $slide->image = request()->image->store('public/slides');
            $slide->createThumbnail();
        }
    }

    public function updating(Slide $slide)
    {
        if (request()->hasFile('image')) {
            $slide->image = request()->image->store('public/slides');
            $slide->createThumbnail();
        }
    }
}
