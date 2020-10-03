# vuejs_metrics
vueファイルとjsファイルの複雑度を計測するツールです。  

関数内で以下の命令を検出した場合に複雑度は増加します。

 - IfStatement
 - SwitchStatement
 - ForStatement
 - ForOfStatement
 - ForInStatement
 - DoWhileStatement
 - WhileStatement
 - CatchClause
 - LogicalExpression
 - ConditionalExpression'

テストが不十分なのであくまで目安としてご利用ください。

## 使用例

```
node vuejs_metrics 検査対象のフォルダ 出力ファイル
```

検査対象のフォルダであっても以下のフォルダは無視をします。

 - dist
 - node_modules
 
 
