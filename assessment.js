'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

/**
 * 指定した要素の子供をすべて削除する
 * @param {HTMLElement} element HYMLの要素
 */
function removeAllChildren (element) {
    while (element.firstChild) { // 子どもの要素がある限り削除
        element.removeChild(element.firstChild);
    }
}

assessmentButton.onclick = ()　=> {
    const userName = userNameInput.value;
    if (userName.length === 0) { // 名前が空の時は処理を終了する
        return;
    }
    
    // 診断結果表示エリアの作成
    removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

    // ツイートエリアの作成
    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
        + encodeURIComponent('艦娘ランダム選択')
        + '&ref_src=twsrc%5Etfw';

    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', result);
    anchor.innerText = 'Tweet #艦娘ランダム選択';
    tweetDivided.appendChild(anchor);

    //widgets.jsの設定
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetDivided.appendChild(script);
};

userNameInput.onkeydown = (event) => {
    if (event.key === 'Enter') {
      // ボタンのonclick() 処理を呼び出す
      assessmentButton.onclick();
    }
};

// 回答一覧
const answers = [
    'Aquila',
    'Ark Royal',
    'Atlanta',
    'Bismarck',
    'Colorado',
    'Commandant Teste',
    'De Ruyter',
    'Fletcher',
    'Gambier Bay',
    'Giuseppe Garibaldi',
    'Gotland',
    'Graf Zeppelin',
    'Grecale',
    'Houston',
    'Intrepid',
    'Iowa',
    'Janus',
    'Jervis',
    'Johnston',
    'Libeccio',
    'Littorio(Italia)',
    'Luigi di Savoia Duca degli Abruzzi',
    'Luigi Torelli(UIT-25/伊504)',
    'Maestrale',
    'Nelson',
    'Perth',
    'Pola',
    'Prinz Eugen',
    'Richelieu',
    'Roma',
    'Samuel B.Roberts',
    'Saratoga',
    'U-511(さつき1号/呂500)',
    'Warspite',
    'Z1',
    'Z3',
    'Zara',
    'あきつ丸',
    'まるゆ',
    '阿賀野',
    '阿武隈',
    '愛宕',
    '綾波',
    '伊13',
    '伊14',
    '伊168',
    '伊19',
    '伊26',
    '伊400',
    '伊401',
    '伊58',
    '伊8',
    '伊勢',
    '伊良湖',
    '衣笠',
    '磯波',
    '磯風',
    '羽黒',
    '卯月',
    '浦波',
    '浦風',
    '雲龍',
    '沖波',
    '加賀',
    '加古',
    '霞',
    '海風',
    '葛城',
    '巻雲',
    '間宮',
    '岸波',
    '旗風',
    '鬼怒',
    '菊月',
    '球磨',
    '狭霧',
    '響(Верный)',
    '暁',
    '金剛',
    '熊野',
    '古鷹',
    '五月雨',
    '五十鈴',
    '御蔵',
    '江風',
    '荒潮',
    '香取',
    '高波',
    '高雄',
    '国後',
    '黒潮',
    '佐渡',
    '最上',
    '皐月',
    '三隈',
    '三日月',
    '山雲',
    '山城',
    '山風',
    '子日',
    '時雨',
    '時津風',
    '鹿島',
    '若葉',
    '酒匂',
    '秋雲',
    '秋月',
    '秋霜',
    '秋津洲',
    '春雨',
    '春日丸(大鷹)',
    '春風',
    '初月',
    '初春',
    '初雪',
    '初霜',
    '初風',
    '曙',
    '松風',
    '松輪',
    '照月',
    '祥鳳',
    '榛名',
    '深雪',
    '神威',
    '神州丸',
    '神鷹',
    '神通',
    '神風',
    '親潮',
    '吹雪',
    '水無月',
    '瑞鶴',
    '瑞穂',
    '瑞鳳',
    '清霜',
    '青葉',
    '石垣',
    '赤城',
    '雪風',
    '千歳',
    '千代田',
    '占守',
    '川内',
    '叢雲',
    '早霜',
    '早波',
    '蒼龍',
    '足柄',
    '速吸',
    '村雨',
    '多摩',
    '対馬',
    '大井',
    '大鯨(龍鳳)',
    '大潮',
    '大東',
    '大鳳',
    '大淀',
    '大和',
    '択捉',
    '谷風',
    '筑摩',
    '朝雲',
    '朝霜',
    '朝潮',
    '朝風',
    '潮',
    '長月',
    '長波',
    '長門',
    '長良',
    '鳥海',
    '天城',
    '天津風',
    '天霧',
    '天龍',
    '電',
    '島風',
    '藤波',
    '那珂',
    '那智',
    '日向',
    '日振',
    '日進',
    '如月',
    '能代',
    '萩風',
    '白雪',
    '白露',
    '八丈',
    '隼鷹',
    '比叡',
    '飛鷹',
    '飛龍',
    '浜波',
    '浜風',
    '不知火',
    '扶桑',
    '敷波',
    '武蔵',
    '舞風',
    '風雲',
    '福江',
    '文月',
    '平戸',
    '峯雲',
    '鳳翔',
    '望月',
    '北上',
    '睦月',
    '摩耶',
    '満潮',
    '妙高',
    '霧島',
    '名取',
    '明石',
    '木曾',
    '野分',
    '弥生',
    '矢矧',
    '由良',
    '夕雲',
    '夕張',
    '夕立',
    '陽炎',
    '雷',
    '嵐',
    '利根',
    '陸奥',
    '龍田',
    '龍驤',
    '涼月',
    '涼風',
    '鈴谷',
    '漣',
    '朧',
    '翔鶴',
    '霰',
    'Гангут',
    'Ташкент',
];


/**
 * 名前の文字列を渡すと診断結果を返す件数
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */

// 診断処理
function assessment(userName) {
    //全文字のコード番号を取得してそれを足し合わせる
    let sumOfCharCode = 0;
    for (let i = 0; i< userName.length; i++){
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }
    // 日付を足す
    let today = new Date();
    sumOfCharCode = sumOfCharCode + (today.getFullYear() * 10000 + ( today.getMonth() + 1) * 100) +today.getDate() );

    //文字のコード番号の合計を回答の数で割って添字の数値を求める
    const index = sumOfCharCode % answers.length;
    let result = "今日の艦娘は"  + answers[index] + "です！";

    // {userName}をユーザの名前に置き換える
    // result = result.replace(/\{userName\}/g, userName);
    return result;
}
// テストコード

