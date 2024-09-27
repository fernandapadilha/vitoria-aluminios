<script setup>

import { ref } from 'vue';
defineProps(['acessorios']);

const acessoriosSelecionados = ref([]);

const imageUrl = (img) => new URL(`../assets/img/${img}`, import.meta.url).href

function formatarPreco(preco) {
    return `R$ ${preco.toFixed(2).replace('.', ',')}`
}

</script>

<template>

    <article class="campo-informacao">
        <h5>Acessório:</h5>
        
        <section class="campo-selecao">
            <template v-for="acessorio in acessorios" :key="acessorio.id">
                <section>
                    <div class="campo-selecionar">
                        <input 
                            class="form-check-input"
                            type="checkbox" 
                            :value="acessorio" 
                            v-model="acessoriosSelecionados"
                        />
                        <p>{{ acessorio.nome }}</p>
                    </div>

                    <div class="campo-acessorio">
                        <p>{{ acessorio.descricao }}</p>
                        <p>Valor: {{ formatarPreco(acessorio.preco) }}</p>
                        <img :src="imageUrl(acessorio.img)" :alt="acessorio.alt">
                    </div>
                </section>
            </template>
        </section>

        <!-- {{ acessoriosSelecionados }} -->
          <!-- <div v-for="acessorio in acessoriosSelecionados" :key="acessorio.id">
            {{ acessorio.img }}
            <img :src="imageUrl" :alt="acessorio.alt">
          </div> -->
    </article>

</template>

<style scoped>

    p {
        margin: 0;
        padding: 0;
    }

    .campo-selecao {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: start;
        gap: 1rem;
    }

    .campo-selecao > section {
        display: grid;
        align-items: center;
        background-color: var(--cor-cinza-1);
        color: var(--cor-preto);
        border: 1px solid var(--cor-branco);
        box-shadow: 2px 2px 3px 3px var(--cor-branco);
        min-height: 20rem;
    }

    .campo-selecao > section, .campo-acessorio img {
        border-radius: 10px;
    }

    .campo-selecao > section > div {
        padding: 1rem 2rem;        
    }

    .campo-selecionar {
        display: grid;
        justify-content: center;
        align-items: center;
    }

    .campo-selecionar input {
        position: absolute;
        width: 20px;
        height: 20px;
    }

    .campo-acessorio p {
        padding: .5rem 0;
    }

    .campo-acessorio img {
        width: 100%;
        height: 50%;
        object-fit: cover;
    }

    @media(max-width: 960px) {
        .campo-selecao {
            grid-template-columns: 1fr;
        }
    }

</style>