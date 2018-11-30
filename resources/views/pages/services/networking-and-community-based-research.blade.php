@extends('layouts.master')

@section('title', $title)

@section('content')

    @component('components.head')
        {{ $title }}
    @endcomponent

    <section class="section">
        <ul class="list">
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
    </section>

@endsection
