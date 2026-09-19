import logo from "../assets/images/logo1.png";

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
      <div className="navbar-brand">
        <img src={logo} alt="EchoLingo" className="navbar-logo" />
      </div>

      <div className="navbar-controls">
        <button type="button" onClick={onRandomQuote} disabled={isLoading}>
          {isLoading ? "Loading..." : "Random Quote"}
        </button>

        <div className="nav-group">
          <label htmlFor="target-language">Language</label>

          <select
            id="target-language"
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
    </nav>
  );
}

export default Navbar;
