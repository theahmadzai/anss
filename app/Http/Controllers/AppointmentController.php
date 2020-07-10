<?php

namespace App\Http\Controllers;

use App\Appointment;
use App\AppointmentCategory;
use App\Http\Requests\StoreAppointmentRequest;
use App\Mail\AppointmentMail;
use Mail;

class AppointmentController extends Controller
{
    public function index()
    {
        return view('pages.appointments.index', [
            'appointment_categories' => AppointmentCategory::all(),
        ]);
    }

    public function submit(StoreAppointmentRequest $request)
    {
        $path = $request->hasFile('attachment')
            ? $path = $request->attachment->store('attachments', 'public')
            : null;

        $appointment = Appointment::create(array_merge($request->validated(), [
            'attachment' => $path,
        ]));

        Mail::send(new AppointmentMail($appointment));

        return view('pages.redirects.success')->with('status', 'Appointment Booked Successfully!');
    }
}
