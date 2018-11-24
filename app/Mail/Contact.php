<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Http\Request;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Contact extends Mailable
{
    use Queueable, SerializesModels;

    private $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function build()
    {
        return $this->from($this->request->email, $this->request->name)
            ->to('info@anss.ca', 'ANSS Foundation')
            ->subject($this->request->subject)
            ->markdown('emails.contact')
            ->with([
                'name' => $this->request->name,
                'email' => $this->request->email,
                'subject' => $this->request->subject,
                'text' => $this->request->message,
            ]);
    }
}
