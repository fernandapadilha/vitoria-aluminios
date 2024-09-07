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
        descricao: 'ghfffyu',
        img: 'tubo-redondo-branco.png',
        alt: 'jhxdjhdjdjhn'
    },
    {  
        id: 2, 
        nome: 'Quadrado', 
        preco: 49, 
        descricao: 'tgyfytgt',
        img: 'tubo-quadrado-branco.png',
        alt: 'hdfshsfhjfjjff'
    }
]);

const cores = ref([
    {
        id: 1,
        nome: 'Branco',
        descricao: 'descrição branco',
        img: 'tubo-quadrado-branco.png',
        alt: 'gsaghgdsdsa'
    },
    {
        id: 2,
        nome: 'Preto',
        descricao: 'descrição preto',
        img: 'tubo-quadrado-branco.png',
        alt: 'jhfdkdshfkhjsdf'
    }
]);

const acessorios = ref([
    {
        id: 1, 
        nome: 'Cachorreira', 
        preco: 300, 
        descricao: 'kjsdhdsfhdd', 
        img: 'tubo-quadrado-branco.png',
        alt: 'dsfdsffddfs'
    },
    {
        id: 2, 
        nome: 'Portão social', 
        preco: 500, 
        descricao: 'dsvsdfvsdfdsf',
        img: 'tubo-quadrado-branco.png',
        alt: 'dsffddfs'
    },
    {
        id: 3, 
        nome: 'Tampa ponta de lança', 
        preco: 30, 
        descricao: 'esfsdfsdffds',
        img: 'tubo-quadrado-branco.png',
        alt: 'sdsfsdfds'
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

    @media(max-width: 630px) {
        .altura-comprimento {
            grid-template-columns: auto;
        }
    }

</style>