<?php

namespace App\Http\Controllers\Admin;

use App\Event;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEventRequest;

class EventController extends Controller
{
    public function index()
    {
        return view('admin.events.index', [
            'events' => Event::all(),
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
        return view('admin.events.show', [
            'event' => $event,
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
