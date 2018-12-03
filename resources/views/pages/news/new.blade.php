@extends('layouts.master')

@section('title', $news->title)

@section('content')

    @component('components.head')
        {{ $news->title }}
    @endcomponent

    <section class="section">
        <article class="article">
            <div class="article__image">
                <img src="{{ $news->image }}" alt="{{ $news->title }}">
            </div>

            <h2 class="article__title">{{$news->title}}</h2>

            <div class="article__date">
                <i class="icon icon-calendar"></i><span>{{ $news->date->toDayDateTimeString() }}</span>
            </div>

            <div class="article__tags">
                <i class="icon icon-price-tag"></i><span>{{ $news->tags }}</span>
            </div>

            <div class="article__content">
                <p>{{ $news->content }}</p>
            </div>
        </article>

        @include('partials.disqus')

    </section>

@endsection
