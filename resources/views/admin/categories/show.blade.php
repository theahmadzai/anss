@extends('layouts.admin')

@section('panel')

    <div style="display:grid; padding:2rem;">

        <div>
            <p><b>Name: </b>{{$category->name}}</p>
        </div>

        <div>
            <p><b>Slug: </b>{{$category->slug}}</p>
        </div>

        <div>
            <p><b>Created At: </b>{{$category->created_at->toDayDateTimeString()}}</p>
        </div>

        <div>
            <p><b>Updated At: </b>{{$category->updated_at->toDayDateTimeString()}}</p>
        </div>

    </div>

@endsection
