<?php

namespace App\Traits;

use ImageTool;
use Storage;

trait Thumbnail
{
    public function thumbnail()
    {
        if(!$this->getOriginal('image')) {
            return $this->image;
        }

        return Storage::url('thumbnails/' . basename($this->image));
    }

    public function createThumbnail($image, $x = 300, $y = 150) {
        ImageTool::make($image->getRealPath())->fit($x, $y, function($constraint) {
            $constraint->upsize();
            $constraint->aspectRatio();
        })->save(public_path('/storage/thumbnails/'.basename($this->image), 80));
    }
}
