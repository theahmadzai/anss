@extends('layouts.admin')

@section('panel')

    <section class="section">

        <img src="{{$slide->image}}" alt="{{$slide->title}}">
        <p><b>Title: </b>{{$slide->title}}</p>
        <p><b>Link: </b>{{$slide->link}}</p>
        <p><b>Upload Date: </b>{{$slide->created_at->diffForHumans()}}</p>
        <p><b>Last Modified: </b>{{$slide->updated_at->diffForHumans()}}</p>

    </section>

@endsection
