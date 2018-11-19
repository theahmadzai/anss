<?php
namespace App\Traits;

use Image as ImageTool;
use Storage;

trait Thumbnail
{
    public function thumbnail()
    {
        $r = $this->url ? 'url' : 'image';

        if($this->getOriginal($r)) {
            return Storage::url('thumbnails/' . basename($this->{$r}));
        }

        return $this->{$r};
    }

    public function createThumbnail($image) {
        $r = $this->url ? 'url' : 'image';
        $x = 300;
        $y = 120;

        if($this->url && $this->category->slug != 'slider') {
            $x = 200;
            $y = 200;
        }

        ImageTool::make($image->getRealPath())->fit($x, $y, function($constraint) {
            $constraint->upsize();
            $constraint->aspectRatio();
        })->save(public_path().'/storage/thumbnails/'.basename($this->{$r}), 80);
    }
}
