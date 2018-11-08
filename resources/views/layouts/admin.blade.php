@extends('layouts.master')

@section('title', 'Admin')

@section('content')

    <div class="bar" style="display:flex;justify-content: space-between;">
        <h1>Admin Panel</h1>
        <p>Welcome, <strong>{{ Auth::user()->name }}</strong></p>
        @if (session('status'))
            <p>{{ session('status') }}</p>
        @endif
    </div>

    @yield('panel')

@endsection
