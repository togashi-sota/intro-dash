// スピードボーナス方式の得点計算を担当するファイル。
// 正解が早いほど高得点、不正解・時間切れは0点。

const BASE_SCORE = 100;
const BONUS_PER_SECOND = 10;

// 正解したときの得点を計算する。
// 残り時間が1秒のときは110点、10秒（即答）のときは200点になる。
export function calculateScore(remainingSec) {
  return BASE_SCORE + remainingSec * BONUS_PER_SECOND;
}
