import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usarModeloStore = defineStore('modelo', () => {
    const modelos = ref([
        {
          id: 1,
          nome: "Perfil Estrutural do Portão branco de Alumínio",
          preco: "R$2500,00",
          img: 'portaodezesete.jpg'
        },
        {
          id: 2,
          nome: "Perfil Estrutural do Portão branco de Alumínio",
          preco: "R$1500,00",
          img: "portaoquinze.jpg"
        },
        {
          id: 3,
          nome: "Perfil Estrutural do Portão branco de Alumínio",
          preco: "R$4500,00",
          img: "portaodezoito.jpg"
        },
        {
          id: 4,
          nome: "Perfil Estrutural do Portão preto de Alumínio",
          preco: "R$500,00",
          img: "portaonove.jpg"
        },
        {
          id: 5,
          nome: "Perfil Estrutural do Portão preto de Alumínio",
          preco: "R$1200,00",
          img: "portaoum.jpg"
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
