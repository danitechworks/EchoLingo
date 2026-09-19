import lightLogo from "../assets/images/logo1.png";
import darkLogo from "../assets/images/logo-dark.png";

type NavbarProps = {
  isDark: boolean;
  isLoading: boolean;
  targetLanguage: string;

  onToggleDark: () => void;
  onRandomQuote: () => void;
  onLanguageChange: (value: string) => void;
};

function Navbar({
  isDark,
  isLoading,
  targetLanguage,
  onToggleDark,
  onRandomQuote,
  onLanguageChange,
}: NavbarProps) {
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

        <div className="navbar-controls">
          <button type="button" onClick={onRandomQuote} disabled={isLoading}>
            {isLoading ? "Loading..." : "Random Quote"}
          </button>

          <button type="button" disabled>
            Search by Author
          </button>

          <button type="button" disabled>
            Search by Topic
          </button>

          <div className="language-menu">
            <select
              aria-label="Select language"
              value={targetLanguage}
              disabled={isLoading}
              onChange={(event) => onLanguageChange(event.target.value)}
            >
              <option value="en">English</option>
              <option value="sv">Swedish</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>

          <button type="button" onClick={onToggleDark}>
            {isDark ? "☀ Light" : "☾ Dark"}
          </button>
        </div>
      </div>

      <div className="navbar-tagline">
        <p>Words carry meaning beyond borders</p>
      </div>
    </nav>
  );
}

export default Navbar;
