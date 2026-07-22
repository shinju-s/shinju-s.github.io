import { lyrics } from "./lyrics";

export type Song = {
  id: string;
  albumNumber: number;
  albumTitle: string;
  trackNumber: number;
  title: string;
  image: string;
  youtube?: string;
  tunecore?: string;
  note?: string;
  lyrics?: string;
};

const albumFolders: Record<number, string> = {
  1: "01-bridging-time",
  2: "02-kyukyoku",
  3: "03-seven-recipes",
  4: "04-arms",
  5: "05-platform-unknown",
  6: "06-stand-by",
  7: "07-spring-thread",
  8: "08-51-percent",
  9: "09-past-and-present",
  10: "10-rocking-roads",
  11: "11-kizashi",
};

const albumTunecore: Record<number, string> = {
  1: "https://linkco.re/g4umdBhM",
  2: "https://linkco.re/cz9drGmE",
  3: "https://linkco.re/q1qPfX3a",
  4: "https://linkco.re/1N0Y2fsm",
  5: "https://linkco.re/HYfcyCD9",
  6: "https://linkco.re/zfyf1qQ3",
  7: "https://linkco.re/0ARFFAh9",
  8: "https://linkco.re/PmTbzbmu",
  9: "https://linkco.re/ttxyUUsq",
  10: "https://linkco.re/H44zrX6v",
};

