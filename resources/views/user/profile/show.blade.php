@extends('layouts.master')

@section('title', 'Profile')

@section('content')

    <section class="section">

        <div class="profile-card">
            <div class="profile-card__image">
                <img src="{{ $profile->avatar }}" alt="{{ $profile->name }}">
            </div>

            <div class="profile-card__links">
                <a href="https://instagram.com/{{ $profile->instagram }}" target="blank"><i class="icon icon-instagram"></i></a>
                <a href="https://facebook.com/{{ $profile->facebook }}" target="blank"><i class="icon icon-facebook"></i></a>
                <a href="https://twitter.com/{{ $profile->twitter }}" target="blank"><i class="icon icon-twitter"></i></a>
                <a href="{{ $profile->website }}" target="blank"><i class="icon icon-earth"></i></a>
            </div>

            <div class="profile-card__info">
                <div class="profile-card__info__name">
                    {{ $profile->name }}
                </div>

                <div class="profile-card__info__item">
                    <i class="icon icon-phone"></i>
                    {{ $profile->phone }}
                </div>

                <div class="profile-card__info__item">
                    <i class="icon icon-calendar"></i>
                    {{ $profile->dob->toFormattedDateString() }}
                </div>

                <div class="profile-card__info__item">
                    <i class="icon icon-address-book"></i>
                    {{ $profile->address }}
                </div>

                <div class="profile-card__info__description">
                    <div class="profile-card__info__description__bio">Biography</div>
                    <p>{{ $profile->description }}</p>
                </div>
            </div>
        </div>

        @auth
            <a class="button" href="{{ url('profile/'. $profile->id . '/edit')}}">Edit your profile</a>
        @endauth

    </section>

@endsection
