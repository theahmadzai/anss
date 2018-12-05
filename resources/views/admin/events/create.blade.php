@extends('layouts.admin')

@section('panel')

    <div style="padding:2rem;">

        <form method="POST" action="/admin/events" enctype="multipart/form-data">
            @csrf

            <div class="form__control">
                <label>Title</label>
                <input type="text" name="title" value="{{ old('title') }}">
                @if ($errors->has('title'))
                    <p>{{ $errors->first('title') }}</p>
                @endif
            </div>

            <div class="form__control">
                <label>Veunue</label>
                <input type="text" name="venue" value="{{ old('venue') }}">
                @if ($errors->has('venue'))
                    <p>{{ $errors->first('venue') }}</p>
                @endif
            </div>

            <div class="form__control">
                <label>Date</label>
                <input type="datetime-local" name="date" value="{{ old('date') }}">
                @if ($errors->has('date'))
                    <p>{{ $errors->first('date') }}</p>
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
                <label>Tags <sup><i>(separated by comma)</i></sup></label>
                <input type="text" name="tags" value="{{ old('tags') }}">
                @if ($errors->has('tags'))
                    <p>{{ $errors->first('tags') }}</p>
                @endif
            </div>

            <div class="form__control">
                <label>Content</label>
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
