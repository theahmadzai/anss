@extends('layouts.master')

@section('title', $title)

@section('content')

    @component('components.head')
        {{ $title }}
    @endcomponent

    <div class="articles">
        @each('components.news.item', $articles, 'article', 'components.empty')
    </div>

    {{ $articles->links() }}

@endsection
