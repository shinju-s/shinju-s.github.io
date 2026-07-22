export type Album = {
  releaseOrder: number;
  title: string;
  slug: string;
  cover: string;
  released: boolean;
};

// 発売前は released: false、発売日に true へ変更します。
export const albums: Album[] = [
  {
    releaseOrder: 1,
    title: "Bridging Time",
    slug: "bridging-time",
    cover: "/images/music/01-bridging-time/cover1.png",
    released: true,
  },
  {
    releaseOrder: 2,
    title: "究極",
    slug: "kyukyoku",
    cover: "/images/music/02-kyukyoku/cover2.png",
    released: true,
  },
  {
    releaseOrder: 3,
    title: "Seven Recipes",
    slug: "seven-recipes",
    cover: "/images/music/03-seven-recipes/cover3.png",
    released: true,
  },
  {
    releaseOrder: 4,
    title: "ARMS",
    slug: "arms",
    cover: "/images/music/04-arms/cover4.png",
    released: true,
  },
  {
    releaseOrder: 5,
    title: "Platform Unknown",
    slug: "platform-unknown",
    cover: "/images/music/05-platform-unknown/cover5.png",
    released: true,
  },
  {
    releaseOrder: 6,
    title: "Stand by",
    slug: "stand-by",
    cover: "/images/music/06-stand-by/cover6.png",
    released: true,
  },
  {
    releaseOrder: 7,
    title: "Spring Thread",
    slug: "spring-thread",
    cover: "/images/music/07-spring-thread/cover7.png",
    released: true,
  },
  {
    releaseOrder: 8,
    title: "51%",
    slug: "51-percent",
    cover: "/images/music/08-51-percent/cover8.png",
    released: true,
  },
  {
    releaseOrder: 9,
    title: "Past and Present",
    slug: "past-and-present",
    cover: "/images/music/09-past-and-present/cover9.png",
    released: true,
  },
  {
    releaseOrder: 10,
    title: "Rocking Roads",
    slug: "rocking-roads",
    cover: "/images/music/10-rocking-roads/cover10.png",
    released: true,
  },
  {
    releaseOrder: 11,
    title: "兆し",
    slug: "kizashi",
    cover: "/images/music/11-kizashi/cover11.png",
    released: false,
  },
];