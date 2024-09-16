<script setup>
import { ref, reactive } from 'vue';

const usuario = reactive({
    socialName: '',
    cpf: '',
    rg: '',
    dateOfBirth: '',
    telefone: '',
    email: '',
    userName: '',
    password: ''
});

const confirmPassword = ref('');

</script>

<template>
    <main class="family-member-form">
        <h1>Campo de Cadastro</h1>

        <form class="form">
            <div>
                <label for="social-name">Nome social:</label>
                <input type="text" name="social-name" id="social-name" v-model="usuario.socialName">
            </div>
            <div>
                <label for="cpf">CPF:</label>
                <input type="text" name="cpf" id="cpf" placeholder="999.999.999-99" v-model="usuario.cpf">
            </div>
            <div>
                <label for="rg">RG:</label>
                <input type="text" name="rg" id="rg" v-model="usuario.rg">
            </div>
            <div>
                <label for="dateOfBirth">Data de nascimento:</label>
                <input type="date" name="dateOfBirth" id="dateOfBirth" v-model="usuario.dateOfBirth">
            </div>
            <div>
                <label for="telefone">Telefone:</label>
                <input type="tel" name="telefone" id="telefone" v-model="usuario.telefone">
            </div>
            <div>
                <label for="email">E-mail:</label>
                <input type="email" name="email" id="email" v-model="usuario.email">
            </div>
            <div>
                <label for="user-name">Nome de usuário:</label>
                <input type="text" name="user-name" id="user-name" v-model="usuario.userName">
            </div>
            <div>
                <label for="password">Senha:</label>
                <input type="password" name="password" id="password" v-model="usuario.password">
            </div>
            <div>
                <label for="confirmPassword">Confirmar senha:</label>
                <input type="password" name="confirmPassword" id="confirmPassword" v-model="confirmPassword">
            </div>
        </form>

        <button type="button" class="botao">ENVIAR</button>
    </main>
</template>

<style scoped>

    .family-member-form {
        display: grid;
        row-gap: 2rem;
        justify-content: center;
        justify-items: center;
        padding: 5rem 1rem;
    }

    .form div {
        display: grid;
        grid-template-columns: 3fr 7fr;
        align-items: center;
        column-gap: 1rem;
        padding: 1rem;
    }

    .form div input {
        padding: .5rem;
        background-color: var(--cor-transparente);
        border: 1px solid var(--cor-preto);
        border-radius: 6px;
        font-size: 1rem;
    }

    .botao {
        background-color: var(--cor-cinza-1);
        border: none;
        border-radius: 6px;
        padding: 1rem 2rem;
        font-size: 1rem
    }

    .botao:hover {
        color: var(--cor-branco);
        background-color: var(--cor-principal);
    }

    .botao:active {
        color: var(--cor-branco);
        background-color: var(--cor-preto);
    }

    @media (max-width: 385px) {
        .family-member-form {
            padding: 5rem 0;
        }

        .family-member-form h1 {
            font-size: 1.5rem;
        }

        .form div input {
            font-size: .5rem;
        }
    }

</style>