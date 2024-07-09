<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  amiibo: Object
})
</script>

<template>
  <section class="middle">
    <img :src="amiibo.image" />
    <header>
      <h2>{{ amiibo.character }}</h2>
    </header>
    <p>{{ amiibo.gameSeries }}</p>
  </section>
</template>

<style scoped>

</style>
