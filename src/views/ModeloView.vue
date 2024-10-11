<script setup>
import { ref, onMounted } from 'vue';
import { usarModeloStore } from '@/stores/modelo';

const props = defineProps(['id']);
const modelo = ref({});
const modeloStore = usarModeloStore();

onMounted(() => {
    modelo.value = modeloStore.pegarModeloPorId(props.id)
});
</script>

<template>

    <h1>Detalhes do produto - {{ id }}</h1>
    
    <h2>Nome: {{ modelo.nome }}</h2>
    <h2>Preço: {{ modelo.preco }}</h2>
</template>