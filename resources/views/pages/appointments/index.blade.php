@extends('layouts.master')

@section('title', $title)

@section('content')

    @component('components.head')
        {{ $title }}
    @endcomponent

    <section class="section">

        <form class="form" method="POST" action="/appointments" enctype="multipart/form-data">
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
                <label class="label">Phone</label>
                <input class="input" type="tel" name="phone" value="{{ old('phone') }}">
                @if ($errors->has('phone'))
                    <p>{{ $errors->first('phone') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Timing <span>*</span></label>
                <input class="input" id="datetimepicker" type="text" name="date" value="{{ old('date') }}">
                @if ($errors->has('date'))
                    <p>{{ $errors->first('date') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Category <span>*</span></label>
                <select class="input" name="category">
                    <option value="1" {{ old('category') == 1 ? 'selected' : ''}}>General</option>
                    <option value="2" {{ old('category') == 2 ? 'selected' : ''}}>Settlement</option>
                    <option value="3" {{ old('category') == 3 ? 'selected' : ''}}>Employment</option>
                    <option value="4" {{ old('category') == 4 ? 'selected' : ''}}>Referrals</option>
                    <option value="5" {{ old('category') == 5 ? 'selected' : ''}}>Other</option>
                </select>
                @if ($errors->has('category'))
                    <p>{{ $errors->first('category') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Message <span>*</span></label>
                <textarea name="message">{{ old('message') }}</textarea>
                @if ($errors->has('message'))
                    <p>{{ $errors->first('message') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Attachments</label>
                <input class="file" type="file" name="files[]" multiple>
            </div>

            <div class="form__item">
                <button class="button">Book</button>
            </div>
        </form>

    </section>

@endsection

@include('components.flatpickr')
