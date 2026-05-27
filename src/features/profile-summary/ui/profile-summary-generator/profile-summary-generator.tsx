"use client";

import { useAsyncStatus } from "@/shared/lib";
import { Button, StatusMessage } from "@/shared/ui";
import { requestProfileSummary } from "../../api/summary-client";
import type { ProfileSummaryGeneratorProps } from "./profile-summary-generator.types";
import styles from "./profile-summary-generator.module.scss";

export function ProfileSummaryGenerator({
  input,
}: ProfileSummaryGeneratorProps) {
  const { isLoading, message, run, status } = useAsyncStatus();

  async function generateSummary() {
    await run({
      action: () => requestProfileSummary(input),
      fallbackErrorMessage: "Не удалось сформулировать вопрос.",
      getSuccessMessage: (summary) => summary,
    });
  }

  return (
    <div className={styles.generator}>
      <Button
        type="button"
        onClick={generateSummary}
        disabled={isLoading}
        fullWidth
        variant="secondary"
      >
        {isLoading ? "AI думает..." : "AI-вопрос"}
      </Button>

      {message ? (
        <StatusMessage
          className={styles.message}
          errorTitle="Ошибка AI-helper"
          status={status}
          successTitle="Вариант вопроса"
        >
          {message}
        </StatusMessage>
      ) : null}
    </div>
  );
}
