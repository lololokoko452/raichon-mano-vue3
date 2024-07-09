<script setup>
    import { onMounted, computed } from 'vue'
    import { useAmiiboStore } from '@/stores/amiiboStore'
    import AmiiboCard from './AmiiboCard.vue'

    const amiiboStore = useAmiiboStore()

    onMounted(async () => {
        if (!amiiboStore.amiibos.length) {
            await amiiboStore.fetchAmiibos()
        }
    })

    const randomAmiibos = computed(() => amiiboStore.randomAmiibos)
</script>

<template>
  <div>
    <!-- Banner -->
    <section id="banner">
      <header>
        <h2>Hey.Bienvenue sur ma collection</h2>
      </header>
    </section>

    <!-- Intro -->
    <section id="intro" class="container">
      <div class="row">
        <div class="col-4 col-12-medium" v-for="amiibo in randomAmiibos" :key="amiibo.tail">
            <AmiiboCard :amiibo="amiibo" />
        </div>
      </div>
      <footer>
        <ul class="actions">
          <router-link to="/list" class="button large">Liste complète</router-link>
        </ul>
      </footer>
    </section>
  </div>
</template>

<style scoped>

</style>
