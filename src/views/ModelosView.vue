<script setup>

import img1 from "@/assets/img/portaodezesete.jpg"
import img2 from "@/assets/img/portaoquinze.jpg"
import img3 from "@/assets/img/portaodezoito.jpg"
import img4 from "@/assets/img/portaonove.jpg"
import img5 from "@/assets/img/portaoum.jpg"
import OrcamentoView from "./OrcamentoView.vue"
import router from "@/router"
const produtos = [
  {
    id: 1,
    nome: "Perfil Estrutural do Portão branco de Alumínio",
    preco: "R$2500,00",
    img: img1
  },
  {
    id: 2,
    nome: "Perfil Estrutural do Portão branco de Alumínio",
    preco: "R$1500,00",
    img: img2
  },
  {
    id: 3,
    nome: "Perfil Estrutural do Portão branco de Alumínio",
    preco: "R$4500,00",
    img: img3
  },
  {
    id: 4,
    nome: "Perfil Estrutural do Portão preto de Alumínio",
    preco: "R$500,00",
    img: img4
  },
  {
    id: 5,
    nome: "Perfil Estrutural do Portão preto de Alumínio",
    preco: "R$1200,00",
    img: img5
  },
]

function comprar(id) {
  alert("você foi redirecionado para orçamentos")
  router.push(`/OrcamentoView/${{id}}`)
}

</script>

<template>

  <h1 class="titulo-principal">Modelos de Portões</h1>

  <main class="grid-models">

    <section class="models-products" v-for="produto in produtos" :key="produto.id">
      <img class="foto-portao" :src="produto.img" alt="portaobranco" />
      <p>{{ produto.nome}}</p>
      <img class="avaliacao" src="@/assets/img/avaliacao.png" alt="iconeavaliacao">
      <p class="p">{{produto.preco}}</p>
      <button @click="comprar(produto.id)" class="button">Comprar</button>
    </section>
  </main>


</template>

<style scoped>

.titulo-principal {
  text-align: center;
  font-family: var(--fonte-titulo);
  margin-top: 5rem;
}

.grid-models {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  padding: 5rem;
  gap: 2rem;
}

.models-products {
  /* display: grid; */
  row-gap: .5rem;
  padding: 1rem;
  text-align: center;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4%;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 500;
  font-style: italic;
}

.foto-portao {
  height: 20rem;
  width: 95%;
  border-radius: 10px;
  margin: auto;
  display: block;
  object-fit: cover;
}

.models-products p {
  margin: 0;
}

.avaliacao {
  width: 8rem;
  max-height: 3rem;
  object-fit: cover;
  margin: auto;
  display: block;
}

.p {
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 800;
  font-style: italic;
}
.button {
  width: 7.5rem;
  background-color: #A61B0F;
  color: white;
  border-radius: 3px;
  border: 3px;

}
</style>