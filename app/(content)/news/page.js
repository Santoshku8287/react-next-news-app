import { getAllNews } from "@/lib/news";
import NewsList from "@/lib/news-list";

export default async function NewsPage(){
    const news = await getAllNews();
    return <>
        <h1>News Page</h1>
        <NewsList news={news}/>
    </>
}