@extends('layouts.admin')

@section('panel')

    <div style="padding:2rem;">

        <form method="POST" action="/admin/events" enctype="multipart/form-data">
            @csrf

            <div class="form__control">
                <label for="">Title</label>
                <input type="text" name="title" value="{{ old('title') }}">
                @if ($errors->has('title'))
                    <p>{{ $errors->first('title') }}</p>
                @endif
            </div>

            <div class="form__control">
                <label for="">Veunue</label>
                <input type="text" name="venue" value="{{ old('venue') }}">
                @if ($errors->has('venue'))
                    <p>{{ $errors->first('venue') }}</p>
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
                <label for="">Tags <sup><i>(separated by comma)</i></sup></label>
                <input type="text" name="tags" value="{{ old('tags') }}">
                @if ($errors->has('tags'))
                    <p>{{ $errors->first('tags') }}</p>
                @endif
            </div>

            <div class="form__control">
                <label for="">Content</label>
                <textarea name="content">{{old('content')}}</textarea>
                @if ($errors->has('content'))
                    <p>{{ $errors->first('content') }}</p>
                @endif
            </div>

            <div class="form__control">
                <button>Create</button>
            </div>
        </form>

    </div>

@endsection
