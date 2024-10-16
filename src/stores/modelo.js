import { ref } from 'vue'
import { defineStore } from 'pinia'
import img1 from '@/assets/img/portaodezesete.jpg'
import img2 from '@/assets/img/portaoquinze.jpg'
import img3 from '@/assets/img/portaodezoito.jpg'
import img4 from '@/assets/img/portaonove.jpg'
import img5 from '@/assets/img/portaoum.jpg'

export const usarModeloStore = defineStore('modelo', () => {
    const modelos = ref([
        {
          id: 1,
          nome: "Portão deslizante branco com régua grossa",
          preco: "R$2500,00",
          alt: "Portão deslizante branco com régua grossa",
          img: img1,
          descricao: [
            'Sistema de abertura automático',
            'Inclui controle remoto',
            'Tipo de abertura: de correr',
            'Espessura de cada régua: 5 cm',
            'O material é alumínio'
          ]
        },
        {
          id: 2,
          nome: "Portão deslizante branco com palitos",
          preco: "R$1500,00",
          alt: "Portão deslizante branco com palitos",
          img: img2,
          descricao: [
            'Sistema de abertura manual',
            'Tipo de abertura: de correr',
            'Espessura do palito: 2 cm',
            'O material é alumínio'
          ]
        },
        {
          id: 3,
          nome: "Portão deslizante branco com palitos grossos e cachorreira",
          preco: "R$4500,00",
          alt: "Portão deslizante branco com palitos grossos e cachorreira",
          img: img3,
          descricao: [
            'Sistema de abertura manual',
            'Tipo de abertura: de correr',
            'Espessura do palito: 2,5 cm',
            'O material é alumínio',
          ]
        },
        {
          id: 4,
          nome: "Portão deslizante preto com régua fina",
          preco: "R$500,00",
          alt: "Portão deslizante preto com régua fina",
          img: img4,
          descricao: [
            'Sistema de abertura manual',
            'Inclui caixa de correio',
            'Tipo de abertura: de correr',
            'Espessura da régua: 2 cm',
            'O material é alumínio'
          ]
        },
        {
          id: 5,
          nome: "Portão deslizante branco com régua fina",
          preco: "R$1200,00",
          alt: "Portão deslizante branco com régua fina",
          img: img5,
          descricao: [
            'Sistema de abertura manual',
            'Tipo de abertura: de correr',
            'Espessura da régua: 2,5 cm',
            'O material é alumínio'
          ]
        },
      ])

  function pegarModeloPorId(id) {
    // Modelo universal
    for (let modelo of modelos.value) {
      if (modelo.id == id) {
        return modelo
      }
    }
    return {}
  }

  return { modelos, pegarModeloPorId }
})
