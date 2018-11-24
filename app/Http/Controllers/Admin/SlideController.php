<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSlideRequest;
use App\Slide;

class SlideController extends Controller
{
    public function index()
    {
        return view('admin.slides.index', [
            'slides' => Slide::all(),
        ]);
    }

    public function create()
    {
        return view('admin.slides.create');
    }

    public function store(StoreSlideRequest $request)
    {
        Slide::create($request->validated());

        return back()->with('status', 'Slide Added Successfully!');
    }

    public function show(Slide $slide)
    {
        return view('admin.slides.show', [
            'slide' => $slide,
        ]);
    }

    public function edit(Slide $slide)
    {
        return view('admin.slides.edit', [
            'slide' => $slide,
        ]);
    }

    public function update(StoreSlideRequest $request, Slide $slide)
    {
        Slide::find($slide->id)->update($request->validated());

        return back()->with('status', 'Slide Updated Successfully!');
    }

    public function destroy(Slide $slide)
    {
        $slide->delete();

        return back()->with('status', 'Slide Deleted Successfully!');
    }
}
