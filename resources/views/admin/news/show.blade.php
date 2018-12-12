@extends('layouts.admin')

@section('panel')

    <section class="section">

        <img src="{{$news->image}}" alt="{{$news->title}}">
        <p><b>Date: </b>{{$news->created_at->toDayDateTimeString()}}</p>
        <p><b>Title: </b>{{$news->title}}</p>
        <p><b>Tags: </b>{{$news->tags}}</p>
        <p><b>Content: </b>{{$news->content}}</p>
        <p><b>Last Modified: </b>{{$news->updated_at->toDayDateTimeString()}}</p>

    </section>

@endsection
