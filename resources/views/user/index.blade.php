@extends('layouts.master')

@section('title', 'Profile')

@section('content')

    @component('components.head')
        Welcome, {{ Auth::user()->name ?? Auth::user()->email }}
    @endcomponent

    <section class="section">

        <a href="/profile-edit">Edit your profile</a>

    </section>

@endsection
