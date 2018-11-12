@extends('layouts.master')

@section('title', 'Subscribe')

@section('content')

    <div style="padding:2rem;">

        <form method="POST" action="/subscribe">
            @csrf

            <div class="form__control">
                <label for="">Name <span>*</span></label>
                <input type="text" name="name" value="{{ old('name') }}">
                    @if ($errors->has('name'))
                    <p>{{ $errors->first('name') }}</p>
                @endif
            </div>

            <div class="form__control">
                <label for="">E-mail Address <span>*</span></label>
                <input type="email" name="email" value="{{ old('email') }}">
                @if ($errors->has('email'))
                    <p>{{ $errors->first('email') }}</p>
                @endif
            </div>

            <div class="form__control">
                <button class="button">Subscribe</button>
            </div>
        </form>

    </div>

@endsection
