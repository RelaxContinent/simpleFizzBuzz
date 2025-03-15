/**
 * FizzBuzz実装のテストファイル
 */

// テスト対象の関数をインポート
const { convertToFizzBuzz } = require('../src/fizzbuzz');

describe('FizzBuzz Tests', () => {
  // convertToFizzBuzz関数のテスト
  describe('convertToFizzBuzz', () => {
    test('3の倍数の場合は"Fizz"を返す', () => {
      expect(convertToFizzBuzz(3)).toBe('Fizz');
      expect(convertToFizzBuzz(6)).toBe('Fizz');
      expect(convertToFizzBuzz(9)).toBe('Fizz');
    });

    test('5の倍数の場合は"Buzz"を返す', () => {
      expect(convertToFizzBuzz(5)).toBe('Buzz');
      expect(convertToFizzBuzz(10)).toBe('Buzz');
      expect(convertToFizzBuzz(20)).toBe('Buzz');
    });

    test('3と5の両方の倍数（15の倍数）の場合は"FizzBuzz"を返す', () => {
      expect(convertToFizzBuzz(15)).toBe('FizzBuzz');
      expect(convertToFizzBuzz(30)).toBe('FizzBuzz');
      expect(convertToFizzBuzz(45)).toBe('FizzBuzz');
    });

    test('3の倍数でも5の倍数でもない場合は数値そのものを返す', () => {
      expect(convertToFizzBuzz(1)).toBe(1);
      expect(convertToFizzBuzz(2)).toBe(2);
      expect(convertToFizzBuzz(4)).toBe(4);
      expect(convertToFizzBuzz(7)).toBe(7);
      expect(convertToFizzBuzz(8)).toBe(8);
      expect(convertToFizzBuzz(11)).toBe(11);
      expect(convertToFizzBuzz(13)).toBe(13);
      expect(convertToFizzBuzz(14)).toBe(14);
    });
  });
});