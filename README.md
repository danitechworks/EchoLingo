# EchoLingo

> Quotes that travel across languages.

EchoLingo is a full-stack web application that fetches a random quote, presents it on a responsive desk-and-parchment interface, and translates the active quote and interface into the visitor's selected language.

![EchoLingo preview](frontend/src/assets/images/preview.png)

## Why this project exists

EchoLingo is a compact portfolio project built to practice the parts of full-stack development that sit between a polished interface and external services: API design, service boundaries, dependency injection, asynchronous HTTP calls, DTO mapping, error handling, and responsive React state.

The frontend never calls third-party services directly. The ASP.NET Core API owns those integrations and returns a deliberately small, stable contract to the client.

## Highlights

- Fetches random quotes through a custom .NET 10 API.
- Translates the active quote into English, Swedish, Spanish, French, or German.
- Localizes navigation, loading feedback, error messages, footer copy, and accessibility labels alongside quote content.
- Uses responsive desk scenes for desktop and mobile, with separate light and dark modes.
- Keeps the quote visually aligned to the parchment, including its desktop angle.
- Provides loading states and localized, user-friendly errors when an API request fails.
- Uses semantic HTML and updates the document `lang` attribute when the language changes.

## Architecture

```text
React + TypeScript client
        │  /api requests
        ▼
ASP.NET Core Web API
        ├── QuoteService ───────► DummyJSON Quotes
        └── TranslationService ─► MyMemory
```

The Vite development server proxies `/api` requests to the backend, which also avoids exposing external-provider implementation details to the browser.

## Tech stack

| Area | Tools and approach |
| --- | --- |
| Frontend | React 19, TypeScript, Vite, responsive CSS |
| Backend | ASP.NET Core Web API on .NET 10 |
| Application design | Controllers, service layer, interfaces, DTOs, dependency injection |
| External calls | `IHttpClientFactory`, `HttpClient`, `async`/`await` |
| Quote source | [DummyJSON Quotes](https://dummyjson.com/docs/quotes) |
| Translation source | [MyMemory](https://mymemory.translated.net/doc/spec.php) |

## API

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/api/quotes/random` | Returns a random quote and author. |
| `POST` | `/api/translate` | Translates supplied text into a requested target language. |

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
- Node.js and npm

### 1. Start the API

From the repository root:

```powershell
dotnet run --project .\backend\EchoLingo.csproj
```

The default local backend address is `http://localhost:5000`.

### 2. Start the frontend

In a second terminal:

```powershell
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` in a browser. The Vite proxy is configured to forward `/api` requests to `http://localhost:5000`.

## Validation

From `frontend`:

```powershell
npm run build
npm run lint
```

## Project status

Version one focuses on random quotes, translation, localization, and a responsive presentation. Author and topic search remain future enhancements; they are intentionally excluded until a dependable quote provider supports those filters without exposing credentials.

## License

Distributed under the [MIT License](LICENSE.txt). © 2026 Dannell Bayer.
