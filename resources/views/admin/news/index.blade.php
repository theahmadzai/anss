@extends('layouts.admin')

@section('panel')

    <section class="section">

        <a href="{{ url('admin/news/create') }}" class="button margin-bottom-2">Create News</a>

        <div class="list">
            <div class="list__item list__item--header">
                <div>#</div>
                <div>Date</div>
                <div>Title</div>
                <div>Actions</div>
            </div>

            @foreach ($news as $new)
                <div class="list__item">
                    <div><b>{{ $loop->iteration }}</b></div>

                    <div>{{ $new->date->diffForHumans() }}</div>

                    <div>{{ str_limit($new->title, 30) }}</div>

                    <div class="list__item__actions">
                        <a href="{{ url('admin/news/' . $new->id) }}">
                            <span class="icon icon-eye"></span>
                        </a>

                        <a href="{{ url('admin/news/' . $new->id . '/edit') }}">
                            <span class="icon icon-pencil"></span>
                        </a>

                        <form method="POST" action="{{ url('admin/news/' . $new->id) }}">
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
