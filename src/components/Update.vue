<template>
    <div id="entry-update-list">
        <h2>Upadate Entry </h2>
        <div class="list">
            <div class="list-item" v-for="(entry, index) in entrys" :key="entry">
                <div  v-if="!(updateIndex == index)">
                    <button title="Update" class="button-style" @click="updateEntry(entry.name, entry.email, index)">
                        <font-awesome-icon icon="edit" />
                    </button>
                    <span class="name">Name: {{ entry.name }}</span>
                    <span class="email">Email: {{ entry.email }}</span> 
                </div>
                <div v-if="update && (updateIndex == index)">
                    <form class="form" @submit.prevent="updateEnttryValues(entry.name, entry.email)" v-if="!submitted">
                        <div class="form-group">
                            <span class="error">*</span>
                            <label for="name">Name</label>
                            <input class="form-field" v-model="entry.name" type="text" id="name" name="name">
                            <div class="error" v-if="errors['name']" >
                                {{errors['name']}}
                            </div>
                        </div>
                        <div class="form-group">
                            <span class="error">*</span>
                            <label for="email">Email</label>
                            <input class="form-field" v-model="entry.email" type="text" id="email" name="email">
                            <div class="error" v-if="errors['email']" >
                                {{errors['email']}}
                            </div>
                        </div>
                        <button title="Done" class="button-style" type='submit'>
                            <font-awesome-icon icon="check-square" />
                        </button>
                    </form>
                    <div v-if="submitted"> 
                        <span class="success-message">Added entry successfully</span>
                        <button title="OK" class="button-style" v-on:click="toggleSubmited" >
                            <font-awesome-icon icon="thumbs-up" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';

import { required, emailFormat, nameFormat } from './validators';

export default {
    name: 'Upadte',
    data: function() {
        return { 
            update: false,
            submitted: false,
            errors: {},
            entry: {
            name: '',
            email: '',
            },
        updateIndex: null,
        preveousEntrys: [],
        }
    },
    computed: {
        entrys(){
            return this.$store.state.entrys;
        }, 
    },
    methods: {
        updateEntry: function(name, email, index) {
            this.entry.name= name;
            this.entry.email= email;
            this.updateIndex= index;
            this.update= true;
        },
        updateEnttryValues: function (name, email) {
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
                this.preveousEntrys = cloneDeep(this.$store.state.entrys);
                this.preveousEntrys[this.updateIndex].name= name;
                this.preveousEntrys[this.updateIndex].email= email;
                this.$store.dispatch('updateEnttrys', this.preveousEntrys);
                this.entry.name = '';
                this.entry.email = '';
                this.submitted= true;    
            }
        },
        toggleSubmited: function () {
            this.submitted= false;
            this.update= false;
            this.updateIndex= null;
            this.preveousEntrys= [];
        }
    }
}
</script>

<style scoped>
    #entry-update-list{
        background: #e8e0b4;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
        margin-bottom: 30px;
        padding: 10px 20px;
    }
    .list{
        padding: 0;
    }
    .list-item {
        margin-right: 10px;
        margin-top: 10px;
        padding: 15px;
        background: rgba(255,255,255,0.7);
    }
    .form-field {
        padding: 12px 20px;
        width: 85%;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
        margin-left: 10px;
        margin-right: 10px;
    }
    .error{
        color: red;
    }
    .email {
        font-weight: bold;
        color: #E8800C;
        margin-left: 10px;
    }
    .button-style {
        background-color: #4CAF50;
        color: white;
        font-weight: bold;
        padding: 10px 10px;
        margin: 0px 22px;
        border: none;
        cursor: pointer;
    }
    .button-style:hover {
         background-color: #1c7320;
    }
    .success-message {
        color: green;
    }
    .form {
        display: flex;
    }
    .form-group {
        width: 30%;
    }
</style>