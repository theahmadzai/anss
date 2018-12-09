<?php

namespace App\Http\Controllers\Admin;

use App\Appointment;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAppointmentRequest;

class AppointmentController extends Controller
{
    public function index()
    {
        return view('admin.appointments.index', [
            'appointments' => Appointment::all(),
        ]);
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
