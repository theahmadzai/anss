@extends('layouts.admin')

@section('panel')

    <div style="padding:2rem;">
        <a href="/admin/categories/create" style="padding:0.5rem 1rem; background:#eaeaea;">Create Category</a>
    </div>

    <div style="padding:2rem;">

        <div style="background:#eee;">

            @foreach ($categories as $category)
                <div style="display:grid; grid-template-columns:10% 10% auto 10% 2% 2% 2%; gap:2rem; border-bottom:1px solid white; padding:0.5rem; color:#444;">
                    <div>
                        {{ $category->created_at->diffForHumans() }}
                    </div>
                    <div>
                        {{ $category->name }}
                    </div>
                    <div>
                        {{ $category->slug }}
                    </div>
                    <div>
                        {{ $category->updated_at->diffForHumans() }}
                    </div>
                    <a href="/admin/categories/{{$category->id}}"><span class="icon icon-eye"></span></a>
                    <a href="/admin/categories/{{$category->id}}/edit"><span class="icon icon-pencil"></span></a>
                    <form method="POST" action="/admin/categories/{{ $category->id }}">
                        @csrf
                        @method('DELETE')
                        <a href="#" onclick="this.parentElement.submit();"><span class="icon icon-bin"></span></a>
                    </form>
                </div>
            @endforeach

        </div>

    </div>

@endsection
