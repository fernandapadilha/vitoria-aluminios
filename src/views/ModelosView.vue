<script setups></script>

<template>
  <div class="grid-models">
    <div class="models-products">
      <img class="foto-portao" src="@/assets/img/portaodezesete.jpg" alt="portaobranco" />
      <p>Perfil Estrutural do Portão branco de Alumínio</p>
      <img class="avaliacao" src="@/assets/img/avaliacao.png" alt="iconeavaliacao">
      <p class="p">R$2500,00</p>
    </div>
    <div class="models-products">
      <img class="foto-portao" src="@/assets/img/portaoquinze.jpg" alt="portaobranco" />
      <p>Perfil Estrutural do Portão branco de Alumínio</p>
      <img class="avaliacao" src="@/assets/img/avaliacao.png" alt="iconeavaliacao">
      <p class="p">R$1550,00</p>
    </div>
    <div class="models-products">
      <img class="foto-portao" src="@/assets/img/portaodezoito.jpg" alt="portaobranco" />
      <P>Perfil Estrutural do Portão branco de Alumínio</P>
      <img class="avaliacao" src="@/assets/img/avaliacao.png" alt="iconeavaliacao">
      <P class="p">R$1200,00</P>
    </div>
    <div class="models-products">
      <img class="foto-portao" src="@/assets/img/portaodois.jpg" alt="portaopreto" />
      <p>Perfil Estrutural do Portão preto de Alumínio</p>
      <img class="avaliacao" src="@/assets/img/avaliacao.png" alt="iconeavaliacao">
      <p class="p">R$1200,00</p>
    </div>
    <div class="models-products">
      <img class="foto-portao" src="@/assets/img/portaocinco.jpg" alt="portaopreto" />
      <p>Perfil Estrutural do Portão preto de Alumínio</p>
      <img class="avaliacao" src="@/assets/img/avaliacao.png" alt="iconeavaliacao">
      <p class="p">R$1500,00</p>
    </div>
    <div class="models-products">
      <img class="foto-portao" src="@/assets/img/portaoum.jpg" alt="portaobranco" />
      <p>Perfil Estrutural do Portão branco de Alumínio</p>
      <img class="avaliacao" src="@/assets/img/avaliacao.png" alt="iconeavaliacao">
      <p class="p">R$2500,00</p>
    </div>
    <div class="models-products">
      <img class="foto-portao" src="@/assets/img/portaoquatro.jpg" alt="portaobranco" />
      <p>Perfil Estrutural do Portão branco de Alumínio</p>
      <img class="avaliacao" src="@/assets/img/avaliacao.png" alt="iconeavaliacao">
      <p class="p">R$1800,00</p>
    </div>
    <div class="models-products">
      <img class="foto-portao" src="@/assets/img/portaodezeseis.jpg" alt="portaobranco" />
      <p>Perfil Estrutural do Portão branco de Alumínio</p>
      <img class="avaliacao" src="@/assets/img/avaliacao.png" alt="iconeavaliacao">
      <p class="p">R$2000,00</p>
    </div>
  </div>


</template>

<style scoped>
.foto-portao {
  height: 20rem;
  width: 23rem;
  border-radius: 10px;
}

.avaliacao {
  width: 8rem;
  max-height: 3rem;
  object-fit: cover;
}

.models-products {
  gap: 2px;
  text-align: center;
  margin: 20px;
  padding: 10px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4%;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 500;
  font-style: italic;

}
.grid-models {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  margin: 5%;
 
}
.p {
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 800;
  font-style: italic;
}

</style>