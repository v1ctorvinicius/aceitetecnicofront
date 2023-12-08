<template>
  <div class="outer-container">
    <div class="logo flex">
      <h1>ACEITE TÉCNICO</h1>

    </div>
    <div class="flex nav">
      <a href="">home</a>
      <a href="">documents</a>
      <a href="">piers</a>
      <a href="">norms</a>
    </div>
  </div>
</template>

<style scoped>
.outer-container {
  background-color: #303030;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 20vh;
  color: white;
}

.logo {
  width: 20vh;
  min-height: 15vh;
  padding: 1vh;
  justify-self: flex-start;
  border: 1px solid white;
  margin: 1vh;
}

.nav {
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-start;
}
.nav a {
  color: white;
  padding: 0 3vh;
  font-size: 1vw;
}

.flex{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>