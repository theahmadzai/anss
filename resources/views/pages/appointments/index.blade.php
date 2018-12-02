@extends('layouts.master')

@section('title', $title)

@section('content')

    @component('components.head')
        {{ $title }}
    @endcomponent

    <section class="section">
        @if ($appointments->count())
        <div class="appointments">
            <div class="appointments__item appointments__item--header">
                <div>Timing</div>
                <div>Description</div>
                <div>Status</div>
            </div>
            @foreach ($appointments as $appointment)
            <div class="appointments__item">
                <div>{{$appointment->date->diffForHumans()}}</div>
                <div>{{str_limit($appointment->description, 150, '...')}}</div>
                <div>
                @if ($appointment->status == 1)
                    <p>Already booked</p>
                @elseif ($appointment->date < \Carbon\Carbon::now())
                    <p>Not available</p>
                @else
                    <button><a href="/appointments/{{$appointment->id}}">Book</a></button>
                @endif
                </div>
            </div>
            @endforeach
        </div>
        @else
        <h2 style="padding:2rem; text-align:center;">No appointments available!</h2>
        @endif

        <div style="text-align:center;margin:3rem 0;">
            <h2>Contact instead?</h2>
            <a href="/contact" style="padding:0.5rem 1rem; background:brown; color:white; border-radius:5px; display:inline-block; margin-top:2rem;">Contact Us</a>
        </div>
    </section>

@endsection
