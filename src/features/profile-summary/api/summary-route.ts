import { generateProfileSummary } from "./openai-summary-service";

type SummaryPayload = {
  focus?: unknown;
  name?: unknown;
  stack?: unknown;
};

function text(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as SummaryPayload;
    const summary = await generateProfileSummary({
      focus: text(payload.focus, "fullstack-задачи и интеграции с API"),
      name: text(payload.name, "Антон"),
      stack: text(
        payload.stack,
        "TypeScript, React, Next.js, Node.js, PostgreSQL"
      ),
    });

    return Response.json({ provider: "openrouter", summary });
  } catch (error) {
    const isMissingKey =
      error instanceof Error && error.message.includes("OPENROUTER_API_KEY");

    return Response.json(
      {
        message: isMissingKey
          ? "OPENROUTER_API_KEY не настроен. Добавьте ключ в .env.local."
          : "Не удалось сформулировать AI-вопрос.",
      },
      { status: 500 }
    );
  }
}
