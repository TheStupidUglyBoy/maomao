



<template>
    <button  @click="goBack" class="btn-primary btn ">Back
    </button>
</template>

<script>

    export default {
        name : "TheGoBackButton",
        components : {
        	
        },
        methods: {
        	goBack: function(){
        		return this.$router.go(-1);
        	}
        }
    };
</script>


