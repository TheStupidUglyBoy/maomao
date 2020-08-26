<template>
    <div id="app">
        <NavigationBar></NavigationBar>

        <transition class="fade">
<!--             <TheGoBackButton></TheGoBackButton>  -->
            <router-view :key="$route.path" class=""></router-view>
        </transition>
    </div> 
</template>

<script>
    import NavigationBar from "./NavigationBar.vue";
    import TheGoBackButton from "./TheGoBackButton.vue";

    export default {
        name : "App",
        components: {
            NavigationBar,TheGoBackButton
        },
        mounted() {
            console.log('App mounted.')
        },
    };
</script>

<style type="text/css">
    
    .moveUp-enter-active{
        animation: fadeIn 5s ease-in;
    }
    @keyframes fadeIn {
        0% {opacity: 0;}
        50% {opacity: 0.5;}
        100% {opacity: 1;}
    }
    .moveUp-leave-active{
        animation: moveUp 5s ease-in;
    }
    @keyframes moveUp {
        0% { transform: translateY(0) ; }
        100% { transform: translateY(-400px) ; }
    }


    .fade-enter-active, .fade-leave-active{
        transition: opacity 0.3s;
    }

    .fade-enter, .fade-leave-to{
        opacity :  0 ;
    }
</style>
