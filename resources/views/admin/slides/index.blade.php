@extends('layouts.admin')

@section('panel')

    <div style="padding:2rem;">
        <a href="/admin/slides/create" style="padding:0.5rem 1rem; background:#eaeaea;">Create Slide</a>
    </div>

    <div style="padding:2rem; display:grid; grid-template-columns:auto auto auto; grid-template-rows:auto;gap:2rem;">

        @foreach ($slides as $slide)
            <div style="display:flex; flex-direction: column;">
                <div style="display:grid; grid-template-columns: auto 5% 5% 5%; gap:1rem;">
                    <span>{{str_limit($slide->title, 10, '...')}}</span>
                    <a href="/admin/slides/{{$slide->id}}"><span class="icon icon-eye"></span></a>
                    <a href="/admin/slides/{{$slide->id}}/edit"><span class="icon icon-pencil"></span></a>
                    <form method="POST" action="/admin/slides/{{ $slide->id }}">
                        @csrf
                        @method('DELETE')
                        <a href="#" onclick="this.parentElement.submit();"><span class="icon icon-bin"></span></a>
                    </form>
                </div>
                <img src="{{$slide->thumbnail()}}" alt="{{$slide->title}}">
            </div>
        @endforeach

    </div>

@endsection
