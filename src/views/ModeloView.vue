<script setup>
import { ref, onMounted } from 'vue';
import { usarModeloStore } from '@/stores/modelo';

const props = defineProps(['id']);
const modelo = ref({});
const modeloStore = usarModeloStore();

onMounted(() => {
    modelo.value = modeloStore.pegarModeloPorId(props.id)
});

// const imageUrl = (img) => new URL(`@/assets/img/${img}`, import.meta.url).href;
</script>

<template>

    <main>
        <section class="secao-compra">
            <img class="foto-portao" :src="modelo.img" alt="portãoBranco">

            <section class="bloco-informacao">
                <h2>{{ modelo.nome }}</h2>
                <div>
                    <p>4,7</p>
                    <img src="@/assets/img/avaliacao.png" alt="avaliação">
                </div>
                <h3>Média de Preço: R$ 1.200,00</h3>

                <h6>O que você precisa saber sobre este produto</h6>
                <ul>
                    <li>Informação 1</li>
                    <li>Informação 2</li>
                    <li>Informação 3</li>
                </ul>
            </section>
            
        </section>
    </main>
    

</template>

<style scoped>
    main {
        display: grid;
        justify-items: center;
    }

    .secao-compra {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 80%;
    }

    .bloco-informacao {
        
    }
</style>