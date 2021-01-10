import styles from "../styles/Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
