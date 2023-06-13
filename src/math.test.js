import { it, expect } from 'vitest';
import { add } from './math.js';

it('should summarize all number values in an array', () => {
  //   Arrange
  const numbers = [1, 2, 3];
  //   Act
  const result = add(numbers);
  //  Assert
  const expectedResult = numbers.reduce((acc, curValue) => acc + curValue, 0);
  expect(result).toBe(expectedResult);
});

it('should yield NaN if atleast one invalid number is provided', () => {
  //   Arrange
  const numbers = ['invalid', 3];
  //   Act
  const result = add(numbers);
  //  Assert
  expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string value is provided', () => {
  //   Arrange
  const numbers = ['1', '2'];

  //   Act
  const result = add(numbers);

  //  Assert
  const expectedResult = numbers.reduce((acc, curValue) => +acc + +curValue, 0);
  expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provided', () => {
  //   Arrange
  const numbers = [];
  //   Act
  const result = add(numbers);
  //  Assert
  expect(result).toBe(0);
});

it('should throw an erro if no value is passed into the function', () => {
  const resultfn = () => {
    add();
  };
  expect(resultfn).toThrow(/is not iterable/);
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
  const num1 = 1;
  const num2 = 2;

  const resultfn = () => {
    add(num1, num2);
  };

  expect(resultfn).toThrow(/is not iterable/);
});
