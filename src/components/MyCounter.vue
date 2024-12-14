<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <!-- <h3 data-testid="square-label">Square: {{ squareCounter }}</h3> -->
    <h3 data-testid="square-label">Square: {{ squareCounter }}</h3>
    <h4>{{ text }}</h4>

    <div>
      <button class="btn" @click="increment(-1)">-1</button>
      <button class="btn" @click="increment(1)">+1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

interface Props {
  value: number;
  text: string;
}

const props = defineProps<Props>();
const { counter, squareCounter, increment } = useCounter(props);
</script>

<style scoped>
.btn {
  @apply p-5 bg-blue-500 rounded mr-2 hover:bg-blue-700;
}
</style>
