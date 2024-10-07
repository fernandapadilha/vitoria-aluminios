<script setup></script>

<template>
    <header>
        <main class="principal">
          <div><h1 class="principal-titulo">Vitória Alumínios</h1></div>

          <div class="principal-login">
            <router-link to="/login" exact>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
              </svg>
              <p>LOGIN</p>
            </router-link>
          </div>
        </main>

        <nav class="principal-menu">
          <ul class="principal-menu-lista">
              <li><router-link to="/" exact>INÍCIO</router-link></li>
              <li><router-link to="/modelos" exact>MODELOS</router-link></li>
              <li><router-link to="/orcamento" exact>ORÇAMENTOS</router-link></li>
          </ul>
        </nav>
    </header>

</template>

<style scoped>

.principal {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    background-color: #A61B0F;
    color: var(--cor-branco);
  }

  .principal-titulo {
    color: var(--cor-branco);
  }

  .principal-login a {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    text-decoration: none;
    color: var(--cor-branco);

    & p {
      margin: 0 0 0 10px;
    }
  }

  .principal-menu {
    background-color: #D4D9D2;
  }

  .principal-menu-lista {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: end;
  }

  .principal-menu-lista li{
    padding: 1rem;
  }

  .principal-menu-lista li a {
    color: black;
    text-decoration: none;
  }

  @media (max-width: 410px) {
    .cadastro p {
      display: none;
    }
  }

  @media (max-width: 350px) {
    .principal-menu-lista li a {
      font-size: .9rem;
    }
  }
</style>