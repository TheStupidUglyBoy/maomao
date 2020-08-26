import Vue from 'vue';
import {store} from './store.js';
import VueRouter from 'vue-router';
import App from './components/App.vue';

Vue.use(VueRouter);


const router = new VueRouter({

	routes:[
		{ 
			path:'/about', 
			name:'about',
			component: () => import(/* webpackChunkName: "about" */'./views/AboutPage.vue'),
			props:true
		},
		{ 
			path:'/contact',
			name:'contact',
			component: () => import(/* webpackChunkName: "contact" */'./views/ContactPage.vue'),
			props:true
		},
		{ 
			path:'/product', 
			name:'product',
			component: () => import(/* webpackChunkName: "product" */'./views/ProductPage.vue'),
			props:true
		},
		{ 
			path:'/product/:id',
			name:'singleProduct',
			component: () => import(/* webpackChunkName: "single_post" */'./views/SingleProduct.vue'),
			props:true
		},
		{ 
			path:'/',
			name:'home',     
			component: () => import(/* webpackChunkName: "home" */'./views/HomePage.vue'),
			props:true
		},
		{ 
			path:'/post_create',
			name:'create post',     
			component: () => import(/* webpackChunkName: "create_post" */'./views/CreatePost.vue'),
			props:true,
			meta: { requiresAuth: true},
		},
		{ 
			path:'/post_update/:id',
			name:'update post',
			component: () => import(/* webpackChunkName: "post_update" */'./views/UpdatePost.vue'),
			props:true,
			meta: { requiresAuth: true},
		},
		{
			path:'/userLogin',
			name:'login',
			component: () => import(/* webpackChunkName: "login" */'./views/Login.vue'),
			props:true
		},
		{ 
			path:'/user',
			name:'user',
			component: () => import(/* webpackChunkName: "user" */'./views/User.vue'),
			props:true,
			meta: { requiresAuth: true},
		},
		{ 
			path:'/register',
			name:'register',
			component: () => import(/* webpackChunkName: "user" */'./views/Register.vue'),
			props:true,
		},
		{ 
			path:'*',
			name:'notFound',     
			component: () => import(/* webpackChunkName: "home" */'./views/NotFound.vue'),
			props:true
		},
		// { 
		// 	path:'/home',
		// 	name:'homepage',
		// 	component: () => import( webpackChunkName: "home" './views/HomePage.vue'),
		// 	props:true
		// },
		

	],
	mode: 'history'
});

router.beforeEach( ( to , from , next) => {
	if( to.matched.some( record => record.meta.requiresAuth) )

		if(   localStorage.getItem("user-token") !== null      ){
			next(); 
		}else{
			next({
				name: 'login'
			});
		}
		


		//next();

	else 
		next();


});

 export default router ;