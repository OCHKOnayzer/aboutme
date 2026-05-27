import OpenAI from "openai";

type SummaryInput = {
  focus: string;
  name: string;
  stack: string;
};

const openRouterBaseUrl =
  process.env.OPENROUTER_BASE_URL || "https://openrouter.ai/api/v1";
const model =
  process.env.OPENROUTER_MODEL ||
  process.env.OPENAI_MODEL ||
  "openai/gpt-4o-mini";

function createClient() {
  const apiKey =
    process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY is not configured.");
  }

  const useOpenRouter = Boolean(process.env.OPENROUTER_API_KEY);

  return new OpenAI({
    apiKey,
    baseURL: useOpenRouter ? openRouterBaseUrl : undefined,
    defaultHeaders: useOpenRouter
      ? {
          "HTTP-Referer":
            process.env.OPENROUTER_SITE_URL || "http://localhost:3000",
          "X-Title": "Developer Landing",
        }
      : undefined,
  });
}

export async function generateProfileSummary(input: SummaryInput) {
  const client = createClient();

  const response = await client.chat.completions.create({
    model,
    max_tokens: 180,
    messages: [
      {
        role: "system",
        content:
          "Ты помогаешь посетителю лендинга fullstack-разработчика Антона сформулировать понятный вопрос или сообщение для формы обратной связи.",
      },
      {
        role: "user",
        content: [
          "Сгенерируй короткий вопрос или сообщение, которое посетитель может отправить Антону через форму.",
          `Имя отправителя: ${input.name}`,
          `Темы, с которыми может помочь Антон: ${input.stack}`,
          `Черновик или контекст от отправителя: ${input.focus}`,
          "Требования: русский язык, 1-2 предложения, от первого лица отправителя, без markdown, без кавычек, конкретно и вежливо. Не описывай Антона, сформулируй обращение к нему.",
        ].join("\n"),
      },
    ],
  });

  const summary = response.choices[0]?.message?.content?.trim();

  if (!summary) {
    throw new Error("OpenRouter вернул пустой ответ.");
  }

  return summary;
}
