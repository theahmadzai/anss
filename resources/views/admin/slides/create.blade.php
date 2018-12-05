@extends('layouts.admin')

@section('panel')

    <div style="padding:2rem;">

        <form method="POST" action="/admin/slides" enctype="multipart/form-data">
            @csrf

            <div class="form__control">
                <label>Title</label>
                <input type="text" name="title" value="{{ old('title') }}">
                @if ($errors->has('title'))
                    <p>{{ $errors->first('title') }}</p>
                @endif
            </div>

            <div class="form__control">
                <label>Image</label>
                <input type="file" name="image">
                @if ($errors->has('image'))
                    <p>{{ $errors->first('image') }}</p>
                @endif
            </div>

            <div class="form__control">
                <label>Link</label>
                <input type="text" name="link" value="{{ old('link') }}">
                @if ($errors->has('link'))
                    <p>{{ $errors->first('link') }}</p>
                @endif
            </div>

            <div class="form__control">
                <button>Upload</button>
            </div>
        </form>

    </div>

@endsection
