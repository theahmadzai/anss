@extends('layouts.admin')

@section('panel')

    <div style="padding:2rem;">

        <form method="POST" action="/admin/images/{{$image->id}}" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <div class="form__control">
                <label for="">Title</label>
                <input type="text" name="title" value="{{ old('title', $image->title) }}">
                @if ($errors->has('title'))
                    <p>{{ $errors->first('title') }}</p>
                @endif
            </div>

            <div class="form__control">
                <label for="">Category</label>
                <select name="category_id">
                    @foreach ($categories as $category)
                        <option value="{{$category->id}}" {{ old('category_id', $image->category) == $category->id ? 'selected' : ''}}>{{$category->name}}</option>
                    @endforeach
                </select>
                @if ($errors->has('category_id'))
                    <p>{{ $errors->first('category_id') }}</p>
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
                <textarea name="description">{{ old('description', $image->description) }}</textarea>
                @if ($errors->has('description'))
                    <p>{{ $errors->first('description') }}</p>
                @endif
            </div>

            <div class="form__control">
                <button>Update</button>
            </div>
        </form>

    </div>

@endsection
