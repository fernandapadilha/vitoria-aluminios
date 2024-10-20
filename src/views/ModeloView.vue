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

            <section class="bloco-titulo">
                <h2>{{ modelo.nome }}</h2>
                <div>
                    <p>4,7</p> 
                    <img src="@/assets/img/avaliacao.png" alt="avaliação">
                </div>
            </section>

            <section class="bloco-imagem">
                <img :src="modelo.img" alt="portãoBranco">
            </section>

            <section class="bloco-informacao">
                <h3>Média de Preço: {{ modelo.preco }}</h3>
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
        width: 90%;
    }

    .bloco-imagem {
        display: grid;
        align-items: center;

        & img {
            width: 100%;
            border-radius: 10px;
        }
    }

    .bloco-titulo {
        padding: 1rem 0;

        & div {
            display: grid;
            grid-template-columns: 2rem auto;
            align-items: center;

            & p {
                display: grid;
                align-items: center;
            }

            & img {
                width: 8rem;
                max-height: 2rem;
                object-fit: cover; 
            }
        }
    }

    .bloco-informacao {
        display: grid;
        padding: 1rem 0; 

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

    @media (min-width: 790px) {
        .secao-compra {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .bloco-imagem {
            grid-row: 1 / 3;
        }

        .bloco-titulo, .bloco-informacao {
            padding: 1rem;
        }
    }
</style>