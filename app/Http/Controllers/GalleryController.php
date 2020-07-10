<?php

namespace App\Http\Controllers;

use App\Image;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    public function index(Request $request)
    {
        $query = new Image();

        $order = $request->old('order');
        $search = $request->old('search');
        $range = $request->old('range');

        if (!empty($request->order)) {
            $order = $request->order;
            $query = $query->orderBy('id', $order);
        }

        if (!empty($request->search)) {
            $search = $request->search;
            $query = $query->where('title', 'like', '%'.$search.'%');
        }

        if (!empty($request->range)) {
            $range = $request->range;
            $query = $query->paginate($range);
        } else {
            $query = $query->paginate(12);
        }

        return view('pages.gallery.index', [
            'images' => $query,
        ]);
    }
}
