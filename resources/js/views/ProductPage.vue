<template>
<section>	
	
	<notifications group="app"  width="900"/>

	<section v-if="errored">
		<TheAlertComponent  
		msg="we cant retrieve information at the moment , please try again later !"
		alertType="alert-danger" >
		</TheAlertComponent>
	</section>

	<section v-else>

<div class=" gap-4 mt-2   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
	    <div v-if="loading">Loading...</div>

	    <div class="max-w-sm rounded overflow-hidden shadow-lg" v-else v-for="post in info">
			<div   >
				<img class="w-full" 
				v-bind:src="post.image" alt="..." width="200" height="200">
				<div class="px-6 py-4">
					<router-link 
					:to="{ name : 'singleProduct' , params: { id:post.post_id } }"
					class="font-bold text-xl mb-2">
						<div > {{ post.title}} </div>
					</router-link>
					<p class=" text-sm my-1 text-red-400"> Post# :  {{post.post_id}}</p>
					<p class="font-bold text-sm my-1 text-red-400">{{post.author}}</p>
					<p class="text-gray-700 text-base">
					{{post.description}}
					</p>
					<p class="font-bold text-sm my-1">last updated : {{post.updated_at}}</p>
				</div>
				<div class="px-6 pt-4 pb-2"  v-if=" post.user_id == userId">


					<router-link 
					:to="{ name : 'update post' , params: { id:post.post_id } }" class="btn btn-success mr-2">
						update
					</router-link>
					<button @click="deletePost(post.post_id)" class="btn btn-danger"> DELETE </button>

				</div>

			</div>
		</div>
</div>


	</section>


</section>	
</template>

<script>
	import TheAlertComponent from '../components/TheAlertComponent.vue';



    export default {
    	name:'ProductPage',
    	components : {
        	TheAlertComponent
        },
    	data: function () {
            return {
		      info: null,
		      loading: true,
		      errored: false ,
		      postId : null ,
		      userId : localStorage.getItem('user-id') ,

		    }
        },
        computed : {
			// displayUpdateDeleteButton:function(){
			// 	if(  this.userId == this.postUserId  ){
			// 		return true ;
			// 	}
			// },
		},
        methods: {
        	deletePost:function( post_id){

        		axios.delete(`api/post/${post_id}`)
                .then(response => {
                	this.retrievePost() ;
                	this.deleted_notificate();
                })
                .catch(errors => {
                	console.log(errors)
                    alert(errors.response.data.message);
                });
 
        	},
        	retrievePost:function(){
        		axios.get('/api/post')
                .then(response => {
                	this.info = response.data.data ;
                	console.log(this.info);
                })
                .catch(errors => {
                    console.log(errors)
    				this.errored = true
                })
                .finally(() => this.loading = false );
        	},
        	deleted_notificate () {
		      this.$notify({
		        group: 'app',
		        title: 'Deletion',
		        text: '<p><b>Post is deleted !</b></p>',
		        type: 'success',
		        speed: 2000
		      })
		    },
        	
       },
		created() {
			this.retrievePost();
		}

    };
</script>
