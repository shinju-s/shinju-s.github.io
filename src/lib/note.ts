import Parser from "rss-parser";
import { site } from "../data/site";

export type NoteArticle = {
  title: string;
  link: string;
  date: string;
};

const parser = new Parser();

async function loadArticles(baseUrl: string): Promise<NoteArticle[]> {
  try {
    const feed = await parser.parseURL(`${baseUrl}/rss`);

    return feed.items.map((item) => ({
      title: item.title ?? "無題の記事",
      link: item.link ?? baseUrl,
      date: item.pubDate
        ? new Intl.DateTimeFormat("ja-JP", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(new Date(item.pubDate))
        : "",
    }));
  } catch (error) {
    console.error(`RSS取得失敗: ${baseUrl}`, error);
    return [];
  }
}

export async function getArmsArticles(limit?: number) {
  const articles = await loadArticles(site.notes.arms);
  return limit ? articles.slice(0, limit) : articles;
}

export async function getShinjuArticles(limit?: number) {
  const articles = await loadArticles(site.notes.personal);
  return limit ? articles.slice(0, limit) : articles;
}