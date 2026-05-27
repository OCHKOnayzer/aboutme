import type { CardProps } from "./card.types";
import styles from "./card.module.scss";

export function Card({ children, className = "" }: CardProps) {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
}
