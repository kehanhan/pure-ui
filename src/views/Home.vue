<template>
  <NavBar />
  <div class="banner">
    <h1>Pure UI</h1>
    <h2>一个简洁、轻量的 Vue3.js UI 框架</h2>
    <p class="actions">
      <router-link to="/doc">Get Started</router-link>
      <a href="https://github.com/kehanhan/pure-ui">Github</a>
    </p>
  </div>
</template>

<script lang="ts">
import NavBar from "../components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style lang="scss" scoped>
$green: #42b983;
h1 {
  margin-top: 25vh;
  margin-bottom: 3vh;
}
h2 {
  font-size: 18px;
  margin-bottom: 5vh;
}
.actions {
  > a {
    color: white;
    background: $green;
    place-content: center;
    place-items: center;
    width: fit-content;
    height: 3em;
    display: inline-flex;
    border-radius: 9999px;
    letter-spacing: 0.05em;
    border: 1px solid #42b983;
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 10px;
    padding: 0.5rem 1.5rem;
    padding-left: 1.5rem;
    white-space: nowrap;
    font-weight: 700;

    &:last-child {
      margin-left: 1.5em;
      background-color: #f6f6f6;
      color: #4f5959;
      border-color: #f6f6f6;
    }
  }
}
</style>
