<?php

namespace App\Http\Controllers;

use App\Appointment;
use App\Http\Requests\StoreAppointmentRequest;

class AppointmentController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin')->except(['create', 'store']);
    }

    public function index()
    {
        return view('admin.appointments.index', [
            'appointments' => Appointment::all(),
        ]);
    }

    public function store(StoreAppointmentRequest $appointment)
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
