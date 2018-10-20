<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\News;

class PageController extends Controller
{
    public function home()
    {
        return view('home');
    }

    public function contact()
    {
        return view('contact');
    }

    public function about()
    {
        return view('about');
    }

    public function newsList()
    {
        return view('news-list', [ 'articles' => News::all() ]);
    }

    public function news($id = null)
    {
        return view('news', ['article' => News::find($id)]);
    }
}
