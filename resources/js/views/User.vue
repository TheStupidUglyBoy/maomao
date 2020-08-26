<template>
    
<section>
    <section v-if="errored">
		<TheAlertComponent  
		msg="we cant retrieve information at the moment , please try again later !"
		alertType="alert-danger" >
		</TheAlertComponent>
	</section>

	<section v-else>
		<div v-if="loading">Loading...</div>
	    <div class="mx-auto w-full  h-screen">
	    	<h1 class="pl-5 py-2 text-xl  ">welcome <span class="font-bold text-green-400"> {{ name }} </span> </h1>
	    	<p class="pl-5 py-2 text-xl">email : <span class="font-bold text-green-400">  {{ email }}   </span>  </p>
	    	<p class="pl-5 py-2 text-xl">id : <span class="font-bold text-green-400">  {{ user_id }}   </span>  </p>
	    	
	    </div>
    </section>
</section>


</template>

<script>
	import TheAlertComponent from '../components/TheAlertComponent.vue';
    export default {
    	name:'User',
    	components : {
        	TheAlertComponent
        },
    	data: function () {
            return {
		      
              name: null,
		      email : null,
		      user_id : null,
		      loading: true,
		      errored: false,

		    }
        },
        methods: {

        	retrieveUserDetail:function(){
        		axios.get('/api/user')
                .then(response => {
                	this.email = response.data.email
                	this.user_id = response.data.id
                	this.name = response.data.name
                    localStorage.setItem('user-id', response.data.id ) ;
                	console.log(response);
                })
                .catch(errors => {
                    console.log(errors)
    				this.errored = true
                })
                .finally(() => this.loading = false  );
        	},

        	
       },
		created() {
			this.retrieveUserDetail();
		}

    };
</script>