<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Mail\ContactMail;
use Mail;

class ContactController extends Controller
{
    public function index()
    {
        return view('pages.contact.index');
    }

    public function submit(StoreContactRequest $request)
    {
        Mail::send(new ContactMail($request->validated()));

        return view('pages.redirects.success')->with('status', 'Your message has been sent successfully!');
    }
}
