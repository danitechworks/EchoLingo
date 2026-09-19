import "./App.css";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState({
    text: "Small steps lead to progress.",
    author: "Unknown",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function generateQuote() {
    setIsLoading(true);
    setErrorMessage(""); // Clear any previous error message

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

  return (
    <main>
      <h1>EchoLingo </h1>
      <p> Discover a quote.Explore another language.</p>

      <blockquote>
        <p>{quote.text}</p>
        <footer>— {quote.author}</footer>
      </blockquote>

      <button type="button" onClick={generateQuote} disabled={isLoading}>
        {isLoading ? "Loading..." : "Generate quote"}
      </button>
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </main>
  );
}

export default App;
