<script setup>

import { ref, computed } from 'vue'
import { usarDadosPortao } from '@/stores/orcamento'
import BlocoOrcamento from '@/components/BlocoOrcamento.vue'

const portao = usarDadosPortao()

const infoPortao = ref({
    altura: '',
    comprimento: '',
    tuboSelecionado: {},
    corSelecionada: {},
    acessoriosSelecionados: []
})

const imageUrlAC = (img) => new URL(`../assets/img/${img}`, import.meta.url).href
const imageUrlCR = computed(
  () => new URL(`../assets/img/${infoPortao.value.corSelecionada.img}`, import.meta.url).href
)
const imageUrlTB = computed(
  () => new URL(`../assets/img/${infoPortao.value.tuboSelecionado.img}`, import.meta.url).href
)

function formatarDado(dado) {
    const valorNumerico = parseFloat(dado);
    return isNaN(valorNumerico) ? '' : valorNumerico.toFixed(1).replace('.', ',');
}

// Computeds para altura e comprimento formatados
const alturaFormatada = computed({
  get() {
    return formatarDado(infoPortao.value.altura)
  },
  set(value) {
    infoPortao.value.altura = parseFloat(value.replace(',', '.')) || 0
  }
})

const comprimentoFormatado = computed({
  get() {
    return formatarDado(infoPortao.value.comprimento)
  },
  set(value) {
    infoPortao.value.comprimento = parseFloat(value.replace(',', '.')) || 0
  }
})

const fraseErro = ref('')
const mostrarOrcamento = ref(false)
function componenteOrcamento() {
    mostrarOrcamento.value = !mostrarOrcamento.value
}

function verificacao() {
    let soma = 0

    // Verificação da altura
    if (infoPortao.value.altura == 0 || infoPortao.value.altura == '') fraseErro.value = 'Altura é um campo obrigatório'
    else if (infoPortao.value.altura < 1) fraseErro.value = 'O valor mínimo para a altura é de 1 metro'
    else if (infoPortao.value.altura > 5) fraseErro.value = 'O valor máximo para a altura é de 5 metros'
    else soma++

    // Verificação do comprimento
    if (infoPortao.value.comprimento == 0 || infoPortao.value.comprimento == '') fraseErro.value = 'Comprimento é um campo obrigatório'
    else if (infoPortao.value.comprimento < 1) fraseErro.value = 'O valor mínimo para o comprimento é de 1 metro'
    else if (infoPortao.value.comprimento > 10) fraseErro.value = 'O valor máximo para o comprimento é de 10 metros'
    else if (infoPortao.value.comprimento < infoPortao.value.altura) fraseErro.value = 'A medida de comprimento deve ser maior que a altura'
    else soma++

    // Verificação do tubo e cor
    if (!infoPortao.value.tuboSelecionado || Object.keys(infoPortao.value.tuboSelecionado).length === 0) {
        fraseErro.value = 'Tipo de tubo é um campo obrigatório' 
    } else soma++
    
    if (!infoPortao.value.corSelecionada || Object.keys(infoPortao.value.corSelecionada).length === 0) { 
        fraseErro.value = 'Cor é um campo obrigatório'
    } else soma++

    // Verificação final
    if (soma === 4) {
        componenteOrcamento()
    } else {
        alert(fraseErro.value)
    }

}

function recarregarPagina() {
    window.location.reload()
}

</script>

