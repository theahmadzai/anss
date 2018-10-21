@extends('layouts.master')

@section('title', 'User account')

@section('content')

    <div class="bar">
        <h2>User account</h2>
    </div>

    <div class="container">
        <div class="container__wide">
            <div class="container__row">
                <form method="POST" action="/login">
                    @csrf

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
                        <input type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                        <label for="remember">Remember Me</label>
                    </div>

                    <div class="form__control">
                        <button class="button">Log in</button>
                    </div>

                     <a class="btn btn-link" href="/password/reset">Forgot Your Password?</a>
                </form>
            </div>
        </div>

        <div class="container__narrow"></div>
    </div>

@endsection
