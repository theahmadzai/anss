<?php

namespace App\Mail;

use Illuminate\Http\Request;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Appointment extends Mailable
{
    use Queueable, SerializesModels;

    private $request;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $mail = $this->from($this->request->email, $this->request->name)
            ->to('info@anss.ca', 'ANSS Foundation')
            ->subject('New Appointment Booked')
            ->view('emails.appointment');

        if($this->request->hasFile('files')) {
            $files = $this->request->file('files');
            $size = sizeOf($files);

            for($i=0; $i<$size; $i++) {
                $file = $files[$i];

                if($file->isValid()){
                    $mail->attach($file->getRealPath(), [
                        'as' => $file->getClientOriginalName(),
                        'mime' => $file->getMimeType()
                    ]);
                }
            }
        }

        return $mail->with([
            'name' => $this->request->name,
            'email' => $this->request->email,
            'phone' => $this->request->phone,
            'text' => $this->request->message
        ]);
    }
}
