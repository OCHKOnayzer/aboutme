import type { SectionContainerProps } from "./section-container.types";
import styles from "./section-container.module.scss";

export function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}
