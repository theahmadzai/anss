<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAppointmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'nullable|numeric|digits_between:9,13',
            'date' => 'required|date|after_or_equal:today',
            'message' => 'required|max:2000',
            'attachment' => 'nullable|file',
            'appointment_category_id' => 'required|unique:appointment_categories',
        ];
    }
}
