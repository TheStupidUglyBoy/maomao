<template>


<div class="  m-auto lg:w-1/3 h-screen " >
  <form class="border-l border-r border-gray-400  w-full  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit="submit_form">

  	<ul v-if="backEndValidationErrored" >
  		<TheAlertComponent  v-for="(value, key, index) in backendValidationErrors"
		:msg="value"  
		alertState="errors" >
		</TheAlertComponent>
  	</ul>

	<h1 class="py-4 text-xl">CreatePost</h1>
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
      	<div class="form-validate-error " v-if="!$v.description.maxLength">Max length is 1000 only</div>
      </div>

    </div>
    <div class="flex items-center justify-between">
      <button class="btn btn-primary" type="submit">
        create
      </button>
    </div>

    <p class="typo__p form-validate-error" v-if="submitStatus === 'ERROR'">
    OPPS ,Look like you missed out something please recheck the form thanks
	</p>

    <section v-if="errored">
		<TheAlertComponent  
		:msg="errorCode"
		alertType="alert-danger" >
		</TheAlertComponent>
	</section>

	<section v-if="createSuccess">
		<h1 class="text-green-800 text-xl font-bold">Successfully created !</h1>
	</section>

  </form>

</div>



</template>

<script>
	import TheAlertComponent from '../components/TheAlertComponent.vue';
	import { required, maxLength, between } from 'vuelidate/lib/validators'
	export default {
	    name:'CreatePost',
	    components : {
        	TheAlertComponent ,
        },
	    props:{

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
	        	errored : false ,
	        	errorCode : '',
				title: '',
				description: '',
				backendValidationErrors : '' ,
				backEndValidationErrored: false,
				createSuccess : false,
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
					
					axios.post('/api/post/store', {
	                    title: this.title,
	                    description: this.description
	                })
	                .then(response => {
	                	this.createSuccess = true ;
	                })
	                .catch(errors => {
	                    console.log(errors);
	                    //laravel validation error == 422
	    				if (errors.response.status == 422){
	    					this.backEndValidationErrored = true;
							this.backendValidationErrors = errors.response.data.errors;

						}else{
							this.errored = true;
	    					this.errorCode = errors ;
						}

	                })
	                .finally(
	                	this.errored = false,
	                	this.backEndValidationErrored  = false,
	                	this.title = '',
						this.description ='',
						this.$v.$reset(),
	                );
				}

	    	}
	    },
		
	};
</script>


