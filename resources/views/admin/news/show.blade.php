@extends('layouts.admin')

@section('panel')

    <div style="display:grid; padding:2rem;">

        <img src="{{$news->image}}" alt="{{$news->title}}" style="width:600px; height:200px;">

        <div>
            <p><b>Date: </b>{{$news->created_at->toDayDateTimeString()}}</p>
        </div>

        <div>
            <p><b>Title: </b>{{$news->title}}</p>
        </div>

        <div>
            <p><b>Tags: </b>{{$news->tags ?: 'None'}}</p>
        </div>

        <div>
            <p style="word-wrap: break-word; width:700px;"><b>Content: </b>{{$news->content ?: 'None'}}</p>
        </div>

        <div>
            <p><b>Last Modified: </b>{{$news->updated_at->toDayDateTimeString()}}</p>
        </div>
    </div>

@endsection
