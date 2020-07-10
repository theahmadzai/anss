<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AppointmentMail extends Mailable
{
    use Queueable;
    use SerializesModels;

    private $appointment;

    /**
     * Create a new message instance.
     *
     * @param mixed $appointment
     *
     * @return void
     */
    public function __construct($appointment)
    {
        $this->appointment = $appointment;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from($this->appointment->email, $this->appointment->name)
            ->to(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'))
            ->subject('New Appointment Booked')
            ->attachFromStorageDisk('public', $this->appointment->attachment)
            ->markdown('mails.appointment')
            ->with([
                'name' => $this->appointment->name,
                'email' => $this->appointment->email,
                'phone' => $this->appointment->phone,
                'date' => $this->appointment->date->toFormattedDateString(),
                'category' => $this->appointment->appointmentCategory->name,
                'message' => $this->appointment->message,
            ]);
    }
}
