@extends('layouts.master')

@section('title', $title)

@section('content')

    @component('components.head')
        {{ $title }}
    @endcomponent

    <div class="section">
        <div style="color:brown;font-size:1rem;">This section is under construction</div>
    </div>

@endsection
