<script setup>

</script>

<template>
  <section class="carrossel">
    <div class="carrossel-imagem">
      <img src="@/assets/img/Portao1.png" alt="">
    </div>

  
    <div class="quem-somos-nos">
      <h1>QUEM SOMOS NÓS?</h1>
      <p> Desde 2011 somos uma empresa independente de confecção de portões, voltada para serviços de 
      pequeno porte, como: casas, sobrados, condomínios, etc. A empresa Vitória Alumínios exerce grande inflência na região norte de Santa Catarina,
      em cidades como: Balneário Barra do Sul, Joinville, São Francisco do Sul, Araquari e Balneário Piçarras. </p> 
      <p>Esta empresa foi fundada por Benício Padilha, em união com sua família, que é de grande importância para o sucesso laboral.</p>
    </div>
  </section>
  
  <section class="objetivos">
    <div>
      <h2>VISÃO</h2>
      <p>A empresa Vitória Alumínios visa consolidar-se em seu ramo na região norte de SC.</p>
    </div>

    <div>
      <h2>MISSÃO</h2>
      <p>Nossa missão esta relacionada em garantir a segurança dos cidadãos, bem como proporcionar
      uma experiência estética favorável ao estilo dos clientes.
      </p>
    </div>

    <div>
      <h2>VALORES</h2>
      <ul>
        <li>Integridade;</li>
        <li>Responsabilidade social;</li>
        <li>Respeito; </li>
        <li>Trabalho em equipe;</li>
        <li>Inovação;</li>  
        <li>Foco no cliente;</li>
        <li>Família.</li> 
      </ul>
    </div>
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

  .carrossel {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 7rem;
    min-height: 10rem;
  }

  .carrossel-imagem {
    display: grid;
    justify-items: center;
    align-items: center;

  }

  .carrossel-imagem img {
    width: 90%;
    height: 90%;
  }

  .quem-somos-nos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;

    & h1 {
      font-size: 2.7rem;
    }
    
    & p {
      font-size: 1.5rem;
    }
  }

  .objetivos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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

    & h2 {
      font-family: var(--fonte-titulo);
    }

    & p {
      font-size: 1.5rem;
    }

    & ul li {
      list-style-type: disc;
      font-size: 1.5rem;
    } 
  }

  @media (max-width: 700px) {
    .objetivos {
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