import type { InterfaceText } from "../translations";

type FooterProps = {
  text: InterfaceText;
};

function Footer({ text }: FooterProps) {
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
            {text.designedAndDevelopedBy} Dannell Bayer
            <span className="footer-dot" aria-hidden="true">
              &middot;
            </span>
            {currentYear}
          </p>
        </div>

        <nav className="footer-links" aria-label={text.creatorLinks}>
          <a
            href="https://dannellbayer.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={text.visitPortfolio}
            title={text.portfolio}
          >
            <span>{text.portfolio}</span>
          </a>

          <a
            href="https://www.linkedin.com/in/dannell-bayer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={text.visitLinkedIn}
            title="LinkedIn"
          >
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/danitechworks"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={text.visitGitHub}
            title="GitHub"
          >
            <span>GitHub</span>
          </a>

          <a
            href="https://www.youtube.com/@DanisITdesk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={text.visitYouTube}
            title="YouTube"
          >
            <span>YouTube</span>
          </a>

          <a
            href="mailto:danibayer2003@gmail.com"
            aria-label={text.emailDannell}
            title={text.email}
          >
            <span>{text.email}</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
