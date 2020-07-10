<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Home
Route::get('/', 'HomeController@index');

// About
Route::view('who-we-are', 'pages.about.who-we-are');
Route::view('strategic-plans', 'pages.about.strategic-plans');
Route::view('board-of-directors', 'pages.about.board-of-directors', [
    'directors' => json_decode(File::get(public_path('storage/json/directors.json')), true),
]);

// Services
Route::view('immigration-and-settlement', 'pages.services.immigration-and-settlement');
Route::view('cultural-environmental-and-educational', 'pages.services.cultural-environmental-and-educational');
Route::view('networking-and-community-based-research', 'pages.services.networking-and-community-based-research');

// Gallery
Route::get('gallery', 'GalleryController@index');

// News
Route::get('news', 'NewsController@index');
Route::get('news/{news}', 'NewsController@show');

Route::get('/events/past', 'EventController@pastEvents');
Route::get('/events/upcoming', 'EventController@upcomingEvents');
Route::get('/events/{event}', 'EventController@show');

// Appointments
Route::get('book-appointment', 'AppointmentController@index');
Route::post('book-appointment', 'AppointmentController@submit');

// Contact
Route::get('contact-us', 'ContactController@index');
Route::post('contact-us', 'ContactController@submit');

// Subscribe
Route::get('subscribe', 'SubscriberController@index');
Route::post('subscribe', 'SubscriberController@submit');

// Donate
Route::view('donate', 'pages.donate.index');
