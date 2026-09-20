# EchoLingo

> Quotes that travel across languages.

EchoLingo is a multilingual quote experience built around the idea that good words shouldn’t stop at language borders.

Behind its parchment-and-desk interface is a React + TypeScript frontend and an ASP.NET Core Web API that handles quote retrieval, translation, localization, and communication with external services.

## Features

- Fetches random quotes through a custom ASP.NET Core API.
- Translates quotes into English, Swedish, Spanish, French, or German.
- Localizes navigation, loading feedback, error messages, footer copy, and accessibility labels.
- Uses responsive desktop and mobile desk scenes with separate light and dark modes.
- Keeps the quote visually aligned with the parchment across screen sizes.
- Provides loading states and localized, user-friendly error messages.
- Uses semantic HTML and updates the document `lang` attribute when the selected language changes.
- Keeps third-party API calls behind the backend rather than exposing them directly to the frontend.

## Tech stack

| Area               | Tools and approach                                                 |
| ------------------ | ------------------------------------------------------------------ |
| Frontend           | React 19, TypeScript, Vite, responsive CSS                         |
| Backend            | ASP.NET Core Web API on .NET 10                                    |
| Application design | Controllers, service layer, interfaces, DTOs, dependency injection |
| External calls     | `IHttpClientFactory`, `HttpClient`, `async` / `await`              |
| Quote source       | [DummyJSON Quotes](https://dummyjson.com/docs/quotes)              |
| Translation source | [MyMemory](https://mymemory.translated.net/doc/spec.php)           |

EchoLingo was built as a compact portfolio project to practice the parts of full-stack development that sit between a polished interface and external services: API design, service boundaries, dependency injection, asynchronous HTTP calls, DTO mapping, error handling, and responsive React state.

## API

| Method | Endpoint             | Purpose                                                    |
| ------ | -------------------- | ---------------------------------------------------------- |
| `GET`  | `/api/quotes/random` | Returns a random quote and author.                         |
| `POST` | `/api/translate`     | Translates supplied text into a requested target language. |

Example translation request:

```json
{
  "text": "Small steps lead to progress.",
  "targetLanguage": "sv"
}
```

Example response:

```json
{
  "translatedText": "Små steg leder till framsteg."
}
```

## Run locally

### Prerequisites

- .NET 10 SDK
- Node.js
- npm

### 1. Start the API

Start the backend from the repository root.

The default local backend address is:

```text
http://localhost:5000
```

### 2. Start the frontend

In a second terminal, start the frontend.

Vite serves the frontend at:

```text
http://localhost:5173
```

The development proxy in `frontend/vite.config.ts` forwards `/api` requests to the backend at `http://localhost:5000`.

Open `http://localhost:5173` in a browser.

## External services

[DummyJSON Quotes](https://dummyjson.com/docs/quotes) supplies random quotes.

[MyMemory](https://mymemory.translated.net/doc/spec.php) provides translations. Its free service has request and text-size limits.

## Project status

Version one focuses on random quotes, translation, localization, and responsive presentation.

Author and topic search are planned as future enhancements and are intentionally excluded until a dependable quote provider supports those filters without exposing credentials.

## License

Distributed under the [MIT License](LICENSE.txt).

© 2026 Dannell Bayer
