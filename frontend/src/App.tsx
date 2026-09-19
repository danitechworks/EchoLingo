import "./App.css";
import { useState } from "react";
import Navbar from "./components/TopNavbar";
import { translations } from "./translations";
import type { Language } from "./translations";

function App() {
  const [quote, setQuote] = useState({
    text: "Small steps lead to progress.",
    author: "Unknown",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState<Language>("en");
  const [translatedText, setTranslatedText] = useState("");
  const [isDark, setIsDark] = useState(false);

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
    <main className={`app ${isDark ? "dark" : ""}`}>
      <Navbar
        text={translations[targetLanguage]}
        isDark={isDark}
        isLoading={isLoading}
        targetLanguage={targetLanguage}
        onToggleDark={() => setIsDark(!isDark)}
        onRandomQuote={generateQuote}
        onLanguageChange={(value) => {
          setTargetLanguage(value);
          setTranslatedText("");
          setErrorMessage("");
        }}
      />

      <blockquote className="quote-card">
        <p className="quote">{quote.text}</p>
        <footer>— {quote.author}</footer>
      </blockquote>
    </main>
  );
}

export default App;
