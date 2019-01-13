@extends('layouts.master')

@section('title', $title)

@section('content')

    @component('components.head')
        {{ $title }}
    @endcomponent

    <section class="section">

        <p>Thank you for using this form to leave us a message. Required fields marked with *.</p>

        <form class="form" method="POST" action="/contact">
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
                <label class="label">Subject <span>*</span></label>
                <input class="input" type="text" name="subject" value="{{ old('subject') }}">
                @if ($errors->has('subject'))
                    <p>{{ $errors->first('subject') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Message <span>*</span></label>
                <textarea name="message">{{ old('message') }}</textarea>
                @if ($errors->has('message'))
                    <p>{{ $errors->first('message') }}</p>
                @endif
            </div>

            <div class="form__item">
                <div class="g-recaptcha" data-sitekey="{{env('NOCAPTCHA_SITEKEY')}}"></div>
                @if ($errors->has('g-recaptcha-response'))
                    <p>{{ $errors->first('g-recaptcha-response') }}</p>
                @endif
            </div>

            <div class="form__item">
                <button class="button">Submit</button>
            </div>
        </form>

    </section>

@endsection

@push('scripts')
    <script src='https://www.google.com/recaptcha/api.js' async defer></script>
@endpush
