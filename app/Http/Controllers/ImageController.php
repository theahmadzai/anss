<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Image;
use App\Category;
use Storage;
use Validator;
use Exception;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.images.index', [
            'images' => Image::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.images.create', [
            'categories' => Category::all()
        ]);
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
            'title' => 'required|min:5|max:50',
            'category'  => 'required|exists:categories,id',
            'image' => 'required|file|image',
            'description' => 'nullable'
        ]);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        try {
            $image = new Image;
            $image->title = $request->title;
            $image->category_id = $request->category;
            $image->description = $request->description;
            $image->url = $request->image->store('public/images');
            $image->save();

        } catch (Exception $e) {
            return $e->getMessage();
        }

        return back()->with('status', 'Image Added Successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show(Image $image)
    {
        return view('admin.images.show', [
            'image' => $image
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function edit(Image $image)
    {
        return view('admin.images.edit', [
            'image' => Image::find($image->id),
            'categories' => Category::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Image $image)
    {
         $validator = Validator::make($request->all(), [
            'title' => 'required|min:5|max:50',
            'category'  => 'required|exists:categories,id',
            'image' => 'file|image',
            'description' => 'nullable'
        ]);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        try {
            $image = Image::find($image->id);
            $image->title = $request->title;
            $image->category_id= $request->category;
            $image->description = $request->description;

            if($request->hasFile('image')) {
                if (Storage::exists($image->getOriginal('url'))) {
                    Storage::move($image->getOriginal('url'), 'tmp/images/updated/' . $image->category_id . '/' . basename($image->url));
                }
                $image->url = $request->image->store('public/images');
            }

            $image->save();

        } catch(Exception $e) {
            return $e->getMessage();
        }

        return redirect('/admin/images')->with('status', 'Image Updated Successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy(Image $image)
    {
        if(Storage::exists($image->getOriginal('url'))) {
            Storage::move($image->getOriginal('url'), 'tmp/images/deleted' . $image->category_id . '/' . basename($image->url));
        }

        Image::destroy($image->id);

        return back()->with('status', 'Image Deleted Successfully!');
    }
}
