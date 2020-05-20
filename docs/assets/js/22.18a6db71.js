(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{442:function(t,a,r){"use strict";r.r(a);var n=r(1),v=Object(n.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("今年のセキュリティキャンプは，オンラインで実施するとの連絡が来ました．"),r("br"),t._v(" "),r("a",{attrs:{href:"https://www.ipa.go.jp/jinzai/camp/2020/camp2020_zenkokunext.html#",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考:セキュリティ・キャンプ全国大会2020　ネクストキャンプ2020について"),r("OutboundLink")],1),r("br"),t._v("\nどのように実施するのか，非常に興味があります．"),r("br"),t._v("\n今日は，昨年私がセキュキャンに参加した際に実施した事前課題について紹介しようと思います．")]),t._v(" "),r("h1",{attrs:{id:"まえがき"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#まえがき"}},[t._v("#")]),t._v(" まえがき")]),t._v(" "),r("p",[t._v("前回のセキュリティキャンプに関する記事→\n"),r("a",{attrs:{href:"https://kojiros.net/posts/2020/05/14/seccamp.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("セキュリティキャンプ体験談① 1日目"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("セキュリティキャンプに参加するには，事前課題を解き，それを提出する必要があります．"),r("br"),t._v("\nまた，参加の合否は，正答率ではなく，以下に参加意欲があるのかにより決まるらしいです．"),r("br"),t._v("\nこのため，僕はとにかく意欲を見せようと取り組みました．"),r("br"),t._v("\nちなみに，応募課題は，志望するトラックごとに異なります．"),r("br"),t._v("\n今回は，僕が志望した「バラエティトラック」の応募課題の僕の回答を紹介します．")]),t._v(" "),r("h1",{attrs:{id:"バラエティトラックの応募課題"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#バラエティトラックの応募課題"}},[t._v("#")]),t._v(" バラエティトラックの応募課題")]),t._v(" "),r("blockquote",[r("p",[t._v("課題内容を以下に示します．\n2019 Cトラック")]),t._v(" "),r("h3",{attrs:{id:""}},[r("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),r("p",[t._v("以下の問1と問2はトラックCの必須問題です。問3～問8は選択問題で、3問を選択して回答してください。")]),t._v(" "),r("h3",{attrs:{id:"-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[t._v("#")])]),t._v(" "),r("p",[t._v("問1\n本問題はシナリオベースの問題です。※登場する組織、プロトコルはすべて架空です。")]),t._v(" "),r("p",[t._v("とあるビルの空調メーカーは自社の制御プロトコルは以下の点から安全であると主張しています。")]),t._v(" "),r("p",[t._v("a.空調のプロトコルは独自であり、公開されていないため、攻撃されることはない。\nb.万が一、空調がハッキングされても一時的に寒くなったり、熱くなったりするだけで命にかかわるものではない。\nc.仮にエアコンが暴走しても、コンセントを抜けば停止することが可能である。")]),t._v(" "),r("p",[t._v("あなたはプロトコルを調査することにしました。\nその結果、たしかに独自ではあったが、暗号化も認証も利用していないことがわかりました。")]),t._v(" "),r("p",[t._v("システム構成\n[操作用PC] "),t._v("-- NW(LAN) --")]),r("div",{staticClass:"text-align-center"},[t._v(" [空調制御装置] ")]),t._v("-- 独自物理線 --"),r("div",{staticClass:"text-align-center"},[t._v(" [エアコン/室外機]\n　↑ここからの送信されたパケットを取得\n※NW＝ネットワーク"),r("p"),t._v(" "),r("p",[t._v("問a.\n以下のバイト列は2019年4月5日に「操作用PC」でキャプチャした通信内容（L7データ）です。\n操作した内容とパケットを見比べて、解析を行い、わかったことを述べてください。\nヒント：IEEE 754、リトルエンディアン、CRC、UNIX時間\n例）いずれのパケットにも共通する箇所である最初の3バイトはASCIIに直すと「BEG」となっており、「BEGIN」の最初の文字と思われる。\n恐らく、パケットの先頭であるということを示していると思われる。")]),t._v(" "),r("p",[t._v("【通信データ】\n(1)エアコンの設定温度を28.0度に設定した際のリクエストパケット\n42 45 47 08 0A A7 5C 08 00 00 04 00 01 00 00 E0 41 45 4E 44 20 50 A8 F3\n(2)エアコンの設定温度を19.5度に設定した際のリクエストパケット\n42 45 47 3A 0A A7 5C 08 00 00 04 00 01 00 00 9C 41 45 4E 44 DA 66 22 70\n(3)風の強さを5段階の一番強くした際のリクエストパケット\n42 45 47 C2 0C A7 5C 05 00 00 04 00 03 05 45 4E 44 06 C7 07 12")]),t._v(" "),r("p",[t._v("問b.\n問a.の回答をもとにエアコンの設定温度を30.0度に設定するためのパケットを生成してください。\n答えが導き出せなかった場合はわからなかったことを記入してください。")]),t._v(" "),r("p",[t._v("問c.\nとある空調メーカーの主張で誤りと感じた部分を指摘してください。")]),t._v(" "),r("p",[t._v("問d.\n同システムがハッキング可能であった場合、考えうる最悪のシナリオを書いてください。\n例）ビル全体の冷房をガンガン入れて、電気代を高額にする。")]),t._v(" "),r("h3",{attrs:{id:"-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#-3"}},[t._v("#")])]),t._v(" "),r("p",[t._v("問2\nいままで作ったもの（ソフトウェア、装置、システム、組織、など何でも）で自慢したいものがあれば教えてください．その中で、何かあなたのプログラミングのスキルを推し量るエピソードがあれば書いてください．")]),t._v(" "),r("p",[t._v("###以下選択問題で、以下から3問選択して回答。")]),t._v(" "),r("h3",{attrs:{id:"-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#-4"}},[t._v("#")])]),t._v(" "),r("p",[t._v("問3\nあなたは、普段様々なデバイスを用いてインターネットにアクセスしています。その際そのデバイスはどのような通信をしているか想像してください。次に、以下のレポートを読んでください。\nhttps://www.cisco.com/c/ja_jp/solutions/collateral/service-provider/visual-networking-index-vni/white-paper-c11-741490.html")]),t._v(" "),r("p",[t._v("問a．あなたの想像した通信の様相とインターネット全体の通信の様相について、それぞれ記載し、どのような違いがあったか述べてください。また、その理由について考察をまとめて述べてください。\n問b．インターネット全体の通信の様相のついて、2023年以降の将来どの様に変化するかあなたの考えを述べてください。")]),t._v(" "),r("h3",{attrs:{id:"-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#-5"}},[t._v("#")])]),t._v(" "),r("p",[t._v("問4\n今後、人工知能はセキュリティ分野でどのような役割を担うか？あなたの予想と共に、そのメリットとデメリットを記述してください。")]),t._v(" "),r("h3",{attrs:{id:"-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#-6"}},[t._v("#")])]),t._v(" "),r("p",[t._v("問5\nサイバーセキュリティに関して色んな犯罪がありますが、中にはどういう行為が犯罪なのか分かりにくい条文もまだまだあります。\nこういう行為は犯罪に当るのかがよく分からない、これがなぜ犯罪になるのかがよく分からないというのをなるべく具体的に挙げてください。")]),t._v(" "),r("h3",{attrs:{id:"-7"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#-7"}},[t._v("#")])]),t._v(" "),r("p",[t._v("問6\nあなたは、何らかのネットワークにつながるコンピュータ装置（いわゆるIoT機器）の脆弱性を調べようとしています。装置の外部インタフェースとしては、Wi-Fi、USB、Bluetooth、HDMI映像出力が出ており、スイッチやLEDも付いています。設定はWi-Fiに接続したWebブラウザから行えるようです。内部で動くソフトウェアやOSの種類も分からず、CPUの種類も分かりません。このとき、装置の外部インタフェースを通じた脆弱性を調べる手順をできるだけ色々と考えてください。なお、装置の蓋を開けて中身を直接調べてたり配線を取り出したりすることも可能とします。")]),t._v(" "),r("h3",{attrs:{id:"-8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#-8"}},[t._v("#")])]),t._v(" "),r("p",[t._v("問7\nある個人が自分だけで使用しているPC（OSは適当に決めてください）に保存されている情報、例えば特定の文書ファイルやデータなどにしか記録されていないはずの情報が、インターネット上の掲示板に1ヶ月前から掲載されていることを知りました。この情報がどうやって漏洩したか、PCの状態、さまざまなログやファイル、ルータの通信記録などから推察する手順をできるだけ多くの条件を想定して示してください。")]),t._v(" "),r("h3",{attrs:{id:"-9"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#-9"}},[t._v("#")])]),t._v(" "),r("p",[t._v("問8\nCTFでこういう問題を作ってみたい、というのをなるべく具体的に挙げてください。")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);