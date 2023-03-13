<template>
  <div class="dropdown">
    <button class="dropdown__toggle" @click="toggleDropdown">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M12 1.75c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm0 2c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0 6.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25zm0 4.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"/>
      </svg>
      {{ selectedOption }}
    </button>
    <ul v-show="isOpen" class="dropdown__list">
      <li
        v-for="(option, index) in options" :key="index"
        @click="selectOption(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const selectedOption = ref('');
const options = ['Option 1', 'Option 2', 'Option 3'];

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectOption(option) {
  selectedOption.value = option;
  isOpen.value = false;
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown__toggle {
  padding: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
}

.dropdown__list {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  padding: 0;
  list-style: none;
  border: 1px solid #ccc;
  background-color: #fff;
}

.dropdown__list li {
  padding: 8px;
  cursor: pointer;
}

.dropdown__list li:hover {
  background-color: #f2f2f2;
}
</style>
