<script setup>
import { computed, ref } from 'vue';
defineProps({
    cores: Array
});

const corSelecionada = ref({
    id: '',
    nome: '',
    descricao: '',
    img: '',
    alt: ''
});

const imageUrl = computed(
    () => new URL(`../assets/img/${corSelecionada.value.img}`, import.meta.url).href
);
</script>

<template>
    <article class="campo-informacao">
        <h5>Tipo de cor:</h5>
        <section class="campo-selecao">
            <div>
                <select name="cores" id="cores" v-model="corSelecionada">
                    <option v-for="cor in cores" :key="cor.id" :value="cor">{{ cor.nome }}</option>
                </select>
                <div class="descricao-produto" v-if="corSelecionada.descricao">
                    <p>{{ corSelecionada.descricao }}</p>
                </div> 
            </div>
                    
            <div v-if="corSelecionada.img">
                <img class="img-selecao" :src="imageUrl" :alt="corSelecionada.alt">
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
    }

    .campo-selecao > div {
        background-color: var(--cor-cinza-1);
        border: 1px solid var(--cor-preto);
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

</style>