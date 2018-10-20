@extends('layouts.master')

@section('title', 'Latest News')

@section('content')

    <div class="bar">
        <h2>Latest News</h2>
    </div>

    <div class="container">
        <div class="container__wide">
            @foreach ($articles as $article)
                <div class="container__row">
                    <article class="flex flex--column article">
                        <div class="flex__item"><a href="news/{{$article->id}}"><h1>{{ $article->title }}</h1></a></div>
                        <div class="flex__item"><span class="icon icon-calendar"></span><span>{{ $article->created_at }}</span></div>
                        <div class="flex__item"><span class="icon icon-price-tag"></span>{{ $article->tags }}</div>
                        <div class="flex__item"><p>{{ str_limit($article->content, 250) }}</p></div>
                        <div class="flex__item"><a href="#" class="button">Read More</a></div>
                    </article>
                </div>
            @endforeach
        </div>

        <div class="container__narrow">
            <h3 style="margin-bottom:1rem;">Tags</h3>

            <div style="display:flex; flex-wrap:wrap;">
                <a href="#" style="background: #efefef; padding:0.2rem 0.5rem; display:inline-block;">2018</a>
                <a href="#" style="background: #efefef; padding:0.2rem 0.5rem; display:inline-block;">International Event</a>
                <a href="#" style="background: #efefef; padding:0.2rem 0.5rem; display:inline-block;">Major Event</a>
                <a href="#" style="background: #efefef; padding:0.2rem 0.5rem; display:inline-block;">2018</a>
                <a href="#" style="background: #efefef; padding:0.2rem 0.5rem; display:inline-block;">International Event</a>
                <a href="#" style="background: #efefef; padding:0.2rem 0.5rem; display:inline-block;">Major Event</a>
                <a href="#" style="background: #efefef; padding:0.2rem 0.5rem; display:inline-block;">Hello</a>
                <a href="#" style="background: #efefef; padding:0.2rem 0.5rem; display:inline-block;">The Tag</a>
                <a href="#" style="background: #efefef; padding:0.2rem 0.5rem; display:inline-block;">Major Event</a>
            </div>
        </div>
    </div>

@endsection
