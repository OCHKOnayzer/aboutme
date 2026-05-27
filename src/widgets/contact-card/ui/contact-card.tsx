"use client";

import { useCallback, useState } from "react";
import {
  ContactForm,
  initialContactFields,
  type ContactFields,
} from "@/features/contact-request";
import { ProfileSummaryGenerator } from "@/features/profile-summary";
import { Card } from "@/shared/ui";
import styles from "./contact-card.module.scss";

export function ContactCard() {
  const [contactFields, setContactFields] =
    useState<ContactFields>(initialContactFields);

  const handleFieldsChange = useCallback((fields: ContactFields) => {
    setContactFields(fields);
  }, []);

  return (
    <Card className={styles.card}>
      <ContactForm onFieldsChange={handleFieldsChange} />
      <ProfileSummaryGenerator
        input={{
          focus: contactFields.comment,
          name: contactFields.name,
        }}
      />
    </Card>
  );
}
