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
