@extends('layouts.admin')

@section('panel')

    <div style="padding:2rem;">

        <form method="POST" action="/admin/appointments/{{$appointment->id}}">
            @csrf
            @method('PUT')

            <div class="form__control">
                <label for="">Timing</label>
                <input type="datetime-local" name="date" value="{{ old('date', $appointment->date->format('Y-m-d\TH:i')) }}">
                @if ($errors->has('date'))
                    <p>{{ $errors->first('date') }}</p>
                @endif
            </div>

             <div class="form__control">
                <label for="">Description</label>
                <textarea name="description">{{ old('description', $appointment->description) }}</textarea>
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
