<template>
  <Card title="Алгоритм 3" class="algoritm">
    <img class="algoritm__img" src="./../assets/alg3.png" alt="">
    <FormField v-model="a" class="algoritm__field" title="Значення а" @input="handleInput" />
    <FormField v-model="b" class="algoritm__field" title="Значення b" @input="handleInput" />
    <FormField v-model="p" class="algoritm__field" title="Значення p" @input="handleInput" />
    <p v-if="+a + +b < 0" class="algoritm__error">
      Корінь з від'ємного числа
    </p>
    <Button text="Обчислити" @click="calculate" />
    <p>
      Результат: <br>
      <b>f</b> = {{ (f === Infinity || isNaN(f)) ? '❌' : f.toString() }}
    </p>
    <Download class="algoritm__download" file-name="algoritm3.json" :data="JSON.stringify({a, b, p})" />
    <p v-if="fileError" class="algoritm__error">Невалідний файл</p>
    <Upload @upload="uploadData" />
  </Card>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import Card from './Card.vue';
  import FormField from './FormField.vue';
  import Button from './Button.vue';
  import Download from './Download.vue';
  import Upload from './Upload.vue';
  import { algoritm3 } from '../algoritms/algoritm3';

  const a = ref<string>('1');
  const b = ref<string>('1');
  const p = ref<string>('1');
  const f = ref<number>(1);
  const isInvalid = ref<boolean>(false);
  const fileError = ref<boolean>(false);

  const calculate = ():void => {
    if (!isInvalid.value && (+a.value + +b.value >= 0)) {
      f.value = algoritm3(+a.value, +b.value, +p.value);
    }
  };

  calculate();

  const uploadData = (data:string):void => {
    try {
      const parsedData:{a:string, b:string, p:string} = JSON.parse(data);
      a.value = String(parsedData.a);
      b.value = String(parsedData.b);
      p.value = String(parsedData.p);
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
      width: 80%;
      max-width: 260px;
      margin-bottom: 30px;
    }

    &__field {
      margin-bottom: 15px;
    }

    &__error {
      font-size: 12px;
      color: red;
      font-weight: 700;
    }

    &__download {
      margin-bottom: 10px;
    }
  }
</style>