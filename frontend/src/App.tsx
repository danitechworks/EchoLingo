import "./App.css";
import Navbar from "./components/TopNavbar";
import { translations } from "./translations";
import type { Language } from "./translations";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

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

  useEffect(() => {
    document.documentElement.lang = targetLanguage;
  }, [targetLanguage]);

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
      await translateQuote(newQuote.text, targetLanguage);
    } catch (error) {
      console.error("Could not load a quote:", error);
      setErrorMessage(translations[targetLanguage].quoteError);
    } finally {
      setIsLoading(false);
    }
  }

  async function translateQuote(text: string, language: Language) {
    setErrorMessage("");
    setTranslatedText("");

    if (language === "en") {
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
          text: text,
          targetLanguage: language,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to translate the quote.");
      }
      const translation = await response.json();
      setTranslatedText(translation.translatedText);
    } catch (error) {
      console.error("Could not translate:", error);
      setErrorMessage("");
      setTranslatedText("");
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
          void translateQuote(quote.text, value);
        }}
      />
      <section className="desk-scene">
        <blockquote className="quote-card">
          {isLoading ? (
            <p role="status">{translations[targetLanguage].loading}</p>
          ) : (
            <>
              <p className="quote">{translatedText || quote.text}</p>
              <footer>— {quote.author}</footer>
            </>
          )}
          {errorMessage && <p role="alert">{errorMessage}</p>}
        </blockquote>
      </section>
      <Footer text={translations[targetLanguage]} />
    </main>
  );
}

export default App;
