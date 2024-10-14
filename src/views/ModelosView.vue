<script setup>
import { useRouter } from 'vue-router';
import { usarModeloStore } from '@/stores/modelo';

const modeloStore = usarModeloStore();
const router = useRouter();

function visualizar(id) {
  router.push(`/modelo/${id}`) //template string
};

const imageUrl = (img) => new URL(`@/assets/img/${img}`, import.meta.url).href;

</script>

<template>

  <h1 class="titulo-principal">Modelos de Portões</h1>

  <main class="modelos">

    <section class="modelos-produto" v-for="modelo in modeloStore.modelos" :key="modelo.id">
      <img class="modelos-produto-portao" :src="imageUrl" alt="portãoBranco" />
      <p>{{ modelo.nome }}</p>
      <img class="modelos-produto-avaliacao" src="@/assets/img/avaliacao.png" alt="iconeavaliacao">
      <p class="modelos-produto-preco">{{ modelo.preco }}</p>
      <button @click="visualizar(modelo.id)" class="botao">Comprar</button>
    </section>

  </main>


</template>

<style scoped>

.titulo-principal {
  text-align: center;
  font-family: var(--fonte-titulo);
  margin-top: 5rem;
}

.modelos {
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr)); */
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1.5rem;
  gap: 2rem;
}

.modelos-produto {
  display: grid;
  row-gap: .5rem;
  padding: 1rem;
  text-align: center;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  font-family: "Barlow Condensed", sans-serif;
  font-style: italic;
}

.modelos-produto-portao {
  height: 20rem;
  width: 95%;
  border-radius: 10px;
  margin: auto;
  display: block;
  object-fit: cover;
}

.modelos-produto p {
  margin: 0;
}

.modelos-produto-avaliacao {
  width: 8rem;
  max-height: 3rem;
  object-fit: cover;
  margin: auto;
  display: block;
}

.modelos-produto-preco {
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 800;
  font-style: italic;
}

.botao {
  width: 7.5rem;
  background-color: #A61B0F;
  color: white;
  border-radius: 3px;
  border: 3px;
}

@media (max-width: 950px) {
  .modelos {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 650px) {
  .modelos {
    grid-template-columns: 1fr;
  }
}

</style>