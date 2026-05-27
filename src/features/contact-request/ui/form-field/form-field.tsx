import type { FieldValues } from "react-hook-form";
import type { FormFieldProps } from "./form-field.types";
import styles from "./form-field.module.scss";

export function FormField<TFields extends FieldValues>({
  error,
  inputMode,
  label,
  name,
  placeholder,
  register,
  rules,
  type = "text",
}: FormFieldProps<TFields>) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>{label}</span>
      <input
        {...register(name, rules)}
        aria-invalid={Boolean(error)}
        className={styles.input}
        inputMode={inputMode}
        placeholder={placeholder}
        type={type}
      />
      <span className={styles.error}>{error?.message || ""}</span>
    </label>
  );
}
