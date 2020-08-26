<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        
        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        //DB::table('posts')->truncate();

        factory(App\User::class,5)->create()->each(function($user){

            $user->post()->save( factory(App\Post::class)->make() );

        });
    }
}
