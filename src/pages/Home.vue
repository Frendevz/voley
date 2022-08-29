<template>
  <div class="wrapper">
    <div class="container">
      <div class="actions-wrapper">
        <div class="actions">
          <div class="actions__item">Live</div>
          <div class="actions__item">Settings</div>
        </div>
      </div>
      <div class="title-wrapper">
        <div class="title">Jogando agora</div>
      </div>
      <div class="teams-wrapper">
        <div class="teams">
          <div class="teamA">0</div>
          <div class="teamB">12</div>
        </div>
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
  text-align: center;

  .container {
    grid-template-columns: 1fr;
    display: grid;
    grid-template-rows: auto 1fr 1fr;
    align-items: center;
    height: 100%;
    width: 100%;
    gap: 5rem;
    padding: 1rem;

    .actions {
      display: grid;
      justify-content: space-between;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      &__item {
        padding: 0.25rem 1rem;
        background: #333;
        font-size: 0.75em;
        border-radius: 4px;
      }
    }
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
