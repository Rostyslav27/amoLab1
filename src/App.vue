
<template>
  <main class="container main">
    <section class="main__student-info">
      <StudentInfo class="student-info__info" /> 
    </section>
    <section class="main__tasks">
      <Algoritm1 class="main__algoritm" />    
      <Algoritm2 class="main__algoritm" />    
      <Algoritm3 class="main__algoritm" />    
    </section>
  </main>
  
</template>

<script setup lang="ts">
  import StudentInfo from './components/StudentInfo.vue';
  import Algoritm1 from './components/Algoritm1.vue';
  import Algoritm2 from './components/Algoritm2.vue';
  import Algoritm3 from './components/Algoritm3.vue';
</script>

<style lang="scss">

  * {
    box-sizing: border-box;
  }

  body {  
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #c4c4c4;
    }
  }

  .container {
    width: 100%;
    max-width: 1240px;
    padding: 20px;
    margin: 0 auto;
  }

  .main {

    &__student-info {
      margin-bottom: 50px;
      display: flex;
    }

    &__tasks {
      display: grid;
      align-items: start;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 40px;
    }
  }
</style>
