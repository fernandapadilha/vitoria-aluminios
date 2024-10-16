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
                <ul v-for="(informacao, index) in modelo.descricao" :key="index">
                    <li>{{ informacao }}</li>
                </ul>
            </section>
            
        </section>
    </main>
    

</template>

<style scoped>

    * {
        margin: 0;
    }

    main {
        display: grid;
        justify-items: center;
        padding: 2rem 0;
    }

    .secao-compra {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        width: 80%;
    }

    .foto-portao {
        display: grid;
        align-items: center;
        width: 100%;
    }

    .bloco-informacao {
       padding: 1rem; 

       & h3 {
            padding: .8rem 0;
       }

       & h6 {
            padding: .5rem 0;
       }
    }

    .bloco-informacao > div {
        display: grid;
        grid-template-columns: 2rem auto;

        & p {
            display: grid;
            align-items: center;
            width: auto;
        }

        & img {
            width: 8rem;
            max-height: 3rem;
            object-fit: cover; 
        }
    }

    .bloco-informacao > ul {
        
        & li {
            list-style-type: disc;
        }
        
    }
</style>