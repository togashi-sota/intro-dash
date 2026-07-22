// 曲データを管理するファイル。
// ここにはゲームのロジックを書かず、「曲のデータそのもの」だけを置く。
// 曲を追加・変更したいときは、このファイルだけを編集すればよい。

// 曲のカテゴリを表す定数。
// 文字列を直接あちこちに書くと、タイプミスに気づきにくいのでここでまとめて定義する。
export const CATEGORY = {
  TITLE_TRACK: "表題曲",
  COUPLING: "カップリング曲",
};

// 曲データ本体。
// id      : 曲を一意に識別するための文字列（音源ファイル名にも使う）
// title   : クイズの選択肢や正解表示に使う曲名
// category: CATEGORY で定義した値のどれか
//
// 【今はダミー5曲】実在する楽曲データに差し替える際は、この配列に要素を追加していくだけでよい。
// 最初の動作確認用として、5曲すべて同じカテゴリ（表題曲）に揃えている。
// カテゴリで絞り込んだときに曲が4未満になる挙動は、後の実装ステップで別途テストする。
export const SONGS = [
  { id: "dummy-1", title: "ダミー曲1", category: CATEGORY.TITLE_TRACK },
  { id: "dummy-2", title: "ダミー曲2", category: CATEGORY.TITLE_TRACK },
  { id: "dummy-3", title: "ダミー曲3", category: CATEGORY.TITLE_TRACK },
  { id: "dummy-4", title: "ダミー曲4", category: CATEGORY.TITLE_TRACK },
  { id: "dummy-5", title: "ダミー曲5", category: CATEGORY.TITLE_TRACK },
];
