@component('mail::message')
*** Booked by:*** {{ $name }}

*** Email:*** {{ $email }}

*** Phone:*** {{ $phone }}

*** Category:*** {{ $category }}

*** Date:*** {{ $date }}

{{ $text }}

@component('mail::button', ['url' => 'http://www.anss.ca'])
ANSS Foundation
@endcomponent

{{ config('app.name') }}
@endcomponent
