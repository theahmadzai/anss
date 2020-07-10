@component('mail::message')
Name: {{ $name }}

Email: {{ $email }}

Phone: {{ $phone }}

Date: {{ $date }}

Category: {{ $category }}

{{ $message }}

@component('mail::button', ['url' => 'http://www.anss.ca'])
ANSS Foundation
@endcomponent

{{ config('app.name') }}
@endcomponent
