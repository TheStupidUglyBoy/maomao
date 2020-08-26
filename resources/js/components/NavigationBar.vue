<template>
    <div id="app">

        <nav class="flex items-center justify-between flex-wrap bg-gray-700 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class="font-semibold text-xl tracking-tight">LOGO</span>
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" @click="showMenu">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                	<title>Menu</title>
                	<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
                </button>
            </div>
            <div class=" w-full block flex-grow lg:flex lg:items-center lg:w-auto" 
            v-bind:class="{ hidden: hideNavigationInMobile }">
                <div class="text-sm lg:flex-grow">
                     <router-link   v-for="page in pages" :to="{name: page}" class="router-link-style">
                    {{ page}}
                     </router-link>
                </div>
                <div>


                    <router-link v-if="!isLoggedIn"  :to="{ name : 'login'}"  class="router-link-right-style ">login</router-link>
                    <router-link v-if="!isLoggedIn"  :to="{ name : 'register'}"  class="router-link-right-style ">register</router-link>
                    <a v-if="isLoggedIn"   @click="logout" class="router-link-right-style cursor-pointer" >logout</a>
                </div>
            </div>
        </nav>

    </div> 
</template>

<script>

    export default {
        name : "NavigationBar",
        components : {
        	
        },
        props: [
            
        ],
        mounted() {
            console.log('NavigationBar mounted.')
        },

        data(){
        	return {
        		hideNavigationInMobile : true , 
                isLoggedIn  : false ,
                pages : [
                    'home',
                    'product',
                    'about',
                    'contact',
                    'create post',
                    'user',
                    
                ]
        	}
        },
        methods: {
        	showMenu: function(){
        		this.hideNavigationInMobile = !this.hideNavigationInMobile;
        	},
            logout:function(){
                localStorage.removeItem('user-token')
                window.location.href = '/userLogin'
            }
        },
        created(){
            if(localStorage.getItem("user-token") !== null )  this.isLoggedIn =  true
        }
    };
</script>

<style type="text/css" scoped>

.router-link-exact-active{
    color: #4fd1c5;;
}


</style>
