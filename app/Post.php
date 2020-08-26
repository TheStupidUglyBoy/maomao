<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Post extends Model
{
    protected $guarded = [];

    public function user(){
    	return $this->belongsTo('App\User');
    }

    public function getDescriptionAttribute($value)
    {
        return strip_tags(html_entity_decode(Str::limit($value,100 ))) ;
    }
}
