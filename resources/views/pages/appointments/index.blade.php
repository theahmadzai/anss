@extends('layouts.master')

@section('title', 'Book an Appointment')

@section('content')

    @component('components.head')
        Book an Appointment
    @endcomponent

    <section class="section">

        <form class="form" method="POST" action="{{ url()->current() }}" enctype="multipart/form-data">
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
                <input class="input" type="date" name="date" value="{{ old('date') }}">
                @if ($errors->has('date'))
                    <p>{{ $errors->first('date') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Category <span>*</span></label>
                <select class="input" name="appointment_category_id">
                    @foreach ($appointment_categories as $category)
                        <option value="{{$category->id}}" {{ old('appointment_category_id') == $category->name ? 'selected' : ''}}>{{$category->name}}</option>
                    @endforeach
                </select>
                @if ($errors->has('appointment_category_id'))
                    <p>{{ $errors->first('appointment_category_id') }}</p>
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
                <label class="label">Attachment</label>
                <input class="file" type="file" name="attachment">
            </div>

            <div class="form__item">
                <button class="button">Book</button>
            </div>
        </form>

    </section>

@endsection
