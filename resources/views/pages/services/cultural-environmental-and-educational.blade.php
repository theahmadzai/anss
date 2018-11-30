@extends('layouts.master')

@section('title', $title)

@section('content')

    @component('components.head')
        {{ $title }}
    @endcomponent

    <section class="section">
        <ul class="list">
            <li>
            <p>Referrals for Credentialed Assessment of educational documents</p>
            </li>
            <li>
                <p>Organizing community events to raise awareness about environmental protection, waste collection and disposal, food safety and mental health</p>
            </li>
            <li>
                <p>To organize cultural events</p>
            </li>
            <li>
                <p>To promote cultural diversity through educational programs</p>
            </li>
        </ul>
    </section>

@endsection
