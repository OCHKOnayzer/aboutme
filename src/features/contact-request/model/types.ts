export type ContactFields = {
  name: string;
  phone: string;
  email: string;
  comment: string;
};

export type ContactPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  comment?: unknown;
};

export type ContactResponse = {
  message?: string;
};

export const initialContactFields: ContactFields = {
  name: "",
  phone: "",
  email: "",
  comment: "",
};
