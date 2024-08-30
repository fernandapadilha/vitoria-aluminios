<script setup>
defineProps(["tubos", "tuboSelecionado", "cores", "acessorios"]);

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
                <img class="img-selecao" :src="tuboSelecionado.img" :alt="tuboSelecionado.alt">
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