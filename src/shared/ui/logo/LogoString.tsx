import styles from "./logo.module.scss";

function LogoString() {
  return (
    <div className={styles.logo}>
      <span className={styles.logo__title}>Easy</span>
      <span className={styles.logo__description}>Food</span>
    </div>
  );
}

export default LogoString;
