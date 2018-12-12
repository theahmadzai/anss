<?php

namespace App\Observers;

use App\User;

class UserObserver
{
    public function updating(User $user)
    {
        if (request()->hasFile('avatar')) {
            $user->avatar = request()->avatar->store('public/avatars');
            // $user->createThumbnail(150, 150);
        }
    }
}
