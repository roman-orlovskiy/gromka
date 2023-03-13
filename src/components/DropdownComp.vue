<template>
  <div class="dropdown">
    <button class="dropdown__toggle" @click="toggleDropdown">{{ selectedOption }}</button>
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
