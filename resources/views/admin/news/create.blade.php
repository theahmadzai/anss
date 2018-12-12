@extends('layouts.admin')

@section('panel')

    <section class="section">

        <form class="form" method="POST" action="{{ url('admin/news') }}" enctype="multipart/form-data">
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
                <label class="label">Date</label>
                <input class="input" type="datetime-local" name="date" value="{{ old('date') }}">
                @if ($errors->has('date'))
                    <p>{{ $errors->first('date') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Tags <sup><i>(separated by comma)</i></sup></label>
                <input class="input" type="text" name="tags" value="{{ old('tags') }}">
                @if ($errors->has('tags'))
                    <p>{{ $errors->first('tags') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Content</label>
                <textarea name="content">{{old('content')}}</textarea>
                @if ($errors->has('content'))
                    <p>{{ $errors->first('content') }}</p>
                @endif
            </div>

            <div class="form__item">
                <button class="button">Create</button>
            </div>
        </form>

    </section>

@endsection
