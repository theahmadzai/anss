@extends('layouts.master')

@section('title', 'Subscribe to Updates and Newsletter')

@section('content')

    @component('components.head')
        Subscribe to Updates and Newsletter
    @endcomponent

    <section class="section">

        <form class="form" method="POST" action="{{ url()->current() }}">
            @csrf

            <div class="form__item">
                <label class="label">Name <span>*</span></label>
                <input class="input" type="text" name="name" value="{{ old('name') }}">
                @if ($errors->has('name'))
                    <p>{{ $errors->first('name') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">E-mail Address <span>*</span></label>
                <input class="input" type="email" name="email" value="{{ old('email') }}">
                @if ($errors->has('email'))
                    <p>{{ $errors->first('email') }}</p>
                @endif
            </div>

            <div class="form__item">
                <button class="button">Subscribe</button>
            </div>
        </form>

    </section>

@endsection
