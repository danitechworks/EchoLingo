import "./Navbar.css";
import lightLogo from "../assets/images/logo1.png";
import darkLogo from "../assets/images/logo-dark.png";
import type { InterfaceText, Language } from "../translations";
import { useState } from "react";

type NavbarProps = {
  text: InterfaceText;
  targetLanguage: Language;
  onLanguageChange: (value: Language) => void;
  isDark: boolean;
  isLoading: boolean;

  onToggleDark: () => void;
  onRandomQuote: () => void;
};

function Navbar({
  text,
  isDark,
  isLoading,
  targetLanguage,
  onToggleDark,
  onRandomQuote,
  onLanguageChange,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-brand">
          <img
            src={isDark ? darkLogo : lightLogo}
            alt="EchoLingo"
            className="navbar-logo"
          />
        </div>

        <button
          type="button"
          className="navbar-menu-toggle"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-controls"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <div
          id="navbar-controls"
          className={`navbar-controls ${isMenuOpen ? "is-open" : ""}`}
        >
          <button type="button" onClick={onRandomQuote} disabled={isLoading}>
            {isLoading ? text.loading : text.randomQuote}
          </button>
          {/* 
          <button type="button" disabled>
            {text.searchAuthor}
          </button> */}

          {/* <button type="button" disabled>
            {text.searchTopic}
          </button> */}

          <div className="language-menu">
            <select
              aria-label={text.selectLanguage}
              value={targetLanguage}
              disabled={isLoading}
              onChange={(event) =>
                onLanguageChange(event.target.value as Language)
              }
            >
              <option value="en">English</option>
              <option value="sv">Svenska</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>

          <button type="button" onClick={onToggleDark}>
            {isDark ? "☀ " + text.lightMode : "☾ " + text.darkMode}
          </button>
        </div>
      </div>

      <div className="navbar-tagline">
        <p>{text.tagline}</p>
      </div>
    </nav>
  );
}

export default Navbar;
