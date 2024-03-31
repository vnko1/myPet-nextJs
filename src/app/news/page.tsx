import { Search } from "./_components";
import styles from "./styles.module.scss";

export default function Page() {
  return (
    <section className={`${styles["news"]} section`}>
      <div className="container">
        <h1 className="title">News</h1>
        <Search />
      </div>
    </section>
  );
}
