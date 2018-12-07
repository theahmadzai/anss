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

// Events
Route::get('/events/past/{id?}', 'PageController@pastEvents');
Route::get('/events/upcoming/{id?}', 'PageController@upcomingEvents');

// Latest News
Route::get('/news/{id?}', 'PageController@latestNews');

// Gallery
Route::get('/gallery', 'PageController@gallery');

// Appointments
Route::get('/appointments', 'PageController@appointments');
Route::get('/appointments/{id}', 'PageController@appointmentsPage');
Route::post('/appointments/{id}', 'PageController@appointmentsBook');

// Donate
Route::get('/donate', 'PageController@donate');

// Contact
Route::get('/contact', 'PageController@contact');
Route::post('/contact', 'PageController@contactMail');

// Subscribe
Route::get('/subscribe', 'PageController@subscribe');
Route::post('/subscribe', 'PageController@subscribeStore');

// Authentication
Auth::routes(['verify' => true]);

// User
Route::group(['prefix' => 'user', 'middleware' => 'auth'], function () {

    // User Panel
    Route::get('/', 'User\UserController@index');

    // Profile
    Route::resource('/profile', 'User\ProfileController');

});

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

    // Appointments
    Route::resource('/appointments', 'Admin\AppointmentController');

    // News
    Route::resource('/news', 'Admin\NewsController');

    // Events
    Route::resource('/events', 'Admin\EventController');

});
