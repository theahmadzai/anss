<?php

namespace App\Traits;

use Intervention\Image\Facades\Image as ImageTool;

trait ThumbnailTrait
{
    public function thumbnail()
    {
        if (!$this->getOriginal('image')) {
            return $this->image;
        }

        return '/storage/thumbnails/' . basename($this->image);
    }

    public function createThumbnail($x = 300, $y = 150)
    {
        ImageTool::make(public_path($this->image))->fit($x, $y, function ($constraint) {
            $constraint->upsize();
            $constraint->aspectRatio();
        })->save(public_path('/storage/thumbnails/' . basename($this->image), 80));
    }
}
