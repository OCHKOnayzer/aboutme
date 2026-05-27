import type {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export type FormFieldProps<TFields extends FieldValues> = {
  error?: FieldError;
  inputMode?: "email" | "search" | "tel" | "text" | "url";
  label: string;
  name: Path<TFields>;
  placeholder: string;
  register: UseFormRegister<TFields>;
  rules: RegisterOptions<TFields, Path<TFields>>;
  type?: "email" | "text";
};
