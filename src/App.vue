<template>
    <div id="app">
        <div class="header">
            <div class="link-group">
                <router-link class="link-style" to="/list" title="List">
                    <font-awesome-icon icon="list-ul" />
                </router-link>
            </div>
            <div class="link-group">
                <router-link class="link-style" to="/add" title="Add Entry">
                    <font-awesome-icon icon="user-plus" />
                </router-link>
            </div>
            <div class="link-group">
                <router-link class="link-style" to="/update" title="Update Entry">
                    <font-awesome-icon icon="edit" />
                </router-link>
            </div>
        </div>   
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { store } from './store/store';
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faEdit, faUserPlus, faCheckSquare, faThumbsUp, faListUl } from '@fortawesome/free-solid-svg-icons' 
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    library.add(faEdit)
    library.add(faUserPlus)
    library.add(faCheckSquare)
    library.add(faThumbsUp)
    library.add(faListUl)

    Vue.component('font-awesome-icon', FontAwesomeIcon)

    export default {
        name: 'app'
    }
    
store.subscribe((mutation, state) => {
	localStorage.setItem('store', JSON.stringify(state));
});
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    .header {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }
    .link-group {
        float: left;
    }
    .link-style {
        font-size: 20px;
        font-weight: bold;
        display: block;
        color: white;
        text-align: center;
        padding: 18px 20px;
        text-decoration: none;
    }
    .link-style:hover {
        background-color: #111;
    }
</style>