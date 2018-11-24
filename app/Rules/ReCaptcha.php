<?php

namespace App\Rules;

use GuzzleHttp\Client as Guzzle;
use Illuminate\Contracts\Validation\Rule;

class ReCaptcha implements Rule
{
    private $client;

    public function __construct(Guzzle $client)
    {
        $this->client = $client;
    }

    public function passes($attribute, $value)
    {
        $response = $this->verifyReCaptcha($value);

        return $response->success;
    }

    public function message()
    {
        return trans('validation.recaptcha');
    }

    private function verifyReCaptcha($response)
    {
        $request = $this->client->post('https://www.google.com/recaptcha/api/siteverify', [
            'form_params' => [
                'secret' => env('NOCAPTCHA_SECRET'),
                'response' => $response,
            ],
        ]);

        return json_decode($request->getBody());
    }
}