const youtubeLinks: Record<string, string> = {
  "1-1": "https://www.youtube.com/watch?v=IFc_e4y1g1M",
  "1-2": "https://www.youtube.com/watch?v=lUS2x4IcTns",
  "1-3": "https://www.youtube.com/watch?v=htH_Kj1UVFo",
  "1-4": "https://www.youtube.com/watch?v=5Kt57lCkmZo",
  "1-5": "https://www.youtube.com/watch?v=ygtVOnZXOoc",
  "1-6": "https://www.youtube.com/watch?v=sRxkNK8JOnE",
  "1-7": "https://www.youtube.com/watch?v=jl6s9kw-Js0",
  "1-8": "https://www.youtube.com/watch?v=cS89xNA2VSc",
  "1-9": "https://www.youtube.com/watch?v=JtQew56ebiE",
  "1-10": "https://www.youtube.com/watch?v=s29_f-vHms0",
  "1-11": "https://www.youtube.com/watch?v=uMeVOQ9sqk4",
  "1-12": "https://www.youtube.com/watch?v=UNyXE0NKLi4",
  "1-13": "https://www.youtube.com/watch?v=FyskRcpTbeA",
  "1-14": "https://www.youtube.com/watch?v=QcWYU7VbW0c",
  "1-15": "https://www.youtube.com/watch?v=r1q5RhXkrKg",
  "2-1": "https://www.youtube.com/watch?v=RuWpd7b4CiQ",
  "2-2": "https://www.youtube.com/watch?v=dkINjy8SAbQ",
  "2-3": "https://www.youtube.com/watch?v=wqc2jonUqVQ",
  "2-4": "https://www.youtube.com/watch?v=ufN9fxn8U0c",
  "2-5": "https://www.youtube.com/watch?v=sldpBrsMrJg",
  "2-6": "https://www.youtube.com/watch?v=bzl37Bt5rCc",
  "2-7": "https://www.youtube.com/watch?v=oPqIwNObuMA",
  "2-8": "https://www.youtube.com/watch?v=xc7ear6CIxM",
  "2-9": "https://www.youtube.com/watch?v=8wjh-VXBf58",
  "3-1": "https://www.youtube.com/watch?v=4JGAKa0CPRY",
  "3-2": "https://www.youtube.com/watch?v=WPZqQxhlQSM",
  "3-3": "https://www.youtube.com/watch?v=ha5KhZDdL64",
  "3-4": "https://www.youtube.com/watch?v=cB0nA2qVngM",
  "3-5": "https://www.youtube.com/watch?v=vaT9DYXD6H0",
  "3-6": "https://www.youtube.com/watch?v=MiqKtUeTNRw",
  "3-7": "https://www.youtube.com/watch?v=c0L2dWwAiIg",
  "4-2": "https://www.youtube.com/watch?v=M_se5EbwDSo",
  "4-3": "https://www.youtube.com/watch?v=2bkvQ7WeDVQ",
  "5-1": "https://www.youtube.com/watch?v=MLcuXhbKXqI",
  "5-2": "https://www.youtube.com/watch?v=7L1P4kO3NcQ",
  "5-3": "https://www.youtube.com/watch?v=Q1jwgqvkvZY",
  "6-1": "https://www.youtube.com/watch?v=5x11vctpOAU",
  "6-2": "https://www.youtube.com/watch?v=Ct5x6UzIM3I",
  "6-3": "https://www.youtube.com/watch?v=cFWAK4NhBRA",
  "6-4": "https://www.youtube.com/watch?v=II-X1eS_ShI",
  "6-5": "https://www.youtube.com/watch?v=ETn1uKrGMQo",
  "4-1": "https://www.youtube.com/playlist?list=OLAK5uy_nu6fW8Pp7VOCRDt0rCIGLZAH7YHyf0fw8",
  "7-1": "https://www.youtube.com/watch?v=t44CwEfTp4g",
  "7-2": "https://www.youtube.com/watch?v=bvge_M_cRtk",
  "7-3": "https://www.youtube.com/watch?v=pQmbGEC8aBs",
  "8-1": "https://www.youtube.com/watch?v=mPL9tzm9VgE",
  "8-2": "https://www.youtube.com/watch?v=zQp1xFDgghM",
  "8-3": "https://www.youtube.com/watch?v=DeHOyeLygaQ",
  "8-4": "https://www.youtube.com/watch?v=0ZigLJIbI9Y",
  "8-5": "https://www.youtube.com/watch?v=1tt28pKx1IU",
  "9-1": "https://www.youtube.com/watch?v=Axa2B8VcDYk",
  "9-2": "https://www.youtube.com/watch?v=PzKRSPf53V4",
  "9-3": "https://www.youtube.com/watch?v=FKG6It3IJhg",
  "9-4": "https://www.youtube.com/watch?v=5m_pEw4xQlo",
  "9-5": "https://www.youtube.com/watch?v=SJlbfqGSb9g",
  "9-6": "https://www.youtube.com/watch?v=Ci7rHqvn-GY",
  "9-7": "https://www.youtube.com/watch?v=Ie_5QbVhmAg",
  "9-8": "https://www.youtube.com/watch?v=JDgDG4DbDv4",
  "9-9": "https://www.youtube.com/watch?v=zErT0gMBh8o",
  "9-10": "https://www.youtube.com/watch?v=RcONsYkr3cM",
  "9-11": "https://www.youtube.com/watch?v=XIv38AR14uY",
  "9-12": "https://www.youtube.com/watch?v=d50TybtMl8M",
  "9-13": "https://www.youtube.com/watch?v=gZJuqqzXb-w",
  "9-14": "https://music.youtube.com/playlist?list=OLAK5uy_kd8M5KNoW6mJfCltwL0Z5Y-2Ff-YS6Jnw",
  "9-15": "https://www.youtube.com/watch?v=RDbPgR9KD8c",
  "10-0": "https://www.youtube.com/playlist?list=OLAK5uy_m_VZnzsj7CMossP69oFuNIlE6hay_aHx4",
  "10-1": "https://www.youtube.com/watch?v=OBagewZFmds",
  "10-2": "https://www.youtube.com/watch?v=WtiTXChqId4",
  "10-3": "https://www.youtube.com/watch?v=KZ0R8891-_k",
  "10-4": "https://www.youtube.com/watch?v=hZV5eSlFIMI",
};

