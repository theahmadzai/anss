@extends('layouts.master')

@section('title', 'Gallery')

@section('content')

    <div class="bar">
        <h1>Gallery</h1>
    </div>

    <div class="container">
        <div class="container__narrow"></div>

        <div class="container__wide">
            @if ($images->count())
                <div class="row">
                    @foreach ($images as $image)
                        <div class="col">
                            <figure class="image">
                                <img src="{{$image->url}}" alt="{{$image->title}}">
                            </figure>
                        </div>
                    @endforeach
                </div>
            @else
                <h2 style="padding:2rem; text-align:center;">No images added currently!</h2>
            @endif
        </div>
    </div>
@endsection
