"use client";

import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useAsyncStatus } from "@/shared/lib";
import { Button, StatusMessage } from "@/shared/ui";
import { sendContactRequest } from "../../api/contact-client";
import { formatEmailInput, formatPhoneInput } from "../../model/formatters";
import { ContactFields, initialContactFields } from "../../model/types";
import {
  contactValidationMessages,
  emailPattern,
  phonePattern,
} from "../../model/validation";
import { FormField } from "../form-field/form-field";
import { FormTextarea } from "../form-textarea/form-textarea";
import type { ContactFormProps } from "./contact-form.types";
import styles from "./contact-form.module.scss";

export function ContactForm({ onFieldsChange }: ContactFormProps) {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<ContactFields>({
    defaultValues: initialContactFields,
    mode: "onBlur",
  });
  const { isLoading, message, run, status } = useAsyncStatus();
  const fields = useWatch({ control });

  useEffect(() => {
    onFieldsChange?.({
      comment: fields.comment || "",
      email: fields.email || "",
      name: fields.name || "",
      phone: fields.phone || "",
    });
  }, [fields.comment, fields.email, fields.name, fields.phone, onFieldsChange]);

  async function submitContact(fields: ContactFields) {
    await run({
      action: () => sendContactRequest(fields),
      fallbackErrorMessage: "Произошла неизвестная ошибка.",
      getSuccessMessage: (payload) => payload.message || "Сообщение отправлено.",
      onSuccess: () => reset(initialContactFields),
    });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitContact)}>
      <FormField
        error={errors.name}
        label="Имя"
        name="name"
        placeholder="Как к вам обращаться"
        register={register}
        rules={{
          minLength: {
            message: contactValidationMessages.nameMinLength,
            value: 2,
          },
          required: contactValidationMessages.nameRequired,
        }}
      />

      <div className={styles.row}>
        <FormField
          error={errors.phone}
          inputMode="tel"
          label="Телефон"
          name="phone"
          placeholder="+7 (999) 000-00-00"
          register={register}
          rules={{
            onChange: (event) => {
              event.target.value = formatPhoneInput(event.target.value);
            },
            pattern: {
              message: contactValidationMessages.phoneInvalid,
              value: phonePattern,
            },
            required: contactValidationMessages.phoneRequired,
          }}
        />

        <FormField
          error={errors.email}
          inputMode="email"
          label="Email"
          name="email"
          placeholder="name@example.com"
          register={register}
          rules={{
            onChange: (event) => {
              event.target.value = formatEmailInput(event.target.value);
            },
            pattern: {
              message: contactValidationMessages.emailInvalid,
              value: emailPattern,
            },
            required: contactValidationMessages.emailRequired,
          }}
          type="email"
        />
      </div>

      <FormTextarea
        error={errors.comment}
        label="Комментарий"
        name="comment"
        placeholder="Расскажите, чем могу быть полезен"
        register={register}
        rules={{
          minLength: {
            message: contactValidationMessages.commentMinLength,
            value: 10,
          },
          required: contactValidationMessages.commentRequired,
        }}
      />

      <div className={styles.actions}>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Отправка..." : "Отправить"}
        </Button>
      </div>

      {message ? (
        <StatusMessage status={status}>{message}</StatusMessage>
      ) : null}
    </form>
  );
}
