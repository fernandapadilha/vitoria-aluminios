<script setup>
import { ref } from 'vue'
import SelecaoTubo from '../components/SelecaoTubo.vue'
import SelecaoCor from '../components/SelecaoCor.vue'
import SelecaoAcessorio from '../components/SelecaoAcessorio.vue'
import BlocoOrcamento from '@/components/BlocoOrcamento.vue'

const mostrarOrcamento = ref(false)
function componenteOrcamento() {
    mostrarOrcamento.value = !mostrarOrcamento.value
}

</script>

<template>
    <form class="formulario">
        <fieldset>
            <h1>Orçamento</h1>

            <h5>Informe os dados sobre o portão para que possamos calcular o preço do serviço:</h5>

            <div class="formulario-medidas">
                <input class="form-control" type="text" name="altura" id="altura" placeholder="Altura" v-model="altura">
                <input class="form-control" type="text" name="comprimento" id="comprimento" placeholder="Comprimento" v-model="comprimento">
            </div>

            <SelecaoTubo/> 
            
            <SelecaoCor/>

            <SelecaoAcessorio/>

            <div class="formulario-botao">
                <button @click.prevent="componenteOrcamento" class="btn btn-lg btn-block">Confirmar orçamento</button>
            </div>

            <BlocoOrcamento v-if="mostrarOrcamento"/>

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

    @media(max-width: 630px) {
        .formulario-medidas {
            grid-template-columns: auto;
        }
    }

</style>
