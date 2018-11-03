@extends('layouts.master')

@section('title', 'Upcoming Events')

@section('content')

    <div class="bar">
        <h1>Upcoming Events</h1>
    </div>

    <div class="container">
        <div class="container__narrow"></div>

        <div class="container__wide">
            @foreach ($events as $event)
                <div class="container__row">
                    <article class="flex flex--column article">
                        <div class="flex__item"><a href="/latest-news/{{$event->id}}"><h1>{{ $event->title }}</h1></a></div>
                        <div class="flex__item"><span class="icon icon-calendar"></span><span>{{ $event->created_at }}</span></div>
                        <div class="flex__item"><span class="icon icon-price-tag"></span>{{ $event->tags }}</div>
                        <div class="flex__item"><p>{{ str_limit($event->content, 250) }}</p></div>
                        <div class="flex__item"><a href="#" class="button">Read More</a></div>
                    </article>
                </div>
            @endforeach
        </div>
    </div>

@endsection
