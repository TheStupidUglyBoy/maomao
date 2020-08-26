<!-- <!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <script src="{{ asset('js/app.js') }}" defer></script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    



    <div class="mx-auto h-screen flex justify-center items-center bg-gray-300">
        <div class="w-2/5 bg-teal-900 rounded-lg shadow-xl p-6">

            <h1 class="text-yellow-600 text-3xl pt-8">Welcome Back</h1>
            <h2 class="text-yellow-600">Please enter credentials below</h2>

            <form method="POST" action="{{ route('login') }}" class="pt-8">
                @csrf
                <div class="relative">
                    <label for="email" class="uppercase text-teal-500 text-xs bont-bold absolute pt-2 pl-3">Email</label>
                    <input id="email" type="email" class="pt-8 w-full rounded p-3 bg-teal-800 text-gray-100 outline-none focus:bg-yellow-600" name="email" value="{{ old('email') }}" autocomplete=off autofocus
                    placeholder="you@email.com">

                    @error('email')
                        <span class="text-sm text-red-500" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>

                <div class="relative pt-3">
                    <label for="password" class="uppercase text-teal-500 text-xs bont-bold absolute pt-2 pl-3">
                        Password
                    </label>
                    <input id="password" type="password" class="pt-8 w-full rounded p-3 bg-teal-800 text-gray-100 outline-none focus:bg-yellow-600" name="password" autocomplete="current-password" placeholder="your password">
                    @error('password')
                        <span class="text-sm text-red-500" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>

                <div class="pt-2">
                    <input class="form-check-input" type="checkbox" name="remember" id="remember" >
                    <label class="text-white " for="remember">
                        {{ __('Remember Me') }}
                    </label>
                </div>

                <div class="pt-8">
                    <button type="submit" 
                    class="uppercase rounded text-teal-800 py-2 px-3 font-bold w-full bg-gray-400 ">
                        Login
                    </button>
                </div>
                <div class="pt-8 flex text-white justify-between text-sm font-bold">
                    @if (Route::has('password.request'))
                        <a class="btn btn-link" href="{{ route('password.request') }}">
                            {{ __('Forgot Your Password?') }}
                        </a>
                    @endif
                    @if (Route::has('password.request'))
                        <a class="btn btn-link" href="{{ route('register') }}">
                            {{ __('Register') }}
                        </a>
                    @endif    
                </div>
            </form>


        </div>
    </div>


</body>
</html>
 -->