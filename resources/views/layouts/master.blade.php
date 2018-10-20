<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
   <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>@yield('title') | {{ config('app.name') }}</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Maven+Pro:400,500,700|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body>
        <div class="wrapper">
            @include('partials.header')
            @include('partials.navbar')
            @yield('content')
            @include('partials.footer')
        <div>

        {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> --}}
        <script src="{{ asset('js/libs/jquery.js') }}"></script>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
