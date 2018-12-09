@extends('layouts.admin')

@section('panel')

    <section class="section">

        <img src="{{$image->image}}" alt="{{$image->title}}">
        <p><b>Title: </b>{{$image->title}}</p>
        <p><b>Category: </b>{{$image->category->name}}</p>
        <p><b>Description: </b>{{$image->description}}</p>
        <p><b>Upload Date: </b>{{$image->created_at->diffForHumans()}}</p>
        <p><b>Last Modified: </b>{{$image->updated_at->diffForHumans()}}</p>

    </section>

@endsection
