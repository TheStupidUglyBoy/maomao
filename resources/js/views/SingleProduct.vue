<template>

	<section v-if="errored">
		<TheAlertComponent  
		msg="Post Not Found"
		alertType="alert-danger" >
		</TheAlertComponent>
	</section>

	<section v-else>
		<div v-if="loading">Loading...</div>
	    <div class="mx-auto w-full mt-5  "  v-else>
	    	<div class=" h-full  px-8">
	    		<img class="" style="width:200px,height:200px" v-bind:src="info.image" alt="...">
		        <h1 class="py-2 "  >title:  {{ info.title }}</h1>
		        <p class="text-green-400"> author : <span class="font-bold text-xl"> {{ info.author }} </span> </p>
		        <p class="text-red-400">last updated : <span class="font-bold text-xl">  {{ info.updated_at }} </span></p>
		        <p  v-html="info.description "  >  </p>
	        </div>
	    </div>
    </section>

</template>

<script>
	import TheAlertComponent from '../components/TheAlertComponent.vue';
	export default {
	    name:'SingleProduct',
	    components : {
        	TheAlertComponent
        },
	    props:{
	    	id : {
	    		required : true,
	    		type: Number | String
	    	}
	    },
		data: function () {
	        return {

				info: "" ,
				loading: true,
				errored: false,
				hideAlert : false
		    }
	    },

	    created() {

            axios.get(`/api/post/${this.id}`)
                .then(response => {
                	this.info = response.data.data ;
                	console.log(this.info);
                })
                .catch(errors => {
                    console.log(errors)
    				this.errored = true
                })
                .finally(
                	() => this.loading = false
                );
        }
	};
</script>
