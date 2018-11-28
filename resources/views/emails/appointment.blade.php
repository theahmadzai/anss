@component('mail::message')
# Booked by: {{ $name }}
# Email: {{ $email }}
# Phone: {{ $phone }}

{{ $text }}

@component('mail::button', ['url' => 'http://www.anss.ca'])
ANSS Foundation
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
