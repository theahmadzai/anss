@extends('layouts.master')

@section('title', $title)

@section('content')

    @include('components.slider')

    @include('components.plate')

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

    @if ($latest_news->count() > 0)
        <div class="shadow-separator"></div>
        <h2 class="nice-heading">Latest News</h2>

        <div class="headlines-list">
            @foreach ($latest_news as $headline)
                @include('components.headline', [
                    'link' => 'news'
                ])
            @endforeach
        </div>
    @endif

    @if ($upcoming_events->count() > 0)
        <div class="shadow-separator"></div>
        <h2 class="nice-heading">Upcoming Events</h2>

        <div class="headlines-list">
            @foreach ($upcoming_events as $headline)
                @include('components.headline', [
                    'link' => 'events'
                ])
            @endforeach
        </div>
    @endif

    <div class="subscribe">
        <a href="/contact">CONTACT US</a>
    </div>

@endsection

@include('components.slick')
