<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\News;
use App\Event;
use App\Appointment;
use App\Manager;
use App\Image;
use App\Category;
use App\Subscriber;
use App\Rules\ReCaptcha;
use App\Mail\Contact as ContactMail;
use App\Mail\Appointment as AppointmentMail;
use Validator;
use Mail;

class PageController extends Controller
{
    /**
     * Home
     */
    public function index()
    {
        $slides = Image::getSlides() ?? null;
        $latest_news = News::latest()->limit(9)->get() ?? null;
        $upcoming_events = Event::getUpcomingEvents(3) ?? null;
        $past_events = Event::getPastEvents(3) ?? null;

        return view('pages.index', [
            'slides' => $slides,
            'latest_news' => $latest_news,
            'upcoming_events' => $upcoming_events,
            'past_events' => $past_events,
        ]);
    }

    /**
     * About
     */
    public function about()
    {
        return view('pages.about.index');
    }

    public function strategicPlans()
    {
        return view('pages.about.strategic-plans');
    }

    public function boardOfDirectors()
    {
        return view('pages.about.board-of-directors');
    }

    /**
     * Services
     */
    public function services()
    {
        return view('pages.services.index');
    }

    public function immigrationAndSettlement()
    {
        return view('pages.services.immigration-and-settlement');
    }

    public function culturalEnvironmentalAndEducational()
    {
        return view('pages.services.cultural-environmental-and-educational');
    }

    public function networkingAndCommunityBasedResearch()
    {
        return view('pages.services.networking-and-community-based-research');
    }

    /**
     * Events
     */
    public function upcomingEvents($id = null)
    {
        if($id === null) {
            return view('pages.events.upcoming-events', ['events_' => Event::getUpcomingEvents()]);
        }

        return view('pages.events.upcoming-events-page', ['event_' => Event::find($id)]);
    }

    public function pastEvents($id = null)
    {
        if($id === null) {
            return view('pages.events.past-events', ['events_' => Event::getPastEvents()]);
        }

        return view('pages.events.past-events-page', ['event_' => Event::find($id)]);
    }

    /**
     * Latest News
     */
    public function latestNews($id = null)
    {
        if($id === null) {
            return view('pages.news.latest-news', ['news_' => News::all()]);
        }

        return view('pages.news.latest-news-page', ['news_' => News::find($id)]);
    }

    /**
     * Gallery
     */
    public function gallery($id = null)
    {
        return view('pages.gallery.index', [
            'categories' => Category::where('slug', '!=', 'slider')->get(),
            'images' => !$id
                ? Image::where('category_id','!=', Category::where('slug', 'slider')->first()->id ?? null)->paginate(9)
                : Image::where('category_id', $id)->paginate(9)
        ]);
    }

    /**
     * Appointments
     */
    public function appointments()
    {
        return view('pages.appointments.index', ['appointments' => Appointment::getAppointments() ?? null]);
    }

    public function appointmentsPage($id = null)
    {
        $appointment = Appointment::getAvailableAppointment($id);

        if(!$appointment) abort(404);

        return view('pages.appointments.book', ['appointment' => $appointment]);
    }

    public function appointmentsBook(Request $request, $id)
    {
        $appointment = Appointment::getAvailableAppointment($id);

        if(!$appointment) abort(404);

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'nullable|numeric',
            'message' => 'nullable|max:500',
            'file' => 'nullable|file'
        ]);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        try {
            $appointment = Appointment::find($id);
            $appointment->name = $request->name;
            $appointment->email = $request->email;
            $appointment->phone = $request->phone;
            $appointment->message = $request->message;
            $appointment->status = true;
            $appointment->save();

            Mail::send(new AppointmentMail($request));

        } catch (Exception $e) {
            return $e->getMessage();
        }

        return redirect('/appointments')->with('status', 'Appointment Booked Successfully!');
    }

    /**
     * Donate
     */
    public function donate()
    {
        return view('pages.donate.index');
    }

    /**
     * Contact
     */
    public function contact()
    {
        return view('pages.contact.index');
    }

    public function contactMail(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'subject' => 'required',
            'message' => 'required|min:100',
            'g-recaptcha-response' => new ReCaptcha()
        ]);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        Mail::send(new ContactMail($request));

        return back()->with('status', 'Your email has been sent successfully!');
    }

    /**
     * Subscribe
     */
    public function subscribe()
    {
        return view('pages.subscribe.index');
    }

    public function subscribeStore(Request $request)
    {
         $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email'
        ]);

        if ($validator->fails()) {
            return redirect('/subscribe')->withInput()->withErrors($validator);
        }

        try {
            $subscriber = new Subscriber;
            $subscriber->name = $request->name;
            $subscriber->email = $request->email;
            $subscriber->save();

        } catch (Exception $e) {
            return $e->getMessage();
        }

        return back()->with('status', 'You have Subscribed successfully!');
    }
}
