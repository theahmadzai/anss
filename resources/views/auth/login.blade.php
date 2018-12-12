@extends('layouts.master')

@section('title', 'Login')

@section('content')

    @component('components.head')
        Login
    @endcomponent

    <section class="section">

        <p>Don't have an account? <a href="/register">Sign up</a></p>

        <form class="form" method="POST" action="/login">
            @csrf

            <div class="form__item">
                <label class="label">Email <span>*</span></label>
                <input class="input" type="text" name="email" value="{{ old('email') }}" required autofocus>
                @if ($errors->has('email'))
                    <p>{{ $errors->first('email') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Password <span>*</span></label>
                <input class="input" type="password" name="password" required>
                @if ($errors->has('password'))
                    <p>{{ $errors->first('password') }}</p>
                @endif
            </div>

            <div class="form__item form__item--inline">
                <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}>
                <label class="label label--inline">Remember Me</label>
            </div>

            <div class="form__item">
                <button class="button">Log in</button>
            </div>
        </form>

        <a href="/password/reset">Forgot Your Password?</a>

    </section>

@endsection
