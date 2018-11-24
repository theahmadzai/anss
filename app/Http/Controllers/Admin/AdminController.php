<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

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
