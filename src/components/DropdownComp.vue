<template>
  <div
    class="dropdown"
    v-click-outside="closeDropdown"
  >
    <button class="dropdown__toggle" @click="toggleDropdown">
      <span>Войти через телеграм</span>
      <img src="@/assets/images/auth.svg/">
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

function closeDropdown() {
  isOpen.value = false;
}

function selectOption(option) {
  selectedOption.value = option;
  closeDropdown();
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown__toggle {
  padding: 0.8vh 1.4vh;
  border: 2px solid $color-brand;
  border-radius: 1.6vh;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: $color-brand;
  color: $color-white;
  font-size: 1.2rem;
  &>img {
    padding: 1vh;
    margin-left: 0.6vh;
    width: 5vh;
    background-color: $color-brand;
    border-radius: 20%;
  }
  &:hover {
    background-color: $color-white;
    color: $color-brand;
  }
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
