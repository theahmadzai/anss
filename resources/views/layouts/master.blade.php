<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
   <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>ANSS | @yield('title')</title>

        <link rel="icon" href="/img/FaviconLogo.png">

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Maven+Pro:400,500,700|Open+Sans:300,400,400i,600,700,800">
        @stack('styles')
        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body>
        <div class="wrapper">
            <div class="top-line"></div>

            @include('components.header')

            @include('components.navbar')

            @yield('content')

            @include('components.footer')
        <div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        @stack('scripts')
        <script>
            $('#toggle').click(function (e) {
                $('#toggle').toggleClass('toggle--change')
                $('#navbar').slideToggle()
            })
        </script>
    </body>
</html>
