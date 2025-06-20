// メニューボタン
const btnOpen = document.querySelector("#menu-open");
const btnClose = document.querySelector("#menu-close");
const menuPanel = document.querySelector(".menu-container");
const overlay = document.querySelector(".overlay-body");

// メニューボタンをクリック
btnOpen.addEventListener("click", () => {
  menuPanel.classList.add("panel-open");
  overlay.classList.add("open");
});
// 閉じるボタンをクリック
btnClose.addEventListener("click", () => {
  menuPanel.classList.remove("panel-open");
  overlay.classList.remove("open");
});
overlay.addEventListener("click", () => {
  menuPanel.classList.remove("panel-open");
  overlay.classList.remove("open");
});
const menuLinks = document.querySelectorAll(".menu a");
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuPanel.classList.remove("panel-open");
    overlay.classList.remove("open");
  });
});
// スクロールしたら表示
window.addEventListener("scroll", function() {
    const menuBtn = document.getElementById("menu-open");
    if(window.scrollY >= 60){
        menuBtn.classList.add("show");
    } else {
        menuBtn.classList.remove("show");
    }
});
window.addEventListener("scroll", function() {
    const menuBtn = document.getElementById("to-top");
    if(window.scrollY >= 60){
        menuBtn.classList.add("show");
    } else {
        menuBtn.classList.remove("show");
    }
});

// オープンウェザーAPIを用いた天気情報の表示
// 自分のAPIキー
const API_KEY_WEATHER ='a31521da276be987dafa0b56da4ed5d9';
// 基本URL
const URL = "https://api.openweathermap.org/data/2.5/weather?";
// 都市名
const CITY = 'q=Tokyo,jp';
// セ氏指定
const UNITS = `&units=metric`
// 日本語表示
const LANG = '&lang=ja'
// 最終的なURL
const url = URL + CITY + '&appid=' + API_KEY_WEATHER + UNITS + LANG;

