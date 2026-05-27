import type { FieldValues } from "react-hook-form";
import type { FormTextareaProps } from "./form-textarea.types";
import styles from "./form-textarea.module.scss";

export function FormTextarea<TFields extends FieldValues>({
  error,
  label,
  name,
  placeholder,
  register,
  rules,
}: FormTextareaProps<TFields>) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>{label}</span>
      <textarea
        {...register(name, rules)}
        aria-invalid={Boolean(error)}
        className={styles.textarea}
        placeholder={placeholder}
      />
      <span className={styles.error}>{error?.message || ""}</span>
    </label>
  );
}
