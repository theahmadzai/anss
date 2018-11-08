
@extends('layouts.master')

@section('title', 'Appointments')

@section('content')

    <div class="bar">
        <h1>Book Appointments</h1>
    </div>

    <div style="padding:2rem 4rem;">

        <div style="display:grid; margin-bottom:2rem; background:#efefef; padding:0.2rem;">
            <div style="padding:0 1rem; font-size:0.7rem;">
                <p>{{$appointment->timing->toDayDateTimeString()}}</p>
            </div>
            <div style="background:white; padding:0 1rem;">
                <p>{{$appointment->description}}</p>
            </div>
        </div>

        <form method="POST" action="/appointments/{{$appointment->id}}">
            @csrf

            <div class="form__control">
                <label for="">Name <span>*</span></label>
                <input type="text" name="name" value="{{ old('name') }}">
                @if ($errors->has('name'))
                    <p>{{ $errors->first('name') }}</p>
                @endif
            </div>

            <div class="form__control">
                <label for="">E-mail Address <span>*</span></label>
                <input type="email" name="email" value="{{ old('email') }}">
                @if ($errors->has('email'))
                    <p>{{ $errors->first('email') }}</p>
                @endif
            </div>

            <div class="form__control">
                <label for="">phone</label>
                <input type="tel" name="phone" value="{{ old('phone') }}">
                @if ($errors->has('phone'))
                    <p>{{ $errors->first('phone') }}</p>
                @endif
            </div>

            <div class="form__control">
                <label for="">Message</label>
                <textarea name="message">{{ old('message') }}</textarea>
                @if ($errors->has('message'))
                    <p>{{ $errors->first('message') }}</p>
                @endif
            </div>

            <div class="form__control">
                <button class="button">Book</button>
            </div>
        </form>
    </div>

@endsection
