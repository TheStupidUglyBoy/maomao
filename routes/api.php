<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware(['auth:sanctum'])->group(function () {

	Route::get('/user',function (Request $request) {
	    return $request->user();
	});


	Route::delete('/post/{post}','PostController@destroy');
	Route::patch('/post/{post}','PostController@update');
	Route::POST('/post/store','PostController@store');


});

Route::get('/post','PostController@index');
Route::get('/post/{post}','PostController@show');




Route::POST('/login','UserController@login');
Route::POST('/register','UserController@store');




