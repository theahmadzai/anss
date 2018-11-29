@extends('layouts.master')

@section('title', $title)

@section('content')

    @component('components.head')
        {{ $title }}
    @endcomponent

    <div class="container">
        <div class="container__wide">
            <div class="segment">
                <h2 class="segment__header">Strategic Objectives</h2>
                <div class="segment__body">
                     <ul>
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
        </div>
    </div>

@endsection
