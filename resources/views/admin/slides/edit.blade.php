@extends('layouts.admin')

@section('panel')

    <div style="padding:2rem;">

        <form method="POST" action="/admin/slides/{{$slide->id}}" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <div class="form__control">
                <label for="">Title</label>
                <input type="text" name="title" value="{{ old('title', $slide->title) }}">
                @if ($errors->has('title'))
                    <p>{{ $errors->first('title') }}</p>
                @endif
            </div>

            <div class="form__control">
                <label for="">Image</label>
                <input type="file" name="image">
                @if ($errors->has('image'))
                    <p>{{ $errors->first('image') }}</p>
                @endif
            </div>

            <div class="form__control">
                <label for="">Link</label>
                <input type="text" name="link" value="{{ old('link', $slide->link) }}">
                @if ($errors->has('link'))
                    <p>{{ $errors->first('link') }}</p>
                @endif
            </div>

            <div class="form__control">
                <button>Update</button>
            </div>
        </form>

    </div>

@endsection
