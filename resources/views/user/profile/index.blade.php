@extends('layouts.master')

@section('title', 'Profile')

@section('content')

    <section class="section">

        <div class="profile-card">
            <div class="profile-card__image">
                <img src="{{ Auth::user()->avatar }}" alt="{{ Auth::user()->name }}">
            </div>

            <div class="profile-card__links">
                <a href="https://instagram.com/{{ Auth::user()->instagram }}" target="blank"><i class="icon icon-instagram"></i></a>
                <a href="https://facebook.com/{{ Auth::user()->facebook }}" target="blank"><i class="icon icon-facebook"></i></a>
                <a href="https://twitter.com/{{ Auth::user()->twitter }}" target="blank"><i class="icon icon-twitter"></i></a>
                <a href="{{ Auth::user()->website }}" target="blank"><i class="icon icon-earth"></i></a>
            </div>

            <div class="profile-card__info">
                <div class="profile-card__info__name">
                    {{ Auth::user()->name }}
                </div>

                <div class="profile-card__info__item">
                    <i class="icon icon-phone"></i>
                    {{ Auth::user()->phone }}
                </div>

                <div class="profile-card__info__item">
                    <i class="icon icon-calendar"></i>
                    {{ Auth::user()->dob->toFormattedDateString() }}
                </div>

                <div class="profile-card__info__item">
                    <i class="icon icon-address-book"></i>
                    {{ Auth::user()->address }}
                </div>

                <div class="profile-card__info__description">
                    <div class="profile-card__info__description__bio">Biography</div>
                    <p>{{ Auth::user()->description }}</p>
                </div>
            </div>
        </div>

        <a class="button" href="{{ url('profile/'. Auth::user()->id . '/edit')}}">Edit your profile</a>

    </section>

@endsection
