<template>
  <div class="app">
    <Header />
    <div class="app__content">
      <router-view />
    </div>
    <div class="app__footer">
      <div>
        <h2>
          <router-link
            to="/"
          >
            Gromka.tech
          </router-link>
        </h2>
        <p>
          123 123 делаем web-приложения на заказ
          и развиваем свои сервисы
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/HeaderComp.vue';
</script>

<style lang="scss" scoped>
.app {
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__content {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  &__footer {
    width: 100%;
    color: $color-white;
    background-color: $color-brand;
    padding: 1.1rem 0 1.3rem 0;
    display: flex;
    justify-content: center;
    & h2 {
      font-size: 2rem;
      font-weight: $font-bold;
      & a {
        text-decoration: none;
        color: $color-white;
        &:active {
          color: $color-white;
        }
        &:visited {
          color: $color-white;
        }
        &:hover {
          color: $color-white;
        }
      }
      @include layout-aspect-mobile {
        font-size: 1.2rem;
      }
    }
    &>div {
      @include layout-aspect-mobile {
        width: 92%;
      }
    }
    @include layout-aspect-mobile {
      font-size: 0.8rem;
    }
  }
}
</style>
