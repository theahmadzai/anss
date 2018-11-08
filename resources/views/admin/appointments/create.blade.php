@extends('layouts.admin')

@section('panel')

    <div style="padding:2rem;">

        <form method="POST" action="/admin/appointments">
            @csrf

            <div class="form__control">
                <label for="">Timing</label>
                <input type="datetime-local" name="timing" value="{{ old('timing') }}">
                @if ($errors->has('timing'))
                    <p>{{ $errors->first('timing') }}</p>
                @endif
            </div>

             <div class="form__control">
                <label for="">Description</label>
                <textarea name="description">{{ old('description') }}</textarea>
                @if ($errors->has('description'))
                    <p>{{ $errors->first('description') }}</p>
                @endif
            </div>

            <div class="form__control">
                <button>Schedule</button>
            </div>
        </form>
    </div>

@endsection
