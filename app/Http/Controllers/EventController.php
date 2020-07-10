<?php

namespace App\Http\Controllers;

use App\Event;

class EventController extends Controller
{
    public function pastEvents()
    {
        return view('pages.events.index', [
            'articles' => Event::past()->paginate(5),
        ])->withTitle('Past Events');
    }

    public function upcomingEvents()
    {
        return view('pages.events.index', [
            'articles' => Event::upcoming()->paginate(5),
        ])->withTitle('Upcoming Events');
    }

    public function show(Event $event)
    {
        return view('pages.events.show', [
            'article' => $event,
        ]);
    }
}
