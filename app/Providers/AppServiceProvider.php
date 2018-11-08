<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Resources\Json\Resource;
use GuzzleHttp\Client;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
        Resource::withoutWrapping();
        Validator::extend('recaptcha', function($attribute, $value, $params, $validator) {
            $client = new Client();

            $response = $client->post('https://www.google.com/recaptcha/api/siteverify', [
                'form_params' => [
                    'secret' => env('NOCAPTCHA_SECRET'),
                    'response' => $value
                ]
            ]);

            return json_decode((string)$response->getBody())->success;
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
