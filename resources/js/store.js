import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    
  },
  getters: {
	  	isLoggedIn:function(){
	    	if( localStorage.getItem("user-token") !== null  )
	        	return  true
	    	else
	    		return false 
	    },
	},
  mutations: {

  }
})

