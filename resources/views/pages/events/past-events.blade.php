@extends('layouts.master')

@section('title', 'Past Events')

@section('content')

    <div class="bar">
        <h1>Past Events</h1>
    </div>

    <div class="container">
        <div class="container__wide">
            @if ($events_)
                <div class="row">
                @foreach ($events_ as $event)
                    <div class="col col--full border--bottom">
                        <div class="view">
                            <div class="date">
                                <div class="day">
                                    {{$event->created_at->day}}
                                </div>
                                <div class="month">
                                    {{$event->created_at->shortEnglishMonth}}
                                </div>
                                <div class="year">
                                    {{$event->created_at->year}}
                                </div>
                            </div>
                            <div class="view__content">
                                <figure class="image margin--bottom">
                                    <img src="{{$event->image}}" alt="{{$event->title}}">
                                </figure>
                                <a href="/past-events/{{$event->id}}"><h3>{{$event->title}}</h3></a>
                                <p><b>Venue: </b>{{$event->venue}}</p>
                                <p><b>When: </b>{{$event->date->diffForHumans()}}</p>
                                <p>{{ str_limit($event->content, 300) }}</p>
                                <a class="button" href="/past-events/{{$event->id}}">Read More</a>
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
