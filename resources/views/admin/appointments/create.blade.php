@extends('layouts.admin')

@section('panel')

    <div style="padding:2rem;">

        <form method="POST" action="/admin/appointments">
            @csrf

            <div class="form__control">
                <label>Timing</label>
                <input type="datetime-local" name="date" value="{{ old('date') }}">
                @if ($errors->has('date'))
                    <p>{{ $errors->first('date') }}</p>
                @endif
            </div>

             <div class="form__control">
                <label>Description</label>
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
