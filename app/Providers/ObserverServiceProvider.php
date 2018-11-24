<?php

namespace App\Providers;

use App\Category;
use App\Event;
use App\Image;
use App\News;
use App\Observers\CategoryObserver;
use App\Observers\EventObserver;
use App\Observers\ImageObserver;
use App\Observers\NewsObserver;
use App\Observers\SlideObserver;
use App\Slide;
use Illuminate\Support\ServiceProvider;

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
        Slide::observe(SlideObserver::class);
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
