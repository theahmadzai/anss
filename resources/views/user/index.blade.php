@extends('layouts.master')

@section('content')

    <div style="padding:2rem;">

    <p>{{ Auth::user()->name }}</p>

    <p>{{ Auth::user()->email }}</p>

    <p>{{ Auth::user()->description }}</p>

    <p>{{ Auth::user()->phone }}</p>

    </div>

@endsection
