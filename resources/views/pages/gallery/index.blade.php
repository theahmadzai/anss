@extends('layouts.master')

@section('title', 'Gallery')

@section('content')

    <div class="bar">
        <h1>Gallery</h1>
    </div>

    <div class="gallery-controls">
        Controls
    </div>

    <div class="gallery">
        @foreach ($images as $image)
            <div class="gallery__item">
                <img src="{{$image->url}}" alt="{{$image->title}}">
            </div>
        @endforeach
    </div>

@endsection
