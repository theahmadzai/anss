<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Appointment;
use Storage;
use Validator;
use Exception;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.appointments.index', ['appointments' => Appointment::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.appointments.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'timing' => 'required|date|after:tomorrow',
            'description' => 'required|min:5|max:500'
        ]);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        try {
            $appointment = new Appointment;
            $appointment->timing = $request->timing;
            $appointment->description = $request->description;
            $appointment->save();

        } catch (Exception $e) {
            return $e->getMessage();
        }

        return back()->with('status', 'Appointment Scheduled Successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function show(Appointment $appointment)
    {
        return view('admin.appointments.show', ['appointment' => $appointment]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function edit(Appointment $appointment)
    {
        return view('admin.appointments.edit', ['appointment' => Appointment::find($appointment->id)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Appointment $appointment)
    {
        $validator = Validator::make($request->all(), [
            'timing' => 'required|date',
            'description' => 'required|min:5|max:500'
        ]);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        try {
            $appointment = Appointment::find($appointment->id);
            $appointment->timing = $request->timing;
            $appointment->description = $request->description;
            $appointment->save();

        } catch (Exception $e) {
            return $e->getMessage();
        }

        return redirect('/admin/appointments')->with('status', 'Appointment Updated Successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Appointment $appointment)
    {
        Appointment::destroy($appointment->id);

        return back()->with('status', 'Appointment Deleted Successfully!');
    }
}
