<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreNewsRequest;
use App\News;

class NewsController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin')->except(['show']);
    }

    public function index()
    {
        return view('admin.news.index', [
            'news' => News::latest()->get(),
            'deleted_news' => News::onlyTrashed()->get(),
        ]);
    }

    public function create()
    {
        return view('admin.news.create');
    }

    public function store(StoreNewsRequest $request)
    {
        News::create($request->validated());

        return back()->with('status', 'News Added Successfully!');
    }

    public function show(News $news)
    {
        return view('pages.news.show', [
            'article' => $news,
        ]);
    }

    public function edit(News $news)
    {
        return view('admin.news.edit', [
            'news' => $news,
        ]);
    }

    public function update(StoreNewsRequest $request, News $news)
    {
        News::find($news->id)->update($request->validated());

        return back()->with('status', 'News Updated Successfully!');
    }

    public function destroy(News $news)
    {
        $news->delete();

        return back()->with('status', 'News Deleted Successfully!');
    }
}
