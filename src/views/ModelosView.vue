<script setups></script>

<template>
  <div class="grid-models">
    <div class="models-products">
      <img src="@/img/portaodezesete.jpg" alt="imagem1" />
      <p>Perfil Estrutural do Portão branco de Alumínio</p>
      <p class="p">R$1500,00</p>
    </div>
    <div class="models-products">
      <img src="@/img/portaoquinze.jpg" alt="" />
      <p>Perfil Estrutural do Portão branco de Alumínio</p>
      <p class="p">R$1550,00</p>
    </div>
    <div class="models-products">
      <img src="@/img/portaodezoito.jpg" alt="" />
      <P>Perfil Estrutural do Portão branco de Alumínio</P>
      <P class="p">R$1000,00</P>
    </div>
    <div class="models-products">
      <img src="@/img/portaodois.jpg" alt="" />
      <p>Perfil Estrutural do Portão preto de Alumínio</p>
      <p class="p">R$1000,00</p>
      <avaliacao>ícone</avaliacao>
    </div>
  </div>


</template>

<style scoped>
img {
  height: 350px;
  width: 370px;
  border-radius: 10px;
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