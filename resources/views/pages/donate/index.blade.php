@extends('layouts.master')

@section('title', 'Donate')

@section('content')

    <div class="bar">
        <h1>Donate</h1>
    </div>

    <div class="container">
        <div class="container__narrow"></div>
        <div class="container__wide">
            <h2 style="padding:2rem;">The account details are as follows:</h2>

            <div style="padding:2rem;">
                <p>Bank name:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Example, EXMPL</strong></p>
                <p>Bank address: &nbsp;&nbsp;<strong>Example address, at example location</strong></p>
                <p>Account name: &nbsp;<strong>Example account name</strong></p>
            </div>

            <div style="padding:2rem; border:1px solid #eee; margin:2rem;">
                <p><strong>ACCOUNT: </strong>XXX-XXXXXXXXX</p>
                <p><strong>SWIFT: </strong>XXXXXXXXXXXXXXXXX</p>
                <p><strong>IBAN: </strong>XXXXXXXXXXXXXXXXX</p>
            </div>

            <div style="color:#aaa; text-align:center;">OR</div>

            <button style="padding: 0.7rem; font-size:1rem; background:white; border:1px solid #ccc; cursor:pointer; margin: 2rem auto; display:block;">Donate online</button>
        </div>
    </div>

@endsection
