@extends('layouts.master')

@section('title', 'Sign Up')

@section('content')

    @component('components.head')
        Create an account
    @endcomponent

    <section class="section">

        <form class="form" method="POST" action="/register">
            @csrf

            <div class="form__item">
                <label class="label">Name <span>*</span></label>
                <input class="input" type="text" name="name" value="{{ old('name') }}" required autofocus>
                @if ($errors->has('name'))
                    <p>{{ $errors->first('name') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Email <span>*</span></label>
                <input class="input" type="text" name="email" value="{{ old('email') }}" required>
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
                <button class="button">Register</button>
            </div>
        </form>

    </section>

@endsection
