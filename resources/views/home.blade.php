@extends('layouts.master')

@section('title', 'Home')

@section('content')

    <div class="container">
        <div class="slider" id="slider">
            <ul>
                <li>
                    <img src="/img/s1.jpg" alt="">
                </li>
                <li>
                    <img src="/img/s2.jpg" alt="">
                </li>
                <li>
                    <img src="/img/s3.jpg" alt="">
                </li>
                <li>
                    <img src="/img/s4.jpg" alt="">
                </li>
            </ul>
            <button class="slider__prev" id="slider-prev"><span class="icon icon-circle-left"></span></button>
            <button class="slider__next "id="slider-next"><span class="icon icon-circle-right"></span></button>
        </div>

        {{-- @if (session('status'))
            <div class="alert alert-success" role="alert">
                {{ session('status') }}
            </div>
        @endif

        @guest
            <a href="/login">Login</a>
            @if (Route::has('register'))
            <a href="/register">Register</a>
            @endif
        @else
            <p>{{ Auth::user()->name }}</p>
            <form method="POST" action="/logout">
                @csrf
                <button>Logout</button>
            </form>
        @endguest --}}
    </div>

@endsection
