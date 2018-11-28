@extends('layouts.admin')

@section('panel')

    <div style="padding:2rem;">

        <form method="POST" action="/admin/news/{{$news->id}}" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <div class="form__control">
                <label for="">Title</label>
                <input type="text" name="title" value="{{ old('title', $news->title) }}">
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
                <label for="">Date</label>
                <input type="datetime-local" name="date" value="{{ old('date', $news->date->format('Y-m-d\TH:i')) }}">
                @if ($errors->has('date'))
                    <p>{{ $errors->first('date') }}</p>
                @endif
            </div>

            <div class="form__control">
                <label for="">Tags <sup><i>(separated by comma)</i></sup></label>
                <input type="text" name="tags" value="{{ old('tags', $news->tags) }}">
                @if ($errors->has('tags'))
                    <p>{{ $errors->first('tags') }}</p>
                @endif
            </div>

            <div class="form__control">
                <label for="">Content</label>
                <textarea name="content">{{old('content', $news->content)}}</textarea>
                @if ($errors->has('content'))
                    <p>{{ $errors->first('content') }}</p>
                @endif
            </div>

            <div class="form__control">
                <button>Update</button>
            </div>
        </form>

    </div>

@endsection
