@component('mail::message')
## {{ $subject }}

{{ $message }}

@component('mail::button', ['url' => 'http://www.anss.ca'])
ANSS Foundation
@endcomponent

{{ config('app.name') }}
@endcomponent
