import type {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export type FormTextareaProps<TFields extends FieldValues> = {
  error?: FieldError;
  label: string;
  name: Path<TFields>;
  placeholder: string;
  register: UseFormRegister<TFields>;
  rules: RegisterOptions<TFields, Path<TFields>>;
};
