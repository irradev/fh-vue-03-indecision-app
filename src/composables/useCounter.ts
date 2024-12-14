import { computed, ref } from 'vue';

interface Props {
  value: number;
}

export const useCounter = (props: Props) => {
  const counter = ref(props.value);
  // const squareCounter = computed(() => counter.value * counter.value);

  const increment = (value: number) => {
    counter.value = counter.value + value;
  };

  return {
    counter,

    // Read-only
    squareCounter: computed(() => counter.value * counter.value),

    // Actions
    increment,
  };
};
