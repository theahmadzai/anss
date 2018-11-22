@extends('layouts.admin')

@section('panel')

    <div style="padding:2rem;">

        <form method="POST" action="/admin/categories/{{$category->id}}">
            @csrf
            @method('PUT')

            <div class="form__control">
                <label for="">Name</label>
                <input type="text" name="name" value="{{ old('name', $category->name) }}">
                @if ($errors->has('name'))
                    <p>{{ $errors->first('name') }}</p>
                @endif
            </div>

            <div class="form__control">
                <button>Update</button>
            </div>
        </form>

    </div>

@endsection
