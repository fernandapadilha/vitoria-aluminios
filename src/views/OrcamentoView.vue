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
        preco: 300, 
        descricao: 'Dispositivo localizado na parte inferior do portão responsável por impedir a passagem de animais pelos vãos entre os tubos do portão', 
        img: 'portao-com-cachorreira.png',
        alt: 'Portão com cachorreira'
    },
    {
        id: 2, 
        nome: 'Portão social', 
        preco: 500, 
        descricao: 'Porta embutida localizada na porção inicial do portão para a passagem de pessoas',
        img: 'portaocinco.jpg',
        alt: 'Portão com portão social'
    },
    {
        id: 3, 
        nome: 'Tampa ponta de lança', 
        preco: 30, 
        descricao: 'Ponta em formato do lança localizada no segmento superior de cada tubo do portão',
        img: 'ponta-de-lanca.png',
        alt: 'Tampa ponta de lança'
    }
]);

</script>

<template>
    <form class="form">
        <fieldset>
            <h1 class="form-titulo">Orçamento</h1>

            <div class="altura-comprimento">
                <input class="form-control" type="text" name="altura" id="altura" placeholder="Altura" v-model="altura">
                <input class="form-control" type="text" name="comprimento" id="comprimento" placeholder="Comprimento" v-model="comprimento">
            </div>

            <SelecaoTubo :tubos="tubos" /> 
            
            <SelecaoCor :cores="cores" />

            <SelecaoAcessorio :acessorios="acessorios" />

            <div class="div-botao">
                <button type="button" class="btn btn-lg btn-block botao">Confirmar orçamento</button>
            </div>

        </fieldset>
    </form>
    
</template>

<style scoped>

    .form {
        display: grid;
        justify-content: center;
    }

    .form fieldset {
        width: 90vw;
        padding: 3rem 0;
    }

    .altura-comprimento {
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 1rem;
    }    

    .altura-comprimento input {
        margin-top: 3rem;
        padding: .6rem 1rem;
    }

    .div-botao {
        display: grid;
        margin-top: 3rem;
    }

    .botao {
        background-color: var(--cor-cinza-2);
        color: var(--cor-branco);
        box-shadow: 2px 2px 3px 3px var(--cor-branco);
    }

    @media(max-width: 630px) {
        .altura-comprimento {
            grid-template-columns: auto;
        }
    }

</style>