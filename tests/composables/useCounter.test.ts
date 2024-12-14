import { useCounter } from '@/composables/useCounter';

describe('useCounter', () => {
  test('initializes counter with provided initial value', () => {
    const initialValue = 10;

    const { counter, squareCounter } = useCounter({ value: initialValue });

    expect(counter.value).toBe(initialValue);
    expect(squareCounter.value).toBe(initialValue * initialValue);
  });

  test('should increments counter', () => {
    const value = 5;
    const { counter, increment } = useCounter({ value: 0 });

    increment(value);

    expect(counter.value).toBe(value);
  });

  test('should decrement counter', () => {
    const initialValue = 2;
    const { counter, increment } = useCounter({ value: initialValue });

    increment(-5);

    expect(counter.value).toBe(initialValue - 5);
  });
});
