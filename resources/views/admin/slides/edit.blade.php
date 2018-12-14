@extends('layouts.admin')

@section('panel')

    <section class="section">

        <form class="form" method="POST" action="{{ url('slides/' . $slide->id) }}"  enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <div class="form__item">
                <label class="label">Title</label>
                <input class="input" type="text" name="title" value="{{ old('title', $slide->title) }}">
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
                <input class="input" type="text" name="link" value="{{ old('link', $slide->link) }}">
                @if ($errors->has('link'))
                    <p>{{ $errors->first('link') }}</p>
                @endif
            </div>

            <div class="form__item">
                <button class="button">Update</button>
            </div>
        </form>

    </section>

@endsection
