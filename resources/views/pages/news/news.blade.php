@extends('layouts.master')

@section('title', $title)

@section('content')

    @component('components.head')
        {{ $title }}
    @endcomponent

    <section class="section">
        @if ($news)
            <div class="articles">
                @foreach ($news as $new)
                    <div class="articles__item">
                        <div class="date">
                            <div class="day">
                                {{$new->date->day}}
                            </div>
                            <div class="month">
                                {{$new->date->shortEnglishMonth}}
                            </div>
                            <div class="year">
                                {{$new->date->year}}
                            </div>
                        </div>
                        <div class="content">
                            <h2 class="content__heading"><a href="/news/{{$new->id}}">{{$new->title}}</a></h2>
                            <p class="content__tags"><i class="icon icon-price-tag"></i>{{ $new->tags }}</p>
                            <p class="content__text">{{ str_limit($new->content, 300) }}..</p>
                            <a class="content__link" href="/news/{{$new->id}}">Read More</a>
                        </div>
                    </div>
                @endforeach
            </div>

            <div class="paging">
                {{ $news->links() }}
            </div>
        @endif
    </section>

@endsection
