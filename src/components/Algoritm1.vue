<template>
  <Card title="Алгоритм 1" class="algoritm">
    <img class="algoritm__img" src="./../assets/alg1.png" alt="">
    <FormField v-model="a" class="algoritm__field" title="Значення а" @input="handleInput" />
    <FormField v-model="b" class="algoritm__field" title="Значення b" @input="handleInput" />
    <FormField v-model="c" class="algoritm__field" title="Значення c" @input="handleInput" />
    <FormField v-model="d" class="algoritm__field" title="Значення d" @input="handleInput" />
    <p v-if="y === Infinity && !isInvalid" class="algoritm__error">Ділення на нуль</p>
    <p v-if="isNaN(y) && !isInvalid" class="algoritm__error">Корінь з від'ємного числа</p>
    <p>
      Результат: <br>
      <b>Y1</b> = {{ (y === Infinity || isNaN(y) || isInvalid) ? '❌' : y }}
    </p>
    <Download class="algoritm__download" file-name="algoritm1.json" :data="JSON.stringify({a, b, c, d})" />
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
  import { algoritm1 } from '../algoritms/algoritm1';

  const a = ref<string>('2');
  const b = ref<string>('1');
  const c = ref<string>('1');
  const d = ref<string>('1');
  const isInvalid = ref<boolean>(false);
  const fileError = ref<boolean>(false);

  const y = computed<number>(() => {
    return algoritm1(+a.value, +b.value, +c.value, +d.value);
  });

  const uploadData = (data:string):void => {
    try {
      const parsedData:{a:string, b:string, c:string, d:string} = JSON.parse(data);
      a.value = String(parsedData.a);
      b.value = String(parsedData.b);
      c.value = String(parsedData.c);
      d.value = String(parsedData.d);
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
      margin-bottom: 15px;
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