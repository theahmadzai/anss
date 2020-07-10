<?php

namespace App\Http\Controllers;

use App\News;

class NewsController extends Controller
{
    public function index()
    {
        return view('pages.news.index', [
            'articles' => News::paginate(5),
        ]);
    }

    public function show(News $news)
    {
        return view('pages.news.show', [
            'article' => $news,
        ]);
    }
}
