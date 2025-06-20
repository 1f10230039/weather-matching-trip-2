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
      commentText1: "ピクニック最高！青空の下で寝転ぶと、都会のことを忘れちゃう。",
      commentText2: "木漏れ日の中でおしゃべりするのが気持ちいい。お昼時は少し混むけど広いから平気！",
      commentText3: "もっと日陰があればいいなと思ったけど、天気が良い日はやっぱり気持ち良い場所。",
      rating1: 5,
      rating2: 4,
      rating3: 3,
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
      officialSite: "https://www.kensetsu.metro.tokyo.lg.jp/jimusho/toubuk/ueno",
      commentText1: "美術館めぐりのあとにのんびり散歩。晴れの日は花も池もきらきらしていて幸せな気持ちに。",
      commentText2: "緑も広いし、ベンチも多くて一人でも過ごしやすい。",
      commentText3: "子ども連れでも安心。動物園も近くて飽きない一日が過ごせる！",
      officialSiteTitle: "上野恩寵公園 Ueno Park <br>公式ホームページ | 東京都建設局",
      rating1: 5,
      rating2: 4,
      rating3: 4,
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
      commentText1: "海と空！友達と写真たくさん撮りました。リゾート感が非日常的でリフレッシュできる。",
      commentText2: "晴れの日は景色がとにかく映える。砂浜でぼーっとするのが好きです。",
      commentText3: "休日は人が多めだけど、青い空と海を見ると全部許せる感じ。",
      rating1: 5,
      rating2: 4,
      rating3: 3,
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
      officialSite: "https://www.tokyo-park.or.jp/park/rikugien/",
      officialSiteTitle: "概要 | 六義園 | 庭園へ行こう",
      commentText1: "曇りの日こそ庭園の静けさが美しい。苔の緑がやさしくて癒されます。",
      commentText2: "晴れた日より落ち着いて歩けるのが好き。池の水面も静かで風情がある。",
      commentText3: "雨が降りそうな曇り空でも、散歩するにはぴったりの場所。",
      rating1: 5,
      rating2: 4,
      rating3: 3,
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
      commentText1: "曇りでも屋内だから快適！グルメもショッピングも丸一日楽しめました。",
      commentText2: "プラネタリウムが思ったよりすごかった。曇り空の日にぴったりの癒しスポット。",
      commentText3: "人が多いけど、いろんなお店があって飽きない。お土産もたくさん買えました。",
      rating1: 4,
      rating2: 5,
      rating3: 3,
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
      commentText1: "曇り空と洋館の組み合わせが幻想的で静かに過ごせた。",
      commentText2: "木の香りが雨上がりっぽくて心が落ち着く。読書するのに最高でした。",
      commentText3: "ひっそりした雰囲気でのんびりできた。晴れより曇りが似合う公園かも。",
      rating1: 5,
      rating2: 4,
      rating3: 3,
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
      commentText1: "駅から直結だから濡れずに行けて、雨の日の静かな時間が楽しめた。",
      commentText2: "展示も駅舎も素敵で、雨音がBGMみたいだった。",
      commentText3: "もう少し長く開いていてほしいけど、雨の日にぴったりの落ち着く場所。",
      rating1: 5,
      rating2: 4,
      rating3: 3,
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
      commentText1: "駅直結で便利！雨の日もショッピングもカフェも全部楽しめる。",
      commentText2: "高層階から見る雨の街は映画みたい。屋内で飽きずに過ごせた。",
      commentText3: "どの天気でも使いやすいけど、特に雨の日にありがたいスポットです。",
      rating1: 5,
      rating2: 4,
      rating3: 3,
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
      commentText1: "海雨音が響くガラスの空間が幻想的。イベントがなくても見学だけで楽しい。",
      commentText2: "建物の中が広くて、雨でも気にならない。展示も多彩で飽きません。",
      commentText3: "天気が悪い日ほど落ち着いて歩ける場所。カフェも多くて便利でした。",
      rating1: 5,
      rating2: 5,
      rating3: 4,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0105234887374!2d139.76117291280863!3d35.6767428724743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfabc68fde1%3A0xc4ca6a002ded263d!2z5p2x5Lqs5Zu96Zqb44OV44Kp44O844Op44Og!5e0!3m2!1sja!2sjp!4v1747757320542!5m2!1sja!2sjp"
    }
  ],
};

