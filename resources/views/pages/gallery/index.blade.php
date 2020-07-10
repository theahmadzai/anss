@extends('layouts.master')

@section('title', 'Gallery')

@section('content')

    @component('components.head')
        Gallery
    @endcomponent

    <section class="section">
        <div class="gallery">
            <div class="gallery__controls">
                <form class="filter" id="gallery-controls">
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

                {{ $images->appends(request()->query())->links() }}
            </div>

            <div class="gallery__images" id="lightbox">
                @if ($images->count())
                    @foreach ($images as $image)
                        <div class="gallery__image">
                            <a href="{{ $image->imagePath }}" data-caption="{{ $image->title }}">
                                <img src="{{ $image->thumbnailPath }}" alt="{{ $image->title }}">
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
