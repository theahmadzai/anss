<?php

namespace App\Http\Controllers;

use App\Event;
use App\News;
use App\Slide;

class HomeController extends Controller
{
    public function index()
    {
        $slides = Slide::get();
        $latest_news = News::latest()->limit(3)->get();
        $upcoming_events = Event::upcoming()->latest()->limit(3)->get();

        return view('pages.index', [
            'slides' => $slides,
            'latest_news' => $latest_news,
            'upcoming_events' => $upcoming_events,
        ]);
    }
}
