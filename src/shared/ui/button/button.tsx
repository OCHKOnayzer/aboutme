import type { ButtonProps, ButtonVariant } from "./button.types";
import styles from "./button.module.scss";

const variantClassNames: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
};

export function Button({
  children,
  className = "",
  fullWidth = false,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${fullWidth ? styles.fullWidth : ""} ${
        variantClassNames[variant]
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
