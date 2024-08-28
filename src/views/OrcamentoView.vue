<script setup>
import { ref } from 'vue';

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

const palitos = ref([
    {   
        id: 1, 
        nome: 'Redondo', 
        preco: 60, 
        descricao: 'ghfffyu',
        img: '../img/tubo-redondo-branco.png',
        alt: ''
    },
    {  
        id: 2, 
        nome: 'Quadrado', 
        preco: 49, 
        descricao: 'tgyfytgt',
        img: '../img/tubo-quadrado-branco.png',
        alt: ''
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

const palitoSelecionado = ref({
    id: "", 
    nome: "", 
    preco: 0, 
    descricao: "", 
    img: "",
    alt: '',
})

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
                        <select name="palitoS" id="palitoS" v-model="palitoSelecionado">
                            <option v-for="palito in palitos" :key="palito.id" :value="palito">{{ palito.nome }}</option>
                        </select>
                        <div v-if="palitoSelecionado.descricao">
                            <p>{{ palitoSelecionado.descricao }}</p>
                            <p>Valor: {{ palitoSelecionado.preco }}</p>
                        </div> 
                    </div>
                   
                    <div v-if="palitoSelecionado.img">
                        <img src="{{ palitoSelecionado.img }}" alt="{{ palitoSelecionado.alt }}">
                    </div>
                </section>
            </article>

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
        </fieldset>
    </form>
    
</template>

<style scoped>

    

</style>