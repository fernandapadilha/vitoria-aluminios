<script setup></script>

<template>
    <header>
        <main class="principal">
        <div><h1 class="titulo-principal">Vitória Alumínios</h1></div>
        <div class="cadastro">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
            <p>CADASTRO</p>
        </div>
        </main>
        <nav class="menu">
        <ul class="lista-menu">
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
    background-color: var(--cor-cinza-3);
    color: var(--cor-branco);
  }

  .titulo-principal {
    color: var(--cor-branco);
  }

  .cadastro {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;

    & p {
      margin: 0 0 0 10px;
    }
  }

  .menu {
    background-color: var(--cor-cinza-2);
  }

  .lista-menu {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: end;
  }

  .lista-menu li{
    padding: 1rem;
  }

  .lista-menu li a {
    color: var(--cor-branco);
    text-decoration: none;
  }
</style>