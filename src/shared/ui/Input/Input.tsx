import type { InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = ({ label, error, hint, ...rest }: IInputProps) => {
  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.inputLabel}>{label}</label>}
      <input
        {...rest}
        className={`${styles.inputField} ${error ? styles["inputField--error"] : ""}`}
      />
      {hint && !error && <div className={styles.inputHint}>{hint}</div>}
      {error && <div className={styles.inputError}>{error}</div>}
    </div>
  );
};

export default Input;
