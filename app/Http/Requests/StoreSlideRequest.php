<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSlideRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'required|min:5|max:50',
            'link' => 'nullable|url',
            'image' => ($this->method() == 'PUT' ? '' : 'required|') . 'dimensions:min_height=300,min_width=900,max_height=400,max_width=1100',
        ];
    }
}
