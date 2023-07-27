<script setup lang="ts">
import { MySearchInput } from '@kotice/lit-web-components-sandbox'
import { MyDragItem, MyDropArea } from '@kotice/lit-web-components-sandbox'
</script>

<template>
  <div class="App">
    <h1>@kotice/lit-web-components-sandbox-vue</h1>
    <h2 class="heading">🌏 Components</h2>
    <div class="container">
      <p class="label">my-search-input</p>
      <div class="content">
        <my-search-input />
      </div>
    </div>
    <div class="container">
      <p class="label">my-drop-area / my-drag-item</p>
      <div class="content">
        <div class="dnd-box">
          <p class="dnd-box-label">Box A</p>
          <my-drop-area>
            <my-drag-item class="dnd-card dnd-card-large">Item 1</my-drag-item>
            <my-drag-item class="dnd-card dnd-card-large">Item 2</my-drag-item>
            <my-drag-item class="dnd-card dnd-card-large">Item 3</my-drag-item>
            <my-drag-item class="dnd-card dnd-card-large">Item 4</my-drag-item>
          </my-drop-area>
        </div>
        <div class="dnd-box">
          <p class="dnd-box-label">Box B</p>
          <my-drop-area>
            <my-drag-item class="dnd-card">Item 5</my-drag-item>
            <my-drag-item class="dnd-card">Item 6</my-drag-item>
            <my-drag-item class="dnd-card">Item 7</my-drag-item>
            <my-drag-item class="dnd-card">Item 8</my-drag-item>
          </my-drop-area>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.App {
  padding: 16px;
}

.heading {
  margin: 16px 0;
  line-height: 2.5;
  border-bottom: thin solid #ccc;
}

.playground {
  color: #242424;
  background-color: rgba(255, 255, 255, 0.87);
  padding: 8px 0;
}

.container {
  min-height: 64px;
  margin: 0 8px 16px;
}

.label {
  padding: 4px;
  color: #000;
  background: #ccc;
  border-radius: 4px;
}

.content {
  display: flex;
  gap: 16px;
  padding: 8px;
}

.dnd-box {
  flex: 1;
  padding: 16px;
  border: thin solid lightgrey;
}

.dnd-box-label {
  text-align: center;
  margin-bottom: 16px;
  color: #ccc;
}

.dnd-card {
  display: flex;
  align-items: center;
  width: 240px;
  height: 48px;
  padding: 8px 16px;
  border-radius: 6px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  background: aliceblue;
  color: #222;
}

.dnd-card:not(:first-of-type) {
  margin-top: 8px;
}

.dnd-card-large {
  width: 320px;
  height: 80px;
  border-radius: 0px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  background: lightyellow
}
</style>
