@extends('layouts.master')

@section('title', $title)

@section('content')

    @component('components.head')
        {{ $title }}
    @endcomponent

    <div class="container">
        <div class="container__wide">
            @if ($news)
            <div class="row">
            @foreach ($news as $news)
                <div class="col col--full border--bottom">
                    <div class="view">
                        <div class="date">
                            <div class="day">
                                {{$news->date->day}}
                            </div>
                            <div class="month">
                                {{$news->date->shortEnglishMonth}}
                            </div>
                            <div class="year">
                                {{$news->date->year}}
                            </div>
                        </div>
                        <div class="view__content">
                            <a href="/news/{{$news->id}}"><h3>{{$news->title}}</h3></a>
                            <p>{{ str_limit($news->content, 300) }}</p>
                            <a class="button" href="/news/{{$news->id}}">Read More</a>
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
