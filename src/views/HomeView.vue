<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { RouterLink } from 'vue-router';

const user = {
  name: 'Username',
  photo: '@/assets/user-photo.jpg',
  email: 'JXgkS@example.com',
  // Outras informações do usuário
}
</script>

<template>
  <Header />

  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title class="teal lighten-1 white--text">
              Dados do Usuário
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="user.name" label="Nome"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="user.email" label="E-mail"></v-text-field>
                  </v-col>
                </v-row>
                <v-btn type="submit" color="teal">Salvar</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>

  <Footer />
</template>

<style scoped>
.teal {
  background-color: #00796b; /* Cor principal */
  color: #121111; /* Cor do texto */
}

.teal--text {
  color: #00796b; /* Cor do texto em destaque */
  
}

.lighten-1 {
  background-color: #b2dfdb; /* Cor mais clara para realce */
}
</style>
