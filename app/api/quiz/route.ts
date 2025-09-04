import { type NextRequest, NextResponse } from "next/server"
import type { CraftCategory, Difficulty, QuizQuestion, GenreKey } from "@/types/quiz"

const CRAFT_CATEGORIES: CraftCategory[] = [
  // 織物 (38品目)
  "二風谷アットゥシ",
  "置賜紬",
  "羽越しな布",
  "奥会津昭和からむし織",
  "結城紬",
  "伊勢崎絣",
  "桐生織",
  "秩父銘仙",
  "村山大島紬",
  "本場黄八丈",
  "多摩織",
  "塩沢紬",
  "小千谷縮",
  "小千谷紬",
  "本塩沢",
  "十日町絣",
  "十日町明石ちぢみ",
  "信州紬",
  "牛首紬",
  "近江上布",
  "西陣織",
  "弓浜絣",
  "阿波正藍しじら織",
  "博多織",
  "久留米絣",
  "本場大島紬",
  "久米島紬",
  "宮古上布",
  "読谷山花織",
  "読谷山ミンサー",
  "琉球絣",
  "首里織",
  "与那国織",
  "喜如嘉の芭蕉布",
  "知花花織",
  "南風原花織",
  "八重山ミンサー",
  "八重山上布",
  // 染色品 (14品目)
  "東京染小紋",
  "東京手描友禅",
  "東京無地染",
  "東京本染注染",
  "加賀友禅",
  "有松・鳴海絞",
  "京友禅",
  "京鹿の子絞",
  "名古屋友禅",
  "名古屋黒紋付染",
  "十日町友禅",
  "紅型",
  "江戸小紋",
  "長板中形",
  // 陶磁器 (33品目)
  "津軽焼",
  "会津本郷焼",
  "笠間焼",
  "益子焼",
  "九谷焼",
  "越前焼",
  "美濃焼",
  "瀬戸焼",
  "常滑焼",
  "四日市萬古焼",
  "伊賀焼",
  "信楽焼",
  "京焼・清水焼",
  "丹波立杭焼",
  "出石焼",
  "備前焼",
  "赤間硯",
  "萩焼",
  "大谷焼",
  "砥部焼",
  "上野焼",
  "高取焼",
  "小石原焼",
  "伊万里・有田焼",
  "唐津焼",
  "嬉野焼",
  "三川内焼",
  "波佐見焼",
  "現川焼",
  "小代焼",
  "天草陶磁器",
  "薩摩焼",
  "壺屋焼",
  // 漆器 (23品目)
  "津軽塗",
  "浄法寺塗",
  "川連漆器",
  "鳴子漆器",
  "会津漆器",
  "新潟・白根仏壇",
  "村上木彫堆朱",
  "高岡漆器",
  "若狭塗",
  "京漆器",
  "紀州漆器",
  "香川漆器",
  "山中漆器",
  "輪島塗",
  "飛騨春慶",
  "木曽漆器",
  "越前漆器",
  "京仏壇",
  "大内塗",
  "琉球漆器",
  "秀衡塗",
  "津軽塗",
  "越前漆器",
  // 木工品・竹工品 (20品目)
  "樺細工",
  "大館曲げわっぱ",
  "岩谷堂箪笥",
  "仙台箪笥",
  "江戸指物",
  "大川組子",
  "飛騨の家具",
  "一位一刀彫",
  "越前箪笥",
  "京指物",
  "大阪唐木指物",
  "播州そろばん",
  "雲州そろばん",
  "府中家具",
  "箱根寄木細工",
  "駿河竹千筋細工",
  "江戸和竿",
  "別府竹細工",
  "都城大弓",
  "琉球竹富島ビーグ",
  // 金工品 (12品目)
  "南部鉄器",
  "山形鋳物",
  "東京銀器",
  "燕鎚起銅器",
  "高岡銅器",
  "大阪浪華錫器",
  "堺刃物",
  "播州三木打刃物",
  "土佐打刃物",
  "肥後象嵌",
  "薩摩彫金",
  "琉球漆器",
  // 石工品・貴石細工 (8品目)
  "雄勝硯",
  "山梨貴石細工",
  "京石工芸品",
  "出雲石燈籠",
  "岡崎石工品",
  "庵治石製品",
  "天草陶石",
  "琉球石灰岩製品",
  // 人形・こけし (16品目)
  "津軽こけし",
  "遠刈田こけし",
  "弥治郎こけし",
  "作並こけし",
  "鳴子こけし",
  "土湯こけし",
  "木地山こけし",
  "蔵王高湯こけし",
  "肘折こけし",
  "山形こけし",
  "江戸木目込人形",
  "岩槻人形",
  "駿河雛人形",
  "一刀彫",
  "奈良一刀彫",
  "博多人形",
  // 和紙 (9品目)
  "白石和紙",
  "西ノ内紙",
  "烏山和紙",
  "細川紙",
  "本美濃紙",
  "越前和紙",
  "因州和紙",
  "土佐和紙",
  "名塩雁皮紙",
  // 文具 (6品目)
  "会津絵ろうそく",
  "京扇子",
  "江戸からかみ",
  "播州毛鉤",
  "赤間硯",
  "雄勝硯",
  // 仏具・茶道具 (8品目)
  "山形仏壇",
  "新潟・白根仏壇",
  "三条仏壇",
  "京仏壇",
  "彦根仏壇",
  "大阪仏壇",
  "八女福島仏壇",
  "川辺仏壇",
  // 工芸材料・工芸用具 (4品目)
  "奈良筆",
  "熊野筆",
  "川尻筆",
  "豊橋筆",
  // その他の工芸品 (10品目)
  "江戸切子",
  "薩摩切子",
  "津軽びいどろ",
  "江戸硝子",
  "琉球ガラス",
  "甲州印伝",
  "名古屋桐箪笥",
  "加茂桐箪笥",
  "岩谷堂箪笥",
  "府中家具",
]

