# Developer landing

Лендинг-презентация Антона, fullstack-разработчика. Проект закрывает тестовое задание: адаптивная вёрстка, FSD-структура, форма обратной связи с backend, отправка писем владельцу и копии пользователю, AI-helper через OpenRouter/OpenAI-compatible API.

## Ссылки

- **GitHub:** https://github.com/OCHKOnayzer
- **Деплой:** _добавьте ссылку на Vercel/Railway после публикации_

## Запуск

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Открыть: http://localhost:3000.

Форма отправляет данные напрямую в `contact-mail-api`. Для писем нужен запущенный backend с настроенным SMTP.

Нужен запущенный `contact-mail-api` на порту 4000.

### Production

```bash
pnpm build
pnpm start
```

Backend в production: см. `../contact-mail-api/README.md` (Railway, Render, VPS).

## Стек

| Слой | Технологии |
|------|------------|
| Frontend | Next.js 16, React 19, TypeScript, SCSS Modules, React Hook Form |
| API | Внешний `contact-mail-api` для формы, Next route только для AI (`/api/ai-summary`) |
| Backend | Отдельный проект `../contact-mail-api` (Express, SMTP / ваша почта) |
| AI | OpenAI SDK + OpenRouter (`openai/gpt-4o-mini` по умолчанию) |

Структура: Feature-Sliced Design — `app`, `views`, `widgets`, `features`, `shared`, с разделением UI, model и api.

## Форма обратной связи

**Поля:** имя, телефон, email, комментарий.

**Цепочка:**

1. `ContactForm` (клиент) — валидация через react-hook-form, состояния `idle` / `loading` / `success` / `error`.
2. `contact-client` отправляет форму напрямую в `NEXT_PUBLIC_CONTACT_API_URL`.
3. `contact-mail-api` валидирует тело запроса через Zod и отправляет два письма: владельцу (`SITE_OWNER_EMAIL`) и копию на email пользователя.

При ошибке backend возвращает понятное сообщение, которое форма показывает пользователю.

## AI-интеграция

Кнопка **«AI-вопрос»** в форме вызывает `POST /api/ai-summary`. Сервер помогает посетителю сформулировать короткое обращение или вопрос по данным формы.

Требуется `OPENROUTER_API_KEY` в `.env.local` (OpenRouter, совместим с OpenAI SDK).

## AI-инструменты в разработке проекта

| С помощью ИИ | Вручную |
|--------------|---------|
| Каркас Next.js, FSD-структура, черновики компонентов | Контент из `stage.txt`, правка дат и формулировок опыта |
| Черновики route handlers и Express-сервера | Настройка SMTP (Yandex), проверка доставки писем |
| Промпт и интеграция OpenRouter (OpenAI SDK) | Валидация формы, обработка ошибок, UX состояний формы |
| Черновики SCSS-разметки секций | Навигация, семантика, финальная вёрстка и адаптив |

## Что оценивается в тестовом

- **Frontend:** секции «О себе», «Подход + AI», «Кейсы», «Контакты», адаптив, loading/success/error.
- **API:** полный цикл формы frontend → `contact-mail-api` → SMTP.
- **AI:** рабочий helper + описание подхода к AI в секции Workflow.
- **Проект:** README, `.env.example`, разделение features.
