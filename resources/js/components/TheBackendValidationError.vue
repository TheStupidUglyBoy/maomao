



<template>

         <TheAlertComponent   v-for="(value, key, index) in validationErrors"
        :msg="value"
        alertState="erros" >
        </TheAlertComponent>

    

</template>

<script>
    //import TheAlertComponent from '/TheAlertComponent.vue';

    export default {
        name : "TheBackendValidationError",
        props: ['errors'],
        components : {
            TheAlertComponent 
        },
        computed: {
          validationErrors(){
              let errors = Object.values(this.errors);
              errors = errors.flat();
              return errors;
          }
        },
    };



      



</script>
