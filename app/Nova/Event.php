<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\Date;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\Place;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Http\Requests\NovaRequest;
use Storage;

class Event extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = 'App\Event';

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'id';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id',
    ];

    /**
     * Get the fields displayed by the resource.
     *
     * @return array
     */
    public function fields(Request $request)
    {
        return [
            ID::make()->sortable(),
            Image::make('Image')
                ->creationRules('required')
                ->updateRules(function (NovaRequest $request) {
                    $model = $request->findModelOrFail();

                    return $model->image ? [] : ['required'];
                })
                ->store(new StoreImage())
                ->preview(function ($image) {
                    return Storage::disk('public')->url('images/'.$image);
                })
                ->thumbnail(function ($image) {
                    return Storage::disk('public')->url('thumbnails/'.$image);
                }),
            Text::make('Title')->rules('required'),
            Place::make('Venue')->rules('required')->hideFromIndex(),
            Date::make('Date')->rules('required')->hideFromIndex(),
            Text::make('Tags')->rules('required')->hideFromIndex(),
            Textarea::make('Content')->rules('required')->hideFromIndex(),
        ];
    }

    /**
     * Get the cards available for the request.
     *
     * @return array
     */
    public function cards(Request $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @return array
     */
    public function filters(Request $request)
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @return array
     */
    public function lenses(Request $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @return array
     */
    public function actions(Request $request)
    {
        return [];
    }
}
