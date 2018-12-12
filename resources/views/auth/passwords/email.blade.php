@extends('layouts.master')

@section('title', 'Email Verification')

@section('content')

    @component('components.head')
        Email Verification
    @endcomponent

   <section class="section">

        @if (session('status'))
            <div role="alert">
                {{ session('status') }}
            </div>
        @endif

        <form class="form" method="POST" action="/password/email">
            @csrf

            <div class="form__item">
                <label class="label">Email</label>
                <input type="text" name="email" value="{{ old('email') }}" required autofocus>
                @if ($errors->has('email'))
                    <p>{{ $errors->first('email') }}</p>
                @endif
            </div>

            <div class="form__item">
                <button class="button">Send Password Reset Link</button>
            </div>
        </form>

    </section>

@endsection
