<script setup>
import { ref } from 'vue';
import SelecaoTubo from '../components/SelecaoTubo.vue';
import SelecaoCor from '../components/SelecaoCor.vue';
import SelecaoAcessorio from '../components/SelecaoAcessorio.vue';

const tubos = ref([
    {   
        id: 1, 
        nome: 'Redondo', 
        preco: 60, 
        descricao: 'Tubo para portão formato 3x4 redondo',
        img: 'tubo-redondo-branco.png',
        alt: 'Tubo redondo branco'
    },
    {  
        id: 2, 
        nome: 'Quadrado', 
        preco: 49, 
        descricao: 'Tubo para portão formato 12x25 quadrado',
        img: 'tubo-quadrado-branco.png',
        alt: 'Tubo quadrado branco'
    }
]);

const cores = ref([
    {
        id: 1,
        nome: 'Branco',
        descricao: 'Tubo para portão de cor branca',
        img: 'tubo-quadrado-branco.png',
        alt: 'Tubo quadrado branco'
    },
    {
        id: 2,
        nome: 'Preto',
        descricao: 'Tubo para portão de cor preta',
        img: 'tubo-quadrado-preto.png',
        alt: 'Tubo quadrado preto'
    }
]);

const acessorios = ref([
    {
        id: 1, 
        nome: 'Cachorreira', 
        preco: 650, 
        descricao: 'Dispositivo localizado na parte inferior do portão responsável por impedir a passagem de animais pelos vãos entre os tubos do portão', 
        img: 'cachorreira.png',
        alt: 'Portão com cachorreira'
    },
    {
        id: 2, 
        nome: 'Portão social', 
        preco: 500, 
        descricao: 'Porta embutida localizada na porção inicial do portão para a passagem de pessoas',
        img: 'portao-social.png',
        alt: 'Portão com portão social'
    },
    {
        id: 3, 
        nome: 'Tampa ponta de lança', 
        preco: 30, 
        descricao: 'Ponta em formato do lança localizada no segmento superior de cada tubo do portão',
        img: 'tampa-lanca.png',
        alt: 'Tampa ponta de lança'
    }
]);

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

            <SelecaoTubo :tubos="tubos" /> 
            
            <SelecaoCor :cores="cores" />

            <SelecaoAcessorio :acessorios="acessorios" />

            <div class="formulario-botao">
                <button type="button" class="btn btn-lg btn-block">Confirmar orçamento</button>
            </div>

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
        box-shadow: 2px 2px 3px 3px var(--cor-branco);
    }

    @media(max-width: 630px) {
        .formulario-medidas {
            grid-template-columns: auto;
        }
    }

</style>