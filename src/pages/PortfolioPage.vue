<template>
  <div class="portfolio">
    <div
      v-for="card in portfolioList"
      :key="card.href"
      class="portfolio__card"
    >
      <a
        :href="card.href"
        target="_blank"
        class="portfolio__img"
      >
        <img
          :src="card.preview"
          alt=""
        >
      </a>
      <div class="portfolio__info">
        <div
          v-html="card.title"
          class="portfolio__title"
        />
        <div class="portfolio__description">
          <div
            v-html="getLabelHTML(labels[card.label], card)"
          />
          <div class="portfolio__labels">
            <a
              v-for="client in card.clients"
              :key="client"
              :href="card.href"
              target="_blank"
              class="portfolio__label"
            >
              {{ clients[client].name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from '@/assets/data.json';

const { portfolioList, clients, labels } = data;

function getLabelHTML(label, labelData) {
  const labelHTML = label.replace('__href__', labelData.href);

  return labelHTML;
}

</script>

<style lang="scss" scoped>
.portfolio {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  &__card {
    width: 120vh;
    display: flex;
    margin-bottom: 4vh;
    font-size: 2.6vh;
    height: 31vh;
    &:first-child {
      margin-top: 3vh;
    }
    @include layout-aspect-tablet {
      width: 92%;
      margin-bottom: 3vw;
      font-size: 2vw;
      height: 17vw;
      &:first-child {
        margin-top: 2vw;
      }
    }
    @include layout-aspect-mobile {
      width: 90%;
      font-size: 4.1vw;
      line-height: 1.3;
      height: auto;
      flex-direction: column;
    }
  }
  &__img {
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform .3s;
    border: 1px solid $color-brand;
    &:hover {
      transform: scale(1.05);
    }
    &>img {
      width: 100%;
      display: block;
    }
    @include layout-aspect-tablet {
      display: flex;
      align-items: center;
      width: 35%;
    }
    @include layout-aspect-mobile {
      width: 100%;
    }
  }
  &__info {
    width: 50%;
    border: 1px solid $color-brand;
    border-left: none;
    @include layout-aspect-tablet {
      width: 65%;
    }
    @include layout-aspect-mobile {
      width: 100%;
      border-top: none;
      border-left: 1px solid $color-brand;
    }
  }
  &__title {
    padding: 0.6rem 0.8rem;
    @include layout-aspect-tablet {
      padding: 1vw 1.2vw;
    }
    @include layout-aspect-mobile {
      padding: 2vw 3vw;
    }
  }
  &__description {
    padding: 0.6rem 0.8rem;
    border-top: 1px solid $color-black;
    @include layout-aspect-tablet {
      padding: 1vw 1.2vw;
    }
    @include layout-aspect-mobile {
      padding: 2vw 3vw;
    }
  }
  &__labels {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    @include layout-aspect-tablet {
      margin-top: 1.2vw;
    }
  }
  &__label {
    display: block;
    padding: 0.3rem 0.4rem 0.35rem 0.4rem;
    border: 1px solid $color-brand;
    background-color: $color-brand;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    margin-right: 0.3rem;
    text-decoration: none;
    color: $color-white;
    font-weight: $font-bold;
    &:hover {
      color: $color-brand;
      background-color: $color-white;
    }
    @include layout-aspect-tablet {
      font-size: 1.9vw;
    }
    @include layout-aspect-mobile {
      font-size: 4.6vw;
      padding: 0.5vw 2.4vw 0.7vw 2.4vw;
    }
  }
}
</style>
