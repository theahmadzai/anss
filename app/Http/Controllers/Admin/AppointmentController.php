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

    public function create()
    {
        return view('admin.appointments.create');
    }

    public function store(StoreAppointmentRequest $request)
    {
        Appointment::create($request->validated());

        return back()->with('status', 'Appointment Scheduled Successfully!');
    }

    public function show(Appointment $appointment)
    {
        return view('admin.appointments.show', [
            'appointment' => $appointment,
        ]);
    }

    public function edit(Appointment $appointment)
    {
        return view('admin.appointments.edit', [
            'appointment' => $appointment,
        ]);
    }

    public function update(StoreAppointmentRequest $request, Appointment $appointment)
    {
        Appointment::find($appointment->id)->update($request->validated());

        return back()->with('status', 'Appointment Updated Successfully!');
    }

    public function destroy(Appointment $appointment)
    {
        $appointment->delete();

        return back()->with('status', 'Appointment Deleted Successfully!');
    }
}
