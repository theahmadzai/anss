@extends('layouts.master')

@section('title', 'Admin')

@section('content')

    @component('components.head')
        Admin Panel
    @endcomponent

    <div class="admin-panel">
        <div class="admin-sidebar">
            <a class="admin-sidebar__link {{ Request::is('*/categories*') ? 'active' : ''}}" href="{{ url('categories') }}">Categories</a>
            <a class="admin-sidebar__link {{ Request::is('*/images*') ? 'active' : ''}}" href="{{ url('images') }}">Images</a>
            <a class="admin-sidebar__link {{ Request::is('*/slides*') ? 'active' : ''}}" href="{{ url('slides') }}">Slides</a>
            <a class="admin-sidebar__link {{ Request::is('*/appointments*') ? 'active' : ''}}" href="{{ url('appointments') }}">Appointments</a>
            <a class="admin-sidebar__link {{ Request::is('*/news*') ? 'active' : ''}}" href="{{ url('news') }}">News</a>
            <a class="admin-sidebar__link {{ Request::is('*/events*') ? 'active' : ''}}" href="{{ url('events') }}">Events</a>
        </div>

        <div class="admin-section">
            @if (session('status'))
                <div class="status-message">{{ session('status') }}</div>
            @endif

            @yield('panel')
        </div>
    </div>

@endsection
