import type { CraftCategory, KnowledgeCategory, QuestionFormat, Difficulty, QuizQuestion } from "@/types/quiz"

export const CRAFT_CATEGORIES: CraftCategory[] = [
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
  "名古屋友禅",
  "名古屋黒紋付染",
  "京鹿の子絞",
  "京友禅",
  "京小紋",
  "京黒紋付染",
  "浪華本染め",
  "琉球びんがた",

  // その他の繊維製品 (5品目)
  "行田足袋",
  "加賀繍",
  "伊賀くみひも",
  "京繡",
  "京くみひも",

  // 陶磁器 (33品目)
  "大堀相馬焼",
  "会津本郷焼",
  "笠間焼",
  "益子焼",
  "佐渡無名異焼",
  "九谷焼",
  "美濃焼",
  "常滑焼",
  "赤津焼",
  "瀬戸染付焼",
  "三州鬼瓦工芸品",
  "四日市萬古焼",
  "伊賀焼",
  "越前焼",
  "信楽焼",
  "京焼・清水焼",
  "丹波立杭焼",
  "出石焼",
  "石見焼",
  "備前焼",
  "萩焼",
  "大谷焼",
  "砥部焼",
  "小石原焼",
  "上野焼",
  "伊万里・有田焼",
  "唐津焼",
  "三川内焼",
  "波佐見焼",
  "小代焼",
  "天草陶磁器",
  "薩摩焼",
  "壺屋焼",

  // 漆器 (23品目)
  "津軽塗",
  "秀衡塗",
  "浄法寺塗",
  "鳴子漆器",
  "川連漆器",
  "会津塗",
  "鎌倉彫",
  "小田原漆器",
  "村上木彫堆朱",
  "新潟漆器",
  "木曽漆器",
  "高岡漆器",
  "輪島塗",
  "山中漆器",
  "金沢漆器",
  "飛騨春慶",
  "越前漆器",
  "若狭塗",
  "京漆器",
  "紀州漆器",
  "大内塗",
  "香川漆器",
  "琉球漆器",

  // 木工品・竹工品 (33品目)
  "二風谷イタ",
  "岩谷堂箪笥",
  "仙台箪笥",
  "樺細工",
  "大館曲げわっぱ",
  "秋田杉桶樽",
  "奥会津編み組細工",
  "春日部桐箪笥",
  "江戸和竿",
  "江戸指物",
  "箱根寄木細工",
  "加茂桐箪笥",
  "松本家具",
  "南木曽ろくろ細工",
  "駿河竹千筋細工",
  "井波彫刻",
  "一位一刀彫",
  "岐阜和傘",
  "名古屋桐箪笥",
  "越前箪笥",
  "京指物",
  "大阪欄間",
  "大阪唐木指物",
  "大阪泉州桐箪笥",
  "大阪金剛簾",
  "豊岡杞柳細工",
  "紀州箪笥",
  "紀州へら竿",
  "勝山竹細工",
  "宮島細工",
  "別府竹細工",
  "都城大弓",
  "高山茶筌",

  // 金工品 (16品目)
  "南部鉄器",
  "山形鋳物",
  "千葉工匠具",
  "東京銀器",
  "東京アンチモニー工芸品",
  "燕鎚起銅器",
  "越後与板打刃物",
  "越後三条打刃物",
  "信州打刃物",
  "高岡銅器",
  "越前打刃物",
  "堺打刃物",
  "大阪浪華錫器",
  "播州三木打刃物",
  "土佐打刃物",
  "肥後象がん",

  // 仏壇・仏具 (17品目)
  "山形仏壇",
  "長岡仏壇",
  "三条仏壇",
  "新潟・白根仏壇",
  "飯山仏壇",
  "金沢仏壇",
  "七尾仏壇",
  "三河仏壇",
  "名古屋仏壇",
  "尾張仏具",
  "彦根仏壇",
  "京仏壇",
  "京仏具",
  "大阪仏壇",
  "広島仏壇",
  "八女福島仏壇",
  "川辺仏壇",

  // 和紙 (9品目)
  "内山紙",
  "越中和紙",
  "美濃和紙",
  "越前和紙",
  "因州和紙",
  "石州和紙",
  "阿波和紙",
  "大洲和紙",
  "土佐和紙",

  // 文具 (10品目)
  "雄勝硯",
  "豊橋筆",
  "鈴鹿墨",
  "播州そろばん",
  "奈良筆",
  "奈良墨",
  "雲州そろばん",
  "熊野筆",
  "川尻筆",
  "赤間硯",

  // 石工品 (4品目)
  "真壁石燈籠",
  "岡崎石工品",
  "京石工芸品",
  "出雲石燈ろう",

  // 貴石細工 (2品目)
  "甲州水晶貴石細工",
  "若狭めのう細工",

  // 人形・こけし (10品目)
  "宮城伝統こけし",
  "江戸木目込人形",
  "岩槻人形",
  "江戸節句人形",
  "江戸押絵",
  "駿河雛具",
  "駿河雛人形",
  "名古屋節句飾",
  "京人形",
  "博多人形",

  // その他の工芸品 (26品目)
  "天童将棋駒",
  "房州うちわ",
  "江戸からかみ",
  "江戸切子",
  "江戸木版画",
  "江戸硝子",
  "江戸べっ甲",
  "東京三味線",
  "東京琴",
  "江戸表具",
  "甲州印伝",
  "甲州手彫印章",
  "岐阜提灯",
  "尾張七宝",
  "越中福岡の菅笠",
  "京扇子",
  "京うちわ",
  "京表具",
  "いずみガラス",
  "播州毛鉤",
  "福山琴",
  "丸亀うちわ",
  "八女提灯",
  "長崎べっ甲",
  "山鹿灯籠",
  "三線",

  // 工芸材料・工芸用具 (3品目)
  "庄川挽物木地",
  "金沢箔",
  "伊勢形紙",
]

