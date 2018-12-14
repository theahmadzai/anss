@extends('layouts.admin')

@section('panel')

    <section class="section">

        <form class="form" method="POST" action="{{ url('images/' . $image->id) }}" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <div class="form__item">
                <label class="label">Title</label>
                <input class="input" type="text" name="title" value="{{ old('title', $image->title) }}">
                @if ($errors->has('title'))
                    <p>{{ $errors->first('title') }}</p>
                @endif
            </div>

            <div class="form__item">
                <label class="label">Category</label>
                <select class="input" name="category_id">
                    @foreach ($categories as $category)
                        <option value="{{ $category->id }}" {{ old('category_id', $image->category->id) == $category->id ? 'selected' : '' }}>{{ $category->name }}</option>
                    @endforeach
                </select>
                @if ($errors->has('category_id'))
                    <p>{{ $errors->first('category_id') }}</p>
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
                <label class="label">Description</label>
                <textarea name="description">{{ old('description', $image->description) }}</textarea>
                @if ($errors->has('description'))
                    <p>{{ $errors->first('description') }}</p>
                @endif
            </div>

            <div class="form__item">
                <button class="button">Update</button>
            </div>
        </form>

    </section>

@endsection
