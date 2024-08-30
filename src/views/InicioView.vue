<script setup>

</script>

<template>
    <div class="slide">
      <img src="@/img/Portao1.png" alt="">
    </div>

    <div>
      <div class="quem-somos-nos">
      <h1 class="title">Quem somos nós?</h1>
      <p class="description" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsa eligendi 
      temporibus beatae, nisi illum accusantium, nihil tempore at quis, similique dolorem dolores. Ad, incidunt? 
      Quos fugit iste nulla ab! </p> 
    </div>
</div>

<div class="objetivos">
  <div class="missao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officiis sequi pariatur 
  totam recusandae? Veritatis nihil placeat perspiciatis suscipit laboriosam consequatur ipsam, corrupti, magnam quod, 
  quibusdam nostrum a rerum officia?</div>

  <div class="valores">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, ullam blanditiis! Sed delectus 
  saepe tenetur deserunt repellat sint? Voluptate fugiat autem nostrum iusto provident corporis nemo necessitatibus 
  soluta delectus ipsam.</div>

  <div class="visao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim, neque ut maxime sit 
  quibusdam autem eos! Cumque, sit, unde commodi molestiae enim reiciendis quam, voluptates doloribus accusamus 
  iure numquam?</div>
</div>
</template>

<style scoped>

  .page{
   display: grid;
   grid-template-columns: auto auto;
   column-gap: 10rem;
   
}
  .slide img {
    width: 90%;
    height: 80%;
    margin-bottom: 30px;
    margin-left: 100px;
    margin-top: 70px;
  }

  .title {
    margin-top: 70px;
  }

  .description {
    width: 50%;
    height: 50%;
    margin-top: 40px;
    font-size: x-large;
  }

  .objetivos {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 10rem;
  }
</style>