// 観光地データ
const spots = {
  sunny: [
    { id: "yoyogi", 
      name: "代々木公園", 
      pin: "images/pin-sunny.png",
      image: "images/yoyogi.webp", 
      text: "都会の森で深呼吸。木漏れ日と風を感じながら、ゆったりピクニックにぴったりの場所。",
      desc: "青空が広がる日には、まずここ。都心とは思えないほど広々とした緑が広がる代々木公園は、まさに晴れの日専用スポット。<br>芝生にシートを広げてピクニックしたり、ちょっと運動したり、本を読んだり…自分らしい過ごし方ができる自由な空間が広がっています。<br>太陽の光をたっぷり浴びながら、風に揺れる木々の音に耳をすませて。晴れた日だからこそ味わえる気持ちよさがある場所です。" ,
      businessHours: "24時間営業",
      admissionFree: "無料",
      admissionFreeDetail: "",
      officialSite: "https://www.tokyo-park.or.jp/park/yoyogi/",
      officialSiteTitle: "代々木公園 | 公園へ行こう",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.281709790084!2d139.69238531280834!3d35.67006487247655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cb479620a33%3A0x34bcc78ce7f8bf3e!2z5Luj44CF5pyo5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1747755986788!5m2!1sja!2sjp"
    },
    { id: "ueno", 
      name: "上野恩寵公園", 
      pin: "images/pin-sunny.png",
      image: "images/ueno.webp", 
      text: "広い空と季節の花が迎えてくれる、東京屈指のお散歩パラダイス。美術館めぐりや動物園も楽しめるよ。",
      desc: "晴れた日は、文化と自然を一度に楽しめる上野恩賜公園へ。<br>歴史ある美術館や動物園を巡ったり、池の周りをゆっくり散歩したり、楽しみ方はいろいろ。<br>特に陽射しの中できらめく不忍池の風景は、ちょっとした旅気分を味わえます。<br>晴れ空のもと、都会にいながらのんびりと自然と文化に触れられる、贅沢な一日を過ごしてみてください。",
      businessHours: "5:00～2300",
      admissionFree: "無料",
      admissionFreeDetail: "",
      officialSite: "https://www.tokyo-park.or.jp/park/yoyogi/",
      officialSiteTitle: "上野恩寵公園 Ueno Park <br>公式ホームページ | 東京都建設局",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25915.5568468532!2d139.73679164721094!3d35.71528262882288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188e9b45906ac3%3A0xb1cb3623124e645a!2z5LiK6YeO5oGp6LOc5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1747757096939!5m2!1sja!2sjp"
    },
    { id: "odaiba", 
      name: "お台場海浜公園", 
      pin: "images/pin-sunny.png",
      image: "images/odaiba.webp", 
      text: "青空と海を一度に味わえる、開放感バツグンのリゾート空間。砂浜でのんびり、都会の非日常を満喫しよう。",
      desc: "海と空と風。お台場海浜公園は、晴れの日の爽快感を全身で味わえるスポット！<br>東京湾を見渡せる開放的なビーチで、波の音を聞きながらのんびり過ごすのもよし、レインボーブリッジを眺めながら写真を撮るのもよし。<br>晴れた空の下では、どこを切り取っても絵になる景色が広がっています。<br>ちょっと遠出した気分になりたいときに、ぴったりの場所です。",
      businessHours: "24時間営業",
      admissionFree: "無料",
      admissionFreeDetail: "",
      officialSite: "https://www.tptc.co.jp/park/01_02",
      officialSiteTitle: "お台場海浜公園&提婆公園 | 海上公園なび",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12971.623256371222!2d139.76539148366817!3d35.630048361659284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a1deb0ac2d7%3A0x7dd3beb4c8363729!2z44GK5Y-w5aC05rW35rWc5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1747881969628!5m2!1sja!2sjp"
    }
  ],
  cloudy: [
    { id: "rokugienn", 
      name: "六義園", 
      pin: "images/pin-cloudy.png",
      image: "images/rokugienn.webp", 
      text: "しっとり落ち着いた緑に包まれて、静かな庭園散歩。曇りの日の空気が和の美しさを引き立てる。",
      desc: "江戸の風情を残す回遊式庭園「六義園」は、曇り空の日にこそ訪れてほしい場所です。<br>強い日差しがない曇りの日は、広い庭園をゆったり歩くのにちょうど良い気候。<br>池の水面にうっすら映る空や、しっとりとした緑の苔の美しさが引き立つのも、こんな静かな日ならでは。<br>時間がゆっくり流れるような感覚に包まれながら、静けさの中で季節の移ろいを感じてみてください。", 
      businessHours: "9:00~17:00(入館は16:30まで)",
      admissionFree: "300円 （65歳以上150円）",
      admissionFreeDetail: "小学生以下、都内在住・在学の中学生は無料",
      officialSite: "https://www.tokyo-park.or.jp/teien/en/rikugien/outline.html",
      officialSiteTitle: "概要 | 六義園 | 庭園へ行こう",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.720149490827!2d139.74315321280997!3d35.73310047245606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188dbdf73e4461%3A0x7648774313f66fe5!2z5YWt576p5ZyS!5e0!3m2!1sja!2sjp!4v1747757406584!5m2!1sja!2sjp"
    },
    { id: "soramachi", 
      name: "ソラマチ", 
      pin: "images/pin-cloudy.png",
      image: "images/soramachi.webp", 
      text: "東京スカイツリーのふもとで、グルメもショッピングも満喫。曇りの日もゆったり遊べる複合スポット。",
      desc: "東京スカイツリーの足元に広がる商業施設「ソラマチ」は、曇りでもしっかり楽しめる全天候型スポット。<br>300以上のお店にグルメ、雑貨、スイーツ、さらにはプラネタリウムまで揃っていて、1日中いても飽きない空間です。<br>外が曇っていても、館内は明るくて快適。雨が降ってきても安心して遊べます。<br>気分がふわっと晴れるような、お買い物やグルメの時間をどうぞ。", 
      businessHours: "10:00~21:00(6F・7F・30F・31F飲食店舗11:00 - 23:00)",
      admissionFree: "無料",
      admissionFreeDetail: "",
      officialSite: "https://www.tokyo-solamachi.jp/",
      officialSiteTitle: "東京ソラマチ <br>- 300以上の多彩な店舗が織りなす、新しい下町",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.6498508576237!2d139.80899441280937!3d35.71023327246372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed6f9ddd30f%3A0x918ba47a310c8809!2z5p2x5Lqs44K944Op44Oe44OB!5e0!3m2!1sja!2sjp!4v1747757456781!5m2!1sja!2sjp"
    },
    { id: "arisugawa", 
      name: "有栖川宮記念公園・記念館", 
      pin: "images/pin-cloudy.png",
      image: "images/arisu.jpg", 
      text: "都会のオアシスで、静けさにひたりながらゆるやかに読書やひとやすみ。曇り空が心地よく感じる場所。",
      desc: "麻布の丘に静かに佇む「有栖川宮記念館」は、曇りの日にふらりと訪れるのにぴったりな場所。<br>クラシカルな洋館のたたずまいは、どんよりした空にも不思議とよく映えて、ちょっと異国を旅するような気分に。<br>公園内も自然が豊かで、曇りの日特有の空気の湿り気が、緑や木の香りを際立たせてくれます。<br>喧騒を離れて、心を落ち着けたいときにおすすめです。", 
      businessHours: "24時間営業",
      admissionFree: "無料",
      admissionFreeDetail: "",
      officialSite: "https://minato-park.jp/azabu/parks/arisugawa/",
      officialSiteTitle: "有栖川宮記念公園",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.017627838953!2d139.72230951280793!3d35.65193732248236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b0cae359905%3A0x108474a34d5832b6!2z5pyJ5qCW5bed5a6u6KiY5b-15YWs5ZyS!5e0!3m2!1sja!2sjp!4v1747757549769!5m2!1sja!2sjp"
    }
  ],
  rainy: [
    { id: "tokyoeki", 
      name: "東京ステーションギャラリー", 
      pin: "images/pin-rainy.png",
      image: "images/tokyoeki.webp", 
      text: "歴史ある駅舎でアートと出会う雨の日。静かな時間と非日常がすぐそこに。",
      desc: "赤レンガ駅舎の中にひっそりと佇む「東京ステーションギャラリー」は、雨の日にこそ訪れたいアート空間。<br>駅直結なので濡れる心配もなく、重厚な建築と静かな展示空間に包まれて、日常からすっと抜け出せる。<br>ガラス窓越しに眺める雨の東京駅もまた、美しくてドラマチック。<br>慌ただしい旅の途中で、ほっと心を休めたい人におすすめです。", 
      businessHours: "10:00～18:00(金曜日 10:00～20:00)<br> 月曜は定休日",
      admissionFree: "一般: 1,500円<br>高校・大学生: 1,300円<br>中学生以下: 無料",
      admissionFreeDetail: "",
      officialSite: "https://www.ejrcf.or.jp/gallery/",
      officialSiteTitle: "東京ステーションギャラリー",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12963.117243086888!2d139.75622598369037!3d35.682435661388084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfeba8313b7%3A0x7dc99a755ffb17e3!2z5p2x5Lqs44K544OG44O844K344On44Oz44Ku44Oj44Op44Oq44O8!5e0!3m2!1sja!2sjp!4v1747882610348!5m2!1sja!2sjp"
    },
    { id: "hikarie", 
      name: "渋谷ヒカリエ", 
      pin: "images/pin-rainy.png",
      image: "images/tokyohikarie.webp", 
      text: "駅直結で雨でも安心。ショップやカフェ、ギャラリーも充実で1日中楽しめる!",
      desc: "渋谷駅直結の大型複合施設「ヒカリエ」は、雨でも快適に過ごせる嬉しいスポット。<br>最新のファッションや雑貨、美味しいグルメ、そしてアートまで一度に楽しめるから、つい長居しちゃう。<br>特に高層階から見る雨にけぶる東京の街は、ちょっと幻想的で、映画のワンシーンみたい。<br>「今日は一日、屋内でゆっくり楽しもう」って日にぴったりの都会的な場所です。", 
      businessHours: "11:00～21:00",
      admissionFree: "無料",
      admissionFreeDetail: "",
      officialSite: "https://www.hikarie.jp/",
      officialSiteTitle: "渋谷ヒカリエ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.725916707745!2d139.70114951280806!3d35.65912387248022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5850e5a83f%3A0x70297507b32efce5!2z5riL6LC344OS44Kr44Oq44Ko!5e0!3m2!1sja!2sjp!4v1747757264208!5m2!1sja!2sjp"
    },
    { id: "foramu", 
      name: "東京国際フォーラム", 
      pin: "images/pin-rainy.png",
      image: "images/tokyokokusaiforamu.webp", 
      text: "雨音が響く大きなガラス空間で、イベントやカフェめぐり。都会の中の上質なひとときを。",
      desc: "ガラスと鉄骨が織りなす壮麗な建築美。東京国際フォーラムは、雨の日の東京をスタイリッシュに味わえる場所。<br>屋内の回廊を歩くだけでも非日常感たっぷりで、外の雨音がガラス越しにやさしく響くその雰囲気が心地いい。<br>イベントや展示が開かれていることも多く、ふらっと立ち寄っても新しい発見があるかも。<br>雨の日ならではの、静かで特別な時間が流れる空間です。", 
      businessHours: "7:00～23:30",
      admissionFree: "無料",
      admissionFreeDetail: "",
      officialSite: "https://www.t-i-forum.co.jp/",
      officialSiteTitle: "公式 | 東京国際フォーラム<br>Tokyo International Forum",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0105234887374!2d139.76117291280863!3d35.6767428724743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfabc68fde1%3A0xc4ca6a002ded263d!2z5p2x5Lqs5Zu96Zqb44OV44Kp44O844Op44Og!5e0!3m2!1sja!2sjp!4v1747757320542!5m2!1sja!2sjp"
    }
  ],
};

