<template>
  <div>
    <nav class="nav-bar">
      <div class="logo">
        <router-link to="/">Pure UI</router-link>
      </div>
      <div class="toggle" @click="toggle"><Icon name="sidebar"></Icon></div>

      <div class="menu">
        <ul class="links">
          <li>
            <router-link to="/doc">文档</router-link>
          </li>
          <li><a href="https://github.com/kehanhan/pure-ui">Github</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { inject, Ref } from "vue";

const menuVisible = inject<Ref<boolean>>("menuVisible")!;
const toggle = () => (menuVisible.value = !menuVisible.value);
</script>

<style lang="scss" scoped>
@media (max-width: 800px) {
  .logo {
    display: none;
  }
  .toggle {
    display: block !important;
  }
}
.nav-bar {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  height: 3.6rem;
  background-color: #fff;
  border-bottom: 1px solid #eaecef;
  padding: 0.7rem 1.5rem;
  line-height: 2.2rem;
  display: flex;
  justify-content: space-between;

  .logo {
    font-size: 1.3rem;
    font-weight: 500;
    color: #2c3e50;
    margin-right: auto;
  }
  .toggle {
    display: none;
  }
  .links {
    display: flex;
    padding-left: 1.5rem;
    background-color: #fff;
    white-space: nowrap;
    font-size: 0.9rem;

    > li {
      margin: 0 1em;

      a {
        line-height: 1.4rem;
        font-weight: 500;
      }
      > a:hover {
        padding-bottom: 4px;
        border-bottom: 2px solid #40b57f;
      }
    }
  }
}
</style>
