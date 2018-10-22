@extends('layouts.master')

@section('title', 'User account')

@section('content')
    <div class="container">
        <div>Verify Your Email Address</div>

        <div>
            @if (session('resent'))
                <div role="alert">
                   <p>A fresh verification link has been sent to your email address.</p>
                </div>
            @endif

            <p>Before proceeding, please check your email for a verification link.</p>
            <p>If you did not receive the email <a href="/email/resend">click here to request another</a>.</p>
        </div>
    </div>
@endsection
