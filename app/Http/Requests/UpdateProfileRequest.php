<?php

namespace App\Http\Requests;

use Auth;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateProfileRequest extends FormRequest
{
    public function authorize()
    {
        return Auth::user()->id === $this->route('profile')->id;
    }

    public function rules()
    {
        return [
            'name' => 'nullable',
            'email' => 'required|email', Rule::unique('users')->ignore(Auth::user()->id),
            'phone' => 'nullable|numeric',
            'address' => 'nullable',
            'dob' => 'nullable|date',
            'description' => 'nullable',
            'facebook' => 'nullable',
            'twitter' => 'nullable',
            'instagram' => 'nullable',
            'website' => 'nullable|url',
            'avatar' => 'nullable',
        ];
    }
}
