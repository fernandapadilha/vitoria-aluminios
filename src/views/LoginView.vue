<script setup>

</script>

<template>

    <main class="box-login-page">
        <img src="../img/reading-glasses.svg" alt="Senhorinha lendo um livro">
        <section class="login-section">
            <h2>Campo de Login</h2>
            <div>
                <label for="user-name">Nome de usuário:</label>
                <input type="text" name="user-name" id="user-name">
            </div>
            <div>
                <label for="user-password">Senha:</label>
                <input type="password" name="user-password" id="user-password">
            </div>
            <button>ENTRAR</button>
            <div>
                <p><a>Esqueceu a senha?</a></p>
                <p><router-link to="/cadastro" exact>Fazer o cadastro</router-link></p>
            </div>
        </section>
    </main>

</template>

<style scoped>

    .box-login-page {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 5rem 2rem;
        justify-items: center;
        align-items: center;
    }

    .login-section {
        display: grid;
        justify-content: center;
        align-content: center;
        row-gap: 2rem;
        color: var(--cor-branco);
        background-color: var(--cor-cinza-3);
        border-radius: 15px;
        padding: 3rem;
    }

    .login-section h2, .login-section div p {
        text-align: center;
    }

    .login-section div {
        display: grid;
        grid-template-rows: auto auto;
        row-gap: .5rem;
    }

    .login-section div input {
        padding: .5rem;
        border: 1px solid var(--cor-branco);
        background-color: var(--cor-transparente);
        color: var(--cor-branco);
        border-radius: 6px;
        width: 20vw;
    }

    .login-section div input:focus {
        outline: 0;
        border: 2px solid;
    }

    .login-section button {
        padding: .5rem;
        border: none;
        border-radius: 6px;
        font-size: 1rem;
        background-color: var(--cor-branco);
        color: var(--cor-preto);
    }

    .login-section button:hover {
        background-color: var(--cor-cinza-2);
        color: var(--cor-branco);
    }
    
    .login-section button:active {
        background-color: var(--cor-preto);
        color: var(--cor-branco);
    }

    .login-section div p a {
        color: var(--cor-branco);
        text-decoration: none;
    }

    .login-section div p a:hover {
        text-decoration: underline;
    }

    @media (max-width: 750px) {
        .box-login-page {
            grid-template-columns: auto;
        }

        .box-login-page img {
            display: none;
        }

        .login-section {
            background-color: var(--cor-transparente);
            color: var(--cor-cinza-2);
            padding: 0;
        }

        .login-section div input {
            border-color: var(--cor-cinza-2);
            width: auto;
        }

        .login-section div input:focus {
            border-color: var(--cor-cinza-2);
        }

        .login-section button {
            background-color: var(--cor-cinza-3);
            color: var(--cor-branco);
        }

        .login-section div p a {
            color: var(--cor-cinza-3);
        }
    }

</style>