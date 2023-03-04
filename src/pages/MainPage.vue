<template>
  <div class="main">
    <div class="main__search">
      <input
        v-model="searchValue"
        class="main__search-input"
        placeholder="Найдите нужный раздел"
      >
      <div class="main__menu">
        <router-link
          v-for="menuItem in menuItems"
          :key="menuItem.id"
          :to="menuItem.id"
          class="main__menu-item"
        >
          {{ menuItem.menuTitle }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import data from '@/assets/data.json';

const defaultMenuItems = [...data.menuItems];
const searchValue = ref('');
const menuItems = computed(() => defaultMenuItems.filter((item) => {
  const menuTitle = item.menuTitle.toLowerCase();
  const searchValueLower = searchValue.value.toLowerCase();

  return menuTitle.includes(searchValueLower);
}));

</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  &__search {
    width: 120vh;
    position: relative;
    height: 18rem;
    @include layout-aspect-tablet {
      width: 75%;
    }
    @include layout-aspect-mobile {
      width: 92%;
    }
  }
  &__search-input {
    width: 100%;
    border: 1px solid $color-brand;
    padding: 1rem;
    border-radius: 2rem;
    font-size: 1rem;
    background-color: $color-white;
  }
  &__menu {
    position: absolute;
    width: 90%;
    left: 5%;
    padding: 0.1rem 1.2rem;
    border: 1px solid $color-brand;
    border-top: none;
    @include layout-aspect-mobile {
      left: 7%;
      width: 86%;
    }
  }
  &__menu-item {
    display: block;
    color: $color-black;
    text-decoration: none;
    padding: 1rem 0;
    margin: 0.3rem 0;
    &:active {
      color: $color-black;
    }
    &:visited {
      color: $color-black;
    }
    &:hover {
      text-decoration: underline;
      color: $color-brand;
    }
  }
}
</style>
