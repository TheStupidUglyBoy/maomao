<template>


<div class="  m-auto lg:w-1/3 h-screen " >
  <form class="border-l border-r border-gray-400  w-full  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit="submit_form">

    <ul v-if="backEndValidationErrored" >
  		<TheAlertComponent  v-for="(value, key, index) in backendValidationErrors"
		:msg="value"  
		alertType="alert-danger" >
		</TheAlertComponent>
  	</ul>

	<h1 class="py-4 text-xl">Register </h1>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        email
      </label>
      <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " id="email" type="text" placeholder="example@email.com" autocomplete="off"  v-model.trim="$v.email.$model">
      <p class=" text-xs text-gray-700">{{countemail}}/225</p>
      


      <div v-if="$v.email.$dirty"> 
      	<div class="form-validate-error " v-if="!$v.email.required">Email is required</div>
      	<div class="form-validate-error " v-if="!$v.email.email">Please provide correct email</div>
      	<div class="form-validate-error " v-if="!$v.email.minLength">Min length is 6</div>
      	<div class="form-validate-error " v-if="!$v.email.maxLength">Max length is 225 only</div>
      </div>

    </div>

    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        name
      </label>

      <input v-model.trim="$v.name.$model" v-model="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="name" type="text" placeholder="Your name etc : Benny" autocomplete="off"  >


      <p class=" text-xs text-gray-700">{{countname}}/50</p>

      <div v-if="$v.name.$dirty"> 
      	<div class="form-validate-error " v-if="!$v.name.required">name is required</div>
      	<div class="form-validate-error " v-if="!$v.name.minLength">name at least 3 length</div>
      	<div class="form-validate-error " v-if="!$v.name.maxLength">name filed length count over 50</div>
      </div>

    </div>


    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        password
      </label>

      <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " id="password" type="password" placeholder="******************" autocomplete="off"  v-model.trim="$v.password.$model">


      <p class=" text-xs text-gray-700">{{countpassword}}/100</p>

      <div v-if="$v.password.$dirty"> 
      	<div class="form-validate-error " v-if="!$v.password.required">password is required</div>
      	<div class="form-validate-error " v-if="!$v.password.minLength">password at least 6 length</div>
      	<div class="form-validate-error " v-if="!$v.password.maxLength">password filed length count over 100</div>
      </div>

    </div>
    <div class="flex items-center justify-between">
      <button class="btn btn-primary" type="submit">
        register
      </button>
    </div>

    <p class="typo__p form-validate-error" v-if="submitStatus === 'ERROR'">
    OPPS ,Look like you missed out something please recheck the form thanks
	</p>

    <section v-if="errored">
		<TheAlertComponent  
		msg="Registration fails , please try again later"
		alertType="alert-danger" >
		</TheAlertComponent>
	</section>
    <section v-if="registeded">
		<p class="text-green-400 bg-white border-green-700 py-3 px-4 rounded border font-bold">succesfully registed </p>
	</section>

  </form>

</div>



</template>

<script>
	import TheAlertComponent from '../components/TheAlertComponent.vue';
	import { required, minLength , maxLength, email } from 'vuelidate/lib/validators'
	export default {
	    name:'Register',
	    components : {
        	TheAlertComponent ,
        },
	    props:{

	    },
	    computed : {
			countemail:function(){
				return this.email.length;
			},
			countpassword:function(){
				return this.password.length;
            },
            countname:function(){
				return this.name.length;
			},
		},
		data: function () {
	        return {
	        	errored : false ,
				email: '',
                password: '',
                name: '',
                submitStatus: null,
                backendValidationErrors : '' ,
                backEndValidationErrored: false,
                registeded : false ,
		    }
	    },
	    validations: {
			email: {
				required,
				email,
				minLength: minLength(5),
				maxLength: maxLength(255)
            },
            name: {
				required,
				minLength: minLength(3),
				maxLength: maxLength(50)
			},
			password: {
				required,
				minLength: minLength(6),
				maxLength: maxLength(100)
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


					axios.post('api/register', {
					    email: this.email,
                        password: this.password,
                        name: this.name
					})
					.then(response => {
                        //console.log(response)
                        this.registeded = true ;

					})
					.catch(errors => {

                        console.log(errors);
                        
                        if (errors.response.status == 422){
	    					this.backEndValidationErrored = true;
							this.backendValidationErrors = errors.response.data.errors;

						}else{
							this.errored = true;
						}
					})
		            .finally(
		            	this.errored = false,
						this.$v.$reset(),

		            );;

				}

	    	}
	    },
	    created:function(){
	    	if( localStorage.getItem("user-token") !== null    )  window.location.href = '/user'

	    }
		
	};
</script>


