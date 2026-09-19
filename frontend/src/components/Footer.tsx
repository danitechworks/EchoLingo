function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-info">
          <div className="footer-brand">
            <span className="footer-wordmark" aria-label="EchoLingo">
              <span className="footer-wordmark-echo">Echo</span>
              <span className="footer-wordmark-lingo">Lingo</span>
            </span>
          </div>

          <p className="footer-copy">
            Designed and developed by Dannell Bayer
            <span className="footer-dot" aria-hidden="true">
              &middot;
            </span>
            {currentYear}
          </p>
        </div>

        <nav className="footer-links" aria-label="Creator links">
          <a
            href="https://dannellbayer.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Dannell Bayer's portfolio"
            title="Portfolio"
          >
            <i className="fa-solid fa-globe" aria-hidden="true"></i>
            <span>Portfolio</span>
          </a>

          <a
            href="https://www.linkedin.com/in/dannell-bayer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Dannell Bayer on LinkedIn"
            title="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/danitechworks"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Dani on GitHub"
            title="GitHub"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i>
            <span>GitHub</span>
          </a>

          <a
            href="https://www.youtube.com/@DanisITdesk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Dani's IT Desk on YouTube"
            title="YouTube"
          >
            <i className="fa-brands fa-youtube" aria-hidden="true"></i>
            <span>YouTube</span>
          </a>

          <a
            href="mailto:danibayer2003@gmail.com"
            aria-label="Email Dannell Bayer"
            title="Email"
          >
            <i className="fa-solid fa-envelope" aria-hidden="true"></i>
            <span>Email</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