// URL取得
fetch(url)
// responseにjson形式へ変換した天気情報を代入
.then(response => response.json())
// 変換した天気情報をdataに代入
.then(data => {
  // 変換した天気情報を確認
  console.log(`dataの値は「${JSON.stringify(data)}」`);

  // 今日の天気をweatherTodayに代入
  const weatherToday = data.weather[0].main;
  console.log(`weatherTodayの値は「${weatherToday}」`);
  
  // 今日の天気を3種類に変換するためのオブジェクト
  const weatherCategory = {
      Clear: "sunny",
      "few clouds": "sunny",
      Clouds: "cloudy",
      "scattered clouds": "cloudy",
      "broken clouds": "cloudy",
      "overcast clouds": "cloudy",
      Rain: "rainy",
      Drizzle: "rainy",
      Thunderstorm: "rainy",
      Mist: "cloudy",
      Fog: "cloudy",
      Snow: "cloudy"
  }
  // 今日の天気を3種類に変換←確認用
  const filteredWeather = weatherCategory[weatherToday] || "cloudy";
  console.log(`filterdeWeatherの値は「${filteredWeather}」`);

  // 気温を取り出す
  const temperature = Math.round(data.main.temp);
  console.log(`気温は${temperature}℃`);

  // 天気情報を「日本語の天気情報」、「アイコン」、「リンク」にするためのオブジェクト
  const weatherMap = {
    sunny : {
      jp : "晴れ",
      icon : `<img src="images/sunny_icon.png" alt="晴れのアイコン">`,
      link : `<a href="#sunny-content">TODAY</a>`,
      recomend : `#sunny-content`
    },
    cloudy : {
      jp : "曇り",
      icon : `<img src="images/cloudy_icon.png" alt="曇りのアイコン">`,
      link : `<a href="#cloudy-content">TODAY</a>`,
      recomend : `#cloudy-content`
    },
    rainy : {
      jp : "雨",
      icon : `<img src="images/rainy_icon.png" alt="雨のアイコン">`,
      link : `<a href="#rainy-content">TODAY</a>`,
      recomend : `#rainy-content`
    }
  };

  // 天気ごとの文章のオブジェクト
  const weatherMessagesMap = {
    sunny: [
      { temp: 28, msg: "日差しが強いので<br>水分補給を忘れずに！" },
      { temp: 20, msg: "とても気持ちの良い<br>散歩日和です" },
      { temp: 10, msg: "ちょっぴりひんやり、<br>羽織ものがあると安心" },
    ],
    cloudy: [
      { temp: 25, msg: "おだやかな曇り空、<br>のんびり過ごすのにぴったり" },
      { temp: 15, msg: "肌寒いので<br>軽めの上着を持っていこう" },
      { temp: 5,  msg: "冷えるので<br>しっかり防寒を！" },
    ],
    rainy: [
      { temp: 20, msg: "雨音に癒される日、<br>屋内スポット巡りがおすすめ" },
      { temp: 10, msg: "冷たい雨の日、<br>あたたかいカフェでひとやすみ" },
      { temp: 5,  msg: "寒さも雨も強め、<br>防寒＆傘は必須！" },
    ]
  };

  function getMessage(weather, temp) {
    const msgs = weatherMessagesMap[weather];
    console.log(`msgsの値は「${JSON.stringify(msgs)}」`);
    if (!msgs) return "今日も素敵な1日を!";
    for (const item of msgs) {
      if (temp >= item.temp) {
        console.log(`item.msgの値は「${item.msg}」`);
        return item.msg;
      }
    }
    console.log(`最後のmsgの値は「${msgs[msgs.length - 1].msg}」`);
    return msgs[msgs.length - 1].msg;
  }

  // 日本語の天気情報をfilteredWeatherに代入
  const filteredWeatherJp = weatherMap[filteredWeather].jp || "不明";
  console.log(`filteredWeatherJpの値は「${filteredWeatherJp}」`);

  // リンクを表示
  ["sub-menu-today", "menu-today"].forEach((id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.innerHTML = weatherMap[filteredWeather].link;
    }
  });
  const link = document.querySelector(".to-recomend-spot");
  if (link) {
    link.href = weatherMap[filteredWeather].recomend;
  }
    
  // ヒーローセクションの背景画像を表示
  document.getElementById("hero-content")?.classList.add(filteredWeather);

  // 今日のおすすめ観光スポットの画像を表示
    document.getElementById("spot-content")?.classList.add(filteredWeather);

  // 気温を表示
  const message = getMessage(filteredWeather, temperature);
  console.log(`messageの値は「${message}」`);
  const weatherIntro = document.querySelector(".weather-intro");
  if (weatherIntro) {
    weatherIntro.innerHTML = `
      現在の東京の天気は<br>
      ${filteredWeatherJp}・${temperature}℃<br>
      ${message}
    `;
  }

  // 今日のおすすめ観光地セクション
  const todaySection = document.querySelector(".today-section");
  todaySection.id = `${filteredWeather}-content`;
  todaySection?.classList.add(filteredWeather);
  const todaySectionH2 = document.getElementById("today-section-h2");
  if (todaySectionH2) {
    todaySectionH2.innerHTML += `
    <h2>${filteredWeatherJp}の日のおすすめ観光スポット</h2>`;
  }
  spots[filteredWeather].forEach((spot, i) => {
    const sideClass = i % 2 === 0 ? "left" : "right";
    const todaySpotCardSection = document.getElementById("today-spot-card");
    if (todaySpotCardSection) {
      todaySpotCardSection.innerHTML += `
        <div class="spot-card ${sideClass}">
          <div class="pin">
              <img src="${spot.pin}" alt="ピン止めの画像">
          </div>
          <img src="${spot.image}" alt="${spot.name}" class="spot-img">
          <div>
              <h3>${spot.name}</h3>
              <p>${spot.text}</p>
              <div class="align-right">
                <a href="spot.html?id=${spot.id}" class="english btn-spot" title="詳細を確認">See more</a>
              </div>
          </div>
        </div>
      `;
    }
  });

  // 今日以外のおすすめ観光地セクション
  const otherWeathers = ["sunny", "cloudy", "rainy"].filter(w => w !== filteredWeather);
  const otherSpotCardSection = document.getElementById("other-spot-card");
  otherSpotCardSection.innerHTML = "";
  otherWeathers.forEach(otherWeather => {
    // ラッパーdiv
    const weatherBlock = document.createElement("div");
    weatherBlock.className = `weather-block ${otherWeather}`;
    weatherBlock.id = `${otherWeather}-content`;
    // 見出し
    const h2 = document.createElement("h2");
    h2.textContent = `${weatherMap[otherWeather].jp}の日のおすすめ観光スポット`;
    weatherBlock.appendChild(h2);
    // 各カード
    spots[otherWeather].forEach((otherSpot, i) => {
      const sideClass = i % 2 === 0 ? "left" : "right";
      const card = document.createElement("div");
      card.className = `spot-card ${sideClass}`;
      card.innerHTML = `
        <div class="pin">
            <img src="${otherSpot.pin}" alt="ピン止めの画像">
        </div>
        <img src="${otherSpot.image}" alt="${otherSpot.name}" class="spot-img">
        <div>
            <h3>${otherSpot.name}</h3>
            <p>${otherSpot.text}</p>
            <div class="align-right">
              <a href="spot.html?id=${otherSpot.id}" class="english btn-spot" title="詳細を確認">See more</a>
            </div>
        </div>
      `;
      weatherBlock.appendChild(card);
    });
    // weatherBlock親に追加
    otherSpotCardSection.appendChild(weatherBlock);
  });
});

if (window.location.hash) {
  const anchorId = window.location.hash.substring(1);
  setTimeout(() => {
    const anchorElem = document.getElementById(anchorId);
    if (anchorElem) {
      anchorElem.scrollIntoView({ behavior: "smooth" });
    }
  }, 200);
}