// Knowledge category distribution (total 15 questions)
export const KNOWLEDGE_DISTRIBUTION: Record<KnowledgeCategory, number> = {
  history: 3,
  geography: 3,
  materials: 4,
  usage: 2,
  design: 2,
  trivia: 1,
}

// Question format distribution (total 15 questions)
export const FORMAT_DISTRIBUTION: Record<QuestionFormat, number> = {
  multiple_choice: 10,
  true_false: 5,
}

// Difficulty distribution (total 15 questions)
export const DIFFICULTY_DISTRIBUTION: Record<Difficulty, number> = {
  easy: 5,
  medium: 5,
  hard: 5,
}

export const GENRE_CATEGORIES = {
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
      "名古屋友禅",
      "名古屋黒紋付染",
      "京鹿の子絞",
      "京友禅",
      "京小紋",
      "京黒紋付染",
      "浪華本染め",
      "琉球びんがた",
    ] as CraftCategory[],
  },
  otherTextiles: {
    name: "その他の繊維製品 (Other Textile Products)",
    crafts: ["行田足袋", "加賀繍", "伊賀くみひも", "京繡", "京くみひも"] as CraftCategory[],
  },
  pottery: {
    name: "陶磁器 (Pottery & Ceramics)",
    crafts: [
      "大堀相馬焼",
      "会津本郷焼",
      "笠間焼",
      "益子焼",
      "佐渡無名異焼",
      "九谷焼",
      "美濃焼",
      "常滑焼",
      "赤津焼",
      "瀬戸染付焼",
      "三州鬼瓦工芸品",
      "四日市萬古焼",
      "伊賀焼",
      "越前焼",
      "信楽焼",
      "京焼・清水焼",
      "丹波立杭焼",
      "出石焼",
      "石見焼",
      "備前焼",
      "萩焼",
      "大谷焼",
      "砥部焼",
      "小石原焼",
      "上野焼",
      "伊万里・有田焼",
      "唐津焼",
      "三川内焼",
      "波佐見焼",
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
      "秀衡塗",
      "浄法寺塗",
      "鳴子漆器",
      "川連漆器",
      "会津塗",
      "鎌倉彫",
      "小田原漆器",
      "村上木彫堆朱",
      "新潟漆器",
      "木曽漆器",
      "高岡漆器",
      "輪島塗",
      "山中漆器",
      "金沢漆器",
      "飛騨春慶",
      "越前漆器",
      "若狭塗",
      "京漆器",
      "紀州漆器",
      "大内塗",
      "香川漆器",
      "琉球漆器",
    ] as CraftCategory[],
  },
  woodBamboo: {
    name: "木工品・竹工品 (Woodwork & Bamboo Crafts)",
    crafts: [
      "二風谷イタ",
      "岩谷堂箪笥",
      "仙台箪笥",
      "樺細工",
      "大館曲げわっぱ",
      "秋田杉桶樽",
      "奥会津編み組細工",
      "春日部桐箪笥",
      "江戸和竿",
      "江戸指物",
      "箱根寄木細工",
      "加茂桐箪笥",
      "松本家具",
      "南木曽ろくろ細工",
      "駿河竹千筋細工",
      "井波彫刻",
      "一位一刀彫",
      "岐阜和傘",
      "名古屋桐箪笥",
      "越前箪笥",
      "京指物",
      "大阪欄間",
      "大阪唐木指物",
      "大阪泉州桐箪笥",
      "大阪金剛簾",
      "豊岡杞柳細工",
      "紀州箪笥",
      "紀州へら竿",
      "勝山竹細工",
      "宮島細工",
      "別府竹細工",
      "都城大弓",
      "高山茶筌",
    ] as CraftCategory[],
  },
  metalwork: {
    name: "金工品 (Metalwork)",
    crafts: [
      "南部鉄器",
      "山形鋳物",
      "千葉工匠具",
      "東京銀器",
      "東京アンチモニー工芸品",
      "燕鎚起銅器",
      "越後与板打刃物",
      "越後三条打刃物",
      "信州打刃物",
      "高岡銅器",
      "越前打刃物",
      "堺打刃物",
      "大阪浪華錫器",
      "播州三木打刃物",
      "土佐打刃物",
      "肥後象がん",
    ] as CraftCategory[],
  },
  buddhist: {
    name: "仏壇・仏具 (Buddhist Altars & Fittings)",
    crafts: [
      "山形仏壇",
      "長岡仏壇",
      "三条仏壇",
      "新潟・白根仏壇",
      "飯山仏壇",
      "金沢仏壇",
      "七尾仏壇",
      "三河仏壇",
      "名古屋仏壇",
      "尾張仏具",
      "彦根仏壇",
      "京仏壇",
      "京仏具",
      "大阪仏壇",
      "広島仏壇",
      "八女福島仏壇",
      "川辺仏壇",
    ] as CraftCategory[],
  },
  washi: {
    name: "和紙 (Washi Paper)",
    crafts: [
      "内山紙",
      "越中和紙",
      "美濃和紙",
      "越前和紙",
      "因州和紙",
      "石州和紙",
      "阿波和紙",
      "大洲和紙",
      "土佐和紙",
    ] as CraftCategory[],
  },
  stationery: {
    name: "文具 (Stationery)",
    crafts: [
      "雄勝硯",
      "豊橋筆",
      "鈴鹿墨",
      "播州そろばん",
      "奈良筆",
      "奈良墨",
      "雲州そろばん",
      "熊野筆",
      "川尻筆",
      "赤間硯",
    ] as CraftCategory[],
  },
  stonework: {
    name: "石工品 (Stonework)",
    crafts: ["真壁石燈籠", "岡崎石工品", "京石工芸品", "出雲石燈ろう"] as CraftCategory[],
  },
  preciousStone: {
    name: "貴石細工 (Precious Stone Craft)",
    crafts: ["甲州水晶貴石細工", "若狭めのう細工"] as CraftCategory[],
  },
  dolls: {
    name: "人形・こけし (Dolls & Kokeshi)",
    crafts: [
      "宮城伝統こけし",
      "江戸木目込人形",
      "岩槻人形",
      "江戸節句人形",
      "江戸押絵",
      "駿河雛具",
      "駿河雛人形",
      "名古屋節句飾",
      "京人形",
      "博多人形",
    ] as CraftCategory[],
  },
  otherCrafts: {
    name: "その他の工芸品 (Other Crafts)",
    crafts: [
      "天童将棋駒",
      "房州うちわ",
      "江戸からかみ",
      "江戸切子",
      "江戸木版画",
      "江戸硝子",
      "江戸べっ甲",
      "東京三味線",
      "東京琴",
      "江戸表具",
      "甲州印伝",
      "甲州手彫印章",
      "岐阜提灯",
      "尾張七宝",
      "越中福岡の菅笠",
      "京扇子",
      "京うちわ",
      "京表具",
      "いずみガラス",
      "播州毛鉤",
      "福山琴",
      "丸亀うちわ",
      "八女提灯",
      "長崎べっ甲",
      "山鹿灯籠",
      "三線",
    ] as CraftCategory[],
  },
  craftMaterials: {
    name: "工芸材料・工芸用具 (Craft Materials & Tools)",
    crafts: ["庄川挽物木地", "金沢箔", "伊勢形紙"] as CraftCategory[],
  },
} as const

