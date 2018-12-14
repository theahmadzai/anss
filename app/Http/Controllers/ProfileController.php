<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateProfileRequest;
use App\User;
use Auth;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except(['show']);
    }

    public function index()
    {
        return view('user.profile.index');
    }

    public function show(User $profile)
    {
        return view('user.profile.show', [
            'profile' => $profile,
        ]);
    }

    public function edit(User $profile)
    {
        return view('user.profile.edit', [
            'event' => $profile,
        ]);
    }

    public function update(UpdateProfileRequest $request, User $profile)
    {
        User::find(Auth::user()->id)->update($request->validated());

        return back()->with('status', 'Profile Updated Successfully!');
    }
}