const GENRE_CATEGORIES = {
  all: {
    name: "おまかせ (All Genres)",
    crafts: CRAFT_CATEGORIES,
  },
  textiles: {
    name: "織物 (Textiles)",
    crafts: [
      "二風谷アットゥシ",
      "置賜紬",
      "羽越しな布",
      "奥会津昭和からむし織",
      "結城紬",
      "伊勢崎絣",
      "桐生織",
      "秩父銘仙",
      "村山大島紬",
      "本場黄八丈",
      "多摩織",
      "塩沢紬",
      "小千谷縮",
      "小千谷紬",
      "本塩沢",
      "十日町絣",
      "十日町明石ちぢみ",
      "信州紬",
      "牛首紬",
      "近江上布",
      "西陣織",
      "弓浜絣",
      "阿波正藍しじら織",
      "博多織",
      "久留米絣",
      "本場大島紬",
      "久米島紬",
      "宮古上布",
      "読谷山花織",
      "読谷山ミンサー",
      "琉球絣",
      "首里織",
      "与那国織",
      "喜如嘉の芭蕉布",
      "知花花織",
      "南風原花織",
      "八重山ミンサー",
      "八重山上布",
    ] as CraftCategory[],
  },
  dyedGoods: {
    name: "染色品 (Dyed Goods)",
    crafts: [
      "東京染小紋",
      "東京手描友禅",
      "東京無地染",
      "東京本染注染",
      "加賀友禅",
      "有松・鳴海絞",
      "京友禅",
      "京鹿の子絞",
      "名古屋友禅",
      "名古屋黒紋付染",
      "十日町友禅",
      "紅型",
      "江戸小紋",
      "長板中形",
    ] as CraftCategory[],
  },
  pottery: {
    name: "陶磁器 (Pottery & Ceramics)",
    crafts: [
      "津軽焼",
      "会津本郷焼",
      "笠間焼",
      "益子焼",
      "九谷焼",
      "越前焼",
      "美濃焼",
      "瀬戸焼",
      "常滑焼",
      "四日市萬古焼",
      "伊賀焼",
      "信楽焼",
      "京焼・清水焼",
      "丹波立杭焼",
      "出石焼",
      "備前焼",
      "赤間硯",
      "萩焼",
      "大谷焼",
      "砥部焼",
      "上野焼",
      "高取焼",
      "小石原焼",
      "伊万里・有田焼",
      "唐津焼",
      "嬉野焼",
      "三川内焼",
      "波佐見焼",
      "現川焼",
      "小代焼",
      "天草陶磁器",
      "薩摩焼",
      "壺屋焼",
    ] as CraftCategory[],
  },
  lacquerware: {
    name: "漆器 (Lacquerware)",
    crafts: [
      "津軽塗",
      "浄法寺塗",
      "川連漆器",
      "鳴子漆器",
      "会津漆器",
      "新潟・白根仏壇",
      "村上木彫堆朱",
      "高岡漆器",
      "若狭塗",
      "京漆器",
      "紀州漆器",
      "香川漆器",
      "山中漆器",
      "輪島塗",
      "飛騨春慶",
      "木曽漆器",
      "越前漆器",
      "京仏壇",
      "大内塗",
      "琉球漆器",
      "秀衡塗",
      "津軽塗",
      "越前漆器",
    ] as CraftCategory[],
  },
  woodBamboo: {
    name: "木工品・竹工品 (Woodwork & Bamboo)",
    crafts: [
      "樺細工",
      "大館曲げわっぱ",
      "岩谷堂箪笥",
      "仙台箪笥",
      "江戸指物",
      "大川組子",
      "飛騨の家具",
      "一位一刀彫",
      "越前箪笥",
      "京指物",
      "大阪唐木指物",
      "播州そろばん",
      "雲州そろばん",
      "府中家具",
      "箱根寄木細工",
      "駿河竹千筋細工",
      "江戸和竿",
      "別府竹細工",
      "都城大弓",
      "琉球竹富島ビーグ",
    ] as CraftCategory[],
  },
  metalwork: {
    name: "金工品 (Metalwork)",
    crafts: [
      "南部鉄器",
      "山形鋳物",
      "東京銀器",
      "燕鎚起銅器",
      "高岡銅器",
      "大阪浪華錫器",
      "堺刃物",
      "播州三木打刃物",
      "土佐打刃物",
      "肥後象嵌",
      "薩摩彫金",
      "琉球漆器",
    ] as CraftCategory[],
  },
  stonework: {
    name: "石工品・貴石細工 (Stonework)",
    crafts: [
      "雄勝硯",
      "山梨貴石細工",
      "京石工芸品",
      "出雲石燈籠",
      "岡崎石工品",
      "庵治石製品",
      "天草陶石",
      "琉球石灰岩製品",
    ] as CraftCategory[],
  },
  dolls: {
    name: "人形・こけし (Dolls & Kokeshi)",
    crafts: [
      "津軽こけし",
      "遠刈田こけし",
      "弥治郎こけし",
      "作並こけし",
      "鳴子こけし",
      "土湯こけし",
      "木地山こけし",
      "蔵王高湯こけし",
      "肘折こけし",
      "山形こけし",
      "江戸木目込人形",
      "岩槻人形",
      "駿河雛人形",
      "一刀彫",
      "奈良一刀彫",
      "博多人形",
    ] as CraftCategory[],
  },
  paper: {
    name: "和紙 (Japanese Paper)",
    crafts: [
      "白石和紙",
      "西ノ内紙",
      "烏山和紙",
      "細川紙",
      "本美濃紙",
      "越前和紙",
      "因州和紙",
      "土佐和紙",
      "名塩雁皮紙",
    ] as CraftCategory[],
  },
  stationery: {
    name: "文具 (Stationery)",
    crafts: ["会津絵ろうそく", "京扇子", "江戸からかみ", "播州毛鉤", "赤間硯", "雄勝硯"] as CraftCategory[],
  },
  religious: {
    name: "仏具・茶道具 (Religious & Tea Ceremony)",
    crafts: [
      "山形仏壇",
      "新潟・白根仏壇",
      "三条仏壇",
      "京仏壇",
      "彦根仏壇",
      "大阪仏壇",
      "八女福島仏壇",
      "川辺仏壇",
    ] as CraftCategory[],
  },
  materials: {
    name: "工芸材料・工芸用具 (Craft Materials & Tools)",
    crafts: ["奈良筆", "熊野筆", "川尻筆", "豊橋筆"] as CraftCategory[],
  },
  glass: {
    name: "ガラス工芸・その他 (Glass & Others)",
    crafts: [
      "江戸切子",
      "薩摩切子",
      "津軽びいどろ",
      "江戸硝子",
      "琉球ガラス",
      "甲州印伝",
      "名古屋桐箪笥",
      "加茂桐箪笥",
      "岩谷堂箪笥",
      "府中家具",
    ] as CraftCategory[],
  },
  okinawa: {
    name: "沖縄の工芸 (Okinawan Crafts)",
    crafts: [
      "宮古上布",
      "読谷山花織",
      "読谷山ミンサー",
      "琉球絣",
      "首里織",
      "与那国織",
      "喜如嘉の芭蕉布",
      "知花花織",
      "南風原花織",
      "八重山ミンサー",
      "八重山上布",
      "紅型",
      "琉球漆器",
      "壺屋焼",
      "琉球ガラス",
      "琉球竹富島ビーグ",
      "琉球石灰岩製品",
    ] as CraftCategory[],
  },
  hokkaido: {
    name: "北海道・東北の工芸 (Hokkaido & Tohoku Crafts)",
    crafts: [
      "二風谷アットゥシ",
      "樺細工",
      "大館曲げわっぱ",
      "津軽焼",
      "津軽塗",
      "津軽こけし",
      "津軽びいどろ",
      "置賜紬",
      "羽越しな布",
      "岩谷堂箪笥",
      "仙台箪笥",
      "会津本郷焼",
      "会津漆器",
      "会津絵ろうそく",
      "奥会津昭和からむし織",
      "浄法寺塗",
      "川連漆器",
      "鳴子漆器",
      "鳴子こけし",
      "遠刈田こけし",
      "弥治郎こけし",
      "作並こけし",
      "土湯こけし",
      "木地山こけし",
      "蔵王高湯こけし",
      "肘折こけし",
      "山形こけし",
      "山形鋳物",
      "山形仏壇",
      "南部鉄器",
      "雄勝硯",
      "白石和紙",
      "秀衡塗",
    ] as CraftCategory[],
  },
}

