import "./App.css";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState({
    text: "Small steps lead to progress.",
    author: "Unknown",
  });

  async function generateQuote() {
    try {
      const response = await fetch("/api/quotes/random");

      if (!response.ok) {
        throw new Error("Failed to fetch a quote.");
      }

      const newQuote = await response.json();
      setQuote(newQuote);
    } catch (error) {
      console.error("Could not load a quote:", error);
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

      <button type="button" onClick={generateQuote}>
        Generate quote
      </button>
    </main>
  );
}

export default App;
