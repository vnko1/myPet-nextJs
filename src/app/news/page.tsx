import { Articles, Search } from "./_components";
import styles from "./styles.module.scss";

type PageProps = { searchParams: { query?: string; page?: string } };

export default function Page({
  searchParams: { page = "1", query = "" },
}: PageProps) {
  return (
    <section className={`${styles["news"]} section`}>
      <div className="container">
        <h1 className="title">News</h1>
        <Search />
        <Articles page={page} query={query} />
      </div>
    </section>
  );
}
