import Head from "next/head";
import styles from "../styles/Home.module.css";
import Person from "../components/person";
import Data from "../utils/data";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          The 147 Members of Congress Who Voted to Overturn Election Results
        </title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          The 147 Members of Congress Who Voted to Overturn Election Results
        </h1>

        <p className={styles.description}>
          Sourced from{" "}
          <a href="https://www.nytimes.com/interactive/2021/01/07/us/elections/electoral-college-biden-objectors.html">
            The New York Times
          </a>
        </p>

        <div className={styles.grid}>
          {Data.MEMBERS_OF_CONGRESS.map((rep) => {
            return <Person rep={rep} />;
          })}
        </div>

        <div></div>
      </main>

      <footer className={styles.footer}>
        Created by&nbsp;<a href="http://nickreynolds.net"> Nick Reynolds</a>
      </footer>
    </div>
  );
}
