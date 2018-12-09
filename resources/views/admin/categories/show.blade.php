@extends('layouts.admin')

@section('panel')

    <section class="section">

        <p><b>Name: </b>{{$category->name}}</p>
        <p><b>Slug: </b>{{$category->slug}}</p>
        <p><b>Created At: </b>{{$category->created_at->toDayDateTimeString()}}</p>
        <p><b>Updated At: </b>{{$category->updated_at->toDayDateTimeString()}}</p>

    </section>

@endsection
