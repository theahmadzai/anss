<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\News;
use Storage;
use Validator;
use Exception;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.news.index', ['news' => News::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.news.create');
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
            'image' => 'required|file|image',
            'tags' => 'nullable',
            'content' => 'required|min:100'
        ]);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        try {
            $news = new News;
            $news->title = $request->title;
            $news->tags = $request->tags;
            $news->content = $request->content;
            $news->image = $request->image->store('public/news');
            $news->save();

        } catch (Exception $e) {
            return $e->getMessage();
        }

        return back()->with('status', 'News Added Successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\News  $news
     * @return \Illuminate\Http\Response
     */
    public function show(News $news)
    {
        return view('admin.news.show', ['news' => $news]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\News  $news
     * @return \Illuminate\Http\Response
     */
    public function edit(News $news)
    {
        return view('admin.news.edit', ['news' => News::find($news->id)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\News  $news
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, News $news)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|min:5|max:50',
            'image' => 'file|image',
            'tags' => 'nullable',
            'content' => 'required|min:100'
        ]);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

         try {
            $news = News::find($news->id);
            $news->title = $request->title;
            $news->tags = $request->tags;
            $news->content = $request->content;

             if($request->hasFile('image')) {
                if (Storage::exists($news->getOriginal('image'))) {
                    Storage::move($news->getOriginal('image'), 'tmp/news/updated/' . basename($news->image));
                }
                $news->image = $request->image->store('public/news');
            }

            $news->save();

        } catch (Exception $e) {
            return $e->getMessage();
        }

        return redirect('/admin/news')->with('status', 'News Updated Successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\News  $news
     * @return \Illuminate\Http\Response
     */
    public function destroy(News $news)
    {
        if(Storage::exists($news->getOriginal('image'))) {
            Storage::move($news->getOriginal('image'), 'tmp/news/deleted/' . basename($news->image));
        }

        News::destroy($news->id);

        return back()->with('status', 'News Deleted Successfully!');
    }
}
