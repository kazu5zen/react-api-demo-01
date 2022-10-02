## 概要

- [「RESAS 地域経済分析システム」の API](https://opendata.resas-portal.go.jp)を使った表示デモです
  - 都道府県別の総人口推移グラフを表示できます
- フレームワークに React を使っています
- チャレンジのために下記の制限を掛けて実装しています
  - フロントのみ実装（フロントでロジックを組む）
  - CSS フレームワークを使わない（FW に頼らずに組む）
  - TypeScript を使う（型を使って組む）

## ローカルでの起動方法

### Docker の立ち上げ

1. 「docker-compose up -d --build」をルートディレクトリで実行

### モジュールのインストール＆起動

1. 「docker exec -it node sh」をルートディレクトリで実行
2. docker 内の front ディレクトリで「npm ci」を実行
3. docker 内の front ディレクトリで「npm start」を実行

### アクセス

- http://localhost:3000
