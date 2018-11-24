<?php

namespace App\Observers;

use App\Event;

class EventObserver
{
    public function creating(Event $event)
    {
        if (request()->hasFile('image')) {
            $event->image = request()->image->store('public/events');
            $event->createThumbnail();
        }
    }

    public function updating(Event $event)
    {
        if (request()->hasFile('image')) {
            $event->image = request()->image->store('public/events');
            $event->createThumbnail();
        }
    }
}
