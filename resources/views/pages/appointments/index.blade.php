@extends('layouts.master')

@section('title', 'Appointments')

@section('content')

    <div class="bar">
        <h1>Appointments</h1>
    </div>

    <div class="container">
        <div class="container__narrow"></div>

        <div class="container__wide">
            @if ($appointments->count())
                <div class="appointments">
                    <div class="appointments__item" style="text-align:center; background:#555; color:#eee;">
                        <p><b>Timing</b></p>
                        <p><b>Description</b></p>
                        <p><b>Status</b></p>
                    </div>
                    @foreach ($appointments as $appointment)
                    <div class="appointments__item">
                        <div class="datetime">
                            <p>{{$appointment->date->diffForHumans()}}</p>
                        </div>
                        <div>
                            <p>{{str_limit($appointment->description, 30, '...')}}</p>
                        </div>
                        <div class="book">
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

            <div style="text-align:center;">
                <h2>Contact instead?</h2>
                <a href="/contact" style="padding:0.5rem 1rem; background:brown; color:white; border-radius:5px; display:inline-block; margin-top:2rem;">Contact Us</a>
            </div>

        </div>
    </div>

@endsection
