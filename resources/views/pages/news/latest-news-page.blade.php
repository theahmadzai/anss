@extends('layouts.master')

@section('title', $news_->title)

@section('content')

    <div class="bar">
        <h1>{{ $news_->title }}</h1>
    </div>

    <div class="container">
        <div class="container__wide">
            <div class="row">
                <article class="col col--full article">
                    <figure class="image image--wide margin--bottom">
                        <img src="{{$news_->image}}" alt="{{$news_->title}}">
                    </figure>
                    <div class="datetime">
                        <i class="icon icon-calendar"></i><span>{{ $news_->date }}</span>
                    </div>
                    <div class="tags">
                        <i class="icon icon-price-tag"></i><span>{{ $news_->tags ?? 'ANSS Foundation' }}</span>
                    </div>
                    <div class="content">
                        <p>{{ $news_->content }}</p>
                    </div>
                </article>
            </div>
        </div>

        <div class="container__narrow"></div>
    </div>

@endsection