const SAMPLE_QUESTIONS: QuizQuestion[] = [
  // 織物 (Textiles) - Easy Questions
  {
    id: 1,
    craft: "結城紬",
    category: "history",
    difficulty: "easy",
    format: "multiple_choice",
    question: "結城紬の主な産地はどこですか？",
    options: ["茨城県・栃木県", "京都府", "新潟県", "沖縄県"],
    answer: "茨城県・栃木県",
    explanation: "結城紬は茨城県結城市と栃木県小山市を中心とした地域で作られる伝統的な絹織物です。",
  },
  {
    id: 2,
    craft: "西陣織",
    category: "geography",
    difficulty: "easy",
    format: "true_false",
    question: "西陣織は京都府で作られる織物である。",
    answer: "true",
    explanation: "西陣織は京都市西陣地区で作られる高級絹織物で、帯や着物地として有名です。",
  },
  {
    id: 3,
    craft: "本場大島紬",
    category: "materials",
    difficulty: "easy",
    format: "multiple_choice",
    question: "大島紬の特徴的な染料は何ですか？",
    options: ["泥染め", "藍染め", "紅花染め", "茜染め"],
    answer: "泥染め",
    explanation: "大島紬は奄美大島の泥と車輪梅（テーチ木）を使った独特の泥染めが特徴です。",
  },
  {
    id: 4,
    craft: "博多織",
    category: "design",
    difficulty: "easy",
    format: "true_false",
    question: "博多織は福岡県の伝統織物である。",
    answer: "true",
    explanation: "博多織は福岡市博多区を中心に作られる織物で、帯として特に有名です。",
  },
  {
    id: 5,
    craft: "久留米絣",
    category: "usage",
    difficulty: "easy",
    format: "multiple_choice",
    question: "久留米絣の主な用途は何ですか？",
    options: ["着物・浴衣", "帯", "風呂敷", "のれん"],
    answer: "着物・浴衣",
    explanation: "久留米絣は主に着物や浴衣の生地として使われる綿織物です。",
  },
  {
    id: 6,
    craft: "琉球絣",
    category: "geography",
    difficulty: "easy",
    format: "multiple_choice",
    question: "琉球絣の主な産地はどこですか？",
    options: ["沖縄県", "鹿児島県", "宮崎県", "熊本県"],
    answer: "沖縄県",
    explanation: "琉球絣は沖縄県で作られる伝統的な絣織物です。",
  },
  {
    id: 7,
    craft: "塩沢紬",
    category: "materials",
    difficulty: "easy",
    format: "true_false",
    question: "塩沢紬は絹を使用した織物である。",
    answer: "true",
    explanation: "塩沢紬は新潟県南魚沼市塩沢地区で作られる絹織物です。",
  },
  {
    id: 8,
    craft: "小千谷縮",
    category: "usage",
    difficulty: "easy",
    format: "multiple_choice",
    question: "小千谷縮の主な特徴は何ですか？",
    options: ["夏用の涼しい織物", "冬用の暖かい織物", "雨具用の織物", "作業着用の織物"],
    answer: "夏用の涼しい織物",
    explanation: "小千谷縮は麻を使った夏用の涼しい織物として知られています。",
  },

  // 染色品 (Dyed Goods) - Easy Questions
  {
    id: 9,
    craft: "加賀友禅",
    category: "geography",
    difficulty: "easy",
    format: "multiple_choice",
    question: "加賀友禅の主な産地はどこですか？",
    options: ["石川県", "京都府", "東京都", "新潟県"],
    answer: "石川県",
    explanation: "加賀友禅は石川県金沢市を中心に作られる手描き友禅染めです。",
  },
  {
    id: 10,
    craft: "京友禅",
    category: "design",
    difficulty: "easy",
    format: "true_false",
    question: "京友禅は手描きで模様を描く技法である。",
    answer: "true",
    explanation: "京友禅は筆で手描きする技法が基本で、繊細で優雅な模様が特徴です。",
  },
  {
    id: 11,
    craft: "有松・鳴海絞",
    category: "materials",
    difficulty: "easy",
    format: "multiple_choice",
    question: "有松・鳴海絞の主な技法は何ですか？",
    options: ["絞り染め", "型染め", "ろうけつ染め", "引き染め"],
    answer: "絞り染め",
    explanation: "有松・鳴海絞は布を糸で縛って絞り、染料が入らない部分を作る絞り染めの技法です。",
  },
  {
    id: 12,
    craft: "紅型",
    category: "geography",
    difficulty: "easy",
    format: "true_false",
    question: "紅型は沖縄県の伝統的な染色技法である。",
    answer: "true",
    explanation: "紅型は沖縄県の代表的な染色技法で、鮮やかな色彩が特徴です。",
  },

  // 陶磁器 (Pottery & Ceramics) - Easy Questions
  {
    id: 13,
    craft: "伊万里・有田焼",
    category: "geography",
    difficulty: "easy",
    format: "multiple_choice",
    question: "伊万里・有田焼の主な産地はどこですか？",
    options: ["佐賀県", "長崎県", "熊本県", "福岡県"],
    answer: "佐賀県",
    explanation: "伊万里・有田焼は佐賀県有田町を中心に作られる磁器です。",
  },
  {
    id: 14,
    craft: "備前焼",
    category: "materials",
    difficulty: "easy",
    format: "true_false",
    question: "備前焼は釉薬を使わない焼き物である。",
    answer: "true",
    explanation: "備前焼は釉薬を使わず、土の性質と炎の力だけで焼き上げる陶器です。",
  },
  {
    id: 15,
    craft: "九谷焼",
    category: "design",
    difficulty: "easy",
    format: "multiple_choice",
    question: "九谷焼の特徴的な色彩は何ですか？",
    options: ["五彩（赤・黄・緑・紫・紺青）", "三彩（赤・青・白）", "二彩（黒・白）", "単色（青一色）"],
    answer: "五彩（赤・黄・緑・紫・紺青）",
    explanation: "九谷焼は「九谷五彩」と呼ばれる赤・黄・緑・紫・紺青の五色を使った色絵が特徴です。",
  },

  // 漆器 (Lacquerware) - Easy Questions
  {
    id: 16,
    craft: "輪島塗",
    category: "geography",
    difficulty: "easy",
    format: "multiple_choice",
    question: "輪島塗の主な産地はどこですか？",
    options: ["石川県", "福井県", "富山県", "新潟県"],
    answer: "石川県",
    explanation: "輪島塗は石川県輪島市で作られる高級漆器です。",
  },
  {
    id: 17,
    craft: "会津漆器",
    category: "materials",
    difficulty: "easy",
    format: "true_false",
    question: "会津漆器は福島県で作られる漆器である。",
    answer: "true",
    explanation: "会津漆器は福島県会津若松市を中心に作られる伝統的な漆器です。",
  },

  // Medium Difficulty Questions
  {
    id: 18,
    craft: "結城紬",
    category: "history",
    difficulty: "medium",
    format: "multiple_choice",
    question: "結城紬が重要無形文化財に指定されたのはいつですか？",
    options: ["1956年", "1976年", "1986年", "1996年"],
    answer: "1956年",
    explanation: "結城紬は1956年に重要無形文化財に指定され、2010年にはユネスコ無形文化遺産にも登録されました。",
  },
  {
    id: 19,
    craft: "西陣織",
    category: "materials",
    difficulty: "medium",
    format: "multiple_choice",
    question: "西陣織で使用される主な糸の種類は何ですか？",
    options: ["絹糸・金糸・銀糸", "綿糸・麻糸", "ウール・カシミア", "化学繊維"],
    answer: "絹糸・金糸・銀糸",
    explanation: "西陣織は絹糸を基本とし、金糸や銀糸を使った豪華な織物が特徴です。",
  },
  {
    id: 20,
    craft: "本場大島紬",
    category: "trivia",
    difficulty: "medium",
    format: "true_false",
    question: "大島紬の製作には約1年半の期間が必要である。",
    answer: "true",
    explanation: "大島紬は糸作りから織り上げまで約1年半という長い期間をかけて作られます。",
  },
  {
    id: 21,
    craft: "加賀友禅",
    category: "design",
    difficulty: "medium",
    format: "multiple_choice",
    question: "加賀友禅の特徴的な技法は何ですか？",
    options: ["虫喰い", "金彩", "刺繍", "絞り"],
    answer: "虫喰い",
    explanation: "加賀友禅は「虫喰い」という葉に虫が食った跡を表現する独特の技法が特徴です。",
  },
  {
    id: 22,
    craft: "九谷焼",
    category: "history",
    difficulty: "medium",
    format: "multiple_choice",
    question: "九谷焼が始まったのはいつ頃ですか？",
    options: ["17世紀中頃", "16世紀中頃", "18世紀中頃", "15世紀中頃"],
    answer: "17世紀中頃",
    explanation: "九谷焼は1655年頃、加賀藩の支藩である大聖寺藩で始まったとされています。",
  },

  // Hard Difficulty Questions
  {
    id: 23,
    craft: "結城紬",
    category: "materials",
    difficulty: "hard",
    format: "multiple_choice",
    question: "結城紬の糸作りで使用される「つむぎ」の正式名称は何ですか？",
    options: ["手つむぎ糸", "座繰り糸", "真綿手つむぎ糸", "生糸"],
    answer: "真綿手つむぎ糸",
    explanation: "結城紬は蚕の繭から作った真綿を手でつむいだ「真綿手つむぎ糸」を使用します。",
  },
  {
    id: 24,
    craft: "輪島塗",
    category: "materials",
    difficulty: "hard",
    format: "multiple_choice",
    question: "輪島塗の下地に使用される特殊な粉は何ですか？",
    options: ["輪島地の粉", "珪藻土", "石膏粉", "木炭粉"],
    answer: "輪島地の粉",
    explanation: "輪島塗は輪島でしか採れない「輪島地の粉」を下地に使用することで、丈夫で美しい仕上がりになります。",
  },
  {
    id: 25,
    craft: "九谷焼",
    category: "trivia",
    difficulty: "hard",
    format: "true_false",
    question: "九谷焼の「古九谷」は約100年間で製作が途絶えた。",
    answer: "true",
    explanation: "古九谷は1655年頃から1730年頃まで約75年間製作され、その後約100年間途絶えました。",
  },

  // Additional questions to reach 100+ total
  {
    id: 26,
    craft: "津軽塗",
    category: "geography",
    difficulty: "easy",
    format: "multiple_choice",
    question: "津軽塗の主な産地はどこですか？",
    options: ["青森県", "秋田県", "岩手県", "山形県"],
    answer: "青森県",
    explanation: "津軽塗は青森県弘前市を中心に作られる漆器です。",
  },
  {
    id: 27,
    craft: "南部鉄器",
    category: "materials",
    difficulty: "easy",
    format: "true_false",
    question: "南部鉄器は鉄を使った工芸品である。",
    answer: "true",
    explanation: "南部鉄器は岩手県の伝統的な鉄製品で、鉄瓶や急須などが有名です。",
  },
  {
    id: 28,
    craft: "江戸切子",
    category: "design",
    difficulty: "easy",
    format: "multiple_choice",
    question: "江戸切子の特徴的な技法は何ですか？",
    options: ["カットガラス", "吹きガラス", "型押しガラス", "ステンドグラス"],
    answer: "カットガラス",
    explanation: "江戸切子はガラスの表面に細かい切子模様を施すカットガラスの技法です。",
  },
  {
    id: 29,
    craft: "別府竹細工",
    category: "geography",
    difficulty: "easy",
    format: "true_false",
    question: "別府竹細工は大分県の伝統工芸品である。",
    answer: "true",
    explanation: "別府竹細工は大分県別府市で作られる竹を使った工芸品です。",
  },
  {
    id: 30,
    craft: "博多人形",
    category: "materials",
    difficulty: "easy",
    format: "multiple_choice",
    question: "博多人形の主な材料は何ですか？",
    options: ["粘土", "木材", "石膏", "金属"],
    answer: "粘土",
    explanation: "博多人形は粘土を使って作られる素焼きの人形です。",
  },

  // Continue with more questions to reach 100+...
  // Adding more questions across all categories and difficulties
  {
    id: 31,
    craft: "越前和紙",
    category: "history",
    difficulty: "medium",
    format: "multiple_choice",
    question: "越前和紙の歴史は約何年ですか？",
    options: ["1500年", "1000年", "800年", "500年"],
    answer: "1500年",
    explanation: "越前和紙は約1500年の歴史を持つ、日本最古の和紙の一つです。",
  },
  {
    id: 32,
    craft: "薩摩切子",
    category: "trivia",
    difficulty: "hard",
    format: "true_false",
    question: "薩摩切子は一度製作が途絶え、昭和時代に復活した。",
    answer: "true",
    explanation: "薩摩切子は明治初期に途絶えましたが、1985年に復活しました。",
  },
  {
    id: 33,
    craft: "甲州印伝",
    category: "materials",
    difficulty: "medium",
    format: "multiple_choice",
    question: "甲州印伝の主な材料は何ですか？",
    options: ["鹿革", "牛革", "豚革", "羊革"],
    answer: "鹿革",
    explanation: "甲州印伝は鹿革に漆で模様を付けた山梨県の伝統工芸品です。",
  },
  {
    id: 34,
    craft: "堺刃物",
    category: "usage",
    difficulty: "easy",
    format: "multiple_choice",
    question: "堺刃物の主な用途は何ですか？",
    options: ["料理用包丁", "工芸用彫刻刀", "農業用鎌", "武器"],
    answer: "料理用包丁",
    explanation: "堺刃物は主に料理用の包丁として使われ、プロの料理人に愛用されています。",
  },
  {
    id: 35,
    craft: "箱根寄木細工",
    category: "design",
    difficulty: "medium",
    format: "true_false",
    question: "箱根寄木細工は異なる色の木材を組み合わせて模様を作る。",
    answer: "true",
    explanation: "箱根寄木細工は様々な色の天然木を組み合わせて幾何学模様を作る技法です。",
  },
]

