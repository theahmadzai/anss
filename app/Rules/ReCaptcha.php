<?php

namespace App\Rules;

use GuzzleHttp\Client;
use Illuminate\Contracts\Validation\Rule;

class ReCaptcha implements Rule
{
    public function __construct()
    {
        //
    }

    public function passes($attribute, $value)
    {
        $client = new Client();

        $response = $client->post('https://www.google.com/recaptcha/api/siteverify', [
            'form_params' => [
                'secret' => env('NOCAPTCHA_SECRET'),
                'response' => $value,
            ],
        ]);

        return (boolean) json_decode($response->getBody())->success;
    }

    public function message()
    {
        return trans('validation.recaptcha');
    }
}
