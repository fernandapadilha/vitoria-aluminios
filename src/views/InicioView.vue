<script setup>

</script>

<template>
  <section class="carousel-section">
    <div class="slide">
      <img src="@/assets/img/Portao1.png" alt="">
    </div>

  
    <div class="quem-somos-nos">
      <h1 class="title">Quem somos nós?</h1>
      <p class="description" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsa eligendi 
        temporibus beatae, nisi illum accusantium, nihil tempore at quis, similique dolorem dolores. Ad, incidunt? 
        Quos fugit iste nulla ab! </p> 
    </div>
  </section>
  
  <section class="objetivos">
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officiis sequi pariatur 
    totam recusandae? Veritatis nihil placeat perspiciatis suscipit laboriosam consequatur ipsam, corrupti, magnam quod, 
    quibusdam nostrum a rerum officia?</div>

    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, ullam blanditiis! Sed delectus 
    saepe tenetur deserunt repellat sint? Voluptate fugiat autem nostrum iusto provident corporis nemo necessitatibus 
    soluta delectus ipsam.</div>

    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim, neque ut maxime sit 
    quibusdam autem eos! Cumque, sit, unde commodi molestiae enim reiciendis quam, voluptates doloribus accusamus 
    iure numquam?</div>
</section>

<section class="sponsorship">
  <div> 
    <h1>Patrocinadores e Lojas</h1> 
      <div class="carousel-item">
        <img src="@/assets/img/guapore.png" alt="">
        <div class="carousel-caption d-none d-md-block">
        <h5>...</h5>
        <p>...</p>
      </div>
    </div>
  </div>
</section>

</template>

<style scoped>

  .carousel-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 7rem;
    min-height: 10rem;
  }

  .slide {
    display: grid;
    justify-items: center;
    align-items: center;
    padding: 2rem;
  }

  .slide img {
    width: 90%;
    height: 90%;
  }

  .quem-somos-nos {
    display: grid;
    align-content: center;
  }

  .description {
    font-size: x-large;
    
  }

  .objetivos {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 3rem;
   
  }

  .objetivos div {
    padding: 4rem 3rem;
    font-size: larger;
    background-color: white;
    border: solid;
    box-shadow: 10px 20px grey;
    border-radius: 1rem;
    margin: 3rem;
  }

  .sponsorship {
    display: grid;
    justify-content: center;
    padding: 1rem;
    border: 1.5px solid black;
    border-radius: 1rem;
    background-color: grey;
    cursor: pointer;
    transition: 1s;
    
    margin: 3rem;
  }

  .sponsorship div{
    background-color: white;
    border: 1.5px solid black;
    border-radius: 1rem;
    padding: 1rem; 
    font-size: larger;
  }
  
  
  .sponsorship:hover {
    border: 3px solid blue;
    background-color: black;
    transition: 1s;
  }

  
</style>