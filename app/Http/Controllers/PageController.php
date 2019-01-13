<?php

namespace App\Http\Controllers;

use App\Appointment;
use App\Category;
use App\Event;
use App\Image;
use App\Mail\ContactMail;
use App\News;
use App\Rules\ReCaptcha;
use App\Slide;
use App\Subscriber;
use File;
use Illuminate\Http\Request;
use Mail;

class PageController extends Controller
{
    /**
     * Home
     */
    public function index()
    {
        $slides = Slide::get();
        $latest_news = News::latest()->limit(3)->get();
        $upcoming_events = Event::upcoming()->latest()->limit(3)->get();

        return view('pages.index', [
            'slides' => $slides,
            'latest_news' => $latest_news,
            'upcoming_events' => $upcoming_events,
        ])
            ->withTitle('Home');
    }

    /**
     * About
     */
    public function whoWeAre()
    {
        return view('pages.about.who-we-are')
            ->withTitle('Who we are');
    }

    public function strategicPlans()
    {
        return view('pages.about.strategic-plans')
            ->withTitle('Strategic Plans');
    }

    public function boardOfDirectors()
    {
        $directors = File::get(public_path('storage/json/directors.json'));
        return view('pages.about.board-of-directors', [
            'directors' => json_decode($directors, true),
        ])
            ->withTitle('Board of Directors');
    }

    /**
     * Services
     */
    public function immigrationAndSettlement()
    {
        return view('pages.services.immigration-and-settlement')
            ->withTitle('Immigration and Settlement');
    }

    public function culturalEnvironmentalAndEducational()
    {
        return view('pages.services.cultural-environmental-and-educational')
            ->withTitle('Cultural Environmental & Educational');
    }

    public function networkingAndCommunityBasedResearch()
    {
        return view('pages.services.networking-and-community-based-research')
            ->withTitle('Networking & Community Based Research');
    }

    /**
     * Events
     */
    public function upcomingEvents()
    {
        return view('pages.events.list', [
            'articles' => Event::upcoming()->paginate(5),
        ])
            ->withTitle('Upcoming Events');
    }

    public function pastEvents()
    {
        return view('pages.events.list', [
            'articles' => Event::past()->paginate(5),
        ])
            ->withTitle('Past Events');
    }

    /**
     * Latest News
     */
    public function latestNews()
    {
        return view('pages.news.list', [
            'articles' => News::paginate(5),
        ])
            ->withTitle('Latest News');
    }

    /**
     * Gallery
     */
    public function gallery(Request $request)
    {
        $query = new Image;

        $category = $request->old('category');
        $order = $request->old('order');
        $search = $request->old('search');
        $range = $request->old('range');

        if (!empty($request->category)) {
            $category = $request->category;
            $query = $query->where('category_id', $category);
        }

        if (!empty($request->order)) {
            $order = $request->order;
            $query = $query->orderBy('id', $order);
        }

        if (!empty($request->search)) {
            $search = $request->search;
            $query = $query->where('title', 'like', '%' . $search . '%');
        }

        if (!empty($request->range)) {
            $range = $request->range;
            $query = $query->paginate($range);
        } else {
            $query = $query->paginate(12);
        }

        return view('pages.gallery.index', [
            'categories' => Category::get(),
            'images' => $query,
        ])
            ->withTitle('Gallery');
    }

    /**
     * Appointments
     */
    public function bookAppointments()
    {
        return view('pages.appointments.index')
            ->withTitle('Book an Appointment');
    }

    /**
     * Donate
     */
    public function donate()
    {
        return view('pages.donate.index')
            ->withTitle('Donate');
    }

    /**
     * Contact
     */
    public function contact()
    {
        return view('pages.contact.index')
            ->withTitle('Contact Us');
    }

    public function postContact(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'subject' => 'required',
            'message' => 'required|min:100',
            'g-recaptcha-response' => new ReCaptcha(new \GuzzleHttp\Client()),
        ]);

        Mail::send(new ContactMail($request));

        return view('pages.redirects.success')->with('status', 'Your message has been sent successfully!');
    }

    /**
     * Subscribe
     */
    public function subscribe()
    {
        return view('pages.subscribe.index')
            ->withTitle('Subscribe to Updates and Newsletter');
    }

    public function postSubscribe(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
        ]);

        Subscriber::create($request->all());

        return view('pages.redirects.success')->with('status', 'Thank you for Subscribing Us!');
    }
}
