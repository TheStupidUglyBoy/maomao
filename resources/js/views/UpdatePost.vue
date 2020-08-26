<template>

<section v-if="retrievePostErrored">
	<TheAlertComponent  
	msg="we cant retrieve the post at the moment , please try again later !"
	alertType="alert-danger" >
	</TheAlertComponent>
</section>

<div v-else  class="  m-auto w-1/3 h-screen " >

  <form class="border-l border-r border-gray-400  w-full  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit="submit_form">

	<h1 class="py-4 text-xl">Update Post</h1>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
        title
      </label>
      <input v-model="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " id="title" type="text" placeholder="Post Title" autocomplete="off"  v-model.trim="$v.title.$model">
      <p class=" text-xs text-gray-700">{{countTitle}}/225</p>
      


      <div v-if="$v.title.$dirty"> 
      	<div class="form-validate-error " v-if="!$v.title.required">Title is required</div>
      	<div class="form-validate-error " v-if="!$v.title.maxLength">Max length is 225 only</div>
      </div>

    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
        Description
      </label>

      <textarea v-model="description" rows="10" class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Post Description"></textarea>
      <p class=" text-xs text-gray-700">{{countDescription}}/1000</p>

      <div v-if="$v.description.$dirty"> 
      	<div class="form-validate-error " v-if="!$v.description.required">Description is required</div>
      	<div class="form-validate-error " v-if="!$v.description.maxLength">Description value is only 1000 chacrters only</div>
      </div>

    </div>
    <div class="flex items-center justify-between">
      <button class="btn btn-primary" type="submit">update</button>
    </div>

    <p class="typo__p form-validate-error" v-if="submitStatus === 'ERROR'">
    OPPS ,Look like you missed out something please recheck the form thanks
	</p>
	<p class=" form-validate-error" v-if="errored">
    An error accured please try again later thanks 
	</p>


	<section v-if="updateSuccess">
		<h1 class="text-green-800 text-xl font-bold">Successfully updated !</h1>
	</section>

  </form>

</div>



</template>

<script>
	import TheAlertComponent from '../components/TheAlertComponent.vue';
	import { required, maxLength, between } from 'vuelidate/lib/validators'
	export default {
	    name:'UpdatePost',
	    components : {
        	TheAlertComponent ,
        },
	    props:{
	    	id : {
	    		required : true,
	    		type: Number | String
	    	}
	    },
	    computed : {
			countTitle:function(){
				return this.title.length;
			},
			countDescription:function(){
				return this.description.length;
			},
		},
		data: function () {
	        return {

	        	retrievePostErrored : false ,
	        	errored : false ,
				title: '',
				description: '',
				updateSuccess : false,
				submitStatus: null,
		    }
	    },
	    validations: {
			title: {
				required,
				maxLength: maxLength(255)
			},
			description: {
				required,
				maxLength: maxLength(1000)
			}
		},
	    methods:{
	    	submit_form: function(e){
				e.preventDefault();

				this.$v.$touch();
				if (this.$v.$invalid) {
					this.submitStatus = 'ERROR';
				} else {
					this.submitStatus = null ;
					
					axios.patch(`/api/post/${this.id}` , {
	                    title: this.title,
	                    description: this.description
	                })
	                .then(response => {
	                	this.updateSuccess = true ;
	                })
	                .catch(errors => {
	                    console.log(errors);
						this.errored = true;
	                })
	                .finally(
	                	this.errored = false,
						this.$v.$reset(),
	                );
				}

	    	}
	    },

	    created() {
            axios.get(`/api/post/${this.id}`)
                .then(response => {
                	this.title = response.data.data.title ;
                	this.description = response.data.data.description ;
                })
                .catch(errors => {
                    console.log(errors)
    				this.retrievePostErrored = true
                });
        }
		
	};
</script>


