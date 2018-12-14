<?php

namespace App\Http\Controllers;

use App\Event;
use App\Http\Requests\StoreEventRequest;

class EventController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin')->except(['show']);
    }

    public function index()
    {
        return view('admin.events.index', [
            'events' => Event::latest()->get(),
            'deleted_events' => Event::onlyTrashed()->get(),
        ]);
    }

    public function create()
    {
        return view('admin.events.create');
    }

    public function store(StoreEventRequest $request)
    {
        Event::create($request->validated());

        return back()->with('status', 'Event Added Successfully!');
    }

    public function show(Event $event)
    {
        return view('pages.events.show', [
            'article' => $event,
        ]);
    }

    public function edit(Event $event)
    {
        return view('admin.events.edit', [
            'event' => $event,
        ]);
    }

    public function update(StoreEventRequest $request, Event $event)
    {
        Event::find($event->id)->update($request->validated());

        return back()->with('status', 'Event Updated Successfully!');
    }

    public function destroy(Event $event)
    {
        $event->delete();

        return back()->with('status', 'Event Deleted Successfully!');
    }
}
