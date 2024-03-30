import styles from "./styles.module.scss";

export default function Page() {
  return (
    <section className={`${styles["news"]} section`}>
      <div className="container">
        <h1 className={styles["title"]}>News</h1>
        <div className={styles["search"]}></div>
      </div>
    </section>
  );
}
