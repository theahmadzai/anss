@extends('layouts.admin')

@section('panel')

    <div style="display:grid; padding:2rem;">

        <img src="{{$event->image}}" alt="{{$event->title}}" style="width:600px; height:200px;">

        <div>
            <p><b>Date: </b>{{$event->created_at->toDayDateTimeString()}}</p>
        </div>

        <div>
            <p><b>Title: </b>{{$event->title}}</p>
        </div>

        <div>
            <p><b>Venue: </b>{{$event->venue}}</p>
        </div>

        <div>
            <p><b>Tags: </b>{{$event->tags ?: 'None'}}</p>
        </div>

        <div>
            <p style="word-wrap: break-word; width:700px;"><b>Content: </b>{{$event->content ?: 'None'}}</p>
        </div>

        <div>
            <p><b>Last Modified: </b>{{$event->updated_at->toDayDateTimeString()}}</p>
        </div>
    </div>

@endsection
