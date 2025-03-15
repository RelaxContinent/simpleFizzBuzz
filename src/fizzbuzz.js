// エクスポート
module.exports = {
  convertToFizzBuzz,
  printFizzBuzz
};

// 定数
// 
const DIVIDER = 15;

// 数を15で割った余りに対する返却値の対応Map
const FIZZBUZZ_REMAINDER = new Map();
FIZZBUZZ_REMAINDER.set(0, "FizzBuzz");
FIZZBUZZ_REMAINDER.set(3, "Fizz");
FIZZBUZZ_REMAINDER.set(5, "Buzz");
FIZZBUZZ_REMAINDER.set(6, "Fizz");
FIZZBUZZ_REMAINDER.set(9, "Fizz");
FIZZBUZZ_REMAINDER.set(10, "Buzz");
FIZZBUZZ_REMAINDER.set(12, "Fizz");

/**
 * 1からnまでの数値に対してFizzBuzz変換を行い、結果をコンソールに出力する
 * @param {number} target - 出力する値
 * @param {number} limit - 上限値
 */
function printFizzBuzz(target, limit) {
  console.log(convertToFizzBuzz(target))
  if (target < limit) {
    printFizzBuzz(target + 1, limit)
  }
}

/**
 * 単一の数値に対してFizzBuzz変換を行う関数
 * @param {number} num - 変換する数値
 * @return {string|number} - 変換結果
 */
function convertToFizzBuzz(num) {
  if (FIZZBUZZ_REMAINDER.get(num % DIVIDER) === undefined) {
    return num
  }
  return FIZZBUZZ_REMAINDER.get(num % DIVIDER)
}
