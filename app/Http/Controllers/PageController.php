<?php

namespace App\Http\Controllers;

use App\Appointment;
use App\Category;
use App\Event;
use App\Image;
use App\Mail\Appointment as AppointmentMail;
use App\Mail\Contact as ContactMail;
use App\News;
use App\Rules\ReCaptcha;
use App\Slide;
use App\Subscriber;
use Illuminate\Http\Request;
use Mail;
use Validator;

class PageController extends Controller
{
    /**
     * Home
     */
    public function index()
    {
        $slides = Slide::get();
        $latest_news = News::latest()->limit(9)->get();
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
        return view('pages.about.board-of-directors')
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
    public function upcomingEvents($id = null)
    {
        if ($id === null) {
            return  view('pages.events.events', [
                'events' => Event::upcoming()->get()
            ])
            ->withTitle('Upcoming Events');
        }

        return view('pages.events.event', [
            'event' => Event::find($id)
        ]);
    }

    public function pastEvents($id = null)
    {
        if ($id === null) {
            return view('pages.events.events', [
                'events' => Event::past()->get()
            ])
            ->withTitle('Past Events');
        }

        return view('pages.events.event', [
            'event' => Event::find($id)
        ]);
    }

    /**
     * Latest News
     */
    public function latestNews($id = null)
    {
        if ($id === null) {
            return view('pages.news.news', [
                'news' => News::get()
            ])
            ->withTitle('Latest News');
        }

        return view('pages.news.new', [
            'news' => News::find($id)
        ]);
    }

    /**
     * Gallery
     */
    public function gallery($id = null)
    {
        return view('pages.gallery.index', [
            'categories' => Category::get(),
            'images' => !$id ? Image::paginate(9) : Image::where('category_id', $id)->paginate(9),
        ])
        ->withTitle('Gallery');
    }

    /**
     * Appointments
     */
    public function appointments()
    {
        return view('pages.appointments.index', [
            'appointments' => Appointment::unexpired()->get()
        ])
        ->withTitle('Appointments');
    }

    public function appointmentsPage($id = null)
    {
        $appointment = Appointment::unexpired()->find($id);

        if (!$appointment) {
            abort(404);
        }

        return view('pages.appointments.book', [
            'appointment' => $appointment
        ])
        ->withTitle('Book an Appointment');
    }

    public function appointmentsBook(Request $request, $id)
    {
        $appointment = Appointment::unbooked()->unexpired()->find($id);

        if (!$appointment) {
            abort(404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'nullable|numeric',
            'message' => 'nullable|max:500',
            'file' => 'nullable|file',
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

    public function contactMail(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'subject' => 'required',
            'message' => 'required|min:100',
            'g-recaptcha-response' => new ReCaptcha(new \GuzzleHttp\Client()),
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
        return view('pages.subscribe.index')
        ->withTitle('Subscribe');
    }

    public function subscribeStore(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
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
