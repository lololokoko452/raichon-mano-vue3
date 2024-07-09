<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateToDetail(tail) {
    router.push(`/detail/${tail}`)
}

const props = defineProps({
  amiibo: Object
})
</script>

<template>
  <section class="middle">
    <img :src="amiibo.image" style="max-width: 270px; max-height: 380px"  @click="navigateToDetail(amiibo.tail)"/>
    <header>
      <h2>{{ amiibo.character }}</h2>
    </header>
    <p>{{ amiibo.gameSeries }}</p>
  </section>
</template>

<style scoped>

</style>
