<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: null
  },
  subtitle: {
    type: String,
    default: null
  },
  desc: {
    type: String,
    default: null
  },
  image: {
    type: String,
    default: null
  },
  imageAlt: {
    type: String,
    default: 'Hero Image'
  }
})
</script>

<template>
  <section class="container text-left flex flex-row">
    <div class="content w-2/3 order-1">
      <h1 v-if="title" class="leading-tight text-[32px] md:text-[48px] lg:text-[56px]">
        {{ title }}
      </h1>

      <div v-if="subtitle" class="leading-tight text-[32px] md:text-[48px] lg:text-[56px]">
        {{ subtitle }}
      </div>
      <div v-if="desc" class="text-lg">
        {{ desc }}
      </div>
    </div>
    <div class="hero-img flex-grow-1 order-2 min-h-full">
      <div class="hero-img-wrap flex justify-center items-center w-full h-full">
        <div class="hero-img-bg z-1 opacity-80 transition-opacity duration-1000 ease" />
        <NuxtImg
          v-if="image"
          class="max-h-320 max-w-320"
          :src="image"
          :alt="imageAlt"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>