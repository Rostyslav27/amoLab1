<template>
  <label class="form-field" :class="{ 'form-field--invalid': invalid }">
    <span class="form-field__name">{{ invalid ? 'Введіть коректне значення' : title }}</span>
    <input 
      class="form-field__input" 
      type="text"
      :placeholder="title" 
      @input="updateModelValue"
      :value="modelValue"
      ref="inputElement"
    >
    <slot />
  </label>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';

  const props= defineProps<{
    modelValue?: string,
    title: string,
  }>();

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'invalid'): void
    (e: 'input', valid: boolean): void
  }>();

  const inputElement = ref<HTMLInputElement>();
  const invalid = ref<boolean>(false);

  const isValid = (value:string):boolean => {
    return !!value.length && /^-{0,1}[0-9]{1,}[,.]{0,1}[0-9]{0,}$/.test(value.toString()) && !/^-{0,1}0{1}[0-9]{1,}$/.test(value.toString());
  };

  watch(() => (props.modelValue), () => {
    const isValidNow = isValid(String(props.modelValue));
    emit('input', isValidNow);
    invalid.value = !isValidNow;
  });

  const updateModelValue = ():void => {
    if (inputElement.value) {
      emit('update:modelValue', inputElement.value.value.replace(',', '.'));
    }
  };
</script>

<style lang="scss" scoped>
  .form-field {
    display: block;
    
    &__name {
      font-size: 13px;
      margin-bottom: 3px;
      font-weight: 600;
      display: flex;
      flex-direction: column;
    }

    &--invalid {
      color: red;
    }

    &--invalid &__input {
      border-color: red;
    }

    &__input {
      width: 100%;
      border-radius: 5px;
      padding: 5px 10px;
      font-family: Arial, Helvetica, sans-serif;
      border: 1px solid #000;

      &--textarea {
        resize: vertical;
        min-height: 50px;
        font-family: Arial, Helvetica, sans-serif;
      }
    }
  }
</style>