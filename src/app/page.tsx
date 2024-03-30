import styles from "./styles.module.scss";

export default function Home() {
  return (
    <section className={styles["hero"]}>
      <div className="container">
        <h1 className={styles["title"]}>Take good care of your small pets</h1>
      </div>
    </section>
  );
}
