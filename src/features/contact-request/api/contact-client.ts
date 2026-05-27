import type { ContactFields, ContactResponse } from "../model/types";

const contactApiUrl =
  process.env.NEXT_PUBLIC_CONTACT_API_URL ||
  "http://localhost:4000/api/contact";

async function readContactResponse(response: Response): Promise<ContactResponse> {
  try {
    return (await response.json()) as ContactResponse;
  } catch {
    return {};
  }
}

export async function sendContactRequest(fields: ContactFields) {
  let response: Response;

  try {
    response = await fetch(contactApiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    });
  } catch {
    throw new Error(
      "Не удалось подключиться к серверу формы. Проверьте, что backend запущен."
    );
  }

  const payload = await readContactResponse(response);

  if (!response.ok) {
    throw new Error(payload.message || "Не удалось отправить форму.");
  }

  return payload;
}
