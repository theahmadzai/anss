<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\News;
use App\Event;
use App\Appointment;
use App\Manager;
use App\Image;
use Validator;
use Mail;

class PageController extends Controller
{
    /**
     * Home
     */
    public function index()
    {
        $news = News::latest()->limit(3)->get() ?? null;
        $events = Event::latest()->limit(3)->get() ?? null;

        return view('pages.index', [
            'latest_news' => $news
        ]);
    }

    /**
     * About
     */
    public function about()
    {
        return view('pages.about.index');
    }

    public function whoWeAre()
    {
        return view('pages.about.who-we-are');
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
    public function events()
    {
        return view('pages.events.index');
    }

    public function upcomingEvents()
    {
        return view('pages.events.upcoming-events', ['events' => Event::all()]);
    }

    public function pastEvents()
    {
        return view('pages.events.past-events', ['events' => Event::all()]);
    }

    /**
     * Latest News
     */
    public function latestNews($id = null)
    {
        if($id === null) {
            return view('pages.news.index', ['articles' => News::all()]);
        }

        return view('pages.news.news-page', ['article' => News::find($id)]);
    }

    /**
     * Gallery
     */
    public function gallery()
    {
        return view('pages.gallery.index', ['images' => Image::all()]);
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
            'message' => 'nullable|max:500'
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
            'g-recaptcha-response' => 'recaptcha'
        ]);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        $data = [
            'subject' => $request->subject,
            'content' => $request->message
        ];

        Mail::send('emails.contact', $data, function($mail) use ($request) {
            $mail->from($request->email, $request->name);
            $mail->to('info@anss.ca', 'ANSS Foundation');
            $mail->subject($request->subject);

            if($request->hasFile('attachments')) {
                $files = $request->file('attachments');
                $size = sizeOf($files);

                for($i=0; $i<$size; $i++) {
                    $mail->attach($files[$i]);
                }
            }
        });

        return back()->with('status', 'Your email has been sent successfully!');
    }
}
