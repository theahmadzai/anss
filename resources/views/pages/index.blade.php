@extends('layouts.master')

@section('title', 'Home')

@section('content')

    <div id="slider" class="slider">
        @if($slides)
            @foreach ($slides as $slide)
                <div class="slide">
                    <img src="{{$slide->image}}" alt="{{$slide->title}}">
                    <p>{{$slide->title}}</p>
                    <a href="{{$slide->description}}">Read More</a>
                </div>
            @endforeach
        @endif
    </div>

    <div class="plate">
        <div class="waves-wrapper">
            <div class="waves">
                <svg viewBox="0 0 800 600">
                    <path d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
                        fill="rgba(39, 69, 141, 1)"></path>
                    <path d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
                        fill="rgba(29, 143, 166, 1)"></path>
                    <path d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
                        fill="rgba(29, 43, 166, 1)"></path>
                </svg>
            </div>
        </div>
    </div>


    <div class="row">
        <div class="col">
            <div class="card">
                <h2>Vision</h2>
                <p>Prosperous, connected and self-reliant communities</p>
            </div>
        </div>

        <div class="col">
            <div class="card">
                <h2>Mission</h2>
                <p>To provide quality social services for concerned communities</p>
            </div>
        </div>

        <div class="col">
            <div class="card">
                <h2>Core Values</h2>
                <ul>
                    <li>Integrity</li>
                    <li>Transparency</li>
                    <li>Professionalism</li>
                    <li>Diversity</li>
                </ul>
            </div>
        </div>
    </div>

    @if ($latest_news)
    <div class="shadow-separator"></div>
    <h2 class="nice-heading">Latest News</h2>

    <div id="news-slider" class="row">
        @foreach ($latest_news as $news)
        <div class="col">
            <div class="news">
                <div class="news__head">
                    <figure class="image">
                        <img src="{{$news->thumbnail()}}" alt="{{$news->title}}">
                    </figure>
                </div>
                <div class="news__body">
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
                    <div class="news__body__content">
                        <a href="/latest-news/{{$news->id}}"><h3>{{$news->title}}</h3></a>
                        <p>{{ str_limit($news->content, 200) }}</p>
                        <a href="/latest-news/{{$news->id}}">Read more</a>
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>
    @endif

    @if ($upcoming_events)
    <div class="shadow-separator"></div>
    <h2 class="nice-heading">Upcoming Events</h2>

    <div class="row">
        @foreach ($upcoming_events as $news)
        <div class="col">
            <div class="news">
                <div class="news__head">
                    <figure class="image">
                        <img src="{{$news->thumbnail()}}" alt="{{$news->title}}">
                    </figure>
                </div>
                <div class="news__body">
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
                    <div class="news__body__content">
                        <a href="/latest-news/{{$news->id}}"><h3>{{$news->title}}</h3></a>
                        <p>{{ str_limit($news->content, 200) }}</p>
                        <a href="/upcoming-events/{{$news->id}}">Read more</a>
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>
    @endif

    <div class="subscribe">
        <a href="/contact">CONTACT US</a>
    </div>
@endsection
