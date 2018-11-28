@extends('layouts.master')

@section('title', 'Strategic Plans')

@section('content')

    <div class="bar">
        <h1>Strategic Plans</h1>
    </div>

    <div class="container">
        <div class="container__narrow">
            <a href="/about">Who we are</a> <br>
            <a href="/board-of-directors">Board of Directors</a>
        </div>

        <div class="container__wide">
            <h2 style="text-align:center;padding:1rem;">Strategic Objectives</h2>
            <ul style="padding:2rem; background:#eaeaea;list-style-type:disc;">
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
        </div>
    </div>

@endsection
