import { referenceUrls, normalizeReferenceUrl } from "./referenceUrls";
import { siteUrl } from "./site";

export function SiteFooter() {
  const currentSite = normalizeReferenceUrl(siteUrl);
  const urls = referenceUrls.filter((url) => normalizeReferenceUrl(url) !== currentSite);

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-copy">
          <span className="eyebrow">Source references</span>
          <h2>UAE Buyer Guide uses public reference websites for discovery context.</h2>
          <p>
            For the most accurate business details, opening hours, ownership information,
            category updates, or correction requests, contact the original websites directly.
          </p>
        </div>

        <div className="footer-links" aria-label="Reference URLs">
          {urls.map((url) => (
            <a href={url} key={url} target="_blank" rel="noreferrer">
              {url}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <strong>UAE Buyer Guide</strong>
        <span>Compare useful UAE websites before you visit.</span>
      </div>
    </footer>
  );
}
