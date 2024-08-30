<script setup>
import { ref } from 'vue';
import CampoSelecao from '../components/CampoSelecao.vue'

const acessorios = ref([
    {
        id: 1, 
        nome: 'Cachorreira', 
        preco: 300, 
        descricao: '', 
        img: '',
        alt: ''
    },
    {
        id: 2, 
        nome: 'Portão social', 
        preco: 500, 
        descricao: '',
        img: '',
        alt: ''
    },
    {
        id: 3, 
        nome: 'Tampa ponta de lança', 
        preco: 30, 
        descricao: '',
        img: '',
        alt: ''
    }
]);

const tubos = ref([
    {   
        id: 1, 
        nome: 'Redondo', 
        preco: 60, 
        descricao: 'ghfffyu',
        img: '../img/tubo-redondo-branco.png',
        alt: 'jhxdjhdjdjhn'
    },
    {  
        id: 2, 
        nome: 'Quadrado', 
        preco: 49, 
        descricao: 'tgyfytgt',
        img: '../img/tubo-quadrado-branco.png',
        alt: 'hdfshsfhjfjjff'
    }
]);

const cores = ref([
    {
        id: 1,
        nome: 'Branco',
        img: '',
        alt: ''
    },
    {
        id: 2,
        nome: 'Preto',
        img: '',
        alt: ''
    }
]);

const tuboSelecionado = ref({
    id: "", 
    nome: "", 
    preco: 0, 
    descricao: "", 
    img: "",
    alt: ''
});

</script>

<template>
    <form class="form">
        <fieldset>
            <h1 class="form-titulo">Orçamento</h1>

            <div class="altura-comprimento">
                <input type="text" name="altura" id="altura" placeholder="Altura" v-model="altura">
                <input type="text" name="comprimento" id="comprimento" placeholder="Comprimento" v-model="comprimento">
            </div>

            <CampoSelecao :tubos="tubos" :tuboSelecionados="tuboSelecionados" :cores="cores" :acessorios="acessorios"/>

            <!--
            <article>
                <h5>Tipo do palito:</h5>
                <section>
                    <div>
                        <select name="cores" id="cores" v-model="cores">
                            
                        </select>
                        <div>
                            <p>Informações adicionais</p>
                            <p>Valor: uhfdslk</p>
                        </div> 
                    </div>
                   
                    <div>
                        <img src="" alt="">
                    </div>
                </section>
            </article>

            <article>
                <h5>Tipo do palito:</h5>
                <section>
                    <div>
                        <select name="acessorios" id="acessorios" v-model="acessorios">
                            
                        </select>
                        <div>
                            <p>Informações adicionais</p>
                            <p>Valor: uhfdslk</p>
                        </div> 
                    </div>
                   
                    <div>
                        <img src="" alt="">
                    </div>
                </section>
            </article>
            -->
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
        border: 1px solid var(--cor-preto);
        border-radius: 10px;
    }

    

</style>