import { getLatestNews } from "@/lib/news";
import NewsList from "@/lib/news-list";

export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
