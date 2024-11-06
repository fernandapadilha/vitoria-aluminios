import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usarDadosPortao = defineStore('portao', () => {
    const tubos = ref([
        {
          id: 1,
          nome: 'Redondo',
          precoAprox: '~R$ 25,00',
          descricao: 'Tubo para portão formato 3x4 redondo',
          img: 'tubo-redondo-branco.png',
          alt: 'Tubo redondo branco'
        },
        {
          id: 2,
          nome: 'Quadrado',
          precoAprox: '~R$ 30,00',
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
            alt: 'Tubo quadrado branco',
            precoTuboRedondo: 21,
            precoTuboQuadrado: 25,
            precoRegua: 69.58,
            precoPontaDeLanca: 5
        },
        {
            id: 2,
            nome: 'Preto',
            descricao: 'Tubo para portão de cor preta',
            img: 'tubopreto4.png',
            alt: 'Tubo quadrado preto',
            precoTuboRedondo: 30,
            precoTuboQuadrado: 35,
            precoRegua: 71.71,
            precoPontaDeLanca: 7
        }
    ]);

    const acessorios = ref([
        {
            id: 1, 
            nome: 'Cachorreira', 
            precoAprox: '~R$ 650,00', 
            descricao: 'Dispositivo localizado na parte inferior do portão que impede a passagem de animais pelos vãos entre os tubos do portão', 
            img: 'cachorreira.png',
            alt: 'Portão com cachorreira'
        },
        {
            id: 2, 
            nome: 'Portão social', 
            precoAprox: '~R$ 380,00', 
            descricao: 'Porta embutida localizada na porção inicial do portão para a passagem de pessoas',
            img: 'portao-social.png',
            alt: 'Portão com portão social'
        },
        {
            id: 3, 
            nome: 'Tampa ponta de lança', 
            precoAprox: '~R$ 6,00/tubo', 
            descricao: 'Ponta em formato do lança localizada no segmento superior de cada tubo do portão',
            img: 'tampa-lanca.png',
            alt: 'Tampa ponta de lança'
        }
    ]);

    return {tubos, cores, acessorios}
})