@extends('layouts.master')

@section('title', 'Profile')

@section('content')

    @component('components.head')
        Welcome, {{ Auth::user()->name ?? Auth::user()->username ?? Auth::user()->email }}
    @endcomponent

    <section class="section">

        <form class="form" method="POST" action="/user">
            @csrf

            <img src="{{ Auth::user()->avatar }}" alt="{{ Auth::user()->name }}" style="width:200px; height:200px;">

            <div class="form__item">
                <label class="label">Profile Picture</label>
                <input class="file" type="file" name="image">
                @if ($errors->has('image'))
                    <p>{{ $errors->first('image') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Name</label>
                <input class="input" type="text" name="name" value="{{ old('name', Auth::user()->name) }}">
                @if ($errors->has('name'))
                    <p>{{ $errors->first('name') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Email</label>
                <input class="input" type="email" name="email" value="{{ old('email', Auth::user()->email) }}">
                @if ($errors->has('email'))
                    <p>{{ $errors->first('email') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Phone</label>
                <input class="input" type="text" name="phone" value="{{ old('phone', Auth::user()->phone) }}">
                @if ($errors->has('phone'))
                    <p>{{ $errors->first('phone') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Address</label>
                <input class="input" type="text" name="address" value="{{ old('address', Auth::user()->address) }}">
                @if ($errors->has('address'))
                    <p>{{ $errors->first('address') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Date of birth</label>
                <input class="input" type="date" name="dob" value="{{ old('dob', Auth::user()->dob) }}">
                @if ($errors->has('dob'))
                    <p>{{ $errors->first('dob') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Description</label>
                <textarea name="description">{{ old('description', Auth::user()->description) }}</textarea>
                @if ($errors->has('description'))
                    <p>{{ $errors->first('description') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Facebook Username</label>
                <input class="input" type="text" name="facebook" value="{{ old('facebook', Auth::user()->facebook) }}">
                @if ($errors->has('facebook'))
                    <p>{{ $errors->first('facebook') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Twitter Username</label>
                <input class="input" type="text" name="twitter" value="{{ old('twitter', Auth::user()->twitter) }}">
                @if ($errors->has('twitter'))
                    <p>{{ $errors->first('twitter') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Instagram Username</label>
                <input class="input" type="text" name="instagram" value="{{ old('instagram', Auth::user()->instagram) }}">
                @if ($errors->has('instagram'))
                    <p>{{ $errors->first('instagram') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Website</label>
                <input class="input" type="text" name="website" value="{{ old('website', Auth::user()->website) }}">
                @if ($errors->has('website'))
                    <p>{{ $errors->first('website') }}</p>
                @endif
            </div>

            <div class="form__item">
                <button class="button">Update</button>
            </div>
        </form>

    </section>

@endsection
