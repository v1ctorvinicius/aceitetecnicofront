<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-img src="@/assets/logo.png" alt="Logo" max-height="40"></v-img>
      <v-toolbar-title>Aceite Técnico</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="(item, index) in navItems" :key="index" @click="$router.push(item)">
        {{ item }}
      </v-btn>
    </v-app-bar>
  </v-app>
</template>

<script setup lang="ts">
const navItems = ['home', 'navios', 'pedidos', 'documentos', 'login'];

</script>


<style scoped>
.v-app-bar {
  background-color: #2196f3 !important;
}

.v-img {
  max-height: 40px !important;
}

.v-toolbar-title {
  font-size: 1.5rem;
}

.v-btn {
  color: #ffffff !important;
  margin: 0 10px;
}
</style>

