@extends('layouts.master')

@section('title', $title)

@section('content')

    @component('components.head')
        {{ $title }}
    @endcomponent

    <div class="container">

        <div class="container__wide">
            <div class="segment">
                <h2 class="segment__header">Immigration & Settlement Services</h2>
                <div class="segment__body">
                    <ul>
                        <li>
                            <p>Immigration and citizenship applications</p>
                        </li>
                        <li>
                            <p>Housing applications</p>
                        </li>
                        <li>
                            <p>Sponsorship applications</p>
                        </li>
                        <li>
                            <p>Employment (Find work, volunteering, work permit, Resume and cover letters, etc)</p>
                        </li>
                        <li>
                            <p>Referrals to family doctors, psychiatrists, lawyers, and legal aid, schools, LINC, and ESL/FSL; and shelters</p>
                        </li>
                        <li>
                            <p>Translation and interpretation services in English, Pashto, Farsi/Dari, Urdu and Arabic</p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>

@endsection
