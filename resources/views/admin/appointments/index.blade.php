@extends('layouts.admin')

@section('panel')

    <section class="section">

        <div class="list">
            <div class="list__item list__item--header">
                <div>#</div>
                <div>Date</div>
                <div>By</div>
                <div>Category</div>
                <div>Actions</div>
            </div>

            @foreach ($appointments as $appointment)
                <div class="list__item">
                    <div><b>{{ $loop->iteration }}</b></div>

                    <div>{{ $appointment->date->diffForHumans() }}</div>

                    <div>{{ str_limit($appointment->name, 30) }}</div>

                    <div>{{ $appointment->category }}</div>

                    <div class="list__item__actions">
                        <a href="{{ url('appointments/' . $appointment->id) }}">
                            <span class="icon icon-eye"></span>
                        </a>

                        <form method="POST" action="{{ url('appointments/' . $appointment->id) }}">
                            @csrf
                            @method('DELETE')
                            <a href="#" onclick="this.parentElement.submit();"><span class="icon icon-bin"></span></a>
                        </form>
                    </div>
                </div>
            @endforeach
        </div>

    </section>

@endsection
