export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

export const contactValidationMessages = {
  commentMinLength: "Комментарий должен быть не короче 10 символов.",
  commentRequired: "Добавьте комментарий.",
  emailInvalid: "Укажите корректный email.",
  emailRequired: "Укажите email.",
  nameMinLength: "Укажите имя минимум из 2 символов.",
  nameRequired: "Укажите имя.",
  phoneInvalid: "Укажите корректный телефон.",
  phoneRequired: "Укажите телефон.",
};
