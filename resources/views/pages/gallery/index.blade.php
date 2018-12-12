@extends('layouts.master')

@section('title', $title)

@section('content')

    @component('components.head')
        {{ $title }}
    @endcomponent

    <section class="section">
        <div class="gallery">
            <div class="gallery__controls">
                @if($categories->count())
                    <form class="filter" id="gallery-controls">
                        <div class="filter__item">
                            <i class="icon icon-filter"></i>
                            <select name="category" onchange="this.form.submit();">
                                <option value="0" selected>All</option>
                                @foreach ($categories as $category)
                                    <option value="{{ $category->id }}" {{request()->category == $category->id ? 'selected' : ''}}>{{ $category->name }}</option>
                                @endforeach
                            </select>
                        </div>

                        <div class="filter__item">
                            <i class="icon icon-sort-amount-asc"></i>
                            <select name="order" onchange="this.form.submit();">
                                <option value="asc" {{request()->order == 'asc' ? 'selected' : ''}}>Latest</option>
                                <option value="desc" {{request()->order == 'desc' ? 'selected' : ''}}>Oldest</option>
                            </select>
                        </div>

                        <div class="filter__item">
                            <i class="icon icon-search"></i>
                            <input type="search" name="search" value="{{ old('search', request()->search) }}">
                        </div>

                        <div class="filter__item">
                            <i class="icon icon-equalizer"></i>
                            <input type="range" name="range" min="4" max="20" step="4" value="{{old('range', request()->range)}}" onchange="this.form.submit();">
                        </div>
                    </form>
                @endif

                {{ $images->appends(request()->query())->links() }}
            </div>

            <div class="gallery__images" id="lightbox">
                @if ($images->count())
                    @foreach ($images as $image)
                        <div class="gallery__image">
                            <a href="{{ $image->image }}" data-caption="{{ $image->title }}">
                                <img src="{{ $image->thumbnail() }}" alt="{{ $image->title }}">
                                <p>{{ $image->title }}</p>
                            </a>
                        </div>
                    @endforeach
                @else
                    <div class="gallery__empty">No images added currently!</div>
                @endif
            </div>
        </div>
    </section>

@endsection

@include('components.slick')
