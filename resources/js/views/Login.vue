<template>


<div class="  m-auto lg:w-1/3 h-screen " >
  <form class="border-l border-r border-gray-400  w-full  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit="submit_form">


	<h1 class="py-4 text-xl">Login </h1>
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
        login
      </button>
    </div>

    <p class="typo__p form-validate-error" v-if="submitStatus === 'ERROR'">
    OPPS ,Look like you missed out something please recheck the form thanks
	</p>

    <section v-if="errored">
		<TheAlertComponent  
		msg="Login Fails ,please check you password and email"
		alertType="alert-danger" >
		</TheAlertComponent>
	</section>


  </form>

</div>



</template>

<script>
	import TheAlertComponent from '../components/TheAlertComponent.vue';
	import { required, minLength , maxLength, email } from 'vuelidate/lib/validators'
	export default {
	    name:'Login',
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
		},
		data: function () {
	        return {
	        	errored : false ,
				email: '',
				password: '',
				submitStatus: null,
		    }
	    },
	    validations: {
			email: {
				required,
				email,
				minLength: minLength(5),
				maxLength: maxLength(255)
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


					axios.post('api/login', {
					    email: this.email,
					    password: this.password
					})
					.then(response => {

					    localStorage.setItem('user-token', response.data.token  ) ;
					    window.location.href = '/user'
					})
					.catch(errors => {
						this.errored = true ;
					    console.log(errors);
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


