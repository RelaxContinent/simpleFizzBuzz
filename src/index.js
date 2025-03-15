/**
 * FizzBuzzアプリケーションのエントリーポイント
 */

// fizzbuzz.jsからメソッドをインポート
const { generateFizzBuzz, printFizzBuzz } = require('./fizzbuzz');

// デフォルトの上限値
const DEFAULT_LIMIT = 100;
const START = 1;

// アプリケーションを実行
main();

/**
 * メイン実行関数
 */
function main() {
  const limit = getLimit();
  console.log(`FizzBuzz for numbers from 1 to ${limit}:`);
  console.log('-'.repeat(40));
  
  // FizzBuzzを実行して結果を出力
  printFizzBuzz(START, limit);
}

/**
 * コマンドライン引数から上限値を取得する関数
 * @return {number} 上限値（デフォルト: 100）
 */
function getLimit() {
  // コマンドライン引数から上限値を取得（例: node index.js 20）
  const args = process.argv.slice(2);
  const limit = parseInt(args[0], 10);
  
  // 有効な数値でない場合はデフォルト値を使用
  return isNaN(limit) ? DEFAULT_LIMIT : limit;
}

