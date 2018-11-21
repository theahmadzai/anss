@extends('layouts.master')

@section('title', 'Contact')

@section('content')

    <div class="bar">
        <h1>Contact Us</h1>
    </div>

    <div class="container">
        <div class="container__narrow"></div>

        <div class="container__wide">

            <div style="padding:2rem;">
                <h1>Contact Form</h1>

                <p>Thank you for using this form to leave us a message. Required fields marked with *.</p>

                <form method="POST" action="/contact">
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
                        <label for="">Subject <span>*</span></label>
                        <input type="text" name="subject" value="{{ old('subject') }}">
                        @if ($errors->has('subject'))
                            <p>{{ $errors->first('subject') }}</p>
                        @endif
                    </div>

                    <div class="form__control">
                        <label for="">Message <span>*</span></label>
                        <textarea name="message">{{ old('message') }}</textarea>
                        @if ($errors->has('message'))
                            <p>{{ $errors->first('message') }}</p>
                        @endif
                    </div>

                    <div class="form__control">
                        <div class="g-recaptcha" data-sitekey="{{env('NOCAPTCHA_SITEKEY')}}"></div>
                        @if ($errors->has('g-recaptcha-response'))
                            <p>{{ $errors->first('g-recaptcha-response') }}</p>
                        @endif
                    </div>

                    <div class="form__control">
                        <button class="button">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    </div>

@endsection
