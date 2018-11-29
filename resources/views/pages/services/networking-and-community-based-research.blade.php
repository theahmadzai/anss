@extends('layouts.master')

@section('title', $title)

@section('content')

    @component('components.head')
        {{ $title }}
    @endcomponent

    <div class="container">
        <div class="container__wide">
            <div class="segment">
                <h2 class="segment__header">Networking, Research and Advocacy</h2>
                <div class="segment__body">
                    <ul>
                        <li>
                            <p>Identify gross-root community concerns and issues through conducting researches</p>
                        </li>
                        <li>
                            <p>Proposing viable and evidence-informed recommendations to solve community issues</p>
                        </li>
                        <li>
                            <p>Organizing networking events and community gatherings</p>
                        </li>
                        <li>
                            <p>Facilitating employment opportunities and trainings, and referral of jobseekers to employers</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

@endsection
