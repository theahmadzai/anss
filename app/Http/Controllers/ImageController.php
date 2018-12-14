<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Requests\StoreImageRequest;
use App\Image;

class ImageController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }

    public function index()
    {
        return view('admin.images.index', [
            'images' => Image::all(),
        ]);
    }

    public function create()
    {
        return view('admin.images.create', [
            'categories' => Category::all(),
        ]);
    }

    public function store(StoreImageRequest $request)
    {
        Image::create($request->validated());

        return back()->with('status', 'Image Added Successfully!');
    }

    public function show(Image $image)
    {
        return view('admin.images.show', [
            'image' => $image,
        ]);
    }

    public function edit(Image $image)
    {
        return view('admin.images.edit', [
            'image' => $image,
            'categories' => Category::all(),
        ]);
    }

    public function update(StoreImageRequest $request, Image $image)
    {
        Image::find($image->id)->update($request->validated());

        return back()->with('status', 'Image Updated Successfully!');
    }

    public function destroy(Image $image)
    {
        $image->delete();

        return back()->with('status', 'Image Deleted Successfully!');
    }
}
