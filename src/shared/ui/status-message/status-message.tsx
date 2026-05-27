import type { StatusMessageProps } from "./status-message.types";
import styles from "./status-message.module.scss";

export function StatusMessage({
  children,
  className = "",
  errorTitle,
  status,
  successTitle,
}: StatusMessageProps) {
  const isSuccess = status === "success";
  const title = isSuccess ? successTitle : errorTitle;

  return (
    <div
      aria-live="polite"
      className={`${styles.message} ${
        isSuccess ? styles.success : styles.error
      } ${className}`}
      role="status"
    >
      {title ? <p className={styles.title}>{title}</p> : null}
      <div className={title ? styles.content : styles.contentOnly}>
        {children}
      </div>
    </div>
  );
}
