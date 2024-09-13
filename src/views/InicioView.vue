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

<!-- <section class="sponsorship">
  <div> 
    <h1>Patrocinadores e Lojas</h1> 

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-50" src="@/assets/img/guapore.png" alt="First slide">
          <div class="carousel-caption d-none d-md-block">
            <h5>...</h5>
            <p>...</p>
          </div>
        </div>

        <div class="carousel-item">
          <img class="d-block w-50" src="@/assets/img/casa_aluminios.png" alt="Second slide">
          <div class="carousel-caption d-none d-md-block">
            <h5>...</h5>
            <p>...</p>
          </div>
        </div>

        <div class="carousel-item">
          <img class="d-block w-50" src="@/assets/img/guapore.png" alt="Third slide">
          <div class="carousel-caption d-none d-md-block">
            <h5>...</h5>
            <p>...</p>
          </div>
        </div>
      </div>

      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>

      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</section> -->

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

  }

  .slide img {
    width: 90%;
    height: 90%;
  }

  .quem-somos-nos {
    display: grid;
    align-content: center;
  }


  .objetivos {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 1rem;
    gap: 1.5rem;
  }

  .objetivos div {
    padding: 2rem 1rem;
    font-size: larger;
    background-color: white;
    border: solid;
    box-shadow: 5px 10px grey;
    border-radius: 1rem;
  }

  @media (max-width: 700px) {
    .objetivos {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 600px) {
    .carousel-section {
      grid-template-columns: 1fr;
      margin-top: 0;
    }

    .slide img {
      width: 100vw;
    }

    .quem-somos-nos{
      padding: 0 1rem;
    }
  }
/* 
  .sponsorship {
    display: grid;
    justify-content: center;
    padding: 1rem;
    border: 1.5px solid black;
    border-radius: 1rem;
    background-color: grey;
    cursor: pointer;
    transition: 1s;
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
  } */

  
  
</style>