export type GenreKey = keyof typeof GENRE_CATEGORIES

export const SAMPLE_QUESTIONS: QuizQuestion[] = [
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

  // 染色品 (Dyed Goods) - Easy Questions
  {
    id: 6,
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
    id: 7,
    craft: "京友禅",
    category: "design",
    difficulty: "easy",
    format: "true_false",
    question: "京友禅は手描きで模様を描く技法である。",
    answer: "true",
    explanation: "京友禅は筆で手描きする技法が基本で、繊細で優雅な模様が特徴です。",
  },
  {
    id: 8,
    craft: "有松・鳴海絞",
    category: "materials",
    difficulty: "easy",
    format: "multiple_choice",
    question: "有松・鳴海絞の主な技法は何ですか？",
    options: ["絞り染め", "型染め", "ろうけつ染め", "引き染め"],
    answer: "絞り染め",
    explanation: "有松・鳴海絞は布を糸で縛って絞り、染料が入らない部分を作る絞り染めの技法です。",
  },

  // 陶磁器 (Pottery & Ceramics) - Easy Questions
  {
    id: 9,
    craft: "九谷焼",
    category: "design",
    difficulty: "easy",
    format: "multiple_choice",
    question: "九谷焼の主な産地はどこですか？",
    options: ["石川県", "岐阜県", "愛知県", "滋賀県"],
    answer: "石川県",
    explanation: "九谷焼は石川県南部で作られる色絵磁器で、「九谷五彩」と呼ばれる鮮やかな色彩が特徴です。",
  },
  {
    id: 10,
    craft: "備前焼",
    category: "materials",
    difficulty: "easy",
    format: "true_false",
    question: "備前焼は釉薬を使わない焼き物である。",
    answer: "true",
    explanation: "備前焼は釉薬を使わず、土の性質と炎の作用だけで独特の色合いと質感を生み出す焼き物です。",
  },
  {
    id: 11,
    craft: "伊万里・有田焼",
    category: "history",
    difficulty: "easy",
    format: "multiple_choice",
    question: "有田焼が始まったのはいつ頃ですか？",
    options: ["17世紀初頭", "16世紀初頭", "18世紀初頭", "15世紀初頭"],
    answer: "17世紀初頭",
    explanation: "有田焼は1610年代に朝鮮の陶工・李参平が有田で磁器の原料を発見したことから始まりました。",
  },
  {
    id: 12,
    craft: "信楽焼",
    category: "geography",
    difficulty: "easy",
    format: "true_false",
    question: "信楽焼は滋賀県で作られる焼き物である。",
    answer: "true",
    explanation: "信楽焼は滋賀県甲賀市信楽町で作られる陶器で、狸の置物で有名です。",
  },

  // 漆器 (Lacquerware) - Medium Questions
  {
    id: 13,
    craft: "輪島塗",
    category: "usage",
    difficulty: "medium",
    format: "multiple_choice",
    question: "輪島塗の特徴的な技法は何ですか？",
    options: ["珪藻土の下地", "金箔の装飾", "螺鈿の象嵌", "蒔絵の技法"],
    answer: "珪藻土の下地",
    explanation: "輪島塗は珪藻土を使った丈夫な下地作りが特徴で、この技法により優れた耐久性を持ちます。",
  },
  {
    id: 14,
    craft: "津軽塗",
    category: "history",
    difficulty: "medium",
    format: "true_false",
    question: "津軽塗は何度も漆を塗り重ねて研ぎ出す技法を用いる。",
    answer: "true",
    explanation: "津軽塗は何十回も漆を塗り重ね、最後に研ぎ出すことで美しい模様を現す独特の技法です。",
  },
  {
    id: 15,
    craft: "会津塗",
    category: "materials",
    difficulty: "medium",
    format: "multiple_choice",
    question: "会津塗の下地に使われる材料は何ですか？",
    options: ["炭粉", "珪藻土", "砥の粉", "貝殻粉"],
    answer: "炭粉",
    explanation: "会津塗は炭粉を使った下地作りが特徴で、丈夫で美しい仕上がりになります。",
  },

  // 金工品 (Metalwork) - Medium Questions
  {
    id: 16,
    craft: "南部鉄器",
    category: "materials",
    difficulty: "medium",
    format: "multiple_choice",
    question: "南部鉄器の歴史はいつ頃から始まりましたか？",
    options: ["平安時代", "鎌倉時代", "室町時代", "江戸時代"],
    answer: "室町時代",
    explanation: "南部鉄器は室町時代に茶の湯の発展とともに始まり、江戸時代に本格的に発展しました。",
  },
  {
    id: 17,
    craft: "高岡銅器",
    category: "design",
    difficulty: "medium",
    format: "true_false",
    question: "高岡銅器は鋳造技術を用いて作られる。",
    answer: "true",
    explanation: "高岡銅器は400年の歴史を持つ鋳造技術により、仏具や花器、置物などが作られています。",
  },
  {
    id: 18,
    craft: "燕鎚起銅器",
    category: "usage",
    difficulty: "medium",
    format: "multiple_choice",
    question: "燕鎚起銅器の主な製法は何ですか？",
    options: ["鎚で叩いて成形", "鋳型で鋳造", "ろくろで成形", "プレスで成形"],
    answer: "鎚で叩いて成形",
    explanation: "燕鎚起銅器は一枚の銅板を鎚で叩いて立体的に成形する技法が特徴です。",
  },

  // 木工品・竹工品 (Woodwork & Bamboo) - Hard Questions
  {
    id: 19,
    craft: "箱根寄木細工",
    category: "usage",
    difficulty: "hard",
    format: "multiple_choice",
    question: "箱根寄木細工の「ずく」とは何を指しますか？",
    options: ["木材の種類", "寄木の単位", "仕上げ技法", "道具の名前"],
    answer: "寄木の単位",
    explanation: "「ずく」は寄木細工の基本単位で、異なる色の木材を組み合わせた一つの模様ブロックを指します。",
  },
  {
    id: 20,
    craft: "井波彫刻",
    category: "history",
    difficulty: "hard",
    format: "true_false",
    question: "井波彫刻は瑞泉寺の再建がきっかけで発展した。",
    answer: "true",
    explanation: "井波彫刻は1390年の瑞泉寺再建時に京都から招いた彫刻師の技術が地元に根付いて発展しました。",
  },
  {
    id: 21,
    craft: "別府竹細工",
    category: "materials",
    difficulty: "hard",
    format: "multiple_choice",
    question: "別府竹細工で主に使われる竹の種類は何ですか？",
    options: ["真竹", "孟宗竹", "淡竹", "女竹"],
    answer: "真竹",
    explanation: "別府竹細工では主に真竹が使われ、その柔軟性と強度が細かい細工に適しています。",
  },

  // 和紙 (Washi Paper) - Hard Questions
  {
    id: 22,
    craft: "越前和紙",
    category: "materials",
    difficulty: "hard",
    format: "multiple_choice",
    question: "越前和紙の「流し漉き」技法の特徴は何ですか？",
    options: ["厚い紙を作る", "薄く均一な紙を作る", "模様を付ける", "色を付ける"],
    answer: "薄く均一な紙を作る",
    explanation: "流し漉きは簀桁を前後左右に動かして繊維を絡ませ、薄く均一で強靭な紙を作る技法です。",
  },
  {
    id: 23,
    craft: "美濃和紙",
    category: "geography",
    difficulty: "hard",
    format: "true_false",
    question: "美濃和紙は奈良時代から作られていた記録がある。",
    answer: "true",
    explanation: "美濃和紙は奈良時代の戸籍用紙として使われた記録があり、1300年以上の歴史を持ちます。",
  },
  {
    id: 24,
    craft: "土佐和紙",
    category: "trivia",
    difficulty: "hard",
    format: "multiple_choice",
    question: "土佐和紙の「典具帖紙」の厚さはどのくらいですか？",
    options: ["0.03mm", "0.1mm", "0.5mm", "1mm"],
    answer: "0.03mm",
    explanation: "典具帖紙は世界で最も薄い紙の一つで、厚さわずか0.03mmという驚異的な薄さです。",
  },

  // 人形・こけし (Dolls & Kokeshi) - Easy Questions
  {
    id: 25,
    craft: "宮城伝統こけし",
    category: "design",
    difficulty: "easy",
    format: "multiple_choice",
    question: "宮城伝統こけしの特徴的な模様は何ですか？",
    options: ["菊の花", "重ね菊", "桜の花", "梅の花"],
    answer: "重ね菊",
    explanation: "宮城伝統こけしは重ね菊と呼ばれる菊の花を重ねた模様が特徴的です。",
  },
  {
    id: 26,
    craft: "博多人形",
    category: "history",
    difficulty: "easy",
    format: "true_false",
    question: "博多人形は福岡県の伝統工芸品である。",
    answer: "true",
    explanation: "博多人形は福岡市で作られる素焼きの人形で、繊細な表情と美しい彩色が特徴です。",
  },
  {
    id: 27,
    craft: "江戸木目込人形",
    category: "materials",
    difficulty: "easy",
    format: "multiple_choice",
    question: "木目込人形の「木目込み」とは何を指しますか？",
    options: ["布を溝に押し込む技法", "木を彫る技法", "色を塗る技法", "髪を植える技法"],
    answer: "布を溝に押し込む技法",
    explanation: "木目込みは木製の胴体に彫った溝に布の端を押し込んで衣装を着せる技法です。",
  },

  // その他の工芸品 (Other Crafts) - Medium Questions
  {
    id: 28,
    craft: "江戸切子",
    category: "materials",
    difficulty: "medium",
    format: "multiple_choice",
    question: "江戸切子の代表的な文様は何ですか？",
    options: ["麻の葉", "矢来", "籠目", "すべて"],
    answer: "すべて",
    explanation: "江戸切子には麻の葉、矢来、籠目など多くの伝統的な文様があり、それぞれに意味があります。",
  },
  {
    id: 29,
    craft: "京扇子",
    category: "usage",
    difficulty: "medium",
    format: "true_false",
    question: "京扇子は茶道や舞踊で使われる。",
    answer: "true",
    explanation: "京扇子は茶道、舞踊、能楽などの伝統芸能で重要な道具として使われています。",
  },
  {
    id: 30,
    craft: "甲州印伝",
    category: "design",
    difficulty: "medium",
    format: "multiple_choice",
    question: "甲州印伝の特徴的な装飾技法は何ですか？",
    options: ["漆で模様を描く", "金箔を貼る", "刺繍を施す", "染色する"],
    answer: "漆で模様を描く",
    explanation: "甲州印伝は鹿革に漆で模様を描く独特の技法で、美しい光沢と耐久性を持ちます。",
  },
]

