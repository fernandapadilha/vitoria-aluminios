<script setup>
import FooterInfo from "./components/FooterInfo.vue"
</script>

<template>
  <footer>
    <footer-info />
  </footer>  
</template>

<style scoped>

footer {
  position: fixed;
  bottom: 0;
  background-color: #d9d9d9;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
}

</style>
