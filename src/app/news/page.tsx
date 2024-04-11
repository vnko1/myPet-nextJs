import { getArticlesPages } from "@/lib/database";
import { Pagination, Search } from "@/app/_components";
import { Articles } from "./_components";
import styles from "./news.module.scss";

type PageProps = { searchParams: { query?: string; page?: string } };

// export const fetchCache = "force-no-store";

export default async function News({
  searchParams: { page = "1", query = "" },
}: PageProps) {
  const totalPages = await getArticlesPages({ query });

  return (
    <main>
      <section className={`${styles["news"]} section`}>
        <div className={`${styles["news__wrapper"]} container`}>
          <h1 className="title">News</h1>
          <Search />
          <Articles page={page} query={query} />
          <Pagination totalPages={totalPages} />
        </div>
      </section>
    </main>
  );
}
