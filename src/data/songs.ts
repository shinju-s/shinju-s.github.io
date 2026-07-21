import { lyrics } from "./lyrics";
import { notes } from "./notes";
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
{
  albumNumber: 10,
  albumTitle: "Rocking Roads",
  trackNumber: 3,
  title: "Resonates",
  youtube: "https://youtu.be/KZ0R8891-_k",
  tunecore: "https://linkco.re/H44zrX6v",
},
  { albumNumber: 10, albumTitle: "Rocking Roads", trackNumber: 4, title: "路来" },
] as const;

export const songs: Song[] = songList.map((song) => {
  const id = `${song.albumNumber}-${song.trackNumber}`;

  return {
    ...song,
    id,
    image: `/images/music/${albumFolders[song.albumNumber]}/${id}.png`,
    lyrics: lyrics[id],
    note: notes[id],
  };
});