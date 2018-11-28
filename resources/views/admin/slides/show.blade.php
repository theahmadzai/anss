@extends('layouts.admin')

@section('panel')

    <div style="padding:2rem; display:grid; grid-template-columns:auto 30%;">


        <img src="{{$slide->image}}" alt="{{$slide->title}}">

        <div>
            <p><b>Title: </b>{{$slide->title ?: 'None'}}</p>
            <p><b>Link: </b>{{$slide->link ?: 'None'}}</p>
            <p><b>Upload Date: </b>{{$slide->created_at->diffForHumans()}}</p>
            <p><b>Last Modified: </b>{{$slide->updated_at->diffForHumans()}}</p>
        </div>

    </div>

@endsection
