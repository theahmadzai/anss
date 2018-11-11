@extends('layouts.admin')

@section('panel')

    <div style="display:grid; padding:2rem;">

        <div>
            <p><b>Timing: </b>{{$appointment->timing->toDayDateTimeString()}}</p>
        </div>

        <div>
            <p><b>Description: </b>{{$appointment->description}}</p>
        </div>

        <div>
            <p><b>Name: </b>{{$appointment->name ?: 'None'}}</p>
        </div>

        <div>
            <p><b>Email: </b>{{$appointment->email ?: 'None'}}</p>
        </div>

        <div>
            <p><b>Phone: </b>{{$appointment->phone ?: 'None'}}</p>
        </div>

        <div>
            <p><b>Message: </b>{{$appointment->message ?: 'None'}}</p>
        </div>

        <div>
            <p><b>Status: </b>{{$appointment->status ? 'Booked' : 'Not Booked'}}</p>
        </div>
    </div>

@endsection
