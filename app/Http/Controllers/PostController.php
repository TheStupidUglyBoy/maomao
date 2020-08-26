<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\Http\Resources\PostResources as PostResources;
use App\Http\Resources\PostResourcesCollection as PostResourcesCollection;
use Faker\Generator as Faker;
use Illuminate\Validation\Rule;


class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::latest()->get();

        return PostResourcesCollection::collection(  $posts );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,Faker $faker)
    {
        $data = request()->validate([
            'title' => 'required|unique:posts|max:255',
            'description' => 'required|max:1000',
        ]);
        $request->user()->post()->create($data + ['image' => $faker->imageUrl( 300 , 300 , 'cats') ] );

        return response()->json([
            'msg' => 'success',
            'status' => 200,
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        return new PostResources(  $post );
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update( Post $post)
    {
        $this->authorize('update',$post);
        $data = request()->validate([
            'title' => [
                'required' ,
                'max:255' ,
                Rule::unique('posts')->ignore(  $post->id ),
            ],
            'description' => 'required|max:1000',
        ]);

        $post->update(  $data   );
        return response()->json([
            'msg' => 'success',
            'status' => 200,
        ]); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $this->authorize('delete',$post);
        $post->delete();
        return response()->json([
            'msg' => 'success',
            'status' => 200,
        ]); 
    }
}
