<script setup>
  import { ref, computed } from 'vue'
  import { useAmiiboStore } from '@/stores/amiiboStore'
  import { useRouter } from 'vue-router'

  const amiiboStore = useAmiiboStore()

  const currentPage = ref(1)
  const pageSize = 10

  const router = useRouter()

  const amiibos = computed(() => {
      const startIndex = (currentPage.value - 1) * pageSize
      return amiiboStore.amiibos.slice(startIndex, startIndex + pageSize)
  })

  const totalPages = computed(() => Math.ceil(amiiboStore.amiibos.length / pageSize))

  function navigateToDetail(tail) {
    router.push(`/detail/${tail}`)
  }

  function nextPage() {
      if (currentPage.value == totalPages.value) return
      currentPage.value++
  }

  function prevPage() {
      if (currentPage.value == 1) return
      currentPage.value--
  }

  if (!amiiboStore.amiibos.length) {
      amiiboStore.fetchAmiibos()
  }
</script>

<template>
  <!-- Main -->
  <section id="main">
    <div class="container">

      <!-- Content -->
      <article class="box post">
        <header>
          <h2>Ma Collection (10 par 10)</h2>
          <p>Page {{ currentPage }}/{{ totalPages }}</p>
        </header>
        <div>
          <table>
            <thead>
              <tr>
                <th>Character</th>
                <th>Game Series</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="amiibo in amiibos" :key="amiibo.tail">
                <td>{{ amiibo.character }}</td>
                <td>{{ amiibo.gameSeries }}</td>
                <td><button @click="navigateToDetail(amiibo.tail)">Voir</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <button @click="prevPage" v-if="currentPage > 1">Page précédente</button>
        <button @click="nextPage" v-if="currentPage < totalPages">Page suivante</button>
      </article>

    </div>
  </section>
</template>

<style scoped>
</style>
