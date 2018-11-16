@extends('layouts.master')

@section('title', 'Latest News')

@section('content')

    <div class="bar">
        <h1>Latest News</h1>
    </div>

    <div class="container">
        <div class="container__wide">
            @if ($news_)
                <div class="row">
                @foreach ($news_ as $news)
                    <div class="col col--full border--bottom">
                        <div class="view">
                            <div class="date">
                                <div class="day">
                                    {{$news->created_at->day}}
                                </div>
                                <div class="month">
                                    {{$news->created_at->shortEnglishMonth}}
                                </div>
                                <div class="year">
                                    {{$news->created_at->year}}
                                </div>
                            </div>
                            <div class="view__content">
                                <a href="/latest-news/{{$news->id}}"><h3>{{$news->title}}</h3></a>
                                <p>{{ str_limit($news->content, 300) }}</p>
                                <a class="button" href="/latest-news/{{$news->id}}">Read More</a>
                            </div>
                        </div>
                    </div>
                @endforeach
                </div>
            @endif
        </div>

        <div class="container__narrow">

        </div>
    </div>

@endsection
