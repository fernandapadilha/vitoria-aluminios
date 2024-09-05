<script setup>
import { computed, ref } from 'vue';
defineProps({
    tubos: Object,
});

const tuboSelecionado = ref({
    id: "", 
    nome: "", 
    preco: 0, 
    descricao: "", 
    img: "",
    alt: ''
});

const imageUrl = computed(
    () => new URL(`../assets/img/${tuboSelecionado.value.img}`, import.meta.url).href
);

</script>

<template>

    <article class="campo-informacao">
        <h5>Tipo do tubo:</h5>
        <section class="campo-selecao">
            <div>
                <select name="tubos" id="tubos" v-model="tuboSelecionado">
                    <option v-for="tubo in tubos" :key="tubo.id" :value="tubo">{{ tubo.nome }}</option>
                </select>
                <div class="descricao-produto" v-if="tuboSelecionado.descricao">
                    <p>{{ tuboSelecionado.descricao }}</p>
                    <p>Valor: {{ tuboSelecionado.preco }}</p>
                </div> 
            </div>
                    
            <div v-if="tuboSelecionado.img">
                <img :src="imageUrl" :alt="tuboSelecionado.alt">
            </div>
        </section>
    </article>

</template>

<style scoped>

    .campo-informacao {
        margin-top: 3rem;
    }

    .campo-selecao {
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 10rem;
        color: var(--cor-preto);
    }

    .campo-selecao > div {
        background-color: var(--cor-cinza-1);
        border: 1px solid var(--cor-preto);
        max-height: 10rem;
    }

    .campo-selecao div select {
        width: 100%;
        padding: .6rem 1rem;
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

</style>