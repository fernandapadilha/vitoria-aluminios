<script setup>
import { reactive, ref } from 'vue';

const acessorios = ref([
    {
        id: 1, 
        nome: 'Cachorreira', 
        preco: 300, 
        descricao: '', 
        img: ''
    },
    {
        id: 2, 
        nome: 'Portão social', 
        preco: 500, 
        descricao: '',
        img: ''
    },
    {
        id: 3, 
        nome: 'Tampa ponta de lança', 
        preco: 30, 
        descricao: '',
        img: ''
    }
]);

const palito = ref([
    {   
        id: 1, 
        nome: 'Redondo', 
        preco: 60, 
        descricao: '',
        img: ''},
    {  
        id: 2, 
        nome: 'Quadrado', 
        preco: 49, 
        descricao: '',
        img: ''
    }
]);

const cor = ref([
    {
        id: 1,
        nome: 'Branco',
        preco: 3000,
        img: ''
    }
]);

</script>

<template>
    <form>
        <fieldset>
            <legend>Informações</legend>

            <div class="altura-comprimento">
                <input type="text" name="altura" id="altura" v-model="altura">
                <input type="text" name="comprimento" id="comprimento" v-model="comprimento">
            </div>

            <article>
                <h5>Tipo do palito:</h5>
                <section>
                    <div>
                        <select name="palito" id="palito" v-model="palito">
                            
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
        </fieldset>
    </form>
    
</template>

<style scoped></style>