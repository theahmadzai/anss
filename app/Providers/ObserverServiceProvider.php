<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Category;
use App\Image;
use App\Event;
use App\News;
use App\Observers\CategoryObserver;
use App\Observers\ImageObserver;
use App\Observers\EventObserver;
use App\Observers\NewsObserver;

class ObserverServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Category::observe(CategoryObserver::class);
        Image::observe(ImageObserver::class);
        Event::observe(EventObserver::class);
        News::observe(NewsObserver::class);
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
