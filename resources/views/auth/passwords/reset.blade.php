@extends('layouts.master')

@section('title', 'User account')

@section('content')

    <div class="bar">
        <h2>Reset Password</h2>
    </div>

    <div class="container">
        <div class="container__wide">
            <div class="container__row">
                <form method="POST" action="/password/reset">
                    @csrf

                    <input type="hidden" name="token" value="{{ $token }}">

                    <div class="form__control">
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email" value="{{ old('email') }}" required autofocus>
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
                        <button class="button">Reset Password</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="container__narrow"></div>
    </div>

@endsection
