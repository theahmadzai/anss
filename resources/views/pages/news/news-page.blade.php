@extends('layouts.master')

@section('title', $article->title)

@section('content')

    <div class="bar">
        <h1>{{ $article->title }}</h1>
    </div>

    <div class="container">
        <div class="container__wide">
            <div class="container__row">
                <article class="flex flex--column article">
                    <div class="flex__item"><span class="icon icon-calendar"></span><span>{{ $article->created_at }}</span></div>
                    <div class="flex__item"><span class="icon icon-price-tag"></span>{{ $article->tags }}</div>
                    <div class="flex__item"><p>{{ $article->content }}</p></div>
                    <div class="flex__item"><a href="#" class="button">Read More</a></div>
                </article>
            </div>
        </div>

        <div class="container__narrow"></div>
    </div>

@endsection
