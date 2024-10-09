<script setup>
import { ref, reactive } from 'vue'

const usuario = reactive({
  nomeSocial: '',
  cpf: '',
  rg: '',
  dataNascimento: '',
  telefone: '',
  email: '',
  nomeUsuario: '',
  senha: ''
})

const confirmarSenha = ref('')
</script>

<template>
  <main class="cadastro">
    <h1>Campo de Cadastro</h1>

    <form class="formulario">
      <div>
        <label for="nome-social">Nome social:</label>
        <input type="text" name="nome-social" id="nome-social" v-model="usuario.nomeSocial" />
      </div>
      <div>
        <label for="cpf">CPF:</label>
        <input type="text" name="cpf" id="cpf" placeholder="999.999.999-99" v-model="usuario.cpf" />
      </div>
      <div>
        <label for="rg">RG:</label>
        <input type="text" name="rg" id="rg" v-model="usuario.rg" />
      </div>
      <div>
        <label for="data-nascimento">Data de nascimento:</label>
        <input
          type="date"
          name="data-nascimento"
          id="data-nascimento"
          v-model="usuario.dataNascimento"
        />
      </div>
      <div>
        <label for="telefone">Telefone:</label>
        <input type="tel" name="telefone" id="telefone" v-model="usuario.telefone" />
      </div>
      <div>
        <label for="email">E-mail:</label>
        <input type="email" name="email" id="email" v-model="usuario.email" />
      </div>
      <div>
        <label for="nome-usuario">Nome de usuário:</label>
        <input type="text" name="nome-usuario" id="nome-usuario" v-model="usuario.nomeUsuario" />
      </div>
      <div>
        <label for="senha">Senha:</label>
        <input type="password" name="senha" id="senha" v-model="usuario.senha" />
      </div>
      <div>
        <label for="confirmar-senha">Confirmar senha:</label>
        <input
          type="password"
          name="confirmar-senha"
          id="confirmar-senha"
          v-model="confirmarSenha"
        />
      </div>
    </form>

    <button type="button" class="cadastro-botao">ENVIAR</button>
  </main>
</template>

<style scoped>
.cadastro {
  display: grid;
  row-gap: 2rem;
  justify-content: center;
  justify-items: center;
  padding: 5rem 1rem;
}

.formulario div {
  display: grid;
  grid-template-columns: 3fr 7fr;
  align-items: center;
  column-gap: 1rem;
  padding: 1rem;
}

.formulario div input {
  padding: 0.5rem;
  background-color: var(--cor-transparente);
  border: 1px solid var(--cor-preto);
  border-radius: 6px;
  font-size: 1rem;
}

.cadastro-botao {
  background-color: var(--cor-cinza-1);
  border: none;
  border-radius: 6px;
  padding: 1rem 2rem;
  font-size: 1rem;
}

.cadastro-botao:hover {
  color: var(--cor-branco);
  background-color: var(--cor-principal);
}

.cadastro-botao:active {
  color: var(--cor-branco);
  background-color: var(--cor-preto);
}

@media (max-width: 385px) {
  .cadastro {
    padding: 5rem 0;
  }

  .cadastro h1 {
    font-size: 1.5rem;
  }

  .formulario div input {
    font-size: 0.5rem;
  }
}
</style>
