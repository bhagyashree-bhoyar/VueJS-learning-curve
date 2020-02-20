<template>
<div id="product-list-one">
    <form @submit.prevent="addEntry(entry.name, entry.email)" v-if="!submitted">
        <h2> Add Entry </h2>
        <div>
        <span class="error">*</span>
         <label for="name">Name</label>
         <input class="form-field" v-model="entry.name" type="text" id="name" name="name">
          <div class="error" v-if="errors['name']" >{{errors['name']}}</div>
       </div>
       <div>
       <span class="error">*</span>
       <label for="email">Email</label>
        <input class="form-field" v-model="entry.email" type="text" id="email" name="email">
        <div class="error" v-if="errors['email']" >{{errors['email']}}</div>
       </div>
       <button class="button-style" type='submit'>Add Entry</button>   
    </form>
    <div v-if="submitted"> 
       <h3>Added entry successfully</h3>
       <button class="button-style" v-on:click="toggleSubmited" >OK</button>
       </div>
    </div>
</template>

<script>

import { required, emailFormat, nameFormat } from './validators';

export default {
    name: 'Add',
    data: function() {
    return { 
        submitted: false,
        errors: {},
        entry: {
        name: '',
        email: '',
        },
    }
  },
  methods: {
    addEntry: function (name, email) {
        this.errors = {};
     if(required(name)) {
        this.errors.name= 'Name is required';
     } else if(nameFormat(name)) {
        this.errors.name= ' Name can have only characters and not more than 20';
     }
     if(required(email)) {
        this.errors.email= 'Emnail is required';
     } else if(emailFormat(email)) {
        this.errors.email= 'Invalide email';
     }
     
     if(!this.errors.name && !this.errors.email) {
     this.$store.dispatch('addEntry',{name: name, email: email});
     this.entry.name = '';
     this.entry.email = '';
     this.submitted= true;
     
     }
    },
    toggleSubmited: function () {
        this.submitted= false;
    }
  },

}
</script>

<style scoped>

#product-list-one{
    background: #f5f3e8;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    padding: 30px;
    width: 30%;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
}
.form-field {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
.error{
    color: red;
}
.button-style {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}
</style>