@extends('layouts.admin')

@section('panel')

    <div style="padding:2rem;">
        <a href="/admin/events/create" style="padding:0.5rem 1rem; background:#eaeaea;">Create Event</a>
    </div>

    <div style="padding:2rem;">

         @foreach ($events as $event)
                <div style="display:grid; grid-template-columns:15% 65% auto auto auto; gap:2rem; border-bottom:1px solid white; padding:0.5rem; color:#444;">
                    <div>
                        {{ $event->created_at->diffForHumans() }}
                    </div>
                    <div>
                        {{ str_limit($event->title, 50, '...') }}
                    </div>
                    <a href="/admin/events/{{$event->id}}"><span class="icon icon-eye"></span></a>
                    <a href="/admin/events/{{$event->id}}/edit"><span class="icon icon-pencil"></span></a>
                    <form method="POST" action="/admin/events/{{ $event->id }}">
                        @csrf
                        @method('DELETE')
                        <a href="#" onclick="this.parentElement.submit();"><span class="icon icon-bin"></span></a>
                    </form>
                </div>
            @endforeach

    </div>

@endsection
