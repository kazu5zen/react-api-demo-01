## ローカルでの起動方法

### Docker の立ち上げ

1. 「docker-compose up -d --build」をルートディレクトリで実行

### モジュールのインストール＆起動

1. 「docker exec -it node sh」をルートディレクトリで実行
2. docker 内の front ディレクトリで「yarn」を実行
3. docker 内の front ディレクトリで「yarn start」を実行

### アクセス

- http://localhost:3000
