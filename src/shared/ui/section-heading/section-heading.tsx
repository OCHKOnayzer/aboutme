import type { SectionHeadingProps } from "./section-heading.types";
import styles from "./section-heading.module.scss";

export function SectionHeading({
  className = "",
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className={`${styles.heading} ${className}`}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title}>{title}</h2>
      {description ? (
        <p className={styles.description}>{description}</p>
      ) : null}
    </div>
  );
}
