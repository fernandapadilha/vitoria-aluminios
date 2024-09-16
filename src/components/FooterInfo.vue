<script setup></script>

<template>
   <footer class="footer">
      <div class="footer-description">
         <h1>VITÓRIA ALUMÍNIOS</h1>
         <p class="description">
            A Vitória Alumínios é uma empresa especializada na confecção de portões de alumínio
            personalizados.
         </p>
      </div>
      <div class="footer-icons">
         <a href="https://www.facebook.com/vitoria.aluminio.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
               <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </svg>
         </a>
         <a href="https://w.app/VitoriaAluminios">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
               <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
         </a>
        <a href="https://www.google.com/maps/place/Vit%C3%B3ria+Alum%C3%ADnios/@-26.4503693,-48.6302739,17z/data=!3m1!4b1!4m6!3m5!1s0x94d931f2be921e97:0x3925072232edcb85!8m2!3d-26.4503693!4d-48.627699!16s%2Fg%2F11rw_v4j1h?entry=ttu&g_ep=EgoyMDI0MDgyMC4xIKXMDSoASAFQAw%3D%3D">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
               <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
               <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
        </a>
      </div>
   </footer>
</template>

<style scoped>

.footer {
   display: grid;
   grid-template-columns: 2fr 1fr;
   justify-content: center;
   align-items: center;
   padding: 3rem 2rem;
   margin-top: 5rem;
   background-color: var(--cor-cinza-2);
   width: 100vw;
}

.footer-description {
   padding: 1rem;
   display: grid;
   row-gap: 1rem;
   color: var(--cor-branco);
}

.footer-icons {
   display: grid;
   grid-template-columns: auto auto auto;
   justify-content: center;
   column-gap: 2.5rem;
}

.footer-icons a svg {
   width: 2rem;
   color: var(--cor-branco);
}

.footer-icons a svg:hover {
   color: var(--cor-principal);
}

@media(max-width: 630px) {
   .footer {
      grid-template-columns: 1fr;
   }
}

@media(max-width: 400px) {
   .footer-icons a svg {
      width: 1.5rem;
   }
}

</style>