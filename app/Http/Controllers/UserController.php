<?php

namespace App\Http\Controllers;


use App\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function login()
    {
        $credentials = request()->only('email', 'password');

        if (Auth::attempt($credentials)) {

            $user = Auth::user();
            $user->tokens()->delete();
            $token = $user->createToken('vuejs-token');

            return response()->json([
                'msg' => 'success',
                'status' => 200,
                'token' => $token->plainTextToken 
            ],200);

        }else{

            return response()->json([
                'msg' => 'failed',
                'status' => 401,
            ],401);

        }
    }


    public function store()
    {
        $data = request()->validate([
            'email' => 'required|unique:users|max:255',
            'name' => 'required|max:255',
            'password' => 'required|max:255',
        ]);

        User::create($data);

        return response()->json([
            'msg' => 'success',
            'status' => 200,
            'user_name' => $data['name']
        ],200);


    }

}
