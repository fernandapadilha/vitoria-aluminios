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

function formatarPreco(preco) {
  return `R$ ${preco.toFixed(2).replace('.', ',')}`
}

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

</script>

<template>
    <form class="formulario">
        <fieldset>
            <h1>Orçamento</h1>

            <h5>Informe os dados sobre o portão para que possamos calcular o preço do serviço:</h5>

            <div class="formulario-medidas">
                <input class="form-control" type="text" name="altura" id="altura" placeholder="Altura" v-model="infoPortao.altura">
                <input class="form-control" type="text" name="comprimento" id="comprimento" placeholder="Comprimento" v-model="infoPortao.comprimento">
            </div>

            <article class="campo-informacao">
                <h5>Tipo do tubo:</h5>
                <section class="campo-selecao">
                    <div>
                        <select name="tubos" id="tubos" v-model="infoPortao.tuboSelecionado">
                            <option v-for="tubo in portao.tubos" :key="tubo.id" :value="tubo">{{ tubo.nome }}</option>
                        </select>
                        
                        <div class="descricao-produto" v-if="infoPortao.tuboSelecionado.descricao">
                            <p>{{ infoPortao.tuboSelecionado.descricao }}</p>
                            <p>Valor: {{ infoPortao.tuboSelecionado.precoAprox }}</p>
                        </div> 
                    </div>
                            
                    <div v-if="infoPortao.tuboSelecionado.img">
                        <img :src="imageUrlTB" :alt="infoPortao.tuboSelecionado.alt">
                    </div>
                </section>
            </article>

            <article class="campo-informacao">
                <h5>Cor:</h5>
                <section class="campo-selecao">
                    <div>
                        <select class="form-select" name="cores" id="cores" v-model="infoPortao.corSelecionada">
                            <option v-for="cor in portao.cores" :key="cor.id" :value="cor">{{ cor.nome }}</option>
                        </select>
                        <div class="descricao-produto" v-if="infoPortao.corSelecionada.descricao">
                            <p>{{ infoPortao.corSelecionada.descricao }}</p>
                        </div>
                    </div>

                    <div v-if="infoPortao.corSelecionada.img">
                        <img :src="imageUrlCR" :alt="infoPortao.corSelecionada.alt" />
                    </div>
                </section>
            </article>

            <section class="campo-selecao-acessorio">
                <template v-for="acessorio in portao.acessorios" :key="acessorio.id">
                    <section>
                        <div class="campo-selecionar">
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

            <div class="formulario-botao">
                <button @click.prevent="verificacao" class="btn btn-lg btn-block">Confirmar orçamento</button>
            </div>

            <BlocoOrcamento :infoPortao="infoPortao"/>
            <!-- <BlocoOrcamento :infoPortao="infoPortao" v-if="mostrarOrcamento"/> -->

        </fieldset>
    </form>
    
</template>

<style scoped>

    .formulario {
        display: grid;
        justify-content: center;
    }

    .formulario fieldset {
        width: 90vw;
        padding: 3rem 0;
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

    .formulario-botao {
        display: grid;
        margin-top: 3rem;
    }

    .formulario-botao button {
        background-color: var(--cor-principal);
        color: var(--cor-branco);
        box-shadow: 2px 2px 3px 3px var(--cor-sombra);
    }

    .campo-informacao {
        margin: 3rem 0;
    }

    .campo-selecao {
        display: grid;
        grid-template-columns: 2.5fr 1fr;
        column-gap: 1rem;
        height: 10rem;
        color: var(--cor-preto);
    }

    .campo-selecao > div {
        background-color: var(--cor-branco);
        border: 1px solid var(--cor-branco);
        box-shadow: 2px 2px 3px 3px var(--cor-sombra);
        max-height: 10rem;
    }

    .campo-selecao div select {
        width: 100%;
        padding: .6rem 1rem;
        background-color: var(--cor-branco);
        border: none;
    }

    .campo-selecao > div, .campo-selecao div select, .campo-selecao div img {
        border-radius: 10px;
    }

    .campo-selecao-acessorio {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: start;
        gap: 1rem;
    }

    .campo-selecao-acessorio > section {
        display: grid;
        align-items: center;
        background-color: var(--cor-branco);
        color: var(--cor-preto);
        border: 1px solid var(--cor-branco);
        box-shadow: 2px 2px 3px 3px var(--cor-sombra);
        min-height: 20rem;
    }

    .campo-selecao-acessorio > section, .campo-acessorio img {
        border-radius: 10px;
    }

    .campo-selecao-acessorio > section > div {
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

    .descricao-produto {
      padding: 1rem;
    }

    .campo-selecao > div > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .campo-acessorio p {
        padding: 0.5rem 0;
    }

    .campo-acessorio img {
        width: 100%;
        height: 50%;
        object-fit: cover;
    }

    @media (max-width: 500px) {
      .campo-selecao {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
      }
    }

    @media(max-width: 630px) {
        .formulario-medidas {
            grid-template-columns: auto;
        }
    }

</style>
