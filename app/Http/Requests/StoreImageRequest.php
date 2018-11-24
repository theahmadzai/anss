<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreImageRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'required|min:5|max:50',
            'category' => 'required|exists:categories,id',
            'description' => 'nullable',
            'image' => ($this->method() == 'PUT' ? '' : 'required|') . 'file|image',
        ];
    }
}
