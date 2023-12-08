<template>
  <div class="login-container">
    <div class="login-box">
      <div class="box-title">
        <h1>ACEITE TÉCNICO</h1>
      </div>
      <h2 style="margin-bottom: 20px;">Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Usuário:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Senha:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

let username = "";
let password = "";


function login() {
  // Lógica de autenticação aqui
  const isAuthenticated = true;

  if (isAuthenticated) {
    router.push('/home');
  } else {
    
    alert("Login falhou");
  }

}

</script>

<style scoped>
.box-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
  width: 100%;
}

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  /* background-color: #87bdd8; Cor do céu ou água */
  background: linear-gradient(to bottom, #5f9cff, #feb47b);
}

.login-box {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
  text-align: center;
  height: 40vh;
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid rgb(97, 97, 97);
  border-radius: 20px;
}

button {
  background-color: #2e6f8e;
  /* Cor de destaque relacionada ao litoral */
  color: #fff;
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #1a4a5e;
  /* Cor de destaque relacionada ao litoral (mais escura) */
}
</style>
