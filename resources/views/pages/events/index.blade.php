@extends('layouts.master')

@section('title', $title)

@section('content')

    @component('components.head')
        {{ $title }}
    @endcomponent

    <div class="articles">
        @each('components.event_preview', $articles, 'article', 'components.empty')
    </div>

    {{ $articles->links() }}

@endsection
