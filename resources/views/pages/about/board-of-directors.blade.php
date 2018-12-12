@extends('layouts.master')

@section('title', $title)

@section('content')

    @component('components.head')
        {{ $title }}
    @endcomponent

    @each('components.profile', $directors, 'director', 'components.empty')

@endsection
