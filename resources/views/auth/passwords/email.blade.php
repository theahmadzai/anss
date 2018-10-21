@extends('layouts.master')

@section('title', 'User account')

@section('content')

    <div class="bar">
        <h2>Reset Password</h2>
    </div>

    <div class="container">
        <div class="container__wide">
            <div class="container__row">
                @if (session('status'))
                    <div role="alert">
                        {{ session('status') }}
                    </div>
                @endif

                <form method="POST" action="/password/email">
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
                        <button class="button">Send Password Reset Link</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="container__narrow"></div>
    </div>

@endsection
