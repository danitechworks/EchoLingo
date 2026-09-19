import "./App.css";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState({
    text: "Small steps lead to progress.",
    author: "Unknown",
  });

  return (
    <main>
      <h1>EchoLingo </h1>
      <p> Discover a quote.Explore another language.</p>

      <blockquote>
        <p>{quote.text}</p>
        <footer>— {quote.author}</footer>
      </blockquote>

      <button
        type="button"
        onClick={() =>
          setQuote({
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs",
          })
        }
      >
        Generate quote{" "}
      </button>
    </main>
  );
}

export default App;
