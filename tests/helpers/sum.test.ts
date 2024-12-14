// sum.test.js
import { describe, expect, test } from 'vitest';
import { addArray, sum } from '../../src/helpers/sum.helper';

describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    // Preparación
    const a = 1;
    const b = 4;

    // Estímulo
    const result = sum(a, b);

    // El comporamiento esperado
    expect(result).toBe(a + b);

    // expect(sum(1, 2)).toBe(3);
  });
});

describe('addArray function', () => {
  test('should return a number', () => {
    // Preparación
    const arr = [1, 2, 3, 4, 5];

    // Estímulo
    const result = addArray(arr);

    // El comporamiento esperado
    expect(typeof result).toBe('number');
  });

  test('should return 0 if the array is empty', () => {
    // Preparación
    const arr: number[] = [];

    // Estímulo
    const result = addArray(arr);

    // El comporamiento esperado
    expect(result).toBe(0);
  });

  test('should return the sum of an array of numbers', () => {
    // Preparación
    const arr = [1, 2, 3, 4, 5];

    // Estímulo
    const result = addArray(arr);

    // El comporamiento esperado
    expect(result).toBe(arr.reduce((acc, curr) => acc + curr, 0));
  });
});
