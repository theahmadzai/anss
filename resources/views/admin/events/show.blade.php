@extends('layouts.admin')

@section('panel')

    <section class="section">

        <img src="{{$event->image}}" alt="{{$event->title}}">
        <p><b>Date: </b>{{$event->created_at->toDayDateTimeString()}}</p>
        <p><b>Title: </b>{{$event->title}}</p>
        <p><b>Venue: </b>{{$event->venue}}</p>
        <p><b>Date: </b>{{$event->date}}</p>
        <p><b>Tags: </b>{{$event->tags}}</p>
        <p><b>Content: </b>{{$event->content}}</p>
        <p><b>Last Modified: </b>{{$event->updated_at->toDayDateTimeString()}}</p>

    </section>

@endsection
