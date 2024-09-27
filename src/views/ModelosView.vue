<script setups></script>

<template>

  <h1 class="titulo-principal">Modelos de Portões</h1>

  <main class="grid-models">

    <section class="models-products">
      <img class="foto-portao" src="@/assets/img/portaodezesete.jpg" alt="portaobranco" />
      <p>Perfil Estrutural do Portão branco de Alumínio</p>
      <img class="avaliacao" src="@/assets/img/avaliacao.png" alt="iconeavaliacao">
      <p class="p">R$2500,00</p>
    </section>

    <section class="models-products">
      <img class="foto-portao" src="@/assets/img/portaoquinze.jpg" alt="portaobranco" />
      <p>Perfil Estrutural do Portão branco de Alumínio</p>
      <img class="avaliacao" src="@/assets/img/avaliacao.png" alt="iconeavaliacao">
      <p class="p">R$1550,00</p>
    </section>

    <section class="models-products">
      <img class="foto-portao" src="@/assets/img/portaodezoito.jpg" alt="portaobranco" />
      <p>Perfil Estrutural do Portão branco de Alumínio</p>
      <img class="avaliacao" src="@/assets/img/avaliacao.png" alt="iconeavaliacao">
      <P class="p">R$1200,00</P>
    </section>

    <section class="models-products">
      <img class="foto-portao" src="@/assets/img/cachorreira.png" alt="portaopreto" />
      <p>Perfil Estrutural do Portão preto de Alumínio</p>
      <img class="avaliacao" src="@/assets/img/avaliacao.png" alt="iconeavaliacao">
      <p class="p">R$1200,00</p>
    </section>

    <section class="models-products">
      <img class="foto-portao" src="@/assets/img/portao-social.png" alt="portaopreto" />
      <p>Perfil Estrutural do Portão preto de Alumínio</p>
      <img class="avaliacao" src="@/assets/img/avaliacao.png" alt="iconeavaliacao">
      <p class="p">R$1500,00</p>
    </section>

    <section class="models-products">
      <img class="foto-portao" src="@/assets/img/portaoum.jpg" alt="portaobranco" />
      <p>Perfil Estrutural do Portão branco de Alumínio</p>
      <img class="avaliacao" src="@/assets/img/avaliacao.png" alt="iconeavaliacao">
      <p class="p">R$2500,00</p>
    </section>

    <section class="models-products">
      <img class="foto-portao" src="@/assets/img/portaoquatro.jpg" alt="portaobranco" />
      <p>Perfil Estrutural do Portão branco de Alumínio</p>
      <img class="avaliacao" src="@/assets/img/avaliacao.png" alt="iconeavaliacao">
      <p class="p">R$1800,00</p>
    </section>

    <section class="models-products">
      <img class="foto-portao" src="@/assets/img/portao-com-portao-social.png" alt="portaobranco" />
      <p>Perfil Estrutural do Portão branco de Alumínio</p>
      <img class="avaliacao" src="@/assets/img/avaliacao.png" alt="iconeavaliacao">
      <p class="p">R$2000,00</p>
    </section>

  </main>


</template>

<style scoped>

.titulo-principal {
  text-align: center;
  font-family: var(--fonte-titulo);
  margin-top: 5rem;
}

.grid-models {
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr)); */
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1.5rem;
  gap: 2rem;
}

.models-products {
  display: grid;
  row-gap: .5rem;
  padding: 1rem;
  text-align: center;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  font-family: "Barlow Condensed", sans-serif;
  font-style: italic;
}

.foto-portao {
  height: 20rem;
  width: 95%;
  border-radius: 10px;
  margin: auto;
  display: block;
  object-fit: cover;
}

.models-products p {
  margin: 0;
}

.avaliacao {
  width: 8rem;
  max-height: 3rem;
  object-fit: cover;
  margin: auto;
  display: block;
}

.p {
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 800;
  font-style: italic;
}

@media (max-width: 950px) {
  .grid-models {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 650px) {
  .grid-models {
    grid-template-columns: 1fr;
  }
}

</style>