@extends('layouts.master')

@section('title', $article->title)

@section('content')

    @component('components.head')
        {{ $article->title }}
    @endcomponent

    <section class="section">
        @include('components.article')
    </section>

@endsection