const urlParams = new URLSearchParams(window.location.search);
const spotId = urlParams.get('id');
console.log(spotId);

const allSpots = [...spots.sunny, ...spots.cloudy, ...spots.rainy];
const spot = allSpots.find(s => s.id === spotId);

const container = document.getElementById('spot-content');

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
    // 天気情報を「日本語の天気情報」、「アイコン」、「リンク」にするためのオブジェクト
    const weatherMap = {
        sunny : {
        jp : "晴れ",
        icon : `<img src="images/sunny_icon.png" alt="晴れのアイコン">`,
        link : `<a href="./index.html#sunny-content">TODAY</a>`,
        recomend : `#sunny-content`
        },
        cloudy : {
        jp : "曇り",
        icon : `<img src="images/cloudy_icon.png" alt="曇りのアイコン">`,
        link : `<a href="./index.html#cloudy-content">TODAY</a>`,
        recomend : `#cloudy-content`
        },
        rainy : {
        jp : "雨",
        icon : `<img src="images/rainy_icon.png" alt="雨のアイコン">`,
        link : `<a href="./index.html#rainy-content">TODAY</a>`,
        recomend : `#rainy-content`
        }
    };
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
});

if (spot) {
  container.innerHTML = `
    <section class="spot-info">
        <h2>${spot.name}</h2>
        <div class="spot-img-container">
          <img src="${spot.image}" alt="${spot.name}" class="spot-img">
        </div>
        <p class="detail-p">${spot.desc}</p>
        <h3>みんなのコメント</h3>
        <div class="comment">
            <div class="user-icon">
                <img src="images/user_icon.png" alt="ユーザーアイコン">
            </div>
            <div class="comment-desc">
                <div class="evaluation" id="evaluation-1"></div>
                <p>${spot.commentText1}</p>
            </div>
        </div>
        <div class="comment">
            <div class="user-icon">
                <img src="images/user_icon.png" alt="ユーザーアイコン">
            </div>
            <div class="comment-desc">
                <div class="evaluation" id="evaluation-2"></div>
                <p>${spot.commentText2}</p>
            </div>
        </div>
        <div class="comment">
            <div class="user-icon">
                <img src="images/user_icon.png" alt="ユーザーアイコン">
            </div>
            <div class="comment-desc">
                <div class="evaluation" id="evaluation-3"></div>
                <p>${spot.commentText3}</p>
            </div>
        </div>
        <h3 class="table-title">基本情報</h3>
        <table class="info">
            <tr>
                <th>営業時間</th>
                <td>${spot.businessHours}</td>
            </tr>
            <tr>
                <th>入館料</th>
                <td>${spot.admissionFree}<br>${spot.admissionFreeDetail}</td>
            </tr>
            <tr>
                <th>公式サイト</th>
                <td class="site-link">→<a href=${spot.officialSite} title="公式サイトへ">${spot.officialSiteTitle}</a></td>
            </tr>
        </table>
        <h3>マップ</h3>
        <div class="map">
          <iframe
          src="${spot.map}"
          width = "800"
          height = "500"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
    </section>
  `;

   ["rating1", "rating2", "rating3"].forEach((key, idx) => {
    const evalDiv = document.getElementById(`evaluation-${idx+1}`);
    if (evalDiv) {
      let stars = "";
      for (let i = 1; i <= 5; i++) {
        stars += `<img src="images/${i <= spot[key] ? "star_yellow" : "star_shadow"}.png" alt="星の画像" class="star">`;
      }
      evalDiv.innerHTML = stars;
    }
    });

} else {
  container.innerHTML = `<p>指定されたスポットが見つかりませんでした。</p>`;
}
