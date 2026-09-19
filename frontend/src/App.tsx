import "./App.css";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState({
    text: "Small steps lead to progress.",
    author: "Unknown",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("en");
  const [translatedText, setTranslatedText] = useState("");

  async function generateQuote() {
    setIsLoading(true);
    setErrorMessage("");
    setTranslatedText("");

    try {
      const response = await fetch("/api/quotes/random");
      if (!response.ok) {
        throw new Error("Failed to fetch a quote.");
      }
      const newQuote = await response.json();
      setQuote(newQuote);
    } catch (error) {
      console.error("Could not load a quote:", error);
      setErrorMessage("Could not load a quote. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  async function translateQuote() {
    setErrorMessage("");
    setTranslatedText("");

    if (targetLanguage === "en") {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: quote.text,
          targetLanguage: targetLanguage,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to translate the quote.");
      }
      const translation = await response.json();
      setTranslatedText(translation.translatedText);
    } catch (error) {
      console.error("Could not translate:", error);
      setErrorMessage("Could not translate the quote. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <h1>EchoLingo</h1>
      <p>Discover a quote. Explore another language.</p>

      <blockquote>
        <p>{quote.text}</p>
        <footer>— {quote.author}</footer>
      </blockquote>

      <button type="button" onClick={generateQuote} disabled={isLoading}>
        {isLoading ? "Loading..." : "Generate quote"}
      </button>
      {errorMessage && <p role="alert">{errorMessage}</p>}

      <div>
        <label htmlFor="target-language">Translate into: </label>
        <select
          id="target-language"
          value={targetLanguage}
          disabled={isLoading}
          onChange={(event) => {
            setTargetLanguage(event.target.value);
            setTranslatedText("");
            setErrorMessage("");
          }}
        >
          <option value="en">English</option>
          <option value="sv">Swedish</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </div>

      <button
        type="button"
        onClick={translateQuote}
        disabled={isLoading || targetLanguage === "en"}
      >
        Translate
      </button>

      {translatedText && (
        <section>
          <h2>Translation</h2>
          <p>{translatedText}</p>
        </section>
      )}
    </main>
  );
}

export default App;