function generateQuizSession(selectedGenre: GenreKey = "all"): QuizQuestion[] {
  console.log(`[Server] Generating quiz for genre: ${selectedGenre}`)

  const genreCrafts = GENRE_CATEGORIES[selectedGenre].crafts
  const availableQuestions = SAMPLE_QUESTIONS.filter((q) => genreCrafts.includes(q.craft))

  console.log(`[Server] Available questions for genre: ${availableQuestions.length}`)

  // Separate questions by difficulty
  const easyQuestions = availableQuestions.filter((q) => q.difficulty === "easy")
  const mediumQuestions = availableQuestions.filter((q) => q.difficulty === "medium")
  const hardQuestions = availableQuestions.filter((q) => q.difficulty === "hard")

  console.log(
    `[Server] Easy: ${easyQuestions.length}, Medium: ${mediumQuestions.length}, Hard: ${hardQuestions.length}`,
  )

  const finalQuestions: QuizQuestion[] = []
  const usedQuestionIds = new Set<number>()
  const usedBaseQuestionIds = new Set<number>()

  const selectUniqueQuestions = (
    targetDifficulty: Difficulty,
    targetCount: number,
    primaryPool: QuizQuestion[],
  ): QuizQuestion[] => {
    const selected: QuizQuestion[] = []

    // Strategy 1: Use unused questions from primary pool
    const unusedPrimary = primaryPool.filter((q) => !usedQuestionIds.has(q.id))
    const shuffledPrimary = [...unusedPrimary].sort(() => Math.random() - 0.5)

    for (let i = 0; i < Math.min(targetCount, shuffledPrimary.length); i++) {
      const question = shuffledPrimary[i]
      selected.push(question)
      usedQuestionIds.add(question.id)
      usedBaseQuestionIds.add(question.id)
    }

    // Strategy 2: Use any unused questions from genre (different difficulty)
    if (selected.length < targetCount) {
      const anyUnused = availableQuestions.filter((q) => !usedQuestionIds.has(q.id))
      const shuffledAny = [...anyUnused].sort(() => Math.random() - 0.5)

      for (let i = 0; i < Math.min(targetCount - selected.length, shuffledAny.length); i++) {
        const question = shuffledAny[i]
        selected.push(question)
        usedQuestionIds.add(question.id)
        usedBaseQuestionIds.add(question.id)
      }
    }

    // Strategy 3: Create modified versions of questions (absolute last resort)
    if (selected.length < targetCount) {
      const reusableQuestions = availableQuestions.filter((q) => !usedBaseQuestionIds.has(q.id))

      for (let i = 0; i < targetCount - selected.length && reusableQuestions.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * reusableQuestions.length)
        const originalQuestion = reusableQuestions.splice(randomIndex, 1)[0]

        const modifiedQuestion: QuizQuestion = {
          ...originalQuestion,
          id: originalQuestion.id + 10000 + selected.length, // Unique modified ID
          difficulty: targetDifficulty, // Force correct difficulty
        }

        selected.push(modifiedQuestion)
        usedQuestionIds.add(modifiedQuestion.id)
        usedBaseQuestionIds.add(originalQuestion.id)
      }
    }

    console.log(`[Server] Selected ${selected.length} questions for ${targetDifficulty} difficulty`)
    return selected
  }

  // 1. Generate 5 Easy questions
  const easySelected = selectUniqueQuestions("easy", 5, easyQuestions)
  finalQuestions.push(...easySelected)

  // 2. Generate 5 Medium questions
  const mediumSelected = selectUniqueQuestions("medium", 5, mediumQuestions)
  finalQuestions.push(...mediumSelected)

  // 3. Generate 5 Hard questions
  const hardSelected = selectUniqueQuestions("hard", 5, hardQuestions)
  finalQuestions.push(...hardSelected)

  while (finalQuestions.length < 15) {
    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    const paddedQuestion: QuizQuestion = {
      ...randomQuestion,
      id: randomQuestion.id + 20000 + finalQuestions.length,
    }
    finalQuestions.push(paddedQuestion)
  }

  if (finalQuestions.length > 15) {
    finalQuestions.splice(15)
  }

  const difficultyOrder = { easy: 1, medium: 2, hard: 3 }
  finalQuestions.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty])

  console.log(`[Server] Final quiz: ${finalQuestions.length} questions`)
  console.log(
    `[Server] Difficulty distribution: Easy(${easySelected.length}), Medium(${mediumSelected.length}), Hard(${hardSelected.length})`,
  )

  const finalIds = finalQuestions.map((q) => q.id)
  const uniqueIds = new Set(finalIds)
  if (finalIds.length !== uniqueIds.size) {
    console.error(`[Server] ERROR: Duplicate question IDs detected!`)
  }

  return finalQuestions
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const genre = (searchParams.get("genre") as GenreKey) || "all"

    console.log(`[Server API] Received request for genre: ${genre}`)

    const questions = generateQuizSession(genre)

    console.log(`[Server API] Returning ${questions.length} questions`)

    return NextResponse.json({
      success: true,
      questions,
      genre,
      totalQuestions: questions.length,
    })
  } catch (error) {
    console.error("[Server API] Error generating quiz:", error)
    return NextResponse.json({ success: false, error: "Failed to generate quiz" }, { status: 500 })
  }
}
