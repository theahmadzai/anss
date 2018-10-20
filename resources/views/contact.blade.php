@extends('layouts.master')

@section('title', 'Contact')

@section('content')

    <div class="bar">
        <h2>Contact Us</h2>
    </div>

    <div class="container">
        <div class="container__narrow"></div>
        <div class="container__wide">
            <div class="container__row">

                <h1>Contact Form</h1>

                <p>Thank you for using this form to leave us a message. Required fields marked with *.</p>

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
                        <label for="">Subject <span>*</span></label>
                        <input type="text">
                    </div>
                    <div class="form__control">
                        <label for="">Message <span>*</span></label>
                        <textarea name=""></textarea>
                    </div>
                    <div class="form__control">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

@endsection
