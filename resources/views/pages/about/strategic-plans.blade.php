@extends('layouts.master')

@section('title', $title)

@section('content')

    @component('components.head')
        {{ $title }}
    @endcomponent

    <section class="section">
        <p class="t1" style="margin-bottom:1rem;"><i>ANSS aims to contribute to the well-being of communities it serves through the following three strategic objectives that it will achieve in the long-term to realize prosperous, connected and self-reliant communities.</i></p>
        <ul class="listtype">
            <li>
                <p>To provide immigration and settlement services to newcomers</p>
            </li>
            <li>
                <p>To provide cultural, environmental promotion and educational services</p>
            </li>
            <li>
                <p>To empower youth, newcomers, immigrants and vulnerable population through networking and research</p>
            </li>
        </ul>
    </section>

@endsection
