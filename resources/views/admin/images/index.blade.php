@extends('layouts.admin')

@section('panel')

    <div style="padding:2rem;">
        <a href="/admin/images/create" style="padding:0.5rem 1rem; background:#eaeaea;">Create Image</a>
    </div>

    <div style="padding:2rem; display:grid; grid-template-columns:auto auto auto; grid-template-rows:auto;gap:2rem;">

        @foreach ($images as $image)
            <div style="display:flex; flex-direction: column;">
                <div style="display:flex; justify-content: space-between;">
                    <span>{{str_limit($image->title, 10, '...')}}</span>
                    <a href="/admin/images/{{$image->id}}/edit"><span class="icon icon-plus"></span></a>
                    <form method="POST" action="/admin/images/{{ $image->id }}">
                        @csrf
                        @method('DELETE')
                        <a href="#" onclick="this.parentElement.submit();"><span class="icon icon-minus"></span></a>
                    </form>
                </div>
                <img src="{{$image->url}}" alt="{{$image->title}}">
            </div>
        @endforeach

    </div>

@endsection
