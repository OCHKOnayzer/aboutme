import type { ContactFields } from "../../model/types";

export type ContactFormProps = {
  onFieldsChange?: (fields: ContactFields) => void;
};
