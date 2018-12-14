@extends('layouts.admin')

@section('panel')

    <section class="section">

        <form class="form" method="POST" action="{{ url('slides') }}" enctype="multipart/form-data">
            @csrf

            <div class="form__item">
                <label class="label">Title</label>
                <input class="input" type="text" name="title" value="{{ old('title') }}">
                @if ($errors->has('title'))
                    <p>{{ $errors->first('title') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Image</label>
                <input class="file" type="file" name="image">
                @if ($errors->has('image'))
                    <p>{{ $errors->first('image') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Link</label>
                <input class="input" type="text" name="link" value="{{ old('link') }}">
                @if ($errors->has('link'))
                    <p>{{ $errors->first('link') }}</p>
                @endif
            </div>

            <div class="form__item">
                <button class="button">Upload</button>
            </div>
        </form>

    </section>

@endsection
