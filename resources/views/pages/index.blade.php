@extends('layouts.master')

@section('title', 'Home')

@section('content')

    <div class="slider" id="slider">
        <ul>
            @foreach ($slides as $slide)
                <li>
                    <img src="{{$slide->url}}" alt="{{$slide->title}}" style="position:relative;">
                    <h1 style="position:absolute;z-index:2000;left:4%;top:10%; background:#000; color:#fff; opacity:0.5; padding:0.5rem 1rem;">{{$slide->title}}</h1>
                    <a style="position:absolute;z-index:2000;right:4%;bottom:15%; background:#fff; padding:0.5rem 1rem;" href="{{$slide->description}}">Read More</a>
                </li>
            @endforeach
        </ul>
        <button class="slider__prev" id="slider-prev"><span class="icon icon-circle-left"></span></button>
        <button class="slider__next "id="slider-next"><span class="icon icon-circle-right"></span></button>
    </div>

    <div class="main-blocks">
        <div>
            <h2>Vision</h2>
            <p>Prosperous, connected and self-reliant communities</p>
        </div>

        <div>
            <h2>Mission</h2>
            <p>To provide quality social services for concerned communities</p>
        </div>

        <div>
            <h2>Core Values</h2>
            <ul>
                <li>Integrity</li>
                <li>Transparency</li>
                <li>Professionalism</li>
                <li>Diversity</li>
            </ul>
        </div>

        <div>
            <h2>Competencies</h2>
            <ul>
                <li>Client Centered</li>
                <li>Results Oriented </li>
                <li>Accountability</li>
                <li>Communication</li>
                <li>Excellence</li>
            </ul>
        </div>
    </div>

    <div class="main-news">
        <h2>Latest news</h2>

        <div class="news-blocks">
            @foreach ($latest_news as $news)
                <div class="block">
                    <div class="date">{{$news->created_at->format('F d, Y')}}</div>
                    <a href="/latest-news/{{$news->id}}"><h3>{{$news->title}}</h3></a>
                    <p>{{ str_limit($news->content, 200) }}</p>
                </div>
            @endforeach
        </div>
    </div>

    <div class="subscribe">
        <a href="/login">Subscribe</a>
     </div>
@endsection
