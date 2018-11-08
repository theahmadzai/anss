<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\News;
use App\Event;
use App\Appointment;
use App\Manager;
use App\Image;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth.basic', 'admin']);
    }

    public function index()
    {
        return view('admin.index');
    }

}
