// import React,{ useState, useEffect } from 'react'
import React from "react";
import "./style.css";
// import {addNewLesson, dbN5, getDataLesson} from "../../services/firebase/tutorial.service";
import firebase from "../../services/firebase/firebase";

export const Demo = () => {
  const addData = () => {
    let obj_grammar = [{
      G1: {
        title: 'べからず',
        url: 'https://i.ibb.co/bvs9VnY/image.png'
      },
      G2: {
        title: 'めく',
        url: 'https://i.ibb.co/BCtnmz9/image.png'
      },
      G3: {
        title: 'からある／からいる／からの',
        url: 'https://i.ibb.co/dGbFTK5/image.png'
      }
    },
    {
      G1: {
        title: '〜てしかたがない／〜てしょうがない／〜てたまらない',
        url: 'https://i.ibb.co/dJdhHSy/image.png'
      },
      G2: {
        title: '〜ことだ',
        url: 'https://i.ibb.co/pxnW2rg/image.png'
      },
      G3: {
        title: '〜ものだ・〜たいものだ・〜てほしいものだ',
        url: 'https://i.ibb.co/VgD1HMv/image.png'
      }
    },
    {
      G1: {
        title: '文法N3－第1課',
        url: 'https://i.ibb.co/Qb6whRh/N3-1.png'
      },
      G2: {
        title: '文法N3－第2課',
        url: 'https://i.ibb.co/FD3RZwb/N3-2.png'
      },
      G3: {
        title: '文法N3－第3課',
        url: 'https://i.ibb.co/hfNJHN0/N3-3.png'
      }
    },
    {
      G1: {
        title: '謙譲語 (Khiêm nhường ngữ)',
        url: 'https://i.ibb.co/5L7nvJW/Khi-m-nh-ng-ng.png'
      },
      G2: {
        title: '敬語 (Kính ngữ)／Các loại 敬語',
        url: 'https://i.ibb.co/mvbRDY9/K-nh-ng-C-c-lo-i.png'
      },
      G3: {
        title: 'ら・たら',
        url: 'https://i.ibb.co/KWqNDRf/image.png'
      }
    },
    {
      G1: {
        title: 'Cách chia động từ thể sai khiến／Cách dùng mẫu câu sai khiến',
        url: 'https://i.ibb.co/6HjHVbF/C-ch-chia-ng-t-th-sai-khi-n-C-ch-d-ng-m-u-c-u-sai-khi-n.png'
      },
      G2: {
        title: '～とき～',
        url: 'https://i.ibb.co/D1P1wt9/image.png'
      },
      G3: {
        title: 'あげます・ もらいます・くれます',
        url: 'https://i.ibb.co/9nrv4cv/image.png'
      }
    }]
    let obj_reading = [{
      R1: {
        content: '新聞をめくっていたら、こんな広告が目に飛び込んできた。「ほしいものが突然あらわれる。これは不思議なカタログです」\n\n「ほしいものは何ですか」と聞かれても「特にない」と答えてしまう人のために、そのカタログは作られているという。そこに例示されている世界の一流品の写真と能書きを読んでいたら、確かに私も「ほしいなあ」と思った。\n\n「足りないものは何もないはずなのに、次々とほしいものがあらわれる」といったあたり、なかなか正直な広告だ。本来、広告とはそういうものだろう。必要なものは、広告なんか見なくても人は買いもとめる。別に必要じゃない人にまで、なんとなく欲しいと思わせてこそ、広告なのである。',
        question: [{
          title: 'そういうものとはどんなものか。',
          answer: [
            { type: 'A', content: '世界の一流品が手軽に買えるもの' },
            { type: 'B', content: 'いつでも必要な品が買えるもの' },
            { type: 'C', content: '必要じゃない人にもほしいと思わせるもの' },
            { type: 'D', content: '足りない品は何かを教えるもの' },
          ],
          id: 1,
          correct_answer: 'C'
        }]
      }
    },
    {
      R1: {
        content: 'ノースグループではお客様への感謝を表したくお客様感謝の日を設けました。ノース菓子店は毎月１日（１２月と１月は除く）に全てのお菓子が２０％引きになります。レストランウェストでは毎月１５日（１２月は除く）、全てのメニューが２０％引きになりますが、予約の場合は除きます。イースト食堂では毎月２０日（１２月は除く）に全てのメニューが２０％引きになりますが予約の場合は割引できません。毎月２０日（１２月は除く）はサウスコーヒー店の全てのお菓子が２０％引きになります。皆様のご来店をお待ち申し上げております。\n\n店主',
        question: [{
          title: '２０％割引きになるのはどの日か。',
          answer: [
            { type: 'A', content: '９月２０日友達とイースト食堂で夕食を食べた。' },
            { type: 'B', content: 'レストランウエストで１月１５日の誕生日会用の部屋を取ってもらった。' },
            { type: 'C', content: '１月２０日サウスコーヒー店でコーヒーと紅茶を注文した。' },
            { type: 'D', content: 'ノース菓子店で１月１日にお土産用のケーキを買った。' },
          ],
          id: 1,
          correct_answer: 'A'
        }]
      }
    },
    {
      R1: {
        content: '先日、新聞に動物が減っているという記事がのっていた。その新聞にはトラ（注1）のことが書いてあった。世界で自然にいるトラは、だいたい3400頭～5100頭と言われている。100年前には10万頭いたとされるが、その3%～5%に減ってしまった。そのうち3種類のトラがすでにいなくなった。最も多い種類のトラでも、2000頭程度だそうだ。なぜ、こんなに減ってしまったのだろうか。それは、開発（注2）によってトラの生活している森林などが壊されたり、毛皮や薬の原料にすることを目的としてトラを殺したからだそうだ。こうしたことはトラだけではなく、いろいろな動物や植物にも起こっている。開発は人間の生活を便利で豊かにするために行われる。おかげで、私たちは自由に旅行をしたり、自宅で世界中の情報を見られるほど豊かになった。しかし、一方でこのようなことが起こっているも知る必要があるんだろう。\n\n（注1）トラ：動物\n\n（注2）開発：森林などを人の役に立つようにすること\n\n（注1）トラ：動物\n\n（注2）開発：森林などを人の役に立つようにすること',
        question: [{
          title: '今のトラの数について、正しいものはどれか。',
          answer: [
            { type: 'A', content: '100年前より3～5％少なくなり、3種類のトラがいなくなった。' },
            { type: 'B', content: '100年前の3～5％程度で、3種類のトラがいなくなった。' },
            { type: 'C', content: '100年前の3～5％程度で、2000頭少なくなった。' },
            { type: 'D', content: '100年前より3～5％少なくなり、2000頭しかいない。' },
          ],
          id: 1,
          correct_answer: 'B'
        },
        {
          title: 'トラが少なくなった原因として、正しいものはどれか。',
          answer: [
            { type: 'A', content: '森林が壊されたり、トラが毛皮や薬の原料にされたから。' },
            { type: 'B', content: '生活が便利になり、海外旅行も簡単にできるようになったから。' },
            { type: 'C', content: '世界の情報が自宅で簡単にわかる時代になったから。' },
            { type: 'D', content: '生活は豊かになったが、トラの生活について知らなかったから。' },
          ],
          id: 2,
          correct_answer: 'A'
        },
        {
          title: '「トラが減った」ことを通して、何を考えなければいけないと言っているか。',
          answer: [
            { type: 'A', content: '生活が豊かになるためには、動物が減っていくのは仕方がないということ。' },
            { type: 'B', content: '生活が豊かになったが、動物のことはそれとは別だということ。' },
            { type: 'C', content: '生活は豊かになったが、トラなどの動物が減っていくのは悲しいということ。' },
            { type: 'D', content: '生活を豊かにするために、動物を殺したり自然の壊したりしていること。' },
          ],
          id: 3,
          correct_answer: 'D'
        }]
      }
    },
    {
      R1: {
        content: '問題：文章を　読んで、一番 良いもの を一つ 選んでください。\n\n山下さん、小包が届とどきました。たくさん 送ってくださって、ありがとうございました。わたしは毎日忙しいですが、元気です。\n\n日本語は難しいですが、わからないときは、同じ部屋の田中さんに 教えてもらいます。たなかさんは日本語だけでなく、いろいろなことをとても親切に 教えてくれます。\n\nおととい、大家さんに　箱根へ　連れていっていただきました。そこで 初めて 温泉に入りました。気持ちがよかったです。みなさんに しんせつにしていただいて、毎日とても楽しいです。\n\n山下さんもいつか、わたしの国に来てください。それでは、お元気で。\n\n６月１５日',
        question: [{
          title: '筆者は　どんな　ひとですか。',
          answer: [
            { type: 'A', content: '大家さん' },
            { type: 'B', content: '山下さん' },
            { type: 'C', content: '留学生' },
            { type: 'D', content: '日本人' },
          ],
          id: 1,
          correct_answer: 'C'
        },
        {
          title: '「わたし」は　だれから　小包を　もらいましたか。',
          answer: [
            { type: 'A', content: '大家さん' },
            { type: 'B', content: '田中さん' },
            { type: 'C', content: '山田さん' },
            { type: 'D', content: '山下さん' },
          ],
          id: 2,
          correct_answer: 'D'
        },
        {
          title: '文章に合っているのは　どれですか。',
          answer: [
            { type: 'A', content: '田中さんは　日本語を　教えてもらいます。' },
            { type: 'B', content: '山下さんは　私の国に　来ました。' },
            { type: 'C', content: '大家さんに　箱根で　温泉へ連れていっていただきました。' },
            { type: 'D', content: 'みなさんに　いろいろなことを　くれました。' },
          ],
          id: 3,
          correct_answer: 'C'
        }]
      }
    },
    {
      R1: {
        content: '問題：文章を読んで、一番良いものを一つ選んでください。\n\n将来は…\n\n山本君、川田君、佐藤君は同じ高校を出ました。そして今は･････。\n\n＜山本一郎＞僕は今小さい引っ越しの会社で働いています。友達はみんな大学へ行きましたが、僕は大学で勉強したいことが見つかりませんでした。大学へ行っても意味がないと思いました。働いて、自分のお金で好きなことをしたいです。どこか外国へ行きたいです。いろいろ経験したら、ほんとうにしたいことが見つかると思います。\n\n＜川田悟＞富士大学で経済を勉強しています。ほんとうは経済の勉強より音楽のほうが好きだからミュージシャンになりたいけど･････。\nでも両親が、将来を考えたら、大学を出なければならないと言いました。僕も、いくら好きなことをしても、安定した生活ができなかったら、幸せになることはできないと思います。\n\n＜佐藤さとう健けん＞高校を出るとき、両親とけんかをしました。僕は劇団げきだん（注１）に入はいって、好きな演劇えんげき（注２）をすると言いました。両親は大学へ行かなければならない、演劇えんげきで生活することはできない、将来きっと後悔こうかい（注３）すると言いました。\n\n僕は家いえを出て、一人ひとりで生活しています。親おやからお金をもらっていません。生活は苦くるしいです。でも、したいことがありますから、苦くるしくても、頑張がんばります。\n\n（注１）劇団げきだん：Đoàn kịch\n\n（注２）演劇えんげき：Diễn kịch, đóng kịch\n\n（注３）後悔こうかい：Hối tiếc, nuối tiếc',
        question: [{
          title: '山本君は（）。',
          answer: [
            { type: 'A', content: '自分のお金で大学へ行きます' },
            { type: 'B', content: '自分のお金で外国へ行きます' },
            { type: 'C', content: '両親にもらったお金で大学へ行きます' },
            { type: 'D', content: '両親にもらったお金で外国へ行きます' },
          ],
          id: 1,
          correct_answer: 'B'
        },
        {
          title: 'どうして川田さんは大学に入りましたか。',
          answer: [
            { type: 'A', content: '富士大学で勉強することはかれの夢です' },
            { type: 'B', content: 'ミュージシャンになりたいです' },
            { type: 'C', content: '両親は大学を出なければならないと言ました。彼はそう思いました' },
            { type: 'D', content: 'ミュージシャンになったら、幸せになることはできます' },
          ],
          id: 2,
          correct_answer: 'C'
        },
        {
          title: '今、佐藤君の生活はどうですか。',
          answer: [
            { type: 'A', content: '苦しいが、頑張ります' },
            { type: 'B', content: '苦しくて、危ないです' },
            { type: 'C', content: '安定しています' },
            { type: 'D', content: 'いつも幸せになります' },
          ],
          id: 3,
          correct_answer: 'A'
        }]
      }
    }]
    let obj_test = [{
      T1: {
        question: [{
          title: '試験の出来ですか。すごくよくはなかったけど（＿＿＿）だったと思います。',
          answer: [
            { type: 'A', content: 'せいぜい' },
            { type: 'B', content: 'そろそろ' },
            { type: 'C', content: 'ゆうゆう' },
            { type: 'D', content: 'まあまあ' },
          ],
          id: 1,
          correct_answer: 'D'
        },
        {
          title: '彼女を動物に（＿＿＿）と、気まぐれなところがネコっぽいね。',
          answer: [
            { type: 'A', content: '例える' },
            { type: 'B', content: '比べる' },
            { type: 'C', content: 'たたえる' },
            { type: 'D', content: 'こたえる' },
          ],
          id: 2,
          correct_answer: 'A'
        },
        {
          title: 'なんですぐ行動に移す彼は、気が短い人間だと（＿＿＿）されている。',
          answer: [
            { type: 'A', content: '評判' },
            { type: 'B', content: '結論' },
            { type: 'C', content: '誤解' },
            { type: 'D', content: '決定' },
          ],
          id: 3,
          correct_answer: 'C'
        },
        {
          title: '新人社員は、（＿＿＿）魅力にあふれえいる。',
          answer: [
            { type: 'A', content: 'オープン' },
            { type: 'B', content: 'フレッシュ' },
            { type: 'C', content: 'ダイレクト' },
            { type: 'D', content: 'ショック' },
          ],
          id: 4,
          correct_answer: 'B'
        },
        {
          title: 'この運動靴は歩きやすさとデザインのよさを（＿＿＿）備えている。',
          answer: [
            { type: 'A', content: '持ち' },
            { type: 'B', content: '造り' },
            { type: 'C', content: '取り' },
            { type: 'D', content: '兼ね' },
          ],
          id: 5,
          correct_answer: 'D'
        },
        {
          title: 'ボランティア活動を(選択)科目に取り入れている大学が多くなっている。',
          answer: [
            { type: 'A', content: 'せんだく' },
            { type: 'B', content: 'ぜんだく' },
            { type: 'C', content: 'せんたく' },
            { type: 'D', content: 'ぜんたく' },
          ],
          id: 6,
          correct_answer: 'C'
        },
        {
          title: '飛行場を建設するには(膨大)な費用がかかる。',
          answer: [
            { type: 'A', content: 'ぼうだい' },
            { type: 'B', content: 'ちょうだい' },
            { type: 'C', content: 'ぼくだい' },
            { type: 'D', content: 'じんだい' },
          ],
          id: 7,
          correct_answer: 'A'
        },
        {
          title: '軽く言ったつもりの(冗談)が友人を傷つけてしまった。',
          answer: [
            { type: 'A', content: 'しょうだん' },
            { type: 'B', content: 'じょだん' },
            { type: 'C', content: 'じょうたん' },
            { type: 'D', content: 'じょうだん' },
          ],
          id: 8,
          correct_answer: 'D'
        },
        {
          title: 'あのコーチは選手の(かくれた)能力を引き出すのがうまい。',
          answer: [
            { type: 'A', content: '隠れた' },
            { type: 'B', content: '陰れた' },
            { type: 'C', content: '隆れた' },
            { type: 'D', content: '隔れた' },
          ],
          id: 9,
          correct_answer: 'A'
        },
        {
          title: '火山灰は電気(けいとう)に入り込む、さまざまな誤作動を起こすことがある。',
          answer: [
            { type: 'A', content: '計統' },
            { type: 'B', content: '形統' },
            { type: 'C', content: '糸統' },
            { type: 'D', content: '経統' },
          ],
          id: 10,
          correct_answer: 'C'
        }]
      }
    },
    {
      T1: {
        question: [{
          title: '外食は野菜不足になり（＿＿＿）だ。',
          answer: [
            { type: 'A', content: 'げ' },
            { type: 'B', content: 'がち' },
            { type: 'C', content: 'もの' },
            { type: 'D', content: 'っぽい' },
          ],
          id: 1,
          correct_answer: 'B'
        },
        {
          title: '読んではいる（＿＿＿）、本の内容はちっとも頭に入らない。',
          answer: [
            { type: 'A', content: 'ものの' },
            { type: 'B', content: 'ものなら' },
            { type: 'C', content: 'ものだから' },
            { type: 'D', content: 'んだもの' },
          ],
          id: 2,
          correct_answer: 'A'
        },
        {
          title: '病気の子を見ていると、代われる（＿＿＿）代わってやりたいと思う。',
          answer: [
            { type: 'A', content: 'ものか' },
            { type: 'B', content: 'ものの' },
            { type: 'C', content: 'ものなら' },
            { type: 'D', content: 'ものだから' },
          ],
          id: 3,
          correct_answer: 'C'
        },
        {
          title: 'あんまり（＿＿＿）もんだから、だれもいないのかと思った。',
          answer: [
            { type: 'A', content: '静か' },
            { type: 'B', content: '静かな' },
            { type: 'C', content: '静かだ' },
            { type: 'D', content: '静かの' },
          ],
          id: 4,
          correct_answer: 'B'
        },
        {
          title: '修理すれば（＿＿＿）けれど、海外でも知られている。',
          answer: [
            { type: 'A', content: '使えないものだ' },
            { type: 'B', content: '使ってはならない' },
            { type: 'C', content: '使わばならない' },
            { type: 'D', content: '使えないこともない' },
          ],
          id: 5,
          correct_answer: 'D'
        },
        {
          title: 'こんなに食費がかかるとは(勘定)に入れてなかった。',
          answer: [
            { type: 'A', content: 'かんてい' },
            { type: 'B', content: 'かんじょう' },
            { type: 'C', content: 'かんでい' },
            { type: 'D', content: 'かんしょう' },
          ],
          id: 6,
          correct_answer: 'B'
        },
        {
          title: '飛行機事故の原因を(徹底的)に調査する。',
          answer: [
            { type: 'A', content: 'てっていでき' },
            { type: 'B', content: 'てつていてき' },
            { type: 'C', content: 'てつでいてき' },
            { type: 'D', content: 'てっていてき' },
          ],
          id: 7,
          correct_answer: 'D'
        },
        {
          title: '新人作家のデビュー作はサイトで厳しく(ひひょう)された。',
          answer: [
            { type: 'A', content: '非評' },
            { type: 'B', content: '比評' },
            { type: 'C', content: '品評' },
            { type: 'D', content: '批評' },
          ],
          id: 8,
          correct_answer: 'D'
        },
        {
          title: 'あの会社の経営状況はここ数年(下降)している。',
          answer: [
            { type: 'A', content: 'げこう' },
            { type: 'B', content: 'げごう' },
            { type: 'C', content: 'かこう' },
            { type: 'D', content: 'かごう' },
          ],
          id: 9,
          correct_answer: 'C'
        },
        {
          title: 'あくびはなぜ他人に(でんせん)するのかは、まだ学問的にわかっていない。',
          answer: [
            { type: 'A', content: '電染' },
            { type: 'B', content: '伝染' },
            { type: 'C', content: '電線' },
            { type: 'D', content: '伝線' },
          ],
          id: 10,
          correct_answer: 'B'
        }]
      }
    },
    {
      T1: {
        question: [{
          title: 'A:「宅配便たくはいびん（＿＿＿）どういう意味？」\nB:「荷物を届けるサービスだよ。」',
          answer: [
            { type: 'A', content: 'ては' },
            { type: 'B', content: 'って' },
            { type: 'C', content: 'と' },
            { type: 'D', content: 'のは' },
          ],
          id: 1,
          correct_answer: 'B'
        },
        {
          title: '連休には、長野の友だちのうちへ（＿＿＿）。',
          answer: [
            { type: 'A', content: '行けばよかった' },
            { type: 'B', content: '行くわけだ' },
            { type: 'C', content: '行くところだった' },
            { type: 'D', content: '行くことにしました' },
          ],
          id: 2,
          correct_answer: 'D'
        },
        {
          title: '人の心配ばかりしないで、あなた（＿＿＿）少し休みなさいよ。',
          answer: [
            { type: 'A', content: 'くらい' },
            { type: 'B', content: 'さえ' },
            { type: 'C', content: 'こそ' },
            { type: 'D', content: 'だけ' },
          ],
          id: 3,
          correct_answer: 'C'
        },
        {
          title: '私の病気のことは、勤め先どころか妻に（＿＿＿）知らせていない。',
          answer: [
            { type: 'A', content: 'こそ' },
            { type: 'B', content: 'さえ' },
            { type: 'C', content: 'なんか' },
            { type: 'D', content: 'だけ' },
          ],
          id: 4,
          correct_answer: 'B'
        },
        {
          title: '兄の話によると、山田さんは帰国してしまった（＿＿＿）。',
          answer: [
            { type: 'A', content: 'だけ' },
            { type: 'B', content: 'こと' },
            { type: 'C', content: 'とか' },
            { type: 'D', content: 'など' },
          ],
          id: 5,
          correct_answer: 'C'
        },
        {
          title: '田中君からこの半年間何の(しょうそく)もない。',
          answer: [
            { type: 'A', content: '消息' },
            { type: 'B', content: '賞息' },
            { type: 'C', content: '章自' },
            { type: 'D', content: '賞自' },
          ],
          id: 6,
          correct_answer: 'A'
        },
        {
          title: '何も(もんだい)はない。',
          answer: [
            { type: 'A', content: '門題' },
            { type: 'B', content: '問題' },
            { type: 'C', content: '話題' },
            { type: 'D', content: '課題' },
          ],
          id: 7,
          correct_answer: ''
        },
        {
          title: 'トムは委員会が彼の(ていぎ)を承認することを望んでいた。',
          answer: [
            { type: 'A', content: '定義' },
            { type: 'B', content: '提議' },
            { type: 'C', content: '定議' },
            { type: 'D', content: '提義' },
          ],
          id: 8,
          correct_answer: 'B'
        },
        {
          title: '(さくばん)は楽しかった。',
          answer: [
            { type: 'A', content: '昨晩' },
            { type: 'B', content: '作晩' },
            { type: 'C', content: '作免' },
            { type: 'D', content: '昨免' },
          ],
          id: 9,
          correct_answer: 'A'
        },
        {
          title: '地域によってはやきとんを(ふくめた)肉の串焼き料理全般を「焼き鳥」と呼ぶこともある。',
          answer: [
            { type: 'A', content: '含た' },
            { type: 'B', content: '合た' },
            { type: 'C', content: '合めた' },
            { type: 'D', content: '含めた' },
          ],
          id: 10,
          correct_answer: 'D'
        }]
      }
    },
    {
      T1: {
        question: [{
          title: '(お手洗い)はどこですか。',
          answer: [
            { type: 'A', content: 'おてあらい' },
            { type: 'B', content: 'おしゅあらい' },
            { type: 'C', content: 'おてらい' },
            { type: 'D', content: 'おしゅらい' },
          ],
          id: 1,
          correct_answer: 'A'
        },
        {
          title: '父は母に彼のきゅうりょうぜんかくを(渡し)ている。',
          answer: [
            { type: 'A', content: 'わかし' },
            { type: 'B', content: 'はなし' },
            { type: 'C', content: 'わたし' },
            { type: 'D', content: 'はだし' },
          ],
          id: 2,
          correct_answer: 'C'
        },
        {
          title: '最近はどんな(具合)ですか。',
          answer: [
            { type: 'A', content: 'ぐあい' },
            { type: 'B', content: 'ぐらい' },
            { type: 'C', content: 'くおい' },
            { type: 'D', content: 'くあい' },
          ],
          id: 3,
          correct_answer: 'A'
        },
        {
          title: 'もうテレビを置く(ばしょ)がない。',
          answer: [
            { type: 'A', content: '場合' },
            { type: 'B', content: '易所' },
            { type: 'C', content: '場所' },
            { type: 'D', content: '得近' },
          ],
          id: 4,
          correct_answer: 'C'
        },
        {
          title: 'いい(くすり)はありますか。',
          answer: [
            { type: 'A', content: '薬' },
            { type: 'B', content: '楽' },
            { type: 'C', content: '燥' },
            { type: 'D', content: '葉' },
          ],
          id: 5,
          correct_answer: 'A'
        },
        {
          title: 'A:先生、­­＿＿＿でしょう？\nB:ええ、少し疲れましたね。',
          answer: [
            { type: 'A', content: 'お疲れになる' },
            { type: 'B', content: 'お疲れになった' },
            { type: 'C', content: 'お疲れをする' },
            { type: 'D', content: 'お疲れをした' },
          ],
          id: 6,
          correct_answer: 'B'
        },
        {
          title: 'A:部長はこの会社に何年ぐらい­­＿＿＿か。\nB:そうですね。30年ぐらい勤めました。',
          answer: [
            { type: 'A', content: 'お勤めをした' },
            { type: 'B', content: 'お勤めをしました' },
            { type: 'C', content: 'お勤めになった' },
            { type: 'D', content: 'お勤めになりました' },
          ],
          id: 7,
          correct_answer: 'D'
        },
        {
          title: 'A:課長、会社に­­＿＿＿つもりですか。\nB:ええ、戻ろうと思っています。',
          answer: [
            { type: 'A', content: 'お戻りをする' },
            { type: 'B', content: 'お戻りをした' },
            { type: 'C', content: 'お戻りになる' },
            { type: 'D', content: 'お戻りになった' },
          ],
          id: 8,
          correct_answer: 'C'
        },
        {
          title: 'A:そのてちょう、どちらで­­＿＿＿んですか。\nB:エドヤストアで買いました。',
          answer: [
            { type: 'A', content: 'お買いになる' },
            { type: 'B', content: 'お買いになった' },
            { type: 'C', content: 'お買いをする' },
            { type: 'D', content: 'お買いをした' },
          ],
          id: 9,
          correct_answer: 'B'
        },
        {
          title: 'A:何を­­＿＿＿いるんですか。\nB:車のかぎを探しているんですが。あ、ポケットの中にありました。',
          answer: [
            { type: 'A', content: 'お探し' },
            { type: 'B', content: 'お探しをして' },
            { type: 'C', content: 'お探しになって' },
            { type: 'D', content: 'お探しにならって' },
          ],
          id: 10,
          correct_answer: 'C'
        }]
      }
    },
    {
      T1: {
        question: [{
          title: '漢字_____わからなかったら、ひらがな_____書いてもいいです。',
          answer: [
            { type: 'A', content: 'が／で' },
            { type: 'B', content: 'が／を' },
            { type: 'C', content: 'を／が' },
            { type: 'D', content: 'を／を' },
          ],
          id: 1,
          correct_answer: 'A'
        },
        {
          title: '_____、このくすりがいいですよ。',
          answer: [
            { type: 'A', content: 'かぜので' },
            { type: 'B', content: 'かぜでも' },
            { type: 'C', content: 'かぜだ' },
            { type: 'D', content: 'かぜだったら' },
          ],
          id: 2,
          correct_answer: 'D'
        },
        {
          title: 'ちずがなくても、来ること_____できますか。',
          answer: [
            { type: 'A', content: 'は' },
            { type: 'B', content: 'が' },
            { type: 'C', content: 'に' },
            { type: 'D', content: 'を' },
          ],
          id: 3,
          correct_answer: 'B'
        },
        {
          title: 'かんたんな漢字_____、なかなかおぼえることができません。',
          answer: [
            { type: 'A', content: 'たら' },
            { type: 'B', content: 'で' },
            { type: 'C', content: 'でも' },
            { type: 'D', content: 'のに' },
          ],
          id: 4,
          correct_answer: 'C'
        },
        {
          title: '病院へ_____、ゆっくり_____、元気になるとおもいます。',
          answer: [
            { type: 'A', content: '行かなくても／休んだら' },
            { type: 'B', content: '行かなくて／休んで' },
            { type: 'C', content: '行かなくて／休んだら' },
            { type: 'D', content: '行かなくても／休んで' },
          ],
          id: 5,
          correct_answer: 'A'
        },
        {
          title: '(銀行)は午後3時までです。今、2時半です。',
          answer: [
            { type: 'A', content: 'きんこ' },
            { type: 'B', content: 'ぎんこ' },
            { type: 'C', content: 'きんこう' },
            { type: 'D', content: 'ぎんこう' },
          ],
          id: 6,
          correct_answer: 'D'
        },
        {
          title: 'かぞくと中国へ(旅行)に行きました。たのしかったです。',
          answer: [
            { type: 'A', content: 'りょこう' },
            { type: 'B', content: 'りょうこう' },
            { type: 'C', content: 'りょこ' },
            { type: 'D', content: 'りょうこ' },
          ],
          id: 7,
          correct_answer: 'A'
        },
        {
          title: '土曜日、友達と(映画)を見ました。二回見て、食事して、晩、12時に家へ帰りました。',
          answer: [
            { type: 'A', content: 'えいか' },
            { type: 'B', content: 'ええが' },
            { type: 'C', content: 'えいが' },
            { type: 'D', content: 'えが' },
          ],
          id: 8,
          correct_answer: 'C'
        },
        {
          title: '今、(手紙)を書いています。もうすぐ終わります。',
          answer: [
            { type: 'A', content: 'でかみ' },
            { type: 'B', content: 'てがみ' },
            { type: 'C', content: 'てかみ' },
            { type: 'D', content: 'でがみ' },
          ],
          id: 9,
          correct_answer: 'B'
        },
        {
          title: '漢字には(意味)があります。だから、おもしろいです。',
          answer: [
            { type: 'A', content: 'みあし' },
            { type: 'B', content: 'みあじ' },
            { type: 'C', content: 'いいみ' },
            { type: 'D', content: 'いみ' },
          ],
          id: 10,
          correct_answer: 'D'
        }]
      }
    }]
    let obj = {
    };
    for (let i = 1; i < 6; i++)
      for (let j = 1; j < 6; j++) {
        firebase.doc(`/Course/N${i}`).collection(`L${j}`).doc(`Grammar`).set(obj_grammar[j - 1]);
        firebase.doc(`/Course/N${i}`).collection(`L${j}`).doc(`Reading`).set(obj_reading[j - 1]);
        firebase.doc(`/Course/N${i}`).collection(`L${j}`).doc(`Test`).set(obj_test[j - 1]);
      }
  };

  return (
    <div>
      <button onClick={() => addData()}>Add Data</button>
    </div>
  );
};