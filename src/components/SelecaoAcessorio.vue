<script setup>

import { computed, ref } from 'vue';
defineProps({
    acessorios: Object,
});

const acessorioSelecionado = ref([]);

// const imageUrl = computed(
//     () => new URL(`../assets/img/${acessorioSelecionado.value.img}`, import.meta.url).href
// );

</script>

<template>

    <article class="campo-informacao">
        <h5>Acessório:</h5>
        
        <section class="campo-selecao">
            <template v-for="acessorio in acessorios" :key="acessorio.id">
                <input type="checkbox" :value="acessorio.id" v-model="acessorioSelecionado"/>
                {{ acessorio.nome }} 
            </template>
        </section>

        <!-- {{ acessorioSelecionado }} -->
    </article>

</template>

<style scoped>



</style>