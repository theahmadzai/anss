<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreNewsRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'required|min:5|max:50',
            'date' => 'required',
            'tags' => 'nullable',
            'content' => 'required|min:100',
            'image' => ($this->method() == 'PUT' ? '' : 'required|') . 'file|image',
        ];
    }
}
