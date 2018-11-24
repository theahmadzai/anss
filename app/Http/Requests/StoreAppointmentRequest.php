<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAppointmentRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'description' => 'required|min:5|max:500',
            'date' => 'required|date' . ($this->isMethod('PUT') ? '' : '|after:tomorrow'),
        ];
    }
}
