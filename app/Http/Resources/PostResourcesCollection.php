<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResourcesCollection extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'user_id' => $this->user_id,
            'author' => $this->user->name,
            'post_id' => $this->id,
            'title' => $this->title,
            'description' => $this->description, 
            'image' => $this->image, 
            'updated_at' => $this->updated_at->diffForHumans() ,
        ];
    }
}
