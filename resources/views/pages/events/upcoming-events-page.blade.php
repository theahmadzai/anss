@extends('layouts.master')

@section('title', $event_->title)

@section('content')

    <div class="bar">
        <h1>{{ $event_->title }}</h1>
    </div>

    <div class="container">
        <div class="container__wide">
            <div class="row">
                <article class="col col--full article">
                    <figure class="image margin--bottom">
                        <img src="{{$event_->image}}" alt="{{$event_->title}}">
                    </figure>
                    <div class="datetime">
                        <i class="icon icon-calendar"></i><span>{{ $event_->date }}</span>
                    </div>
                    <div class="venue">
                        <i class="icon icon-location"></i><span>{{ $event_->venue }}</span>
                    </div>
                    <div class="tags">
                        <i class="icon icon-price-tag"></i><span>{{ $event_->tags ?? 'ANSS Foundation' }}</span>
                    </div>
                    <div class="content">
                        <p>{{ $event_->content }}</p>
                    </div>
                </article>
            </div>
        </div>

        <div class="container__narrow"></div>
    </div>

@endsection
