@extends('layouts.master')

@section('title', 'Latest News')

@section('content')

    @component('components.head')
        Latest News
    @endcomponent

    <div class="articles">
        @each('components.news_preview', $articles, 'article', 'components.empty')
    </div>

    {{ $articles->links() }}

@endsection