const songList = [
  { albumNumber: 1, albumTitle: "Bridging Time", trackNumber: 1, title: "Next Door" },
  { albumNumber: 1, albumTitle: "Bridging Time", trackNumber: 2, title: "One Light" },
  { albumNumber: 1, albumTitle: "Bridging Time", trackNumber: 3, title: "SAI" },
  { albumNumber: 1, albumTitle: "Bridging Time", trackNumber: 4, title: "Ganerations Eater" },
  { albumNumber: 1, albumTitle: "Bridging Time", trackNumber: 5, title: "先へ" },
  { albumNumber: 1, albumTitle: "Bridging Time", trackNumber: 6, title: "Final Answer" },
  { albumNumber: 1, albumTitle: "Bridging Time", trackNumber: 7, title: "あなたの好みになりたい" },
  { albumNumber: 1, albumTitle: "Bridging Time", trackNumber: 8, title: "Bridge of Us" },
  { albumNumber: 1, albumTitle: "Bridging Time", trackNumber: 9, title: "Next Stage" },
  { albumNumber: 1, albumTitle: "Bridging Time", trackNumber: 10, title: "緑煌" },
  { albumNumber: 1, albumTitle: "Bridging Time", trackNumber: 11, title: "Seasonal Diary" },
  { albumNumber: 1, albumTitle: "Bridging Time", trackNumber: 12, title: "Aurora" },
  { albumNumber: 1, albumTitle: "Bridging Time", trackNumber: 13, title: "想-thought" },
  { albumNumber: 1, albumTitle: "Bridging Time", trackNumber: 14, title: "Ear th Phone" },
  { albumNumber: 1, albumTitle: "Bridging Time", trackNumber: 15, title: "ORE SHIDAI" },

  { albumNumber: 2, albumTitle: "究極", trackNumber: 1, title: "いいづれーな" },
  { albumNumber: 2, albumTitle: "究極", trackNumber: 2, title: "におはせR" },
  { albumNumber: 2, albumTitle: "究極", trackNumber: 3, title: "におはせM" },
  { albumNumber: 2, albumTitle: "究極", trackNumber: 4, title: "潮時" },
  { albumNumber: 2, albumTitle: "究極", trackNumber: 5, title: "Trick or Light" },
  { albumNumber: 2, albumTitle: "究極", trackNumber: 6, title: "Instrumental Break" },
  { albumNumber: 2, albumTitle: "究極", trackNumber: 7, title: "フタガワサンライズ" },
  { albumNumber: 2, albumTitle: "究極", trackNumber: 8, title: "Re" },
  { albumNumber: 2, albumTitle: "究極", trackNumber: 9, title: "Bouquet" },

  { albumNumber: 3, albumTitle: "Seven Recipes", trackNumber: 1, title: "いまだ手におえる" },
  { albumNumber: 3, albumTitle: "Seven Recipes", trackNumber: 2, title: "幸せのあて" },
  { albumNumber: 3, albumTitle: "Seven Recipes", trackNumber: 3, title: "Lazy Parade" },
  { albumNumber: 3, albumTitle: "Seven Recipes", trackNumber: 4, title: "ひるねこ" },
  { albumNumber: 3, albumTitle: "Seven Recipes", trackNumber: 5, title: "追影" },
  { albumNumber: 3, albumTitle: "Seven Recipes", trackNumber: 6, title: "Warrior" },
  { albumNumber: 3, albumTitle: "Seven Recipes", trackNumber: 7, title: "豊作鬼願-Rice screams" },

  { albumNumber: 4, albumTitle: "ARMS", trackNumber: 1, title: "Silent Arrow" },
  { albumNumber: 4, albumTitle: "ARMS", trackNumber: 2, title: "From my hands" },
  { albumNumber: 4, albumTitle: "ARMS", trackNumber: 3, title: "希得" },

  { albumNumber: 5, albumTitle: "Platform Unknown", trackNumber: 1, title: "観覧しゃ" },
  { albumNumber: 5, albumTitle: "Platform Unknown", trackNumber: 2, title: "ゆきさき" },
  { albumNumber: 5, albumTitle: "Platform Unknown", trackNumber: 3, title: "未知の駅" },

  { albumNumber: 6, albumTitle: "Stand by", trackNumber: 1, title: "お笑いぐさ" },
  { albumNumber: 6, albumTitle: "Stand by", trackNumber: 2, title: "空模様" },
  { albumNumber: 6, albumTitle: "Stand by", trackNumber: 3, title: "motto" },
  { albumNumber: 6, albumTitle: "Stand by", trackNumber: 4, title: "No Continue" },
  { albumNumber: 6, albumTitle: "Stand by", trackNumber: 5, title: "トオイレットウ" },

  { albumNumber: 7, albumTitle: "Spring Thread", trackNumber: 1, title: "対岸" },
  { albumNumber: 7, albumTitle: "Spring Thread", trackNumber: 2, title: "芯糸" },
  { albumNumber: 7, albumTitle: "Spring Thread", trackNumber: 3, title: "それぞれの春" },

  { albumNumber: 8, albumTitle: "51%", trackNumber: 1, title: "無明" },
  { albumNumber: 8, albumTitle: "51%", trackNumber: 2, title: "かくしごとだけども" },
  { albumNumber: 8, albumTitle: "51%", trackNumber: 3, title: "フライハイ" },
  { albumNumber: 8, albumTitle: "51%", trackNumber: 4, title: "ふところ" },
  { albumNumber: 8, albumTitle: "51%", trackNumber: 5, title: "まだあいたい" },

  { albumNumber: 9, albumTitle: "Past and Present", trackNumber: 1, title: "August Blue" },
  { albumNumber: 9, albumTitle: "Past and Present", trackNumber: 2, title: "小数点" },
  { albumNumber: 9, albumTitle: "Past and Present", trackNumber: 3, title: "クリスマスの夜までに" },
  { albumNumber: 9, albumTitle: "Past and Present", trackNumber: 4, title: "Where we at" },
  { albumNumber: 9, albumTitle: "Past and Present", trackNumber: 5, title: "闇堕ち" },
  { albumNumber: 9, albumTitle: "Past and Present", trackNumber: 6, title: "S Distance" },
  { albumNumber: 9, albumTitle: "Past and Present", trackNumber: 7, title: "Rio" },
  { albumNumber: 9, albumTitle: "Past and Present", trackNumber: 8, title: "ALWAYS" },
  { albumNumber: 9, albumTitle: "Past and Present", trackNumber: 9, title: "Never say goodbye" },
  { albumNumber: 9, albumTitle: "Past and Present", trackNumber: 10, title: "あの頃も" },
  { albumNumber: 9, albumTitle: "Past and Present", trackNumber: 11, title: "Ask" },
  { albumNumber: 9, albumTitle: "Past and Present", trackNumber: 12, title: "Sea Story" },
  { albumNumber: 9, albumTitle: "Past and Present", trackNumber: 13, title: "HAPPY BIRTHDAY" },
  { albumNumber: 9, albumTitle: "Past and Present", trackNumber: 14, title: "点命" },
  { albumNumber: 9, albumTitle: "Past and Present", trackNumber: 15, title: "ほしあかり" },

  { albumNumber: 10, albumTitle: "Rocking Roads", trackNumber: 0, title: "Rolling Catmen" },
  { albumNumber: 10, albumTitle: "Rocking Roads", trackNumber: 1, title: "May Storm" },
  { albumNumber: 10, albumTitle: "Rocking Roads", trackNumber: 2, title: "Lock" },
  { albumNumber: 10, albumTitle: "Rocking Roads", trackNumber: 3, title: "Resonates" },
  { albumNumber: 10, albumTitle: "Rocking Roads", trackNumber: 4, title: "路来" },

  { albumNumber: 11, albumTitle: "兆し", trackNumber: 1, title: "おまちどうさまー" },
  { albumNumber: 11, albumTitle: "兆し", trackNumber: 2, title: "To you" },
  { albumNumber: 11, albumTitle: "兆し", trackNumber: 3, title: "伝言" },
  { albumNumber: 11, albumTitle: "兆し", trackNumber: 4, title: "未証明" },
] as const;

export const songs: Song[] = songList.map((song) => {
  const id = `${song.albumNumber}-${song.trackNumber}`;

  return {
    ...song,
    id,
    image: `/images/music/${albumFolders[song.albumNumber]}/${id}.png`,
    youtube: youtubeLinks[id],
    tunecore: albumTunecore[song.albumNumber],
    lyrics: lyrics[id],
  };
});
