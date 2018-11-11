@extends('layouts.admin')

@section('panel')

    <div style="padding:2rem;">

        <form method="POST" action="/admin/categories">
            @csrf

            <div class="form__control">
                <label for="">Name</label>
                <input type="text" name="name" value="{{ old('name') }}">
                @if ($errors->has('name'))
                    <p>{{ $errors->first('name') }}</p>
                @endif
            </div>

            <div class="form__control">
                <label for="">Slug</label>
                <input type="text" name="slug" value="{{ old('slug') }}">
                @if ($errors->has('slug'))
                    <p>{{ $errors->first('slug') }}</p>
                @endif
            </div>

            <div class="form__control">
                <button>Create</button>
            </div>
        </form>
    </div>

@endsection