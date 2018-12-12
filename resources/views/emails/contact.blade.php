@component('mail::message')
## {{ $subject }}

{{ $text }}

@component('mail::button', ['url' => 'http://www.anss.ca'])
ANSS Foundation
@endcomponent

{{ config('app.name') }}
@endcomponent
