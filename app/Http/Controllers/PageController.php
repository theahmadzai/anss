<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\News;

class PageController extends Controller
{
    /**
     * Home
     */
    public function index()
    {
        return view('pages/index');
    }

    /**
     * About
     */
    public function about()
    {
        return view('pages/about/index');
    }

    public function whoWeAre()
    {
        return view('pages/about/who-we-are');
    }

    public function strategicPlans()
    {
        return view('pages/about/strategic-plans');
    }

    public function boardOfDirectors()
    {
        return view('pages/about/board-of-directors');
    }

    /**
     * Services
     */
    public function services()
    {
        return view('pages/services/index');
    }

    public function immigrationAndSettlement()
    {
        return view('pages/services/immigration-and-settlement');
    }

    public function culturalEnvironmentalAndEducational()
    {
        return view('pages/services/cultural-environmental-and-educational');
    }

    public function networkingAndCommunityBasedResearch()
    {
        return view('pages/services/networking-and-community-based-research');
    }

    /**
     * Events
     */
    public function events()
    {
        return view('pages/events/index');
    }

    public function upcomingEvents()
    {
        return view('pages/events/upcoming-events');
    }

    public function pastEvents()
    {
        return view('pages/events/past-events');
    }

    /**
     * Latest News
     */
    public function latestNews($id = null)
    {
        if($id === null) {
            return view('pages/news/index', ['articles' => News::all()]);
        }

        return view('pages/news/news-page', ['article' => News::find($id)]);
    }

    /**
     * Appointments
     */
    public function appointments()
    {
        return view('pages/appointments/index');
    }

    /**
     * Donate
     */
    public function donate()
    {
        return view('pages/donate/index');
    }

    /**
     * Contact
     */
    public function contact()
    {
        return view('pages/contact/index');
    }
}
