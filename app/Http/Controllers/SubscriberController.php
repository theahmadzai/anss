<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSubscriberRequest;
use App\Subscriber;

class SubscriberController extends Controller
{
    public function index()
    {
        return view('pages.subscribe.index');
    }

    public function submit(StoreSubscriberRequest $request)
    {
        Subscriber::create($request->validated());

        return view('pages.redirects.success')->with('status', 'Thank you for Subscribing Us!');
    }
}
