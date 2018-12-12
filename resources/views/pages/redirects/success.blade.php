@extends('layouts.master')

@section('title', 'Success')

@section('content')

    @component('components.head')
        Success
    @endcomponent

    <section class="section">

        <p>{{ $status }}</p>

    </section>

@endsection
