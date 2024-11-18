<script setup>
import { defineProps, ref, computed, onMounted } from 'vue'

const props = defineProps(['infoPortao'])

const precos = ref({
    precoPadrao: 150,
    precoPadraoPortaoSocial: 100,
    tuboPreco: 0,
    precoRegua: 0,
})

const precoFinal = computed(() => (precos.value.precoPadrao + 
precos.value.tuboPreco + precos.value.precoRegua) * 2)

function calculadoraOrcamento() {
    const h = Number(props.infoPortao.altura)
    const l = Number(props.infoPortao.comprimento)
    const tubo = props.infoPortao.tuboSelecionado
    const cor = props.infoPortao.corSelecionada
    const acessorios = props.infoPortao.acessoriosSelecionados

    // CÁLCULO DOS MATERIAIS
    // Tubo
    precos.value.tuboPreco = Math.ceil(5 * (h * l) / 3)
    if (tubo.id == 1) precos.value.tuboPreco *= cor.precoTuboRedondo
    else if (tubo.id == 2) precos.value.tuboPreco *= cor.precoTuboQuadrado

    // Régua
    if (h > 2.4) precos.value.precoRegua = Math.ceil((2 * h + 4 * l) / 6) * cor.precoRegua
    else precos.value.precoRegua = Math.ceil((2 * h + 3 * l) / 6) * cor.precoRegua
    
    // Cálculo dos acessórios

    // Cachorreira
    if (acessorios.find((acessory) => acessory.id == 1)) {
        precos.value.tuboPreco = (Math.ceil(5 * l * h / 3) + l)
        if (tubo.id == 1) precos.value.tuboPreco *= cor.precoTuboRedondo
        else if (tubo.id == 2) precos.value.tuboPreco *= cor.precoTuboQuadrado

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

const mostrarAcessorios = ref(false)
function amostragemAcessorio() {
    if (props.infoPortao.acessoriosSelecionados.length > 0) mostrarAcessorios.value = true
    else mostrarAcessorios.value = false
}

onMounted(() => {
    calculadoraOrcamento()
    amostragemAcessorio()
})

function formatarDado(dado) {
    return `${dado.toFixed(1).replace('.', ',')} m`
}

function formatarPreco(preco) {
  return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

</script>

<template>
    <main>
        <article>
            <section class="secao-cabecalho">
                <h1>Confirmação do Orçamento</h1>
                <svg @click="$emit('fechar')" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x icone-fechamento" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </section>
            
        
            <section class="orcamento-informacoes">
                <p>Altura: {{ formatarDado(props.infoPortao.altura) }}</p>
                <p>Comprimento: {{ formatarDado(props.infoPortao.comprimento) }}</p>
                <p>Tipo do tubo: {{ props.infoPortao.tuboSelecionado.nome }}</p>
                <p>Cor: {{ props.infoPortao.corSelecionada.nome }}</p>
                <div class="div-acessorios" v-if="mostrarAcessorios">
                    <h3>Acessórios</h3>
                    <ol>
                        <li v-for="acessorio in props.infoPortao.acessoriosSelecionados" :key="acessorio.id">
                            {{ acessorio.nome }}
                        </li>
                    </ol>
                </div>
            </section>

            <section class="orcamento-precos">
                <h2>Preço final: {{ formatarPreco(precoFinal) }}</h2>
            </section>

            <section class="orcamento-botoes">
                <button @click.prevent="$emit('recarregar')" class="botao-confirmacao">Confirmar Compra</button>
                <button @click.prevent="$emit('recarregar')" class="botao-cancelamento">Cancelar Compra</button>
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
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 2px 2px 3px 3px var(--cor-sombra);
        background-color: var(--cor-branco-secao);
    }

    .secao-cabecalho {
        display: flex;
        justify-content: space-between;
    }

    .icone-fechamento {
        width: 2rem;
        height: 2rem;
    }

    .icone-fechamento:hover {
        color: var(--cor-principal);
        transition: .3s;
    }

    .orcamento-informacoes, .orcamento-precos {
        & p {
            padding: .5rem 0;
        }
    }

    .div-acessorios h3 {
        font-size: 1.5rem;
    }

    .div-acessorios ol {
        counter-reset: mynum;
    }

    .div-acessorios ol li::before {
        content: counter(mynum) ": ";
        counter-increment: mynum;
        font-weight: bold;
    }

    .orcamento-botoes {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        padding: 1rem 0;

        & .botao-confirmacao {
            background-color: var(--cor-confirmacao);
        }

        & .botao-cancelamento {
            background-color: var(--cor-principal);
        }
    }

    .botao-confirmacao, .botao-cancelamento {
        padding: 1rem 2rem;
        border: none;
        border-radius: 10px;
        color: var(--cor-branco-secao);
    }

    @media (max-width: 480px) {
        article {
            width: 90vw;
            padding: 1rem;
        }

        .secao-cabecalho h1 {
            font-size: 1.5rem;
        }

        .orcamento-informacoes p{
            padding: .1rem;
        }

        .orcamento-precos h2 {
            font-size: 1.3rem;
        }

        .orcamento-botoes {
            grid-template-columns: 1fr;

            & button {
                padding: .5rem;
            }
        }
    }

</style>