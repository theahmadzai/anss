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
Route::get('/news/{id?}', 'PageController@news');

// Events
Route::get('/past-events', 'PageController@pastEvents');
Route::get('/upcoming-events', 'PageController@upcomingEvents');
Route::get('/events/{id}', 'PageController@events');

// Appointments
Route::get('/appointments', 'PageController@appointments');
Route::post('/appointments', 'PageController@postAppointments');

// Contact
Route::get('/contact', 'PageController@contact');
Route::post('/contact', 'PageController@postContact');

// Subscribe
Route::get('/subscribe', 'PageController@subscribe');
Route::post('/subscribe', 'PageController@postSubscribe');

// Authentication
Auth::routes(['verify' => true]);

// Profile
Route::resource('/profile', 'User\ProfileController')->only([
    'index', 'show', 'edit', 'update'
]);

// Admin
Route::group(['prefix' => 'admin', 'middleware' => 'admin'], function () {

    // Admin Panel
    Route::get('/', 'Admin\AdminController@index');

    // Categories
    Route::resource('/categories', 'Admin\CategoryController');

    // Images
    Route::resource('/images', 'Admin\ImageController');

    // Slider
    Route::resource('/slides', 'Admin\SlideController');

    // News
    Route::resource('/news', 'Admin\NewsController');

    // Events
    Route::resource('/events', 'Admin\EventController');

    // Appointments
    Route::resource('/appointments', 'Admin\AppointmentController')->only([
        'index', 'show', 'destroy'
    ]);

});
