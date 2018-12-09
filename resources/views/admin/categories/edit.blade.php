@extends('layouts.admin')

@section('panel')

    <section class="section">

        <form class="form" method="POST" action="{{ url('admin/categories/' . $category->id) }}">
            @csrf
            @method('PUT')

            <div class="form__item">
                <label class="label">Name</label>
                <input class="input" type="text" name="name" value="{{ old('name', $category->name) }}">
                @if ($errors->has('name'))
                    <p>{{ $errors->first('name') }}</p>
                @endif
            </div>

            <div class="form__item">
                <button class="button">Update</button>
            </div>
        </form>

    </section>

@endsection
