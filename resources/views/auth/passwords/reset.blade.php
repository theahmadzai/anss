@extends('layouts.master')

@section('title', 'Reset Password')

@section('content')

    @component('components.head')
        Reset Password
    @endcomponent

    <section class="section">

        <form class="form" method="POST" action="/password/reset">
            @csrf

            <input type="hidden" name="token" value="{{ $token }}">

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

            <div class="form__item">
                <label class="label">Confirm Password <span>*</span></label>
                <input class="input" type="password" name="password_confirmation" required>
            </div>

            <div class="form__item">
                <button class="button">Reset Password</button>
            </div>
        </form>

    </section>

@endsection
