@extends('layouts.master')

@section('title', 'Gallery')

@section('content')

    <div class="bar">
        <h1>Gallery</h1>
    </div>

    <div class="container">
        <div class="container__narrow">
            <h4 style="margin-bottom:1rem;">Categories</h4>

            @if($categories->count())
                @foreach ($categories as $category)
                    <a style="background:#f9f9f9; border-bottom:1px solid #eaeaea; padding:0.25rem 1rem;  margin-bottom:0.5rem; display:block;" href="/gallery/{{$category->id}}">{{$category->name}}</a>
                @endforeach
            @else
                <p>No categories</p>
            @endif
        </div>

        <div class="container__wide">
            {{$images->links()}}

            @if ($images->count())
                <div id="lightbox" class="grid">
                    @foreach ($images as $image)
                        <div class="grid__item">
                            <a href="{{$image->image}}" data-caption="{{$image->title}}">
                                <img src="{{$image->thumbnail()}}" alt="{{$image->title}}">
                                <p>{{$image->title}}</p>
                            </a>
                        </div>
                    @endforeach
                </div>
            @else
                <h2 style="padding:2rem; text-align:center;">No images added currently!</h2>
            @endif
        </div>
    </div>
@endsection
