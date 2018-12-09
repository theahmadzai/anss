@extends('layouts.admin')

@section('panel')

    <section class="section">

        <p><b>Timing: </b>{{$appointment->date->toDayDateTimeString()}}</p>
        <p><b>Name: </b>{{$appointment->name}}</p>
        <p><b>Email: </b>{{$appointment->email}}</p>
        <p><b>Category: </b>{{$appointment->category}}</p>
        <p><b>Email: </b>{{$appointment->email}}</p>
        <p><b>Status: </b>{{$appointment->status}}</p>
        <p><b>Message: </b>{{$appointment->message}}</p>

    </section>

@endsection
