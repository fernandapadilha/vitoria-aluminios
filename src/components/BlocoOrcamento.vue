<script setup>
import { defineProps, ref, computed, onMounted } from 'vue'

const props = defineProps(['infoPortao'])

const precos = ref({
    precoPadrao: 150,
    precoPadraoPortaoSocial: 100,
    tuboPreco: 0,
    precoRegua: 0,
    acessoriosPreco: 0,
})

const precoMateriais = computed(() => precos.value.precoPadrao + 
precos.value.tuboPreco + precos.value.precoRegua + precos.value.acessoriosPreco)

onMounted(() => {
    calculadoraOrcamento()
})

function calculadoraOrcamento() {
    const h = props.infoPortao.altura
    const l = props.infoPortao.comprimento
    const tubo = props.infoPortao.tuboSelecionado
    const cor = props.infoPortao.corSelecionada
    const acessorios = props.infoPortao.acessoriosSelecionados

    // CÁLCULO DOS MATERIAIS
    // Tubo
    precos.value.tuboPreco = Math.ceil(3 * (h * l) / 1.8)
    if (tubo.id == 1) precos.value.tuboPreco *= cor.precoTuboRedondo
    else if (tubo.id == 2) precos.value.tuboPreco *= cor.precoTuboQuadrado

    // Régua
    if (h > 2.4) precos.value.precoRegua = Math.ceil((2 * h + 4 * l) / 6) * cor.precoRegua
    else precos.value.precoRegua = Math.ceil((2 * h + 3 * l) / 6) * cor.precoRegua
    
    // Cálculo dos acessórios

    // Portão social
    if (acessorios.find((acessory) => acessory.id == 1)) {
        precos.value.acessoriosPreco += (h * cor.precoRegua) + (0.8 * cor.precoRegua) // À conferir
        precos.value.acessoriosPreco += precos.value.precoPadraoPortaoSocial
    }

    // Cachorreira
    if (acessorios.find((acessory) => acessory.id == 2)) {
        if (tubo.id == 1) precos.value.acessoriosPreco += (10 * (h * l) / 9) * cor.circletuboPreco
        else if (tubo.id == 2) precos.value.acessoriosPreco += (10 * (h * l) / 9) * cor.squaretuboPreco

        if (h <= 2.4) precos.value.acessoriosPreco += l * cor.precoRegua / 6
    }

    // Ponta de lança
    if (acessorios.find((acessory) => acessory.id == 3)) {
        precos.value.acessoriosPreco += (10 * (h * l) / 1.8) * cor.spearheadPrice
    }
}
</script>

<template>
    <main>
        <h1>Oi</h1>
        {{ precoMateriais }} <br>
        {{ precos.tuboPreco }} <br>
        {{ precos.precoRegua }}
    </main>
</template>

<style scoped>

</style>