@component('mail::message')
# {{ $subject }}

{{ $text }}

@component('mail::button', ['url' => 'http://www.anss.ca'])
ANSS Foundation
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
