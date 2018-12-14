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

// Authentication
Auth::routes(['verify' => true]);

// Home
Route::get('/', 'PageController@index')->name('home');

// About
Route::get('/who-we-are', 'PageController@whoWeAre');
Route::get('/strategic-plans', 'PageController@strategicPlans');
Route::get('/board-of-directors', 'PageController@boardOfDirectors');

// Services
Route::get('/immigration-and-settlement', 'PageController@immigrationAndSettlement');
Route::get('/cultural-environmental-and-educational', 'PageController@culturalEnvironmentalAndEducational');
Route::get('/networking-and-community-based-research', 'PageController@networkingAndCommunityBasedResearch');

// Gallery
Route::get('/gallery', 'PageController@gallery');

// Donate
Route::get('/donate', 'PageController@donate');

// Latest News
Route::get('/latest-news', 'PageController@latestNews');

// Events
Route::get('/past-events', 'PageController@pastEvents');
Route::get('/upcoming-events', 'PageController@upcomingEvents');

// // Appointments
Route::get('/book-appointment', 'PageController@bookAppointments');

// Contact
Route::get('/contact', 'PageController@contact');
Route::post('/contact', 'PageController@postContact');

// Subscribe
Route::get('/subscribe', 'PageController@subscribe');
Route::post('/subscribe', 'PageController@postSubscribe');

// Categories
Route::resource('/categories', 'CategoryController');

// Images
Route::resource('/images', 'ImageController');

// Slider
Route::resource('/slides', 'SlideController');

// News
Route::resource('/news', 'NewsController');

// Events
Route::resource('/events', 'EventController');

// Appointments
Route::resource('/appointments', 'AppointmentController')->only([
    'index', 'show', 'destroy', 'store',
]);

// Profile
Route::resource('/profile', 'ProfileController')->only([
    'index', 'show', 'edit', 'update',
]);

// Admin
Route::group(['prefix' => 'admin'], function () {
    Route::get('/', 'AdminController@index');
});
