@extends('layouts.admin')

@section('panel')

    <section class="section">

        <a href="{{ url('admin/slides/create') }}" class="button margin-bottom-2">Create Slide</a>

        <div class="boxes">
            @foreach ($slides as $slide)
                <div class="boxes__item">
                    <div class="boxes__item__controls">
                        <a href="{{ url('admin/slides/' . $slide->id) }}">
                            <span class="icon icon-eye"></span>
                        </a>

                        <a href="{{ url('admin/slides/' . $slide->id . '/edit') }}">
                            <span class="icon icon-pencil"></span>
                        </a>

                        <form method="POST" action="{{ url('admin/slides/' . $slide->id) }}">
                            @csrf
                            @method('DELETE')
                            <a href="#" onclick="this.parentElement.submit();"><span class="icon icon-bin"></span></a>
                        </form>
                    </div>

                    <img src="{{$slide->thumbnail()}}" alt="{{$slide->title}}">
                </div>
            @endforeach
        </div>

    </section>

@endsection
