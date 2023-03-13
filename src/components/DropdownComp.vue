<template>
  <div
    class="dropdown"
    v-click-outside="closeDropdown"
  >
    <button class="dropdown__toggle" @click="toggleDropdown">
      <span>Войти через телеграм</span>
      <img src="@/assets/images/auth.svg/">
    </button>
    <div v-show="isOpen" class="dropdown__item">
      Hello
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function closeDropdown() {
  isOpen.value = false;
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

.dropdown__item {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 1.2vh;
  border: 2px solid $color-brand;
  background-color: $color-white;
  box-shadow: 0 0 10px rgba(255,103,91,0.5);
  padding: 0.8vh 1.4vh;
  border-radius: 1.6vh;
}
</style>
