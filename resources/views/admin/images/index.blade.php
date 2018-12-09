@extends('layouts.admin')

@section('panel')

    <section class="section">

        <a href="{{ url('admin/images/create') }}" class="button margin-bottom-2">Create Image</a>

        <div class="boxes">
            @foreach ($images as $image)
                <div class="boxes__item">
                    <div class="boxes__item__controls">
                        <a href="{{ url('admin/images/' . $image->id) }}">
                            <span class="icon icon-eye"></span>
                        </a>

                        <a href="{{ url('admin/images/' . $image->id . '/edit') }}">
                            <span class="icon icon-pencil"></span>
                        </a>

                        <form method="POST" action="{{ url('admin/images/' . $image->id) }}">
                            @csrf
                            @method('DELETE')
                            <a href="#" onclick="this.parentElement.submit();"><span class="icon icon-bin"></span></a>
                        </form>
                    </div>

                    <img src="{{$image->thumbnail()}}" alt="{{$image->title}}">
                </div>
            @endforeach
        </div>

    </section>

@endsection
