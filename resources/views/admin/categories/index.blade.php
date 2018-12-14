@extends('layouts.admin')

@section('panel')

    <section class="section">

        <a href="{{ url('categories/create') }}" class="button margin-bottom-2">Create Category</a>

        <div class="list">
            <div class="list__item list__item--header">
                <div>#</div>
                <div>Name</div>
                <div>Slug</div>
                <div>Actions</div>
            </div>

            @foreach ($categories as $category)
                <div class="list__item">
                    <div><b>{{ $loop->iteration }}</b></div>

                    <div>{{ $category->name }}</div>

                    <div>{{ $category->slug }}</div>

                    <div class="list__item__actions">
                        <a href="{{ url('categories/' . $category->id) }}">
                            <span class="icon icon-eye"></span>
                        </a>

                        <a href="{{ url('categories/' . $category->id . '/edit') }}">
                            <span class="icon icon-pencil"></span>
                        </a>

                        <form method="POST" action="{{ url('categories/' . $category->id) }}">
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
