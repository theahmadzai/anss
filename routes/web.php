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

Route::get('/', 'PageController@home')->name('home');
Route::get('/contact', 'PageController@contact')->name('contact');
Route::get('/about', 'PageController@about')->name('about');
Route::get('/news', 'PageController@newsList')->name('news-list');
Route::get('/news/{id}', 'PageController@news')->name('news');

Auth::routes();
