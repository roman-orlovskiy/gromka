<template>
  <div>
    <div class="header">
      <div class="header__content">
        <div class="header__logo-wrapper">
          <router-link
            to="/"
            class="header__main-link"
          >
            <div class="header__logo">
              <span>G</span>
            </div>
            <h1>Gromka.tech</h1>
          </router-link>
          <div
            v-if="breadcrumb"
            class="header__breadcrumbs"
          >
            <div>
              &nbsp;/&nbsp;
            </div>
            <div>
              {{ breadcrumb }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header__indent" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import data from '@/assets/data.json';
import getObjectById from '@/utils/getObjectById';

const { menuItems } = data;
const route = useRoute();
const breadcrumb = computed(() => getObjectById(menuItems, route.name).breadcrumbTitle);
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3.3rem;
  background-color: $color-white;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 5px 5px 0px rgba(255,103,91,0.5);
  -moz-box-shadow: 0px 5px 5px 0px rgba(255,103,91,0.5);
  box-shadow: 0px 5px 5px 0px rgba(255,103,91,0.5);
  z-index: 1000;
  &__content {
    width: 120vh;
    @include layout-aspect-tablet {
      width: 92%;
    }
  }
  &__logo-wrapper {
    display: flex;
    align-items: center;
  }
  &__logo {
    width: 2.2rem;
    height: 2.2rem;
    margin-right: 0.4rem;
    background-color: $color-brand;
    border-radius: 50%;
    color: $color-white;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &:active {
      color: $color-white;
    }
    &>span {
      position: relative;
      top: -3%;
    }
  }
  &__main-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: $color-black;
    &:active {
      color: $color-black;
    }
    &:visited {
      color: $color-black;
    }
    &:hover {
      color: $color-black;
    }
  }
  &__indent {
    height: 3.3rem;
  }
  &__breadcrumbs {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
