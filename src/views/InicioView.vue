<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

</script>

<template>
  <section class="secao-apresentacao">
    <section class="bloco-apresentacao">
      <div class="apresentecao-imagem">
        <img src="../assets/img/Portao1.png" alt="Portão principal" />
      </div>

      <div class="apresentacao-texto">
        <h1>A principal no setor em Barra do Sul e região</h1>
        <p>Encontre uma variedade de portões e faça o seu orçamento</p>
      </div>
    </section>
  </section>

  <section class="secao-objetivos">
    <section class="bloco-objetivos">
      <div class="item-objetivos">
        <img src="../assets/img/visao-empresa.jpg" alt="Visão da empresa" />
        <h3>VISÃO</h3>
        <p>A empresa Vitória Alumínios visa consolidar-se em seu ramo na região norte de SC.</p>
      </div>

      <div class="item-objetivos">
        <img src="../assets/img/missao-empresa.jpg" alt="Missão da empresa" />
        <h3>MISSÃO</h3>
        <p>
          Nossa missão esta relacionada em garantir a segurança dos cidadãos, bem como proporcionar
          uma experiência estética favorável ao estilo dos clientes.
        </p>
      </div>

      <div class="item-objetivos">
        <img src="../assets/img/valores-empresa.jpg" alt="Valores da empresa" />
        <h3>VALORES</h3>
        <ul>
          <li>Integridade;</li>
          <li>Responsabilidade social;</li>
          <li>Respeito;</li>
          <li>Trabalho em equipe;</li>
          <li>Inovação;</li>
          <li>Foco no cliente;</li>
          <li>Família.</li>
        </ul>
      </div>
    </section>
  </section>

  <section class="secao-quem-somos">
    <section class="bloco-quem-somos">
      <swiper class="my-swiper" loop> 
        <swiper-slide>
          <img src="../assets/img/portao-carrossel1.png" alt="Portão top" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/portao-carrossel2.png" alt="Portão top" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/portao-carrossel3.png" alt="Portão top" />
        </swiper-slide>
      </swiper>

      <div>
        <h2>QUEM SOMOS NÓS</h2>
        <p>
          Desde 2011 somos uma empresa independente de confecção de portões, voltada para serviços
          de pequeno porte, como: casas, sobrados, condomínios, etc. A empresa Vitória Alumínios
          exerce grande influência na região norte de Santa Catarina, em cidades como: Balneário
          Barra do Sul, Joinville, São Francisco do Sul, Araquari e Balneário Piçarras.
        </p>
        <p>
          Esta empresa foi fundada por Benício Padilha, em união com sua família, que é de grande
          importância para o sucesso laboral.
        </p>
      </div>
    </section>
  </section>


  <section class="secao-avaliacao">
    <section>
      <h1>Quem nos contrata recomenda</h1>
      <section class="bloco-avaliacao">
        <div>
          <img src="../assets/img/aspas.svg" alt="Aspas">
          <p>Fui muito bem atendida, o profissional foi muito educado e fez um trabalho de qualidade. Valeu a pena, orçamento grátis e não é careiro.</p>
          <p><span>Ana Paula, de Joinville</span></p>
        </div>
        <div>
          <img src="../assets/img/aspas.svg" alt="Aspas">
          <p>Excelente serviço! O portão que encomendei ficou impecável, com acabamento de alta qualidade e muita atenção aos detalhes.</p>
          <p><span>José Luís, de Balneário Barra do Sul</span></p>
        </div>
        <div>
          <img src="../assets/img/aspas.svg" alt="Aspas">
          <p>A equipe foi extremamente profissional, desde o atendimento até a instalação. Recomendo para quem busca um trabalho eficiente e bem-feito.</p>
          <p><span>Renilda Miranda, de Joinville</span></p>
        </div>
      </section>
    </section>
  </section>

</template>

<style scoped>

.item-objetivos {
  transition: width .5s ease;
  width: 100%;
}

.item-objetivos:hover {
  transition: width 1s ease;
  width: calc(100% + 10px);
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.secao-apresentacao {
  display: grid;
  justify-items: center;
  padding: 5rem 0;
}

.bloco-apresentacao {
  display: grid;
  grid-template-columns: 1fr 2fr;
  box-shadow:
    0 0 8px 1px var(--cor-sombra),
    4px 4px 8px 1px var(--cor-sombra);
  border-radius: 15px;
  width: 90%;
}

.apresentecao-imagem > img {
  width: 100%;
  height: 100%;
  border-radius: 15px 0 0 15px;
}

.apresentacao-texto {
  display: flex;
  row-gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  font-family: var(--fonte-corpo);
  padding: 0 2rem;

  & h1 {
    font-size: 3rem;
    font-weight: 600;
  }

  & p {
    font-size: 1.5rem;
    color: var(--cor-fonte-branco-complementar);
  }
}

.secao-objetivos {
  display: grid;
  justify-items: center;
  background-color: var(--cor-branco-secao);
}

.bloco-objetivos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80%;
  padding: 5rem 0;
  gap: 1.5rem;
}

.bloco-objetivos div {
  background-color: var(--cor-branco);
  border-radius: 1rem;
  box-shadow:
    0 0 8px 1px var(--cor-sombra),
    4px 4px 8px 1px var(--cor-sombra);

  & img {
    width: 100%;
    object-fit: cover;
    border-radius: 1rem 1rem 0 0;
  }

  & h3 {
    font-family: var(--fonte-titulo);
    text-align: center;
    padding: 1rem 0;
  }

  & p {
    font-size: 1rem;
    padding: 1rem;
    color: var(--cor-fonte-branco-complementar);
  }

  & ul li {
    list-style-type: disc;
    font-size: 1rem;
    color: var(--cor-fonte-branco-complementar);
  }
}

.secao-quem-somos {
  display: grid;
  justify-items: center;
  padding: 5rem 0;
}

.bloco-quem-somos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;

  & img {
    width: 100%;
    border-radius: 1rem;
    box-shadow:
      0 0 8px 1px var(--cor-sombra),
      4px 4px 8px 1px var(--cor-sombra);
  }

  & div {
    padding: 1rem;

    & p {
      color: var(--cor-fonte-branco-complementar);
    }
  }
}


.secao-avaliacao {
  display: grid;
  justify-items: center;
  padding: 5rem 0;
}

.secao-avaliacao > section {
  width: 90%;

  & h1 {
    text-align: center;
    padding: 1rem 0;
  }
}

.bloco-avaliacao {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.bloco-avaliacao div {
  padding: 1rem;

  & p {
    padding: .5rem 0 0 2rem;

    & span {
      font-weight: bold;
    }
  }
}

/*@media (max-width: 700px) {
    .bloco-objetivos {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 960px) {
    .carrossel {
      grid-template-columns: 1fr;
      margin-top: 0;
    }

    .carrossel-imagem img {
      width: 100vw;
    }

    .quem-somos-nos{
      padding: 0 1rem;
    }
  } */
 
</style>
