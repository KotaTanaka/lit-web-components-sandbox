<script setup lang="ts">
import { MySearchInput } from '@kotice/lit-web-components-sandbox'
</script>

<template>
  <div class="App">
    <h1>@kotice/lit-web-components-sandbox-vue</h1>
    <div class="logo-list">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <h2 className="heading">🌏 Components</h2>
    <my-search-input />
  </div>
</template>

<style scoped>
.App {
  padding: 16px;
}

.logo-list {
  margin: 8px 0;
}

.logo {
  height: 24px;
  padding: 8px;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 8px #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 8px #42b883aa);
}

.heading {
  margin: 16px 0;
  line-height: 2.5;
  border-bottom: thin solid #ccc;
}
</style>
