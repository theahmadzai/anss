<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable;
    use SerializesModels;
    public $subject;

    private $name;
    private $email;
    private $message;

    /**
     * Create a new message instance.
     *
     * @param mixed $contact
     * @param mixed $name
     * @param mixed $email
     * @param mixed $subject
     * @param mixed $message
     *
     * @return void
     */
    public function __construct($contact)
    {
        $this->name = $contact['name'];
        $this->email = $contact['email'];
        $this->subject = $contact['subject'];
        $this->message = $contact['message'];
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from($this->email, $this->name)
            ->to(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'))
            ->subject($this->subject)
            ->markdown('mails.contact')
            ->with([
                'subject' => $this->subject,
                'message' => $this->message,
            ]);
    }
}
