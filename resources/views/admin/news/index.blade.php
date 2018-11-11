@extends('layouts.admin')

@section('panel')

    <div style="padding:2rem;">
        <a href="/admin/news/create" style="padding:0.5rem 1rem; background:#eaeaea;">Create News</a>
    </div>

    <div style="padding:2rem;">

         @foreach ($news as $new)
                <div style="display:grid; grid-template-columns:15% 65% auto auto auto; gap:2rem; border-bottom:1px solid white; padding:0.5rem; color:#444;">
                    <div>
                        {{ $new->created_at->diffForHumans() }}
                    </div>
                    <div>
                        {{ str_limit($new->title, 50, '...') }}
                    </div>
                    <a href="/admin/news/{{$new->id}}"><span class="icon icon-eye"></span></a>
                    <a href="/admin/news/{{$new->id}}/edit"><span class="icon icon-pencil"></span></a>
                    <form method="POST" action="/admin/news/{{ $new->id }}">
                        @csrf
                        @method('DELETE')
                        <a href="#" onclick="this.parentElement.submit();"><span class="icon icon-bin"></span></a>
                    </form>
                </div>
            @endforeach

    </div>

@endsection
