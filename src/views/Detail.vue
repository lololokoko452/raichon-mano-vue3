<script setup>
    import { useRoute } from 'vue-router'
    import { useAmiiboStore } from '@/stores/amiiboStore'

    const route = useRoute()
    const amiiboStore = useAmiiboStore()

    const tail = route.params.tail

    const amiibo = amiiboStore.amiibos.find(a => a.tail === tail)
</script>

<template>
  <!-- Main -->
  <section id="main">
    <div class="container">
      <div class="row">
        <div class="col-4 col-12-medium">
          <!-- Sidebar -->
          <section class="box">
            <header>
              <h3>Infos</h3>
            </header>
            <p>
              amiiboSeries: <b>{{ amiibo.amiiboSeries }}</b><br />
              character: {{ amiibo.character }}<br />
              gameSeries: {{ amiibo.gameSeries }}<br />
              type: {{ amiibo.type }}
            </p>
          </section>
          
          <section class="box">
            <header>
              <h3>Dates sorties</h3>
            </header>
            <ul class="divided">
              <li>au: {{ amiibo.release.au }}</li>
              <li>eu: {{ amiibo.release.eu }}</li>
              <!-- Ajoutez d'autres dates de sortie selon votre besoin -->
            </ul>
          </section>
        </div>

        <div class="col-8 col-12-medium imp-medium">
          <!-- Content -->
          <article class="box post">
            <a href="#" class="featured"><img :src="amiibo.image" alt="" /></a>
            <header>
              <h2>{{ amiibo.name }}</h2>
              <p>{{ amiibo.type }}</p>
            </header>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
