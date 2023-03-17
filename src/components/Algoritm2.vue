<template>
  <Card title="Алгоритм 2" class="algoritm">
    <img class="algoritm__img" src="./../assets/alg2.png" alt="">
    <FormField v-model="a" class="algoritm__field" title="Значення а" @input="handleInput" />
    <FormField v-model="c" class="algoritm__field" title="Значення c" @input="handleInput" />
    <FormField v-model="k" class="algoritm__field" title="Значення k" @input="handleInput" />
    <p>
      Результат: <br>
      <b>y</b> = {{ !isInvalid && !isNaN(y) && y || '❌' }}
    </p>
    <Download class="algoritm__download" file-name="algoritm2.json" :data="JSON.stringify({a, c, k})" />
    <p v-if="fileError" class="algoritm__error">Невалідний файл</p>
    <Upload @upload="uploadData" />
  </Card>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue';
  import Card from './Card.vue';
  import FormField from './FormField.vue';
  import Download from './Download.vue';
  import Upload from './Upload.vue';
  import { algoritm2 } from '../algoritms/algoritm2';

  const a = ref<string>('1');
  const c = ref<string>('1');
  const k = ref<string>('1');
  const isInvalid = ref<boolean>(false);
  const fileError = ref<boolean>(false);

  const y = computed<number>(() => {
    return algoritm2(+a.value, +c.value, +k.value);
  });

  const uploadData = (data:string):void => {
    try {
      const parsedData:{a:string, c:string, k:string} = JSON.parse(data);
      a.value = String(parsedData.a);
      c.value = String(parsedData.c);
      k.value = String(parsedData.k);
    } catch(err) {
      fileError.value = true;
    }
  };

  const handleInput = (valid:boolean):void => {
    isInvalid.value = !valid;
    fileError.value = false;
  };
  
</script>

<style lang="scss" scoped>
  .algoritm {

    &__img {
      width: 70%;
      max-width: 200px;
      margin-bottom: 30px;
    }

    &__field {
      margin-bottom: 20px;
    }

    &__error {
      font-size: 12px;
      margin: 0 0 5px 0;
      color: red;
      font-weight: 700;
    }

    &__download {
      margin-bottom: 10px;
    }
  }
</style>