export function generateQuizSession(selectedGenre: GenreKey = "all"): QuizQuestion[] {
  const genreCrafts = GENRE_CATEGORIES[selectedGenre].crafts
  const availableQuestions = SAMPLE_QUESTIONS.filter((q) => genreCrafts.includes(q.craft))

  console.log(`[v0] Generating quiz for genre: ${selectedGenre}`)
  console.log(`[v0] Available questions for genre: ${availableQuestions.length}`)

  // Separate questions by difficulty
  const easyQuestions = availableQuestions.filter((q) => q.difficulty === "easy")
  const mediumQuestions = availableQuestions.filter((q) => q.difficulty === "medium")
  const hardQuestions = availableQuestions.filter((q) => q.difficulty === "hard")

  console.log(`[v0] Easy: ${easyQuestions.length}, Medium: ${mediumQuestions.length}, Hard: ${hardQuestions.length}`)

  const finalQuestions: QuizQuestion[] = []
  const usedQuestions = new Set<number>()

  // Helper function to select questions with robust fallback
  const selectQuestionsForDifficulty = (
    targetDifficulty: Difficulty,
    targetCount: number,
    primaryPool: QuizQuestion[],
  ): QuizQuestion[] => {
    const selected: QuizQuestion[] = []
    const unusedFromPool = primaryPool.filter((q) => !usedQuestions.has(q.id))

    // Strategy 1: Use questions from the primary pool (same difficulty)
    for (let i = 0; i < Math.min(targetCount, unusedFromPool.length); i++) {
      const randomIndex = Math.floor(Math.random() * unusedFromPool.length)
      const question = unusedFromPool.splice(randomIndex, 1)[0]
      selected.push(question)
      usedQuestions.add(question.id)
    }

    // Strategy 2: If we need more questions, use any unused questions from the genre
    if (selected.length < targetCount) {
      const anyUnusedQuestions = availableQuestions.filter((q) => !usedQuestions.has(q.id))

      while (selected.length < targetCount && anyUnusedQuestions.length > 0) {
        const randomIndex = Math.floor(Math.random() * anyUnusedQuestions.length)
        const question = anyUnusedQuestions.splice(randomIndex, 1)[0]
        selected.push(question)
        usedQuestions.add(question.id)
      }
    }

    // Strategy 3: If we still need more, allow reuse of questions (but modify them slightly)
    if (selected.length < targetCount) {
      const usedBaseQuestions = new Set<number>()
      const questionsToReuse = availableQuestions.filter((q) => q.difficulty === targetDifficulty)

      while (selected.length < targetCount && questionsToReuse.length > 0) {
        const randomIndex = Math.floor(Math.random() * questionsToReuse.length)
        const originalQuestion = questionsToReuse[randomIndex]

        if (usedBaseQuestions.has(originalQuestion.id)) {
          questionsToReuse.splice(randomIndex, 1)
          continue
        }

        // Create a modified copy to avoid exact duplicates
        const modifiedQuestion: QuizQuestion = {
          ...originalQuestion,
          id: originalQuestion.id + 10000 + selected.length, // Unique ID for reused question
        }

        selected.push(modifiedQuestion)
        usedQuestions.add(modifiedQuestion.id)
        usedBaseQuestions.add(originalQuestion.id)

        // Remove from reuse pool to avoid immediate re-selection
        questionsToReuse.splice(randomIndex, 1)
      }
    }

    console.log(`[v0] Selected ${selected.length} questions for ${targetDifficulty} difficulty`)
    return selected
  }

  // Generate questions in sequential difficulty order: Easy → Medium → Hard

  // 1. Generate 5 Easy questions
  const easySelected = selectQuestionsForDifficulty("easy", 5, easyQuestions)
  finalQuestions.push(...easySelected)

  // 2. Generate 5 Medium questions
  const mediumSelected = selectQuestionsForDifficulty("medium", 5, mediumQuestions)
  finalQuestions.push(...mediumSelected)

  // 3. Generate 5 Hard questions
  const hardSelected = selectQuestionsForDifficulty("hard", 5, hardQuestions)
  finalQuestions.push(...hardSelected)

  console.log(`[v0] Final quiz generated with ${finalQuestions.length} questions`)
  console.log(
    `[v0] Difficulty distribution: Easy(${easySelected.length}), Medium(${mediumSelected.length}), Hard(${hardSelected.length})`,
  )

  // Ensure we have exactly 15 questions
  if (finalQuestions.length !== 15) {
    console.error(`[v0] ERROR: Generated ${finalQuestions.length} questions instead of 15`)

    // Emergency fallback: pad with random questions if under 15
    while (finalQuestions.length < 15) {
      const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
      const paddedQuestion: QuizQuestion = {
        ...randomQuestion,
        id: randomQuestion.id + 20000 + finalQuestions.length,
      }
      finalQuestions.push(paddedQuestion)
    }

    // Trim if over 15 (shouldn't happen with current logic)
    if (finalQuestions.length > 15) {
      finalQuestions.splice(15)
    }
  }

  const difficultyOrder = { easy: 1, medium: 2, hard: 3 }
  finalQuestions.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty])

  console.log(`[v0] Final questions sorted by difficulty order`)

  return finalQuestions
}

// Function to calculate quiz results
export function calculateQuizResults(
  questions: QuizQuestion[],
  answers: (string | null)[],
  completionTime: number,
): any {
  const correctAnswers = answers.filter((answer, index) => answer === questions[index]?.answer).length

  const accuracy = (correctAnswers / questions.length) * 100

  const categoryBreakdown: Record<KnowledgeCategory, { correct: number; total: number }> = {
    history: { correct: 0, total: 0 },
    geography: { correct: 0, total: 0 },
    materials: { correct: 0, total: 0 },
    usage: { correct: 0, total: 0 },
    design: { correct: 0, total: 0 },
    trivia: { correct: 0, total: 0 },
  }

  questions.forEach((question, index) => {
    categoryBreakdown[question.category].total++
    if (answers[index] === question.answer) {
      categoryBreakdown[question.category].correct++
    }
  })

  return {
    totalQuestions: questions.length,
    correctAnswers,
    accuracy,
    completionTime,
    categoryBreakdown,
  }
}
