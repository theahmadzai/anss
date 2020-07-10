@extends('layouts.master')

@section('title', 'Who we are')

@section('content')

    @component('components.head')
        Who we are
    @endcomponent

    <section class="section">
        <div class="double">
            <div class="double__left">
                <p class="t1">ANSS Foundation established by a team of professional Afghans in Toronto, Canada and is a non-political, non-profit and an impartial organization, established in 2017.
                The purpose of ANSS Foundation is to support utilizing full potential of educated and professional individuals, and enable them contribute to the development of communities concerned.</p>
                <p class="t1">It provides support and assistance to newcomers from diverse backgrounds as well as social services to the communities.
                ANSS’s main office is in Toronto City, Ontario, Canada and it aims to expand its outreach to other concerned communities.</p>
            </div>
            <div class="double__right">
                <img src="/img/who_we_are.jpg" alt="Who we are">
            </div>
        </div>
    </section>

@endsection
