export function formatEmailInput(value: string) {
  return value.replace(/\s/g, "").toLowerCase();
}

export function formatPhoneInput(value: string) {
  let digits = value.replace(/\D/g, "");

  if (!digits) {
    return "";
  }

  if (digits.startsWith("8")) {
    digits = `7${digits.slice(1)}`;
  }

  if (digits.startsWith("7")) {
    digits = digits.slice(1);
  }

  const nationalNumber = digits.slice(0, 10);
  const area = nationalNumber.slice(0, 3);
  const prefix = nationalNumber.slice(3, 6);
  const firstPair = nationalNumber.slice(6, 8);
  const secondPair = nationalNumber.slice(8, 10);

  let formatted = "+7";

  if (area) {
    formatted += ` (${area}`;
  }

  if (area.length === 3) {
    formatted += ")";
  }

  if (prefix) {
    formatted += ` ${prefix}`;
  }

  if (firstPair) {
    formatted += `-${firstPair}`;
  }

  if (secondPair) {
    formatted += `-${secondPair}`;
  }

  return formatted;
}
