import { getArticlesPages } from "@/lib";
import { Articles, Pagination, Search } from "./_components";
import styles from "./styles.module.scss";

type PageProps = { searchParams: { query?: string; page?: string } };

export default async function Page({
  searchParams: { page = "1", query = "" },
}: PageProps) {
  const totalPages = await getArticlesPages({ query });

  return (
    <section className={`${styles["news"]} section`}>
      <div className="container">
        <h1 className="title">News</h1>
        <Search />
        <Articles page={page} query={query} />
        <Pagination totalPages={totalPages} />
      </div>
    </section>
  );
}
