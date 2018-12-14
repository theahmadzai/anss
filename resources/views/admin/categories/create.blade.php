@extends('layouts.admin')

@section('panel')

    <section class="section">

        <form class="form" method="POST" action="{{ url('categories') }}">
            @csrf

            <div class="form__item">
                <label class="label">Name</label>
                <input class="input" type="text" name="name" value="{{ old('name') }}">
                @if ($errors->has('name'))
                    <p>{{ $errors->first('name') }}</p>
                @endif
            </div>

            <div class="form__control">
                <button class="button">Create</button>
            </div>
        </form>

    </section>

@endsection
