# EchoLingo

EchoLingo is a full-stack quote application that presents a random quote on a responsive desk-and-parchment interface, then translates the quote and interface into the selected language.

## Features

- Random quotes from DummyJSON, requested through an ASP.NET Core API.
- English, Swedish, Spanish, French, and German interface text.
- Quote translation through MyMemory.
- Light and dark desk scenes, with a responsive navigation menu.
- Loading feedback and localized error messages.

## Technology

- Backend: ASP.NET Core Web API on .NET 10, C#, controllers, DTOs, dependency injection, `HttpClient`, and async requests.
- Frontend: React, TypeScript, Vite, and responsive CSS.

## Run locally

Start the backend from the repository root:

```powershell
dotnet run --project .\backend\EchoLingo.csproj
```

In a second terminal, start the frontend:

```powershell
cd frontend
npm install
npm run dev
```

Vite serves the frontend at `http://localhost:5173`. Its development proxy targets the backend URL configured in `frontend/vite.config.ts`.

## API endpoints

- `GET /api/quotes/random` returns a random quote.
- `POST /api/translate` accepts `text` and `targetLanguage`, then returns `translatedText`.

## External services

- [DummyJSON Quotes](https://dummyjson.com/docs/quotes) supplies random quotes.
- [MyMemory](https://mymemory.translated.net/doc/spec.php) provides translations. Its free service has request and text-size limits.

## License

EchoLingo is available under the [MIT License](LICENSE.txt).
