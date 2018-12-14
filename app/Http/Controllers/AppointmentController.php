<?php

namespace App\Http\Controllers;

use App\Appointment;
use App\Http\Requests\StoreAppointmentRequest;
use App\Mail\AppointmentMail;
use Mail;

class AppointmentController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin')->except(['create', 'store']);
    }

    public function index()
    {
        return view('admin.appointments.index', [
            'appointments' => Appointment::latest()->get(),
            'deleted_appointments' => Appointment::onlyTrashed()->get(),
        ]);
    }

    public function store(StoreAppointmentRequest $request)
    {
        Appointment::create($request->validated());

        Mail::send(new AppointmentMail($request));

        return view('pages.redirects.success')->with('status', 'Appointment Booked Successfully!');
    }

    public function show(Appointment $appointment)
    {
        return view('admin.appointments.show', [
            'appointment' => $appointment,
        ]);
    }

    public function destroy(Appointment $appointment)
    {
        $appointment->delete();

        return back()->with('status', 'Appointment Deleted Successfully!');
    }
}
