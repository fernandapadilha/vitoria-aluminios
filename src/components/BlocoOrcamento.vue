<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps(['infoPortao'])

function calculadoraOrcamento() {
    const h = props.gateDetails.height
    const l = props.gateDetails.lengthh
    const tube = props.gateDetails.tubeSelected
    const color = props.gateDetails.colorSelected
    const acessories = props.gateDetails.acessoriesSelected

    // CÁLCULO DOS MATERIAIS
    // Tubo
    localBudgetDetails.value.tubePrice = Math.ceil(3 * (h * l) / 1.8)
    if (tube.id == 1) localBudgetDetails.value.tubePrice *= color.circleTubePrice
    if (tube.id == 2) localBudgetDetails.value.tubePrice *= color.squareTubePrice

    // Régua
    localBudgetDetails.value.rulerPrice = h * color.rulerPrice / 6

    if (h > 2.4) localBudgetDetails.value.rulerPrice += (l * color.rulerPrice / 6) * 4
    else localBudgetDetails.value.rulerPrice += (l * color.rulerPrice / 6) * 3
    
    // Cálculo dos acessórios

    // Portão social
    if (acessories.find((acessory) => acessory.id == 1)) {
        localBudgetDetails.value.acessoriesPrice += (h * color.rulerPrice) + (0.8 * color.rulerPrice)
        localBudgetDetails.value.acessoriesPrice += localBudgetDetails.value.socialGateMandatoryPrice
    }

    // Cachorreira
    if (acessories.find((acessory) => acessory.id == 2)) {
        if (tube.id == 1) localBudgetDetails.value.acessoriesPrice += (10 * (h * l) / 9) * color.circleTubePrice
        else if (tube.id == 2) localBudgetDetails.value.acessoriesPrice += (10 * (h * l) / 9) * color.squareTubePrice

        if (h <= 2.4) localBudgetDetails.value.acessoriesPrice += l * color.rulerPrice / 6
    }

    // Ponta de lança
    if (acessories.find((acessory) => acessory.id == 3)) {
        localBudgetDetails.value.acessoriesPrice += (10 * (h * l) / 1.8) * color.spearheadPrice
    }
}
</script>

<template>
    <main>
        <h1>Oi</h1>
        {{ props.infoPortao }}
    </main>
</template>

<style scoped>

</style>