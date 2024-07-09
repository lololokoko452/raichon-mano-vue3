<script setup>
</script>

<template class="homepage is-preload">
  <div id="page-wrapper">
    <!-- Header -->
    <section id="header">
      <!-- Logo -->
      <h1>AmiiVue</h1>
      <!-- Nav -->
      <nav id="nav">
        <ul>
          <li><router-link exact-active-class="current" to="/">Home</router-link></li>
          <li><router-link exact-active-class="current" to="/list">Liste Amiibo</router-link></li>
        </ul>
      </nav>
    </section>

    <!-- Router View -->
    <router-view></router-view>

    <!-- Footer -->
    <section id="footer">
      <div class="container">
        <div class="row">                        
          <div class="col-12">
            <!-- Copyright -->
            <div id="copyright">
              <ul class="links">
                <li>&copy;AmiiVue ~ 2024 </li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>
