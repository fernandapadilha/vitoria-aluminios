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

function formatarPreco(preco) {
    return `R$ ${preco.toFixed(2).replace('.', ',')}`
}

</script>

<template>

    <article class="campo-informacao">
        <h5>Tipo do tubo:</h5>
        <section class="campo-selecao">
            <div>
                <select class="form-select" name="tubos" id="tubos" v-model="tuboSelecionado">
                    <option v-for="tubo in tubos" :key="tubo.id" :value="tubo">{{ tubo.nome }}</option>
                </select>
                
                <div class="descricao-produto" v-if="tuboSelecionado.descricao">
                    <p>{{ tuboSelecionado.descricao }}</p>
                    <p>Valor: {{ formatarPreco(tuboSelecionado.preco) }}</p>
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
        margin: 3rem 0;
    }

    .campo-selecao {
        display: grid;
        grid-template-columns: 2.5fr 1fr;
        column-gap: 1rem;
        height: 10rem;
        color: var(--cor-preto);
    }

    .campo-selecao > div {
        background-color: var(--cor-white);
        border: 1px solid var(--cor-white);
        box-shadow: 2px 2px 3px 3px var(--cor-branco);
        max-height: 10rem;
    }

    .campo-selecao > div, .campo-selecao div select, .campo-selecao div img {
        border-radius: 10px;
    }

    .campo-selecao div select {
        width: 100%;
        padding: .6rem 1rem;
        background-color: var(--cor-branco);
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