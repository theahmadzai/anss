@extends('layouts.master')

@section('title', $event->title)

@section('content')

    @component('components.head')
        {{ $event->title }}
    @endcomponent

    <div class="container container--center">
        <article class="article">
            <div class="article__image">
                <img src="{{$event->image}}" alt="{{$event->title}}">
            </div>

            <h2 class="article__title">{{$event->title}}</h2>

            <div class="article__date">
                <i class="icon icon-calendar"></i><span>{{ $event->date->toDayDateTimeString() }}</span>
            </div>

            <div class="article__venue">
                <i class="icon icon-location"></i><span>{{ $event->venue }}</span>
            </div>

            <div class="article__tags">
                <i class="icon icon-price-tag"></i><span>{{ $event->tags }}</span>
            </div>

            <div class="article__content">
                <p>{{ $event->content }}</p>
            </div>
        </article>
    </div>

@endsection
