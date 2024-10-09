<script setup>
import { computed, ref } from 'vue'
defineProps({
  cores: Array
})

const corSelecionada = ref({
  id: '',
  nome: '',
  descricao: '',
  img: '',
  alt: ''
})

const imageUrl = computed(
  () => new URL(`../assets/img/${corSelecionada.value.img}`, import.meta.url).href
)
</script>

<template>
  <article class="campo-informacao">
    <h5>Cor:</h5>
    <section class="campo-selecao">
      <div>
        <select class="form-select" name="cores" id="cores" v-model="corSelecionada">
          <option v-for="cor in cores" :key="cor.id" :value="cor">{{ cor.nome }}</option>
        </select>
        <div class="descricao-produto" v-if="corSelecionada.descricao">
          <p>{{ corSelecionada.descricao }}</p>
        </div>
      </div>

      <div v-if="corSelecionada.img">
        <img :src="imageUrl" :alt="corSelecionada.alt" />
      </div>
    </section>
  </article>
</template>

<style scoped>
.campo-informacao {
  height: 90vh;
}

.campo-selecao {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  height: 10rem;
  color: var(--cor-preto);
}

.campo-selecao > div {
  background-color: var(--cor-cinza-1);
  border: 1px solid var(--cor-branco);
  box-shadow: 2px 2px 3px 3px var(--cor-branco);
  max-height: 10rem;
}

.campo-selecao > div,
.campo-selecao div select,
.campo-selecao div img {
  border-radius: 10px;
}

.campo-selecao div select {
  width: 100%;
  padding: 0.6rem 1rem;
  background-color: var(--cor-cinza-1);
  border: none;
}

.descricao-produto {
  padding: 1rem;
}

.campo-selecao > div > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 500px) {
  .campo-selecao {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
</style>
