@extends('layouts.admin')

@section('panel')

    <div style="padding:2rem;">

        <form method="POST" action="/admin/images" enctype="multipart/form-data">
            @csrf

            <div class="form__control">
                <label for="">Title</label>
                <input type="text" name="title" value="{{ old('title') }}">
                @if ($errors->has('title'))
                    <p>{{ $errors->first('title') }}</p>
                @endif
            </div>

            <div class="form__control">
                <label for="">Category</label>
                <select name="category">
                    <option value="a" {{ old('category') == 'a' ? 'selected' : ''}}>a</option>
                    <option value="b" {{ old('category') == 'b' ? 'selected' : ''}}>b</option>
                    <option value="c" {{ old('category') == 'c' ? 'selected' : ''}}>c</option>
                </select>
                @if ($errors->has('category'))
                    <p>{{ $errors->first('category') }}</p>
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
                <label for="">Description</label>
                <textarea name="description"></textarea>
                @if ($errors->has('description'))
                    <p>{{ $errors->first('description') }}</p>
                @endif
            </div>

            <div class="form__control">
                <button>Upload</button>
            </div>
        </form>

    </div>

@endsection
