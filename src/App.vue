<template>
  <img alt="Vue logo" src="./assets/digime.png" id="dgm-logo"/>
  <img alt="Vue logo" src="./assets/logo.png">
  <ul id="router-list">
    <li value="task1">
      <router-link to="/task1">Task 1</router-link>
    </li>
    <li value="task2">
      <router-link to="/task2">Task 2</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#dgm-logo {
  width: 150px;
  position: fixed;
  top: 10px;
  left: 10px;
}
#router-list {
  list-style: none;
  padding: 0;
}
#router-list > li {
  display: inline;
  padding: 0 50px;
  cursor: pointer;
}
#router-list > li:hover {
  color: rgb(78, 78, 78);
  text-decoration: underline;
}
</style>
