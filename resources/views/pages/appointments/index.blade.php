@extends('layouts.master')

@section('title', 'Appointments')

@section('content')

    <div class="bar">
        <h1>Appointments</h1>
    </div>

    <div class="container">
        <div class="container__narrow"></div>
        <div class="container__wide">
            @if ($count > 0)
                <p style="margin:2rem 0; text-align:center;"><strong>{{ $count }}</strong> appointments available</p>
                <button style="padding: 0.7rem; font-size:1rem; background:white; border:1px solid #ccc; cursor:pointer; margin: 2rem auto; display:block;">Book an appointment</button>

                <div style="padding:2rem 4rem;">
                    <form action="">
                        <div class="form__control">
                            <label for="">Name <span>*</span></label>
                            <input type="text">
                        </div>
                        <div class="form__control">
                            <label for="">E-mail Address <span>*</span></label>
                            <input type="email">
                        </div>
                        <div class="form__control">
                            <label for="">phone <span>*</span></label>
                            <input type="tel">
                        </div>
                        <div class="form__control">
                            <label for="">Message <span>*</span></label>
                            <textarea name=""></textarea>
                        </div>
                        <div class="form__control">
                            <div class="g-recaptcha" data-sitekey="6LeAdXgUAAAAAGHqwygP-UbVQzvzNoRjXDLnCCwo"></div>
                        </div>
                        <div class="form__control">
                            <button class="button">Submit</button>
                        </div>
                    </form>
                </div>
            @else
                <h1>No appointments</h1>
            @endif

        </div>
    </div>

@endsection
