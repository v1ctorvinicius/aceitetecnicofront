<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <Header />

    <div class="main-container">
      <main class="main">
        <div class="item-container">
          <RouterLink to="/pedidos" class="main-item">
            Novo pedido de atracação
          </RouterLink>
        </div>
      </main>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.main-item {
  width: 100%;
  height: 5vh;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.main-item:hover {
  background-color: rgb(113, 126, 163);
}

.item-container {
  text-align: center;
  background-color: rgb(93, 111, 159);
}

.main-container {
  display: flex;
  justify-content: center;
  background-color: #828f92;
}

.main {
  background-color: rgb(34, 46, 67);
  margin: 4%;
  min-height: 35vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  padding: 5%;
}

.main label {
  color: white;
}

.main input {
  width: 20vw;
  height: 5vh;
}

@media screen and (max-width: 1000px) {
  .main {
    min-height: 55vh;
    width: 60vw;
  }
}
</style>