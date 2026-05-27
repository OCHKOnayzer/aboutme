import type { ProfileSummaryInput } from "../model/types";

type SummaryResponse = {
  message?: string;
  summary?: string;
};

export async function requestProfileSummary(input: ProfileSummaryInput) {
  const response = await fetch("/api/ai-summary", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: input.name || "Антон",
      stack:
        input.stack ||
        "TypeScript, React, Next.js, Node.js, PostgreSQL, REST API",
      focus: input.focus || "fullstack-разработка и интеграция с API",
      nonce: crypto.randomUUID(),
    }),
  });
  const payload = (await response.json()) as SummaryResponse;

  if (!response.ok) {
    throw new Error(payload.message || "AI-helper недоступен.");
  }

  return payload.summary || "";
}
