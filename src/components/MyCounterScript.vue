<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <h4>{{ text }}</h4>

    <div>
      <button @click="increment(-1)">-1</button>
      <button @click="increment(1)">+1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
      // default: 0,
    },
    text: {
      type: String,
      default: 'Counter Script',
    },
  },
  setup(props) {
    const counter = ref(props.value);
    const squareCounter = computed(() => counter.value * counter.value);

    return {
      counter,
      squareCounter,
      increment: (value: number) => {
        counter.value = counter.value + value;
      },
    };
  },
});
</script>