<template>

    <form class="formulario">
        <fieldset>

            <h1>Orçamento</h1>

            <h5>Informe os dados sobre o portão para que possamos calcular o preço do serviço:</h5>

            <div class="formulario-medidas">
                <input class="form-control" type="text" name="altura" id="altura" placeholder="Altura" v-model="alturaFormatada">
                <input class="form-control" type="text" name="comprimento" id="comprimento" placeholder="Comprimento" v-model="comprimentoFormatado">
            </div>

            <article class="campo-informacao">

                <h5>Tipo do tubo:</h5>

                <section class="campo-selecao">

                    <div class="campo-dados">

                        <select class="form-select" name="tubos" id="tubos" v-model="infoPortao.tuboSelecionado">
                            <option v-for="tubo in portao.tubos" :key="tubo.id" :value="tubo">{{ tubo.nome }}</option>
                        </select>
                        
                        <div class="descricao-produto" v-if="infoPortao.tuboSelecionado.descricao">
                            <p>{{ infoPortao.tuboSelecionado.descricao }}</p>
                            <p>Valor: {{ infoPortao.tuboSelecionado.precoAprox }}</p>
                        </div> 

                    </div>
                            
                    <div class="campo-ilustracao" v-if="infoPortao.tuboSelecionado.img">
                        <img :src="imageUrlTB" :alt="infoPortao.tuboSelecionado.alt">
                    </div>

                </section>

            </article>

            <article class="campo-informacao">

                <h5>Cor:</h5>

                <section class="campo-selecao">

                    <div class="campo-dados">

                        <select class="form-select" name="cores" id="cores" v-model="infoPortao.corSelecionada">
                            <option v-for="cor in portao.cores" :key="cor.id" :value="cor">{{ cor.nome }}</option>
                        </select>

                        <div class="descricao-produto" v-if="infoPortao.corSelecionada.descricao">
                            <p>{{ infoPortao.corSelecionada.descricao }}</p>
                        </div>

                    </div>

                    <div class="campo-ilustracao" v-if="infoPortao.corSelecionada.img">
                        <img :src="imageUrlCR" :alt="infoPortao.corSelecionada.alt" />
                    </div>

                </section>

            </article>

            <section class="bloco-selecao-acessorio">

                <h5>Elementos adicionais:</h5>

                <section>
                    <template v-for="acessorio in portao.acessorios" :key="acessorio.id">
                        <section>

                            <div class="campo-selecionar-acessorio">
                                <input
                                class="form-check-input"
                                type="checkbox"
                                :value="acessorio"
                                v-model="infoPortao.acessoriosSelecionados"
                                />
                                <p>{{ acessorio.nome }}</p>
                            </div>

                            <div class="campo-acessorio">
                                <p>{{ acessorio.descricao }}</p>
                                <p>Valor: {{ acessorio.precoAprox }}</p>
                                <img :src="imageUrlAC(acessorio.img)" :alt="acessorio.alt" />
                            </div>

                        </section>
                    </template>
                </section>

            </section>

            <div class="formulario-botao">
                <button @click.prevent="verificacao" class="btn btn-lg btn-block">Confirmar orçamento</button>
            </div>

            <BlocoOrcamento :infoPortao="infoPortao" @recarregar="recarregarPagina" @fechar="componenteOrcamento" v-if="mostrarOrcamento"/>

        </fieldset>
    </form>
    
</template>

<style scoped>

* {
    margin: 0;
    padding: 0;
}

.formulario {
    display: grid;
    justify-content: center;
}

.formulario fieldset {
    width: 90vw;
    padding: 3rem 0;

    & h5 {
        font-size: 1rem;
        font-weight: 400;
    }
}

.formulario-medidas {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 1rem;
}    

.formulario-medidas input {
    margin-top: 3rem;
    padding: .6rem 1rem;
}

.campo-informacao {
    margin: 3rem 0;

    & h5 {
        padding: .5rem 0;
    }
}

.campo-selecao {
    display: grid;
    grid-template-columns: 2.5fr 1fr;
    border-radius: 10px;
    box-shadow:
      0 0 8px 1px var(--cor-sombra),
      4px 4px 8px 1px var(--cor-sombra);
}

.campo-dados {
    background-color: var(--cor-cinza-complementar);
    color: var(--cor-preto);
    border-radius: 10px 0 0 10px;

    & select {
        width: 100%;
        padding: .6rem 1rem;
        color: var(--cor-preto);
        background-color: var(--cor-cinza-complementar);
        border: none;
    }
}

.descricao-produto {
    padding: 1rem;
}

.campo-ilustracao {
    max-height: 10rem;

    & img {
        border-radius: 0 10px 10px 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.bloco-selecao-acessorio h5 {
    padding: .5rem 0;
}

.bloco-selecao-acessorio > section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;

    & section {
        display: grid;
        row-gap: 1rem;
        padding: 2rem;
        align-items: center;
        background-color: var(--cor-cinza-complementar);
        color: var(--cor-preto);
        border-radius: 10px;
        box-shadow:
            0 0 8px 1px var(--cor-sombra),
            4px 4px 8px 1px var(--cor-sombra);
        min-height: 20rem;
    }
}

.campo-selecionar-acessorio {
    display: grid;
    justify-content: center;

    & input {
        position: absolute;
        width: 20px;
        height: 20px;
    }
}

.campo-acessorio {
    & p {
        padding: 0.5rem 0;
    }

    & img {
        width: 100%;
        height: 50%;
        border-radius: 10px;
        object-fit: cover;
    }
}

.formulario-botao {
    display: grid;
    margin-top: 3rem;

    & button {
        padding: .8rem 0;
        border-radius: 10px;
        background-color: var(--cor-principal);
        color: var(--cor-branco);
        box-shadow:
            0 0 8px 1px var(--cor-sombra),
            4px 4px 8px 1px var(--cor-sombra);
    }

    & button:hover {
        border: 2px solid var(--cor-principal);
        background-color: var(--cor-branco-secao);
        color: var(--cor-principal);
        transition: .1s;
    }
}

@media (max-width: 940px) {
    .bloco-selecao-acessorio > section {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}

@media(max-width: 630px) {
    .formulario-medidas {
        grid-template-columns: auto;
    }
}

@media (max-width: 500px) {
    .campo-selecao {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .campo-dados {
        border-radius: 10px 10px 0 0;
    }

    .campo-ilustracao {
        border-radius: 0 0 10px 10px;

        & img {
            border-radius: 0 0 10px 10px;
        }
    }
}

</style>
