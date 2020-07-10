@extends('layouts.master')

@section('title', 'Board of Directors')

@section('content')

    @component('components.head')
        Board of Directors
    @endcomponent

    @each('components.profile', $directors, 'director', 'components.empty')

@endsection
