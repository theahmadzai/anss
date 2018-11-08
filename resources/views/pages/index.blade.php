@extends('layouts.master')

@section('title', 'Home')

@section('content')

    <div class="slider" id="slider">
        <ul>
            <li>
                <img src="/img/s1.jpg" alt="">
            </li>
            <li>
                <img src="/img/s2.jpg" alt="">
            </li>
            <li>
                <img src="/img/s3.jpg" alt="">
            </li>
            <li>
                <img src="/img/s4.jpg" alt="">
            </li>
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
@endsection
