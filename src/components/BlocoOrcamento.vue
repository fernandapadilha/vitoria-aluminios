<script setup>
import { defineProps, ref, computed, onMounted } from 'vue'

const props = defineProps(['infoPortao'])

const precos = ref({
    precoPadrao: 150,
    precoPadraoPortaoSocial: 100,
    tuboPreco: 0,
    precoRegua: 0,
})

const precoMateriais = computed(() => precos.value.precoPadrao + 
precos.value.tuboPreco + precos.value.precoRegua)

onMounted(() => {
    calculadoraOrcamento()
})

function calculadoraOrcamento() {
    const h = Number(props.infoPortao.altura)
    const l = Number(props.infoPortao.comprimento)
    const tubo = props.infoPortao.tuboSelecionado
    const cor = props.infoPortao.corSelecionada
    const acessorios = props.infoPortao.acessoriosSelecionados

    // CÁLCULO DOS MATERIAIS
    // Tubo
    precos.value.tuboPreco = Math.ceil(3 * (h * l) / 1.8)
    if (tubo.id == 1) precos.value.tuboPreco *= cor.precoTuboRedondo
    else if (tubo.id == 2) precos.value.tuboPreco *= cor.precoTuboQuadrado

    // Régua
    if (h > 2.4) precos.value.precoRegua = Math.ceil((2 * h + 4 * l) / 6) * cor.precoRegua
    else precos.value.precoRegua = Math.ceil((2 * h + 3 * l) / 6) * cor.precoRegua
    
    // Cálculo dos acessórios

    // Cachorreira
    if (acessorios.find((acessory) => acessory.id == 1)) {
        precos.value.tuboPreco = 0
        if (tubo.id == 1) precos.value.tuboPreco = (Math.ceil(5 * l * h / 3) + l) * cor.precoTuboRedondo
        else if (tubo.id == 2) precos.value.tuboPreco = (Math.ceil(5 * l * h / 3) + l) * cor.precoTuboQuadrado

        if (h <= 2.4) precos.value.precoRegua += Math.ceil(l / 6) * cor.precoRegua
    }

    // Portão social
    if (acessorios.find((acessory) => acessory.id == 2)) {
        precos.value.precoRegua += Math.ceil((2 * h + 1.6) / 6) * cor.precoRegua
        precos.value.precoPadrao += precos.value.precoPadraoPortaoSocial
    }

    // Ponta de lança
    if (acessorios.find((acessory) => acessory.id == 3)) {
        precos.value.tuboPreco += l * 10 * cor.precoPontaDeLanca
    }
}
</script>

<template>
    <main>
        <article>
            <h1>Confirmação do Orçamento</h1>
        
            <section class="orcamento-informacoes">
                <p>Altura: {{ props.infoPortao.altura }}</p>
                <p>Comprimento: {{ props.infoPortao.comprimento }}</p>
                <p>Tipo do tubo: {{ props.infoPortao.tuboSelecionado }}</p>
                <p>Cor: {{ props.infoPortao.corSelecionada }}</p>
                <h3>Acessorios</h3>
                <ul v-for="acessorio in props.infoPortao.acessoriosSelecionados" :key="acessorio.id">
                    <li>{{ acessorio.nome }}</li>
                </ul>
            </section>

            <section class="orcamento-precos">
                <p>Preço dos materiais: {{ precoMateriais }}</p>
                <h2>Preço final:</h2>
            </section>

            <section class="orcamento-botoes">
                <button class="botao-confirmacao">Confirmar Compra</button>
                <button class="botao-cancelamento">Cancelar Compra</button>
            </section>
        </article>
    </main>
</template>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    main {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: grid;
        justify-content: center;
        align-items: center;
        
    }
    
    article {
        width: 70vw;
        padding: 5rem;
        border-radius: 15px;
        box-shadow: 2px 2px 3px 3px var(--cor-sombra);
        background-color: var(--cor-branco-secao);
    }
</style>