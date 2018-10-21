@extends('layouts.master')

@section('title', 'User account')

@section('content')

    <div class="bar">
        <h2>User account</h2>
    </div>

    <div class="container">
        <div class="container__wide">
            <div class="container__row">
                <form method="POST" action="/register">
                    @csrf

                    <div class="form__control">
                        <label for="email">Name</label>
                        <input type="text" name="name" id="name" value="{{ old('name') }}" required autofocus>
                        @if ($errors->has('name'))
                            <span role="alert">
                                <strong>{{ $errors->first('name') }}</strong>
                            </span>
                        @endif
                    </div>

                    <div class="form__control">
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email" value="{{ old('email') }}" required>
                        @if ($errors->has('email'))
                            <span role="alert">
                                <strong>{{ $errors->first('email') }}</strong>
                            </span>
                        @endif
                    </div>

                    <div class="form__control">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" required>
                         @if ($errors->has('password'))
                            <span role="alert">
                                <strong>{{ $errors->first('password') }}</strong>
                            </span>
                        @endif
                    </div>

                    <div class="form__control">
                        <label for="password_confirmation">Confirm Password</label>
                        <input type="password" name="password_confirmation" id="password_confirmation" required>
                    </div>

                    <div class="form__control">
                        <button class="button">Register</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="container__narrow"></div>
    </div>

@endsection
