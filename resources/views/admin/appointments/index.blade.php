@extends('layouts.admin')

@section('panel')

    <div style="padding:2rem;">
        <a href="/admin/appointments/create" style="padding:0.5rem 1rem; background:#eaeaea;">Create Appointment</a>
    </div>

    <div style="padding:2rem;">

        <div style="background:#eee;">

            @foreach ($appointments as $appointment)
                <div style="display:grid; grid-template-columns:15% 50% 10% auto auto auto; gap:2rem; border-bottom:1px solid white; padding:0.5rem; color:#444;">
                    <div>
                        {{ $appointment->date->diffForHumans() }}
                    </div>
                    <div>
                        {{ str_limit($appointment->description, 50, '...') }}
                    </div>
                    <div>
                        <b>{{$appointment->status == 0 ? 'Not Booked' : 'Booked'}}</b>
                    </div>
                    <a href="/admin/appointments/{{$appointment->id}}"><span class="icon icon-eye"></span></a>
                    <a href="/admin/appointments/{{$appointment->id}}/edit"><span class="icon icon-pencil"></span></a>
                    <form method="POST" action="/admin/appointments/{{ $appointment->id }}">
                        @csrf
                        @method('DELETE')
                        <a href="#" onclick="this.parentElement.submit();"><span class="icon icon-bin"></span></a>
                    </form>
                </div>
            @endforeach

        </div>

    </div>

@endsection
