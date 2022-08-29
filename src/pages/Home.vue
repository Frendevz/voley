<template>
  <div class="wrapper">
    <div class="container">
      <div class="title">Jogando agora</div>
      <div class="teams">
        <div class="teamA">0</div>
        <div class="teamB">12</div>
      </div>
      <div class="actions">
        <button>Ver times</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background: #111;
  width: 100vw;
  min-height: 100vh;
  display: grid;
  place-items: center;

  .container {
    display: flex;
    flex-flow: column;
    gap: 20px;
    .title {
      font-weight: bold;
      font-size: 1.2em;
    }

    .teams {
      display: flex;
      background: #222;
      padding: 1rem;
      justify-content: space-between;
      border-radius: 4px;
      font-size: 2rem;
      font-weight: bolder;
    }

    .actions {
      button {
        padding: 5px 10px;
        width: 100%;
      }
    }
  }
}
</style>
