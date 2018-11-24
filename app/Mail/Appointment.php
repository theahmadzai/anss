<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Http\Request;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Appointment extends Mailable
{
    use Queueable, SerializesModels;

    private $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function build()
    {
        $mail = $this->from($this->request->email, $this->request->name)
            ->to('info@anss.ca', 'ANSS Foundation')
            ->subject('New Appointment Booked')
            ->view('emails.appointment');

        if ($this->request->hasFile('files')) {
            $files = $this->request->file('files');
            $size = sizeOf($files);

            for ($i = 0; $i < $size; $i++) {
                $file = $files[$i];

                if ($file->isValid()) {
                    $mail->attach($file->getRealPath(), [
                        'as' => $file->getClientOriginalName(),
                        'mime' => $file->getMimeType(),
                    ]);
                }
            }
        }

        return $mail->with([
            'name' => $this->request->name,
            'email' => $this->request->email,
            'phone' => $this->request->phone,
            'text' => $this->request->message,
        ]);
    }
}
