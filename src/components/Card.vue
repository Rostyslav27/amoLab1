
<template>
  <section class="card" :class="{'card--active': isActive}">
    <header class="card__header" @click="isActive = !isActive">{{ title }}</header>
    <main class="card__body">
      <div class="card__inner">
        <slot></slot>
      </div>
    </main>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ 
  title: string 
}>();

const isActive = ref<boolean>(false);

</script>

<style lang="scss" scoped>
.card {
  border: 3px solid #00346E;
  border-radius: 20px;
  
  margin-bottom: 40px;
  max-width: 700px;
  background-color: #fff;
  width: 100%;

  &__header {
    margin: -1px -1px -1px -1px;
    padding: 20px 40px;
    border-radius: 18px;
    font-weight: 700;
    font-size: 25px;
    background-color: #00346E;
    color: #fff;
    cursor: pointer;
    transition: border-radius 0.5s, opacity 0.3s;

    &:hover {
      opacity: 0.75;
    }

    &:active {
      transition: border-radius 0.5s, opacity 0.07s;
      opacity: 0.66;
    }
  }

  &--active &__header {
    border-radius: 18px 18px 0 0;
  }

  &__body {
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.7s;
  }

  &--active &__body {
    max-height: 1000px;
  }

  &__inner {
    padding: 10px;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
  }
}
</style>
