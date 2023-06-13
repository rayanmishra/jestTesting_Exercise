import { describe, it, expect } from 'vitest';
import { cleanNumbers, transformToNumber } from './numbers.js';

describe('transformToNumber()', () => {
  it('should test whether the output is a number or not', () => {
    // arrange
    const input = '5';
    //   Act
    const result = transformToNumber(input);
    //   assert
    expect(result).toBeTypeOf('number');
  });

  it('should yield NaN if the input is not a number', () => {
    // arrange
    const input = 'five';
    //   Act
    const result = transformToNumber(input);
    //   assert
    expect(result).toBeNaN();
  });
});

describe('cleanNumbers()', () => {
  it('should return an array of numbers from an array of string numbers', () => {
    const numberValues = ['1', '2'];

    // testing with toBe
    expect(cleanNumbers(numberValues)[0]).toBeTypeOf('number');
    // Testing with toEqual for object
    expect(cleanNumbers(numberValues)).toEqual([1, 2]);
  });

  it('should throw an error if an array with atleast one empty string is provided', () => {
    const numberValues = ['', 1];

    expect(() => {
      cleanNumbers(numberValues);
    }).toThrow();
  });
});
