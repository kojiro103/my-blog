---
category: dairy
tags:
  - dairy 
date: 2020-05-16
title: vuepressでつまづいた話
vssue: false
---

新しいブログの設立のために，静的サイトジェネレータであるvuepressを使ったのですが，
cssが反映されなくてつまづいた...

<!-- more -->

先日，他のブログから本ブログに移りました．  
理由としては，vuepressを単純に使って見たかったこと，仮想サーバが必要ないこと...etc...色々ありますが，何と言っても１番の魅力はmd形式で書けることでした．  
はじめは．ホスティングサービスとしてGitHub Pagesを利用したのですが，何故が公開するとcssが反映しないという事件が発生しました．(ここで6時間ぐらい溶かしました！)  
...結局原因はわかりませんでした．「npm run dev」でローカルホストにデプロイすると，cssが反映されていたのですが，よく分からないです．  
最終的に，netlifyを使用したところ，cssが反映されたので，ひとまずこれで運営していこうと思います．  