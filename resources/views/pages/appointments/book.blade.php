
@extends('layouts.master')

@section('title', $title)

@section('content')

    @component('components.head')
        {{ $title }}
    @endcomponent

    <section class="section">

        <div style="padding:1rem; background:#a7a7a7; color:#ffffff;">
            <p>{{$appointment->date->toDayDateTimeString()}}</p>
        </div>
        <div style="padding:1rem; background:#f9f9f9;">
            <p>{{$appointment->description}}</p>
        </div>

        <form class="form" method="POST" action="/appointments/{{$appointment->id}}" enctype="multipart/form-data">
            @csrf

            <div class="form__item">
                <label class="label">Name <span>*</span></label>
                <input class="input" type="text" name="name" value="{{ old('name') }}">
                @if ($errors->has('name'))
                    <p>{{ $errors->first('name') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">E-mail Address <span>*</span></label>
                <input class="input" type="email" name="email" value="{{ old('email') }}">
                @if ($errors->has('email'))
                    <p>{{ $errors->first('email') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">phone</label>
                <input class="input" type="tel" name="phone" value="{{ old('phone') }}">
                @if ($errors->has('phone'))
                    <p>{{ $errors->first('phone') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Message</label>
                <textarea name="message">{{ old('message') }}</textarea>
                @if ($errors->has('message'))
                    <p>{{ $errors->first('message') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Files</label>
                <input class="file" type="file" name="files[]" multiple>
            </div>

            <div class="form__item">
                <button class="button">Book</button>
            </div>
        </form>

    </section>

@endsection
