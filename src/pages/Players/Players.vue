<template>
  <div class="wrapper">
    <a-drawer
      v-model:visible="visible"
      class="custom-class"
      style="color: red"
      title="Adicionar jogador"
      placement="right"
      size="small"
    >
      <a-spin :spinning="loading">
        <a-form :model="formState" @finish="onFinish">
          <a-form-item
            :name="['user', 'nome']"
            label="Nome do jogador"
            :rules="[{ required: true }]"
          >
            <a-input v-model:value="formState.user.nome" />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit">Submit</a-button>
          </a-form-item>
        </a-form>
      </a-spin>
    </a-drawer>

    <a-space direction="vertical">
      <a-button @click="visible = true">Adicionar jogador</a-button>
      <a-input-search
        v-model:value="search"
        placeholder="input search text"
        style="width: 200px"
      />
    </a-space>
    <a-list item-layout="horizontal" :data-source="filteredItems">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta :description="item.id">
            <template #title> {{ item.name }} </template>
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import Player from '../../modules/PlayerModule/Player';
import PlayerManager from '../../modules/PlayerModule/PlayerManager';
import message from 'ant-design-vue/lib/message';

const visible = ref(false);
const loading = ref(false);
const formState = reactive({
  user: {
    nome: '',
  },
});
const search = ref('');
const filteredItems = computed(() =>
  PlayerManager.players.filter(
    (player) =>
      search.value === '' ||
      player.name.toLowerCase().includes(search.value.toLowerCase())
  )
);

async function onFinish() {
  const player = new Player(formState.user.nome);
  player.distance = 0;
  loading.value = true;
  try {
    await PlayerManager.insertOne(player);
  } catch (e) {
    message.error(`Erro ao salvar o usuário`);
  }

  loading.value = false;
  formState.user = { nome: '' };
  visible.value = false;
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  min-height: 100vh;
  padding: 2rem;
  font-size: 10px;
  display: flex;
  justify-content: start;
  flex-flow: column;
}
</style>
