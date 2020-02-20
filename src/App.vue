<template>
  <div id="app">
  <div class="header">
  <div class="link-group">
    <router-link class="link-style" to="/list">List</router-link>
  </div>
  <div class="link-group">
     <router-link class="link-style" to="/add">Add</router-link>
  </div>
  </div>   
  <div>
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
import { store } from './store/store';

export default {
  name: 'app'
}
store.subscribe((mutation, state) => {
	// Store the state object as a JSON string
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