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
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'nullable|digits_between:8,15',
            'date' => 'required|date',
            'category' => 'required|in:1,2,3,4,5',
            'message' => 'required|max:2000',
            'file' => 'nullable|file',
        ];
    }
}
