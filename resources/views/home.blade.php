@extends('layouts.master')

@section('title', 'Home')

@section('content')

    <div class="container">
        @if (session('status'))
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
        @endguest
    </div>

@endsection
