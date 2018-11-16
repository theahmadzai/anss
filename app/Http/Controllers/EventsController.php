<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Event;
use Storage;
use Validator;
use Exception;

class EventsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.events.index', ['events' => Event::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.events.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|min:5|max:50',
            'venue' => 'required',
            'date' => 'required',
            'image' => 'required|file|image',
            'tags' => 'nullable',
            'content' => 'required|min:100'
        ]);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        try {
            $event = new Event;
            $event->title = $request->title;
            $event->venue = $request->venue;
            $event->date = $request->date;
            $event->tags = $request->tags;
            $event->content = $request->content;
            $event->image = $request->image->store('public/events');
            $event->save();

        } catch (Exception $e) {
            return $e->getMessage();
        }

        return back()->with('status', 'Event Added Successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        return view('admin.events.show', ['event' => $event]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function edit(Event $event)
    {
        return view('admin.events.edit', ['event' => Event::find($event->id)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Event $event)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|min:5|max:50',
            'venue' => 'required',
            'date' => 'required',
            'image' => 'file|image',
            'tags' => 'nullable',
            'content' => 'required|min:100'
        ]);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

         try {
            $event = Event::find($event->id);
            $event->title = $request->title;
            $event->venue = $request->venue;
            $event->date = $request->date;
            $event->tags = $request->tags;
            $event->content = $request->content;

             if($request->hasFile('image')) {
                if (Storage::exists($event->getOriginal('image'))) {
                    Storage::move($event->getOriginal('image'), 'tmp/events/updated/' . basename($event->image));
                }
                $event->image = $request->image->store('public/events');
            }

            $event->save();

        } catch (Exception $e) {
            return $e->getMessage();
        }

        return redirect('/admin/events')->with('status', 'Event Updated Successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        if(Storage::exists($event->getOriginal('image'))) {
            Storage::move($event->getOriginal('image'), 'tmp/events/deleted/' . basename($event->image));
        }

        Event::destroy($event->id);

        return back()->with('status', 'Event Deleted Successfully!');
    }
}
