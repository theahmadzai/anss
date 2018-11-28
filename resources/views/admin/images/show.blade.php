@extends('layouts.admin')

@section('panel')

    <div style="padding:2rem; display:grid; grid-template-columns:auto 30%;">


        <img src="{{$image->image}}" alt="{{$image->title}}">

        <div>
            <p><b>Title: </b>{{$image->title ?: 'None'}}</p>
            <p><b>Category: </b>{{$image->category->name}}</p>
            <p><b>Description: </b>{{$image->description ?: 'None'}}</p>
            <p><b>Upload Date: </b>{{$image->created_at->diffForHumans()}}</p>
            <p><b>Last Modified: </b>{{$image->updated_at->diffForHumans()}}</p>
        </div>

    </div>

@endsection
